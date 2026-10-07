import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Download, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Meet', href: '#meet' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Brand title, one line wordmark */}
        <a
          href="#hero"
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors flex items-center gap-2.5"
        >
          <span className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-mono text-sm font-semibold">
            {PORTFOLIO_DATA.brand.initials}
          </span>
          <span className="font-semibold">{PORTFOLIO_DATA.brand.name}</span>
        </a>

        {/* Zone 2: 4-6 nav links, single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-blue-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.links.resumeUrl}
            download
            className="px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            title="Download Segun Ofe Resume"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>Resume</span>
          </a>

          <a
            href={PORTFOLIO_DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-blue-600/30 whitespace-nowrap"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3 h-3 text-blue-200" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 shadow-2xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col gap-3">
            <a
              href={PORTFOLIO_DATA.links.resumeUrl}
              download
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-blue-400" />
              Download Resume
            </a>
            <a
              href={PORTFOLIO_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
