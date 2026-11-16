import { useState } from 'react'
import { publications, researchSection, topics } from '../data/research.js'
import Button from './ui/Button.jsx'
import Chip from './ui/Chip.jsx'
import { Glyph } from './ui/Icon.jsx'
import { Blob, Reveal, SectionHeader, Tag } from './ui/Bits.jsx'
import { linkProps } from '../lib/utils.js'

export default function Research() {
  const [filter, setFilter] = useState('all')
  const topicLabel = Object.fromEntries(topics.map((t) => [t.id, t.label]))
  const shown = filter === 'all' ? publications : publications.filter((p) => p.topic === filter)

  return (
    <section id="research" aria-labelledby="research-title" className="section">
      <Blob className="right-[-120px] top-[120px] h-[460px] w-[460px] opacity-70" />
      <Blob color="pink-soft" className="bottom-0 left-[-180px] h-[420px] w-[420px]" />

      <div className="container-page">
        <SectionHeader id="research-title" eyebrow={researchSection.eyebrow} title={researchSection.title} lead={researchSection.lead} />

        {/* Filter chips — scroll sideways on mobile */}
        <div role="group" aria-label="Mavzu bo'yicha filtrlash" className="no-scrollbar -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 py-1 md:mx-0 md:flex-wrap md:px-0">
          <Chip aria-pressed={filter === 'all'} onClick={() => setFilter('all')} count={publications.length}>
            {researchSection.allLabel}
          </Chip>
          {topics.map((t) => (
            <Chip key={t.id} aria-pressed={filter === t.id} onClick={() => setFilter(t.id)} count={publications.filter((p) => p.topic === t.id).length}>
              {t.label}
            </Chip>
          ))}
        </div>

        <div className="grid gap-3" aria-live="polite">
          {shown.map((p, i) => (
            <Reveal
              as="article"
              key={p.title + i}
              className="glass card-hover grid gap-3 !rounded-tile px-4 pb-4 pt-6 md:grid-cols-[72px_minmax(0,1fr)] md:gap-6 md:p-6 lg:grid-cols-[88px_minmax(0,1fr)_auto_auto] lg:items-center"
            >
              <span className="grid h-8 w-fit place-items-center rounded-[10px] bg-pink-100 px-3 font-head text-sm font-semibold md:h-14 md:w-auto md:rounded-btn md:px-0 md:text-lg">
                {p.year}
              </span>
              <div>
                <h3 className="font-head text-lg font-semibold leading-[1.4] tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-slate"><i>{p.journal}</i> · {p.index}</p>
              </div>
              <div className="flex gap-2 md:col-start-2 lg:col-start-auto">
                <Tag>{topicLabel[p.topic]}</Tag>
              </div>
              <a className="link w-fit md:col-start-2 lg:col-start-auto" {...linkProps(p.url, { external: true })}>
                {researchSection.readLabel} <Glyph name="arrow" className="h-[18px] w-[18px]" />
                <span className="sr-only">: {p.title}</span>
              </a>
            </Reveal>
          ))}
          {shown.length === 0 && <p className="glass p-8 text-center text-slate">{researchSection.emptyText}</p>}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="glass" {...linkProps(researchSection.moreUrl, { external: true })}>
            {researchSection.moreLabel} <Glyph name="external" />
          </Button>
        </div>
      </div>
    </section>
  )
}
