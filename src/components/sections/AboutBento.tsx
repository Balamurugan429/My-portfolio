import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Award, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const pythonCode = `# Ensemble Learning Pipeline
import xgboost as xgb
from sklearn.ensemble import RandomForestRegressor
import lightgbm as lgb
import shap

# Load trained models
xgb_model = xgb.XGBRegressor()
lgb_model = lgb.LGBMRegressor()
rf_model = RandomForestRegressor()

# Weighted ensemble prediction
def predict_groundwater(features):
    pred_xgb = xgb_model.predict(features)
    pred_lgb = lgb_model.predict(features)
    pred_rf = rf_model.predict(features)
    
    # Weighted ensemble
    ensemble = (0.4 * pred_xgb + 
                0.35 * pred_lgb + 
                0.25 * pred_rf)
    
    return ensemble

# SHAP Explainability
explainer = shap.TreeExplainer(xgb_model)
shap_values = explainer.shap_values(X_test)`;

const sqlCode = `-- Hydrogeological Feature Engineering
WITH seasonal_recharge AS (
  SELECT 
    region_id,
    month,
    AVG(rainfall_mm) * 0.15 AS recharge_factor,
    LAG(water_level_m, 1) OVER (
      PARTITION BY region_id 
      ORDER BY date
    ) AS prev_water_level
  FROM groundwater_observations
  WHERE date >= '2020-01-01'
),
extraction_weighted AS (
  SELECT 
    r.region_id,
    r.recharge_factor,
    e.daily_extraction_m3,
    (e.daily_extraction_m3 / r.recharge_factor) 
      AS criticality_index
  FROM seasonal_recharge r
  JOIN extraction_logs e 
    ON r.region_id = e.region_id
)
SELECT * FROM extraction_weighted
WHERE criticality_index > 2.5;`;

export const AboutBento: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'sql'>('python');

  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-electric-cyan font-mono text-sm mb-3">// ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Engineering Intelligence at the{' '}
            <span className="bg-gradient-to-r from-electric-cyan to-electric-purple bg-clip-text text-transparent">
              Intersection of AI & Systems
            </span>
          </h2>
        </motion.div>



        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Career & Academic Foundation - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass glass-hover rounded-3xl p-8 space-y-6 cursor-pointer relative overflow-hidden group"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
            }}
          >
            {/* Saveetha Engineering College Campus Ambient Backdrop */}
            <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden pointer-events-none">
              <img 
                src={`${import.meta.env.BASE_URL || '/'}academic-bg.png`} 
                alt="Saveetha Engineering College Campus" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-35 scale-100 group-hover:scale-105 transition-all duration-700 filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/95 via-obsidian-950/85 to-obsidian-950/70" />
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-electric-cyan/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-electric-cyan" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Career & Academic Foundation</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {PORTFOLIO_DATA.personal.bio}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full" />
                    <span>Specializing in Explainable AI (XAI) and ensemble learning architectures</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full" />
                    <span>Building production-grade ML pipelines for environmental sustainability</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full" />
                    <span>Expertise in SQL database architecture and data transformation workflows</span>
                  </div>
                </div>

                {/* Chip Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-cyan/30 text-sm">
                    <GraduationCap size={16} className="text-electric-cyan" />
                    <span>Saveetha Engg College (CGPA 7.92)</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-purple/30 text-sm">
                    <Briefcase size={16} className="text-electric-purple" />
                    <span>AI & Data Science Intern @ Intellipaat</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-sm">
                    <MapPin size={16} />
                    <span>Chennai, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Metrics & Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass glass-hover rounded-3xl p-8 space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-electric-cyan" size={24} />
              <h3 className="text-xl font-bold">Metrics & Credentials</h3>
            </div>

            {/* Counter Grid */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-electric-cyan/10 to-transparent border border-electric-cyan/20">
                <div className="text-4xl font-bold text-electric-cyan mb-1">7.92</div>
                <div className="text-sm text-gray-400">University CGPA</div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-electric-purple/10 to-transparent border border-electric-purple/20">
                <div className="text-4xl font-bold text-electric-purple mb-1">96.4%</div>
                <div className="text-sm text-gray-400">Ensemble Model Accuracy</div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-electric-emerald/10 to-transparent border border-electric-emerald/20">
                <div className="text-4xl font-bold text-electric-emerald mb-1">5+</div>
                <div className="text-sm text-gray-400">AI/NLP Projects</div>
              </div>
            </div>

            {/* Certification Badge */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-gray-400 mb-2">Verified Certification</div>
              <div className="text-sm font-semibold mb-1">Microsoft SQL - Intellipaat</div>
              <div className="text-xs font-mono text-gray-500">ID: 31679-4064293-291517</div>
            </div>
          </motion.div>

          {/* Card 3: Live Code Terminal - Spans 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 glass glass-hover rounded-3xl p-8 space-y-4"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-gray-400 font-mono">
                  {activeTab === 'python' ? 'xai_ensemble_pipeline.py' : 'groundwater_features.sql'}
                </span>
              </div>

              {/* Tab Switcher */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('python')}
                  className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
                    activeTab === 'python'
                      ? 'bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/30'
                      : 'glass text-gray-400 hover:text-white'
                  }`}
                >
                  <Code size={16} className="inline mr-2" />
                  Python (ML)
                </button>
                <button
                  onClick={() => setActiveTab('sql')}
                  className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
                    activeTab === 'sql'
                      ? 'bg-electric-purple/20 text-electric-purple border border-electric-purple/30'
                      : 'glass text-gray-400 hover:text-white'
                  }`}
                >
                  <Database size={16} className="inline mr-2" />
                  SQL (Data)
                </button>
              </div>
            </div>

            {/* Code Display */}
            <div className="bg-obsidian-900 rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm font-mono leading-relaxed">
                <code className={activeTab === 'python' ? 'text-green-400' : 'text-blue-400'}>
                  {activeTab === 'python' ? pythonCode : sqlCode}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
