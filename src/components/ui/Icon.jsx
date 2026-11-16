import { cx } from '../../lib/utils.js'

// 3D gradient icon. Sizes from the design: 48 (default) or 32. 64 only for decoration.
export function Icon3D({ name, size = 48, className }) {
  return (
    <svg className={cx('i3d', className)} width={size} height={size} aria-hidden="true" focusable="false">
      <use href={`#i-${name}`} />
    </svg>
  )
}

// Flat glyph (20 px) for inside buttons and links. Takes the text color.
export function Glyph({ name, className = 'h-5 w-5' }) {
  return (
    <svg className={cx('flex-none', className)} strokeWidth={2} aria-hidden="true" focusable="false">
      <use href={`#g-${name}`} />
    </svg>
  )
}
