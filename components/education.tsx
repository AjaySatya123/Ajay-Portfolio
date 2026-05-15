'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'AWS Cloud Virtual Internship – AICTE',
      school: 'AICTE / Amazon Web Services',
      year: '2024',
      description: 'Successfully completed the AWS Cloud Virtual Internship offered through AICTE, gaining practical exposure to cloud computing concepts, AWS services, and real-world cloud deployment workflows. Developed hands-on understanding of designing, deploying, and managing scalable cloud-based applications using Amazon Web Services.',
      icon: <Award size={24} />,
      link: null,
    },
    {
      degree: 'B.Tech in Computer Science Engineering',
      school: 'KL University, Vijayawada',
      year: '2022 - 2026',
      description: 'CGPA: 8.76. Currently pursuing degree with focus on full-stack development and cloud technologies.',
      icon: <GraduationCap size={24} />,
      link: null,
    },
    {
      degree: 'Intermediate',
      school: 'SASI JUNIOR COLLEGE',
      year: '2020 - 2022',
      description: 'Percentage: 70%. Strong foundation in mathematics and science.',
      icon: <Award size={24} />,
      link: null,
    },
    {
      degree: 'SSC',
      school: 'SASI EM High School',
      year: '2020',
      description: 'Percentage: 96%. Excellent academic performance in foundational studies.',
      icon: <Award size={24} />,
      link: null,
    },
    {
      degree: 'AWS Certified Cloud Practitioner',
      school: 'Amazon Web Services',
      year: '2024',
      description: 'Certified AWS Cloud Practitioner with knowledge of AWS services and cloud infrastructure.',
      icon: <Award size={24} />,
      link: 'https://www.credly.com/badges/7798406c-3748-4b00-af69-683ed3c50c2a/public_url',
    },
    {
      degree: 'Multicloud Network Associate',
      school: 'Multicloud Certification',
      year: '2024',
      description: 'Certified in multicloud networking and infrastructure management.',
      icon: <Award size={24} />,
      link: 'https://www.credly.com/badges/36eccbdc-e2d4-4d51-b3a6-3bbbbd101c40/public_url',
    },
  ];

  return (
    <section id="education" className="py-20 relative">
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
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Line */}
              {idx !== education.length - 1 && (
                <div className="absolute left-0 top-12 w-1 h-24 bg-gradient-to-b from-cyan-400 to-pink-500" />
              )}

              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="absolute left-0 top-2 w-8 h-8 bg-slate-950 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400"
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="p-6 bg-slate-900/50 border border-cyan-400/30 rounded-lg neon-border hover-glow"
              >
                <a
                  href={item.link || '#'}
                  target={item.link ? '_blank' : '_self'}
                  rel={item.link ? 'noopener noreferrer' : ''}
                  className={item.link ? 'cursor-pointer hover:opacity-80 transition-opacity block' : ''}
                >
                  <h3 className={`text-xl font-bold mb-2 ${item.link ? 'text-cyan-300 hover:text-cyan-200' : 'text-cyan-400'}`}>
                    {item.degree}
                    {item.link && <span className="text-pink-400 ml-2 text-sm">↗</span>}
                  </h3>
                </a>
                <p className="text-pink-400 font-semibold mb-1">
                  {item.school}
                </p>
                <p className="text-slate-400 text-sm mb-3">
                  {item.year}
                </p>
                <p className="text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
