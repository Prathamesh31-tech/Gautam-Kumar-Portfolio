import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const BACKGROUND_IMAGE_URL = "https://res.cloudinary.com/yoesjpsv/image/upload/v1786519778/Gemini_Generated_Image_97itaf97itaf97it.png";

export default function HeroSection({ onOpenShowreel }) {
  const fullText = "GAUTAM KUMAR.";
  const [displayText, setDisplayText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Left to right authentic Typewriter typing animation
  useEffect(() => {
    let index = 0;
    setDisplayText('');
    setIsTypingDone(false);

    const timer = setInterval(() => {
      index++;
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
      } else {
        setIsTypingDone(true);
        clearInterval(timer);
      }
    }, 110);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen h-[100vh] min-h-[100vh] w-full flex items-center justify-center bg-black overflow-hidden select-none">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <img
          src={BACKGROUND_IMAGE_URL}
          alt="Gautam Kumar - Photographer & Videographer"
          className="h-full w-full object-cover object-[85%_top] md:object-contain lg:object-cover md:object-right filter brightness-[1.02] contrast-[1.02]"
        />

        {/* Mobile & Desktop Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30 md:bg-gradient-to-r md:from-black md:via-black/50 md:to-transparent pointer-events-none opacity-90 md:opacity-75" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl lg:max-w-[1500px] xl:max-w-[1700px] 2xl:max-w-[2000px] 3xl:max-w-[2400px] 4xl:max-w-[2800px] mx-auto px-5 sm:px-10 lg:px-12 xl:px-14 2xl:px-20 3xl:px-24 4xl:px-28 w-full h-full flex flex-col justify-between py-4 sm:py-6 pt-16 sm:pt-20 lg:pt-20 xl:pt-20 2xl:pt-32 3xl:pt-40 4xl:pt-48 pb-5 lg:pb-8 2xl:pb-12">
        
        {/* Copy & Title Area - Dynamically scalable spacing and vertical proportions for all display sizes */}
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl pt-1 sm:pt-2 space-y-2 sm:space-y-3 lg:space-y-3.5 2xl:space-y-7 3xl:space-y-10 4xl:space-y-12 text-left my-auto hero-dynamic-space">
          
          {/* Stylish Top Label: HI, I'M ────── */}
          <div className="flex items-center gap-3 lg:gap-4 2xl:gap-6 3xl:gap-8">
            <span className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-sans font-light tracking-[0.25em] text-[#e2e8f0] uppercase">
              HI, I'M
            </span>
            <div className="w-16 sm:w-24 lg:w-32 2xl:w-44 3xl:w-60 4xl:w-72 h-[1.5px] 2xl:h-[2px] 3xl:h-[3px] bg-gradient-to-r from-[#cfa856] to-transparent" />
          </div>

          {/* Main Title: Dynamic responsive scaling for laptops & 27-inch / 4K monitors */}
          <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.25rem] 2xl:text-[5.5rem] 3xl:text-[6.75rem] 4xl:text-[8rem] tracking-[0.06em] text-[#cfa856] uppercase whitespace-nowrap leading-none pt-0.5">
            <span>{displayText}</span>
            <span className={`inline-block w-[3px] sm:w-[4px] lg:w-[5px] xl:w-[6px] 2xl:w-[8px] 3xl:w-[10px] 4xl:w-[12px] h-[0.8em] bg-[#cfa856] ml-1 align-baseline ${isTypingDone ? 'animate-pulse' : ''}`} />
          </h1>

          {/* Subtitle Ticker */}
          <div className="text-[10px] sm:text-xs lg:text-xs xl:text-sm 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-mono tracking-[0.22em] text-slate-200 uppercase font-semibold pt-0.5">
            VIDEOGRAPHER &nbsp;•&nbsp; PHOTOGRAPHER &nbsp;•&nbsp; STORYTELLER
          </div>

          {/* Underline Bar Accent */}
          <div className="w-12 sm:w-14 lg:w-16 xl:w-20 2xl:w-28 3xl:w-36 4xl:w-44 h-[2px] lg:h-[3px] 2xl:h-[4px] 3xl:h-[5px] bg-[#cfa856] my-2 sm:my-2.5 lg:my-3 2xl:my-6 3xl:my-8 4xl:my-10" />

          {/* Description Paragraph */}
          <p className="text-slate-300 text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-normal max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl leading-relaxed 2xl:leading-relaxed 3xl:leading-normal">
            Passionate Photographer, Videographer, and Video Editor with a strong eye for storytelling and creativity. Currently leading the creative team and managing projects from concept to final production. Skilled in professional equipment, lighting, and advanced editing, with a focus on creating impactful visual content.
          </p>

          {/* 2 CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 lg:gap-4 xl:gap-5 2xl:gap-7 3xl:gap-9 4xl:gap-11 pt-1.5 sm:pt-2 lg:pt-3 2xl:pt-7 3xl:pt-10 4xl:pt-14 hero-buttons-container">
            
            {/* Primary Gold Filled Button */}
            <button
              onClick={onOpenShowreel}
              className="px-5 sm:px-6 lg:px-7 xl:px-8 2xl:px-12 3xl:px-16 4xl:px-20 py-2 sm:py-2.5 lg:py-3 xl:py-3.5 2xl:py-5 3xl:py-6 4xl:py-8 rounded bg-[#cfa856] hover:bg-[#dfb864] text-black font-bold text-[11px] sm:text-xs lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-2xl 4xl:text-3xl tracking-widest uppercase flex items-center gap-2 lg:gap-2.5 2xl:gap-4 3xl:gap-5 shadow-lg shadow-[#cfa856]/20 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 2xl:w-7 2xl:h-7 3xl:w-9 3xl:h-9 4xl:w-11 4xl:h-11 rounded-full bg-black/20 flex items-center justify-center">
                <Play className="w-2 h-2 lg:w-2.5 lg:h-2.5 2xl:w-3.5 2xl:h-3.5 3xl:w-4.5 3xl:h-4.5 fill-black ml-0.5" />
              </div>
              <span>VIEW WORK</span>
            </button>

            {/* Secondary Gold Border Button */}
            <a
              href="#contact"
              className="px-5 sm:px-6 lg:px-7 xl:px-8 2xl:px-12 3xl:px-16 4xl:px-20 py-2 sm:py-2.5 lg:py-3 xl:py-3.5 2xl:py-5 3xl:py-6 4xl:py-8 rounded border border-[#cfa856]/70 hover:border-[#cfa856] text-[#cfa856] hover:text-white font-bold text-[11px] sm:text-xs lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-2xl 4xl:text-3xl tracking-widest uppercase transition-all bg-black/50 backdrop-blur-sm"
            >
              LET'S CONNECT
            </a>

          </div>

          {/* Stats Row */}
          <div className="pt-3 sm:pt-4 lg:pt-4.5 2xl:pt-10 3xl:pt-16 4xl:pt-20 flex items-center gap-5 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-18 3xl:gap-24 4xl:gap-32 hero-stats-container">
            
            {/* Stat 1 */}
            <div className="space-y-0.5 sm:space-y-1 2xl:space-y-2">
              <div className="font-serif text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-extrabold text-[#cfa856]">
                50+
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-base 3xl:text-xl 4xl:text-2xl font-bold text-slate-400 tracking-[0.15em] uppercase">
                PROJECTS
              </div>
            </div>

            <div className="h-6 sm:h-7 lg:h-8 xl:h-9 2xl:h-16 3xl:h-20 4xl:h-24 w-[1px] 2xl:w-[2px] bg-white/15" />

            {/* Stat 2 */}
            <div className="space-y-0.5 sm:space-y-1 2xl:space-y-2">
              <div className="font-serif text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-extrabold text-[#cfa856]">
                30+
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-base 3xl:text-xl 4xl:text-2xl font-bold text-slate-400 tracking-[0.15em] uppercase">
                CLIENTS
              </div>
            </div>

            <div className="h-6 sm:h-7 lg:h-8 xl:h-9 2xl:h-16 3xl:h-20 4xl:h-24 w-[1px] 2xl:w-[2px] bg-white/15" />

            {/* Stat 3 */}
            <div className="space-y-0.5 sm:space-y-1 2xl:space-y-2">
              <div className="font-serif text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-extrabold text-[#cfa856]">
                5+
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-base 3xl:text-xl 4xl:text-2xl font-bold text-slate-400 tracking-[0.15em] uppercase">
                YEARS EXPERIENCE
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
