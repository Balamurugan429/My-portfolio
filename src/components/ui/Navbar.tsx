import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-bold glow-text cursor-pointer hover:scale-105 transition-transform"
        >
          BP
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => scrollToSection('about')} className="hover:text-electric-cyan transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('research')} className="hover:text-electric-cyan transition-colors">
            Research
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-electric-cyan transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-electric-cyan transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('journey')} className="hover:text-electric-cyan transition-colors">
            Journey
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-electric-cyan transition-colors">
            Contact
          </button>
        </div>

        {/* Status Badge & Social Icons */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:block text-xs px-3 py-1.5 rounded-full bg-electric-emerald/20 text-electric-emerald border border-electric-emerald/30">
            Available
          </span>
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-electric-cyan transition-colors"
            title="GitHub"
          >
            <ExternalLink size={18} />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-electric-cyan transition-colors"
            title="LinkedIn"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};
