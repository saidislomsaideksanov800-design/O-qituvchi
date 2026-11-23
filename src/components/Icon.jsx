import { GLYPHS } from '../assets/icons/glyphs.js'
import { cx } from '../lib/utils.js'

// One hidden SVG sprite with every icon (rendered once in App) → no extra file requests.
const markup = Object.entries(GLYPHS)
  .map(([name, body]) =>
    `<symbol id="g-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</symbol>`)
  .join('')

export function IconSprite() {
  return (
    <svg aria-hidden="true" focusable="false" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      dangerouslySetInnerHTML={{ __html: markup }} />
  )
}

// Line icon that takes the text color.
export function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg className={cx('flex-none', className)} aria-hidden="true" focusable="false">
      <use href={`#g-${name}`} />
    </svg>
  )
}

// Icon inside a soft colored square — used on cards (service-portal style).
const tones = {
  primary: 'bg-primary text-ink',
  success: 'bg-ink text-primary',
  muted: 'bg-surface text-muted',
  warn: 'bg-warn-50 text-warn',
  white: 'bg-white/15 text-white',
}
export function IconTile({ name, tone = 'primary', size = 'md', className }) {
  const box = size === 'lg' ? 'h-14 w-14 rounded-2xl' : size === 'sm' ? 'h-9 w-9 rounded-[10px]' : 'h-12 w-12 rounded-xl'
  const ico = size === 'lg' ? 'h-7 w-7' : size === 'sm' ? 'h-[18px] w-[18px]' : 'h-6 w-6'
  return (
    <span className={cx('grid flex-none place-items-center', box, tones[tone], className)} aria-hidden="true">
      <Icon name={name} className={ico} />
    </span>
  )
}
