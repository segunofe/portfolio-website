import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '@/src/data/portfolioData';
import { Github, ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Selected Work
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Featured cloud architecture, Kubernetes platforms, and automated IaC implementations.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span>All repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 5-6 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-black/50 group"
            >
              {/* Project Visual */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Inspect Overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs font-medium text-white flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    Inspect Architecture
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* One concise sentence describing what was built */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* 3-5 Technology tags with clean typographic separators */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-blue-400/90 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {idx < project.technologies.length - 1 && (
                          <span className="text-slate-600 font-sans">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Actions: GitHub & Demo */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-750 hover:text-white border border-slate-700/80 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-300" />
                    <span>View GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>

                  {project.demoUrl ? (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-2 text-xs font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-950/40 border border-blue-900/60 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3 text-blue-400" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-300 transition-colors"
                    >
                      Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
