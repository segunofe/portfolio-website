import React from 'react';
import { ProjectItem } from '@/src/data/portfolioData';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Visual with Close button */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              {project.shortDescription}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2 pb-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-blue-300 border border-slate-700/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Architecture Summary */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider font-mono">
              <Layers className="w-4 h-4" />
              <span>Architectural Blueprint</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.architectureSummary}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Architecture Demo Walkthrough</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
