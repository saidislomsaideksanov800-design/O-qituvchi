import { getSubject } from '../data/curriculum/index.js'
import { useT } from '../lib/i18n.jsx'
import { href } from '../lib/router.js'
import { isUnlocked, lessonKey, useProgress } from '../lib/progress.js'
import { Icon, IconTile } from '../components/Icon.jsx'
import { Breadcrumbs, PageTitle, ProgressBar, StatusPill } from '../components/ui.jsx'
import { cx } from '../lib/utils.js'
import NotFound from './NotFound.jsx'
import { Uz } from './Lesson.jsx'

export default function Subject({ g, s }) {
  const { t, lang } = useT()
  const progress = useProgress()
  const subject = getSubject(g, s)
  if (!subject) return <NotFound />

  const done = subject.lessons.filter((_, i) => progress[lessonKey(g, s, i + 1)]?.passed).length

  return (
    <div className="container-page pt-6">
      <Breadcrumbs items={[{ label: t('grade', { n: g }), to: href.grade(g) }, { label: subject.name[lang] }]} />
      <PageTitle
        title={subject.name[lang]}
        lead={`${t('grade', { n: g })} · ${t('passed_of', { c: done, n: subject.lessons.length })}`}
        icon={<IconTile name={subject.icon} size="lg" />}
      />
      <ProgressBar value={done} max={subject.lessons.length} className="mb-6" />

      <h2 className="sr-only">{t('lessons')}</h2>
      <ol className="grid gap-3">
        {subject.lessons.map((lesson, idx) => {
          const i = idx + 1
          const passed = progress[lessonKey(g, s, i)]?.passed
          const open = isUnlocked(progress, g, s, i)
          const status = passed ? 'done' : open ? 'open' : 'locked'
          const inner = (
            <>
              <span className={cx('grid h-11 w-11 flex-none place-items-center rounded-full text-[16px] font-bold',
                passed ? 'bg-ink text-primary' : open ? 'bg-primary text-ink' : 'bg-surface text-muted')}>
                {passed ? <Icon name="check" /> : open ? i : <Icon name="lock" className="h-[18px] w-[18px]" />}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] text-muted">{t('lesson_n', { n: i })}</span>
                <span className="block font-semibold" lang="ru">{lesson.title}</span>
                <Uz text={lesson.uz?.title} className="text-[14px]" />
                <span className="block text-[14px] text-muted">{open ? lesson.goal : t('locked_hint', { n: i - 1 })}</span>
              </span>
              <StatusPill status={status} />
            </>
          )
          return (
            <li key={i}>
              {open ? (
                <a href={href.lesson(g, s, i)} className="card-link flex items-center gap-4 p-4 md:p-5">{inner}</a>
              ) : (
                <div className="card flex items-center gap-4 p-4 opacity-80 md:p-5" aria-disabled="true">{inner}</div>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
