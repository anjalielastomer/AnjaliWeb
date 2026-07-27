import fs from 'fs'
import { getPayload } from 'payload'
import config from '@payload-config'

// One-off seeder for Article #1. Run with:
//   npx payload run scripts/seed-article-1.ts
// Uploads run through the Local API (no Vercel 4.5MB function limit) against the
// same Azure DB + Vercel Blob store the app uses. Idempotent-ish: it skips media
// whose filename already exists and refuses to duplicate an article of the same title.

const DOWNLOADS = '/Users/sumanjain/Downloads'

const IMAGES = [
  {
    src: `${DOWNLOADS}/1a.jpg`,
    name: '1a-article.jpg',
    alt: 'Close-up of a train wheel resting on a rail, with fastening bolts and ballast',
  },
  {
    src: `${DOWNLOADS}/1b.jpg`,
    name: '1b-article.jpg',
    alt: 'Rows of heavy hex bolts and nuts fastening a steel railway bridge structure',
  },
  {
    src: `${DOWNLOADS}/1c.jpg`,
    name: '1c-article.jpg',
    alt: 'Weathered steel plate secured with high-tensile bolts on railway infrastructure',
  },
]

const payload = await getPayload({ config })

{

  // --- 1. upload / reuse the three images ---------------------------------
  const urls: Record<string, string> = {}
  for (const img of IMAGES) {
    const existing = await payload.find({
      collection: 'media',
      where: { filename: { equals: img.name } },
      limit: 1,
    })

    let doc = existing.docs[0]
    if (doc) {
      payload.logger.info(`media "${img.name}" already exists (id ${doc.id}) — reusing`)
    } else {
      const buffer = fs.readFileSync(img.src)
      doc = await payload.create({
        collection: 'media',
        data: { alt: img.alt },
        file: {
          data: buffer,
          mimetype: 'image/jpeg',
          name: img.name,
          size: buffer.length,
        },
      })
      payload.logger.info(`uploaded "${img.name}" (id ${doc.id})`)
    }
    urls[img.name] = doc.url as string
  }

  const cover = await payload.find({
    collection: 'media',
    where: { filename: { equals: '1a-article.jpg' } },
    limit: 1,
  })
  const coverId = cover.docs[0].id

  const fig = (name: string) =>
    `<figure><img src="${urls[name]}" alt="${IMAGES.find((i) => i.name === name)!.alt}"></figure>`

  // --- 2. article body (HTML; parsed by src/types/article.ts) --------------
  // Section titles -> <h2>/<h3> (rendered as orange headings). Bullet groups ->
  // <ul>. 1b and 1c are embedded mid-flow as <figure><img>.
  const content = `
<p>Railway infrastructure depends on precision, durability, and safety. Every component, from the track foundation to fastening systems and vibration-control elements, must perform reliably under constant stress. Among these, elastomeric components play a critical but often underappreciated role. They help absorb shock, reduce vibration, improve load distribution, and protect railway assets from premature wear.</p>
<p>For companies, contractors, engineers, and procurement teams involved in railway construction and maintenance, understanding elastomeric components is essential. These materials are not simply rubber parts; they are engineered solutions designed to support long-term performance in demanding environments.</p>

<h2>What are elastomeric components?</h2>
<p>Elastomeric components are flexible, resilient materials that deform under load and return to their original shape once the load is removed. In railway applications, they are used in a variety of ways to improve the performance and life of infrastructure.</p>
<p>Common railway elastomeric components include:</p>
<ul>
<li>Rail pads</li>
<li>Bearing pads</li>
<li>Brake shoe and brake pad components</li>
<li>Rubberised support elements</li>
<li>Vibration isolation products</li>
<li>Track bed protection components</li>
</ul>
<p>Each of these serves a specific purpose, but all are designed to improve the interaction between moving railway loads and fixed infrastructure.</p>

<h2>Why elastomeric components matter in rail systems</h2>
<p>Rail networks face continuous mechanical stress. Heavy trains, repeated braking, weather exposure, thermal changes, and dynamic vibrations all affect the condition of the track system. Without suitable protective components, these stresses can accelerate fatigue and increase maintenance costs.</p>
<p>Elastomeric components help by:</p>
<ul>
<li>Absorbing shock from moving loads</li>
<li>Reducing vibration transfer to surrounding structures</li>
<li>Minimising noise</li>
<li>Protecting track elements from direct wear</li>
<li>Supporting load dispersion</li>
<li>Improving comfort and stability</li>
</ul>
<p>In metro systems, mainline rail, freight corridors, and industrial rail applications, these benefits can have a major effect on performance and cost efficiency.</p>

${fig('1b-article.jpg')}

<h2>The role of elastomers in track longevity</h2>
<p>A railway system is only as strong as its weakest interface. Where metal meets concrete, and where load moves from wheel to rail to fastening system, elastomeric materials help cushion the transition. This reduces micro-damage, stress concentration, and repeated impact.</p>
<p>Over time, this support can extend the life of the entire system. When components are selected correctly, railway operators may see:</p>
<ul>
<li>Reduced track deterioration</li>
<li>Lower replacement frequency</li>
<li>Better system stability</li>
<li>Fewer unplanned maintenance interruptions</li>
<li>More consistent ride quality</li>
</ul>
<p>That is why elastomeric engineering is not a small detail. It is part of the foundation of long-term rail performance.</p>

<h2>Where these components are used</h2>
<p>Elastomeric products are used across different railway applications, including:</p>
<h3>1. Track systems</h3>
<p>In ballasted and ballastless track construction, elastomeric elements help provide cushioning and stability. They support the interaction between rail, fastening, and base structures.</p>
<h3>2. Metro rail</h3>
<p>Urban rail systems operate with high frequency and often within densely populated areas. Elastomeric products help reduce vibration and noise while supporting safe and efficient operations.</p>
<h3>3. Railway depots, sidings, and yards</h3>
<p>These areas experience repeated movement and load transfer. Elastomeric components help reduce wear in high-use zones.</p>
<h3>4. Brake systems</h3>
<p>Brake shoe and brake pad applications depend on materials that can endure heat, friction, and mechanical force while performing reliably over time.</p>
<h3>5. Bridge and fabrication interfaces</h3>
<p>In infrastructure where rail meets structural steel or bridge elements, elastomeric materials help manage load transfer and movement.</p>

${fig('1c-article.jpg')}

<h2>What makes a good elastomeric railway product?</h2>
<p>Not all rubber-based products are suitable for railway use. Quality matters because these components must function under harsh conditions.</p>
<p>A good product should offer:</p>
<ul>
<li>Consistent material composition</li>
<li>High durability</li>
<li>Resistance to weather and temperature variations</li>
<li>Good compression and recovery properties</li>
<li>Strong wear resistance</li>
<li>Reliable performance under repeated loads</li>
</ul>
<p>Manufacturing precision is equally important. Even a small variation in material quality or dimensions can affect performance in service.</p>

<h2>Testing and quality control</h2>
<p>Railway procurement is increasingly focused on verified quality. Buyers expect dependable products that meet technical and operational requirements. For this reason, testing is an important part of elastomeric manufacturing.</p>
<p>Typical quality checks may include:</p>
<ul>
<li>Dimensional inspection</li>
<li>Load and compression tests</li>
<li>Material property evaluation</li>
<li>Durability checks</li>
<li>Performance consistency testing</li>
<li>Visual and structural inspection</li>
</ul>
<p>For railway projects, quality control is not optional. It is a requirement for safety, reliability, and long-term value.</p>

<h2>The lifecycle cost advantage</h2>
<p>Many organisations focus only on purchase price when selecting railway components. But in infrastructure, the lowest upfront cost is not always the best value.</p>
<p>A well-made elastomeric component may cost more initially, but it can reduce lifecycle expenses by:</p>
<ul>
<li>Lasting longer</li>
<li>Requiring fewer replacements</li>
<li>Lowering maintenance downtime</li>
<li>Minimising damage to adjoining components</li>
<li>Improving system efficiency</li>
</ul>
<p>This is why engineering teams increasingly evaluate total cost of ownership rather than purchase price alone.</p>

<h2>Choosing the right supplier</h2>
<p>Selecting the right supplier is as important as selecting the right product. A strong supplier should understand the operational demands of railway infrastructure and support customers with technical knowledge, reliable manufacturing, and consistent delivery.</p>
<p>When evaluating a supplier, consider:</p>
<ul>
<li>Industry experience</li>
<li>Product range</li>
<li>Manufacturing capability</li>
<li>Quality assurance process</li>
<li>Responsiveness to project requirements</li>
<li>Ability to support technical documentation and specifications</li>
</ul>
<p>For railway projects, trust is built through consistency. Suppliers that deliver stable quality and technical reliability become long-term partners rather than one-time vendors.</p>

<h2>Conclusion</h2>
<p>Elastomeric components may not always be visible in a railway system, but their impact is significant. They help improve safety, reduce vibration, support structural integrity, and extend the life of critical infrastructure. As railway networks continue to grow and modernise, the role of high-quality elastomeric materials will only become more important.</p>
<p>For engineers, contractors, and procurement teams, choosing the right elastomeric components is not just a technical decision. It is an investment in safety, performance, and long-term value.</p>
`.trim()

  // --- 3. create the article (published) -----------------------------------
  const title = 'The Complete Guide to Elastomeric Components in Modern Railway Infrastructure'

  const dupe = await payload.find({
    collection: 'articles',
    where: { title: { equals: title } },
    limit: 1,
  })
  if (dupe.docs.length) {
    payload.logger.warn(`article "${title}" already exists (id ${dupe.docs[0].id}) — skipping create`)
    payload.logger.info('Done.')
    process.exit(0)
  }

  const article = await payload.create({
    collection: 'articles',
    data: {
      title,
      short_description:
        'A practical guide to elastomeric components in railway infrastructure — what they are, why they matter for track longevity, where they are used, and how to evaluate quality, lifecycle cost, and the right supplier.',
      cover_image: coverId,
      author: 'Anjali Elastomer',
      publish_time: new Date().toISOString(),
      read_time_text: '6 min read',
      content,
      _status: 'published',
    },
  })

  payload.logger.info(`Created article id ${article.id} (published).`)
  payload.logger.info(`  cover: ${urls['1a-article.jpg']}`)
  payload.logger.info(`  inline 1b: ${urls['1b-article.jpg']}`)
  payload.logger.info(`  inline 1c: ${urls['1c-article.jpg']}`)
}

process.exit(0)
