import React from 'react';
import {
  Trophy,
  Lightbulb,
  FileCheck2,
  Rocket,
  GraduationCap,
  Sparkles,
  Edit3
} from 'lucide-react';
import { personalData } from '../data/portfolio';

const iconMap = {
  Trophy: Trophy,
  Lightbulb: Lightbulb,
  FileCheck2: FileCheck2,
  Rocket: Rocket,
  GraduationCap: GraduationCap,
};

export default function Achievements() {
  const { achievements } = personalData;

  return (
    <section id="achievements" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#ded5c5] text-[#5e4634] text-xs font-mono mb-3 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-[#9a3412]" />
            <span>HONORS & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2b1e17] tracking-tight mb-4">
            Key <span className="gradient-text">Achievements</span> & Recognition
          </h2>
          <p className="text-[#6e5a4d] text-base sm:text-lg">
            Milestones and competitive innovation initiatives, highlighting national-level hackathons and technical prototypes.
          </p>
        </div>

        {/* Featured Highlight Card: MSME Idea Hackathon 6.0 */}
        {achievements.filter((a) => a.highlight).map((item, idx) => (
          <div
            key={idx}
            className="mb-10 relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#faf6ef] via-[#f6efe4] to-[#f2e9dc] border border-[#cfbeab] shadow-xl shadow-[#3b2b20]/6 backdrop-blur-xl group hover:border-[#bda690] transition-all duration-300"
          >
            <div className="absolute -top-3 left-6 sm:left-10 px-3.5 py-0.5 rounded-md bg-[#2b1e17] text-white font-mono text-xs font-semibold shadow-xs flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#fcd34d]" />
              <span>FEATURED HIGHLIGHT</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-white border border-[#ded5c5] text-[#4a3528] font-mono text-xs font-medium shadow-xs">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-[#8a7667]">
                    Category: {item.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2b1e17] group-hover:text-[#5e4634] transition-colors">
                  {item.title}
                </h3>

                <div className="text-sm font-semibold text-[#8c5e3d] font-mono">
                  Project: {item.project}
                </div>

                <p className="text-[#574438] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center p-6 rounded-2xl bg-white border border-[#ded5c5] text-center shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-[#faf5ee] border border-[#e3d7c5] flex items-center justify-center text-[#9a3412] mb-3">
                  <Trophy className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase text-[#8a7667] mb-1">
                  National Innovation
                </span>
                <span className="text-sm font-bold text-[#2b1e17]">
                  Idea Hackathon 6.0
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Other Achievement & Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {achievements.filter((a) => !a.highlight).map((item, idx) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#faf5ee] border border-[#e3d7c5] text-[#9a3412] group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    {item.isPlaceholder ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#faf8f5] border border-[#e8ded0] text-[#7a6454] text-[10px] font-mono">
                        <Edit3 className="w-3 h-3 text-[#9a3412]" />
                        <span>Editable in portfolio.js</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-md bg-[#f2ebe0] border border-[#ded5c5] text-[#5e4634] text-[10px] font-mono">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#2b1e17] group-hover:text-[#5e4634] transition-colors mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-[#8c5e3d] mb-3">
                    {item.project}
                  </div>

                  <p className="text-[#695648] text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#eee4d6] flex items-center justify-between text-[11px] font-mono text-[#8a7667]">
                  <span>{item.category}</span>
                  {item.isPlaceholder ? (
                    <span className="text-[#8c7462]">Customizable</span>
                  ) : (
                    <span className="text-[#15803d] font-semibold">Verified</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
