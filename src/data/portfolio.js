/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Edit this file to update any personal information, projects, skills, 
 * achievements, education, and links across the entire website.
 */

export const personalData = {
  name: "Gatamaneni Sudeep",
  preferredName: "Sudeep",
  role: "AI & Machine Learning Student | AI Developer | Software Developer",
  titles: [
    "AI & Machine Learning Student",
    "AI Developer",
    "Software Developer",
    "LLM Systems Explorer"
  ],
  email: "gatamanenisudeep14@gmail.com",
  github: "https://github.com/GSudeep1404",
  linkedin: "https://www.linkedin.com/in/sudeep-g-3b4736355/",
  location: "India",
  availability: "Open to Internships, Hackathons & AI Roles",
  resumePath: "/resume.pdf", // Place your actual resume PDF inside public/resume.pdf

  heroDescription:
    "I’m an AI & Machine Learning student passionate about building practical AI-powered applications, secure LLM systems, intelligent healthcare solutions, and software products that solve real-world problems.",
  
  about: {
    title: "About Me",
    subtitle: "Pioneering intelligent digital solutions through machine learning & modern software",
    paragraphs: [
      "Hello! I am Gatamaneni Sudeep, an AI & Machine Learning student driven by curiosity and a relentless desire to turn complex algorithms into usable, dependable software.",
      "My journey spans core machine learning, generative AI, secure LLM architectures, and modern web application development. I believe the true value of AI lies not just in theoretical benchmarks, but in building accessible, reliable tools that solve tangible real-world problems.",
      "Whether it is safeguarding LLM applications against injection vulnerabilities, crafting healthcare diagnostic companions, or optimizing agricultural cycles for farmers, I thrive on tackling multi-faceted technical challenges with clean architecture and secure code."
    ],
    infoCards: [
      {
        label: "Education",
        value: "B.Tech – AI & Machine Learning",
        subtext: "Undergraduate Program",
        icon: "GraduationCap"
      },
      {
        label: "Primary Focus",
        value: "AI / ML / LLMs / Software",
        subtext: "Deep Learning & Applied AI",
        icon: "Cpu"
      },
      {
        label: "Interests",
        value: "Practical Real-World Apps",
        subtext: "Security, Healthcare & AgriTech",
        icon: "Sparkles"
      },
      {
        label: "Career Goal",
        value: "AI/ML Engineer & Developer",
        subtext: "High-impact tech roles",
        icon: "Target"
      }
    ],
    currentlyLearning: [
      "Python",
      "Java",
      "C++",
      "Machine Learning",
      "Deep Learning",
      "LLMs",
      "React",
      "Node.js",
      "Cloud Computing"
    ]
  },

  skills: [
    {
      category: "AI & Machine Learning",
      icon: "BrainCircuit",
      accent: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
      skills: [
        { name: "Machine Learning", level: "Advanced", tags: ["SVM", "KNN", "Classification", "Prediction", "Scikit-Learn"] },
        { name: "Deep Learning & NLP", level: "Advanced", tags: ["Neural Networks", "Transformers", "AI Applications", "PyTorch/TF"] },
        { name: "Generative AI & LLMs", level: "Advanced", tags: ["RAG", "Prompt Design", "OpenAI APIs", "Hugging Face"] },
        { name: "Prompt Engineering", level: "Advanced", tags: ["Few-Shot", "CoT", "System Guardrails", "Jailbreak Defense"] },
        { name: "Power BI & Analytics", level: "Advanced", tags: ["DAX Measures", "KPI Dashboards", "Data Visualization", "Analytics"] }
      ]
    },
    {
      category: "Programming",
      icon: "Code2",
      accent: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      skills: [
        { name: "Python", level: "Advanced", tags: ["AI/ML", "EDA", "Automation", "Data Processing", "NumPy/Pandas"] },
        { name: "Java", level: "Intermediate", tags: ["OOP", "Data Structures", "Algorithms", "APIs"] },
        { name: "C++", level: "Intermediate", tags: ["Problem Solving", "Memory Management", "Data Structures"] },
        { name: "JavaScript", level: "Advanced", tags: ["ES6+", "Async/Await", "DOM", "TypeScript basics"] }
      ]
    },
    {
      category: "Web & Full-Stack Development",
      icon: "Globe",
      accent: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      skills: [
        { name: "React.js", level: "Advanced", tags: ["Hooks", "Vite", "Component Architecture", "Tailwind CSS"] },
        { name: "Node.js & Express.js", level: "Advanced", tags: ["REST APIs", "Middleware", "Backend Routing", "Auth"] },
        { name: "Flask & FastAPI", level: "Intermediate", tags: ["Python Backend", "Model Serving", "Microservices"] },
        { name: "HTML5 & CSS3", level: "Advanced", tags: ["Semantic Layouts", "Responsive Design", "Flexbox/Grid"] },
        { name: "REST APIs", level: "Advanced", tags: ["Endpoints", "JSON", "CORS", "API Integration"] }
      ]
    },
    {
      category: "Databases",
      icon: "Database",
      accent: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-500/30",
      skills: [
        { name: "MongoDB", level: "Intermediate", tags: ["NoSQL", "Mongoose", "JSON Collections", "CRUD"] },
        { name: "PostgreSQL", level: "Intermediate", tags: ["Relational SQL", "Queries", "Indexing", "ACID"] },
        { name: "MySQL", level: "Intermediate", tags: ["Relational Schema", "Joins", "Data Integrity"] },
        { name: "Firebase", level: "Intermediate", tags: ["Firestore", "Authentication", "Cloud Storage"] }
      ]
    },
    {
      category: "Cloud, AI Security & IoT",
      icon: "ShieldAlert",
      accent: "from-rose-500/20 to-red-500/20",
      border: "border-rose-500/30",
      skills: [
        { name: "AI Security & Defense", level: "Advanced", tags: ["Prompt Injection Detection", "LLM Guardrails", "PII Redaction"] },
        { name: "Connected IoT Systems", level: "Intermediate", tags: ["ESP32", "Arduino", "MQTT", "Sensors", "Hardware Sensing"] },
        { name: "Cloud Computing", level: "Intermediate", tags: ["Virtual Machines", "Deployment", "Cloud Storage"] },
        { name: "IAM & Access Control", level: "Intermediate", tags: ["Access Management", "Role-Based Access", "Policies"] }
      ]
    },
    {
      category: "Developer Tools",
      icon: "Wrench",
      accent: "from-blue-500/20 to-indigo-500/20",
      border: "border-blue-500/30",
      skills: [
        { name: "Git & GitHub", level: "Advanced", tags: ["Version Control", "Branches", "Repositories", "Workflows"] },
        { name: "VS Code & Cursor", level: "Advanced", tags: ["Extensions", "Debugging", "AI Pair Programming"] },
        { name: "Hugging Face", level: "Intermediate", tags: ["Model Hub", "Pipelines", "Transformers", "Datasets"] },
        { name: "OpenAI APIs", level: "Advanced", tags: ["Function Calling", "Embeddings", "Chat Completions"] },
        { name: "Power BI Desktop", level: "Advanced", tags: ["DAX Calculations", "KPI Dashboards", "Executive Visuals"] }
      ]
    }
  ],

  projects: [
    {
      id: "sentinel-ai",
      title: "SentinelAI",
      tagline: "AI Security Gateway for LLM Applications",
      badge: "AI Security & Defense",
      description:
        "SentinelAI is a security gateway designed to protect AI chatbots and LLM applications from prompt injection, sensitive-data leakage, unauthorized tool usage, and malicious instructions.",
      technologies: ["Python", "AI/ML", "LLM", "NLP", "Web Development", "Cybersecurity"],
      features: [
        "Prompt risk analysis & semantic scoring",
        "Real-time prompt injection & jailbreak detection",
        "Sensitive information (PII/Secret) leakage detection",
        "Dynamic LLM response monitoring & output filtering",
        "Fine-grained tool-access control & policy enforcement"
      ],
      // Replace with your real repository or live links when ready:
      githubUrl: "https://github.com/GSudeep1404",
      liveUrl: null, // Set to a string URL when deployed (e.g. "https://sentinelai.demo.app")
      
      // Detailed modal breakdown
      modalDetails: {
        overview:
          "SentinelAI operates as an intelligent reverse-proxy firewall inserted between client applications and large language models (LLMs). It evaluates every incoming token stream and structured prompt against adversarial pattern signatures, semantic intent classifiers, and data-loss prevention policies.",
        problemStatement:
          "Modern enterprise LLM applications are exposed to novel threat vectors like indirect prompt injection, system prompt extraction, jailbreaks, PII leakage, and unauthorized invocation of backend functions/tools. Default API endpoints lack real-time inspection layers.",
        proposedSolution:
          "A multi-layered gateway architecture comprising an inbound prompt risk classifier, regex/NER-based PII maskers, dynamic policy-based tool authorizers, and an outbound hallucination & safety verification filter.",
        architecture:
          "Client Request ──> Ingestion Reverse Proxy ──> Regex & NER PII Redactor ──> Semantic Threat Classifier ──> Safe Prompt Forwarder ──> LLM Provider ──> Outbound Leakage Inspector ──> Client Response",
        challenges:
          "Balancing sub-50ms latency overhead during inline token evaluation while avoiding false positives on legitimate user technical queries with code blocks.",
        futureImprovements:
          "Deploying distilled on-device quantized models for edge inference, automated synthetic jailbreak fuzzing, and telemetry export to SIEM platforms."
      }
    },
    {
      id: "medassist-ai",
      title: "MedAssist AI",
      tagline: "AI-Powered Medical Assistant",
      badge: "Healthcare Intelligence",
      description:
        "MedAssist AI is an AI healthcare assistant designed to help users understand medical reports, organize health information, and interact with an AI assistant through a user-friendly interface.",
      technologies: ["Python", "AI/ML", "NLP", "LLM", "HTML/CSS/JavaScript", "Database"],
      features: [
        "Secure user authentication & encrypted profiles",
        "Automated medical report parsing & lab value extraction",
        "Context-aware clinical explanation AI assistant",
        "Personalized health metrics dashboard & history tracker",
        "Structured health information management & records"
      ],
      disclaimer:
        "Educational & Prototype Notice: This application is developed for educational and experimental purposes and does not replace professional medical advice, clinical diagnosis, or treatment.",
      githubUrl: "https://github.com/GSudeep1404",
      liveUrl: null,
      
      modalDetails: {
        overview:
          "MedAssist AI bridges the communication gap between complex clinical diagnostic reports and everyday patients. It ingests lab results, explains reference ranges in plain English, and provides interactive Q&A grounded strictly in medical context.",
        problemStatement:
          "Medical reports and pathology sheets are filled with specialized jargon, abbreviations, and non-standard metrics that often confuse or unnecessarily panic patients before their doctor appointments.",
        proposedSolution:
          "An end-to-end intelligent assistant combining OCR ingestion, biomedical entity recognition, grounded LLM explanations with high-safety prompt guardrails, and visual tracking charts for historical test values.",
        architecture:
          "User Dashboard ──> Report Upload & OCR Pipeline ──> Biomedical NER & Normalizer ──> Grounded Clinical RAG Engine ──> Interactive Explanation Assistant ──> Secure Patient History Database",
        challenges:
          "Eliminating hallucination risks in clinical interpretations and ensuring patients always receive proper warnings urging consultation with qualified physicians.",
        futureImprovements:
          "Integration with FHIR/HL7 hospital records, multi-lingual vernacular translation, and physician review workflow."
      }
    },
    {
      id: "agripulse",
      title: "AgriPulse",
      tagline: "AI Operating System for Farmers",
      badge: "MSME Idea Hackathon 6.0 Highlight",
      description:
        "AgriPulse is an integrated AI platform designed to support farmers throughout the crop lifecycle, from crop selection and planning to irrigation, disease alerts, harvesting, storage, and transportation.",
      technologies: ["AI/ML", "Python", "NLP", "Web Development", "Data Analytics"],
      features: [
        "Soil-parameter based crop recommendation models",
        "Dynamic seasonal crop planning & schedule generator",
        "Weather-integrated precision irrigation recommendations",
        "Computer vision & NLP disease outbreak alerts",
        "Harvest forecasting & yield estimation",
        "Storage facility matching & transport logistics assistance"
      ],
      githubUrl: "https://github.com/GSudeep1404",
      liveUrl: null,

      modalDetails: {
        overview:
          "AgriPulse acts as a centralized intelligent operating system for agricultural producers, orchestrating data from soil sensors, meteorological satellites, and local market mandis to empower farmers at every critical agricultural milestone.",
        problemStatement:
          "Smallholder farmers face disconnected advisory systems, unpredictable weather events, pest outbreaks detected too late, and logistical post-harvest bottlenecks resulting in significant produce loss.",
        proposedSolution:
          "A unified AI decision-support platform offering proactive lifecycle advisories: from initial soil-chemistry matching and seed selection to smart irrigation triggers, automated pest recognition, and direct marketplace transport routing.",
        architecture:
          "Field & Soil Sensor Data ──> Weather API Feeds ──> Predictive Agronomy ML Pipeline ──> Disease Identification Module ──> Recommendation & Alert Engine ──> Farmer Web/Mobile Interface",
        challenges:
          "Designing for variable connectivity in rural agricultural areas and handling heterogeneous regional soil characteristics across diverse agro-climatic zones.",
        futureImprovements:
          "Offline-first voice-assisted mobile application in vernacular languages, drone imagery analytics for crop health, and automated price-lock mandi integrations."
      }
    },
    {
      id: "marketing-roi-predictor",
      title: "Marketing Campaign ROI Predictor",
      tagline: "AI & Predictive Analytics for Marketing Optimization",
      badge: "Data Analytics & ML",
      description:
        "An AI/data analytics application that analyzes marketing campaign data and predicts campaign performance and ROI.",
      technologies: ["Python", "Machine Learning", "Data Analytics", "Power BI"],
      features: [
        "Multi-channel historical advertising dataset ingestion",
        "Supervised regression models predicting Return on Ad Spend (ROAS)",
        "Customer segment response & conversion rate forecasting",
        "Interactive Power BI visual analytics dashboards",
        "Optimal budget distribution recommendation engine"
      ],
      githubUrl: "https://github.com/GSudeep1404",
      liveUrl: null,

      modalDetails: {
        overview:
          "A data-driven machine learning system that helps growth marketers, advertisers, and campaign managers forecast performance indicators and optimize capital allocation across marketing channels.",
        problemStatement:
          "Marketing spend is often guided by intuition or lagged post-campaign metrics, leading to misallocated budgets and sub-optimal customer acquisition costs.",
        proposedSolution:
          "Ensemble machine learning models (XGBoost, Random Forest, Multi-variable Regression) trained on historical advertising parameters (spend, impression frequency, channel mix, audience demographics) to forecast ROI ahead of campaign execution.",
        architecture:
          "Data Cleansing & Transformation ──> Feature Engineering Pipeline ──> Ensemble Predictive Models ──> ROI Optimization Engine ──> Power BI Interactive Dashboard",
        challenges:
          "Accounting for non-linear multi-touch attribution and seasonal consumer demand fluctuations across channels.",
        futureImprovements:
          "Real-time API integrations with Google Ads & Meta Marketing APIs for automated algorithmic budget rebalancing."
      }
    }
  ],

  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Bachelor of Technology — Engineering Institution",
      duration: "Undergraduate Program",
      status: "Pursuing",
      description:
        "Rigorous computer science curriculum with specialized coursework focused on artificial intelligence, neural networks, computational statistics, and software engineering methodologies.",
      coreAreas: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Cloud Computing",
        "Computer Networks"
      ]
    }
  ],

  achievements: [
    {
      category: "Hackathons",
      icon: "Trophy",
      highlight: true,
      title: "MSME Idea Hackathon 6.0",
      project: "AgriPulse – AI Operating System for Farmers",
      description:
        "Selected and pitched AgriPulse, an innovative end-to-end AI operating system empowering agricultural producers across India with smart irrigation, crop planning, and disease prevention.",
      badge: "National Innovation Hackathon",
      isPlaceholder: false
    },
    {
      category: "Innovation Projects",
      icon: "Lightbulb",
      highlight: false,
      title: "LLM Security & Autonomous Healthcare Systems",
      project: "SentinelAI & MedAssist AI",
      description:
        "Spearheaded architectures for real-time prompt injection detection gateways and patient-centric clinical report summarization systems.",
      badge: "Independent Research & Build",
      isPlaceholder: false
    },
    {
      category: "Certifications",
      icon: "FileCheck2",
      highlight: false,
      title: "Professional & Technical Certifications",
      project: "AI, Machine Learning & Cloud",
      description:
        "Actively undertaking advanced credentials in Deep Learning, Cloud Architecture, and Software Engineering. (Editable: Update with your verified credentials)",
      badge: "Continuous Learning",
      isPlaceholder: true
    },
    {
      category: "Technical Events",
      icon: "Rocket",
      highlight: false,
      title: "Technical Symposia & Hackathons",
      project: "Developer Summits & Coding Competitions",
      description:
        "Active participant in technical paper presentations, hackathons, and developer coding challenges. (Editable: Add your specific event mentions here)",
      badge: "Community & Competition",
      isPlaceholder: true
    },
    {
      category: "Academic Achievements",
      icon: "GraduationCap",
      highlight: false,
      title: "Academic Excellence in AI & CS",
      project: "B.Tech AI & ML Curriculum",
      description:
        "Consistent academic performance in core technical courses including Algorithms, Machine Learning, and Database Architecture. (Editable: Add semester ranks or GPA honors)",
      badge: "Academic Honor",
      isPlaceholder: true
    }
  ],

  learningJourney: [
    {
      step: "01",
      title: "AI & ML Fundamentals",
      icon: "Brain",
      description:
        "Mastered foundational mathematics, probability, linear algebra, regression, classification, clustering, and data preprocessing in Python.",
      skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Statistics"]
    },
    {
      step: "02",
      title: "Web Development & APIs",
      icon: "Code",
      description:
        "Acquired full-stack engineering skills to build functional user interfaces, RESTful APIs, and responsive web applications for models.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "REST APIs"]
    },
    {
      step: "03",
      title: "Generative AI & LLMs",
      icon: "Sparkles",
      description:
        "Delved into transformer architectures, attention mechanisms, prompt engineering methodologies, RAG pipelines, and Hugging Face models.",
      skills: ["Transformers", "Prompt Engineering", "RAG", "Embeddings", "Hugging Face"]
    },
    {
      step: "04",
      title: "AI Security & Guardrails",
      icon: "Shield",
      description:
        "Explored adversarial machine learning, prompt injection attack vectors, PII leak prevention, and secure LLM gateway implementations.",
      skills: ["Prompt Injection Defense", "PII Redaction", "Threat Modeling", "IAM"]
    },
    {
      step: "05",
      title: "Real-World Projects",
      icon: "Layers",
      description:
        "Developed end-to-end production-grade software prototypes: SentinelAI security gateway, MedAssist AI healthcare assistant, and AgriPulse.",
      skills: ["Full Architecture", "Database Schema", "Model Serving", "Production UX"]
    },
    {
      step: "06",
      title: "Hackathons & Innovation",
      icon: "Rocket",
      description:
        "Demonstrated technical solutions under pressure, pitching AgriPulse at MSME Idea Hackathon 6.0 and collaborating on real-world ideas.",
      skills: ["Team Leadership", "Product Pitching", "Rapid Prototyping", "Impact"]
    }
  ],

  githubStats: {
    username: "GSudeep1404",
    profileUrl: "https://github.com/GSudeep1404",
    tagline: "Code. Build. Learn. Repeat.",
    description:
      "Passionate about open-source exploration, building modular machine learning pipelines, and developing clean software architectures.",
    stats: [
      { label: "Public Repositories", value: "10+", icon: "FolderGit2" },
      { label: "Primary Language", value: "Python / JS", icon: "Code2" },
      { label: "Core Focus", value: "AI / ML / Web", icon: "Cpu" },
      { label: "Open To", value: "Collaborations", icon: "Users" }
    ],
    note: "GitHub profile integration linked directly. Replace static snapshot counts with live GitHub API if desired."
  },

  aiAssistant: {
    systemPrompt:
      "You are Sudeep's AI Portfolio Assistant. You provide friendly, concise, and accurate answers about Gatamaneni Sudeep's skills, projects (SentinelAI, MedAssist AI, AgriPulse, Marketing ROI Predictor), education, achievements, and contact details.",
    quickQuestions: [
      "What are your core AI projects?",
      "Tell me about SentinelAI",
      "What technologies do you know?",
      "What is your educational background?",
      "How can I contact Sudeep?"
    ]
  }
};
