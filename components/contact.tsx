'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to send message. Please try again.');
        setLoading(false);
        return;
      }

      setSuccess(true);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setSuccess(false);
      }, 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('An error occurred. Please try again later.');
      setLoading(false);
    }
  };

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
    <section id="contact" className="min-h-screen py-20 relative">
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
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-6 bg-slate-900/50 border border-cyan-400/30 rounded-lg neon-border hover-glow"
            >
              <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Email</h3>
                <p className="text-slate-300">vetshaajay@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-6 bg-slate-900/50 border border-pink-500/30 rounded-lg neon-border-purple hover-glow"
            >
              <MapPin className="text-pink-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-pink-400 mb-2">Location</h3>
                <p className="text-slate-300">Telikicherla, Andhra Pradesh 534111</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-3"
            >
              <h3 className="text-lg font-bold text-cyan-400">Follow Me</h3>
              <div className="flex gap-4">
                <motion.a
                  href="tel:+917207328826"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-lg border-2 border-cyan-400/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-colors"
                  title="Call"
                >
                  📞
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ajay-vetsha-854b00258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-lg border-2 border-cyan-400/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-colors"
                  title="LinkedIn"
                >
                  in
                </motion.a>
                <motion.a
                  href="https://github.com/AjaySatya123"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-lg border-2 border-cyan-400/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-colors"
                  title="GitHub"
                >
                  ⚙
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-bold text-cyan-400 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-400/30 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:glow-box transition-all"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-bold text-cyan-400 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-400/30 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:glow-box transition-all"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-bold text-cyan-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-400/30 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:glow-box transition-all resize-none"
                placeholder="Your message..."
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading || submitted}
              className="w-full px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg neon-border hover-glow flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
            >
              <Send size={20} />
              {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Success Message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-cyan-500/10 border border-cyan-400/50 rounded-lg text-cyan-400 text-sm"
              >
                Thank you for your message! I&apos;ll get back to you soon. A confirmation email has been sent to {formData.email}.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
