import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const GitHubMark: React.FC = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.05.13 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z" />
  </svg>
);

// =============================
// KINETIC TEXT — every letter flies in
// =============================
const KineticText: React.FC<{ text: string; delay?: number; className?: string }> = ({ text, delay = 0, className = '' }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap mr-[0.3em]">
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              initial={{ y: '110%', opacity: 0, rotateX: -90 }}
              animate={{ y: '0%', opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.85,
                delay: delay + (wi * 0.12) + (ci * 0.025),
                ease: [0.215, 0.61, 0.355, 1], // cubic-bezier
              }}
              className="inline-block"
              style={{ transformOrigin: '50% 100%' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};



// =============================
// MAGNETIC BUTTON — follows cursor
// =============================
const MagneticButton: React.FC<{
  children: React.ReactNode;
  href?: string;
  download?: boolean;
  onClick?: () => void;
  variant?: 'primary' | 'glass';
  icon?: React.ReactNode;
  external?: boolean;
}> = ({ children, href, onClick, variant = 'primary', icon, external, download }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    x.set(dx * 0.3);
    y.set(dy * 0.3);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  const baseClass = variant === 'primary'
    ? 'bg-white text-obsidian-950 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)]'
    : 'glass glass-hover text-white border-white/10';

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide ${baseClass} group overflow-hidden`}
    >
      {/* glow ring on hover */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-cyan/0 via-electric-cyan/40 to-electric-cyan/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
        className="inline-block"
      >
        {inner}
      </a>
    );
  }
  return <button onClick={onClick} className="inline-block">{inner}</button>;
};

// =============================
// FLOATING BUBBLE — animated background motion
// =============================
const FloatingOrb: React.FC<{ color: string; size: number; top: string; left: string; delay: number; duration: number }> = ({ color, size, top, left, delay, duration }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      top, left, width: size, height: size, background: color,
      filter: 'blur(60px)', opacity: 0.35,
    }}
    animate={{
      y: [0, -40, 0],
      x: [0, 30, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{ delay, duration, repeat: Infinity, ease: 'easeInOut' }}
  />
);

// =============================
// SCRAMBLE / ROTATING TITLE
// =============================
const roles = ['AI/ML Researcher', 'Engineer', 'Data Scientist', 'Full-Stack Builder', 'XAI Enthusiast'];
const RotatingRole: React.FC = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block min-w-[280px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ y: 30, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -30, opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-r from-electric-cyan via-blue-300 to-electric-purple bg-clip-text text-transparent font-semibold"
        >
          {roles[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// =============================
// GLASS PROFILE CARD WITH PARALLAX 3D
// =============================
const ProfileCard: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useTransform(y, [-150, 150], [12, -12]);
  const ry = useTransform(x, [-150, 150], [-12, 12]);
  const ts = useSpring(rx, { stiffness: 150, damping: 20 });
  const rs = useSpring(ry, { stiffness: 150, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: ts, rotateY: rs, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="glass rounded-[28px] p-7 border-white/10 shadow-2xl space-y-5 glow-cyan" style={{ transform: 'translateZ(40px)' }}>
        {/* Profile Image with ring */}
        <div className="relative aspect-square rounded-2xl overflow-hidden border-white/15 group">
          <motion.img
            src={`${import.meta.env.BASE_URL || '/'}profile.png`}
            alt="Balamurugan P"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-electric-cyan/20 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          {/* Floating sparkle on hover */}
          <motion.div
            className="absolute top-3 right-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="text-electric-cyan drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]" size={20} />
          </motion.div>
        </div>

        {/* Live IST Clock */}
        <CountdownClock />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(0,245,212,0.5)' }}
            className="px-4 py-3 rounded-xl glass border-white/10 text-center transition-colors"
          >
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Current</div>
            <div className="text-sm font-bold">AI Intern</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(0,245,212,0.5)' }}
            className="px-4 py-3 rounded-xl glass border-white/10 text-center transition-colors"
          >
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Certified</div>
            <div className="text-sm font-bold">Microsoft SQL</div>
          </motion.div>
        </div>

        {/* Location */}
        <div className="text-center text-sm text-gray-400 flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-emerald" />
          </span>
          📍 {PORTFOLIO_DATA.personal.location}
        </div>
      </div>
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-electric-purple/30 rounded-full blur-3xl animate-pulse-slow" />
    </motion.div>
  );
};

// =============================
// LIVE IST CLOCK
// =============================
const CountdownClock: React.FC = () => {
  const [t, setT] = useState(new Date());
  useEffect(() => {
    const i = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const fmt = t.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
  });
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl glass border-electric-cyan/30">
      <div className="flex items-center gap-2">
        <Clock size={18} className="text-electric-cyan" />
        <span className="text-xs uppercase text-gray-400 tracking-wider">Chennai, IN</span>
      </div>
      <motion.span
        key={fmt}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="font-mono text-sm text-electric-cyan font-bold tabular-nums"
      >
        {fmt}
      </motion.span>
    </div>
  );
};

// =============================
// SCROLL HINT — animated chevron
// =============================
const ScrollHint: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.6 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer group"
    onClick={onClick}
  >
    <span className="text-xs uppercase tracking-[0.3em] text-gray-500 group-hover:text-electric-cyan transition-colors">
      Scroll
    </span>
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      className="w-6 h-10 border-white/20 rounded-full flex items-start justify-center p-1.5"
    >
      <motion.div
        animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="w-1 h-2 bg-electric-cyan rounded-full"
      />
    </motion.div>
  </motion.div>
);

// =============================
// MAIN HERO
// =============================
export const Hero: React.FC = () => {
  const scrollToResearch = () => {
    document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Animated background orbs */}
      <FloatingOrb color="radial-gradient(circle, #00f5d4 0%, transparent 70%)" size={500} top="-10%" left="-10%" delay={0} duration={8} />
      <FloatingOrb color="radial-gradient(circle, #7b2cbf 0%, transparent 70%)" size={400} top="60%" left="80%" delay={2} duration={10} />
      <FloatingOrb color="radial-gradient(circle, #3a86ff 0%, transparent 70%)" size={350} top="20%" left="70%" delay={4} duration={9} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border-emerald-400/30 relative overflow-hidden"
          >
            <motion.span
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-emerald-400 rounded-full"
            />
            <span className="text-xs tracking-wider text-emerald-300 font-medium">
              AVAILABLE — AI/ML RESEARCH & ENGINEERING
            </span>
          </motion.div>

          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="font-mono text-electric-cyan/80 text-sm flex items-center gap-2"
          >
            <span className="text-electric-purple">$</span>
            <span>whoami</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-electric-cyan"
            />
          </motion.div>

          {/* KINETIC NAME */}
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
            <KineticText text="BALAMURUGAN" delay={0.2} className="bg-gradient-to-br from-white via-slate-100 to-blue-200 bg-clip-text text-transparent" />
            <br />
            <KineticText text="P" delay={0.6} className="bg-gradient-to-r from-electric-cyan to-electric-purple bg-clip-text text-transparent" />
            <span className="text-white">.</span>
          </h1>

          {/* Rotating Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="text-xl md:text-2xl flex items-center gap-3 flex-wrap"
          >
            <span className="text-gray-400">I'm a — </span>
            <RotatingRole />
          </motion.div>

          {/* Bio Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-gray-400 max-w-xl leading-relaxed text-[15px]"
          >
            {PORTFOLIO_DATA.personal.headline} Building explainable, production-ready systems
            where research meets real-world impact.
          </motion.p>

          {/* Academic Badge Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap gap-2.5"
          >
            {[
              { label: 'Saveetha Engineering College', color: 'border-electric-cyan/40 text-electric-cyan' },
              { label: '2024 – 2028', color: 'border-white/15 text-gray-300' },
              { label: 'CGPA · 7.92', color: 'border-electric-purple/40 text-electric-purple' },
              { label: 'Chennai, India', color: 'border-white/15 text-gray-300' },
            ].map((b) => (
              <motion.div
                key={b.label}
                whileHover={{ y: -3, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`px-3.5 py-1.5 rounded-full glass border ${b.color} text-xs font-medium cursor-default`}
              >
                {b.label}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.65, duration: 0.6 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <MagneticButton
              onClick={scrollToResearch}
              variant="primary"
              icon={<ArrowDown size={16} />}
            >
              Explore Work
            </MagneticButton>
            <MagneticButton
              href={`${import.meta.env.BASE_URL || '/'}resume.pdf`}
              download
              variant="glass"
              icon={<Download size={16} />}
            >
              Résumé
            </MagneticButton>
            <MagneticButton
              href={PORTFOLIO_DATA.personal.linkedin}
              external
              variant="glass"
              icon={<ExternalLink size={16} />}
            >
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href={PORTFOLIO_DATA.personal.github}
              external
              variant="glass"
              icon={<GitHubMark />}
            >
              GitHub
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: Profile Card */}
        <div className="relative">
          <ProfileCard />
        </div>
      </div>

      <ScrollHint onClick={scrollToResearch} />
    </section>
  );
};

export default Hero;
