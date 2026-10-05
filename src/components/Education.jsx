import React from 'react';
import { GraduationCap, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolio';

export default function Education() {
  const { education } = personalData;

  return (
    <section id="education" className="relative py-20 lg:py-28 overflow-hidden bg-[#f5f0e6]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#ded5c5] text-[#5e4634] text-xs font-mono mb-3 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-[#9a3412]" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2b1e17] tracking-tight mb-4">
            Education & <span className="gradient-text">Core Curriculum</span>
          </h2>
          <p className="text-[#6e5a4d] text-base sm:text-lg">
            Rigorous technical training combining computer science fundamentals, neural networks, and applied AI systems.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#ded5c5] space-y-12">
          {education.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-10 h-10 rounded-2xl bg-white border-2 border-[#8c6b52] flex items-center justify-center text-[#8c6b52] shadow-sm group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5 text-[#9a3412]" />
              </div>

              {/* Education Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md bg-[#faf5ee] border border-[#e3d7c5] text-[#5e4634] text-xs font-mono font-medium">
                    {item.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#8a7667]">
                    <Calendar className="w-3.5 h-3.5 text-[#a39080]" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#2b1e17] group-hover:text-[#5e4634] transition-colors mb-2">
                  {item.degree}
                </h3>

                <h4 className="text-sm sm:text-base font-medium text-[#705c4f] mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#9a3412] shrink-0" />
                  <span>{item.institution}</span>
                </h4>

                <p className="text-[#5e4b3e] text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Core Academic Areas */}
                <div className="pt-4 border-t border-[#eee4d6]">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#8a7667] mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#9a3412]" />
                    <span>Key Coursework & Academic Focus Areas</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {item.coreAreas.map((area, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-[#faf8f5] border border-[#e8ded0] text-xs text-[#3d2c22]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                        <span className="truncate">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
