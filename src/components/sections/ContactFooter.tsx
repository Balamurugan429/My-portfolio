import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, ArrowUp, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ContactFooter: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setEmailCopied(true);
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
                <ExternalLink className="text-electric-cyan" size={32} />
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
                <ExternalLink className="text-electric-purple" size={32} />
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
