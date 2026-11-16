import { cx } from '../../lib/utils.js'

// Frosted glass surface. "hover" adds the lift-on-hover state, "strong" is less transparent.
export default function GlassCard({ as: Tag = 'div', hover = false, strong = false, className, children, ...rest }) {
  return (
    <Tag className={cx('glass', strong && 'glass-strong', hover && 'card-hover', className)} {...rest}>
      {children}
    </Tag>
  )
}
