import React, { useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  ShieldAlert,
  Layers,
  HelpCircle,
  Lightbulb,
  Workflow,
  AlertTriangle,
  TrendingUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const { modalDetails } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-white border border-[#ded5c5] shadow-2xl shadow-[#241711]/25 overflow-hidden text-[#3d2c22] my-auto">
        {/* Modal Top Header Bar */}
        <div className="relative px-6 py-4.5 bg-[#faf8f5] border-b border-[#eee4d6] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#f2ebe0] border border-[#ded5c5] text-[#4a3528] font-mono text-xs">
              {project.badge || 'Project Spotlight'}
            </span>
            <span className="text-xs font-mono text-[#8a7667] hidden sm:inline">
              Architecture & In-depth Specifications
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white border border-[#ded5c5] text-[#5e4634] hover:bg-[#f6f0e6] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 custom-scrollbar">
          {/* Title & Tagline Banner */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2b1e17] tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-lg text-[#5e4634] font-medium mb-4">
              {project.tagline}
            </p>

            {/* Disclaimer if present (MedAssist AI) */}
            {project.disclaimer && (
              <div className="p-3.5 rounded-xl bg-[#faf5ee] border border-[#e3d7c5] flex items-start gap-3 text-[#5e4634] text-xs sm:text-sm">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-[#9a3412]" />
                <p>{project.disclaimer}</p>
              </div>
            )}
          </div>

          {/* Technologies Badges */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider text-[#8a7667] mb-2.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#9a3412]" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#faf8f5] border border-[#e8ded0] text-[#3d2c22] text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Overview */}
          {modalDetails?.overview && (
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase font-mono tracking-wider text-[#543f32] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#9a3412]" />
                Project Overview
              </h3>
              <p className="text-[#4a3528] text-sm sm:text-base leading-relaxed bg-[#faf8f5] p-4 rounded-xl border border-[#e8ded0]">
                {modalDetails.overview}
              </p>
            </div>
          )}

          {/* Problem vs Proposed Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modalDetails?.problemStatement && (
              <div className="p-5 rounded-2xl bg-[#faf5ee] border border-[#ebd8cb] space-y-2">
                <div className="flex items-center gap-2 text-[#9a3412] text-xs font-bold font-mono uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  Problem Statement
                </div>
                <p className="text-xs sm:text-sm text-[#5e4634] leading-relaxed">
                  {modalDetails.problemStatement}
                </p>
              </div>
            )}

            {modalDetails?.proposedSolution && (
              <div className="p-5 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] space-y-2">
                <div className="flex items-center gap-2 text-[#15803d] text-xs font-bold font-mono uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  Proposed Solution
                </div>
                <p className="text-xs sm:text-sm text-[#14532d] leading-relaxed">
                  {modalDetails.proposedSolution}
                </p>
              </div>
            )}
          </div>

          {/* Architecture Flow (Rich Espresso Code Box) */}
          {modalDetails?.architecture && (
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase font-mono tracking-wider text-[#543f32] flex items-center gap-2">
                <Workflow className="w-3.5 h-3.5 text-[#9a3412]" />
                System Architecture Flow
              </h3>
              <div className="p-4 rounded-xl bg-[#1f1612] border border-[#3b2a20] font-mono text-xs text-[#eedecf] overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                {modalDetails.architecture}
              </div>
            </div>
          )}

          {/* Key Features List */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase font-mono tracking-wider text-[#543f32] flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d]" />
              Core Capabilities & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#faf8f5] border border-[#e8ded0] text-xs sm:text-sm text-[#4a3528]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9a3412] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges & Future Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modalDetails?.challenges && (
              <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e8ded0] space-y-1.5">
                <h4 className="text-xs font-mono font-bold text-[#8c654d] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Technical Challenges Overcome
                </h4>
                <p className="text-xs text-[#5e4b3e] leading-relaxed">
                  {modalDetails.challenges}
                </p>
              </div>
            )}

            {modalDetails?.futureImprovements && (
              <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e8ded0] space-y-1.5">
                <h4 className="text-xs font-mono font-bold text-[#8c654d] uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Future Improvements & Roadmap
                </h4>
                <p className="text-xs text-[#5e4b3e] leading-relaxed">
                  {modalDetails.futureImprovements}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer / Action Links */}
        <div className="p-5 bg-[#faf8f5] border-t border-[#eee4d6] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>Source Code on GitHub</span>
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#8a7667] bg-[#f0e9dc] border border-[#ded5c5] cursor-not-allowed"
                title="Code repository placeholder"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (Private/Coming Soon)</span>
              </button>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Demo</span>
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#8a7667] bg-[#f0e9dc] border border-[#ded5c5] cursor-not-allowed"
                title="Live demo link not yet published"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo (In Staging)</span>
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-[#6e5a4d] hover:text-[#2b1e17] transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
