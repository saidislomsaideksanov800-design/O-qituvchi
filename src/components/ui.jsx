import { useT } from '../lib/i18n.jsx'
import { href } from '../lib/router.js'
import { cx } from '../lib/utils.js'
import { Icon } from './Icon.jsx'

// "Главная › 3 класс › Математика" — shows where you are and lets you go back.
export function Breadcrumbs({ items }) {
  const { t } = useT()
  const all = [{ label: t('nav_home'), to: href.home() }, ...items]
  return (
    <nav aria-label="Breadcrumbs" className="mb-4 overflow-x-auto">
      <ol className="flex items-center gap-1.5 whitespace-nowrap text-[14px] text-muted">
        {all.map((item, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            {i > 0 && <Icon name="chevron-right" className="h-4 w-4 text-line" />}
            {item.to && i < all.length - 1 ? (
              <a href={item.to} className="text-primary no-underline hover:underline">{item.label}</a>
            ) : (
              <span aria-current="page" className="text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function ProgressBar({ value, max, className, label }) {
  const pct = max ? Math.round((value / max) * 100) : 0
  return (
    <div className={cx('h-2 overflow-hidden rounded-full bg-surface', className)} role="progressbar" aria-label={label || `${value} / ${max}`} aria-valuemin={0} aria-valuemax={max} aria-valuenow={value}>
      <div className={cx('h-full rounded-full transition-all', pct === 100 ? 'bg-success' : 'bg-primary')} style={{ width: `${pct}%` }} />
    </div>
  )
}

export function PageTitle({ title, lead, icon }) {
  return (
    <div className="mb-6 flex items-start gap-4 md:mb-8">
      {icon && icon}
      <div className="grid gap-1">
        <h1 className="text-h1-m md:text-h1">{title}</h1>
        {lead && <p className="text-muted">{lead}</p>}
      </div>
    </div>
  )
}

// Lesson status pill: done / open / locked.
export function StatusPill({ status }) {
  const { t } = useT()
  const map = {
    done: ['bg-success-50 text-success', 'check', t('status_done')],
    open: ['bg-primary-50 text-primary', 'play', t('status_open')],
    locked: ['bg-surface text-muted', 'lock', t('status_locked')],
  }
  const [cls, icon, label] = map[status]
  return (
    <span className={cx('pill', cls)}>
      <Icon name={icon} className="h-4 w-4" /> {label}
    </span>
  )
}
