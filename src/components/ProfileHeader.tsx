"use client";

import { motion, Variants } from "framer-motion";

interface ProfileHeaderProps {
  profile: {
    fullName: string;
    degree: string;
    gpa: number | string;
    bootcamp: {
      name: string;
      hours: number;
    };
  };
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  const itemVars: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="z-10 w-full bg-surface-300 border-b border-surface-200 px-6 sm:px-12 lg:px-24 py-8 shadow-elevate-sm"
      variants={itemVars}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* MOBILE LAYOUT (Instagram profile vibe) */}
        <div className="flex md:hidden flex-col gap-4 w-full">
          <div className="flex items-center gap-5 w-full">
            {/* Profile Picture */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-silver to-surface-100 rounded-2xl blur opacity-40"></div>
              <img 
                src="/images/profile.jpeg" 
                alt={profile.fullName} 
                className="relative w-24 h-24 aspect-square object-cover rounded-2xl border-2 border-surface-200 shadow-elevate-md"
              />
            </div>

            {/* Name and Title (Bigger on mobile: text-3xl and text-base) */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-3xl font-bold uppercase tracking-wider font-sans text-ink-white leading-tight">
                {profile.fullName}
              </h1>
              <p className="text-silver text-base uppercase tracking-widest font-semibold mt-1">
                Software Developer
              </p>
            </div>
          </div>

          {/* Bottom Block: The Three Lines */}
          <div className="flex flex-col gap-1.5 w-full text-left mt-1">
            <p className="text-xs text-ink-muted">
              {profile.degree} - GPA: <span className="text-ink-bright font-semibold">{profile.gpa}</span>
            </p>
            <p className="text-xs text-ink-muted">
              Coding Academy Graduate - Full Stack Developer Bootcamp
            </p>
            <p className="text-xs text-silver font-medium">
              Developing robust web solutions powered by modern software engineering.
            </p>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:flex flex-row items-stretch gap-10 w-full">
          {/* Profile Picture */}
          <div className="relative group shrink-0 self-stretch flex items-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-silver to-surface-100 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>
            <img 
              src="/images/profile.jpeg" 
              alt={profile.fullName} 
              className="relative h-full max-h-36 aspect-square object-cover rounded-2xl border-2 border-surface-200 shadow-elevate-md"
            />
          </div>

          {/* Name, Title, and Three Lines */}
          <div className="flex flex-col justify-center items-start text-left w-full">
            <h1 className="text-4xl font-bold uppercase tracking-wide font-sans text-ink-white">
              {profile.fullName}
            </h1>
            <p className="text-silver text-sm uppercase tracking-widest font-semibold mb-3">
              Software Developer
            </p>
            
            <div className="flex flex-col gap-1.5 w-full">
              <p className="text-sm text-ink-muted">
                {profile.degree} - GPA: <span className="text-ink-bright font-semibold">{profile.gpa}</span>
              </p>
              <p className="text-sm text-ink-muted">
                Coding Academy Graduate - Full Stack Developer Bootcamp
              </p>
              <p className="text-sm text-silver font-medium">
                Real-World Full-Stack & Systems Engineering Projects
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}