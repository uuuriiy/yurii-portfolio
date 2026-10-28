import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { profile } from '../data/profile'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section id="contact" index="05" title="Contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="pointer-events-none absolute -bottom-40 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <h3 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">Let's build something.</h3>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted text-pretty">
              Have a product, a role or an idea worth talking about? The fastest way to reach me is email.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-accent px-6 py-3 font-mono text-sm font-semibold text-bg transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="relative w-32 rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-faint hover:bg-elevated"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'copied' : 'copy'}
                    className="block"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                  >
                    {copied ? 'Copied ✓' : 'Copy email'}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

            <div className="mt-10 flex justify-center gap-6 font-mono text-sm">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-accent">
                LinkedIn ↗
              </a>
              <a href={profile.telegram} target="_blank" rel="noreferrer" className="text-muted hover:text-accent">
                Telegram ↗
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
