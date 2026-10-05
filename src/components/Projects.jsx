import React, { useState } from 'react';
import {
  FolderGit2,
  Github,
  ExternalLink,
  ShieldCheck,
  HeartPulse,
  Sprout,
  BarChart3,
  Sparkles,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import { personalData } from '../data/portfolio';
import ProjectModal from './ProjectModal';

// Warm editorial illustration for each project card
function ProjectIllustration({ projectId }) {
  if (projectId === 'sentinel-ai') {
    return (
      <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[#faf6ef] to-[#f2ebe0] p-4 flex flex-col justify-between overflow-hidden border border-[#ded5c5] group-hover:border-[#bdafa0] transition-colors">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-[#ded5c5] text-[11px] font-mono text-[#543f32] shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#9a3412]" />
            <span>LLM Gateway Shield</span>
          </div>
          <span className="text-[10px] font-mono text-[#15803d] font-semibold bg-[#f0fdf4] px-2 py-0.5 rounded-full border border-[#bbf7d0]">Strict Auth</span>
        </div>

        {/* Telemetry snippet inside rich espresso console */}
        <div className="relative z-10 p-3 rounded-xl bg-[#1f1612] border border-[#3b2a20] font-mono text-xs text-[#eedecf] space-y-1 shadow-inner">
          <div className="flex items-center justify-between text-[11px] text-[#8c7462]">
            <span>[INSPECTION PIPELINE]</span>
            <span className="text-[#fcd34d]">18ms</span>
          </div>
          <div className="text-[#86efac] font-bold text-xs truncate">
            ✓ Prompt Injection: ZERO THREAT DETECTED
          </div>
          <div className="text-[#eedecf] text-xs truncate">
            ✓ PII Scrubbing: ACTIVE (Masked)
          </div>
        </div>

        <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-[#ecdcca]/60 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  if (projectId === 'medassist-ai') {
    return (
      <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[#faf6ef] to-[#f2ebe0] p-4 flex flex-col justify-between overflow-hidden border border-[#ded5c5] group-hover:border-[#bdafa0] transition-colors">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-[#ded5c5] text-[11px] font-mono text-[#543f32] shadow-xs">
            <HeartPulse className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Clinical NLP Assistant</span>
          </div>
          <span className="text-[10px] font-mono text-[#786454] bg-white px-2 py-0.5 rounded-full border border-[#ded5c5]">OCR + RAG</span>
        </div>

        <div className="relative z-10 p-3 rounded-xl bg-[#1f1612] border border-[#3b2a20] font-mono text-xs text-[#eedecf] space-y-1 shadow-inner">
          <div className="flex items-center justify-between text-[11px] text-[#8c7462]">
            <span>[REPORT SUMMARY]</span>
            <span className="text-[#86efac]">Normal Range</span>
          </div>
          <div className="text-[#eedecf] text-xs truncate">
            ✓ Vitals Normalization: Reference bounds verified
          </div>
          <div className="text-[#d8c5b4] text-[11px] truncate">
            Patient Q&A: Grounded medical translation
          </div>
        </div>

        <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-[#ecdcca]/60 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  if (projectId === 'agripulse') {
    return (
      <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[#faf6ef] to-[#f2ebe0] p-4 flex flex-col justify-between overflow-hidden border border-[#ded5c5] group-hover:border-[#bdafa0] transition-colors">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-[#ded5c5] text-[11px] font-mono text-[#543f32] shadow-xs">
            <Sprout className="w-3.5 h-3.5 text-[#15803d]" />
            <span>Smart Farming OS</span>
          </div>
          <span className="text-[10px] font-mono text-[#15803d] font-semibold bg-[#f0fdf4] px-2 py-0.5 rounded-full border border-[#bbf7d0]">MSME 6.0</span>
        </div>

        <div className="relative z-10 p-3 rounded-xl bg-[#1f1612] border border-[#3b2a20] font-mono text-xs text-[#eedecf] space-y-1 shadow-inner">
          <div className="flex items-center justify-between text-[11px] text-[#8c7462]">
            <span>[CROP CYCLE ADVISORY]</span>
            <span className="text-[#86efac]">Optimal Soil</span>
          </div>
          <div className="text-[#86efac] font-bold text-xs truncate">
            ✓ Crop Selection: Soil-parameter matching
          </div>
          <div className="text-[#eedecf] text-[11px] truncate">
            ✓ Weather Feed: Precision irrigation scheduled
          </div>
        </div>

        <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-[#ecdcca]/60 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  // Marketing Campaign ROI Predictor
  return (
    <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[#faf6ef] to-[#f2ebe0] p-4 flex flex-col justify-between overflow-hidden border border-[#ded5c5] group-hover:border-[#bdafa0] transition-colors">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-[#ded5c5] text-[11px] font-mono text-[#543f32] shadow-xs">
          <BarChart3 className="w-3.5 h-3.5 text-[#9a3412]" />
          <span>Predictive Analytics</span>
        </div>
        <span className="text-[10px] font-mono text-[#786454] bg-white px-2 py-0.5 rounded-full border border-[#ded5c5]">Power BI + ML</span>
      </div>

      <div className="relative z-10 p-3 rounded-xl bg-[#1f1612] border border-[#3b2a20] font-mono text-xs text-[#eedecf] space-y-1 shadow-inner">
        <div className="flex items-center justify-between text-[11px] text-[#8c7462]">
          <span>[ROI PROJECTION]</span>
          <span className="text-[#fcd34d]">+3.8x ROAS</span>
        </div>
        <div className="text-[#eedecf] text-xs truncate">
          ✓ Regression: 94.6% Accuracy on Historical Data
        </div>
        <div className="text-[#d8c5b4] text-[11px] truncate">
          ✓ Channel Allocation: Budget rebalancing model
        </div>
      </div>

      <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-[#ecdcca]/60 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#ded5c5] text-[#5e4634] text-xs font-mono mb-3 shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5 text-[#9a3412]" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2b1e17] tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#6e5a4d] text-base sm:text-lg">
            Practical AI-powered applications, secure LLM systems, intelligent healthcare solutions, and data analytics tools designed to solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalData.projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Illustration Banner */}
                <div
                  className="cursor-pointer mb-5"
                  onClick={() => setActiveModalProject(project)}
                  title="Click to view deep dive architecture"
                >
                  <ProjectIllustration projectId={project.id} />
                </div>

                {/* Badge & Title */}
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#faf5ee] border border-[#e3d7c5] text-[#5e4634] text-[11px] font-mono">
                    {project.badge}
                  </span>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono text-[#786454] hover:text-[#2b1e17] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Architecture Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h3
                  onClick={() => setActiveModalProject(project)}
                  className="text-xl sm:text-2xl font-bold text-[#2b1e17] group-hover:text-[#5e4634] transition-colors cursor-pointer mb-2"
                >
                  {project.title}
                </h3>

                <p className="text-[#5e4b3e] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Disclaimer banner for MedAssist */}
                {project.disclaimer && (
                  <div className="mb-4 p-3 rounded-xl bg-[#faf5ee] border border-[#e3d7c5] flex items-center gap-2.5 text-[#5e4634] text-xs">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-[#9a3412]" />
                    <span className="line-clamp-2">{project.disclaimer}</span>
                  </div>
                )}

                {/* Technologies Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#faf8f5] border border-[#e8ded0] text-[11px] font-mono text-[#4a3528]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features Bullet List */}
                <div className="space-y-1.5 mb-6 pt-3.5 border-t border-[#eee4d6]">
                  <span className="text-[11px] uppercase tracking-wider font-mono text-[#8a7667] block mb-2">
                    Key Features:
                  </span>
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#523f33]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9a3412] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                  {project.features.length > 3 && (
                    <div className="text-[11px] font-mono text-[#8a7667] pl-3.5">
                      + {project.features.length - 3} more capabilities in deep dive
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#eee4d6] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#e5d9c2]" />
                  <span>View Project</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary p-2 rounded-xl"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="p-2 rounded-xl bg-[#f2ede4] border border-[#e0d6c7] text-[#a89687] cursor-not-allowed"
                      title="GitHub link coming soon"
                    >
                      <Github className="w-4 h-4" />
                    </button>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary p-2 rounded-xl"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-2.5 py-1.5 rounded-xl bg-[#f2ede4] border border-[#e0d6c7] text-[11px] font-mono text-[#8a7667] cursor-not-allowed flex items-center gap-1.5"
                      title="Demo in prototype staging"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo In Staging</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
