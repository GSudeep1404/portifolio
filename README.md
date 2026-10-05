# Gatamaneni Sudeep — AI & Machine Learning Portfolio Website

A modern, responsive, high-performance personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**, crafted specifically for an AI & Machine Learning student and developer.

![Portfolio Theme](https://img.shields.io/badge/Theme-Editorial%20Cream%20%26%20Espresso-d97706)
![Framework](https://img.shields.io/badge/Framework-React%20%2B%20Vite-61dafb)
![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS-38bdf8)
![Status](https://img.shields.io/badge/Production-Ready-10b981)

---

## 🌟 Highlights & Features

1. **Sticky Glassmorphic Navbar**: Smooth blur on scroll, active section indicator, mobile drawer menu, and quick `⌘K` trigger.
2. **Editorial Hero Section**: Dynamic blueprint network visual, interactive code terminal tabs (`SentinelAI.py`, `MedAssist.py`, `AgriPulse.py`), floating status badges, and direct resume download.
3. **Structured About Me**: Student narrative, core technical interest chips, 4 quick info cards, and "Currently Deep-Diving" badges.
4. **Interactive 6-Field Skills Dropdown**: Custom dropdown menu allowing switching between all 6 technical fields (AI & ML, Programming, Web & Full-Stack, Databases, Cloud & IoT, Developer Tools), with collapsible accordion card drawers and quick pill filters.
5. **Featured Project Cards & Deep Dive Modal**:
   - **SentinelAI**: AI Security Gateway for LLM Applications (Prompt injection defense & PII redactor).
   - **MedAssist AI**: AI-Powered Clinical Assistant (with ethical medical disclaimer).
   - **AgriPulse**: AI Operating System for Farmers (**MSME Idea Hackathon 6.0** featured innovation).
   - **Marketing Campaign ROI Predictor**: Supervised ML models & Power BI analytics.
   - *Deep Dive Architecture Modal*: Click any card or "View Project" to inspect problem statement, proposed solution, system architecture flow, challenges, and future roadmap.
6. **Education Vertical Timeline**: B.Tech AI & ML curriculum breakdown, institution, and core coursework subjects.
7. **Achievements & Recognition**: Celebratory highlight card for **MSME Idea Hackathon 6.0** alongside clearly marked editable placeholders.
8. **My Learning Journey**: Visual step-by-step progress timeline from AI & ML fundamentals to hackathons and production systems.
9. **GitHub Showcase ("Code. Build. Learn. Repeat.")**: Profile direct link, simulated 32-week commit activity matrix, project statistics, and language focus.
10. **Resume Section**: Instant download (`/resume.pdf`) and in-browser preview.
11. **Interactive Contact Form**: Direct email, LinkedIn, and GitHub links, copy-to-clipboard button, validated form with confetti feedback, and backend setup guide.
12. **Ask Sudeep's AI Assistant**: Floating interactive chatbot trained on your portfolio data (projects, skills, education, contact) with preset suggestion pills.
13. **Command Palette (`Ctrl + K` / `Cmd + K`)**: Keyboard-driven quick navigation to any section or external link.
14. **Subtle Custom Cursor**: Smooth desktop glow follower (automatically disabled on touch devices).
15. **High-Tech Loading Screen**: "Initializing Sudeep.dev..." boot sequence with smooth transition.

---

## 📁 Project Structure

```text
sudeep-portfolio/
├── public/
│   ├── favicon.svg          # Custom futuristic AI neural favicon
│   └── resume.pdf           # Default resume file (replace with your PDF)
├── src/
│   ├── data/
│   │   └── portfolio.js     # ⭐ CENTRAL DATA FILE: Edit all personal info & projects here!
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky glassmorphic navbar with mobile menu
│   │   ├── Hero.jsx         # Hero section with bio, buttons, and socials
│   │   ├── HeroVisual.jsx   # Interactive AI neural network & code terminal visual
│   │   ├── About.jsx        # Bio, quick cards, and currently learning chips
│   │   ├── Skills.jsx       # Categorized skills matrix with filter tabs
│   │   ├── Projects.jsx     # Featured project cards with tech illustrations
│   │   ├── ProjectModal.jsx # In-depth architecture & solution modal
│   │   ├── Education.jsx    # Vertical timeline for B.Tech degree & coursework
│   │   ├── Achievements.jsx # MSME Hackathon 6.0 highlight & customizable cards
│   │   ├── LearningJourney.jsx # 6-phase growth trajectory
│   │   ├── GitHubSection.jsx# Code. Build. Learn. Repeat. & contribution grid
│   │   ├── ResumeSection.jsx# Download & preview CV section
│   │   ├── Contact.jsx      # Contact form & social connections
│   │   ├── Footer.jsx       # Minimal footer with 2026 copyright
│   │   ├── AIChat.jsx       # Floating AI chatbot assistant
│   │   ├── CommandPalette.jsx # Ctrl+K command menu
│   │   ├── CustomCursor.jsx # Smooth desktop cursor
│   │   └── LoadingScreen.jsx# Initial system bootloader animation
│   ├── App.jsx              # Main application root
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind directives, fonts, and custom glassmorphism
├── index.html               # SEO metadata, Open Graph tags, and Google Fonts
├── package.json             # Scripts & dependencies
├── tailwind.config.js       # Dark theme tokens, cyber colors & animations
└── vite.config.js           # Vite build configuration
```

---

## 🚀 Getting Started

### 1. Requirements
- **Node.js** (v18 or higher recommended, e.g. Node v20/v22/v24)
- **npm** or **yarn** or **pnpm**

### 2. Run in VS Code
1. Open Visual Studio Code.
2. Select **File > Open Folder...** and choose `sudeep-portfolio`.
3. Open the built-in terminal (`Ctrl + ~` or `` Ctrl + ` ``).
4. Run:
```bash
npm install
npm run dev
```
5. Open your browser and navigate to:
```text
http://localhost:5173
```

---

## 🛠️ How to Customize Your Portfolio

### 1. Update Personal Info, Projects, & Achievements
Open `src/data/portfolio.js`. This single file controls almost all content across the website:
- **Change Name, Email, or Social URLs**:
  ```javascript
  export const personalData = {
    name: "Gatamaneni Sudeep",
    email: "gatamanenisudeep14@gmail.com",
    github: "https://github.com/GSudeep1404",
    linkedin: "https://www.linkedin.com/in/sudeep-g-3b4736355/",
    ...
  }
  ```
- **Update or Add Projects**:
  Modify any object inside `personalData.projects`. You can update `githubUrl`, `liveUrl`, or add new bullet points.
- **Add Your Verified Certifications & College Name**:
  Update `personalData.education` and `personalData.achievements`.

### 2. Replace Your Resume PDF
1. Place your real resume PDF file inside the `public/` folder.
2. Name it `resume.pdf` (or update `resumePath` in `src/data/portfolio.js` if you choose a different name like `Sudeep_Resume.pdf`).

### 3. Connect the Contact Form to Receive Real Emails
The contact form currently validates inputs and displays a celebratory confirmation. To route messages directly to your email without maintaining a backend server:
- **Option A: Formspree (Free & Instant)**
  1. Create a free account at [formspree.io](https://formspree.io).
  2. Create a new form and copy your Form ID (e.g. `https://formspree.io/f/xv...`).
  3. In `src/components/Contact.jsx`, change `handleSubmit` to POST to your Formspree endpoint with `fetch()`.
- **Option B: EmailJS / Web3Forms**
  Replace the simulated timeout with an EmailJS SDK call.

---

## 🌐 How to Deploy to Vercel (Free & Instant)

Deploying to Vercel takes less than 2 minutes:

### Method 1: Via Vercel Web Dashboard (Recommended)
1. Push your repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Sudeep's AI portfolio"
   git remote add origin https://github.com/GSudeep1404/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **Add New... > Project**.
4. Select your `portfolio` repository.
5. Vercel will automatically detect **Vite**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**. Your portfolio will be live at `https://your-portfolio.vercel.app` with free SSL and lightning-fast CDN delivery!

### Method 2: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts and select default options.

---

## ⚡ Production Build Verification
To test the production build locally before deploying:
```bash
npm run build
npm run preview
```
