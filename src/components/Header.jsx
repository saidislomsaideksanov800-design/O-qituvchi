import { useEffect, useRef, useState } from 'react'
import site from '../data/site.js'
import { href } from '../lib/router.js'
import { useT } from '../lib/i18n.jsx'
import { cx } from '../lib/utils.js'
import { Icon } from './Icon.jsx'

export function Logo() {
  const { t } = useT()
  return (
    <a href={href.home()} className="inline-flex items-center gap-3 rounded-btn no-underline">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-primary" aria-hidden="true">
        <Icon name="book" className="h-6 w-6" />
      </span>
      <span className="grid leading-tight">
        <span className="text-[18px] font-bold tracking-tight text-ink">{site.brand}</span>
        <span className="text-[12px] text-muted">{t('tagline')}</span>
      </span>
    </a>
  )
}

function LangSwitch({ className }) {
  const { lang, setLang, t } = useT()
  return (
    <div role="group" aria-label={t('lang_label')} className={cx('inline-flex rounded-btn border border-line bg-white p-0.5', className)}>
      {['ru', 'uz'].map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className="h-9 rounded-[10px] px-3 text-[13px] font-semibold uppercase text-muted transition aria-pressed:bg-ink aria-pressed:text-primary"
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default function Header({ route }) {
  const { t } = useT()
  const [open, setOpen] = useState(false)
  const btnRef = useRef(null)

  const links = [
    { to: href.home(), label: t('nav_home'), icon: 'home', active: ['home', 'grade', 'subject', 'lesson'].includes(route.name) },
    { to: href.progress(), label: t('nav_progress'), icon: 'chart', active: route.name === 'progress' },
    { to: href.parents(), label: t('nav_parents'), icon: 'users', active: route.name === 'parents' },
  ]

  // Close the mobile menu on navigation or Esc.
  useEffect(() => setOpen(false), [route])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus() } }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const skipToMain = () => document.getElementById('main')?.focus()

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <button type="button" onClick={skipToMain} className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-btn focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        {t('skip')}
      </button>

      {/* Thin top bar */}
      <div className="hidden bg-ink md:block">
        <div className="container-page flex h-9 items-center justify-between text-[13px] text-white">
          <span>{t('topbar')}</span>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 font-medium text-primary no-underline hover:underline">
            <Icon name="phone" className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </div>

      <div className="container-page flex h-16 items-center gap-4 md:h-[72px]">
        <Logo />

        <nav aria-label="Main" className="ml-auto hidden nav:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <a
                  href={l.to}
                  aria-current={l.active ? 'page' : undefined}
                  className="inline-flex h-10 items-center gap-2 rounded-btn px-3.5 text-[15px] font-medium text-muted no-underline transition hover:bg-surface hover:text-ink aria-[current=page]:bg-primary aria-[current=page]:text-ink"
                >
                  <Icon name={l.icon} className="h-[18px] w-[18px]" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LangSwitch className="ml-auto nav:ml-2" />

        <button
          ref={btnRef}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-btn border border-line text-ink nav:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t('menu_close') : t('menu_open')}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white nav:hidden">
          <ul className="container-page grid gap-1 py-3">
            {links.map((l) => (
              <li key={l.to}>
                <a
                  href={l.to}
                  aria-current={l.active ? 'page' : undefined}
                  className="flex h-12 items-center gap-3 rounded-btn px-3 text-[16px] font-medium no-underline hover:bg-surface aria-[current=page]:bg-primary aria-[current=page]:text-ink"
                >
                  <Icon name={l.icon} />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
