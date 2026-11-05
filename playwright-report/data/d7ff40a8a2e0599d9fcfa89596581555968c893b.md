# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio Site - Complete Verification >> Full page screenshot - Mobile
- Location: tests\portfolio.spec.ts:149:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e7]:
  - navigation [ref=e8]:
    - generic [ref=e9]:
      - button "BP" [ref=e10] [cursor=pointer]
      - generic [ref=e11]:
        - link "GitHub" [ref=e12] [cursor=pointer]:
          - /url: https://github.com/Balamurugan429
        - link "LinkedIn" [ref=e15] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/bala-murugan-13a89b327/
  - main [ref=e18]:
    - generic [ref=e20]:
      - generic [ref=e21]:
        - generic [ref=e22]: ⚡ Available for AI/ML Research & Engineering Internships
        - heading "Balamurugan P" [level=1] [ref=e25]
        - paragraph [ref=e26]: Computer Science & Engineering Undergraduate | AI/ML Researcher
        - generic [ref=e27]:
          - generic [ref=e28]: Saveetha Engineering College, Chennai
          - generic [ref=e29]: 2024 – 2028
          - generic [ref=e30]: "CGPA: 7.92"
        - generic [ref=e31]:
          - button "Explore Research & Projects" [ref=e32] [cursor=pointer]
          - link "Download Resume" [ref=e35] [cursor=pointer]:
            - /url: /My-portfolio/resume.pdf
          - link "Connect on LinkedIn" [ref=e39] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bala-murugan-13a89b327/
      - generic [ref=e45]:
        - img "Balamurugan P" [ref=e47]
        - generic [ref=e48]:
          - generic [ref=e49]: IST
          - generic [ref=e54]: 01:36:52 pm
        - generic [ref=e55]:
          - generic [ref=e56]:
            - generic [ref=e57]: Current Role
            - generic [ref=e58]: Intellipaat AI Intern
          - generic [ref=e59]:
            - generic [ref=e60]: Certified
            - generic [ref=e61]: Microsoft SQL
        - generic [ref=e62]: 📍 Chennai, Tamil Nadu, India
    - generic [ref=e65]:
      - generic [ref=e66]:
        - paragraph [ref=e67]: // ABOUT ME
        - heading "Engineering Intelligence at the Intersection of AI & Systems" [level=2] [ref=e68]
      - generic [ref=e69]:
        - generic [ref=e70] [cursor=pointer]:
          - generic:
            - img "Saveetha Engineering College Campus"
          - generic [ref=e76]:
            - heading "Career & Academic Foundation" [level=3] [ref=e77]
            - paragraph [ref=e78]: Passionate 3rd-year CS student combining algorithmic rigor with machine learning systems. Investigating Explainable AI (XAI) and multi-model ensemble architectures for critical environmental hydrogeology and real-world predictive modeling.
            - generic [ref=e79]:
              - generic [ref=e80]: Specializing in Explainable AI (XAI) and ensemble learning architectures
              - generic [ref=e83]: Building production-grade ML pipelines for environmental sustainability
              - generic [ref=e86]: Expertise in SQL database architecture and data transformation workflows
            - generic [ref=e89]:
              - generic [ref=e90]: Saveetha Engg College (CGPA 7.92)
              - generic [ref=e95]: AI & Data Science Intern @ Intellipaat
              - generic [ref=e100]: Chennai, Tamil Nadu
        - generic [ref=e105]:
          - heading "Metrics & Credentials" [level=3] [ref=e110]
          - generic [ref=e111]:
            - generic [ref=e112]:
              - generic [ref=e113]: "7.92"
              - generic [ref=e114]: University CGPA
            - generic [ref=e115]:
              - generic [ref=e116]: 96.4%
              - generic [ref=e117]: Ensemble Model Accuracy
            - generic [ref=e118]:
              - generic [ref=e119]: 5+
              - generic [ref=e120]: AI/NLP Projects
          - generic [ref=e121]:
            - generic [ref=e122]: Verified Certification
            - generic [ref=e123]: Microsoft SQL - Intellipaat
            - generic [ref=e124]: "ID: 31679-4064293-291517"
        - generic [ref=e125]:
          - generic [ref=e126]:
            - generic [ref=e127]: xai_ensemble_pipeline.py
            - generic [ref=e133]:
              - button "Python (ML)" [ref=e134] [cursor=pointer]
              - button "SQL (Data)" [ref=e138] [cursor=pointer]
          - code [ref=e145]: "# Ensemble Learning Pipeline import xgboost as xgb from sklearn.ensemble import RandomForestRegressor import lightgbm as lgb import shap # Load trained models xgb_model = xgb.XGBRegressor() lgb_model = lgb.LGBMRegressor() rf_model = RandomForestRegressor() # Weighted ensemble prediction def predict_groundwater(features): pred_xgb = xgb_model.predict(features) pred_lgb = lgb_model.predict(features) pred_rf = rf_model.predict(features) # Weighted ensemble ensemble = (0.4 * pred_xgb + 0.35 * pred_lgb + 0.25 * pred_rf) return ensemble # SHAP Explainability explainer = shap.TreeExplainer(xgb_model) shap_values = explainer.shap_values(X_test)"
    - generic [ref=e147]:
      - generic [ref=e148]:
        - generic [ref=e149]: FLAGSHIP RESEARCH & ML ARCHITECTURE
        - heading "Explainable, Extraction-Aware Ensemble Learning for Groundwater Level Prediction and Criticality Classification" [level=2] [ref=e152]
        - paragraph [ref=e153]: A hybrid machine learning architecture that forecasts dynamic groundwater depletion levels and categorizes regional criticality zones with post-hoc explainability.
      - generic [ref=e160]:
        - heading "Research Objectives" [level=3] [ref=e161]
        - paragraph [ref=e162]: "This research addresses two critical challenges in hydrogeological forecasting: (1) accurate prediction of dynamic groundwater level fluctuations under variable extraction pressure, and (2) automated classification of regional criticality zones to guide sustainable water management policy."
        - generic [ref=e163]:
          - generic [ref=e164]: Multi-Model Ensemble combining XGBoost, LightGBM, and Random Forest regressors.
          - generic [ref=e167]: Explainable AI (XAI) integration using SHAP & LIME for feature extraction transparency.
          - generic [ref=e170]: Extraction-rate weighted feature engineering addressing non-linear seasonal recharge.
      - generic [ref=e173]:
        - heading "Pipeline Architecture" [level=3] [ref=e183]
        - generic [ref=e184]:
          - button "1. Preprocessing" [ref=e185] [cursor=pointer]
          - button "2. Ensemble" [ref=e186] [cursor=pointer]
          - button "3. Explainability" [ref=e187] [cursor=pointer]
        - generic [ref=e188]:
          - heading "Extraction-Aware Preprocessing" [level=4] [ref=e189]
          - paragraph [ref=e190]: Dynamic seasonal recharge weighting that accounts for non-linear extraction patterns and temporal aquifer behavior.
          - list [ref=e191]:
            - listitem [ref=e192]:
              - generic [ref=e194]: Temporal feature engineering with lag variables
            - listitem [ref=e195]:
              - generic [ref=e197]: Extraction-rate weighted normalization
            - listitem [ref=e198]:
              - generic [ref=e200]: Seasonal recharge coefficient adjustment
      - generic [ref=e201]:
        - heading "SHAP Feature Importance" [level=3] [ref=e205]
        - generic [ref=e206]:
          - generic [ref=e208]:
            - generic [ref=e209]: Dynamic Extraction Rate
            - generic [ref=e210]: 38%
          - generic [ref=e213]:
            - generic [ref=e214]: Seasonal Rainfall Index
            - generic [ref=e215]: 27%
          - generic [ref=e218]:
            - generic [ref=e219]: Aquifer Transmissivity
            - generic [ref=e220]: 19%
          - generic [ref=e223]:
            - generic [ref=e224]: Historical Water Level Lag
            - generic [ref=e225]: 16%
      - generic [ref=e227]:
        - generic [ref=e228]:
          - generic [ref=e229]: 96.4%
          - generic [ref=e230]: Prediction Accuracy
        - generic [ref=e231]:
          - generic [ref=e232]: SHAP / TreeExplainer
          - generic [ref=e233]: Explainability Model
        - generic [ref=e234]:
          - generic [ref=e235]: Hydrogeological Criticality
          - generic [ref=e236]: Target Domain
      - generic [ref=e237]:
        - generic [ref=e238]:
          - generic [ref=e239]: Python
          - generic [ref=e240]: XGBoost
          - generic [ref=e241]: Scikit-Learn
          - generic [ref=e242]: SHAP
          - generic [ref=e243]: LIME
          - generic [ref=e244]: Pandas
          - generic [ref=e245]: Matplotlib
        - link "View Repository on GitHub" [ref=e246] [cursor=pointer]:
          - /url: https://github.com/Balamurugan429
    - generic [ref=e252]:
      - generic [ref=e253]:
        - paragraph [ref=e254]: // EXPANDED PORTFOLIO
        - heading "Engineered AI, NLP & Diagnostic Systems" [level=2] [ref=e255]
        - generic [ref=e256]:
          - button "All" [ref=e259] [cursor=pointer]
          - button "AI & Machine Learning" [ref=e260] [cursor=pointer]
          - button "NLP & Conversational" [ref=e261] [cursor=pointer]
          - button "Computer Vision & Health" [ref=e262] [cursor=pointer]
      - generic [ref=e263]:
        - generic [ref=e265]:
          - generic [ref=e266]: NLP & Conversational
          - heading "Fake News Detection System" [level=3] [ref=e267]
          - paragraph [ref=e268]: NLP-based classification system using TF-IDF vectorization and machine learning to identify misinformation in news articles.
          - generic [ref=e269]:
            - generic [ref=e270]: NLP
            - generic [ref=e271]: TF-IDF
            - generic [ref=e272]: Python
            - generic [ref=e273]: Scikit-Learn
            - generic [ref=e274]: Classification
          - link "View on GitHub" [ref=e275] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
        - generic [ref=e281]:
          - generic [ref=e282]: AI & Machine Learning
          - heading "Heart Disease Prediction System" [level=3] [ref=e283]
          - paragraph [ref=e284]: Clinical ML system analyzing biomarkers and patient data for cardiovascular risk assessment and early diagnosis.
          - generic [ref=e285]:
            - generic [ref=e286]: Healthcare Analytics
            - generic [ref=e287]: ML
            - generic [ref=e288]: Clinical Data
            - generic [ref=e289]: Python
            - generic [ref=e290]: Prediction
          - link "View on GitHub" [ref=e291] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
        - generic [ref=e297]:
          - generic [ref=e298]: NLP & Conversational
          - heading "Smart AI Chatbot Engine" [level=3] [ref=e299]
          - paragraph [ref=e300]: Generative AI conversational agent with intent recognition and context-aware dialogue management.
          - generic [ref=e301]:
            - generic [ref=e302]: Generative AI
            - generic [ref=e303]: Intent Recognition
            - generic [ref=e304]: FastAPI
            - generic [ref=e305]: NLP
            - generic [ref=e306]: Chatbot
          - link "View on GitHub" [ref=e307] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
        - generic [ref=e313]:
          - generic [ref=e314]: AI & Machine Learning
          - heading "Movie & Content Recommendation Engine" [level=3] [ref=e315]
          - paragraph [ref=e316]: Collaborative filtering system using cosine similarity for personalized content recommendations.
          - generic [ref=e317]:
            - generic [ref=e318]: Collaborative Filtering
            - generic [ref=e319]: Cosine Similarity
            - generic [ref=e320]: Recommendation
            - generic [ref=e321]: Python
          - link "View on GitHub" [ref=e322] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
        - generic [ref=e328]:
          - generic [ref=e329]: NLP & Conversational
          - heading "Automated Resume Ranking System" [level=3] [ref=e330]
          - paragraph [ref=e331]: NLP pipeline using Spacy for entity extraction and intelligent resume screening and ranking.
          - generic [ref=e332]:
            - generic [ref=e333]: NLP
            - generic [ref=e334]: Spacy
            - generic [ref=e335]: Entity Extraction
            - generic [ref=e336]: HR Tech
            - generic [ref=e337]: Python
          - link "View on GitHub" [ref=e338] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
        - generic [ref=e344]:
          - generic [ref=e345]: Computer Vision & Health
          - heading "Lung Cancer Diagnostic Vision" [level=3] [ref=e346]
          - paragraph [ref=e347]: Deep learning CNN model for automated lung cancer detection from medical imaging scans.
          - generic [ref=e348]:
            - generic [ref=e349]: Computer Vision
            - generic [ref=e350]: CNN
            - generic [ref=e351]: Medical Imaging
            - generic [ref=e352]: Deep Learning
            - generic [ref=e353]: Healthcare
          - link "View on GitHub" [ref=e354] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
    - generic [ref=e360]:
      - generic [ref=e361]:
        - paragraph [ref=e362]: // TECHNICAL ARSENAL
        - heading "Skills & Verified Certifications" [level=2] [ref=e363]
      - generic [ref=e364]:
        - generic [ref=e365]:
          - heading "Programming & Core CS" [level=3] [ref=e370]
          - generic [ref=e371]:
            - generic [ref=e372]: Python
            - generic [ref=e373]: SQL
            - generic [ref=e374]: Java (Basic)
            - generic [ref=e375]: C
            - generic [ref=e376]: DSA Fundamentals
            - generic [ref=e377]: Object-Oriented Design
        - generic [ref=e378]:
          - heading "AI, ML & Explainability" [level=3] [ref=e388]
          - generic [ref=e389]:
            - generic [ref=e390]: Machine Learning
            - generic [ref=e391]: Generative AI
            - generic [ref=e392]: NLP
            - generic [ref=e393]: Ensemble Learning
            - generic [ref=e394]: SHAP & LIME
            - generic [ref=e395]: Deep Learning
        - generic [ref=e396]:
          - heading "Data Tools & BI" [level=3] [ref=e402]
          - generic [ref=e403]:
            - generic [ref=e404]: Microsoft SQL Server
            - generic [ref=e405]: Power BI
            - generic [ref=e406]: Microsoft Excel
            - generic [ref=e407]: Pandas
            - generic [ref=e408]: NumPy
            - generic [ref=e409]: Scikit-Learn
            - generic [ref=e410]: Git/GitHub
      - generic [ref=e411]:
        - generic [ref=e414]:
          - generic [ref=e419]:
            - generic [ref=e420]: VERIFIED CERTIFICATION
            - heading "Microsoft SQL Certification Training" [level=3] [ref=e421]
            - paragraph [ref=e422]: Intellipaat • Issued October 2025
            - paragraph [ref=e423]: "Certificate ID: 31679-4064293-291517"
          - generic [ref=e424]: Verified
        - generic [ref=e429]:
          - generic [ref=e430]: Python for Data Science
          - generic [ref=e435]: Machine Learning Masterclass
          - generic [ref=e440]: Power BI Data Visualization
          - generic [ref=e445]: SQL for Data Analysis
    - generic [ref=e451]:
      - generic [ref=e452]:
        - paragraph [ref=e453]: // JOURNEY
        - heading "Academic & Professional Milestones" [level=2] [ref=e454]
      - generic [ref=e457]:
        - generic [ref=e464]:
          - generic [ref=e465]: 2024 – 2028
          - heading "B.E. Computer Science and Engineering" [level=3] [ref=e466]
          - paragraph [ref=e467]: Saveetha Engineering College, Chennai
          - paragraph [ref=e468]: "Current CGPA: 7.92/10"
        - generic [ref=e475]:
          - generic [ref=e476]: "2025"
          - heading "AI & Data Science Intern" [level=3] [ref=e477]
          - paragraph [ref=e478]: ApproTech Solutions
          - paragraph [ref=e479]: Built production ML, NLP & BI pipelines
        - generic [ref=e486]:
          - generic [ref=e487]: "2025"
          - heading "Microsoft SQL Certification" [level=3] [ref=e488]
          - paragraph [ref=e489]: Database Optimization Specialization
          - paragraph [ref=e490]: Verified certificate in SQL Server architecture and performance tuning
        - generic [ref=e498]:
          - generic [ref=e499]: 2025 – 2026
          - heading "Flagship Research" [level=3] [ref=e500]
          - paragraph [ref=e501]: Explainable, Extraction-Aware Ensemble Learning
          - paragraph [ref=e502]: Hydrogeology prediction system with 96.4% accuracy
    - generic [ref=e504]:
      - heading "LET'S BUILD SOMETHING INTELLIGENT GET IN TOUCH" [level=2] [ref=e506]: LET'S BUILD SOMETHING INTELLIGENTGET IN TOUCH
      - generic [ref=e507]:
        - generic [ref=e508]:
          - heading "Email" [level=3] [ref=e513]
          - generic [ref=e514]:
            - link "bm2723282@gmail.com" [ref=e515] [cursor=pointer]:
              - /url: mailto:bm2723282@gmail.com
            - button "Copy email" [ref=e516] [cursor=pointer]
        - generic [ref=e520]:
          - heading "Phone" [level=3] [ref=e524]
          - link "+91 8778164767" [ref=e525] [cursor=pointer]:
            - /url: tel:+91 8778164767
        - generic [ref=e526]:
          - heading "Location" [level=3] [ref=e531]
          - paragraph [ref=e532]: Chennai, Tamil Nadu, India
          - paragraph [ref=e533]: IST (UTC +5:30)
      - generic [ref=e534]:
        - link [ref=e535] [cursor=pointer]:
          - /url: https://github.com/Balamurugan429
          - generic [ref=e540]:
            - heading "GitHub" [level=3] [ref=e541]
            - paragraph [ref=e542]: View my code & projects
        - link [ref=e546] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/bala-murugan-13a89b327/
          - generic [ref=e551]:
            - heading "LinkedIn" [level=3] [ref=e552]
            - paragraph [ref=e553]: Connect professionally
      - generic [ref=e557]:
        - paragraph [ref=e558]: © 2026 Balamurugan P. All rights reserved.
        - button "Back to Top" [ref=e559] [cursor=pointer]
