import React, { useState, useRef, useEffect } from 'react';
import {
  Code2,
  BrainCircuit,
  Globe,
  Database,
  ShieldAlert,
  Wrench,
  CheckCircle2,
  Layers,
  ChevronDown,
  Check,
  Sparkles,
  SlidersHorizontal,
  RotateCcw
} from 'lucide-react';
import { personalData } from '../data/portfolio';

// Map each category to an appropriate icon & preview highlight
const categoryMetaMap = {
  'AI & Machine Learning': {
    icon: BrainCircuit,
    color: 'text-amber-800',
    bg: 'bg-amber-100/60',
    preview: 'SVM, KNN, Deep Learning, Transformers & Generative AI',
  },
  'Programming': {
    icon: Code2,
    color: 'text-stone-800',
    bg: 'bg-stone-200/70',
    preview: 'Python (AI/ML), Java, C++, JavaScript (ES6+)',
  },
  'Web & Full-Stack Development': {
    icon: Globe,
    color: 'text-emerald-800',
    bg: 'bg-emerald-100/70',
    preview: 'React.js, Node.js, Express, Flask, FastAPI, REST APIs',
  },
  'Web Development': {
    icon: Globe,
    color: 'text-emerald-800',
    bg: 'bg-emerald-100/70',
    preview: 'React.js, Node.js, Express, Flask, FastAPI, REST APIs',
  },
  'Databases': {
    icon: Database,
    color: 'text-orange-800',
    bg: 'bg-orange-100/70',
    preview: 'MongoDB, Firebase, PostgreSQL, MySQL',
  },
  'Cloud, AI Security & IoT': {
    icon: ShieldAlert,
    color: 'text-rose-800',
    bg: 'bg-rose-100/70',
    preview: 'IoT (ESP32/Arduino/MQTT), AI Guardrails, Cloud & IAM',
  },
  'Developer Tools': {
    icon: Wrench,
    color: 'text-indigo-800',
    bg: 'bg-indigo-100/70',
    preview: 'Git/GitHub, VS Code, Hugging Face, OpenAI APIs, Power BI',
  },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [collapsedCards, setCollapsedCards] = useState({});
  const dropdownRef = useRef(null);

  const categories = personalData.skills.map((s) => s.category);
  const totalSkillsCount = personalData.skills.reduce(
    (acc, group) => acc + group.skills.length,
    0
  );

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const filteredCategories =
    selectedCategory === 'All'
      ? personalData.skills
      : personalData.skills.filter((s) => s.category === selectedCategory);

  const toggleCardCollapse = (categoryName) => {
    setCollapsedCards((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const getSelectedCategoryMeta = () => {
    if (selectedCategory === 'All') {
      return {
        icon: Layers,
        label: 'All 6 Technical Fields',
        count: `${totalSkillsCount} Skills across 6 Fields`,
      };
    }
    const meta = categoryMetaMap[selectedCategory] || {
      icon: Code2,
      preview: '',
    };
    const group = personalData.skills.find((s) => s.category === selectedCategory);
    return {
      icon: meta.icon,
      label: selectedCategory,
      count: group ? `${group.skills.length} Technologies` : '',
    };
  };

  const activeMeta = getSelectedCategoryMeta();
  const ActiveIcon = activeMeta.icon;

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden bg-[#f5f0e6]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#ded5c5] text-[#5e4634] text-xs font-mono mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#9a3412]" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2b1e17] tracking-tight mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-[#6e5a4d] text-base sm:text-lg">
            A comprehensive overview of the programming languages, AI/ML architectures, and tools I use to build scalable intelligent applications.
          </p>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE 6-FIELD DROPDOWN MENU SELECTOR */}
        {/* ======================================================== */}
        <div className="max-w-xl mx-auto mb-12" ref={dropdownRef}>
          <div className="flex items-center justify-between mb-2 px-1">
            <label className="text-xs font-mono uppercase tracking-wider font-semibold text-[#6e5a4d] flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#9a3412]" />
              <span>Select Technical Field:</span>
            </label>
            <span className="text-[11px] font-mono text-[#8a7667]">
              6 Fields Available
            </span>
          </div>

          {/* Main Dropdown Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border text-left transition-all duration-200 shadow-sm ${
                isDropdownOpen
                  ? 'border-[#2b1e17] ring-2 ring-[#2b1e17]/10 shadow-md'
                  : 'border-[#ded5c5] hover:border-[#bfaea0] hover:shadow'
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-xl bg-[#faf5ee] border border-[#e5dcce] text-[#9a3412] shrink-0">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#9a3412] font-semibold">
                      {selectedCategory === 'All'
                        ? 'OVERVIEW'
                        : `FIELD ${categories.indexOf(selectedCategory) + 1} OF 6`}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#2b1e17] truncate">
                    {activeMeta.label}
                  </h4>
                  <p className="text-xs text-[#7d6b5e] truncate font-mono">
                    {activeMeta.count}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pl-3 border-l border-[#eee4d6] shrink-0">
                <span className="hidden sm:inline text-xs font-mono text-[#7d6b5e]">
                  {isDropdownOpen ? 'Close Menu' : 'Open Menu'}
                </span>
                <div
                  className={`p-1.5 rounded-lg bg-[#faf8f5] text-[#2b1e17] transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 bg-[#f0e7d8]' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {/* Dropdown Menu Panel */}
            {isDropdownOpen && (
              <div
                role="listbox"
                className="absolute z-30 mt-2 w-full rounded-2xl bg-white border border-[#ded5c5] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
              >
                {/* Header inside dropdown */}
                <div className="px-4 py-2.5 bg-[#faf6ee] border-b border-[#eee4d6] flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#735e4e] uppercase">
                    Choose from 6 Technical Fields
                  </span>
                  <span className="text-[10px] font-mono bg-[#eee4d6] text-[#4d3a2e] px-2 py-0.5 rounded-full font-semibold">
                    {categories.length} Fields
                  </span>
                </div>

                <div className="max-h-96 overflow-y-auto p-2 space-y-1 divide-y divide-[#f7f2eb]">
                  {/* Option: All Fields */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('All');
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                      selectedCategory === 'All'
                        ? 'bg-[#faf5ee] border border-[#e3d7c5]'
                        : 'hover:bg-[#faf8f5]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-[#f0e9dd] text-[#2b1e17] shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#2b1e17]">
                            All Technical Fields
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#f0e7d8] text-[#5e4634]">
                            Show All 6
                          </span>
                        </div>
                        <p className="text-xs text-[#7d6b5e] truncate">
                          View all 28 skills & tools across every discipline
                        </p>
                      </div>
                    </div>
                    {selectedCategory === 'All' && (
                      <div className="p-1 rounded-full bg-[#2b1e17] text-white shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </button>

                  {/* 6 Types of Field Options */}
                  {categories.map((cat, idx) => {
                    const meta = categoryMetaMap[cat] || {
                      icon: Code2,
                      preview: '',
                    };
                    const Icon = meta.icon;
                    const group = personalData.skills.find((s) => s.category === cat);
                    const isSelected = selectedCategory === cat;

                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                          isSelected
                            ? 'bg-[#faf5ee] border border-[#e3d7c5]'
                            : 'hover:bg-[#faf8f5]'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-2 rounded-lg bg-[#faf5ee] border border-[#e8ded0] text-[#9a3412] shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#f0e8dc] text-[#5e4634]">
                                Field {idx + 1}
                              </span>
                              <span className="text-sm font-bold text-[#2b1e17] truncate">
                                {cat}
                              </span>
                            </div>
                            <p className="text-xs text-[#7d6b5e] truncate font-mono">
                              {meta.preview}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#f2ebe0] text-[#5e4634] hidden sm:inline">
                            {group ? `${group.skills.length} skills` : ''}
                          </span>
                          {isSelected && (
                            <div className="p-1 rounded-full bg-[#2b1e17] text-white">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Footer inside dropdown */}
                <div className="p-2.5 bg-[#faf6ee] border-t border-[#eee4d6] flex items-center justify-between text-xs text-[#7d6b5e]">
                  <span>Click any field to filter cards</span>
                  {selectedCategory !== 'All' && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory('All');
                        setIsDropdownOpen(false);
                      }}
                      className="font-semibold text-[#9a3412] hover:underline flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset to All</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Quick Category Chips for Fast Switching */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === 'All'
                  ? 'bg-[#2b1e17] text-white font-semibold shadow-xs'
                  : 'bg-white text-[#6b594d] border border-[#ded5c5] hover:border-[#bdafa0]'
              }`}
            >
              All (6)
            </button>
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#2b1e17] text-white font-semibold shadow-xs'
                    : 'bg-white text-[#6b594d] border border-[#ded5c5] hover:border-[#bdafa0]'
                }`}
                title={cat}
              >
                #{idx + 1} {cat.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* SKILLS CARDS GRID (WITH ACCORDION DROPDOWN SUPPORT) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, groupIdx) => {
            const meta = categoryMetaMap[group.category] || {
              icon: Code2,
              preview: '',
            };
            const Icon = meta.icon;
            const isCollapsed = Boolean(collapsedCards[group.category]);
            const fieldIndex = categories.indexOf(group.category) + 1;

            return (
              <div
                key={groupIdx}
                className="glass-card rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Category Header with Dropdown Collapse Toggle */}
                  <div
                    onClick={() => toggleCardCollapse(group.category)}
                    className="flex items-center justify-between pb-4 mb-4 border-b border-[#eee4d6] cursor-pointer select-none"
                    title="Click to collapse / expand this field dropdown"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#faf5ee] border border-[#e3d7c5] text-[#9a3412] group-hover:scale-105 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold text-[#9a3412]">
                            FIELD #{fieldIndex}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-[#2b1e17] group-hover:text-[#5e4634] transition-colors">
                          {group.category}
                        </h3>
                        <span className="text-[11px] font-mono text-[#8a7667]">
                          {group.skills.length} Technologies
                        </span>
                      </div>
                    </div>

                    <div className="p-1.5 rounded-lg bg-[#faf8f5] border border-[#e8ded0] text-[#7d6b5e] group-hover:text-[#2b1e17] transition-all">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isCollapsed ? '-rotate-90' : 'rotate-0'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Collapsible Skills List / Pills */}
                  {!isCollapsed ? (
                    <div className="space-y-2.5">
                      {group.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3 rounded-xl bg-[#faf8f5] border border-[#e8ded0] hover:border-[#c9bcab] hover:bg-white transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-semibold text-[#2b1e17] flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d]" />
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#f2ebe0] text-[#5e4634] border border-[#ded5c5]">
                              {skill.level}
                            </span>
                          </div>

                          {/* Associated tags */}
                          {skill.tags && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {skill.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f0e8dc] text-[#5c473a]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-4 text-center text-xs font-mono text-[#8a7667] bg-[#faf8f5] rounded-xl border border-dashed border-[#e3d7c5]">
                      <span>{group.skills.length} technologies hidden • Click header to expand</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#eee4d6] flex items-center justify-between text-[11px] font-mono text-[#8a7667]">
                  <span>Field {fieldIndex} of 6</span>
                  <span className="text-[#3d2c22] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#9a3412]" />
                    Production Ready
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Helper footer text if filtered */}
        {selectedCategory !== 'All' && (
          <div className="text-center mt-8">
            <button
              onClick={() => setSelectedCategory('All')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#ded5c5] text-xs font-mono text-[#5e4634] hover:bg-[#faf5ee] transition-all shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset filter & show all 6 technical fields</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
