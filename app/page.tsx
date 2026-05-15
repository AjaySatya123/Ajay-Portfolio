'use client';

import { motion } from 'framer-motion';
import { Component as EtheralShadow } from '@/components/ui/etheral-shadow';
import NavHeader from '@/components/ui/nav-header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Education from '@/components/education';
import Resume from '@/components/resume';
import { Terminal } from '@/components/terminal';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden bg-slate-950">
      {/* Animated Shadow Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <EtheralShadow
          color="rgba(0, 240, 255, 0.1)"
          animation={{ scale: 80, speed: 70 }}
          noise={{ opacity: 0.5, scale: 1 }}
          sizing="stretch"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <NavHeader />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Education />
        <Terminal />
        <Contact />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-cyan-500/30 bg-slate-950/80 backdrop-blur-md py-8 text-center"
        >
          <p className="text-slate-400 text-sm">
            © 2024 Vetsha Ajay Satya Sai Kumar. Built with <span className="text-cyan-400">React</span>, <span className="text-pink-400">Tailwind CSS</span>, and <span className="text-cyan-400">Framer Motion</span>.
          </p>
          <p className="text-slate-500 text-xs mt-2">

          </p>
        </motion.footer>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-cyan-500 text-slate-950 rounded-full font-bold flex items-center justify-center neon-border hover-glow"
      >
        ↑
      </motion.button>
    </div>
  );
}
