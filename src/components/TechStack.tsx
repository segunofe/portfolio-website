import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Cloud, Layers, Terminal, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-blue-400" />;
      case 'Infrastructure':
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'DevOps':
        return <Terminal className="w-4 h-4 text-indigo-400" />;
      case 'Observability':
        return <Activity className="w-4 h-4 text-emerald-400" />;
      case 'AI / Cloud':
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      default:
        return <Cloud className="w-4 h-4 text-blue-400" />;
    }
  };

  const categories = ['All', ...PORTFOLIO_DATA.technologyCategories.map((c) => c.category)];

  const filteredCategories =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.technologyCategories
      : PORTFOLIO_DATA.technologyCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-900/40 border-y border-slate-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Cloud & Technology
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Core technologies, container platforms, IaC toolchains, and AI frameworks.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 border border-slate-800 rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    {cat.category}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  {cat.items.length} tools
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-4 line-clamp-1">
                {cat.description}
              </p>

              <div className="space-y-2.5">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-850 hover:border-slate-750 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {item.highlight}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
