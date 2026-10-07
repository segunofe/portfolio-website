import React from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Award, CheckCircle2, Shield } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Industry credentials validating cloud architecture and infrastructure proficiency.
          </p>
        </div>

        {/* Compact Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-850 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-800/80 text-blue-400 border border-slate-700/60">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${cert.badgeColor}`}>
                    {cert.level}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-400 mb-1">
                  {cert.issuer}
                </div>

                <h3 className="text-sm font-semibold text-white leading-snug mb-3">
                  {cert.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{cert.verifyText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
