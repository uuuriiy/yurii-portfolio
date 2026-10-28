import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { experience } from '../data/experience'
import { projects } from '../data/projects'

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="relative border-l border-line">
        {experience.map((job, i) => {
          const jobProjects = projects.filter((p) => p.company === job.company)
          return (
            <li key={job.company} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
              <span
                className={`absolute top-2 -left-[5px] size-[9px] rounded-full ring-4 ring-bg ${
                  i === 0 ? 'bg-accent' : 'bg-faint'
                }`}
              />
              <Reveal delay={i * 0.05}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold">
                    {job.role} <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-faint">{job.period}</span>
                </div>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted">{job.summary}</p>
                <p className="mt-4 text-sm text-faint">
                  <span className="text-muted">{jobProjects.length} selected projects:</span>{' '}
                  {jobProjects.map((p) => p.title).join(' · ')}
                </p>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
