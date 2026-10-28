import { motion } from 'motion/react'
import { profile } from '../data/profile'

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <motion.div
        className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pt-16 sm:px-6"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
      >
        <motion.p variants={item} className="mb-6 flex items-center gap-2 font-mono text-sm text-muted">
          <span className="size-2 rounded-full bg-accent" />
          {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-semibold tracking-tighter text-balance sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p variants={item} className="mt-4 text-2xl font-medium tracking-tight text-muted sm:text-3xl">
          {profile.title}
        </motion.p>

        <motion.p variants={item} className="mt-8 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-faint hover:bg-surface"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-mono text-xs text-faint sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
      >
        scroll ↓
      </motion.a>
    </section>
  )
}
