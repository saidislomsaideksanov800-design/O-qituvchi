import { useMemo, useState } from 'react'
import site from '../data/site.js'
import { GRADES, allLessons, getSubjects } from '../data/curriculum/index.js'
import { useT } from '../lib/i18n.jsx'
import { href } from '../lib/router.js'
import { isUnlocked, lessonKey, useProgress } from '../lib/progress.js'
import { Icon, IconTile } from '../components/Icon.jsx'
import { ProgressBar, StatusPill } from '../components/ui.jsx'

function Search() {
  const { t, lang } = useT()
  const progress = useProgress()
  const [q, setQ] = useState('')
  const lessons = useMemo(() => allLessons(), [])
  const query = q.trim().toLowerCase()
  const results = query.length < 2 ? [] : lessons.filter(({ lesson }) => lesson.title.toLowerCase().includes(query)).slice(0, 8)

  return (
    <div className="card relative z-10 -mt-8 p-4 md:-mt-10 md:p-6">
      <label htmlFor="lesson-search" className="mb-2 block text-[14px] font-semibold">{t('search_label')}</label>
      <div className="relative">
        <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
        <input
          id="lesson-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t('search_ph')}
          className="h-12 w-full rounded-btn border border-line bg-white pl-12 pr-4 text-[16px] outline-none transition placeholder:text-muted focus:border-primary focus:shadow-focus"
        />
      </div>
      {query.length >= 2 && (
        <div className="mt-3" aria-live="polite">
          {results.length === 0 ? (
            <p className="text-[14px] text-muted">{t('search_empty')}</p>
          ) : (
            <ul className="grid gap-1">
              {results.map(({ g, subject, i, lesson }) => {
                const done = progress[lessonKey(g, subject.id, i)]?.passed
                const open = isUnlocked(progress, g, subject.id, i)
                return (
                  <li key={`${g}-${subject.id}-${i}`}>
                    <a href={href.lesson(g, subject.id, i)} className="flex items-center gap-3 rounded-btn px-3 py-2.5 no-underline hover:bg-surface">
                      <IconTile name={subject.icon} size="sm" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">{lesson.title}</span>
                        <span className="block text-[13px] text-muted">{t('grade', { n: g })} · {subject.name[lang]} · {t('lesson_n', { n: i })}</span>
                      </span>
                      <StatusPill status={done ? 'done' : open ? 'open' : 'locked'} />
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

function GradeCard({ g }) {
  const { t } = useT()
  const progress = useProgress()
  const subjects = getSubjects(g)
  const total = subjects.reduce((n, s) => n + s.lessons.length, 0)
  const done = subjects.reduce((n, s) => n + s.lessons.filter((_, i) => progress[lessonKey(g, s.id, i + 1)]?.passed).length, 0)
  return (
    <a href={href.grade(g)} className="card-link group grid gap-4 p-5">
      <div className="flex items-center justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-50 text-[26px] font-bold text-primary">{g}</span>
        <Icon name="arrow" className="h-5 w-5 text-muted transition group-hover:translate-x-1 group-hover:text-primary" />
      </div>
      <div>
        <h3 className="text-h3">{t('grade', { n: g })}</h3>
        <p className="text-[14px] text-muted">{t('subjects_count', { n: subjects.length })} · {t('passed_of', { c: done, n: total })}</p>
      </div>
      <ProgressBar value={done} max={total} />
    </a>
  )
}

export default function Home() {
  const { t } = useT()
  const pct = Math.round(site.passRatio * 100)
  const steps = [
    ['target', t('step1_t'), t('step1_d')],
    ['book', t('step2_t'), t('step2_d')],
    ['test', t('step3_t'), t('step3_d', { p: pct })],
    ['lock', t('step4_t'), t('step4_d')],
  ]

  return (
    <>
      {/* Hero banner */}
      <section className="bg-gradient-to-br from-primary to-[#2C74F0] text-white">
        <div className="container-page grid items-center gap-8 pb-16 pt-10 md:pb-20 md:pt-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="grid gap-5">
            <h1 className="text-h1-m md:text-h1">{t('hero_title')}</h1>
            <p className="max-w-xl text-[17px] text-white/90">{t('hero_text')}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#grades" onClick={(e) => { e.preventDefault(); document.getElementById('grades')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn bg-white text-primary hover:bg-primary-50">
                {t('hero_cta')} <Icon name="arrow" />
              </a>
              <a href={href.progress()} className="btn border border-white/40 text-white hover:bg-white/10">
                <Icon name="chart" /> {t('hero_progress')}
              </a>
            </div>
          </div>
          <div className="hidden rounded-card bg-white/10 p-5 ring-1 ring-white/20 lg:block">
            <p className="mb-3 text-[14px] font-semibold text-white/90">{t('hero_card_title')}</p>
            <ol className="grid gap-2">
              {steps.map(([icon, title], i) => (
                <li key={icon} className="flex items-center gap-3 rounded-btn bg-white px-3 py-2.5 text-ink">
                  <IconTile name={icon} size="sm" />
                  <span className="text-[15px] font-medium">{i + 1}. {title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="container-page">
        <Search />

        {/* Grades */}
        <section id="grades" aria-labelledby="grades-title" className="scroll-mt-28 pt-12">
          <div className="mb-5">
            <h2 id="grades-title" className="text-h2-m md:text-h2">{t('grades_title')}</h2>
            <p className="text-muted">{t('grades_text')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GRADES.map((g) => <GradeCard key={g} g={g} />)}
          </div>
        </section>

        {/* How it works */}
        <section aria-labelledby="steps-title" className="pt-14">
          <h2 id="steps-title" className="mb-5 text-h2-m md:text-h2">{t('steps_title')}</h2>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([icon, title, text], i) => (
              <li key={icon} className="card grid content-start gap-3 p-5">
                <div className="flex items-center justify-between">
                  <IconTile name={icon} />
                  <span className="text-[13px] font-semibold text-muted">0{i + 1}</span>
                </div>
                <h3 className="text-h3">{title}</h3>
                <p className="text-[14px] text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Parents */}
        <section className="pt-14">
          <a href={href.parents()} className="card-link flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center">
            <IconTile name="users" size="lg" />
            <div className="flex-1">
              <h2 className="text-h3">{t('parents_cta_t')}</h2>
              <p className="text-muted">{t('parents_cta_d')}</p>
            </div>
            <span className="btn-secondary">{t('more')} <Icon name="arrow" /></span>
          </a>
        </section>
      </div>
    </>
  )
}
