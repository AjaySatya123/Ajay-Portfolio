'use client';

import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-bg z-0 opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">
            Resume
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-slate-900/50 border-2 border-cyan-400 rounded-lg neon-border hover-glow relative"
          >
            <div className="absolute top-4 right-4">
              <FileText className="text-cyan-400" size={32} />
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Professional Resume
            </h3>

            <div className="space-y-4 text-slate-300">
              <div>
                <h4 className="text-cyan-300 font-semibold">ATS Optimized ✓</h4>
                <p className="text-sm">Formatted for Applicant Tracking Systems</p>
              </div>
              <div>
                <h4 className="text-cyan-300 font-semibold">Key Sections ✓</h4>
                <p className="text-sm">Experience, Projects, Skills, Education, Certifications</p>
              </div>
              <div>
                <h4 className="text-cyan-300 font-semibold">High Impact Content ✓</h4>
                <p className="text-sm">Quantifiable achievements and technical expertise</p>
              </div>
            </div>
          </motion.div>

          {/* Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400 rounded-lg text-center hover-glow"
            >
              <h4 className="text-xl font-bold text-cyan-400 mb-3">
                Download Resume
              </h4>
              <p className="text-slate-300 mb-6 text-sm">
                Get the complete professional resume with all details and achievements
              </p>
              <motion.a
                href="/resume.pdf"
                download="Vetsha_Ajay_Resume.pdf"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg flex items-center justify-center gap-2 mx-auto hover-glow cursor-pointer"
              >
                <Download size={20} />
                Download PDF
              </motion.a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-500 rounded-lg text-center hover-glow"
            >
              <h4 className="text-xl font-bold text-pink-400 mb-3">
                View Online
              </h4>
              <p className="text-slate-300 mb-6 text-sm">
                Check the interactive version with live project links
              </p>
              <motion.button
                onClick={() => document.getElementById('resume-viewer')?.classList.toggle('hidden')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-pink-500 text-slate-950 font-bold rounded-lg flex items-center justify-center gap-2 mx-auto hover-glow"
              >
                <FileText size={20} />
                View in Portfolio
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Embedded Resume Viewer */}
        <div id="resume-viewer" className="mt-12 hidden w-full h-[800px] border-2 border-cyan-400/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <iframe 
            src="/resume.pdf" 
            className="w-full h-full"
            title="Resume PDF Viewer"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
