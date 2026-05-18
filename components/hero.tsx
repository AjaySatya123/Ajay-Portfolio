'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Full Stack Developer', 'Java Developer', 'DevOps Engineer'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const text = roles[roleIndex];
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setDisplayText('');
        }, 2000);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg z-0" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 z-0" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        {/* Profile Picture with Cyberpunk Frame */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 p-1 -z-10 blur-lg opacity-75 animate-pulse" />

            {/* Neon border */}
            <div className="absolute inset-0 rounded-full border-4 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.8),inset_0_0_20px_rgba(0,240,255,0.2)]" />

            {/* Profile image */}
            <img
              src="IMG_20251105_130058.jpg"
              alt="Vetsha Ajay Satya Sai Kumar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="glow-text">Vetsha Ajay Satya Sai Kumar</span>
          </h1>
          <p className="text-xl md:text-3xl text-cyan-400 font-mono min-h-12">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto"
        >
          I excel in my chosen field and continuously learn and grow while making a positive impact on my organization. Building scalable solutions with Java, Python, and modern web technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="/resume.pdf"
            download="Vetsha_Ajay_Resume.pdf"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg neon-border hover-glow flex justify-center items-center"
          >
            Download Resume
          </motion.a>
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover-glow flex justify-center items-center"
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://github.com/AjaySatya123"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://www.linkedin.com/in/ajay-vetsha-854b00258/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-pink-500 rounded-lg text-pink-500 hover:bg-pink-500 hover:text-slate-950 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ChevronDown size={32} className="text-cyan-400 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
