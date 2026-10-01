import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Zap, Target, Brain, BarChart3 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const features = [
  { name: 'Dynamic Extraction Rate', value: 38, color: '#00f5d4' },
  { name: 'Seasonal Rainfall Index', value: 27, color: '#10b981' },
  { name: 'Aquifer Transmissivity', value: 19, color: '#7b2cbf' },
  { name: 'Historical Water Level Lag', value: 16, color: '#38bdf8' },
];

export const FlagshipResearch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preprocessing' | 'ensemble' | 'explainability'>('preprocessing');
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const tabContent = {
    preprocessing: {
      title: 'Extraction-Aware Preprocessing',
      description: 'Dynamic seasonal recharge weighting that accounts for non-linear extraction patterns and temporal aquifer behavior.',
      points: [
        'Temporal feature engineering with lag variables',
        'Extraction-rate weighted normalization',
        'Seasonal recharge coefficient adjustment',
      ],
    },
    ensemble: {
      title: 'Multi-Model Ensemble',
      description: 'Hybrid pipeline combining XGBoost, LightGBM, and Random Forest with optimized weight distribution.',
      points: [
        'XGBoost (40% weight): Gradient boosting for non-linear patterns',
        'LightGBM (35% weight): Fast, efficient leaf-wise growth',
        'Random Forest (25% weight): Robust outlier handling',
      ],
    },
    explainability: {
      title: 'SHAP & LIME Interpretability',
      description: 'Post-hoc explainability layer providing transparent feature importance and prediction reasoning.',
      points: [
        'SHAP TreeExplainer for global feature attribution',
        'LIME for local prediction interpretation',
        'Waterfall plots for stakeholder communication',
      ],
    },
  };

  const featureDescriptions: Record<string, string> = {
    'Dynamic Extraction Rate': 'Real-time extraction volume normalized by aquifer capacity',
    'Seasonal Rainfall Index': 'Weighted precipitation with monsoon pattern adjustment',
    'Aquifer Transmissivity': 'Geological permeability coefficient affecting recharge speed',
    'Historical Water Level Lag': 'Previous month water table depth as temporal signal',
  };

  return (
    <section id="research" className="relative px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-electric-cyan/20 to-electric-purple/20 border border-electric-cyan/30 text-sm font-semibold mb-6">
            <Zap size={16} className="text-electric-cyan" />
            FLAGSHIP RESEARCH & ML ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {PORTFOLIO_DATA.flagshipProject.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {PORTFOLIO_DATA.flagshipProject.description}
          </p>
        </motion.div>

        {/* Abstract */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <Target className="text-electric-cyan flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-3">Research Objectives</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                This research addresses two critical challenges in hydrogeological forecasting: (1) accurate prediction of 
                dynamic groundwater level fluctuations under variable extraction pressure, and (2) automated classification 
                of regional criticality zones to guide sustainable water management policy.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {PORTFOLIO_DATA.flagshipProject.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pipeline Architecture Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Brain className="text-electric-purple" size={24} />
            <h3 className="text-2xl font-bold">Pipeline Architecture</h3>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-6">
            {(['preprocessing', 'ensemble', 'explainability'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-electric-cyan to-electric-purple text-obsidian-950'
                    : 'glass glass-hover text-gray-300'
                }`}
              >
                {tab === 'preprocessing' && '1. Preprocessing'}
                {tab === 'ensemble' && '2. Ensemble'}
                {tab === 'explainability' && '3. Explainability'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-obsidian-900 rounded-xl p-6">
            <h4 className="text-xl font-bold text-electric-cyan mb-3">{tabContent[activeTab].title}</h4>
            <p className="text-gray-300 mb-4">{tabContent[activeTab].description}</p>
            <ul className="space-y-2">
              {tabContent[activeTab].points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-electric-purple rounded-full mt-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* SHAP Feature Importance Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="text-electric-cyan" size={24} />
            <h3 className="text-2xl font-bold">SHAP Feature Importance</h3>
          </div>

          <div className="space-y-4">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredFeature(feature.name)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">{feature.name}</span>
                  <span className="text-sm text-gray-400">{feature.value}%</span>
                </div>
                <div className="relative h-8 bg-obsidian-900 rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${feature.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-lg transition-all"
                    style={{ backgroundColor: feature.color }}
                  />
                </div>

                {/* Tooltip */}
                {hoveredFeature === feature.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-10 left-0 top-full mt-2 px-4 py-2 bg-obsidian-950 border border-white/20 rounded-lg text-sm max-w-md"
                  >
                    {featureDescriptions[feature.name]}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {PORTFOLIO_DATA.flagshipProject.metrics.map((metric, idx) => (
            <div key={idx} className="glass glass-hover rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-electric-cyan mb-2">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_DATA.flagshipProject.techStack.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full glass border border-white/10 text-sm">
                {tech}
              </span>
            ))}
          </div>

          <a
            href={PORTFOLIO_DATA.flagshipProject.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-electric-cyan to-electric-purple text-obsidian-950 font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
          >
            View Repository on GitHub
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
