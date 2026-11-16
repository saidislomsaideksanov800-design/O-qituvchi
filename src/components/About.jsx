import { about } from '../data/profile.js'
import { Icon3D } from './ui/Icon.jsx'
import { Blob, Eyebrow, Photo, Reveal } from './ui/Bits.jsx'
import GlassCard from './ui/GlassCard.jsx'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section section-alt">
      <Blob className="left-[-140px] top-20 h-[480px] w-[480px] opacity-70" />

      <div className="container-page grid gap-6 lg:grid-cols-12">
        {/* Photo with a glass caption */}
        <Reveal className="relative max-w-[480px] lg:col-span-5 lg:max-w-none">
          <GlassCard className="aspect-[4/5] p-3">
            <div className="h-full overflow-hidden rounded-btn">
              <Photo file={about.photo} alt={about.photoAlt} placeholder="ph-desk" sizes="(min-width:1024px) 456px, 90vw" />
            </div>
          </GlassCard>
          <GlassCard strong className="absolute bottom-7 left-7 right-7 flex w-fit items-center gap-3 !rounded-btn py-2 pl-2 pr-4">
            <Icon3D name="video" size={32} />
            <span className="text-sm">{about.photoCaption}</span>
          </GlassCard>
        </Reveal>

        <Reveal className="grid content-center gap-6 lg:col-span-6 lg:col-start-7">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 id="about-title" className="text-h2-m lg:text-h2">{about.title}</h2>
          <div className="grid gap-4 text-slate">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <ul className="mt-2 grid gap-4 md:grid-cols-3">
            {about.stats.map((s, i) => (
              <GlassCard as="li" hover key={i} className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-0.5 p-4 md:grid-cols-1 md:items-start md:gap-3 md:p-6">
                <Icon3D name={s.icon} size={32} className="row-span-2 md:row-span-1" />
                <span className="font-head text-2xl font-semibold leading-none tracking-tight md:text-[32px]">{s.value}</span>
                <span className="text-sm leading-[1.4] text-slate">{s.label}</span>
              </GlassCard>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
