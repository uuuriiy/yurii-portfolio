import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Tag } from '../components/Tag'
import { categories, projects } from '../data/projects'
import type { Category, Project } from '../data/projects'

type Filter = 'All' | Category

const filters: Filter[] = ['All', ...categories]

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))

  return (
    <Section id="projects" index="03" title="Selected Projects">
      <Reveal>
        <LayoutGroup>
          <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = f === filter
              const count = f === 'All' ? projects.length : projects.filter((p) => p.categories.includes(f)).length
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    active ? 'text-bg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative font-medium">
                    {f} <span className={active ? 'opacity-60' : 'text-faint'}>{count}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </LayoutGroup>
      </Reveal>

      <motion.ul layout className="grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.ul>

      <p className="mt-8 text-sm text-faint">
        Most client work is under NDA — happy to walk through architecture and code samples in a call.
      </p>
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-faint/60"
    >
      <div className="mb-4 flex items-center justify-between gap-4 font-mono text-xs">
        <span className="text-faint">{project.company}</span>
        <span className="flex gap-2">
          {project.featured && <span className="text-accent">★ featured</span>}
          <span className="text-faint">{project.categories.join(' / ')}</span>
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        {project.title}
      </h3>

      <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-muted">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-faint" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </motion.li>
  )
}
