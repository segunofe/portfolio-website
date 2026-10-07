import React from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import {
  Target,
  Cloud,
  FileCode2,
  GitMerge,
  Box,
  Activity,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';

export const HowIBuild: React.FC = () => {
  const getWorkflowIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Target className="w-5 h-5 text-blue-400" />;
      case '02':
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case '03':
        return <FileCode2 className="w-5 h-5 text-indigo-400" />;
      case '04':
        return <GitMerge className="w-5 h-5 text-purple-400" />;
      case '05':
        return <Box className="w-5 h-5 text-pink-400" />;
      case '06':
        return <Activity className="w-5 h-5 text-amber-400" />;
      case '07':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cloud className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="approach" className="py-24 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            How I Build
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Systematic engineering workflow from requirements to production-grade reliability.
          </p>
        </div>

        {/* Visual Engineering Flow Diagram */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500/20 via-cyan-500/30 to-emerald-500/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
            {PORTFOLIO_DATA.engineeringWorkflow.map((item, index) => {
              const isLast = index === PORTFOLIO_DATA.engineeringWorkflow.length - 1;

              return (
                <div key={item.step} className="flex flex-col items-center">
                  <div
                    className={`w-full h-full p-4 rounded-xl border flex flex-col items-center text-center transition-all duration-200 ${
                      isLast
                        ? 'bg-emerald-950/20 border-emerald-500/30 ring-1 ring-emerald-500/20'
                        : 'bg-slate-950/90 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    {/* Step badge */}
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-3">
                      {getWorkflowIcon(item.step)}
                    </div>

                    <div className="text-[10px] font-mono text-slate-500 mb-1">
                      STEP {item.step}
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-xs font-semibold mb-2 leading-snug ${
                        isLast ? 'text-emerald-300' : 'text-slate-100'
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Concise one-line explanation */}
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {item.shortSummary}
                    </p>
                  </div>

                  {/* Flow arrow for mobile/stacked view */}
                  {!isLast && (
                    <div className="lg:hidden my-2 text-slate-600 flex justify-center">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary banner */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center flex items-center justify-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm text-slate-300 font-medium">
            Result: Declarative, automated, observable, and immutable cloud platforms.
          </span>
        </div>
      </div>
    </section>
  );
};
