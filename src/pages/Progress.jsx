import { useState } from 'react'
import { GRADES, getSubjects } from '../data/curriculum/index.js'
import { useT } from '../lib/i18n.jsx'
import { href } from '../lib/router.js'
import { lessonKey, resetProgress, useProgress } from '../lib/progress.js'
import { Icon, IconTile } from '../components/Icon.jsx'
import { Breadcrumbs, PageTitle, ProgressBar } from '../components/ui.jsx'

export default function Progress() {
  const { t, lang } = useT()
  const progress = useProgress()
  const [confirm, setConfirm] = useState(false)
  const [message, setMessage] = useState('')

  const rows = GRADES.map((g) => ({
    g,
    subjects: getSubjects(g).map((s) => {
      const entries = s.lessons.map((_, i) => progress[lessonKey(g, s.id, i + 1)])
      return { ...s, done: entries.filter((e) => e?.passed).length, total: s.lessons.length }
    }),
  }))
  const totalDone = Object.values(progress).filter((e) => e.passed).length
  const totalLessons = rows.reduce((n, r) => n + r.subjects.reduce((m, s) => m + s.total, 0), 0)
  const attempts = Object.values(progress).reduce((n, e) => n + (e.attempts || 0), 0)

  return (
    <div className="container-page pt-6">
      <Breadcrumbs items={[{ label: t('progress_title') }]} />
      <PageTitle title={t('progress_title')} lead={t('progress_text')} icon={<IconTile name="chart" size="lg" />} />

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="card flex items-center gap-4 p-5">
          <IconTile name="check-circle" tone="success" />
          <div className="flex-1">
            <p className="text-[14px] text-muted">{t('progress_total')}</p>
            <p className="text-[28px] font-bold tabular-nums">{totalDone} <span className="text-[18px] font-medium text-muted">/ {totalLessons}</span></p>
            <ProgressBar value={totalDone} max={totalLessons} className="mt-2" />
          </div>
        </div>
        <div className="card flex items-center gap-4 p-5">
          <IconTile name="test" />
          <div>
            <p className="text-[14px] text-muted">{t('progress_attempts')}</p>
            <p className="text-[28px] font-bold tabular-nums">{attempts}</p>
          </div>
        </div>
      </div>

      {totalDone === 0 && <p className="card mb-8 p-5 text-muted">{t('progress_none')}</p>}

      <div className="grid gap-4">
        {rows.map(({ g, subjects }) => (
          <section key={g} className="card p-5" aria-labelledby={`pg-${g}`}>
            <h2 id={`pg-${g}`} className="mb-4 text-h3">
              <a href={href.grade(g)} className="no-underline hover:text-ink hover:underline">{t('grade', { n: g })}</a>
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {subjects.map((s) => (
                <li key={s.id}>
                  <a href={href.subject(g, s.id)} className="flex items-center gap-3 rounded-btn p-2 no-underline hover:bg-surface">
                    <IconTile name={s.icon} size="sm" tone={s.done === s.total ? 'success' : 'primary'} />
                    <span className="min-w-0 flex-1">
                      <span className="flex justify-between gap-2 text-[15px]">
                        <span className="truncate font-medium">{s.name[lang]}</span>
                        <span className="tabular-nums text-muted">{s.done}/{s.total}</span>
                      </span>
                      <ProgressBar value={s.done} max={s.total} className="mt-1.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Reset — confirmation is built into the page (no browser pop-ups) */}
      <div className="mt-8">
        {!confirm ? (
          <button type="button" className="btn-secondary" onClick={() => { setConfirm(true); setMessage('') }}>
            <Icon name="refresh" /> {t('reset')}
          </button>
        ) : (
          <div className="card grid gap-3 border-danger/30 p-5" role="alertdialog" aria-labelledby="reset-q">
            <p id="reset-q" className="font-medium">{t('reset_q')}</p>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="btn-danger" onClick={() => { resetProgress(); setConfirm(false); setMessage(t('reset_done')) }}>{t('reset_yes')}</button>
              <button type="button" className="btn-secondary" onClick={() => setConfirm(false)}>{t('reset_no')}</button>
            </div>
          </div>
        )}
        <p role="status" className="mt-3 text-[14px] text-success">{message}</p>
      </div>
    </div>
  )
}
