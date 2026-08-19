"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Software from "./tracks/Software";
import AI from "./tracks/AI";
import DevOps from "./tracks/DevOps";
import Networks from "./tracks/Networks";

interface CareerTracksSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export default function CareerTracksSection({ onSelectProject }: CareerTracksSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstCard = container.querySelector(":scope > div");
      
      if (firstCard) {
        const cardWidth = firstCard.clientWidth;
        const gap = window.innerWidth >= 640 ? 32 : 16;
        const scrollAmount = cardWidth + gap;

        container.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center max-w-7xl mx-auto px-0 sm:px-6">
      
      {/* Left Navigation Arrow */}
      {showLeftArrow && (
        <button 
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute -left-4 md:-left-8 lg:-left-12 z-20 p-3 bg-surface-400 border-2 border-silver/50 text-silver rounded-full shadow-elevate-md transition-all duration-300 hover:scale-110 hover:border-ink-white hover:text-ink-white hover:bg-surface-300 focus:outline-none focus:ring-2 focus:ring-silver items-center justify-center"
          aria-label="Previous Track"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        // 👇 FIXED: Changed py-2 to py-12 and added -my-10 to expand the clipping boundary!
        className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth py-12 -my-10 gap-4 sm:gap-8 px-[5%] md:px-[15%] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Track Cards */}
        <div className="w-[93%] md:w-[80%] shrink-0 snap-center flex items-stretch">
          <Software onSelectProject={onSelectProject} />
        </div>
        <div className="w-[93%] md:w-[80%] shrink-0 snap-center flex items-stretch">
          <AI onSelectProject={onSelectProject} />
        </div>
        <div className="w-[93%] md:w-[80%] shrink-0 snap-center flex items-stretch">
          <DevOps onSelectProject={onSelectProject} />
        </div>
        <div className="w-[93%] md:w-[80%] shrink-0 snap-center flex items-stretch">
          <Networks onSelectProject={onSelectProject} />
        </div>
      </div>

      {/* Right Navigation Arrow */}
      {showRightArrow && (
        <button 
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute -right-4 md:-right-8 lg:-right-12 z-20 p-3 bg-surface-400 border-2 border-silver/50 text-silver rounded-full shadow-elevate-md transition-all duration-300 hover:scale-110 hover:border-ink-white hover:text-ink-white hover:bg-surface-300 focus:outline-none focus:ring-2 focus:ring-silver items-center justify-center"
          aria-label="Next Track"
        >
          <ChevronRight size={28} />
        </button>
      )}
      
    </div>
  );
}