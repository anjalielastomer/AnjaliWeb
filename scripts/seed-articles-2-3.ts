import fs from 'fs'
import { getPayload } from 'payload'
import config from '@payload-config'

// Seeder for Articles #2 and #3. Run with:
//   npx payload run scripts/seed-articles-2-3.ts
// Same approach as seed-article-1.ts: Local API uploads (no Vercel 4.5MB limit),
// idempotent media reuse, inline images embedded as <figure><img> (relative
// /api/media/file/... URLs), article created published.

const DOWNLOADS = '/Users/sumanjain/Downloads'

const payload = await getPayload({ config })

const uploadImage = async (file: string, name: string, alt: string): Promise<string> => {
  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: name } },
    limit: 1,
  })
  if (existing.docs[0]) {
    payload.logger.info(`media "${name}" already exists (id ${existing.docs[0].id}) — reusing`)
    return existing.docs[0].url as string
  }
  const buffer = fs.readFileSync(`${DOWNLOADS}/${file}`)
  const doc = await payload.create({
    collection: 'media',
    data: { alt },
    file: { data: buffer, mimetype: 'image/jpeg', name, size: buffer.length },
  })
  payload.logger.info(`uploaded "${name}" (id ${doc.id})`)
  return doc.url as string
}

const findMediaId = async (name: string): Promise<number> => {
  const r = await payload.find({ collection: 'media', where: { filename: { equals: name } }, limit: 1 })
  return r.docs[0].id as number
}

const fig = (url: string, alt: string) => `<figure><img src="${url}" alt="${alt}"></figure>`

const createArticle = async (opts: {
  title: string
  short_description: string
  coverName: string
  read_time_text: string
  content: string
}) => {
  const dupe = await payload.find({
    collection: 'articles',
    where: { title: { equals: opts.title } },
    limit: 1,
  })
  if (dupe.docs.length) {
    payload.logger.warn(`article "${opts.title}" already exists (id ${dupe.docs[0].id}) — skipping`)
    return
  }
  const coverId = await findMediaId(opts.coverName)
  const article = await payload.create({
    collection: 'articles',
    data: {
      title: opts.title,
      short_description: opts.short_description,
      cover_image: coverId,
      author: 'Anjali Elastomer',
      publish_time: new Date().toISOString(),
      read_time_text: opts.read_time_text,
      content: opts.content,
      _status: 'published',
    },
  })
  payload.logger.info(`Created article id ${article.id}: ${opts.title}`)
}

// ============================ ARTICLE 2 ============================
const alt2a = 'Rail maintenance equipment and a work crew in hi-vis beside a railway track'
const alt2b = 'Close-up of rail fastening system with bolts, baseplates and rail-adjustment tooling'
const alt2c = 'Rubber level-crossing panels laid between the rails at a road crossing'

const u2b = await uploadImage('2b.jpg', '2b-article.jpg', alt2b)
const u2c = await uploadImage('2c.jpg', '2c-article.jpg', alt2c)
await uploadImage('2a.jpg', '2a-article.jpg', alt2a) // cover

