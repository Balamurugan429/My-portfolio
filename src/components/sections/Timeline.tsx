import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Microscope } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const typeIcons = {
  education: <GraduationCap className="text-electric-cyan" size={24} />,
  work: <Briefcase className="text-electric-purple" size={24} />,
  certification: <Award className="text-electric-emerald" size={24} />,
  research: <Microscope className="text-electric-accent" size={24} />,
};

export const Timeline: React.FC = () => {
  return (
    <section id="journey" className="relative px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-electric-cyan font-mono text-sm mb-3">// JOURNEY</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Academic & Professional{' '}
            <span className="bg-gradient-to-r from-electric-cyan to-electric-purple bg-clip-text text-transparent">
              Milestones
            </span>
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Glowing vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-cyan via-electric-purple to-electric-emerald opacity-50" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.timeline.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative flex gap-6 items-start"
              >
                {/* Glowing Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl glass border-2 border-electric-cyan/50 flex items-center justify-center glow-cyan">
                    {typeIcons[milestone.type as keyof typeof typeIcons]}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 glass glass-hover rounded-3xl p-6">
                  <div className="text-sm font-mono text-electric-cyan mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 mb-3">{milestone.organization}</p>
                  <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
