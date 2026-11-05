# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio Site - Complete Verification >> Full page screenshot - Desktop
- Location: tests\portfolio.spec.ts:135:3

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
        - button "About" [ref=e12] [cursor=pointer]
        - button "Research" [ref=e13] [cursor=pointer]
        - button "Projects" [ref=e14] [cursor=pointer]
        - button "Skills" [ref=e15] [cursor=pointer]
        - button "Journey" [ref=e16] [cursor=pointer]
        - button "Contact" [ref=e17] [cursor=pointer]
      - generic [ref=e18]:
        - generic [ref=e19]: Available
        - link "GitHub" [ref=e20] [cursor=pointer]:
          - /url: https://github.com/Balamurugan429
        - link "LinkedIn" [ref=e23] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/bala-murugan-13a89b327/
  - main [ref=e26]:
    - generic [ref=e28]:
      - generic [ref=e29]:
        - generic [ref=e30]: ⚡ Available for AI/ML Research & Engineering Internships
        - heading "Balamurugan P" [level=1] [ref=e33]
        - paragraph [ref=e34]: Computer Science & Engineering Undergraduate | AI/ML Researcher
        - generic [ref=e35]:
          - generic [ref=e36]: Saveetha Engineering College, Chennai
          - generic [ref=e37]: 2024 – 2028
          - generic [ref=e38]: "CGPA: 7.92"
        - generic [ref=e39]:
          - button "Explore Research & Projects" [ref=e40] [cursor=pointer]
          - link "Download Resume" [ref=e43] [cursor=pointer]:
            - /url: /My-portfolio/resume.pdf
          - link "Connect on LinkedIn" [ref=e47] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bala-murugan-13a89b327/
      - generic [ref=e53]:
        - img "Balamurugan P" [ref=e55]
        - generic [ref=e56]:
          - generic [ref=e57]: IST
          - generic [ref=e62]: 01:36:53 pm
        - generic [ref=e63]:
          - generic [ref=e64]:
            - generic [ref=e65]: Current Role
            - generic [ref=e66]: Intellipaat AI Intern
          - generic [ref=e67]:
            - generic [ref=e68]: Certified
            - generic [ref=e69]: Microsoft SQL
        - generic [ref=e70]: 📍 Chennai, Tamil Nadu, India
    - generic [ref=e73]:
      - generic [ref=e74]:
        - paragraph [ref=e75]: // ABOUT ME
        - heading "Engineering Intelligence at the Intersection of AI & Systems" [level=2] [ref=e76]
      - generic [ref=e77]:
        - generic [ref=e78] [cursor=pointer]:
          - generic:
            - img "Saveetha Engineering College Campus"
          - generic [ref=e84]:
            - heading "Career & Academic Foundation" [level=3] [ref=e85]
            - paragraph [ref=e86]: Passionate 3rd-year CS student combining algorithmic rigor with machine learning systems. Investigating Explainable AI (XAI) and multi-model ensemble architectures for critical environmental hydrogeology and real-world predictive modeling.
            - generic [ref=e87]:
              - generic [ref=e88]: Specializing in Explainable AI (XAI) and ensemble learning architectures
              - generic [ref=e91]: Building production-grade ML pipelines for environmental sustainability
              - generic [ref=e94]: Expertise in SQL database architecture and data transformation workflows
            - generic [ref=e97]:
              - generic [ref=e98]: Saveetha Engg College (CGPA 7.92)
              - generic [ref=e103]: AI & Data Science Intern @ Intellipaat
              - generic [ref=e108]: Chennai, Tamil Nadu
        - generic [ref=e113]:
          - heading "Metrics & Credentials" [level=3] [ref=e118]
          - generic [ref=e119]:
            - generic [ref=e120]:
              - generic [ref=e121]: "7.92"
              - generic [ref=e122]: University CGPA
            - generic [ref=e123]:
              - generic [ref=e124]: 96.4%
              - generic [ref=e125]: Ensemble Model Accuracy
            - generic [ref=e126]:
              - generic [ref=e127]: 5+
              - generic [ref=e128]: AI/NLP Projects
          - generic [ref=e129]:
            - generic [ref=e130]: Verified Certification
            - generic [ref=e131]: Microsoft SQL - Intellipaat
            - generic [ref=e132]: "ID: 31679-4064293-291517"
        - generic [ref=e133]:
          - generic [ref=e134]:
            - generic [ref=e135]: xai_ensemble_pipeline.py
            - generic [ref=e141]:
              - button "Python (ML)" [ref=e142] [cursor=pointer]
              - button "SQL (Data)" [ref=e146] [cursor=pointer]
          - code [ref=e153]: "# Ensemble Learning Pipeline import xgboost as xgb from sklearn.ensemble import RandomForestRegressor import lightgbm as lgb import shap # Load trained models xgb_model = xgb.XGBRegressor() lgb_model = lgb.LGBMRegressor() rf_model = RandomForestRegressor() # Weighted ensemble prediction def predict_groundwater(features): pred_xgb = xgb_model.predict(features) pred_lgb = lgb_model.predict(features) pred_rf = rf_model.predict(features) # Weighted ensemble ensemble = (0.4 * pred_xgb + 0.35 * pred_lgb + 0.25 * pred_rf) return ensemble # SHAP Explainability explainer = shap.TreeExplainer(xgb_model) shap_values = explainer.shap_values(X_test)"
    - generic [ref=e155]:
      - generic [ref=e156]:
        - generic [ref=e157]: FLAGSHIP RESEARCH & ML ARCHITECTURE
        - heading "Explainable, Extraction-Aware Ensemble Learning for Groundwater Level Prediction and Criticality Classification" [level=2] [ref=e160]
        - paragraph [ref=e161]: A hybrid machine learning architecture that forecasts dynamic groundwater depletion levels and categorizes regional criticality zones with post-hoc explainability.
      - generic [ref=e168]:
        - heading "Research Objectives" [level=3] [ref=e169]
        - paragraph [ref=e170]: "This research addresses two critical challenges in hydrogeological forecasting: (1) accurate prediction of dynamic groundwater level fluctuations under variable extraction pressure, and (2) automated classification of regional criticality zones to guide sustainable water management policy."
        - generic [ref=e171]:
          - generic [ref=e172]: Multi-Model Ensemble combining XGBoost, LightGBM, and Random Forest regressors.
          - generic [ref=e175]: Explainable AI (XAI) integration using SHAP & LIME for feature extraction transparency.
          - generic [ref=e178]: Extraction-rate weighted feature engineering addressing non-linear seasonal recharge.
      - generic [ref=e181]:
        - heading "Pipeline Architecture" [level=3] [ref=e191]
        - generic [ref=e192]:
          - button "1. Preprocessing" [ref=e193] [cursor=pointer]
          - button "2. Ensemble" [ref=e194] [cursor=pointer]
          - button "3. Explainability" [ref=e195] [cursor=pointer]
        - generic [ref=e196]:
          - heading "Extraction-Aware Preprocessing" [level=4] [ref=e197]
          - paragraph [ref=e198]: Dynamic seasonal recharge weighting that accounts for non-linear extraction patterns and temporal aquifer behavior.
          - list [ref=e199]:
            - listitem [ref=e200]:
              - generic [ref=e202]: Temporal feature engineering with lag variables
            - listitem [ref=e203]:
              - generic [ref=e205]: Extraction-rate weighted normalization
            - listitem [ref=e206]:
              - generic [ref=e208]: Seasonal recharge coefficient adjustment
      - generic [ref=e209]:
        - heading "SHAP Feature Importance" [level=3] [ref=e213]
        - generic [ref=e214]:
          - generic [ref=e216]:
            - generic [ref=e217]: Dynamic Extraction Rate
            - generic [ref=e218]: 38%
          - generic [ref=e221]:
            - generic [ref=e222]: Seasonal Rainfall Index
            - generic [ref=e223]: 27%
          - generic [ref=e226]:
            - generic [ref=e227]: Aquifer Transmissivity
            - generic [ref=e228]: 19%
          - generic [ref=e231]:
            - generic [ref=e232]: Historical Water Level Lag
            - generic [ref=e233]: 16%
      - generic [ref=e235]:
        - generic [ref=e236]:
          - generic [ref=e237]: 96.4%
          - generic [ref=e238]: Prediction Accuracy
        - generic [ref=e239]:
          - generic [ref=e240]: SHAP / TreeExplainer
          - generic [ref=e241]: Explainability Model
        - generic [ref=e242]:
          - generic [ref=e243]: Hydrogeological Criticality
          - generic [ref=e244]: Target Domain
      - generic [ref=e245]:
        - generic [ref=e246]:
          - generic [ref=e247]: Python
          - generic [ref=e248]: XGBoost
          - generic [ref=e249]: Scikit-Learn
          - generic [ref=e250]: SHAP
          - generic [ref=e251]: LIME
          - generic [ref=e252]: Pandas
          - generic [ref=e253]: Matplotlib
        - link "View Repository on GitHub" [ref=e254] [cursor=pointer]:
          - /url: https://github.com/Balamurugan429
    - generic [ref=e260]:
      - generic [ref=e261]:
        - paragraph [ref=e262]: // EXPANDED PORTFOLIO
        - heading "Engineered AI, NLP & Diagnostic Systems" [level=2] [ref=e263]
        - generic [ref=e264]:
          - button "All" [ref=e267] [cursor=pointer]
          - button "AI & Machine Learning" [ref=e268] [cursor=pointer]
          - button "NLP & Conversational" [ref=e269] [cursor=pointer]
          - button "Computer Vision & Health" [ref=e270] [cursor=pointer]
      - generic [ref=e271]:
        - generic [ref=e273]:
          - generic [ref=e274]: NLP & Conversational
          - heading "Fake News Detection System" [level=3] [ref=e275]
          - paragraph [ref=e276]: NLP-based classification system using TF-IDF vectorization and machine learning to identify misinformation in news articles.
          - generic [ref=e277]:
            - generic [ref=e278]: NLP
            - generic [ref=e279]: TF-IDF
            - generic [ref=e280]: Python
            - generic [ref=e281]: Scikit-Learn
            - generic [ref=e282]: Classification
          - link "View on GitHub" [ref=e283] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
        - generic [ref=e289]:
          - generic [ref=e290]: AI & Machine Learning
          - heading "Heart Disease Prediction System" [level=3] [ref=e291]
          - paragraph [ref=e292]: Clinical ML system analyzing biomarkers and patient data for cardiovascular risk assessment and early diagnosis.
          - generic [ref=e293]:
            - generic [ref=e294]: Healthcare Analytics
            - generic [ref=e295]: ML
            - generic [ref=e296]: Clinical Data
            - generic [ref=e297]: Python
            - generic [ref=e298]: Prediction
          - link "View on GitHub" [ref=e299] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
        - generic [ref=e305]:
          - generic [ref=e306]: NLP & Conversational
          - heading "Smart AI Chatbot Engine" [level=3] [ref=e307]
          - paragraph [ref=e308]: Generative AI conversational agent with intent recognition and context-aware dialogue management.
          - generic [ref=e309]:
            - generic [ref=e310]: Generative AI
            - generic [ref=e311]: Intent Recognition
            - generic [ref=e312]: FastAPI
            - generic [ref=e313]: NLP
            - generic [ref=e314]: Chatbot
          - link "View on GitHub" [ref=e315] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
        - generic [ref=e321]:
          - generic [ref=e322]: AI & Machine Learning
          - heading "Movie & Content Recommendation Engine" [level=3] [ref=e323]
          - paragraph [ref=e324]: Collaborative filtering system using cosine similarity for personalized content recommendations.
          - generic [ref=e325]:
            - generic [ref=e326]: Collaborative Filtering
            - generic [ref=e327]: Cosine Similarity
            - generic [ref=e328]: Recommendation
            - generic [ref=e329]: Python
          - link "View on GitHub" [ref=e330] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
        - generic [ref=e336]:
          - generic [ref=e337]: NLP & Conversational
          - heading "Automated Resume Ranking System" [level=3] [ref=e338]
          - paragraph [ref=e339]: NLP pipeline using Spacy for entity extraction and intelligent resume screening and ranking.
          - generic [ref=e340]:
            - generic [ref=e341]: NLP
            - generic [ref=e342]: Spacy
            - generic [ref=e343]: Entity Extraction
            - generic [ref=e344]: HR Tech
            - generic [ref=e345]: Python
          - link "View on GitHub" [ref=e346] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
        - generic [ref=e352]:
          - generic [ref=e353]: Computer Vision & Health
          - heading "Lung Cancer Diagnostic Vision" [level=3] [ref=e354]
          - paragraph [ref=e355]: Deep learning CNN model for automated lung cancer detection from medical imaging scans.
          - generic [ref=e356]:
            - generic [ref=e357]: Computer Vision
            - generic [ref=e358]: CNN
            - generic [ref=e359]: Medical Imaging
            - generic [ref=e360]: Deep Learning
            - generic [ref=e361]: Healthcare
          - link "View on GitHub" [ref=e362] [cursor=pointer]:
            - /url: https://github.com/Balamurugan429
    - generic [ref=e368]:
      - generic [ref=e369]:
        - paragraph [ref=e370]: // TECHNICAL ARSENAL
        - heading "Skills & Verified Certifications" [level=2] [ref=e371]
      - generic [ref=e372]:
        - generic [ref=e373]:
          - heading "Programming & Core CS" [level=3] [ref=e378]
          - generic [ref=e379]:
            - generic [ref=e380]: Python
            - generic [ref=e381]: SQL
            - generic [ref=e382]: Java (Basic)
            - generic [ref=e383]: C
            - generic [ref=e384]: DSA Fundamentals
            - generic [ref=e385]: Object-Oriented Design
        - generic [ref=e386]:
          - heading "AI, ML & Explainability" [level=3] [ref=e396]
          - generic [ref=e397]:
            - generic [ref=e398]: Machine Learning
            - generic [ref=e399]: Generative AI
            - generic [ref=e400]: NLP
            - generic [ref=e401]: Ensemble Learning
            - generic [ref=e402]: SHAP & LIME
            - generic [ref=e403]: Deep Learning
        - generic [ref=e404]:
          - heading "Data Tools & BI" [level=3] [ref=e410]
          - generic [ref=e411]:
            - generic [ref=e412]: Microsoft SQL Server
            - generic [ref=e413]: Power BI
            - generic [ref=e414]: Microsoft Excel
            - generic [ref=e415]: Pandas
            - generic [ref=e416]: NumPy
            - generic [ref=e417]: Scikit-Learn
            - generic [ref=e418]: Git/GitHub
      - generic [ref=e419]:
        - generic [ref=e422]:
          - generic [ref=e427]:
            - generic [ref=e428]: VERIFIED CERTIFICATION
            - heading "Microsoft SQL Certification Training" [level=3] [ref=e429]
            - paragraph [ref=e430]: Intellipaat • Issued October 2025
            - paragraph [ref=e431]: "Certificate ID: 31679-4064293-291517"
          - generic [ref=e432]: Verified
        - generic [ref=e437]:
          - generic [ref=e438]: Python for Data Science
          - generic [ref=e443]: Machine Learning Masterclass
          - generic [ref=e448]: Power BI Data Visualization
          - generic [ref=e453]: SQL for Data Analysis
    - generic [ref=e459]:
      - generic [ref=e460]:
        - paragraph [ref=e461]: // JOURNEY
        - heading "Academic & Professional Milestones" [level=2] [ref=e462]
      - generic [ref=e465]:
        - generic [ref=e472]:
          - generic [ref=e473]: 2024 – 2028
          - heading "B.E. Computer Science and Engineering" [level=3] [ref=e474]
          - paragraph [ref=e475]: Saveetha Engineering College, Chennai
          - paragraph [ref=e476]: "Current CGPA: 7.92/10"
        - generic [ref=e483]:
          - generic [ref=e484]: "2025"
          - heading "AI & Data Science Intern" [level=3] [ref=e485]
          - paragraph [ref=e486]: ApproTech Solutions
          - paragraph [ref=e487]: Built production ML, NLP & BI pipelines
        - generic [ref=e494]:
          - generic [ref=e495]: "2025"
          - heading "Microsoft SQL Certification" [level=3] [ref=e496]
          - paragraph [ref=e497]: Database Optimization Specialization
          - paragraph [ref=e498]: Verified certificate in SQL Server architecture and performance tuning
        - generic [ref=e506]:
          - generic [ref=e507]: 2025 – 2026
          - heading "Flagship Research" [level=3] [ref=e508]
          - paragraph [ref=e509]: Explainable, Extraction-Aware Ensemble Learning
          - paragraph [ref=e510]: Hydrogeology prediction system with 96.4% accuracy
    - generic [ref=e512]:
      - heading "LET'S BUILD SOMETHING INTELLIGENT GET IN TOUCH" [level=2] [ref=e514]: LET'S BUILD SOMETHING INTELLIGENTGET IN TOUCH
      - generic [ref=e515]:
        - generic [ref=e516]:
          - heading "Email" [level=3] [ref=e521]
          - generic [ref=e522]:
            - link "bm2723282@gmail.com" [ref=e523] [cursor=pointer]:
              - /url: mailto:bm2723282@gmail.com
            - button "Copy email" [ref=e524] [cursor=pointer]
        - generic [ref=e528]:
          - heading "Phone" [level=3] [ref=e532]
          - link "+91 8778164767" [ref=e533] [cursor=pointer]:
            - /url: tel:+91 8778164767
        - generic [ref=e534]:
          - heading "Location" [level=3] [ref=e539]
          - paragraph [ref=e540]: Chennai, Tamil Nadu, India
          - paragraph [ref=e541]: IST (UTC +5:30)
      - generic [ref=e542]:
        - link [ref=e543] [cursor=pointer]:
          - /url: https://github.com/Balamurugan429
          - generic [ref=e548]:
            - heading "GitHub" [level=3] [ref=e549]
            - paragraph [ref=e550]: View my code & projects
        - link [ref=e554] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/bala-murugan-13a89b327/
          - generic [ref=e559]:
            - heading "LinkedIn" [level=3] [ref=e560]
            - paragraph [ref=e561]: Connect professionally
      - generic [ref=e565]:
        - paragraph [ref=e566]: © 2026 Balamurugan P. All rights reserved.
        - button "Back to Top" [ref=e567] [cursor=pointer]
```

# Test source

```ts
  38  |     
  39  |     // Verify research section is visible
  40  |     const researchSection = page.locator('#research');
  41  |     await expect(researchSection).toBeInViewport();
  42  |   });
  43  | 
  44  |   test('Responsive on mobile - Portrait', async ({ page }) => {
  45  |     await page.setViewportSize({ width: 375, height: 667 });
  46  |     await page.goto(BASE_URL);
  47  |     await page.waitForLoadState('networkidle');
  48  |     
  49  |     // Check layout doesn't overflow
  50  |     const body = await page.locator('body');
  51  |     const box = await body.boundingBox();
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
> 138 |     await page.waitForLoadState('networkidle');
      |                ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
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
  152 |     await page.waitForLoadState('networkidle');
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