import React from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-200">
            {PORTFOLIO_DATA.brand.name}
          </span>
          <span className="text-slate-600">·</span>
          <span>{PORTFOLIO_DATA.brand.primaryHeadline}</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={PORTFOLIO_DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PORTFOLIO_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={PORTFOLIO_DATA.links.resumeUrl}
            download
            className="hover:text-white transition-colors"
          >
            Resume
          </a>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-md hover:bg-slate-900 text-slate-400 hover:text-white transition-colors"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
