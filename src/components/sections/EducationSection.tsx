import React from 'react';

interface EducationSectionProps {
  profile: {
    degree: string;
    gpa: number | string;
    academicTimeline: string;
    academicDescription: string;
    bootcamp: {
      name: string;
      hours: number;
      description: string;
      technologies: string;
    };
    highschool: {
      name: string;
      description: string;
    };
  };
  onContactClick?: () => void; // Optional prop if you prefer the standard React way
}

export default function EducationSection({ profile, onContactClick }: EducationSectionProps) {
  
  // Handler to simulate clicking the Nav Bar tab
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (onContactClick) {
      onContactClick();
    } else {
      // Find all buttons on the page
      const buttons = document.querySelectorAll('button');
      // Find the specific button in your nav bar that says "Contact Me"
      const navContactButton = Array.from(buttons).find(
        btn => btn.textContent?.trim().includes('Contact Me')
      );
      
      // If found, click it to switch the tab natively!
      if (navContactButton) {
        navContactButton.click();
      }
    }
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Academic Education */}
      <div className="p-6 bg-surface-300 border border-surface-200 rounded-xl shadow-elevate-sm">
        <span className="text-xs font-semibold text-silver uppercase tracking-wider">Academic Education</span>
        <div className="mt-2 mb-3">
          <h3 className="text-xl font-bold text-ink-white">{profile.degree}</h3>
          <p className="text-sm font-medium text-silver mt-1">{profile.academicTimeline}</p>
        </div>
        <p className="text-sm text-ink-muted leading-relaxed mb-3">{profile.academicDescription}</p>
        <p className="text-sm text-ink-muted">GPA: <span className="text-ink-white font-bold">{profile.gpa}</span></p>
      </div>

      {/* Professional Training */}
      <div className="p-6 bg-surface-300 border border-surface-200 rounded-xl shadow-elevate-sm">
        <span className="text-xs font-semibold text-silver uppercase tracking-wider">Professional Training</span>
        <div className="mt-2 mb-3">
          <h3 className="text-xl font-bold text-ink-white">{profile.bootcamp.name}</h3>
        </div>
        <p className="text-sm text-ink-muted leading-relaxed mb-3">{profile.bootcamp.description}</p>
        <p className="text-sm text-ink-muted leading-relaxed">
          <strong className="text-ink-white font-semibold">Core Technologies: </strong> 
          {profile.bootcamp.technologies}
        </p>
      </div>

      {/* Highschool Education */}
      <div className="p-6 bg-surface-300 border border-surface-200 rounded-xl shadow-elevate-sm">
        <span className="text-xs font-semibold text-silver uppercase tracking-wider">High School Education</span>
        <h3 className="text-xl font-bold text-ink-white mt-2 mb-2">{profile.highschool.name}</h3>
        <p 
          className="text-sm text-ink-muted leading-relaxed [&>strong]:text-ink-white [&>strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: profile.highschool.description }}
        />
      </div>

      {/* Gradesheet & Additional Info */}
      <div className="p-6 bg-surface-300 border border-surface-200 rounded-xl shadow-elevate-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-ink-white mb-1">Gradesheet & Additional Information</h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            Any additional information, including full course grades and transcripts, will be gladly provided upon request.
          </p>
        </div>
        <a 
          href="#contact" 
          onClick={handleContactClick}
          // Added self-center for mobile, w-full for a nice tap target, resetting to auto on desktop
          className="self-center sm:self-auto w-full sm:w-auto mt-2 sm:mt-0 px-8 py-2.5 bg-surface-400 border border-surface-200 hover:border-silver text-silver hover:text-ink-white font-bold text-sm rounded-xl transition-all whitespace-nowrap flex items-center justify-center shrink-0 cursor-pointer"
        >
          Contact Me
        </a>
      </div>
      
    </div>
  );
}