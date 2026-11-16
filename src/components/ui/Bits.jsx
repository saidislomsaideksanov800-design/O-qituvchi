import { m } from 'framer-motion'
import { cx, getImage } from '../../lib/utils.js'

// Small pill above section titles. "dot" adds the green status dot.
export function Eyebrow({ children, dot = false }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/80 bg-pink-100 px-3.5 py-1.5 text-sm font-medium leading-5 text-ink">
      {dot && <span className="h-2 w-2 rounded-full bg-grad-green shadow-[0_0_0_3px_rgba(182,243,107,.35)]" aria-hidden="true" />}
      {children}
    </span>
  )
}

// Small label: pink (default), gray or glass.
export function Tag({ variant = 'pink', className, children }) {
  const styles = {
    pink: 'bg-pink-100',
    gray: 'bg-gray-light',
    glass: 'bg-white/75 backdrop-blur-md',
  }
  return (
    <span className={cx('inline-flex h-7 items-center rounded-full px-3 text-xs font-semibold text-ink', styles[variant], className)}>
      {children}
    </span>
  )
}

// Section title block: eyebrow + H2 + lead, with an optional action on the right.
export function SectionHeader({ eyebrow, title, lead, id, action, dot }) {
  return (
    <Reveal className="mb-8 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between lg:mb-12">
      <div className="grid max-w-[640px] gap-4">
        <Eyebrow dot={dot}>{eyebrow}</Eyebrow>
        <h2 id={id} className="text-h2-m lg:text-h2">{title}</h2>
        {lead && <p className="text-[16px] leading-[1.6] text-slate lg:text-lead">{lead}</p>}
      </div>
      {action}
    </Reveal>
  )
}

// Soft blurred color blob for depth behind glass cards.
export function Blob({ className, color = 'pink', style }) {
  const bg = color === 'pink' ? 'bg-pink-200' : 'bg-pink-100'
  return <div aria-hidden="true" className={cx('blob', bg, className)} style={style} />
}

// Fade-up on scroll (once). Respects "reduce motion" via <MotionConfig> in App.
export function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const Comp = m[as]
  return (
    <Comp
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  )
}

// Photo: real image if the file exists in src/assets/images, otherwise a soft placeholder.
export function Photo({ file, alt, placeholder = 'ph-a', className, eager = false, sizes }) {
  const src = getImage(file)
  if (!src) return <div className={cx('ph', placeholder, className)} role="img" aria-label={alt} />
  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      loading={eager ? 'eager' : 'lazy'}
      fetchpriority={eager ? 'high' : undefined}
      decoding="async"
      className={cx('h-full w-full object-cover', className)}
    />
  )
}
