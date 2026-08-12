import React, { useState, useEffect } from 'react';
import { Camera, Zap, Disc, Gauge, Battery, HardDrive } from 'lucide-react';

export default function ViewfinderOverlay({ telemetry, isHudActive, triggerFlash }) {
  const [timecode, setTimecode] = useState('00:04:18:12');

  // Timecode counter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      const frames = String(Math.floor((now.getMilliseconds() / 1000) * 24)).padStart(2, '0');
      setTimecode(`${hrs}:${mins}:${secs}:${frames}`);
    }, 41); // ~24 FPS update interval

    return () => clearInterval(interval);
  }, []);

  if (!isHudActive) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden select-none">
      
      {/* Rule of Thirds Grid */}
      <div className="absolute inset-0 viewfinder-grid opacity-30" />

      {/* Frame Corner Brackets */}
      <div className="absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 border-amber-500/60" />
      <div className="absolute top-12 right-12 w-8 h-8 border-t-2 border-r-2 border-amber-500/60" />
      <div className="absolute bottom-12 left-12 w-8 h-8 border-b-2 border-l-2 border-amber-500/60" />
      <div className="absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 border-amber-500/60" />

      {/* Central Camera Focus Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 pointer-events-none flex items-center justify-center">
        <div className="w-12 h-12 border border-amber-400/40 rounded-full flex items-center justify-center animate-reticle">
          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
        </div>
        <div className="absolute w-full h-[1px] bg-amber-400/20"></div>
        <div className="absolute h-full w-[1px] bg-amber-400/20"></div>
      </div>

      {/* Viewfinder Top Bar HUD */}
      <div className="absolute top-24 left-6 right-6 md:left-12 md:right-12 flex items-center justify-between font-mono text-[11px] tracking-wider text-amber-400/90">
        
        {/* Recording Status */}
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-amber-500/30">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-rec-dot shadow-[0_0_8px_#ef4444]"></span>
          <span className="font-bold text-red-400">STBY</span>
          <span className="text-slate-300">TC {timecode}</span>
        </div>

        {/* Resolution & Codec Telemetry */}
        <div className="hidden sm:flex items-center gap-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded border border-white/10 text-slate-300">
          <span className="text-amber-400 font-bold">{telemetry?.resolution || '4K UHD'}</span>
          <span className="text-slate-500">|</span>
          <span>{telemetry?.frameRate || '60 FPS'}</span>
          <span className="text-slate-500">|</span>
          <span className="text-xs text-amber-300">{telemetry?.colorProfile || 'LOG-C3 10-BIT'}</span>
        </div>

        {/* Battery & Storage */}
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-slate-300">
          <span className="flex items-center gap-1"><HardDrive className="w-3 h-3 text-amber-400" /> RAW 98%</span>
          <span className="flex items-center gap-1 text-emerald-400"><Battery className="w-3 h-3" /> 100%</span>
        </div>
      </div>

      {/* Viewfinder Bottom Bar HUD */}
      <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-12 flex items-center justify-between font-mono text-[11px] tracking-wider text-slate-200">
        <div className="flex items-center gap-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-amber-500/20 text-amber-300">
          <div><span className="text-slate-400">ISO</span> <span className="font-bold text-white">{telemetry?.iso || '400'}</span></div>
          <span className="text-slate-600">/</span>
          <div><span className="text-slate-400">IRIS</span> <span className="font-bold text-white">{telemetry?.aperture || 'f/1.8'}</span></div>
          <span className="text-slate-600">/</span>
          <div><span className="text-slate-400">SHUTTER</span> <span className="font-bold text-white">{telemetry?.shutter || '1/250s'}</span></div>
          <span className="text-slate-600">/</span>
          <div className="hidden sm:block"><span className="text-slate-400">LENS</span> <span className="font-bold text-amber-400">{telemetry?.lens || '35mm T1.5'}</span></div>
        </div>

        {/* Viewfinder Shutter Snap Button */}
        <button
          onClick={triggerFlash}
          className="pointer-events-auto flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-sans font-bold px-4 py-2 rounded-lg shadow-lg shadow-amber-500/30 transition-transform active:scale-95"
        >
          <Camera className="w-4 h-4" />
          <span className="hidden sm:inline">Snap Frame</span>
        </button>
      </div>

    </div>
  );
}
