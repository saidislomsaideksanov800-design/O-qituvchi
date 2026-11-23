import { useEffect, useRef, useState } from 'react'
import { getLesson } from '../data/curriculum/index.js'
import { useT } from '../lib/i18n.jsx'
import { href } from '../lib/router.js'
import { isUnlocked, lessonKey, recordAttempt, required, useProgress } from '../lib/progress.js'
import { cx, shuffle } from '../lib/utils.js'
import { Icon, IconTile } from '../components/Icon.jsx'
import { Breadcrumbs, StatusPill } from '../components/ui.jsx'
import NotFound from './NotFound.jsx'

// ---------- Uzbek translation line: shown under Russian text, in double quotes ----------
export function Uz({ text, className }) {
  const { showUz } = useT()
  if (!showUz || !text) return null
  return (
    <span lang="uz" className={cx('mt-0.5 block text-[15px] font-normal not-italic leading-snug text-muted', className)}>
      “{text}”
    </span>
  )
}

// On/off switch for the translations.
function UzSwitch() {
  const { t, showUz, setShowUz } = useT()
  return (
    <button
      type="button"
      role="switch"
      aria-checked={showUz}
      onClick={() => setShowUz(!showUz)}
      className="inline-flex items-center gap-2.5 rounded-btn border border-line bg-white px-3 py-2 text-[14px] font-medium transition hover:border-ink"
    >
      <span className={cx('relative h-5 w-9 rounded-full transition', showUz ? 'bg-ink' : 'bg-line')} aria-hidden="true">
        <span className={cx('absolute top-0.5 h-4 w-4 rounded-full transition-all', showUz ? 'left-[18px] bg-primary' : 'left-0.5 bg-white')} />
      </span>
      {t('uz_toggle')}: <span className="font-semibold">{showUz ? t('uz_on') : t('uz_off')}</span>
    </button>
  )
}

// ---------- Lesson explanation blocks ----------
// uz: translation for this block — a string (rule/p/quote) or an array (list items / example lines).
function Block({ block, uz }) {
  const { t } = useT()
  const uzAt = (i) => (Array.isArray(uz) ? uz[i] : null)
  switch (block.t) {
    case 'rule':
      return (
        <div className="flex gap-3 rounded-btn bg-primary-50 p-4">
          <IconTile name="bulb" size="sm" tone="primary" className="bg-white" />
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-ink">{t('rule')}</p>
            <p className="font-medium">{block.text}<Uz text={uz} /></p>
          </div>
        </div>
      )
    case 'ex':
      return (
        <div className="rounded-btn border border-line bg-surface p-4">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-muted">{block.title || t('example')}</p>
          <div className="grid gap-1.5 font-medium">
            {block.lines.map((line, i) => <p key={i}>{line}<Uz text={uzAt(i)} /></p>)}
          </div>
        </div>
      )
    case 'list':
      return (
        <ul className="grid gap-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5">
              <Icon name="check" className="mt-1 h-[18px] w-[18px] text-success" />
              <span>{item}<Uz text={uzAt(i)} /></span>
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote className="border-l-0 rounded-btn bg-warn-50 p-4 italic">
          {block.lines.map((line, i) => <p key={i}>{line}</p>)}
          {block.by && <p className="mt-2 not-italic text-[14px] text-warn">— {block.by}</p>}
          <Uz text={Array.isArray(uz) ? uz.join(' ') : uz} className="mt-2" />
        </blockquote>
      )
    default:
      return <p>{block.text}<Uz text={uz} /></p>
  }
}

