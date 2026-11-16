import { forwardRef } from 'react'
import { cx } from '../../lib/utils.js'

// Filter chip / tab. Active look comes from aria-pressed (filters) or aria-selected (tabs).
const Chip = forwardRef(function Chip({ className, children, count, ...rest }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className={cx(
        'inline-flex h-10 flex-none items-center gap-1.5 rounded-full border border-ink/10 bg-white/60 px-4 text-sm font-medium',
        'backdrop-blur-[20px] transition duration-200 hover:border-ink/20 hover:bg-white active:scale-[.97]',
        'aria-pressed:border-transparent aria-pressed:bg-grad-green aria-pressed:font-semibold aria-pressed:shadow-green-sm',
        'aria-selected:border-transparent aria-selected:bg-grad-green aria-selected:font-semibold aria-selected:shadow-green-sm',
        className,
      )}
      {...rest}
    >
      {children}
      {count !== undefined && <span className="text-xs text-slate">{count}</span>}
    </button>
  )
})

export default Chip
