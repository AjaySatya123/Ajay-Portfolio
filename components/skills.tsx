'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Settings, Zap } from 'lucide-react';
import { GradientCard } from './ui/gradient-card-showcase';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={28} />,
      skills: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
      gradientFrom: '#22d3ee', // cyan-400
      gradientTo: '#3b82f6', // blue-500
    },
    {
      title: 'Frameworks & Technologies',
      icon: <Database size={28} />,
      skills: ['React', 'Django', 'Spring Boot', 'MySQL', 'MongoDB'],
      gradientFrom: '#ec4899', // pink-500
      gradientTo: '#a855f7', // purple-500
    },
    {
      title: 'Developer Tools',
      icon: <Settings size={28} />,
      skills: ['VS Code', 'Eclipse', 'GitHub', 'Linux', 'Git'],
      gradientFrom: '#fb923c', // orange-400
      gradientTo: '#ef4444', // red-500
    },
    {
      title: 'Database & DevOps',
      icon: <Zap size={28} />,
      skills: ['MySQL', 'MongoDB', 'Jenkins', 'JUnit', 'AWS'],
      gradientFrom: '#a3e635', // lime-400
      gradientTo: '#22c55e', // green-500
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="skills" className="min-h-screen py-20 relative">
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
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="h-full"
            >
              <GradientCard
                title={category.title}
                gradientFrom={category.gradientFrom}
                gradientTo={category.gradientTo}
              >
                {/* Icon */}
                <div className="mb-4 text-cyan-300 flex items-center">
                  {category.icon}
                </div>

                {/* Skills List */}
                <ul className="space-y-2 flex-grow">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.li
                      key={skillIdx}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: skillIdx * 0.1 }}
                      viewport={{ once: true }}
                      className="text-slate-200 text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>

                {/* Progress Bar */}
                <motion.div
                  className="mt-6 h-1 bg-slate-700/50 rounded-full overflow-hidden"
                  whileInView={{ background: 'rgb(148, 0, 211, 0.3)' }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-pink-500"
                  />
                </motion.div>
              </GradientCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
