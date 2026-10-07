import React from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Download, Github, Linkedin, ArrowUpRight, Cloud, Terminal, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Background visual with subtle cloud infrastructure graphic & ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={PORTFOLIO_DATA.brand.heroBackground}
          alt="Cloud Infrastructure Topology"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-screen scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to keep the content high-contrast and readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Profile Avatar & Status Pill */}
        <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-xl shadow-blue-500/10 ring-4 ring-blue-500/10 transition-transform duration-300 group-hover:scale-105">
              <img
                src={PORTFOLIO_DATA.brand.avatarUrl}
                alt={PORTFOLIO_DATA.brand.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Live active status indicator */}
            <span
              className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 ring-2 ring-emerald-500/20"
              title="Available for Cloud & DevOps opportunities"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AWS • Azure • Google Cloud</span>
            <span className="text-slate-600">|</span>
            <span className="text-blue-400 font-mono">Available</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3 text-balance">
          {PORTFOLIO_DATA.brand.name}
        </h1>

        {/* Primary Headline */}
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-3 tracking-tight">
          {PORTFOLIO_DATA.brand.primaryHeadline}
        </div>

        {/* Secondary Headline */}
        <div className="text-sm sm:text-base font-medium text-slate-400 mb-6 tracking-wide">
          {PORTFOLIO_DATA.brand.secondaryHeadline}
        </div>

        {/* Short Statement */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-9 text-balance">
          “{PORTFOLIO_DATA.brand.heroStatement}”
        </p>

        {/* CTAs (Primary, Secondary, Additional) */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-10">
          {/* Primary CTA */}
          <a
            href={PORTFOLIO_DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center gap-2 active:scale-95"
          >
            <Linkedin className="w-4 h-4" />
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 text-blue-200" />
          </a>

          {/* Secondary CTA */}
          <a
            href={PORTFOLIO_DATA.links.resumeUrl}
            download
            className="px-6 py-3 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-sm"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Download Resume</span>
          </a>

          {/* Additional Link */}
          <a
            href={PORTFOLIO_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-200 flex items-center gap-2"
          >
            <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
            <span>View GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Quick Value Metrics / Proof Strip */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-slate-850/80 w-full max-w-xl text-center">
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">3</div>
            <div className="text-xs text-slate-400 mt-0.5">Major Clouds (AWS, Azure, GCP)</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">100%</div>
            <div className="text-xs text-slate-400 mt-0.5">Infrastructure as Code</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">4x</div>
            <div className="text-xs text-slate-400 mt-0.5">Industry Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};
