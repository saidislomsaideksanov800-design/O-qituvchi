import { getSubjects } from '../data/curriculum/index.js'
import { useT } from '../lib/i18n.jsx'
import { href } from '../lib/router.js'
import { lessonKey, useProgress } from '../lib/progress.js'
import { Icon, IconTile } from '../components/Icon.jsx'
import { Breadcrumbs, PageTitle, ProgressBar } from '../components/ui.jsx'
import NotFound from './NotFound.jsx'

export default function Grade({ g }) {
  const { t, lang } = useT()
  const progress = useProgress()
  const subjects = getSubjects(g)
  if (!subjects.length) return <NotFound />

  return (
    <div className="container-page pt-6">
      <Breadcrumbs items={[{ label: t('grade', { n: g }) }]} />
      <PageTitle
        title={t('grade', { n: g })}
        lead={t('content_lang') || undefined}
        icon={<span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-primary text-[26px] font-bold text-white">{g}</span>}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {subjects.map((s) => {
          const done = s.lessons.filter((_, i) => progress[lessonKey(g, s.id, i + 1)]?.passed).length
          return (
            <a key={s.id} href={href.subject(g, s.id)} className="card-link group grid gap-4 p-5">
              <div className="flex items-start gap-4">
                <IconTile name={s.icon} size="lg" tone={done === s.lessons.length ? 'success' : 'primary'} />
                <div className="min-w-0 flex-1">
                  <h2 className="text-h3">{s.name[lang]}</h2>
                  {lang === 'uz' && <p className="text-[13px] text-muted">{s.name.ru}</p>}
                  <p className="text-[14px] text-muted">{t('passed_of', { c: done, n: s.lessons.length })}</p>
                </div>
                <Icon name="chevron-right" className="h-5 w-5 text-muted transition group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <ProgressBar value={done} max={s.lessons.length} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