```

# Test source

```ts
  52  |     expect(box?.width).toBeLessThanOrEqual(375);
  53  |     
  54  |     // Check mobile navigation
  55  |     await expect(page.locator('h1')).toBeVisible();
  56  |     
  57  |     await page.screenshot({ path: 'screenshots/hero-mobile.png', fullPage: false });
  58  |   });
  59  | 
  60  |   test('Responsive on tablet', async ({ page }) => {
  61  |     await page.setViewportSize({ width: 768, height: 1024 });
  62  |     await page.goto(BASE_URL);
  63  |     await page.waitForLoadState('networkidle');
  64  |     
  65  |     await expect(page.locator('h1')).toBeVisible();
  66  |     await page.screenshot({ path: 'screenshots/hero-tablet.png', fullPage: false });
  67  |   });
  68  | 
  69  |   test('No console errors', async ({ page }) => {
  70  |     const errors: string[] = [];
  71  |     const warnings: string[] = [];
  72  |     
  73  |     page.on('console', msg => {
  74  |       if (msg.type() === 'error') {
  75  |         errors.push(msg.text());
  76  |       } else if (msg.type() === 'warning') {
  77  |         warnings.push(msg.text());
  78  |       }
  79  |     });
  80  |     
  81  |     page.on('pageerror', error => {
  82  |       errors.push(error.message);
  83  |     });
  84  |     
  85  |     await page.goto(BASE_URL);
  86  |     await page.waitForLoadState('networkidle');
  87  |     
  88  |     console.log(`Console Errors: ${errors.length}`);
  89  |     console.log(`Console Warnings: ${warnings.length}`);
  90  |     
  91  |     if (errors.length > 0) {
  92  |       console.log('Errors found:', errors);
  93  |     }
  94  |     
  95  |     // Allow warnings but no errors
  96  |     expect(errors.length).toBe(0);
  97  |   });
  98  | 
  99  |   test('All sections are present', async ({ page }) => {
  100 |     await page.goto(BASE_URL);
  101 |     await page.waitForLoadState('networkidle');
  102 |     
  103 |     // Check all major sections exist
  104 |     await expect(page.locator('text=Available for AI/ML Research')).toBeVisible();
  105 |     
  106 |     // Scroll through sections
  107 |     await page.evaluate(() => window.scrollTo(0, 1000));
  108 |     await page.waitForTimeout(500);
  109 |     
  110 |     await page.evaluate(() => window.scrollTo(0, 2000));
  111 |     await page.waitForTimeout(500);
  112 |     
  113 |     await page.evaluate(() => window.scrollTo(0, 3000));
  114 |     await page.waitForTimeout(500);
  115 |   });
  116 | 
  117 |   test('CTA buttons are interactive', async ({ page }) => {
  118 |     await page.goto(BASE_URL);
  119 |     await page.waitForLoadState('networkidle');
  120 |     
  121 |     // Check explore research button
  122 |     const exploreBtn = page.locator('button:has-text("Explore Research")');
  123 |     await expect(exploreBtn).toBeEnabled();
  124 |     
  125 |     // Check resume download link
  126 |     const resumeLink = page.locator('a:has-text("Download Resume")');
  127 |     await expect(resumeLink).toHaveAttribute('href', /resume\.pdf/);
  128 |     
  129 |     // Check LinkedIn link
  130 |     const linkedinLink = page.locator('a:has-text("Connect on LinkedIn")');
  131 |     await expect(linkedinLink).toHaveAttribute('href', /linkedin\.com/);
  132 |     await expect(linkedinLink).toHaveAttribute('target', '_blank');
  133 |   });
  134 | 
  135 |   test('Full page screenshot - Desktop', async ({ page }) => {
  136 |     await page.setViewportSize({ width: 1920, height: 1080 });
  137 |     await page.goto(BASE_URL);
  138 |     await page.waitForLoadState('networkidle');
  139 |     
  140 |     // Wait for animations
  141 |     await page.waitForTimeout(2000);
  142 |     
  143 |     await page.screenshot({ 
  144 |       path: 'screenshots/full-page-desktop.png', 
  145 |       fullPage: true 
  146 |     });
  147 |   });
  148 | 
  149 |   test('Full page screenshot - Mobile', async ({ page }) => {
  150 |     await page.setViewportSize({ width: 375, height: 667 });
  151 |     await page.goto(BASE_URL);
> 152 |     await page.waitForLoadState('networkidle');
      |                ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  153 |     
  154 |     // Wait for animations
  155 |     await page.waitForTimeout(2000);
  156 |     
  157 |     await page.screenshot({ 
  158 |       path: 'screenshots/full-page-mobile.png', 
  159 |       fullPage: true 
  160 |     });
  161 |   });
  162 | 
  163 |   test('Accessibility - Keyboard navigation', async ({ page }) => {
  164 |     await page.goto(BASE_URL);
  165 |     await page.waitForLoadState('networkidle');
  166 |     
  167 |     // Tab through interactive elements
  168 |     await page.keyboard.press('Tab');
  169 |     await page.waitForTimeout(200);
  170 |     
  171 |     await page.keyboard.press('Tab');
  172 |     await page.waitForTimeout(200);
  173 |     
  174 |     await page.keyboard.press('Tab');
  175 |     await page.waitForTimeout(200);
  176 |     
  177 |     // Check if focus is visible (should have focus-visible styles)
  178 |     const focusedElement = page.locator(':focus');
  179 |     await expect(focusedElement).toBeVisible();
  180 |   });
  181 | 
  182 |   test('Performance - Page load time', async ({ page }) => {
  183 |     const startTime = Date.now();
  184 |     
  185 |     await page.goto(BASE_URL);
  186 |     await page.waitForLoadState('networkidle');
  187 |     
  188 |     const loadTime = Date.now() - startTime;
  189 |     console.log(`Page load time: ${loadTime}ms`);
  190 |     
  191 |     // Should load in under 5 seconds
  192 |     expect(loadTime).toBeLessThan(5000);
  193 |   });
  194 | });
  195 | 
```