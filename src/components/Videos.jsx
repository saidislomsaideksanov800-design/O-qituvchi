import { useState } from 'react'
import { videos, videosSection } from '../data/videos.js'
import VideoModal from './VideoModal.jsx'
import { Glyph, Icon3D } from './ui/Icon.jsx'
import { Blob, Reveal, SectionHeader, Tag } from './ui/Bits.jsx'
import { cx, getImage, isPlaceholder, linkProps, PH } from '../lib/utils.js'

// Thumbnail: own image → YouTube thumbnail → soft placeholder.
function Thumb({ video, index, className, children }) {
  const own = getImage(video.thumbnail)
  const yt = !isPlaceholder(video.youtubeId) ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg` : null
  const src = own || yt
  return (
    // <span> (not <div>) because it sits inside a <button>.
    <span className={cx('relative block overflow-hidden rounded-btn', !src && cx('ph', PH[index % PH.length]), className)}>
      {src && <img src={src} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />}
      {children}
    </span>
  )
}

function PlayButton({ big }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        'absolute inset-0 m-auto grid place-items-center rounded-full border border-white/80 bg-white/55 shadow-[0_8px_24px_rgba(31,36,48,.08)] backdrop-blur-[16px]',
        'transition duration-300 ease-soft group-hover:scale-110 group-hover:bg-white/85 group-focus-visible:scale-110',
        big ? 'h-[72px] w-[72px] max-lg:-top-[30%] lg:h-24 lg:w-24' : 'h-[72px] w-[72px]',
      )}
    >
      <Icon3D name="play" />
    </span>
  )
}

export default function Videos() {
  const [current, setCurrent] = useState(null)
  const [featured, ...rest] = videos

  return (
    <section id="videos" aria-labelledby="videos-title" className="section section-alt">
      <Blob className="left-[30%] top-[-200px] h-[600px] w-[600px] opacity-60" />

      <div className="container-page">
        <SectionHeader
          id="videos-title"
          eyebrow={videosSection.eyebrow}
          title={videosSection.title}
          lead={videosSection.lead}
          action={
            <a className="link" {...linkProps(videosSection.channelUrl, { external: true })}>
              {videosSection.channelLabel} <Glyph name="arrow" className="h-[18px] w-[18px]" />
            </a>
          }
        />

        <div className="grid gap-4 md:grid-cols-12 md:gap-6">
          {/* Featured video: big card with glass title panel */}
          {featured && (
            <Reveal className="md:col-span-12 lg:col-span-8 lg:row-span-2">
              <button
                type="button"
                onClick={() => setCurrent(featured)}
                aria-label={`Videoni ko'rish: ${featured.title}`}
                className="glass card-hover group block h-full w-full p-3 text-left"
              >
                <Thumb video={featured} index={0} className="aspect-[4/5] md:aspect-video lg:aspect-auto lg:h-full lg:min-h-[420px]">
                  <Tag variant="glass" className="absolute left-3 top-3">{videosSection.featuredLabel}</Tag>
                  <PlayButton big />
                  <span className="glass glass-strong absolute bottom-3 left-3 right-3 grid gap-2 !rounded-tile p-4 lg:bottom-4 lg:left-4 lg:right-4 lg:p-6">
                    <span className="font-head text-lg font-semibold leading-[1.35] tracking-tight lg:text-2xl">{featured.title}</span>
                    <span className="flex gap-3 text-[13px] text-slate">
                      <span>{featured.category}</span><span>{featured.duration}</span><span>{featured.year}</span>
                    </span>
                  </span>
                </Thumb>
              </button>
            </Reveal>
          )}

          {rest.map((v, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06} className="md:col-span-6 lg:col-span-4">
              <button
                type="button"
                onClick={() => setCurrent(v)}
                aria-label={`Videoni ko'rish: ${v.title}`}
                className="glass card-hover group grid h-full w-full gap-4 px-3 pb-6 pt-3 text-left"
              >
                <Thumb video={v} index={i + 1} className="aspect-video">
                  <Tag variant="glass" className="absolute left-3 top-3">{v.category}</Tag>
                  <PlayButton />
                  <span className="absolute bottom-3 right-3 inline-flex h-7 items-center rounded-lg bg-white/80 px-2.5 text-xs font-semibold tabular-nums backdrop-blur">
                    {v.duration}
                  </span>
                </Thumb>
                <span className="grid gap-1.5 px-3">
                  <span className="font-head text-lg font-semibold leading-[1.35] tracking-tight">{v.title}</span>
                  <span className="text-[13px] text-slate">{v.year}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <VideoModal video={current} onClose={() => setCurrent(null)} />
    </section>
  )
}
