import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { profile } from '../data/profile'

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="space-y-8">
          <dl className="grid grid-cols-3 gap-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-line bg-surface p-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-4xl font-semibold tracking-tight text-accent">{stat.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-faint">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-faint">Education</h3>
            <ul className="space-y-3">
              {profile.education.map((edu) => (
                <li key={edu.degree}>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-sm text-faint">
                    {edu.school} · {edu.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-faint">Languages</h3>
              <ul className="space-y-1 text-sm">
                {profile.languages.map((lang) => (
                  <li key={lang.name}>
                    {lang.name} <span className="text-faint">— {lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-faint">Off-screen</h3>
              <p className="text-sm">{profile.interests.join(' · ')}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
