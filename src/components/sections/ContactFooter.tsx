import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp, Copy, Check } from 'lucide-react';
import canvasConfetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ContactFooter: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setEmailCopied(true);
    canvasConfetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative px-6 py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-electric-cyan to-electric-purple bg-clip-text text-transparent">
              LET'S BUILD SOMETHING INTELLIGENT
            </span>
            <br />
            <span className="text-electric-cyan">GET IN TOUCH</span>
          </h2>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Email Card - Interactive Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass glass-hover rounded-3xl p-8 space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-electric-cyan" size={24} />
              <h3 className="text-xl font-bold">Email</h3>
            </div>
            
            <div className="flex items-center justify-between gap-4">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="text-lg md:text-xl font-semibold text-electric-cyan hover:text-electric-purple transition-colors break-all"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>
              
              <button
                onClick={copyEmail}
                className="flex-shrink-0 w-12 h-12 rounded-xl glass hover:bg-electric-cyan/20 flex items-center justify-center transition-all group"
                title="Copy email"
              >
                {emailCopied ? (
                  <Check className="text-electric-emerald" size={20} />
                ) : (
                  <Copy className="text-gray-400 group-hover:text-electric-cyan" size={20} />
                )}
              </button>
            </div>

            {emailCopied && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-electric-emerald flex items-center gap-2"
              >
                <Check size={16} />
                Email copied to clipboard!
              </motion.div>
            )}
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass glass-hover rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-electric-purple" size={24} />
              <h3 className="text-xl font-bold">Phone</h3>
            </div>
            <a
              href={`tel:${PORTFOLIO_DATA.personal.phone}`}
              className="text-lg font-semibold hover:text-electric-cyan transition-colors"
            >
              {PORTFOLIO_DATA.personal.phone}
            </a>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass glass-hover rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-electric-emerald" size={24} />
              <h3 className="text-xl font-bold">Location</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {PORTFOLIO_DATA.personal.location}
            </p>
            <p className="text-sm text-gray-500 mt-2">{PORTFOLIO_DATA.personal.timezone}</p>
          </motion.div>
        </div>

        {/* Social Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {/* GitHub */}
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass glass-hover rounded-3xl p-8 flex items-center justify-between transition-all hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-electric-cyan/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-electric-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">GitHub</h3>
                <p className="text-gray-400 text-sm">View my code & projects</p>
              </div>
            </div>
            <ArrowUp className="text-electric-cyan rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass glass-hover rounded-3xl p-8 flex items-center justify-between transition-all hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-electric-purple/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-electric-purple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                <p className="text-gray-400 text-sm">Connect professionally</p>
              </div>
            </div>
            <ArrowUp className="text-electric-purple rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
          </a>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400 text-sm">
            © 2026 {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group px-6 py-3 rounded-full glass glass-hover border border-white/10 font-semibold flex items-center gap-2 hover:scale-105 transition-all"
          >
            Back to Top
            <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={18} />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};
