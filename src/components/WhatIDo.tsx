import React from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Cloud, Code2, Cpu, Activity } from 'lucide-react';

export const WhatIDo: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cloud':
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cloud className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="what-i-do" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            What I Do
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            {PORTFOLIO_DATA.brand.shortIntro}
          </p>
        </div>

        {/* Four Cards Only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.whatIDo.map((item, index) => (
            <div
              key={item.title}
              className="bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-blue-400/90 mb-3 tracking-tight">
                  {item.subtitle}
                </div>

                {/* Short one-line description only */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Technologies unboxed list */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono">
                {item.technologies.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span>{tech}</span>
                    {idx < item.technologies.length - 1 && <span className="text-slate-600">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
