import fs from 'fs'
import { getPayload } from 'payload'
import config from '@payload-config'

// Seeder for the three real projects (replaces the dummy). Run with:
//   npx payload run scripts/seed-projects.ts
// Approach mirrors the article seeders: Local API uploads (no Vercel 4.5MB
// limit), idempotent media reuse, published docs. Projects differ from articles:
//   - cover_images is hasMany -> [a, b] powers the featured-card hover
//     (image1 = default, image2 = hover) on the home page.
//   - content is rendered via dangerouslySetInnerHTML on the detail page, styled
//     for <h3>/<p>/<ul>/<figure><img>. Inline image `c` is embedded as a <figure>.
// Featured projects (home-page-featured-projects) get index 1/2/3.

const DOWNLOADS = '/Users/sumanjain/Downloads'

const payload = await getPayload({ config })

// ------------------------------------------------------------------ helpers
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

const mediaId = async (name: string): Promise<number> => {
  const r = await payload.find({ collection: 'media', where: { filename: { equals: name } }, limit: 1 })
  return r.docs[0].id as number
}

const fig = (url: string, alt: string) => `<figure><img src="${url}" alt="${alt}"></figure>`

// ------------------------------------------------------ 1. remove the dummy
{
  const dummies = await payload.find({
    collection: 'projects',
    where: { title: { contains: 'Eastern Dedicated Freight Corridor' } },
    depth: 0,
    limit: 10,
  })
  for (const d of dummies.docs) {
    // delete its featured-projects link(s)
    const feats = await payload.find({
      collection: 'home-page-featured-projects',
      where: { project: { equals: d.id } },
      limit: 50,
    })
    for (const f of feats.docs) {
      await payload.delete({ collection: 'home-page-featured-projects', id: f.id })
      payload.logger.info(`deleted featured link id ${f.id} (dummy)`)
    }
    // capture cover media ids, delete the project, then delete its media
    const coverIds = ((d as any).cover_images as (number | { id: number })[] | undefined)?.map((m) =>
      typeof m === 'object' ? m.id : m,
    ) ?? []
    await payload.delete({ collection: 'projects', id: d.id })
    payload.logger.info(`deleted dummy project id ${d.id}: ${d.title}`)
    for (const mid of coverIds) {
      try {
        await payload.delete({ collection: 'media', id: mid })
        payload.logger.info(`deleted dummy media id ${mid}`)
      } catch (e) {
        payload.logger.warn(`could not delete media id ${mid} (in use?)`)
      }
    }
  }
  if (!dummies.docs.length) payload.logger.info('no dummy project found — nothing to remove')
}

// ------------------------------------------------------------- 2. projects
type ProjectSpec = {
  title: string
  description: string
  subtext: string
  cover: [string, string] // filenames a, b (already uploaded)
  buildContent: () => string
}

const createProject = async (spec: ProjectSpec, featureIndex: number) => {
  const existing = await payload.find({
    collection: 'projects',
    where: { title: { equals: spec.title } },
    limit: 1,
  })
  let projectId: number
  if (existing.docs.length) {
    projectId = existing.docs[0].id as number
    payload.logger.warn(`project "${spec.title}" already exists (id ${projectId}) — skipping create`)
  } else {
    const coverA = await mediaId(spec.cover[0])
    const coverB = await mediaId(spec.cover[1])
    const doc = await payload.create({
      collection: 'projects',
      data: {
        title: spec.title,
        cover_images: [coverA, coverB],
        description: spec.description,
        subtext: spec.subtext,
        content: spec.buildContent(),
        _status: 'published',
      },
    })
    projectId = doc.id as number
    payload.logger.info(`created project id ${projectId}: ${spec.title}`)
  }

  // feature it (idempotent by project)
  const feat = await payload.find({
    collection: 'home-page-featured-projects',
    where: { project: { equals: projectId } },
    limit: 1,
  })
  if (feat.docs.length) {
    payload.logger.info(`  already featured (id ${feat.docs[0].id})`)
  } else {
    const f = await payload.create({
      collection: 'home-page-featured-projects',
      data: { index: featureIndex, project: projectId, _status: 'published' },
    })
    payload.logger.info(`  featured at index ${featureIndex} (id ${f.id})`)
  }
}

// -------- image alts --------
const alt = {
  p1a: 'Railway track stretching into the distance through green countryside',
  p1b: 'Rail fastened to a bridge girder over a black elastomeric bearing strip',
  p1c: 'A lone figure walking along electrified railway tracks on a misty morning',
  p2a: 'Close-up of a large sheet of raw rubber being handled',
  p2b: 'Natural latex being tapped from a rubber tree into a collection cup',
  p2c: 'A large pile of stacked rubber tyres',
  p3a: 'Rail workers in hi-vis on a track at sunset, low-angle view along the rail',
  p3b: 'A large yellow track-renewal machine working on a railway line with a crew',
  p3c: 'Low-angle view of a railway track with sleepers and fastenings fading into mist',
}

