"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ContactSection() {
  // Track which button is currently highlighted (-1 means none during automatic loop)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Total number of buttons (5 items)
  const totalItems = 5;

  // Automatic loop with a slightly faster speed (1.8 seconds)
  useEffect(() => {
    if (isHovered) return; // Pause cycle if user is hovering

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === null || prev >= totalItems - 1 ? 0 : prev + 1));
    }, 1800);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="w-full flex justify-center py-2 sm:py-2">
      
      {/* Animated Wide Business Card Container */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.4, duration: 2 }}
        className="w-full max-w-2xl p-8 sm:p-10 bg-surface-300 border border-surface-200 rounded-2xl shadow-2xl hover:border-silver/50 transition-colors flex flex-col items-center relative"
      >
        
        {/* Subtle top edge highlight */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>
        
        {/* Header / Name */}
        <div className="text-center mb-8 mt-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-ink-white mb-2 flex items-center justify-center gap-3">
            Amit Cohen <span className="text-silver font-light">|</span> עמית כהן
          </h3>
          <p className="text-silver text-sm uppercase tracking-widest font-semibold">Software Developer</p>
        </div>

        {/* Contact Links Grid (2 Columns) */}
        <div 
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setActiveIndex(null);
          }}
        >
          
          {/* Column 1: Mail, Phone, and WhatsApp */}
          <div className="flex flex-col gap-3.5">
            
            {/* Email */}
            <ContactButton
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cohennamitt@gmail.com"
              icon={<Mail size={20} />}
              label="cohennamitt@gmail.com"
              isLit={activeIndex === 0}
              onHover={() => setActiveIndex(0)}
              activeColorClass="border-[#EA4335] bg-[#EA4335]/10 text-ink-white shadow-md scale-[1.02]"
              activeIconClass="bg-[#EA4335]/20 text-[#EA4335]"
              borderColor="hover:border-[#EA4335]"
              iconBgColor="group-hover:bg-[#EA4335]/20 group-hover:text-[#EA4335]"
              isExternal
            />

            {/* Phone (Lighter Green: #4ade80) */}
            <ContactButton
              href="tel:+972586366366"
              icon={<Phone size={20} />}
              label="+972 586-366-366"
              dir="ltr"
              isLit={activeIndex === 1}
              onHover={() => setActiveIndex(1)}
              activeColorClass="border-[#4ade80] bg-[#4ade80]/10 text-ink-white shadow-md scale-[1.02]"
              activeIconClass="bg-[#4ade80]/20 text-[#4ade80]"
              borderColor="hover:border-[#4ade80]"
              iconBgColor="group-hover:bg-[#4ade80]/20 group-hover:text-[#4ade80]"
            />

            {/* WhatsApp (Darker Green: #15803d) */}
            <ContactButton
              href="https://wa.me/972586366366"
              icon={<MessageCircle size={20} />}
              label="WhatsApp"
              isLit={activeIndex === 2}
              onHover={() => setActiveIndex(2)}
              activeColorClass="border-[#15803d] bg-[#15803d]/15 text-ink-white shadow-md scale-[1.02]"
              activeIconClass="bg-[#15803d]/30 text-[#22c55e]"
              borderColor="hover:border-[#15803d]"
              iconBgColor="group-hover:bg-[#15803d]/20 group-hover:text-[#22c55e]"
              isExternal
            />
          </div>

          {/* Column 2: LinkedIn and GitHub */}
          <div className="flex flex-col gap-3.5">
            
            {/* LinkedIn */}
            <ContactButton
              href="https://www.linkedin.com/in/cohennamit/"
              icon={<LinkedinIcon />}
              label="LinkedIn"
              isLit={activeIndex === 3}
              onHover={() => setActiveIndex(3)}
              activeColorClass="border-[#0A66C2] bg-[#0A66C2]/10 text-ink-white shadow-md scale-[1.02]"
              activeIconClass="bg-[#0A66C2]/20 text-[#0A66C2]"
              borderColor="hover:border-[#0A66C2]"
              iconBgColor="group-hover:bg-[#0A66C2]/20 group-hover:text-[#0A66C2]"
              isExternal
            />

            {/* GitHub */}
            <ContactButton
              href="https://github.com/cohennamit?tab=repositories"
              icon={<GithubIcon />}
              label="GitHub"
              isLit={activeIndex === 4}
              onHover={() => setActiveIndex(4)}
              activeColorClass="border-[#9333EA] bg-[#9333EA]/10 text-ink-white shadow-md scale-[1.02]"
              activeIconClass="bg-[#9333EA]/20 text-[#9333EA]"
              borderColor="hover:border-[#9333EA]"
              iconBgColor="group-hover:bg-[#9333EA]/20 group-hover:text-[#9333EA]"
              isExternal
            />
          </div>

        </div>
      </motion.div>
    </div>
  );
}

// --- Reusable Button Component ---
interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isLit: boolean;
  onHover: () => void;
  activeColorClass: string;
  activeIconClass: string;
  borderColor: string;
  iconBgColor: string;
  dir?: string;
  isExternal?: boolean;
}

function ContactButton({ href, icon, label, isLit, onHover, activeColorClass, activeIconClass, borderColor, iconBgColor, dir, isExternal }: ContactButtonProps) {
  return (
    <a 
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onMouseEnter={onHover}
      className={`flex items-center gap-4 w-full p-4 bg-surface-400 border rounded-xl text-silver transition-all duration-500 group shadow-sm hover:shadow-md hover:-translate-y-1 ${borderColor} ${
        isLit ? activeColorClass : "border-surface-200"
      }`}
    >
      <div className={`p-2.5 bg-surface-300 rounded-lg transition-colors shrink-0 ${iconBgColor} ${isLit ? activeIconClass : ""}`}>
        {icon}
      </div>
      <span className="font-semibold text-sm tracking-wide truncate" dir={dir}>
        {label}
      </span>
    </a>
  );
}

// --- Custom Raw SVGs ---

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      <path d="M9 20c-5 1.5-5-2.5-7-3"></path>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}