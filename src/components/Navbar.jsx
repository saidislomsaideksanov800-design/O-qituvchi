import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import site from '../data/site.js'
import { socials } from '../data/contact.js'
import useActiveSection from '../hooks/useActiveSection.js'
import Button from './ui/Button.jsx'
import { Glyph, Icon3D } from './ui/Icon.jsx'
import { cx, linkProps } from '../lib/utils.js'

const SECTION_IDS = site.nav.map((item) => item.id)

// Logo: monogram tile with a green dot + full name.
export function Logo({ showName = true }) {
  return (
    <a href="#top" className="inline-flex items-center gap-3 rounded-sm no-underline">
      <span className="relative grid h-10 w-10 place-items-center rounded-sm bg-ink font-head text-[13px] font-bold tracking-tight text-white" aria-hidden="true">
        {site.monogram}
        <span className="absolute -bottom-[3px] -right-[3px] h-3 w-3 rounded-full border-2 border-white bg-grad-green" />
      </span>
      {showName ? <span className="font-head text-base font-semibold tracking-tight">{site.shortName}</span> : <span className="sr-only">{site.shortName}</span>}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const toggleRef = useRef(null)

  // Stronger glass after the page starts scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Stable function, so the menu's effect does not re-run on every render.
  const closeMenu = useCallback((returnFocus) => {
    setOpen(false)
    if (returnFocus) toggleRef.current?.focus()
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 py-3 md:py-4">
        <div className="container-page">
          <div
            className={cx(
              'glass flex h-16 items-center gap-6 rounded-tile pl-4 pr-2 transition duration-300 md:h-[72px] md:rounded-card md:pl-6 md:pr-4',
              scrolled && 'bg-white/80 shadow-glass-lg',
            )}
          >
            <Logo />

            <nav aria-label="Asosiy menyu" className="ml-auto hidden nav:block">
              <ul className="flex items-center gap-1">
                {site.nav.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="nav-link" aria-current={active === item.id ? 'true' : undefined}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button href="#contact" size="sm" className="ml-2 hidden nav:inline-flex">
              {site.navCta}
            </Button>

            <Button
              ref={toggleRef}
              variant="glass"
              size="icon"
              className="ml-auto nav:hidden"
              aria-label="Menyuni ochish"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Glyph name="menu" />
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={closeMenu} active={active} />
    </>
  )
}

// Glass drawer for screens under 1100px.
function MobileMenu({ open, onClose, active }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    // Lock page scroll, move focus into the menu, close with Esc, keep Tab inside.
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector('button')?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose(true)
      if (e.key !== 'Tab' || !panelRef.current) return
      const items = panelRef.current.querySelectorAll('a[href], button')
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          <m.div
            key="backdrop"
            className="fixed inset-0 z-[60] bg-ink/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onClose(true)}
            aria-hidden="true"
          />
          <m.div
            key="panel"
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menyu"
            className="glass fixed bottom-3 right-3 top-3 z-[61] flex w-[min(calc(100vw-24px),380px)] flex-col gap-6 overflow-y-auto !bg-white/80 p-6"
            initial={{ x: '110%' }}
            animate={{ x: 0 }}
            exit={{ x: '110%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="flex items-center justify-between">
              <Logo showName={false} />
              <Button variant="glass" size="icon" aria-label="Menyuni yopish" onClick={() => onClose(true)}>
                <Glyph name="close" />
              </Button>
            </div>

            <nav aria-label="Mobil menyu">
              <ul className="grid gap-1">
                {site.nav.map((item, i) => {
                  const current = active === item.id
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => onClose(false)}
                        aria-current={current ? 'true' : undefined}
                        className={cx(
                          'flex min-h-14 items-center justify-between rounded-btn px-4 font-head text-[20px] font-semibold no-underline transition hover:bg-white/90',
                          current && 'bg-white shadow-sm',
                        )}
                      >
                        <span className="inline-flex items-center">
                          <span className={cx('mr-3 grid h-8 w-8 place-items-center rounded-[10px] text-xs font-semibold', current ? 'bg-grad-green text-ink' : 'bg-gray-light text-slate')}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {item.label}
                        </span>
                        <Glyph name="arrow" />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="mt-auto grid gap-4">
              <Button href="#contact" className="w-full" onClick={() => onClose(false)}>{site.navCta}</Button>
              <div className="flex justify-center gap-3">
                {socials.map((s) => (
                  <a key={s.icon} {...linkProps(s.url, { external: true })} aria-label={s.label} className="glass grid h-14 w-14 place-items-center !rounded-btn transition hover:-translate-y-1">
                    <Icon3D name={s.icon} size={32} />
                  </a>
                ))}
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  )
}
