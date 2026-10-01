import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, Award, Shield } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const SkillMatrix: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'Programming & Core CS': <Code className="text-electric-cyan" size={24} />,
    'AI, ML & Explainability': <Brain className="text-electric-purple" size={24} />,
    'Data Tools & BI': <Database className="text-electric-emerald" size={24} />,
  };

  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-electric-cyan font-mono text-sm mb-3">// TECHNICAL ARSENAL</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Skills &{' '}
            <span className="bg-gradient-to-r from-electric-cyan to-electric-purple bg-clip-text text-transparent">
              Verified Certifications
            </span>
          </h2>
        </motion.div>

        {/* Part A: Technical Skills Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass glass-hover rounded-3xl p-8 space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                {iconMap[skillGroup.category]}
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 rounded-full bg-obsidian-900/50 border border-white/10 text-sm hover:border-electric-cyan/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Part B: Verified Certifications Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Featured Gold Certification */}
          {PORTFOLIO_DATA.certifications
            .filter((cert) => cert.featured)
            .map((cert) => (
              <div
                key={cert.certificateId}
                className="glass rounded-3xl p-8 border-2 border-electric-cyan/30 relative overflow-hidden"
              >
                {/* Gold accent glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/10 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-cyan/20 to-electric-purple/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="text-electric-cyan" size={32} />
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-electric-cyan/20 border border-electric-cyan/30 text-xs font-semibold text-electric-cyan mb-2">
                        VERIFIED CERTIFICATION
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-gray-400 mb-2">
                        {cert.issuer} • Issued {cert.date}
                      </p>
                      {cert.certificateId && (
                        <p className="text-sm font-mono text-electric-cyan">
                          Certificate ID: {cert.certificateId}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Award className="text-electric-cyan" size={24} />
                    <span className="text-sm font-semibold">Verified</span>
                  </div>
                </div>
              </div>
            ))}

          {/* Other Certification Pills */}
          <div className="flex flex-wrap gap-3">
            {PORTFOLIO_DATA.certifications
              .filter((cert) => !cert.featured)
              .map((cert, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 rounded-full glass border border-white/10 text-sm flex items-center gap-2"
                >
                  <Award size={16} className="text-electric-purple" />
                  <span>{cert.title}</span>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
