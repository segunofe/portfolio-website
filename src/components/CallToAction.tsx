import React from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Linkedin, Github, Download, ArrowUpRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative border-t border-slate-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Let’s Build Something
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Interested in cloud infrastructure, DevOps, automation, or platform engineering?
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={PORTFOLIO_DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-xl shadow-blue-600/30 flex items-center gap-2 active:scale-95"
          >
            <Linkedin className="w-4 h-4" />
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 text-blue-200" />
          </a>

          <a
            href={PORTFOLIO_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-200 flex items-center gap-2 active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href={PORTFOLIO_DATA.links.resumeUrl}
            download
            className="px-6 py-3.5 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-200 flex items-center gap-2 active:scale-95"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};
