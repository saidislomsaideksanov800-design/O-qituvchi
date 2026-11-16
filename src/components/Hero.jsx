import site from '../data/site.js'
import { hero } from '../data/profile.js'
import { videos } from '../data/videos.js'
import { publications } from '../data/research.js'
import { resources } from '../data/resources.js'
import Button from './ui/Button.jsx'
import { Glyph, Icon3D } from './ui/Icon.jsx'
import { Blob, Eyebrow, Photo } from './ui/Bits.jsx'
import { cx } from '../lib/utils.js'

// Quick links that start the user flow: Home → Videos / Research / Resources.
const explore = [
  { href: '#videos', icon: 'play', label: 'Videolar', note: `${videos.length} ta video` },
  { href: '#research', icon: 'microscope', label: 'Tadqiqotlar', note: `${publications.length} ta nashr` },
  { href: '#resources', icon: 'book', label: 'Resurslar', note: `${resources.length} ta material` },
]

// Badge positions around the portrait (desktop / mobile).
const badgePos = [
  'left-[-12px] top-[8%] lg:left-[-56px] lg:top-[12%]',
  'right-[-12px] top-[46%] lg:right-[-48px] [animation-delay:-2s]',
  'bottom-[4%] left-[-12px] lg:bottom-[6%] lg:left-[-32px] [animation-delay:-4s]',
]

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="section !pb-20 !pt-6 lg:!pb-30 lg:!pt-14">
      <Blob className="right-[-200px] top-[520px] h-[560px] w-[560px] lg:right-[-120px] lg:top-[-80px]" />
      <Blob color="pink-soft" className="bottom-[-60px] left-[-160px] h-[420px] w-[420px]" />

      <div className="container-page grid items-center gap-6 lg:grid-cols-12">
        {/* Text column — not animated, so it paints instantly (good for LCP) */}
        <div className="grid gap-6 lg:col-span-7">
          <Eyebrow dot>{hero.status}</Eyebrow>
          <h1 id="hero-title" className="text-h1-m lg:text-h1">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">{line} </span>
            ))}
          </h1>
          <p className="max-w-[520px] text-[16px] leading-[1.6] text-slate lg:text-lead">{hero.subtitle}</p>

          <div className="mt-2 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} className="w-full sm:w-auto">
              {hero.primaryCta.label}
              <Glyph name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-[3px]" />
            </Button>
            <Button variant="glass" href={site.cvFile} download className="w-full sm:w-auto">
              {hero.secondaryCta.label}
              <Glyph name="download" />
            </Button>
          </div>

          <nav aria-label="Tezkor o'tish" className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
            {explore.map((item) => (
              <a key={item.href} href={item.href} className="glass card-hover inline-flex items-center gap-3 !rounded-btn py-2 pl-2 pr-4 no-underline">
                <Icon3D name={item.icon} size={32} />
                <span className="grid leading-[1.3]">
                  <b className="font-head text-[15px] font-semibold">{item.label}</b>
                  <small className="text-xs text-slate">{item.note}</small>
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Portrait in a glass frame with floating badges */}
        <div className="relative mt-8 flex justify-center py-8 lg:col-span-5 lg:col-start-8 lg:mt-0">
          <div className="glass relative w-full max-w-[300px] !rounded-[28px] p-2.5 lg:max-w-[440px] lg:!rounded-frame lg:p-3">
            <div className="aspect-[4/5] overflow-hidden rounded-[22px]">
              <Photo file={hero.portrait} alt={hero.portraitAlt} placeholder="ph-portrait" eager sizes="(min-width:1024px) 416px, 280px" />
            </div>

            {hero.badges.map((b, i) => (
              <div key={i} className={cx('glass glass-strong absolute z-10 flex items-center gap-2 !rounded-btn py-2 pl-2 pr-3 motion-safe:animate-float lg:gap-3 lg:!rounded-tile lg:py-2.5 lg:pl-2.5 lg:pr-4', badgePos[i])}>
                <Icon3D name={b.icon} size={48} className="h-8 w-8 lg:h-12 lg:w-12" />
                <div>
                  <b className="block font-head text-[15px] leading-tight tracking-tight lg:text-lg">{b.value}</b>
                  <small className="block text-xs leading-tight text-slate lg:text-[13px]">{b.label}</small>
                </div>
              </div>
            ))}

            <Icon3D name="play" size={64} className="absolute right-2 top-1 z-10 motion-safe:animate-float lg:right-6 lg:top-0" />
            <Icon3D name="bulb" className="absolute bottom-[18%] right-[-24px] z-10 hidden motion-safe:animate-float lg:block" />
            <Icon3D name="star" size={32} className="absolute left-[-24px] top-[34%] z-10 hidden motion-safe:animate-float lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
