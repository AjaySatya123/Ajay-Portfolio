'use client';

import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '3' },
    { label: 'Internships', value: '1' },
    { label: 'Technical Skills', value: '10+' },
    { label: 'CGPA', value: '8.76' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="min-h-screen py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-bg z-0 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-slate-300 mb-6 leading-relaxed">
              I&apos;m a passionate Full Stack Developer and a B.Tech graduate in Computer Science Engineering at KL University (2022-2026). With expertise in Java, Python, and modern web technologies like the MERN stack, I focus on building scalable and user-centric applications.
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-300 mb-6 leading-relaxed">
              My journey in tech started with learning Java and Python fundamentals, and has evolved into developing full-stack web applications. I combine technical expertise with problem-solving skills to create solutions that make a real impact.
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-300 mb-6 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring cloud technologies, contributing to GitHub projects, or collaborating with my team on innovative solutions.
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Career Objective</h3>
              <p className="text-slate-300">
                To excel in my chosen field and continuously learn and grow while making a positive impact on my organization. I aim to leverage my full-stack development skills to create innovative solutions that solve real-world problems.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-slate-900/50 border border-cyan-400/30 rounded-lg neon-border hover-glow"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
