import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Tag } from '../components/Tag'
import { skills } from '../data/skills'

export function Skills() {
  return (
    <Section id="skills" index="04" title="Tech Stack">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 0.05} className="bg-surface p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">{group.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
