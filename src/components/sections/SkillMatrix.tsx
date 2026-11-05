import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Terminal, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Sliders, 
  Activity, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';

// Interactive SHAP explainability simulation state
interface FeatureAttribution {
  name: string;
  category: string;
  weight: number; // baseline weight %
  direction: 'positive' | 'negative';
  description: string;
}

const initialFeatures: FeatureAttribution[] = [
  { name: 'Dynamic Extraction Rate', category: 'Extraction-Aware Metric', weight: 38, direction: 'negative', description: 'Municipal + industrial pumping pressure relative to aquifer replenish index.' },
  { name: 'Seasonal Recharge Index', category: 'Meteorological Signal', weight: 27, direction: 'positive', description: 'Monsoon intensity and soil absorption coefficient lag-7.' },
  { name: 'Aquifer Transmissivity', category: 'Hydrogeological Invariant', weight: 19, direction: 'positive', description: 'Subsurface rock permeability and Darcy hydraulic conductivity coefficient.' },
  { name: 'Historical Head Level (Lag-1)', category: 'Temporal Memory', weight: 16, direction: 'positive', description: 'Prior water table depth acting as recursive autoregressive autorefresh anchor.' },
];

export const SkillMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ml' | 'systems' | 'data'>('ml');
  const [extractionPressure, setExtractionPressure] = useState<number>(65); // 0 - 100 slider

  // Dynamically calculate simulated ensemble impact based on slider
  const calculatedRisk = (extractionPressure * 0.72 + 18).toFixed(1);
  const calculatedConfidence = Math.max(91.2, 98.4 - extractionPressure * 0.05).toFixed(1);

  return (
    <section id="skills" className="relative px-6 py-28 md:py-36 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[400px] bg-gradient-to-b from-electric-cyan/5 via-indigo-500/5 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-electric-cyan/30 bg-electric-cyan/[0.04] text-xs font-mono text-electric-cyan tracking-wider uppercase">
            <Cpu size={14} className="text-electric-cyan animate-pulse" />
            Engineering Competence & Verification
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Architectural Mastery &{' '}
            <span className="bg-gradient-to-r from-electric-cyan via-blue-200 to-indigo-400 bg-clip-text text-transparent">
              Systems Rigor
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Bridging fundamental theoretical computer science, robust database architecture, and verified explainable machine learning systems.
          </p>
        </motion.div>

        {/* Tab Selector — Industrial / Executive Segmented Control */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-obsidian-900/90 border border-white/10 backdrop-blur-xl shadow-2xl">
            {[
              { id: 'ml', label: '01. Machine Learning & XAI', icon: <Brain size={16} /> },
              { id: 'systems', label: '02. Core Systems & DSA', icon: <Terminal size={16} /> },
              { id: 'data', label: '03. Data Engineering & SQL', icon: <Database size={16} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'ml' | 'systems' | 'data')}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-electric-cyan to-indigo-500 text-obsidian-950 shadow-[0_4px_20px_rgba(0,245,212,0.35)] scale-[1.02]'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Architectural Panel */}
        <AnimatePresence mode="wait">
          {activeTab === 'ml' && (
            <motion.div
              key="ml"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Stack & Pipeline Card */}
              <div className="lg:col-span-6 rounded-3xl p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-electric-cyan/[0.08] border border-electric-cyan/20 flex items-center justify-center text-electric-cyan">
                        <Brain size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Machine Learning & Explainable AI</h3>
                        <p className="text-xs text-gray-400 font-mono">Specialized in Post-Hoc Interpretability & Ensembles</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
                      R² = 0.94
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    Designed and benchmarked multi-model regression & criticality classification systems. Integrating <strong className="text-white font-semibold">SHAP (SHapley Additive exPlanations)</strong> and <strong className="text-white font-semibold">LIME</strong> to unpack black-box tree ensembles into transparent feature attributions for stakeholders.
                  </p>

                  {/* Production Stack Tags with Categorical Grouping */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-gray-500">Core Machine Learning Toolchain</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'XGBoost 2.0', role: 'Gradient Boosting Regressor' },
                        { name: 'LightGBM', role: 'Leaf-wise Tree Optimization' },
                        { name: 'Random Forest', role: 'Bagging Variance Reduction' },
                        { name: 'SHAP (TreeExplainer)', role: 'Global & Local Attribution' },
                        { name: 'Scikit-Learn', role: 'Pipeline & Preprocessing' },
                        { name: 'Pandas & NumPy', role: 'Matrix Hydrogeology Vectorization' },
                        { name: 'Matplotlib & Seaborn', role: 'Residuals & Error Analysis' },
                      ].map((tool) => (
                        <div
                          key={tool.name}
                          className="group/tool px-3.5 py-2 rounded-xl bg-obsidian-900/80 border border-white/10 hover:border-electric-cyan/40 transition-colors flex items-center gap-2 text-xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan/80" />
                          <span className="font-semibold text-gray-200">{tool.name}</span>
                          <span className="text-[10px] text-gray-500 hidden sm:inline">| {tool.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quantitative Impact Micro-Grid */}
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/[0.06]">
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-2xl font-bold font-mono text-electric-cyan">96.4%</div>
                    <div className="text-[11px] text-gray-400">Prediction Precision</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-2xl font-bold font-mono text-indigo-400">&lt;15ms</div>
                    <div className="text-[11px] text-gray-400">Inference Latency</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-2xl font-bold font-mono text-emerald-400">Zero Leak</div>
                    <div className="text-[11px] text-gray-400">Strict CV Splits</div>
                  </div>
                </div>
              </div>

              {/* Interactive SHAP Feature Attribution Sandbox */}
              <div className="lg:col-span-6 rounded-3xl p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-5 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Sliders size={20} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">Live SHAP Attribution Simulator</h4>
                        <p className="text-xs text-gray-400 font-mono">Dynamic Hydrogeological Extraction Weighting</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-electric-cyan bg-electric-cyan/10 px-2.5 py-1 rounded-md border border-electric-cyan/20">
                      Interactive Sandbox
                    </span>
                  </div>

                  {/* Extraction Pressure Slider */}
                  <div className="p-4 rounded-2xl bg-obsidian-900/90 border border-white/10 space-y-3 mb-6">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-300 font-medium flex items-center gap-1.5">
                        <Activity size={14} className="text-electric-cyan" />
                        Simulated Municipal Pumping Rate
                      </span>
                      <span className="font-mono text-electric-cyan font-bold">{extractionPressure} m³/hr</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={extractionPressure}
                      onChange={(e) => setExtractionPressure(Number(e.target.value))}
                      className="w-full accent-electric-cyan h-1.5 bg-white/10 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                      <span>Low Basal Extraction (10 m³)</span>
                      <span>Critical Aquifer Stress (100 m³)</span>
                    </div>
                  </div>

                  {/* Real-time SHAP Waterfall Feature Bars */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-gray-500 flex justify-between">
                      <span>Feature Signature</span>
                      <span>Mean |SHAP Value| (Impact)</span>
                    </div>
                    {initialFeatures.map((feat) => {
                      // Dynamically adjust extraction bar based on user slider
                      const dynamicWeight = feat.name === 'Dynamic Extraction Rate'
                        ? Math.min(55, Math.round(extractionPressure * 0.45 + 10))
                        : feat.weight;

                      return (
                        <div key={feat.name} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-medium text-gray-200">{feat.name}</span>
                            <span className="font-mono font-bold text-electric-cyan">{dynamicWeight}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-white/[0.05] overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-electric-cyan to-indigo-500"
                              initial={false}
                              animate={{ width: `${dynamicWeight}%` }}
                              transition={{ duration: 0.35, ease: 'easeOut' }}
                            />
                          </div>
                          <p className="text-[11px] text-gray-400 font-sans">{feat.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Real-time Model Inference Metric */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-electric-cyan/[0.06] via-indigo-500/[0.06] to-transparent border border-electric-cyan/20 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400">Classified Criticality Index</div>
                    <div className="text-lg font-bold font-mono text-white flex items-center gap-2">
                      <span>{calculatedRisk} / 100</span>
                      <span className={`text-xs px-2 py-0.5 rounded font-mono ${Number(calculatedRisk) > 60 ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                        {Number(calculatedRisk) > 60 ? 'HIGH STRESS ZONE' : 'STABLE RECHARGE'}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Ensemble Confidence</div>
                    <div className="text-lg font-bold font-mono text-electric-cyan">{calculatedConfidence}%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'systems' && (
            <motion.div
              key="systems"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Core CS Rigor Card */}
              <div className="lg:col-span-7 rounded-3xl p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/[0.06] pb-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/[0.08] border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Terminal size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Core Computer Science & Systems</h3>
                      <p className="text-xs text-gray-400 font-mono">Algorithms • Complexity • Enterprise Architecture</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    Strong foundational competence in <strong className="text-white font-semibold">Data Structures & Algorithms (DSA)</strong>, space-time complexity analysis (Asymptotic Big-O), memory layout, and Object-Oriented design patterns across C, Java, and Python.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { lang: 'Python', role: 'Advanced Scripting & ML Workflows', desc: 'Vectorization, OOP, Generator pipelines, FastAPI' },
                      { lang: 'C', role: 'Low-Level Systems Foundation', desc: 'Pointers, Dynamic memory allocation, Data structures' },
                      { lang: 'Java (Core)', role: 'Enterprise OOP Architecture', desc: 'Class hierarchies, Polymorphism, Collections framework' },
                      { lang: 'DSA Mastery', role: 'Algorithmic Problem Solving', desc: 'Trees, Graphs, DP, Sorting, Two-Pointer technique' },
                    ].map((item) => (
                      <div key={item.lang} className="p-4 rounded-2xl bg-obsidian-900/90 border border-white/10 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-electric-cyan font-mono">{item.lang}</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        </div>
                        <div className="text-xs font-semibold text-gray-200">{item.role}</div>
                        <p className="text-[11px] text-gray-400 leading-snug">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Institution Anchor */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400">Academic Standing</div>
                    <div className="text-sm font-semibold text-white">Saveetha Engineering College, Chennai</div>
                    <div className="text-xs font-mono text-gray-400">B.E. Computer Science and Engineering (2024 – 2028)</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Cumulative GPA</div>
                    <div className="text-2xl font-bold font-mono text-electric-cyan">7.92 / 10</div>
                  </div>
                </div>
              </div>

              {/* Interactive Code Architecture Terminal */}
              <div className="lg:col-span-5 rounded-3xl p-7 bg-obsidian-950/95 border border-white/10 backdrop-blur-2xl flex flex-col justify-between font-mono text-xs">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="text-gray-400 text-[11px] ml-2">dsa_benchmark.c</span>
                    </div>
                    <span className="text-[10px] text-electric-cyan">O(n log n)</span>
                  </div>

                  <pre className="text-gray-300 leading-relaxed overflow-x-auto p-2 bg-obsidian-900/60 rounded-xl">
                    <code>{`// Criticality Index QuickSelect Optimization
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

// Memory: Cache-line aligned struct
typedef struct {
    double dynamic_pumping_rate;
    double aquifer_head_m;
    uint32_t sensor_timestamp;
} HydroSensorNode;`}</code>
                  </pre>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-gray-400 text-[11px]">
                  <span>GCC 13.2 Native Binary</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Valgrind Zero Leaks
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'data' && (
            <motion.div
              key="data"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Featured Microsoft SQL Verified Credential Card */}
              <div className="lg:col-span-7 rounded-3xl p-8 bg-gradient-to-br from-white/[0.04] via-obsidian-900/90 to-transparent border border-electric-cyan/30 backdrop-blur-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-electric-cyan/[0.06] rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-cyan/20 to-indigo-500/20 border border-electric-cyan/30 flex items-center justify-center text-electric-cyan shadow-[0_0_20px_rgba(0,245,212,0.25)]">
                        <ShieldCheck size={32} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/30">
                            Verified Credential
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mt-1">Microsoft SQL Certification</h3>
                        <p className="text-xs text-gray-400">Intellipaat Software Solutions • Completed October 5, 2025</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    Mastered relational database design, complex multi-table joins, subqueries, indexed views, and transactional data processing under heavy analytical loads.
                  </p>

                  {/* Verification Metadata Box */}
                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400">Certificate Verification ID:</span>
                      <span className="text-electric-cyan font-bold">31679-4064293-291517</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400">Issuer Authorization:</span>
                      <span className="text-gray-300">Mrs. Shilpi Jain, Director, Intellipaat</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400">Issued On:</span>
                      <span className="text-gray-300">October 5, 2025</span>
                    </div>
                  </div>
                </div>

                {/* Professional Data Skills Badges */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-2.5 relative z-10">
                  {[
                    'Microsoft SQL Server',
                    'Complex CTEs & Window Functions',
                    'Power BI Data Modeling',
                    'ETL Data Transformation',
                    'Database Indexing & Query Plans',
                    'Microsoft Excel Advanced Analytics',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-gray-300 hover:border-electric-cyan/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Engineering Accomplishments & Experience */}
              <div className="lg:col-span-5 rounded-3xl p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 border-b border-white/[0.06] pb-5 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Practical AI & Data Experience</h4>
                      <p className="text-xs text-gray-400 font-mono">Industry Internship Training</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-obsidian-900/80 border border-white/10 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-sm text-white">AI & Data Science Intern</div>
                          <div className="text-xs text-electric-cyan font-mono">Intellipaat Software Solutions</div>
                        </div>
                        <span className="text-[11px] font-mono text-gray-400 px-2.5 py-1 rounded-full bg-white/[0.04]">2025</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        Completed structured industrial training covering Machine Learning, Generative AI architectures, SQL data transformations, and Power BI visualization pipelines.
                      </p>
                    </div>

                    {/* Additional Certifications List */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-gray-500">Additional Verified Credentials</div>
                      {[
                        'Python for Data Science — Intellipaat',
                        'Machine Learning Masterclass — Intellipaat',
                        'Power BI Data Visualization — Intellipaat',
                        'SQL for Data Analysis — Intellipaat',
                      ].map((cert) => (
                        <div key={cert} className="flex items-center gap-2.5 text-xs text-gray-300 p-2 rounded-xl bg-white/[0.01] border border-white/[0.04]">
                          <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-center">
                  <span className="text-xs text-gray-400 font-mono">All Credentials Authenticated with Intellipaat Registry</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillMatrix;
