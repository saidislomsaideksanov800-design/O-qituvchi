import { skillGroups, skillsSection } from '../data/skills.js'
import { Icon3D } from './ui/Icon.jsx'
import { Blob, Reveal, SectionHeader, Tag } from './ui/Bits.jsx'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <Blob className="right-[-180px] top-[40%] h-[520px] w-[520px] opacity-75" />
      <Blob color="pink-soft" className="left-[20%] top-[-120px] h-[380px] w-[380px]" />

      <div className="container-page">
        <SectionHeader id="skills-title" {...skillsSection} />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal as="article" delay={gi * 0.08} key={group.title} className="glass card-hover grid content-start gap-6 p-6 md:p-8">
              <div className="grid gap-4">
                <Icon3D name={group.icon} />
                <h3 className="text-h3-m lg:text-h3">{group.title}</h3>
                <p className="text-[15px] text-slate">{group.description}</p>
              </div>

              <ul className="grid gap-3">
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center gap-4 rounded-btn border border-white/90 bg-white/70 p-4 shadow-sm transition duration-200 ease-soft hover:translate-x-1 hover:shadow-md"
                  >
                    <Icon3D name={s.icon} size={32} />
                    <span>
                      <b className="block font-head text-base font-semibold leading-[1.3]">{s.name}</b>
                      <small className="block text-[13px] leading-[1.4] text-slate">{s.note}</small>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 border-t border-ink/[.08] pt-2">
                {group.tools.map((t, i) => <Tag key={i} variant="gray">{t}</Tag>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
