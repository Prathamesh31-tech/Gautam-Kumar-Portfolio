import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle header background blur on scroll
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active Section Scroll Detection
      const sections = ['home', 'work', 'experience', 'skill', 'education', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-4 2xl:py-5' 
          : 'bg-transparent border-b border-transparent py-5 2xl:py-7'
      }`}
    >
      {/* Full width container */}
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24 3xl:px-32 flex items-center justify-between">
        
        {/* Left: Clean Styled Name "GAUTAM KUMAR" */}
        <a 
          href="#home" 
          className="group flex items-center gap-1.5 font-serif text-lg sm:text-xl 2xl:text-3xl tracking-[0.18em] uppercase font-black"
          title="Gautam Kumar"
        >
          <span className="text-slate-100 group-hover:text-[#cfa856] transition-colors">
            GAUTAM
          </span>
          <span className="text-[#cfa856] group-hover:text-slate-100 transition-colors">
            KUMAR
          </span>
        </a>

        {/* Center Nav Links - ABOUT added at starting (triggers Home section) */}
        <nav className="hidden md:flex items-center justify-center gap-7 lg:gap-8 2xl:gap-14 text-[11px] 2xl:text-sm 3xl:text-base font-bold tracking-[0.18em] text-slate-300 uppercase mx-auto">
          
          {/* ABOUT (Scrolls to Home/Hero section) */}
          <a 
            href="#home" 
            className={`relative py-1 transition-colors ${activeSection === 'home' ? 'text-[#cfa856]' : 'hover:text-[#cfa856]'}`}
          >
            ABOUT
            {activeSection === 'home' && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-[#cfa856]"></span>
            )}
          </a>

          {/* MY WORK */}
          <a 
            href="#work" 
            className={`relative py-1 transition-colors ${activeSection === 'work' ? 'text-[#cfa856]' : 'hover:text-[#cfa856]'}`}
          >
            MY WORK
            {activeSection === 'work' && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-[#cfa856]"></span>
            )}
          </a>

          {/* EXPERIENCE */}
          <a 
            href="#experience" 
            className={`relative py-1 transition-colors ${activeSection === 'experience' ? 'text-[#cfa856]' : 'hover:text-[#cfa856]'}`}
          >
            EXPERIENCE
            {activeSection === 'experience' && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-[#cfa856]"></span>
            )}
          </a>

          {/* SKILL */}
          <a 
            href="#skill" 
            className={`relative py-1 transition-colors ${activeSection === 'skill' ? 'text-[#cfa856]' : 'hover:text-[#cfa856]'}`}
          >
            SKILL
            {activeSection === 'skill' && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-[#cfa856]"></span>
            )}
          </a>

          {/* EDUCATION */}
          <a 
            href="#education" 
            className={`relative py-1 transition-colors ${activeSection === 'education' ? 'text-[#cfa856]' : 'hover:text-[#cfa856]'}`}
          >
            EDUCATION
            {activeSection === 'education' && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-[#cfa856]"></span>
            )}
          </a>

          {/* CONTACT */}
          <a 
            href="#contact" 
            className={`relative py-1 transition-colors ${activeSection === 'contact' ? 'text-[#cfa856]' : 'hover:text-[#cfa856]'}`}
          >
            CONTACT
            {activeSection === 'contact' && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-[#cfa856]"></span>
            )}
          </a>

        </nav>

        {/* Right Social Icons */}
        <div className="flex items-center gap-5 2xl:gap-7 text-slate-300">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-300 hover:text-[#cfa856] transition-all transform hover:scale-110" 
            title="Instagram"
          >
            <Instagram className="w-5 h-5 2xl:w-7 2xl:h-7" />
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-300 hover:text-[#cfa856] transition-all transform hover:scale-110" 
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5 2xl:w-7 2xl:h-7" />
          </a>

          <a 
            href="https://wa.me/919892125720?text=Hi%20Gautam!%20I%20saw%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20for%20photography/videography%20projects." 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-300 hover:text-[#cfa856] transition-all transform hover:scale-110" 
            title="Chat on WhatsApp (+91 98921 25720)"
          >
            <svg className="w-5 h-5 2xl:w-7 2xl:h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.16c-.25.7-1.44 1.34-2.01 1.41-.52.07-1.18.1-3.47-.84-2.94-1.21-4.83-4.22-4.98-4.42-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.29.6-.36.8-.36.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.59.84 2.05.91 2.2.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.32.38-.45.51-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.15 1.36 2.46 1.51.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.86.88 2.18 1.04.32.16.53.24.61.38.08.14.08.81-.17 1.51z"/>
            </svg>
          </a>

          <a 
            href="tel:+919892125720" 
            className="text-slate-300 hover:text-[#cfa856] transition-all transform hover:scale-110" 
            title="Call Gautam (+91 98921 25720)"
          >
            <Phone className="w-5 h-5 2xl:w-7 2xl:h-7" />
          </a>
        </div>

      </div>
    </header>
  );
}