const content2 = `
<p>Railway systems are built for endurance. They carry passengers and freight across long distances, often operating around the clock under demanding conditions. Because railway infrastructure is exposed to heavy loads, continuous vibration, changing weather, and repeated mechanical impact, the quality of every component matters. Among the most important yet often overlooked components are elastomer products.</p>
<p>High-quality elastomer products play a major role in railway safety and cost efficiency. They help protect tracks, reduce vibration, control movement, and improve the overall stability of the system. When properly engineered and manufactured, they can also reduce maintenance expenses and extend the lifecycle of critical assets.</p>

<h2>Why safety starts with the right materials</h2>
<p>Safety in rail infrastructure is not limited to signalling systems, braking systems, or operator procedures. It also depends on the physical condition of track components and support materials. Elastomer products help control how forces move through the rail system.</p>
<p>When trains pass over tracks, they generate repeated dynamic loads. Without adequate cushioning and load distribution, those forces can create stress points that lead to wear, loosening, cracking, and deterioration. Quality elastomer products reduce these effects and help the system remain stable over time.</p>

<h2>The safety benefits of quality elastomer products</h2>
<h3>1. Shock absorption</h3>
<p>One of the primary roles of elastomers is to absorb impact. This reduces the direct transfer of shock from wheels to rails, and from rails to the supporting structure.</p>
<h3>2. Vibration reduction</h3>
<p>Vibration can damage both railway infrastructure and surrounding structures. Elastomeric materials help dampen vibration and reduce its propagation.</p>
<h3>3. Better load distribution</h3>
<p>Rail systems carry immense weight. Elastomer products help spread these forces more evenly, which reduces local stress and the risk of premature failure.</p>
<h3>4. Noise control</h3>
<p>In urban and metro environments, reducing noise is an important part of public comfort and operational compliance. Elastomer products can help manage noise transmission.</p>
<h3>5. Improved interface protection</h3>
<p>Where metal, concrete, and fastening systems meet, elastomeric materials act as a protective layer. This helps prevent direct wear and friction damage.</p>

${fig(u2b, alt2b)}

<h2>What happens when quality is poor?</h2>
<p>Low-quality elastomer products may look similar on the surface, but they can perform very differently in service. Poor material selection or inconsistent manufacturing can lead to:</p>
<ul>
<li>Early cracking</li>
<li>Loss of flexibility</li>
<li>Poor compression recovery</li>
<li>Faster wear</li>
<li>Dimensional instability</li>
<li>Reduced service life</li>
</ul>
<p>When this happens, the cost of replacement is only part of the problem. There may also be operational disruption, inspection delays, and damage to adjacent components.</p>

<h2>Lifecycle cost: the hidden economics of better quality</h2>
<p>A railway project should be judged over its full operational life, not just at the time of procurement. Quality elastomer products can reduce lifecycle costs in multiple ways.</p>
<h3>Lower replacement frequency</h3>
<p>Better materials usually last longer, which means fewer replacements over time.</p>
<h3>Reduced maintenance labour</h3>
<p>If components perform reliably, maintenance teams spend less time on corrective work.</p>
<h3>Fewer service interruptions</h3>
<p>Track maintenance often requires scheduling downtime. Fewer failures mean less disruption to operations.</p>
<h3>Protection of surrounding assets</h3>
<p>By absorbing stress and vibration, elastomer products reduce wear on rails, fasteners, sleepers, and base structures.</p>
<h3>Better long-term performance</h3>
<p>A stable system delivers more predictable performance, helping railway operators plan with confidence.</p>

${fig(u2c, alt2c)}

<h2>Where quality matters most</h2>
<p>Elastomer products are used in many parts of railway infrastructure, but quality is especially important in:</p>
<ul>
<li>High-frequency metro corridors</li>
<li>Heavy-load freight routes</li>
<li>Ballasted and ballastless tracks</li>
<li>Bridge interfaces</li>
<li>Depot and yard systems</li>
<li>Brake-related applications</li>
</ul>
<p>In each of these areas, repeated force and environmental exposure make durability essential.</p>

<h2>Materials and manufacturing matter</h2>
<p>The performance of an elastomer product depends on both material formulation and manufacturing precision. A well-designed product should be made to deliver consistent properties such as:</p>
<ul>
<li>Elasticity</li>
<li>Compression resistance</li>
<li>Wear resistance</li>
<li>Environmental stability</li>
<li>Heat and load tolerance</li>
<li>Uniformity across batches</li>
</ul>
<p>This is why buyers should not evaluate only price. They should also review design intent, manufacturing process, testing standards, and documented quality assurance practices.</p>

<h2>The procurement perspective</h2>
<p>For railway procurement teams, the goal is not merely to purchase parts. It is to procure reliability. That means focusing on suppliers who can demonstrate quality control, technical understanding, and consistency.</p>
<p>Key questions to ask include:</p>
<ul>
<li>Has the product been designed for railway use?</li>
<li>Is the material suitable for the expected load and environment?</li>
<li>What testing has been done?</li>
<li>Does the supplier maintain quality across batches?</li>
<li>Can the product support the intended lifecycle of the project?</li>
</ul>
<p>Procurement decisions made with these questions in mind tend to produce better long-term outcomes.</p>

<h2>A better investment for the future</h2>
<p>Rail infrastructure is expensive to build and expensive to maintain. Any product that improves durability and lowers maintenance pressure creates value over time. Quality elastomer products are one of those investments.</p>
<p>They support safer rail operations, reduce wear, control vibration, and help infrastructure last longer. In that sense, their value extends well beyond their physical size.</p>

<h2>Conclusion</h2>
<p>Quality elastomer products are an essential part of modern railway safety and lifecycle efficiency. They help reduce impact, protect assets, and lower maintenance burdens across the life of the system. For railway operators, contractors, and procurement teams, choosing the right elastomer products is not simply a technical preference. It is a strategic decision that affects safety, reliability, and cost.</p>
`.trim()

