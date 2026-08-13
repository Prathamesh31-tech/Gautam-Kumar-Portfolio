import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Linkedin, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { id: 'home', label: 'ABOUT' },
    { id: 'work', label: 'MY WORK' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skill', label: 'SKILL' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-4' 
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      {/* Main Header Container */}
      <div className="w-full px-5 sm:px-8 lg:px-14 flex items-center justify-between">
        
        {/* Left: Clean Styled Name "GAUTAM KUMAR" */}
        <a 
          href="#home" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="group flex items-center gap-1.5 font-serif text-base sm:text-lg lg:text-xl tracking-[0.18em] uppercase font-black shrink-0"
          title="Gautam Kumar"
        >
          <span className="text-slate-100 group-hover:text-[#cfa856] transition-colors">
            GAUTAM
          </span>
          <span className="text-[#cfa856] group-hover:text-slate-100 transition-colors">
            KUMAR
          </span>
        </a>

        {/* Desktop Nav Links (Visible on LG screens 1024px+) */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-[11px] font-bold tracking-[0.18em] text-slate-300 uppercase mx-auto">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`relative py-1 transition-colors ${activeSection === link.id ? 'text-[#cfa856]' : 'hover:text-[#cfa856]'}`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#cfa856]" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions: Social Icons + Mobile Menu Toggle */}
        <div className="flex items-center gap-4 sm:gap-5 text-slate-300">
          
          {/* Social Icons */}
          <div className="flex items-center gap-3.5 sm:gap-5">
            <a 
              href="https://www.instagram.com/gautamlaheriofficial?utm_source=qr" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-300 hover:text-[#cfa856] transition-all transform hover:scale-110" 
              title="Instagram (@gautamlaheriofficial)"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a 
              href="https://www.facebook.com/share/1ChVuBZNXF/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-300 hover:text-[#cfa856] transition-all transform hover:scale-110" 
              title="Facebook"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a 
              href="https://www.linkedin.com/in/gautam-kumar-695b7a279?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-300 hover:text-[#cfa856] transition-all transform hover:scale-110" 
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a 
              href="https://wa.me/919892125720?text=Hi%20Gautam!%20I%20saw%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20for%20photography/videography%20projects." 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-300 hover:text-[#cfa856] transition-all transform hover:scale-110" 
              title="Chat on WhatsApp (+91 98921 25720)"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.16c-.25.7-1.44 1.34-2.01 1.41-.52.07-1.18.1-3.47-.84-2.94-1.21-4.83-4.22-4.98-4.42-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.29.6-.36.8-.36.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.59.84 2.05.91 2.2.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.32.38-.45.51-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.15 1.36 2.46 1.51.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.86.88 2.18 1.04.32.16.53.24.61.38.08.14.08.81-.17 1.51z"/>
              </svg>
            </a>

            <a 
              href="tel:+919892125720" 
              className="text-slate-300 hover:text-[#cfa856] transition-all transform hover:scale-110" 
              title="Call Gautam (+91 98921 25720)"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Hamburger Menu Toggle Button (Visible on screens below LG < 1024px) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-200 hover:text-[#cfa856] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#cfa856]" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile / Tablet Dropdown Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0c]/98 border-b border-white/10 backdrop-blur-2xl px-6 py-6 mt-3 space-y-4 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xs font-mono font-bold tracking-[0.25em] uppercase py-2.5 px-4 rounded-lg transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#cfa856]/15 text-[#cfa856] border border-[#cfa856]/40'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#cfa856]" />
                )}
              </a>
            ))}
          </nav>

          {/* Quick Direct Actions inside Mobile Menu */}
          <div className="pt-2 border-t border-white/10 flex items-center gap-3">
            <a
              href="tel:+919892125720"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 py-2.5 rounded-lg bg-[#cfa856] hover:bg-[#dfb864] text-black font-bold text-xs tracking-wider uppercase text-center font-mono"
            >
              CALL NOW
            </a>
            <a
              href="https://wa.me/919892125720?text=Hi%20Gautam!%20I%20saw%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20for%20photography/videography%20projects."
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs tracking-wider uppercase text-center font-mono"
            >
              WHATSAPP
            </a>
          </div>

        </div>
      )}

    </header>
  );
}
