import site from '../data/site.js'
import { guide } from '../data/guide.js'
import { useT } from '../lib/i18n.jsx'
import { href } from '../lib/router.js'
import { Icon, IconTile } from '../components/Icon.jsx'
import { Breadcrumbs, PageTitle } from '../components/ui.jsx'

// The guide itself (steps, rules for parents, FAQ). Used on the home page and on #/guide.
export function GuideContent() {
  const { lang } = useT()
  const L = (obj) => obj[lang] ?? obj.ru

  return (
    <>
      {/* Steps */}
      <section aria-labelledby="guide-steps">
        <h2 id="guide-steps" className="mb-4 text-h2-m md:text-h2">{L(guide.stepsTitle)}</h2>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guide.steps.map((step, i) => (
            <li key={i} className="card grid content-start gap-3 p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-ink text-[15px] font-bold text-primary">{i + 1}</span>
                <IconTile name={step.icon} size="sm" />
              </div>
              <h3 className="text-h3">{L(step.title)}</h3>
              <p className="text-[15px] text-muted">{L(step.text)}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Rules for parents */}
      <section aria-labelledby="guide-parents" className="mt-10">
        <h2 id="guide-parents" className="mb-4 text-h2-m md:text-h2">{L(guide.parentsTitle)}</h2>
        <ul className="card grid gap-3 p-5 md:p-6">
          {guide.parents.map((rule, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-primary text-ink">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <span>{L(rule)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ — native <details>, works with keyboard and screen readers */}
      <section aria-labelledby="guide-faq" className="mt-10">
        <h2 id="guide-faq" className="mb-4 text-h2-m md:text-h2">{L(guide.faqTitle)}</h2>
        <div className="grid gap-3">
          {guide.faq.map((item, i) => (
            <details key={i} className="card group p-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold [&::-webkit-details-marker]:hidden">
                {L(item.q)}
                <Icon name="chevron-right" className="h-5 w-5 text-muted transition group-open:rotate-90" />
              </summary>
              <p className="px-5 pb-5 text-muted">{L(item.a)}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}

// Separate guide page: title + guide + contacts.
export default function Guide() {
  const { lang } = useT()
  const L = (obj) => obj[lang] ?? obj.ru

  return (
    <div className="container-page pt-6">
      <Breadcrumbs items={[{ label: L(guide.title).split(':')[0] }]} />
      <PageTitle title={L(guide.title)} lead={L(guide.lead)} icon={<IconTile name="info" size="lg" />} />
      <GuideContent />

      {/* Help + start */}
      <section className="card mt-10 flex flex-col gap-4 p-5 sm:flex-row sm:items-center md:p-6">
        <IconTile name="phone" size="lg" />
        <div className="flex-1">
          <h2 className="text-h3">{L(guide.helpTitle)}</h2>
          <p className="text-muted">{L(guide.helpText)} {site.author}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-secondary"><Icon name="phone" /> {site.phone}</a>
          <a href={`https://t.me/${site.telegram}`} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Icon name="telegram" /> @{site.telegram}</a>
        </div>
      </section>

      <div className="mt-8 flex justify-center">
        <a href={href.home()} className="btn-primary">{L(guide.startCta)} <Icon name="arrow" /></a>
      </div>
    </div>
  )
}
