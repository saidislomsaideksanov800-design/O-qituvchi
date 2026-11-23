import site from '../data/site.js'
import { href } from '../lib/router.js'
import { useT } from '../lib/i18n.jsx'
import { Icon } from './Icon.jsx'
import { Logo } from './Header.jsx'

export default function Footer() {
  const { t } = useT()
  return (
    <footer className="mt-16 border-t border-line bg-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="grid content-start gap-3">
          <Logo />
          <p className="max-w-sm text-[14px] text-muted">{t('footer_about')}</p>
        </div>
        <nav aria-label="Footer" className="grid content-start gap-2 text-[14px]">
          <a href={href.home()} className="text-muted no-underline hover:text-ink hover:underline">{t('nav_home')}</a>
          <a href={href.progress()} className="text-muted no-underline hover:text-ink hover:underline">{t('nav_progress')}</a>
          <a href={href.parents()} className="text-muted no-underline hover:text-ink hover:underline">{t('nav_parents')}</a>
        </nav>
        <div className="grid content-start gap-2 text-[14px]">
          <span className="font-semibold">{t('author')}: {site.author}</span>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-muted no-underline hover:text-ink hover:underline">
            <Icon name="phone" className="h-4 w-4" /> {site.phone}
          </a>
          <a href={`https://t.me/${site.telegram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted no-underline hover:text-ink hover:underline">
            <Icon name="telegram" className="h-4 w-4" /> @{site.telegram}
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-wrap justify-between gap-2 py-4 text-[13px] text-muted">
          <span>© {new Date().getFullYear()} {site.brand}</span>
          <span>{t('footer_disclaimer')}</span>
        </div>
      </div>
    </footer>
  )
}
