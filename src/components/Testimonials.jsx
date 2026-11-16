import { testimonials, testimonialsSection } from '../data/testimonials.js'
import { Icon3D } from './ui/Icon.jsx'
import { Blob, Reveal, SectionHeader } from './ui/Bits.jsx'
import { getImage, initials } from '../lib/utils.js'

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="quotes-title" className="section section-alt">
      <Blob className="left-[25%] top-[10%] h-[620px] w-[620px] opacity-55" />

      <div className="container-page">
        <SectionHeader id="quotes-title" {...testimonialsSection} />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const photo = getImage(t.avatar)
            return (
              <Reveal as="figure" delay={i * 0.08} key={i} className="glass card-hover m-0 flex flex-col gap-6 p-6 md:p-8">
                <div className="flex items-center gap-3 font-head font-semibold">
                  <Icon3D name="star" size={32} />
                  <span>{t.rating}</span>
                </div>
                <blockquote className="m-0 flex-1 text-[17px] leading-[1.65]">“{t.quote}”</blockquote>
                <figcaption className="flex items-center gap-3 border-t border-ink/[.08] pt-6">
                  {photo ? (
                    <img src={photo} alt="" loading="lazy" className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm" />
                  ) : (
                    <span aria-hidden="true" className="grid h-12 w-12 flex-none place-items-center rounded-full border-2 border-white bg-grad-pink font-head font-semibold shadow-sm">
                      {initials(t.name)}
                    </span>
                  )}
                  <span>
                    <b className="block font-head font-semibold leading-[1.3]">{t.name}</b>
                    <small className="block text-[13px] text-slate">{t.role}</small>
                  </span>
                </figcaption>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
