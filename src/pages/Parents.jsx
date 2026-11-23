import site from '../data/site.js'
import { useT } from '../lib/i18n.jsx'
import { Icon, IconTile } from '../components/Icon.jsx'
import { Breadcrumbs, PageTitle } from '../components/ui.jsx'

export default function Parents() {
  const { t } = useT()
  const p = Math.round(site.passRatio * 100)
  const rules = [
    ['lock', t('p_rule1_t'), t('p_rule1_d', { p })],
    ['refresh', t('p_rule2_t'), t('p_rule2_d')],
    ['shield', t('p_rule3_t'), t('p_rule3_d')],
  ]

  return (
    <div className="container-page pt-6">
      <Breadcrumbs items={[{ label: t('parents_title') }]} />
      <PageTitle title={t('parents_title')} lead={t('parents_lead')} icon={<IconTile name="users" size="lg" />} />

      <div className="grid gap-4 md:grid-cols-3">
        {rules.map(([icon, title, text]) => (
          <div key={icon} className="card grid content-start gap-3 p-5">
            <IconTile name={icon} />
            <h2 className="text-h3">{title}</h2>
            <p className="text-[15px] text-muted">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="card p-5 md:p-6">
          <h2 className="mb-3 text-h3">{t('p_tips_t')}</h2>
          <ul className="grid gap-2.5">
            {t('p_tips').map((tip, i) => (
              <li key={i} className="flex gap-2.5">
                <Icon name="check" className="mt-1 h-[18px] w-[18px] text-success" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="card p-5 md:p-6">
          <h2 className="mb-3 text-h3">{t('p_program_t')}</h2>
          <p className="text-muted">{t('p_program_d')}</p>
        </section>
      </div>

      <section className="card mt-6 flex flex-col gap-4 p-5 sm:flex-row sm:items-center md:p-6">
        <IconTile name="phone" size="lg" />
        <div className="flex-1">
          <h2 className="text-h3">{t('p_contact_t')}</h2>
          <p className="text-muted">{site.author}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-secondary"><Icon name="phone" /> {site.phone}</a>
          <a href={`https://t.me/${site.telegram}`} target="_blank" rel="noopener noreferrer" className="btn-primary"><Icon name="telegram" /> @{site.telegram}</a>
        </div>
      </section>
    </div>
  )
}
