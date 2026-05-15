'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const terminalLines = [
  '> whoami',
  'Vetsha Ajay Satya Sai Kumar — B.Tech CSE @ KL University (2026)',
  '',
  '> pwd',
  '/home/ajay/portfolio/v1.0 — Andhra Pradesh, India',
  '',
  '> cat career_objective.txt',
  'Excel in my field, continuously learn & make a positive impact on my organization.',
  '',
  '> ls -la projects/',
  '🗳️  online-voting-system/     [MERN Stack]       March 2024',
  '🚌  bus-ticket-booking/        [Django + Python]  December 2023',
  '💼  internship-management/     [Java + Spring]    December 2024',
  '',
  '> grep -r "skills" .',
  'Languages:  Java, Python, JavaScript',
  'Web:        HTML, CSS, React, Django',
  'Database:   MySQL, MongoDB',
  'Tools:      VS Code, Eclipse, Jenkins, Git, Linux',
  '',
  '> cat certifications.txt',
  '✓ AWS Certified Cloud Practitioner  [2024]',
  '✓ Multicloud Network Associate       [2024]',
  '',
  '> node contact.js',
  '📧 vetshaajay@gmail.com',
  '📞 +91 7207328826',
  '🔗 github.com/AjaySatya123',
  '',
  '> export STATUS="Ready for internships & full-time opportunities"',
  '> echo $STATUS',
  'Ready for internships & full-time opportunities',
]

export const Terminal = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedLines((prev) => {
        if (prev.length < terminalLines.length) {
          return [...prev, terminalLines[prev.length]]
        }
        clearInterval(interval)
        return prev
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">Terminal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
        </motion.div>

        <motion.div
          className="rounded-xl border border-cyan-400 overflow-hidden glow-box"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Terminal Header */}
          <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-cyan-400">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm text-slate-400 ml-4">developer@portfolio:~$</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm space-y-1 min-h-96 max-h-96 overflow-y-auto bg-slate-950">
            {displayedLines.map((line, index) => (
              <motion.div
                key={index}
                className={`${
                  line?.startsWith('>') || line?.startsWith('$')
                    ? 'text-cyan-400'
                    : line?.startsWith('[')
                    ? 'text-green-400'
                    : 'text-purple-400'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {line}
              </motion.div>
            ))}
            {displayedLines.length > 0 && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="text-cyan-400"
              >
                _
              </motion.span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
