"use client";

import { Code, BookOpen, Layers, Mail } from "lucide-react";

interface NavigationTabsProps {
  activeTab: "tracks" | "projects" | "education" | "contact";
  setActiveTab: (tab: "tracks" | "projects" | "education" | "contact") => void;
  projectCount: number;
}

export default function NavigationTabs({ activeTab, setActiveTab, projectCount }: NavigationTabsProps) {
  return (
    <div className="z-10 w-full bg-surface-300/80 backdrop-blur-md border-b border-surface-200 px-6 sm:px-12 lg:px-24 py-4 flex justify-center">
      <div className="flex gap-4 sm:gap-10 overflow-x-auto max-w-full">
        <button
          onClick={() => setActiveTab("tracks")}
          className={`flex items-center gap-2 pb-2 text-xs sm:text-base font-semibold transition-all border-b-2 shrink-0 ${
            activeTab === "tracks" 
              ? "border-silver text-ink-white" 
              : "border-transparent text-ink-muted hover:text-ink"
          }`}
        >
          <Layers size={18} /> Career
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          className={`flex items-center gap-2 pb-2 text-xs sm:text-base font-semibold transition-all border-b-2 shrink-0 ${
            activeTab === "projects" 
              ? "border-silver text-ink-white" 
              : "border-transparent text-ink-muted hover:text-ink"
          }`}
        >
          <Code size={18} /> Projects
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-2 pb-2 text-xs sm:text-base font-semibold transition-all border-b-2 shrink-0 ${
            activeTab === "education" 
              ? "border-silver text-ink-white" 
              : "border-transparent text-ink-muted hover:text-ink"
          }`}
        >
          <BookOpen size={18} /> Education
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={`flex items-center gap-2 pb-2 text-xs sm:text-base font-semibold transition-all border-b-2 shrink-0 ${
            activeTab === "contact" 
              ? "border-silver text-ink-white" 
              : "border-transparent text-ink-muted hover:text-ink"
          }`}
        >
          <Mail size={18} /> Contact Me
        </button>
      </div>
    </div>
  );
}