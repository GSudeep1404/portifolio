import React from 'react';
import {
  Github,
  GitCommit,
  FolderGit2,
  Code2,
  Cpu,
  Users,
  ExternalLink
} from 'lucide-react';
import { personalData } from '../data/portfolio';

export default function GitHubSection() {
  const { githubStats } = personalData;

  // Realistic commit matrix representation (32 weeks x 7 days)
  const generateWeeks = () => {
    const weeks = [];
    for (let w = 0; w < 32; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const val = ((w * 7 + d * 13) % 11);
        let level = 0;
        if (val > 4 && val <= 7) level = 1;
        else if (val > 7 && val <= 9) level = 2;
        else if (val > 9) level = 3;
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const weeksData = generateWeeks();

  const getCellColor = (level) => {
    switch (level) {
      case 3:
        return 'bg-[#4a3427] shadow-xs';
      case 2:
        return 'bg-[#8c674e]';
      case 1:
        return 'bg-[#c7b29e]';
      default:
        return 'bg-[#ebd8c5]/50';
    }
  };

  const statIconMap = {
    FolderGit2: FolderGit2,
    Code2: Code2,
    Cpu: Cpu,
    Users: Users,
  };

  return (
    <section id="github" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#ded5c5] text-[#5e4634] text-xs font-mono mb-3 shadow-xs">
            <Github className="w-3.5 h-3.5 text-[#9a3412]" />
            <span>OPEN SOURCE & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2b1e17] tracking-tight mb-4">
            {githubStats.tagline}
          </h2>
          <p className="text-[#6e5a4d] text-base sm:text-lg">
            {githubStats.description}
          </p>
        </div>

        {/* GitHub Main Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
          {/* Top Profile Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#eee4d6]">
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-[#faf5ee] border border-[#e3d7c5] flex items-center justify-center text-[#2b1e17] shadow-xs">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-[#2b1e17] font-mono">@{githubStats.username}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0]">
                    Active
                  </span>
                </div>
                <p className="text-xs text-[#786454] font-mono mt-0.5">
                  Gatamaneni Sudeep • Repositories & Implementations
                </p>
              </div>
            </div>

            <a
              href={githubStats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8a7667]" />
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {githubStats.stats.map((stat, idx) => {
              const IconComp = statIconMap[stat.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8ded0] flex items-center gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-white text-[#9a3412] border border-[#ded5c5]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#2b1e17] font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#786454]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contribution Matrix Activity Visual */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-[#e8ded0] overflow-x-auto">
            <div className="flex items-center justify-between mb-3 text-xs text-[#6e5a4d] font-mono">
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-[#9a3412]" />
                <span>Development Activity Matrix</span>
              </span>
              <div className="flex items-center gap-1.5 text-[11px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-[#ebd8c5]/50" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#c7b29e]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#8c674e]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#4a3427]" />
                <span>More</span>
              </div>
            </div>

            {/* Matrix grid cells */}
            <div className="flex gap-1.5 justify-start min-w-[500px]">
              {weeksData.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((dayLevel, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3 h-3 rounded-sm transition-all hover:scale-125 cursor-pointer ${getCellColor(
                        dayLevel
                      )}`}
                      title={`Activity index for day ${dIdx + 1}, week ${wIdx + 1}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Disclaimer note */}
            <div className="mt-4 pt-3 border-t border-[#eee4d6] flex items-center justify-between text-[11px] font-mono text-[#8a7667]">
              <span>{githubStats.note}</span>
              <span className="text-[#543f32] hidden sm:inline">Production ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
