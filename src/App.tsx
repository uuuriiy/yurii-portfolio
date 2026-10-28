import { MotionConfig } from 'motion/react'
import { Nav } from './components/Nav'
import { profile } from './data/profile'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

const year = new Date().getFullYear()

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-8 font-mono text-xs text-faint sm:flex-row sm:justify-between sm:px-6">
        <span>
          © {year} {profile.name}
        </span>
        <span>Built with React 19, Vite, Tailwind CSS & Motion</span>
      </footer>
    </MotionConfig>
  )
}
