import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Zap, 
  BarChart3, 
  Network, 
  Database
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const features = [
  { name: 'Dynamic Extraction Rate', value: 38, color: '#00f5d4', desc: 'Normalized regional pumping rate vs recharge yield' },
  { name: 'Seasonal Rainfall Index', value: 27, color: '#6366f1', desc: 'Monsoon precipitation with lag-14 soil infiltration' },
  { name: 'Aquifer Transmissivity', value: 19, color: '#a855f7', desc: 'Hydraulic subsurface permeability & storage coefficient' },
  { name: 'Historical Water Level Lag', value: 16, color: '#38bdf8', desc: 'Autoregressive seasonal baseline anchor' },
];

export const FlagshipResearch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preprocessing' | 'ensemble' | 'explainability'>('ensemble');

  const tabContent = {
    preprocessing: {
      title: 'Extraction-Aware Preprocessing Engine',
      badge: 'Feature Engineering Rigor',
      description: 'Addresses non-linear seasonal recharge and dynamic extraction deficits without data leakage across temporal boundaries.',
      points: [
        'Rolling temporal window engineering with 30-day and 90-day recharge lag vectors',
        'Dynamic extraction-rate normalization weighted by local aquifer specific yield coefficients',
        'Outlier clipping and robust scaling preserving critical extreme hydrogeological drought signals',
      ],
    },
    ensemble: {
      title: 'Heterogeneous Multi-Model Ensemble',
      badge: 'Architecture Specification',
      description: 'Weighted combination of diverse gradient boosted trees and bagging regressors optimizing bias-variance trade-off.',
      points: [
        'XGBoost (40% Weight): Captures high-frequency non-linear extraction gradient shifts',
        'LightGBM (35% Weight): Leaf-wise deep tree growth minimizing mean absolute percentage error',
        'Random Forest (25% Weight): Variance stabilizing bagging regressor preventing overfitting in drought tails',
      ],
    },
    explainability: {
      title: 'Post-Hoc XAI (SHAP & LIME) Interpretability Layer',
      badge: 'Explainable AI Integration',
      description: 'Translates black-box ensemble decisions into verifiable scientific rationales required for municipal policy makers.',
      points: [
        'SHAP TreeExplainer for exact mathematical calculation of Shapley marginal contributions',
        'Global summary waterfall plots distinguishing anthropogenic extraction vs climate drought',
        'LIME local surrogate approximations for high-risk single-borewell criticality alerts',
      ],
    },
  };

  return (
    <section id="research" className="relative px-6 py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Research Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-electric-cyan/30 bg-electric-cyan/[0.04] text-xs font-mono text-electric-cyan tracking-wider uppercase">
            <Zap size={14} className="text-electric-cyan" />
            Flagship Research & Machine Learning Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Explainable, Extraction-Aware Ensemble Learning for{' '}
            <span className="bg-gradient-to-r from-electric-cyan via-blue-200 to-indigo-400 bg-clip-text text-transparent">
              Groundwater Criticality Classification
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            A scientifically grounded machine learning system combining dual-stage regression and categorical risk indexing with explainable AI attribution.
          </p>
        </motion.div>

        {/* Executive Benchmark Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl"
        >
          {[
            { label: 'Prediction Precision', val: '96.4%', sub: 'Test Set Evaluation', color: 'text-electric-cyan' },
            { label: 'Goodness of Fit (R²)', val: '0.942', sub: 'Variance Explained', color: 'text-indigo-400' },
            { label: 'Inference Latency', val: '< 15 ms', sub: 'Per Spatial Coordinate', color: 'text-emerald-400' },
            { label: 'Explainability Model', val: 'SHAP + LIME', sub: 'Dual Post-Hoc XAI', color: 'text-purple-400' },
          ].map((m) => (
            <div key={m.label} className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/5 space-y-1 text-center">
              <div className={`text-3xl md:text-4xl font-bold font-mono ${m.color}`}>{m.val}</div>
              <div className="text-xs font-semibold text-gray-200">{m.label}</div>
              <div className="text-[10px] text-gray-500 font-mono">{m.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Pipeline Architecture Interactive Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/[0.08] border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Network size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Full-Stack ML Pipeline Flow</h3>
                <p className="text-xs text-gray-400 font-mono">From Telemetry Ingestion to Explainable Criticality Output</p>
              </div>
            </div>
            {/* Segmented Pipeline Control */}
            <div className="inline-flex p-1 rounded-xl bg-obsidian-900/90 border border-white/10 text-xs">
              {(['preprocessing', 'ensemble', 'explainability'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-electric-cyan text-obsidian-950 shadow-md font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab === 'preprocessing' && '1. Preprocessing'}
                  {tab === 'ensemble' && '2. Ensemble Architecture'}
                  {tab === 'explainability' && '3. XAI Attribution'}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Pipeline Stage Detail */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-mono text-electric-cyan bg-electric-cyan/10 border border-electric-cyan/20">
                {tabContent[activeTab].badge}
              </div>
              <h4 className="text-2xl font-bold text-white">{tabContent[activeTab].title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{tabContent[activeTab].description}</p>
              <div className="space-y-2.5 pt-2">
                {tabContent[activeTab].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-gray-300 p-3 rounded-xl bg-obsidian-900/70 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Visual Diagram */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-obsidian-950/90 border border-white/10 space-y-3 font-mono text-xs">
              <div className="text-[11px] text-gray-400 border-b border-white/10 pb-2 flex justify-between">
                <span>PIPELINE_SCHEMATIC.xai</span>
                <span className="text-electric-cyan">STATUS: VERIFIED</span>
              </div>
              <div className="space-y-2 pt-2 text-[11px]">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-gray-300">
                  <span className="flex items-center gap-2"><Database size={12} className="text-electric-cyan" /> Sensor Head & Telemetry</span>
                  <span className="text-gray-500">Inflow</span>
                </div>
                <div className="text-center text-gray-600">↓ Dynamic Recharge Normalization</div>
                <div className="p-3 rounded-lg bg-indigo-500/[0.08] border border-indigo-500/20 text-indigo-300 space-y-1">
                  <div className="font-bold flex items-center justify-between">
                    <span>Heterogeneous Ensemble</span>
                    <span className="text-[10px] text-indigo-400">3 Regressors</span>
                  </div>
                  <div className="text-[10px] text-gray-400">40% XGBoost + 35% LightGBM + 25% RF</div>
                </div>
                <div className="text-center text-gray-600">↓ Parallel SHAP TreeExplainer</div>
                <div className="p-2.5 rounded-lg bg-electric-cyan/[0.08] border border-electric-cyan/20 text-electric-cyan flex items-center justify-between font-bold">
                  <span>Classified Criticality Matrix</span>
                  <span>Low / Med / Severe</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SHAP Feature Importance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl space-y-6"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan">
                <BarChart3 size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Global Feature Importance (SHAP TreeExplainer)</h3>
                <p className="text-xs text-gray-400 font-mono">Mean Absolute Contribution to Predicted Water Head</p>
              </div>
            </div>
            <span className="text-xs font-mono text-gray-400 hidden sm:inline">N = 10,000+ Observations</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feat) => (
              <div key={feat.name} className="p-4 rounded-2xl bg-obsidian-900/80 border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-gray-200">{feat.name}</span>
                  <span className="font-mono font-bold" style={{ color: feat.color }}>{feat.value}% impact</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/[0.05] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${feat.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: feat.color }}
                  />
                </div>
                <p className="text-[11px] text-gray-400">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 text-xs">
              {['Python 3.11', 'XGBoost', 'Scikit-Learn', 'SHAP', 'LIME', 'Pandas', 'Matplotlib'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={PORTFOLIO_DATA.flagshipProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-electric-cyan to-indigo-500 text-obsidian-950 font-bold text-xs tracking-wide flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_25px_rgba(0,245,212,0.3)]"
            >
              Inspect Source Repository on GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlagshipResearch;
