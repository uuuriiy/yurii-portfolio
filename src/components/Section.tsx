import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <Reveal>
        <div className="mb-12 flex items-baseline gap-4">
          <span className="font-mono text-sm text-accent">{index}</span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <span className="h-px flex-1 bg-line" />
        </div>
      </Reveal>
      {children}
    </section>
  )
}