// -------- upload all nine (b & c first so their URLs exist for content) --------
await uploadImage('1b.jpg', '1b-project.jpg', alt.p1b)
await uploadImage('1c.jpg', '1c-project.jpg', alt.p1c)
await uploadImage('1a.jpg', '1a-project.jpg', alt.p1a)
await uploadImage('2b.jpeg', '2b-project.jpg', alt.p2b)
await uploadImage('2c.jpg', '2c-project.jpg', alt.p2c)
await uploadImage('2a.jpg', '2a-project.jpg', alt.p2a)
await uploadImage('3b.jpg', '3b-project.jpg', alt.p3b)
await uploadImage('3c.jpg', '3c-project.jpg', alt.p3c)
await uploadImage('3a.jpg', '3a-project.jpg', alt.p3a)

const url1c = (await payload.find({ collection: 'media', where: { filename: { equals: '1c-project.jpg' } }, limit: 1 })).docs[0].url as string
const url2c = (await payload.find({ collection: 'media', where: { filename: { equals: '2c-project.jpg' } }, limit: 1 })).docs[0].url as string
const url3c = (await payload.find({ collection: 'media', where: { filename: { equals: '3c-project.jpg' } }, limit: 1 })).docs[0].url as string

// ============================ PROJECT 1 ============================
await createProject(
  {
    title: "5 Signs It's Time to Replace Railway Rubber Components",
    description:
      'Repeated loads, vibration and weather slowly wear railway rubber components. Learn the five early warning signs — cracking, deformation, noise, uneven wear and age — that tell you it is time to inspect and replace.',
    subtext: 'Maintenance & Component Life',
    cover: ['1a-project.jpg', '1b-project.jpg'],
    buildContent: () => `
<p>Railway rubber components are designed to last, but they do not last forever. Over time, repeated loads, vibration, weather exposure, and environmental stress can reduce performance. When that happens, the system may start showing signs of wear long before a full failure occurs.</p>
<p>Recognising the early warning signs can help railway operators and maintenance teams act before small issues become bigger problems. Here are five common signs that replacement may be needed.</p>

<h3>1. Visible cracking or surface damage</h3>
<p>One of the most obvious signs of ageing is cracking. Rubber components that have been exposed to repeated stress or harsh environmental conditions may begin to show surface splits, hardening, or visible wear.</p>
<p>Even small cracks can affect performance. They may indicate loss of flexibility or a weakening material structure.</p>

<h3>2. Loss of shape or compression recovery</h3>
<p>Elastomeric components are expected to compress under load and return to form. If a component remains flattened, misshapen, or permanently compressed, it may no longer be doing its job effectively.</p>
<p>This can reduce load distribution and increase stress on nearby components.</p>

${fig(url1c, alt.p1c)}

<h3>3. Increased vibration or noise</h3>
<p>Rubber components help absorb shock and reduce vibration. If vibration levels or noise increase, the issue may be linked to worn or ineffective elastomer parts.</p>
<p>This is particularly important in metro and urban rail systems, where vibration control supports both passenger comfort and infrastructure protection.</p>

<h3>4. Uneven wear in nearby components</h3>
<p>When rubber parts begin to fail, other components may start wearing unevenly. This can create a chain reaction of damage across the system.</p>
<p>If maintenance teams notice unusual wear patterns in rails, fasteners, or support structures, the rubber component at the interface should be inspected.</p>

<h3>5. Age and service conditions</h3>
<p>Sometimes a component does not look damaged, but it has already reached the end of its practical life. Age, heavy usage, temperature exposure, and operating environment all matter.</p>
<p>If a railway rubber component has been in service for a long period, it may be worth replacing even before visible failure appears.</p>

<h3>Why early replacement matters</h3>
<p>Waiting too long can lead to higher repair costs, greater downtime, and damage to other parts of the rail system. Preventive replacement is often far more economical than emergency correction.</p>

<h3>Final thought</h3>
<p>Railway rubber components are small parts with a big responsibility. If they show signs of cracking, deformation, noise, wear, or ageing, it is time to inspect and plan for replacement.</p>
`.trim(),
  },
  1,
)

