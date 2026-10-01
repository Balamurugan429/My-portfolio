export const PORTFOLIO_DATA = {
  personal: {
    name: "Balamurugan P",
    headline: "Computer Science & Engineering Undergraduate | AI/ML Researcher",
    college: "3rd Year B.E. Computer Science and Engineering",
    email: "bm2723282@gmail.com",
    phone: "+91 8778164767",
    github: "https://github.com/Balamurugan429",
    linkedin: "https://www.linkedin.com/in/bala-murugan-13a89b327/",
    location: "Chennai, Tamil Nadu, India",
    timezone: "IST (UTC +5:30)",
    status: "Open for Research Collaborations & Software Engineering Internships",
    bio: "Passionate 3rd-year CS student combining algorithmic rigor with machine learning systems. Investigating Explainable AI (XAI) and multi-model ensemble architectures for critical environmental hydrogeology and real-world predictive modeling.",
  },

  flagshipProject: {
    title: "Explainable, Extraction-Aware Ensemble Learning for Groundwater Level Prediction and Criticality Classification",
    badge: "Flagship Research & ML Pipeline",
    description: "A hybrid machine learning architecture that forecasts dynamic groundwater depletion levels and categorizes regional criticality zones with post-hoc explainability.",
    highlights: [
      "Multi-Model Ensemble combining XGBoost, LightGBM, and Random Forest regressors.",
      "Explainable AI (XAI) integration using SHAP & LIME for feature extraction transparency.",
      "Extraction-rate weighted feature engineering addressing non-linear seasonal recharge.",
    ],
    techStack: ["Python", "XGBoost", "Scikit-Learn", "SHAP", "LIME", "Pandas", "Matplotlib"],
    metrics: [
      { label: "Prediction Accuracy", value: "96.4%" },
      { label: "Explainability Model", value: "SHAP / TreeExplainer" },
      { label: "Target Domain", value: "Hydrogeological Criticality" },
    ],
    githubLink: "https://github.com/Balamurugan429",
  },

  projects: [
    {
      title: "Fake News Detection System",
      category: "NLP & Conversational",
      description: "NLP-based classification system using TF-IDF vectorization and machine learning to identify misinformation in news articles.",
      tags: ["NLP", "TF-IDF", "Python", "Scikit-Learn", "Classification"],
      githubLink: "https://github.com/Balamurugan429",
    },
    {
      title: "Heart Disease Prediction System",
      category: "AI & Machine Learning",
      description: "Clinical ML system analyzing biomarkers and patient data for cardiovascular risk assessment and early diagnosis.",
      tags: ["Healthcare Analytics", "ML", "Clinical Data", "Python", "Prediction"],
      githubLink: "https://github.com/Balamurugan429",
    },
    {
      title: "Smart AI Chatbot Engine",
      category: "NLP & Conversational",
      description: "Generative AI conversational agent with intent recognition and context-aware dialogue management.",
      tags: ["Generative AI", "Intent Recognition", "FastAPI", "NLP", "Chatbot"],
      githubLink: "https://github.com/Balamurugan429",
    },
    {
      title: "Movie & Content Recommendation Engine",
      category: "AI & Machine Learning",
      description: "Collaborative filtering system using cosine similarity for personalized content recommendations.",
      tags: ["Collaborative Filtering", "Cosine Similarity", "Recommendation", "Python"],
      githubLink: "https://github.com/Balamurugan429",
    },
    {
      title: "Automated Resume Ranking System",
      category: "NLP & Conversational",
      description: "NLP pipeline using Spacy for entity extraction and intelligent resume screening and ranking.",
      tags: ["NLP", "Spacy", "Entity Extraction", "HR Tech", "Python"],
      githubLink: "https://github.com/Balamurugan429",
    },
    {
      title: "Lung Cancer Diagnostic Vision",
      category: "Computer Vision & Health",
      description: "Deep learning CNN model for automated lung cancer detection from medical imaging scans.",
      tags: ["Computer Vision", "CNN", "Medical Imaging", "Deep Learning", "Healthcare"],
      githubLink: "https://github.com/Balamurugan429",
    },
  ],

  skills: [
    {
      category: "Programming & Core CS",
      items: ["Python", "SQL", "Java (Basic)", "C", "DSA Fundamentals", "Object-Oriented Design"],
    },
    {
      category: "AI, ML & Explainability",
      items: ["Machine Learning", "Generative AI", "NLP", "Ensemble Learning", "SHAP & LIME", "Deep Learning"],
    },
    {
      category: "Data Tools & BI",
      items: ["Microsoft SQL Server", "Power BI", "Microsoft Excel", "Pandas", "NumPy", "Scikit-Learn", "Git/GitHub"],
    },
  ],

  certifications: [
    {
      title: "Microsoft SQL Certification Training",
      issuer: "Intellipaat",
      date: "October 2025",
      certificateId: "31679-4064293-291517",
      featured: true,
    },
    {
      title: "Python for Data Science",
      issuer: "Intellipaat",
      date: "2025",
      featured: false,
    },
    {
      title: "Machine Learning Masterclass",
      issuer: "Intellipaat",
      date: "2025",
      featured: false,
    },
    {
      title: "Power BI Data Visualization",
      issuer: "Intellipaat",
      date: "2025",
      featured: false,
    },
    {
      title: "SQL for Data Analysis",
      issuer: "Intellipaat",
      date: "2025",
      featured: false,
    },
  ],

  timeline: [
    {
      year: "2024 – 2028",
      title: "B.E. Computer Science and Engineering",
      organization: "Saveetha Engineering College, Chennai",
      description: "Current CGPA: 7.92/10",
      type: "education",
    },
    {
      year: "2025",
      title: "AI & Data Science Intern",
      organization: "Intellipaat",
      description: "Built production ML, NLP & BI pipelines",
      type: "work",
    },
    {
      year: "2025",
      title: "Microsoft SQL Certification",
      organization: "Database Optimization Specialization",
      description: "Verified certificate in SQL Server architecture and performance tuning",
      type: "certification",
    },
    {
      year: "2025 – 2026",
      title: "Flagship Research",
      organization: "Explainable, Extraction-Aware Ensemble Learning",
      description: "Hydrogeology prediction system with 96.4% accuracy",
      type: "research",
    },
  ],
};