// ---------- Test after the lesson ----------
function Quiz({ g, s, i, lesson, hasNext, onRetry }) {
  const { t } = useT()
  const total = lesson.quiz.length
  const need = required(total)
  const [phase, setPhase] = useState('intro') // intro | question | result
  const [questions, setQuestions] = useState([])
  const [idx, setIdx] = useState(0)
  const [choice, setChoice] = useState(null)
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)
  const boxRef = useRef(null)

  // Move keyboard focus to the test box when its content changes (good for screen readers).
  useEffect(() => { if (phase !== 'intro') boxRef.current?.focus() }, [phase, idx])

  const start = () => {
    // Shuffle questions and answers every attempt. The first answer in the data is the correct one.
    // Uzbek translation of a question: [question, answers (same order as q.a) or null, explanation].
    const withUz = lesson.quiz.map((q, qi) => {
      const [uzQ, uzA, uzWhy] = lesson.uz?.quiz?.[qi] || []
      return { ...q, uzQ, uzWhy, uzA0: uzA?.[0], options: q.a.map((text, k) => ({ text, ok: k === 0, uz: uzA?.[k] })) }
    })
    setQuestions(shuffle(withUz).map((q) => ({ ...q, options: shuffle(q.options) })))
    setIdx(0); setChoice(null); setChecked(false); setScore(0); setPhase('question')
  }

  const q = questions[idx]
  const check = () => {
    if (choice === null) return
    setChecked(true)
    if (q.options[choice].ok) setScore((n) => n + 1)
  }
  const next = () => {
    if (idx + 1 < total) { setIdx(idx + 1); setChoice(null); setChecked(false); return }
    recordAttempt(g, s, i, score, total)
    setPhase('result')
  }

  const passed = score >= need

  return (
    <section aria-labelledby="test-title" className="card mt-8 p-5 md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <IconTile name="test" />
        <h2 id="test-title" className="text-h2-m">{t('test_title')}</h2>
      </div>

      <div ref={boxRef} tabIndex={-1} className="outline-none">
        {phase === 'intro' && (
          <div className="grid gap-4">
            <p className="text-muted">{t('test_intro', { n: total, k: need })}</p>
            <button type="button" onClick={start} className="btn-primary w-full sm:w-fit">
              <Icon name="play" /> {t('start_test')}
            </button>
          </div>
        )}

        {phase === 'question' && q && (
          <div className="grid gap-4">
            <div className="flex items-center justify-between text-[14px] text-muted">
              <span>{t('question_of', { i: idx + 1, n: total })}</span>
              <span className="flex gap-1" aria-hidden="true">
                {questions.map((_, k) => (
                  <span key={k} className={cx('h-2 w-6 rounded-full', k < idx ? 'bg-ink' : k === idx ? 'bg-primary' : 'bg-line')} />
                ))}
              </span>
            </div>
            <p className="text-[19px] font-semibold leading-snug" lang="ru">{q.q}<Uz text={q.uzQ} className="text-[16px]" /></p>

            <div role="radiogroup" aria-label={q.q} className="grid gap-2">
              {q.options.map((opt, k) => {
                const selected = choice === k
                const state = checked ? (opt.ok ? 'right' : selected ? 'wrong' : 'idle') : selected ? 'selected' : 'idle'
                return (
                  <button
                    key={k}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    disabled={checked}
                    onClick={() => setChoice(k)}
                    className={cx(
                      'flex min-h-[52px] items-center gap-3 rounded-btn border-2 px-4 py-3 text-left text-[16px] transition disabled:cursor-default',
                      state === 'idle' && 'border-line bg-white hover:border-ink/40 hover:bg-primary-50',
                      state === 'selected' && 'border-ink bg-primary-50',
                      state === 'right' && 'border-success bg-success-50',
                      state === 'wrong' && 'border-danger bg-danger-50',
                    )}
                  >
                    <span className={cx('grid h-6 w-6 flex-none place-items-center rounded-full border-2',
                      state === 'selected' ? 'border-ink bg-ink text-white' : state === 'right' ? 'border-success bg-success text-white' : state === 'wrong' ? 'border-danger bg-danger text-white' : 'border-line')}>
                      {state === 'right' && <Icon name="check" className="h-4 w-4" />}
                      {state === 'wrong' && <Icon name="close" className="h-4 w-4" />}
                    </span>
                    <span lang="ru">{opt.text}<Uz text={opt.uz} /></span>
                  </button>
                )
              })}
            </div>

            {checked && (
              <div role="status" className={cx('flex gap-3 rounded-btn p-4', q.options[choice].ok ? 'bg-success-50 text-success' : 'bg-danger-50 text-danger')}>
                <Icon name={q.options[choice].ok ? 'check-circle' : 'x-circle'} className="h-6 w-6" />
                <div className="text-ink">
                  <p className="font-semibold">
                    {q.options[choice].ok ? t('correct') : t('wrong') + q.a[0]}
                    {!q.options[choice].ok && <Uz text={q.uzA0} />}
                  </p>
                  {q.why && <p className="text-[15px] text-muted" lang="ru">{q.why}<Uz text={q.uzWhy} /></p>}
                </div>
              </div>
            )}

            <div>
              {!checked ? (
                <button type="button" onClick={check} disabled={choice === null} className="btn-primary w-full sm:w-fit">{t('check')}</button>
              ) : (
                <button type="button" onClick={next} className="btn-primary w-full sm:w-fit">
                  {idx + 1 < total ? t('next') : t('finish')} <Icon name="arrow" />
                </button>
              )}
            </div>
          </div>
        )}

        {phase === 'result' && (
          <div className="grid justify-items-start gap-4" role="status">
            <div className="flex items-center gap-3">
              <IconTile name={passed ? 'trophy' : 'refresh'} size="lg" tone={passed ? 'success' : 'warn'} />
              <div>
                <p className="text-h3">{passed ? t('result_pass') : t('result_fail')}</p>
                <p className="text-muted">{t('result_score', { c: score, n: total })}</p>
              </div>
            </div>
            {!passed && <p className="rounded-btn bg-warn-50 p-4 text-ink">{t('result_need', { k: need })}</p>}
            <div className="flex flex-wrap gap-3">
              {passed ? (
                hasNext ? (
                  <a href={href.lesson(g, s, i + 1)} className="btn-primary">{t('next_lesson')} <Icon name="arrow" /></a>
                ) : (
                  <p className="pill bg-success-50 text-success"><Icon name="trophy" className="h-4 w-4" /> {t('subject_done')}</p>
                )
              ) : (
                <button type="button" onClick={() => { setPhase('intro'); onRetry() }} className="btn-primary">
                  <Icon name="refresh" /> {t('retry')}
                </button>
              )}
              <a href={href.subject(g, s)} className="btn-secondary">{t('to_list')}</a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// ---------- Page ----------
export default function Lesson({ g, s, i }) {
  const { t, lang } = useT()
  const progress = useProgress()
  const found = getLesson(g, s, i)
  if (!found) return <NotFound />
  const { subject, lesson } = found

  const crumbs = [
    { label: t('grade', { n: g }), to: href.grade(g) },
    { label: subject.name[lang], to: href.subject(g, s) },
    { label: t('lesson_n', { n: i }) },
  ]

  // Locked: the previous lesson's test is not passed yet.
  if (!isUnlocked(progress, g, s, i)) {
    return (
      <div className="container-page max-w-prose pt-6">
        <Breadcrumbs items={crumbs} />
        <div className="card grid justify-items-start gap-4 p-6 md:p-8">
          <IconTile name="lock" size="lg" tone="muted" />
          <h1 className="text-h2-m md:text-h2">{t('locked_title')}</h1>
          <p className="text-muted">{t('locked_text', { n: i - 1 })}</p>
          <a href={href.lesson(g, s, i - 1)} className="btn-primary">{t('go_to_lesson', { n: i - 1 })} <Icon name="arrow" /></a>
        </div>
      </div>
    )
  }

  const passed = progress[lessonKey(g, s, i)]?.passed
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="container-page max-w-[880px] pt-6">
      <Breadcrumbs items={crumbs} />

      <article className="card p-5 md:p-8">
        <header className="mb-6 grid gap-3 border-b border-line pb-6">
          <div className="flex flex-wrap items-center gap-2 text-[14px] text-muted">
            <IconTile name={subject.icon} size="sm" />
            <span>{t('grade', { n: g })} · {subject.name[lang]} · {t('lesson_n', { n: i })}</span>
            {passed && <StatusPill status="done" />}
          </div>
          <h1 className="text-h1-m md:text-h1" lang="ru">{lesson.title}<Uz text={lesson.uz?.title} className="mt-1 text-[18px] md:text-[20px]" /></h1>
          <div className="flex gap-2.5 rounded-btn border border-line p-3.5">
            <Icon name="target" className="mt-0.5 h-5 w-5 text-ink" />
            <p><span className="font-semibold">{t('goal')}: </span><span lang="ru">{lesson.goal}</span><Uz text={lesson.uz?.goal} /></p>
          </div>
          {lang === 'uz' && <p className="text-[14px] text-muted">{t('content_lang')}</p>}
          {lesson.uz && <div><UzSwitch /></div>}
        </header>

        <div className="grid gap-4 text-[17px] leading-[1.7]" lang="ru">
          {lesson.body.map((block, k) => <Block key={k} block={block} uz={lesson.uz?.body?.[k]} />)}
        </div>
      </article>

      {/* key: restart the test state when moving to another lesson */}
      <Quiz key={lessonKey(g, s, i)} g={g} s={s} i={i} lesson={lesson} hasNext={i < subject.lessons.length} onRetry={scrollTop} />
    </div>
  )
}
