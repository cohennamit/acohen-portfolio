import React, { useEffect } from 'react';

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  techStack: string[];
  metrics?: string;
  githubLink?: string; 
}

interface ProjectsSectionProps {
  projects: Project[];
  highlightedProjectId?: string | null;
}

export default function ProjectsSection({ projects, highlightedProjectId }: ProjectsSectionProps) {
  
  // Smooth scroll to the highlighted project
  useEffect(() => {
    if (highlightedProjectId) {
      setTimeout(() => {
        const element = document.getElementById(`project-${highlightedProjectId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [highlightedProjectId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((proj) => {
        const isHighlighted = proj.id === highlightedProjectId;
        
        return (
          <a 
            key={proj.id} 
            id={`project-${proj.id}`}
            href={proj.githubLink || "https://github.com/cohennamit"} 
            target="_blank"
            rel="noopener noreferrer"
            // Added "group" here so group-hover works on the title below
            className={`group p-6 rounded-xl flex flex-col justify-between transition-all duration-500 cursor-pointer hover:shadow-md hover:-translate-y-1 ${
              isHighlighted 
                ? "bg-surface-200 border-2 border-silver shadow-xl scale-[1.02]" 
                : "bg-surface-300 border border-surface-200 shadow-elevate-sm hover:border-silver/50"
            }`}
          >
            <div>
              <span className="text-xs font-semibold text-silver uppercase tracking-wider">{proj.category}</span>
              <h3 className="text-xl font-bold text-ink-white mt-1 mb-2 group-hover:text-silver transition-colors">{proj.title}</h3>
              <p className="text-sm text-ink-muted mb-4 leading-relaxed">{proj.description}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.techStack.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 bg-surface-400 rounded-md text-xs text-ink-bright font-mono border border-surface-200">
                    {tech}
                  </span>
                ))}
              </div>
              {proj.metrics && (
                <div className="text-xs text-silver font-medium bg-surface-400 p-2.5 rounded-lg border border-surface-200">
                  Metric: {proj.metrics}
                </div>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
}