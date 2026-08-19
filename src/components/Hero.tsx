"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import config from "../data/config.json";
import ProfileHeader from "./ProfileHeader";
import NavigationTabs from "./NavigationTabs";
import CareerTracksSection from "./sections/CareerTracksSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";

export default function Hero() {
  const { profile, projects } = config; 
  const [activeTab, setActiveTab] = useState<"tracks" | "projects" | "education" | "contact">("tracks");
  
  // New state to track which project was clicked from a career track
  const [highlightedProjectId, setHighlightedProjectId] = useState<string | null>(null);

  // Function to handle switching tabs and highlighting the project
  const handleSelectProject = (projectId: string) => {
    setHighlightedProjectId(projectId);
    setActiveTab("projects");
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center bg-surface-400">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 z-0 w-full h-[500px] bg-gradient-to-b from-surface-300/40 to-transparent pointer-events-none"></div>

      {/* Top Header */}
      <ProfileHeader profile={profile} />

      {/* Navigation Tabs */}
      <NavigationTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        projectCount={projects.length} 
      />

      {/* Dynamic Content Body Area */}
      <div className="z-10 w-full max-w-7xl px-6 sm:px-12 lg:px-24 py-12 flex flex-col items-center bg-surface-400">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-5xl"
        >
          {/* Pass the selection handler into CareerTracksSection */}
          {activeTab === "tracks" && <CareerTracksSection onSelectProject={handleSelectProject} />}
          
          {/* Pass the highlighted ID into ProjectsSection */}
          {activeTab === "projects" && <ProjectsSection projects={projects} highlightedProjectId={highlightedProjectId} />}
          
          {activeTab === "education" && <EducationSection profile={profile} />}
          
          {activeTab === "contact" && <ContactSection />}
        </motion.div>
      </div>

    </section>
  );
}