await createArticle({
  title: 'How Quality Elastomer Products Improve Railway Safety and Reduce Lifecycle Costs',
  short_description:
    'Why high-quality elastomer products are central to railway safety and lifecycle economics — from shock absorption, vibration control and load distribution to lower maintenance, fewer failures, and smarter procurement.',
  coverName: '2a-article.jpg',
  read_time_text: '6 min read',
  content: content2,
})

// ============================ ARTICLE 3 ============================
const alt3a = 'Rubber sleeper pads and baseplate components arranged on a bed of white polymer granules'
const alt3b = 'Wide view of a busy railway junction with multiple tracks, points and overhead lines'
const alt3c = 'Rubber level-crossing panels between the rails where a road crosses the railway line'

const u3b = await uploadImage('3b.jpg', '3b-article.jpg', alt3b)
const u3c = await uploadImage('3c.jpg', '3c-article.jpg', alt3c)
await uploadImage('3a.jpg', '3a-article.jpg', alt3a) // cover

const content3 = `
<p>Railway projects require a high level of technical accuracy. Every component must perform reliably, fit properly, and support long-term operational safety. This is especially true for rubber and elastomer-based components, which play a key role in shock absorption, vibration control, fastening support, and structural protection.</p>
<p>For buyers, procurement teams, and project engineers, selecting the right railway rubber component is not just about price. It is about ensuring performance, durability, and compliance with project requirements. A smart procurement decision can reduce lifecycle costs, improve safety, and avoid costly delays later in the project.</p>

<h2>Why railway rubber components are different</h2>
<p>Not every rubber product is suitable for railway use. Railway environments are demanding. Components must withstand:</p>
<ul>
<li>Heavy static and dynamic loads</li>
<li>Repeated vibration</li>
<li>Temperature changes</li>
<li>Moisture and weather exposure</li>
<li>Long operating cycles</li>
<li>Constant mechanical stress</li>
</ul>
<p>Because of these conditions, railway rubber components must be engineered for toughness and consistency. They are expected to perform under pressure for long periods without losing shape, flexibility, or strength.</p>

<h2>Common railway rubber components</h2>
<p>Depending on the application, railway rubber products may include:</p>
<ul>
<li>Rail pads</li>
<li>Bearing pads</li>
<li>Vibration isolation products</li>
<li>Brake shoe and brake pad materials</li>
<li>Support and cushioning elements</li>
<li>Track interface components</li>
</ul>
<p>Each component serves a specific function, but all contribute to safe and stable railway operation.</p>

${fig(u3b, alt3b)}

<h2>What buyers should evaluate</h2>
<p>Before procurement, buyers should review several critical factors.</p>
<h3>1. Technical suitability</h3>
<p>The product must match the specific application. A component designed for one rail environment may not be appropriate for another. For example, metro rail, freight rail, and bridge interfaces can require different performance characteristics.</p>
<h3>2. Material quality</h3>
<p>The rubber or elastomer formulation should be suitable for the load, environmental conditions, and expected service life. Buyers should understand whether the material has the required resilience, compression set, and wear resistance.</p>
<h3>3. Manufacturing consistency</h3>
<p>A product may perform well in testing but fail in service if quality varies across batches. Consistent manufacturing is essential in railway procurement.</p>
<h3>4. Durability</h3>
<p>Buyers should look beyond first-use performance and consider how the component will behave over time. Durability reduces replacement frequency and lowers overall maintenance costs.</p>
<h3>5. Inspection and testing</h3>
<p>Testing is central to railway procurement. Buyers should ask what quality checks have been performed, how the product was evaluated, and whether the supplier can provide supporting documentation.</p>

<h2>The importance of compliance and approval</h2>
<p>Railway procurement often involves specific standards, technical specifications, and approval processes. Buyers should always confirm that the supplier understands the relevant requirements for the project or market in question.</p>
<p>This is especially important when purchasing components for public infrastructure, where performance expectations are high and accountability is strict. Clear documentation, traceability, and technical support help reduce procurement risk.</p>

<h2>Common procurement mistakes</h2>
<p>Many buyers focus only on short-term cost and ignore the full picture. Some common mistakes include:</p>
<ul>
<li>Choosing the lowest-priced product without technical review</li>
<li>Ignoring the actual operating conditions</li>
<li>Failing to check material quality</li>
<li>Overlooking supplier manufacturing capability</li>
<li>Not confirming testing or documentation</li>
<li>Treating all rubber products as interchangeable</li>
</ul>
<p>These mistakes can lead to performance problems, replacement costs, and project delays.</p>

${fig(u3c, alt3c)}

<h2>Questions to ask suppliers</h2>
<p>A good supplier should be able to answer practical questions clearly. Buyers should ask:</p>
<ul>
<li>What railway applications is this product designed for?</li>
<li>What materials are used?</li>
<li>What is the expected service life?</li>
<li>What testing has been completed?</li>
<li>How is batch consistency maintained?</li>
<li>What documentation is available for evaluation?</li>
</ul>
<p>Suppliers who can answer these questions confidently are more likely to support long-term project success.</p>

<h2>Lifecycle value matters more than purchase price</h2>
<p>In infrastructure procurement, the cheapest option is rarely the best value. A component that costs less initially but fails earlier can become significantly more expensive over time.</p>
<p>The better approach is to assess:</p>
<ul>
<li>Installation cost</li>
<li>Maintenance cost</li>
<li>Replacement frequency</li>
<li>Operational downtime</li>
<li>Asset protection</li>
<li>Total lifecycle performance</li>
</ul>
<p>This is where quality rubber components create real value.</p>

<h2>Working with the right manufacturing partner</h2>
<p>The ideal supplier is not just a vendor. It is a partner that understands railway requirements, offers technical reliability, and maintains quality across production runs.</p>
<p>A strong manufacturing partner should provide:</p>
<ul>
<li>Relevant product expertise</li>
<li>Reliable quality control</li>
<li>Consistent production standards</li>
<li>Technical support</li>
<li>Documentation and traceability</li>
<li>On-time delivery capability</li>
</ul>
<p>When these factors are in place, procurement becomes less risky and project execution becomes smoother.</p>

<h2>Conclusion</h2>
<p>Purchasing railway rubber components requires careful evaluation. Buyers should focus on technical suitability, quality, durability, compliance, and supplier reliability. A well-chosen component can improve safety, reduce wear, and deliver strong lifecycle value. In railway infrastructure, that kind of decision makes a measurable difference.</p>
`.trim()

await createArticle({
  title: 'What Buyers Should Know Before Procuring Railway Rubber Components',
  short_description:
    'A practical procurement guide to railway rubber and elastomer components — how to evaluate technical suitability, material quality, manufacturing consistency, testing and compliance, and why lifecycle value beats purchase price.',
  coverName: '3a-article.jpg',
  read_time_text: '7 min read',
  content: content3,
})

payload.logger.info('Done seeding articles 2 and 3.')
process.exit(0)