// ============================ PROJECT 2 ============================
await createProject(
  {
    title: 'Natural Rubber vs. Synthetic Elastomers in Rail Applications',
    description:
      'Natural rubber or synthetic elastomer? Both have a place in rail. A practical comparison of elasticity, resilience and environmental resistance to help match the material to the application.',
    subtext: 'Materials & Engineering',
    cover: ['2a-project.jpg', '2b-project.jpg'],
    buildContent: () => `
<p>Choosing the right material is one of the most important decisions in railway engineering. When it comes to rubber-based products, buyers often compare natural rubber and synthetic elastomers. Both have strengths, but they are not identical. The best choice depends on the application, performance demands, and environmental conditions.</p>

<h3>Natural rubber: the basics</h3>
<p>Natural rubber is valued for its elasticity, flexibility, and resilience. It performs well in applications where shock absorption and recovery are important.</p>
<p><strong>Advantages</strong></p>
<ul>
<li>Good elasticity</li>
<li>Strong resilience</li>
<li>Reliable cushioning</li>
<li>Effective vibration absorption</li>
</ul>
<p><strong>Considerations</strong></p>
<ul>
<li>Can be more sensitive to weathering and environmental exposure</li>
<li>May not be ideal for every heavy-duty or high-temperature condition</li>
</ul>

${fig(url2c, alt.p2c)}

<h3>Synthetic elastomers: the basics</h3>
<p>Synthetic elastomers are engineered materials designed for specific performance requirements. They can be formulated to improve resistance to heat, oils, weathering, ageing, and mechanical stress.</p>
<p><strong>Advantages</strong></p>
<ul>
<li>Can be tailored for specific applications</li>
<li>Often offer better resistance to environmental stress</li>
<li>Useful in demanding industrial and railway conditions</li>
<li>Can provide consistent performance across batches</li>
</ul>
<p><strong>Considerations</strong></p>
<ul>
<li>Performance depends heavily on formulation</li>
<li>The wrong type may not suit a given railway environment</li>
</ul>

<h3>Which is better for railway use?</h3>
<p>There is no universal winner. The best material depends on the application.</p>
<p>For example:</p>
<ul>
<li>If cushioning and flexibility are the main requirement, natural rubber may perform well.</li>
<li>If durability, environmental resistance, or specialised performance is needed, synthetic elastomers may be the better choice.</li>
</ul>
<p>In many railway applications, the decision comes down to balancing resilience, wear resistance, and operational conditions.</p>

<h3>Why material selection matters</h3>
<p>The wrong choice can reduce service life, increase maintenance, and affect safety. The right choice helps the component perform reliably over time.</p>
<p>That is why railway buyers and engineers should evaluate material properties carefully rather than choosing based on name alone.</p>

<h3>Final thought</h3>
<p>Natural rubber and synthetic elastomers both have a place in rail applications. The key is to match the material to the operating environment and performance requirements. In railway infrastructure, material selection is not just a technical detail. It is a long-term performance decision.</p>
`.trim(),
  },
  2,
)

// ============================ PROJECT 3 ============================
await createProject(
  {
    title:
      'Behind Every Safe Railway Track: The Role of Precision-Manufactured Elastomer Components',
    description:
      'The smallest parts often do the biggest safety work. How precision-manufactured elastomer components absorb shock, control vibration and protect the track system every day.',
    subtext: 'Safety & Precision Manufacturing',
    cover: ['3a-project.jpg', '3b-project.jpg'],
    buildContent: () => `
<p>When people think about railway safety, they usually think about signals, trains, platforms, and track alignment. But many of the most important safety functions depend on smaller components hidden in plain sight. Precision-manufactured elastomer components are among them.</p>
<p>These parts help absorb shock, reduce vibration, protect structures, and support stable operation. Although they are often overlooked, they play a direct role in how safe and reliable a railway system becomes.</p>

<h3>Small components, big responsibility</h3>
<p>Railway systems are exposed to repeated forces every day. Wheels pass over rails, braking creates stress, and weather conditions affect materials over time. Elastomer components help manage these forces before they cause damage.</p>
<p>Their job is to cushion impact, support load transfer, and preserve the condition of the track system.</p>

<h3>Why precision matters</h3>
<p>In railway applications, even small differences in size or material consistency can affect performance. A component must fit correctly, behave predictably, and withstand stress without failing early.</p>
<p>Precision manufacturing helps ensure:</p>
<ul>
<li>Proper fit</li>
<li>Consistent performance</li>
<li>Reliable cushioning</li>
<li>Better durability</li>
<li>Lower failure risk</li>
</ul>

${fig(url3c, alt.p3c)}

<h3>How these components improve safety</h3>
<p><strong>Shock absorption</strong></p>
<p>By reducing impact at key interfaces, elastomer components help protect track and support structures.</p>
<p><strong>Vibration control</strong></p>
<p>They reduce the transfer of vibration into adjoining materials and surrounding infrastructure.</p>
<p><strong>Wear protection</strong></p>
<p>They help prevent direct metal-to-metal or hard-surface contact that can cause damage over time.</p>
<p><strong>Stability</strong></p>
<p>They support predictable load behaviour, which contributes to smoother and safer railway operation.</p>

<h3>The hidden value in quality</h3>
<p>A precision-manufactured component may never be noticed by passengers, but its impact is felt in the form of safer, quieter, and more reliable service. For operators, that means fewer maintenance issues and stronger long-term asset performance.</p>

<h3>Final thought</h3>
<p>A railway track is not just rails and sleepers. It is a system of carefully engineered parts working together. Precision-manufactured elastomer components are part of that system, quietly doing the work that keeps trains moving safely and efficiently.</p>
`.trim(),
  },
  3,
)

payload.logger.info('Done seeding projects.')
process.exit(0)
