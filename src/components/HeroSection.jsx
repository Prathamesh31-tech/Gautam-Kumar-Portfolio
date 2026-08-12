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
    <section id="home" className="relative h-screen h-[100vh] min-h-[100vh] max-h-[100vh] w-full flex items-center justify-center bg-black overflow-hidden select-none">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <img
          src={BACKGROUND_IMAGE_URL}
          alt="Gautam Kumar - Photographer & Videographer"
          className="h-full w-full object-cover object-[85%_top] md:object-contain lg:object-cover md:object-right filter brightness-[1.02] contrast-[1.02]"
        />

        {/* Mobile Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30 md:bg-gradient-to-r md:from-black md:via-black/40 md:to-transparent pointer-events-none opacity-90 md:opacity-60" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1700px] 3xl:max-w-[2100px] mx-auto px-5 sm:px-10 lg:px-12 2xl:px-16 w-full h-full flex flex-col justify-between py-6 sm:py-10 pt-20 2xl:pt-24">
        
        {/* Copy & Title Area */}
        <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl pt-2 sm:pt-4 space-y-3 sm:space-y-4 xl:space-y-5 2xl:space-y-6 text-left my-auto">
          
          {/* Stylish Top Label: HI, I'M ────── */}
          <div className="flex items-center gap-3 xl:gap-4">
            <span className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-sans font-light tracking-[0.25em] text-[#e2e8f0] uppercase">
              HI, I'M
            </span>
            <div className="w-16 sm:w-24 xl:w-32 h-[1.5px] bg-gradient-to-r from-[#cfa856] to-transparent" />
          </div>

          {/* Main Title: Left to Right Clean Typewriter Typing Effect */}
          <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5.5rem] 2xl:text-[6.5rem] 3xl:text-[7.5rem] tracking-[0.06em] text-[#cfa856] uppercase whitespace-nowrap leading-none pt-1">
            <span>{displayText}</span>
            <span className={`inline-block w-[3px] sm:w-[4px] xl:w-[6px] h-[0.8em] bg-[#cfa856] ml-1 align-baseline ${isTypingDone ? 'animate-pulse' : ''}`} />
          </h1>

          {/* Subtitle Ticker in WHITE color */}
          <div className="text-[10px] sm:text-xs xl:text-sm 2xl:text-base 3xl:text-lg font-mono tracking-[0.22em] text-slate-200 uppercase font-semibold pt-1">
            VIDEOGRAPHER &nbsp;•&nbsp; PHOTOGRAPHER &nbsp;•&nbsp; STORYTELLER
          </div>

          {/* Underline Bar Accent */}
          <div className="w-12 sm:w-14 xl:w-20 h-[2px] xl:h-[3px] bg-[#cfa856] my-3 sm:my-4 xl:my-5" />

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm xl:text-base 2xl:text-lg 3xl:text-xl font-normal max-w-xl xl:max-w-2xl 2xl:max-w-3xl leading-relaxed">
            Passionate Photographer, Videographer, and Video Editor with a strong eye for storytelling and creativity. Currently leading the creative team and managing projects from concept to final production. Skilled in professional equipment, lighting, and advanced editing, with a focus on creating impactful visual content.
          </p>

          {/* 2 CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 xl:gap-5 pt-2 sm:pt-4 xl:pt-5">
            
            {/* Primary Gold Filled Button */}
            <button
              onClick={onOpenShowreel}
              className="px-6 sm:px-7 xl:px-9 2xl:px-10 py-2.5 sm:py-3 xl:py-4 rounded bg-[#cfa856] hover:bg-[#dfb864] text-black font-bold text-[11px] sm:text-xs xl:text-sm 2xl:text-base tracking-widest uppercase flex items-center gap-2.5 shadow-lg shadow-[#cfa856]/20 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 xl:w-5 xl:h-5 rounded-full bg-black/20 flex items-center justify-center">
                <Play className="w-2 h-2 xl:w-2.5 xl:h-2.5 fill-black ml-0.5" />
              </div>
              <span>VIEW WORK</span>
            </button>

            {/* Secondary Gold Border Button */}
            <a
              href="#contact"
              className="px-6 sm:px-7 xl:px-9 2xl:px-10 py-2.5 sm:py-3 xl:py-4 rounded border border-[#cfa856]/70 hover:border-[#cfa856] text-[#cfa856] hover:text-white font-bold text-[11px] sm:text-xs xl:text-sm 2xl:text-base tracking-widest uppercase transition-all bg-black/50 backdrop-blur-sm"
            >
              LET'S CONNECT
            </a>

          </div>

          {/* Stats Row */}
          <div className="pt-4 sm:pt-6 xl:pt-8 flex items-center gap-6 sm:gap-10 xl:gap-14">
            
            {/* Stat 1 */}
            <div className="space-y-0.5 sm:space-y-1">
              <div className="font-serif text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-[#cfa856]">
                50+
              </div>
              <div className="text-[9px] sm:text-[10px] xl:text-xs 2xl:text-sm font-bold text-slate-400 tracking-[0.15em] uppercase">
                PROJECTS
              </div>
            </div>

            <div className="h-7 sm:h-8 xl:h-10 w-[1px] bg-white/15" />

            {/* Stat 2 */}
            <div className="space-y-0.5 sm:space-y-1">
              <div className="font-serif text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-[#cfa856]">
                30+
              </div>
              <div className="text-[9px] sm:text-[10px] xl:text-xs 2xl:text-sm font-bold text-slate-400 tracking-[0.15em] uppercase">
                CLIENTS
              </div>
            </div>

            <div className="h-7 sm:h-8 xl:h-10 w-[1px] bg-white/15" />

            {/* Stat 3 */}
            <div className="space-y-0.5 sm:space-y-1">
              <div className="font-serif text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-[#cfa856]">
                5+
              </div>
              <div className="text-[9px] sm:text-[10px] xl:text-xs 2xl:text-sm font-bold text-slate-400 tracking-[0.15em] uppercase">
                YEARS EXPERIENCE
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
