import React from 'react';
import { Download, FileText, CheckCircle2, ExternalLink } from 'lucide-react';
import { personalData } from '../data/portfolio';

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-20 lg:py-24 overflow-hidden bg-[#f5f0e6]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          {/* Subtle top pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#ded5c5] text-[#5e4634] text-xs font-mono mb-4 shadow-xs">
            <FileText className="w-3.5 h-3.5 text-[#9a3412]" />
            <span>CURRICULUM VITAE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2b1e17] tracking-tight mb-4">
            Want to know more about me?
          </h2>

          <p className="text-[#5e4b3e] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Download my resume to explore my skills, projects, education, and technical journey in detail.
          </p>

          {/* Key highlights checklist */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-xs sm:text-sm text-[#543f32] font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
              <span>Gatamaneni Sudeep (B.Tech AI & ML)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
              <span>Core Tech: Python, ML, Full-Stack, IoT</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
              <span>Official 1-Page Resume PDF</span>
            </div>
          </div>

          {/* Download button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={personalData.resumePath}
              download="Gatamaneni_Sudeep_Resume.pdf"
              className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm w-full sm:w-auto"
            >
              <Download className="w-4 h-4 text-[#e5d9c2]" />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href={personalData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4 text-[#8a7667]" />
              <span>Preview in Browser</span>
            </a>
          </div>

          {/* Uploaded status indicator */}
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3ede3] border border-[#e3dacd] text-[11px] font-mono text-[#543f32]">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Resume PDF uploaded & verified: Gatamaneni_Sudeep_Resume.pdf</span>
          </div>
        </div>
      </div>
    </section>
  );
}
