import React, { useEffect } from 'react';
import { X, Film } from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl transition-all duration-300">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0c0d14] rounded-2xl border border-[#cfa856]/40 overflow-hidden shadow-2xl shadow-[#cfa856]/10">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#cfa856]/20 border border-[#cfa856]/40 flex items-center justify-center">
              <Film className="w-4 h-4 text-[#cfa856]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-white text-base leading-tight">
                GAUTAM KUMAR — 2026 CINEMATIC SHOWREEL
              </h3>
              <p className="text-xs font-mono text-[#cfa856]">4K DCI Commercial & Story Reel (02:45)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500/20 hover:text-red-400 flex items-center justify-center text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
            title="Showreel Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-[#08080c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-4">
            <span className="text-[#cfa856]">● SHOT ON RED V-RAPTOR 8K</span>
            <span className="hidden sm:inline">|</span>
            <span>COLOR GRADED IN DAVINCI RESOLVE</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
              AUDIO: STEREO LOGIC PRO X
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
