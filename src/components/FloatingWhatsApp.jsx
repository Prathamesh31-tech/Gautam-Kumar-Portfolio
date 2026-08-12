import React from 'react';
import { Phone } from 'lucide-react';

const DEFAULT_WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Gautam! I saw your portfolio website and would like to connect for photography/videography projects."
);

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 2xl:bottom-10 2xl:right-10 z-40 flex flex-col gap-3 2xl:gap-4 items-center">
      
      {/* Phone Call Floating Icon */}
      <a
        href="tel:+919892125720"
        className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full bg-[#cfa856] hover:bg-[#dfb864] text-black shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 border border-white/20 shadow-[#cfa856]/20"
        title="Call Now (+91 98921 25720)"
      >
        <Phone className="w-5 h-5 2xl:w-7 2xl:h-7 fill-black" />
      </a>

      {/* WhatsApp Floating Icon with Pre-Filled Default Message */}
      <a
        href={`https://wa.me/919892125720?text=${DEFAULT_WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black shadow-xl shadow-[#25D366]/30 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 border border-white/20"
        title="Chat on WhatsApp (+91 98921 25720)"
      >
        <svg className="w-6 h-6 2xl:w-8 2xl:h-8 fill-black" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.16c-.25.7-1.44 1.34-2.01 1.41-.52.07-1.18.1-3.47-.84-2.94-1.21-4.83-4.22-4.98-4.42-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.29.6-.36.8-.36.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.59.84 2.05.91 2.2.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.32.38-.45.51-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.15 1.36 2.46 1.51.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.86.88 2.18 1.04.32.16.53.24.61.38.08.14.08.81-.17 1.51z"/>
        </svg>
      </a>

    </div>
  );
}
