"use client";

import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";

interface Course {
  name: string;
  grade?: number | string;
}

interface Project {
  id?: string;
  name: string;
  link?: string;
  linkName?: string;
}

interface TrackCardProps {
  title: string;
  description: string;
  courses: Course[];
  projects?: Project[];
  cvLink: string;
  onSelectProject?: (projectId: string) => void;
}

export default function TrackCard({ 
  title, 
  description, 
  courses, 
  projects = [], 
  cvLink,
  onSelectProject 
}: TrackCardProps) {
  const styles = {
    // 👇 FIXED: Changed transition-all to transition-colors here
    card: "w-full px-6 sm:px-8 pt-6 pb-8 bg-surface-300 border border-surface-200 rounded-2xl shadow-elevate-md hover:border-silver transition-colors flex flex-col h-[600px] shrink-0",
    title: "text-xl sm:text-2xl font-bold text-ink-white mb-2 transition-colors",
    description: "text-xs sm:text-sm text-ink-muted leading-relaxed",    
    sectionHeader: "text-[11px] sm:text-xs font-bold text-silver uppercase tracking-wider block mb-2",
    coursePill: "px-2.5 py-1 bg-surface-400 rounded-md text-xs text-ink-bright border border-surface-200 flex items-center gap-1.5 shrink-0",
    projectPill: "px-2.5 py-1 bg-surface-400/80 hover:bg-surface-400 rounded-md text-xs text-ink-white border border-surface-200 hover:border-silver transition-all flex items-center gap-1.5 shrink-0 group/proj cursor-pointer",
    cvButton: "mx-auto px-8 py-3 bg-surface-400 border border-surface-200 hover:border-silver text-silver hover:text-ink-white font-bold text-sm sm:text-base rounded-xl transition-all flex items-center justify-center gap-2 w-fit shrink-0"
  };

  return (
    <motion.div 
      className={styles.card}
      // 👇 FIXED: Snappier physics, deeper shadow, brighter silver glow, and slight scale up
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        boxShadow: "0 30px 60px rgba(0,0,0,0.9), 0 0 35px rgba(184, 188, 196, 0.35)" 
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Header & Description */}
      <div className="mb-2 shrink-0">
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      
      {/* Main Content Body with full height distribution */}
      <div className="flex-1 flex flex-col justify-between min-h-0">
        
        {/* Scrollable sections wrapper */}
        <div className="flex flex-col gap-3 min-h-0 mt-4">
          {/* Relevant Projects Section */}
          {projects.length > 0 && (
            <div className="shrink-0">
              <span className={styles.sectionHeader}>Relevant Projects</span>
              <div className="max-h-[110px] overflow-y-auto pr-2 flex flex-wrap gap-2 custom-scrollbar">
                {projects.map((project, index) => {
                  
                  // 1. If we have an ID and the handler, render as a button to switch tabs
                  if (project.id && onSelectProject) {
                    return (
                      <button 
                        key={index} 
                        onClick={(e) => {
                          e.preventDefault();
                          onSelectProject(project.id!);
                        }}
                        className={styles.projectPill}
                      >
                        <Code2 size={13} className="text-silver group-hover/proj:text-ink-white transition-colors" />
                        <span>{project.linkName || project.name}</span>
                      </button>
                    );
                  }
                  
                  // 2. Fallback to normal anchor link if no ID is provided but a link exists
                  if (project.link) {
                    return (
                      <a 
                        key={index} 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.projectPill}
                      >
                        <Code2 size={13} className="text-silver group-hover/proj:text-ink-white transition-colors" />
                        <span>{project.linkName || project.name}</span>
                      </a>
                    );
                  }

                  // 3. Fallback to just text if neither exists
                  return (
                    <span key={index} className={styles.coursePill}>
                      <Code2 size={13} className="text-silver" />
                      <span>{project.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Relevant Coursework Section */}
          <div className="shrink-0">
            <span className={styles.sectionHeader}>Relevant Coursework</span>
            <div className="max-h-[130px] overflow-y-auto pr-2 flex flex-wrap gap-2 custom-scrollbar">
              {courses.map((course, index) => (
                <span key={index} className={styles.coursePill}>
                  {course.name} 
                  {course.grade && <span className="text-silver font-mono font-bold">| {course.grade}</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Fixed padding */}
        <div className="py-2 flex items-center justify-center shrink-0">
            <a 
            href={cvLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.cvButton}
            >
                Relevant CV <ExternalLink size={16} />
            </a>
        </div>

      </div>
    </motion.div>
  );
}