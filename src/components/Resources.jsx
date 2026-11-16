import { useCallback, useEffect, useRef, useState } from 'react'
import { categories, resources, resourcesSection } from '../data/resources.js'
import Button from './ui/Button.jsx'
import Chip from './ui/Chip.jsx'
import { Glyph, Icon3D } from './ui/Icon.jsx'
import { Blob, SectionHeader } from './ui/Bits.jsx'
import { cx, linkProps, PH } from '../lib/utils.js'

function ResourceCard({ item, cover, index }) {
  const isDownload = item.action === 'download'
  const link = linkProps(item.href)
  return (
    <article className="glass card-hover flex snap-start flex-col gap-4 px-3 pb-6 pt-3">
      <div className={cx('ph relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-btn p-6', PH[index % PH.length])}>
        {/* Book spine for the "Books" tab */}
        {cover === 'book' && <span className="absolute inset-y-0 left-0 w-3.5 bg-gradient-to-r from-ink/[.08] to-white/50" aria-hidden="true" />}
        <Icon3D name={cover} className="relative" />
        <div className="relative">
          <div className="text-xs font-medium text-slate">{item.subtitle}</div>
          <div className="font-head text-[22px] font-bold leading-[1.15] tracking-tight" aria-hidden="true">{item.title}</div>
        </div>
      </div>
      <div className="grid flex-1 content-start gap-1.5 px-3">
        <h3 className="font-head text-[17px] font-semibold leading-[1.35]">{item.title}</h3>
        <p className="text-sm leading-normal text-slate">{item.description}</p>
      </div>
      <div className="flex items-center justify-between gap-2 px-3">
        <span className="text-xs text-slate">{item.meta}</span>
        <Button variant="glass" size="sm" {...link} {...(isDownload && !link['aria-disabled'] ? { download: '' } : {})}>
          {isDownload ? resourcesSection.downloadLabel : resourcesSection.detailsLabel}
          <Glyph name={isDownload ? 'download' : 'arrow'} />
          <span className="sr-only">: {item.title}</span>
        </Button>
      </div>
    </article>
  )
}

export default function Resources() {
  const [tab, setTab] = useState(categories[0].id)
  const [state, setState] = useState({ atStart: true, atEnd: false, label: '' })
  const trackRef = useRef(null)
  const tabRefs = useRef([])

  const items = resources.filter((r) => r.category === tab)
  const cover = categories.find((c) => c.id === tab)?.cover

  // Width of one card + gap = one carousel step.
  const step = () => {
    const track = trackRef.current
    const first = track?.firstElementChild
    if (!first) return 300
    return first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || '0')
  }

  // Update arrow states and the "1–4 / 5" counter.
  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const s = step()
    const firstVisible = Math.round(el.scrollLeft / s) + 1
    const visible = Math.max(1, Math.round(el.clientWidth / s))
    setState({
      atStart: el.scrollLeft <= 2,
      atEnd: el.scrollLeft >= el.scrollWidth - el.clientWidth - 2,
      label: `${firstVisible}–${Math.min(el.children.length, firstVisible + visible - 1)} / ${el.children.length}`,
    })
  }, [])

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [tab, update])

  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' })

  // Arrow keys move between tabs (WAI-ARIA tabs pattern).
  const onTabKey = (e, i) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    const next = (i + d + categories.length) % categories.length
    setTab(categories[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="resources" aria-labelledby="resources-title" className="section section-alt">
      <Blob className="left-[-160px] top-[-80px] h-[540px] w-[540px] opacity-65" />

      <div className="container-page">
        <SectionHeader id="resources-title" eyebrow={resourcesSection.eyebrow} title={resourcesSection.title} lead={resourcesSection.lead} />

        <div className="mb-8 flex flex-col items-stretch justify-between gap-4 md:flex-row md:items-center">
          <div role="tablist" aria-label="Resurs turlari" className="glass no-scrollbar inline-flex w-fit max-w-full gap-1 overflow-x-auto !rounded-tile p-1.5">
            {categories.map((c, i) => (
              <Chip
                key={c.id}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={tab === c.id}
                aria-controls="resources-panel"
                tabIndex={tab === c.id ? 0 : -1}
                onClick={() => setTab(c.id)}
                onKeyDown={(e) => onTabKey(e, i)}
                className="border-transparent bg-transparent backdrop-blur-none hover:border-transparent"
              >
                {c.label}
              </Chip>
            ))}
          </div>
          <div className="hidden gap-2 md:flex">
            <Button variant="glass" size="icon" className="!rounded-full" aria-label="Oldingi" disabled={state.atStart} onClick={() => scroll(-1)}>
              <Glyph name="chevron-left" />
            </Button>
            <Button variant="glass" size="icon" className="!rounded-full" aria-label="Keyingi" disabled={state.atEnd} onClick={() => scroll(1)}>
              <Glyph name="chevron-right" />
            </Button>
          </div>
        </div>

        <div id="resources-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
          <div
            ref={trackRef}
            onScroll={update}
            tabIndex={0}
            aria-label="Resurslar karuseli"
            className={cx(
              'no-scrollbar -mx-1 -mb-6 -mt-2 grid snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto scroll-smooth scroll-px-1 px-1 pb-6 pt-2 md:gap-6',
              'auto-cols-[78%] md:auto-cols-[calc((100%_-_24px)/2.3)] lg:auto-cols-[calc((100%_-_72px)/4)]',
            )}
          >
            {items.map((item, i) => <ResourceCard key={tab + i} item={item} cover={cover} index={i} />)}
          </div>
          <p className="mt-6 text-sm text-slate" aria-live="polite">{state.label}</p>
        </div>
      </div>
    </section>
  )
}
