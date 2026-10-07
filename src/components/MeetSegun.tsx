import React from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Linkedin, Play, ArrowUpRight } from 'lucide-react';

export const MeetSegun: React.FC = () => {
  return (
    <section id="meet" className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Meet Segun
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            {PORTFOLIO_DATA.links.videoSubtitle}
          </p>
        </div>

        {/* Prominent Video Player Container */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl shadow-blue-950/30 aspect-video group">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${PORTFOLIO_DATA.links.videoEmbedId}?rel=0`}
            title="Segun Ofe - Introductory Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Small CTA below the video */}
        <div className="mt-8 flex justify-center">
          <a
            href={PORTFOLIO_DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-600/25"
          >
            <Linkedin className="w-4 h-4" />
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-200" />
          </a>
        </div>
      </div>
    </section>
  );
};
