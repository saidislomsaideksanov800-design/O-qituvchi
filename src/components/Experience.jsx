import { experienceSection, timeline } from '../data/experience.js'
import { Blob, Eyebrow, Reveal, Tag } from './ui/Bits.jsx'
import { cx } from '../lib/utils.js'

export default function Experience() {
  const { typeLabels } = experienceSection
  return (
    <section id="experience" aria-labelledby="exp-title" className="section">
      <Blob className="right-[-140px] top-[30%] h-[500px] w-[500px] opacity-70" />

      <div className="container-page grid gap-8 lg:grid-cols-12 lg:gap-6">
        {/* Heading stays in view while the timeline scrolls (desktop) */}
        <Reveal className="grid content-start gap-4 lg:sticky lg:top-[120px] lg:col-span-4 lg:self-start">
          <Eyebrow>{experienceSection.eyebrow}</Eyebrow>
          <h2 id="exp-title" className="text-h2-m lg:text-h2">{experienceSection.title}</h2>
          <p className="text-[16px] leading-[1.6] text-slate lg:text-lead">{experienceSection.lead}</p>
          <div className="mt-2 flex gap-2">
            <Tag>{typeLabels.work}</Tag>
            <Tag variant="gray">{typeLabels.education}</Tag>
          </div>
        </Reveal>

        <ol className="relative grid gap-6 pl-8 before:absolute before:bottom-4 before:left-[7px] before:top-4 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-green-2 before:via-pink-200 before:via-30% before:to-ink/15 lg:col-span-7 lg:col-start-6 lg:pl-12 lg:before:left-[15px]">
          {timeline.map((item, i) => (
            <Reveal as="li" key={i} className="glass card-hover relative grid gap-2 px-4 pb-6 pt-4 md:p-6">
              <span
                aria-hidden="true"
                className={cx(
                  'absolute -left-8 top-[22px] h-4 w-4 rounded-full border-[3px] md:top-[30px] lg:-left-[41px]',
                  item.current ? 'border-white bg-grad-green shadow-[0_0_0_4px_rgba(182,243,107,.4)]' : 'border-pink-200 bg-white',
                )}
              />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm font-semibold tabular-nums text-slate">{item.period}</span>
                <Tag variant={item.type === 'work' ? 'pink' : 'gray'}>{typeLabels[item.type]}</Tag>
              </div>
              <h3 className="text-h4">{item.role}</h3>
              <span className="text-[15px] text-slate">{item.org}</span>
              <p className="text-[15px] text-slate">{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
