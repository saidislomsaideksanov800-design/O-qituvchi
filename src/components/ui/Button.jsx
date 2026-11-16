import { forwardRef } from 'react'
import { cx } from '../../lib/utils.js'

// Button from the design system.
// variant: primary (green gradient) | glass | ghost
// size:    md (56px) | sm (40px desktop / 48px mobile) | icon (48×48)
// Pass "href" to render a link instead of a <button>.

const base =
  'group inline-flex select-none items-center justify-center gap-2 whitespace-nowrap border border-transparent ' +
  'font-head font-semibold leading-none text-ink no-underline transition duration-200 ease-soft ' +
  'disabled:pointer-events-none disabled:opacity-45 aria-disabled:cursor-not-allowed aria-disabled:opacity-60 ' +
  'focus-visible:rounded-btn'

const variants = {
  primary:
    'bg-grad-green shadow-green hover:-translate-y-0.5 hover:bg-grad-green-hover hover:shadow-green-lg ' +
    'active:translate-y-0 active:scale-[.98] active:bg-grad-green-active active:shadow-green-sm',
  glass:
    'border-white/80 bg-white/60 shadow-glass-btn backdrop-blur-[20px] hover:-translate-y-0.5 hover:bg-white/90 ' +
    'hover:shadow-md active:scale-[.98] active:bg-pink-100',
  ghost: 'bg-transparent hover:bg-ink/5 active:bg-ink/10',
}

const sizes = {
  md: 'h-14 rounded-btn px-6 text-base',
  sm: 'h-12 rounded-sm px-4 text-sm md:h-10',
  icon: 'h-12 w-12 rounded-btn p-0',
}

const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', href, className, children, type = 'button', ...rest },
  ref,
) {
  const classes = cx(base, variants[variant], sizes[size], className)
  if (href !== undefined) {
    return (
      <a ref={ref} href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button ref={ref} type={type} className={classes} {...rest}>
      {children}
    </button>
  )
})

export default Button
