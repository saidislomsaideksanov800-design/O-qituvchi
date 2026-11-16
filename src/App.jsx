import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import site from './data/site.js'
import IconSprite from './components/ui/IconSprite.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Videos from './components/Videos.jsx'
import Research from './components/Research.jsx'
import Resources from './components/Resources.jsx'
import Experience from './components/Experience.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    // LazyMotion loads only the animation features we use (smaller bundle).
    // reducedMotion="user" turns off movement for people who ask for less motion.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <IconSprite />
        <a
          href="#main"
          className="absolute left-4 top-[-64px] z-[100] rounded-sm bg-ink px-4 py-3 text-white no-underline transition-[top] focus:top-4"
        >
          {site.skipLink}
        </a>

        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Videos />
          <Research />
          <Resources />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}
