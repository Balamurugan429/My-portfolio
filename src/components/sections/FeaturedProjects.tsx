import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

type Category = 'All' | 'AI & Machine Learning' | 'NLP & Conversational' | 'Computer Vision & Health';

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const categories: Category[] = ['All', 'AI & Machine Learning', 'NLP & Conversational', 'Computer Vision & Health'];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-electric-cyan font-mono text-sm mb-3">// EXPANDED PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Engineered{' '}
            <span className="bg-gradient-to-r from-electric-cyan to-electric-purple bg-clip-text text-transparent">
              AI, NLP & Diagnostic Systems
            </span>
          </h2>

          {/* Filter Tabs */}
          <div className="flex items-center gap-3 flex-wrap">
            <Filter size={20} className="text-gray-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-electric-cyan to-electric-purple text-obsidian-950'
                    : 'glass glass-hover text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass glass-hover rounded-3xl p-6 space-y-4 relative overflow-hidden"
            >
              {/* Spotlight hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-radial from-electric-cyan/10 via-transparent to-transparent" />
              </div>

              <div className="relative z-10">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 rounded-full glass border border-electric-cyan/30 text-xs font-semibold text-electric-cyan mb-4">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-electric-cyan transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-obsidian-900/50 border border-white/10 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-electric-cyan hover:gap-3 transition-all"
                >
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
