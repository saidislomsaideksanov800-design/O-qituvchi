import site from '../data/site.js'
import { footer } from '../data/contact.js'
import { Logo } from './Navbar.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-ink/[.08] bg-gray-light pb-8 pt-12 [--slate:101_108_121]">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-ink/[.08] pb-8">
          <Logo />
          <nav aria-label="Pastki menyu">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {site.nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="rounded-md text-sm text-slate no-underline hover:text-ink hover:underline hover:underline-offset-4">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-6 text-[13px] text-slate">
          <span>© {new Date().getFullYear()} {site.fullName}. {footer.rights}</span>
          <a href="#top" className="text-slate">{footer.backToTop}</a>
        </div>
      </div>
    </footer>
  )
}
