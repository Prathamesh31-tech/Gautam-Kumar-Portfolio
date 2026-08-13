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
      <div className="relative z-10 max-w-7xl lg:max-w-[1500px] xl:max-w-[1700px] 2xl:max-w-[2000px] 3xl:max-w-[2400px] 4xl:max-w-[2800px] mx-auto px-5 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 4xl:px-28 w-full h-full flex flex-col justify-between py-6 sm:py-10 pt-20 lg:pt-24 xl:pt-28 2xl:pt-36 3xl:pt-44 4xl:pt-52">
        
        {/* Copy & Title Area - Dynamically scalable spacing and vertical proportions for all display sizes */}
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl pt-2 sm:pt-4 space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-8 3xl:space-y-11 4xl:space-y-14 text-left my-auto hero-dynamic-space">
          
          {/* Stylish Top Label: HI, I'M ────── */}
          <div className="flex items-center gap-3 lg:gap-4 2xl:gap-6 3xl:gap-8">
            <span className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-sans font-light tracking-[0.25em] text-[#e2e8f0] uppercase">
              HI, I'M
            </span>
            <div className="w-16 sm:w-24 lg:w-32 2xl:w-44 3xl:w-60 4xl:w-72 h-[1.5px] 2xl:h-[2px] 3xl:h-[3px] bg-gradient-to-r from-[#cfa856] to-transparent" />
          </div>

          {/* Main Title: Dynamic responsive scaling for laptops & 27-inch / 4K monitors */}
          <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] 2xl:text-[5.75rem] 3xl:text-[6.75rem] 4xl:text-[8rem] tracking-[0.06em] text-[#cfa856] uppercase whitespace-nowrap leading-none pt-1">
            <span>{displayText}</span>
            <span className={`inline-block w-[3px] sm:w-[4px] lg:w-[5px] xl:w-[6px] 2xl:w-[8px] 3xl:w-[10px] 4xl:w-[12px] h-[0.8em] bg-[#cfa856] ml-1 align-baseline ${isTypingDone ? 'animate-pulse' : ''}`} />
          </h1>

          {/* Subtitle Ticker */}
          <div className="text-[10px] sm:text-xs lg:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-mono tracking-[0.22em] text-slate-200 uppercase font-semibold pt-1">
            VIDEOGRAPHER &nbsp;•&nbsp; PHOTOGRAPHER &nbsp;•&nbsp; STORYTELLER
          </div>

          {/* Underline Bar Accent */}
          <div className="w-12 sm:w-14 lg:w-16 xl:w-20 2xl:w-28 3xl:w-36 4xl:w-44 h-[2px] lg:h-[3px] 2xl:h-[4px] 3xl:h-[5px] bg-[#cfa856] my-3 sm:my-4 lg:my-5 2xl:my-7 3xl:my-10 4xl:my-12" />

          {/* Description Paragraph */}
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-normal max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl leading-relaxed 2xl:leading-relaxed 3xl:leading-normal">
            Passionate Photographer, Videographer, and Video Editor with a strong eye for storytelling and creativity. Currently leading the creative team and managing projects from concept to final production. Skilled in professional equipment, lighting, and advanced editing, with a focus on creating impactful visual content.
          </p>

          {/* 2 CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 lg:gap-4 xl:gap-5 2xl:gap-7 3xl:gap-9 4xl:gap-11 pt-2 sm:pt-4 lg:pt-5 xl:pt-6 2xl:pt-9 3xl:pt-12 4xl:pt-16">
            
            {/* Primary Gold Filled Button */}
            <button
              onClick={onOpenShowreel}
              className="px-6 sm:px-7 lg:px-8 xl:px-10 2xl:px-12 3xl:px-16 4xl:px-20 py-2.5 sm:py-3 lg:py-3.5 xl:py-4 2xl:py-5 3xl:py-6 4xl:py-8 rounded bg-[#cfa856] hover:bg-[#dfb864] text-black font-bold text-[11px] sm:text-xs lg:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl tracking-widest uppercase flex items-center gap-2 lg:gap-2.5 2xl:gap-4 3xl:gap-5 shadow-lg shadow-[#cfa856]/20 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 2xl:w-7 2xl:h-7 3xl:w-9 3xl:h-9 4xl:w-11 4xl:h-11 rounded-full bg-black/20 flex items-center justify-center">
                <Play className="w-2 h-2 lg:w-2.5 lg:h-2.5 2xl:w-3.5 2xl:h-3.5 3xl:w-4.5 3xl:h-4.5 fill-black ml-0.5" />
              </div>
              <span>VIEW WORK</span>
            </button>

            {/* Secondary Gold Border Button */}
            <a
              href="#contact"
              className="px-6 sm:px-7 lg:px-8 xl:px-10 2xl:px-12 3xl:px-16 4xl:px-20 py-2.5 sm:py-3 lg:py-3.5 xl:py-4 2xl:py-5 3xl:py-6 4xl:py-8 rounded border border-[#cfa856]/70 hover:border-[#cfa856] text-[#cfa856] hover:text-white font-bold text-[11px] sm:text-xs lg:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl tracking-widest uppercase transition-all bg-black/50 backdrop-blur-sm"
            >
              LET'S CONNECT
            </a>

          </div>

          {/* Stats Row */}
          <div className="pt-4 sm:pt-6 lg:pt-7 xl:pt-9 2xl:pt-14 3xl:pt-20 4xl:pt-24 flex items-center gap-6 sm:gap-10 lg:gap-12 xl:gap-14 2xl:gap-20 3xl:gap-28 4xl:gap-36">
            
            {/* Stat 1 */}
            <div className="space-y-0.5 sm:space-y-1 2xl:space-y-2">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-extrabold text-[#cfa856]">
                50+
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-xs xl:text-sm 2xl:text-base 3xl:text-xl 4xl:text-2xl font-bold text-slate-400 tracking-[0.15em] uppercase">
                PROJECTS
              </div>
            </div>

            <div className="h-7 sm:h-8 lg:h-9 xl:h-11 2xl:h-16 3xl:h-20 4xl:h-24 w-[1px] 2xl:w-[2px] bg-white/15" />

            {/* Stat 2 */}
            <div className="space-y-0.5 sm:space-y-1 2xl:space-y-2">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-extrabold text-[#cfa856]">
                30+
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-xs xl:text-sm 2xl:text-base 3xl:text-xl 4xl:text-2xl font-bold text-slate-400 tracking-[0.15em] uppercase">
                CLIENTS
              </div>
            </div>

            <div className="h-7 sm:h-8 lg:h-9 xl:h-11 2xl:h-16 3xl:h-20 4xl:h-24 w-[1px] 2xl:w-[2px] bg-white/15" />

            {/* Stat 3 */}
            <div className="space-y-0.5 sm:space-y-1 2xl:space-y-2">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-extrabold text-[#cfa856]">
                5+
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-xs xl:text-sm 2xl:text-base 3xl:text-xl 4xl:text-2xl font-bold text-slate-400 tracking-[0.15em] uppercase">
                YEARS EXPERIENCE
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
