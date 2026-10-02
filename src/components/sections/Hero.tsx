import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatISTTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const scrollToResearch = () => {
    const element = document.getElementById('research');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-emerald/30 text-sm"
          >
            <span className="w-2 h-2 bg-electric-emerald rounded-full animate-pulse" />
            <span className="text-electric-emerald">⚡ Available for AI/ML Research & Engineering Internships</span>
          </motion.div>

          {/* Name - Kinetic Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-br from-white via-slate-200 to-electric-cyan/80 bg-clip-text text-transparent uppercase"
          >
            {PORTFOLIO_DATA.personal.name}
          </motion.h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            {PORTFOLIO_DATA.personal.headline}
          </motion.p>

          {/* Academic Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <span className="px-4 py-2 rounded-full glass text-sm border border-white/10">
              Saveetha Engineering College, Chennai
            </span>
            <span className="px-4 py-2 rounded-full glass text-sm border border-white/10">
              2024 – 2028
            </span>
            <span className="px-4 py-2 rounded-full glass text-sm border border-electric-cyan/30 text-electric-cyan">
              CGPA: 7.92
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={scrollToResearch}
              className="group px-6 py-3 rounded-full bg-gradient-to-r from-electric-cyan to-electric-purple text-obsidian-950 font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg hover:shadow-electric-cyan/50"
            >
              Explore Research & Projects
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-full glass glass-hover border border-white/10 font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Download Resume
              <Download size={18} />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full glass glass-hover border border-white/10 font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Connect on LinkedIn
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6 glow-cyan">
            {/* Profile Image */}
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="/My-portfolio/profile.png" 
                alt="Balamurugan P" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Live IST Clock */}
            <div className="flex items-center justify-between px-4 py-3 rounded-xl glass border border-electric-cyan/20">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-electric-cyan" />
                <span className="text-sm text-gray-400">IST</span>
              </div>
              <span className="font-mono text-lg text-electric-cyan font-semibold">
                {formatISTTime(currentTime)}
              </span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="px-4 py-3 rounded-xl glass border border-white/10 text-center">
                <div className="text-xs text-gray-400 mb-1">Current Role</div>
                <div className="text-sm font-semibold">Intellipaat AI Intern</div>
              </div>
              <div className="px-4 py-3 rounded-xl glass border border-white/10 text-center">
                <div className="text-xs text-gray-400 mb-1">Certified</div>
                <div className="text-sm font-semibold">Microsoft SQL</div>
              </div>
            </div>

            {/* Location */}
            <div className="text-center text-sm text-gray-400">
              📍 {PORTFOLIO_DATA.personal.location}
            </div>
          </div>

          {/* Floating accent */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl animate-pulse-slow" />
        </motion.div>
      </div>
    </section>
  );
};
