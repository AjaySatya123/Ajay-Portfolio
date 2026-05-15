'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { GradientCard } from './ui/gradient-card-showcase';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Online Voting System',
      description: 'Developed a secure and responsive Online Voting System using the MERN stack to simplify and digitize the voting process. The application provides user authentication, voter registration, candidate management, and secure vote casting with a user-friendly interface. The system was designed to improve accessibility, transparency, and efficiency in elections while ensuring data security and smooth user experience.',
      features: [
        'User authentication and authorization',
        'Secure vote submission',
        'Candidate and voter management',
        'Responsive frontend interface',
        'Real-time database integration',
        'Admin dashboard for election management'
      ],
      skills: ['Full Stack Development', 'REST API Integration', 'Database Management', 'Authentication & Security', 'Responsive Web Design'],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'Git', 'GitHub'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      gradientFrom: '#06b6d4',
      gradientTo: '#3b82f6',
      github: 'https://github.com/AjaySatya123',
      live: '#',
      date: 'March 2024'
    },
    {
      title: 'Online Bus Ticket Booking System',
      description: 'Built a responsive web-based Online Bus Ticket Booking System using Django that enables users to search buses, select seats, and calculate ticket prices dynamically. The project focused on improving the online ticket reservation experience with an interactive UI and backend processing for booking management.',
      features: [
        'Bus search and booking functionality',
        'Dynamic ticket price calculation',
        'User-friendly interface',
        'Backend processing for ticket management',
        'Responsive design for multiple devices'
      ],
      skills: ['Backend Development with Django', 'Form Handling', 'Database Operations', 'UI Design', 'Web Application Development'],
      tech: ['Django', 'Python', 'HTML', 'CSS', 'SQLite', 'MySQL', 'VS Code', 'GitHub'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
      gradientFrom: '#ec4899',
      gradientTo: '#a855f7',
      github: 'https://github.com/AjaySatya123',
      live: '#',
      date: 'December 2023'
    },
    {
      title: 'Remote Internship Management System',
      description: 'Developed a Remote Internship Management System using Java technologies to streamline internship tracking and management. The application includes user authentication, data handling, API integration, and database management features aimed at improving communication and workflow between interns and administrators.',
      features: [
        'User login and authentication',
        'Internship data management',
        'API integration',
        'Database connectivity and management',
        'Performance-optimized backend operations'
      ],
      skills: ['Java Application Development', 'Backend Architecture', 'Database Design', 'API Integration', 'Performance Optimization'],
      tech: ['Java', 'JavaFX', 'Spring Boot', 'Eclipse', 'MySQL', 'PostgreSQL', 'GitHub'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      gradientFrom: '#f97316',
      gradientTo: '#ef4444',
      github: 'https://github.com/AjaySatya123',
      live: '#',
      date: 'December 2024'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive cyberpunk-themed portfolio with smooth animations and interactive elements. Built with Next.js and Tailwind CSS to showcase projects, skills, and resume dynamically.',
      features: [
        'Animated interactive components',
        'Master-detail project views',
        'Fully responsive layout',
        'Dark mode aesthetic',
        'Working contact form via Resend API'
      ],
      skills: ['Frontend Development', 'UI/UX Design', 'Animation with Framer Motion'],
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'React'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      gradientFrom: '#84cc16',
      gradientTo: '#22c55e',
      github: 'https://github.com/AjaySatya123',
      live: '#',
      date: '2024'
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
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
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[650px]">
          {/* List of projects (left side) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 overflow-y-auto max-h-[650px] custom-scrollbar pr-2 pb-4">
            {projects.map((project, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveProject(idx)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`text-left p-4 rounded-lg border transition-all duration-300 relative overflow-hidden group flex items-center justify-between ${
                  activeProject === idx 
                    ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                    : 'bg-slate-900/40 border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800/60'
                }`}
              >
                {activeProject === idx && (
                  <motion.div layoutId="activeIndicator" className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400" />
                )}
                <div>
                  <h3 className={`font-bold text-lg transition-colors ${activeProject === idx ? 'text-cyan-400' : 'text-slate-200'}`}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{project.date}</p>
                </div>
                <ChevronRight className={`transition-transform duration-300 ${activeProject === idx ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} size={20} />
              </motion.button>
            ))}
          </div>

          {/* Project Details (right side) */}
          <div className="w-full lg:w-2/3 h-[650px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full mx-auto lg:mx-0 lg:max-w-none"
              >
                <GradientCard
                  title={projects[activeProject].title}
                  image={projects[activeProject].image}
                  gradientFrom={projects[activeProject].gradientFrom}
                  gradientTo={projects[activeProject].gradientTo}
                >
                  <div className="flex flex-col h-full overflow-y-auto custom-scrollbar pr-4 mt-2 -mr-2">
                    <p className="text-sm leading-relaxed text-slate-200 mb-6">
                      {projects[activeProject].description}
                    </p>

                    <h4 className="text-cyan-400 font-semibold mb-2 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" /> Key Features
                    </h4>
                    <ul className="list-disc pl-5 text-xs text-slate-300 mb-6 space-y-1">
                      {projects[activeProject].features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="text-pink-400 font-semibold mb-2 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pink-400" /> Skills Demonstrated
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[activeProject].skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 text-[11px] font-mono bg-pink-500/10 border border-pink-500/30 text-pink-300 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-cyan-400 font-semibold mb-2 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" /> Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {projects[activeProject].tech.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 py-1 text-[11px] font-mono bg-slate-800/50 border border-cyan-400/50 text-cyan-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links - Pushed to bottom */}
                    <div className="flex gap-4 mt-auto pb-2">
                      <motion.a
                        href={projects[activeProject].github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors z-30"
                      >
                        <Github size={18} />
                        <span className="text-sm font-semibold">Code</span>
                      </motion.a>
                      <motion.a
                        href={projects[activeProject].live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 border border-pink-500/50 text-pink-400 rounded hover:bg-pink-500/10 transition-colors z-30"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm font-semibold">Live</span>
                      </motion.a>
                    </div>
                  </div>
                </GradientCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
