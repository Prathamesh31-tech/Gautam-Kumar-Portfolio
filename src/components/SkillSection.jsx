import React from 'react';
import { Sparkles, Camera, Video, Clapperboard, Users, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SKILLS = [
  {
    id: 'photo-video',
    category: 'PHOTO / VIDEO',
    icon: Camera,
    items: ['Photoshop', 'Lightroom', 'Premiere Pro', 'DaVinci Resolve', 'After Effects', 'CapCut'],
    description: 'Advanced video editing, color grading, motion cuts, VFX, and high-end RAW photo retouching using industry-standard tools.'
  },
  {
    id: 'production',
    category: 'PRODUCTION',
    icon: Video,
    items: ['Videography', 'Cinematography', 'Lighting', 'Composition'],
    description: 'Expertise in operating professional cameras, studio & natural lighting setups, framing, and dynamic motion shot execution.'
  },
  {
    id: 'creative',
    category: 'CREATIVE',
    icon: Clapperboard,
    items: ['Creative Direction', 'Storyboarding'],
    description: 'Translating concepts into structured storyboards, mood boards, shot execution plans, and artistic visual direction.'
  },
  {
    id: 'collaboration',
    category: 'COLLABORATION',
    icon: Users,
    items: ['Client & Team Collaboration'],
    description: 'Leading production teams, managing client expectations, on-set communication, and seamless project execution.'
  }
];

export default function SkillSection() {
  return (
    <section id="skill" className="pt-12 sm:pt-16 pb-20 sm:pb-28 bg-[#000000] text-slate-100 relative overflow-hidden select-none border-t border-white/5">
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-[#cfa856]/5 rounded-full blur-[170px] pointer-events-none" />

      {/* FULL SCREEN WIDTH CONTAINER */}
      <div className="w-full px-5 sm:px-10 lg:px-14 xl:px-16 2xl:px-24 3xl:px-32 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-4xl 2xl:max-w-6xl mx-auto mb-12 sm:mb-16 2xl:mb-20 space-y-2.5 2xl:space-y-4">
          
          {/* Top Label */}
          <div className="text-[11px] 2xl:text-sm font-mono tracking-[0.3em] text-[#cfa856] uppercase font-bold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
            <span>MY SKILLS</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-sans font-black tracking-tight text-white uppercase leading-tight max-w-4xl mx-auto">
            SKILLS &nbsp;<span className="text-[#cfa856]">& EXPERTISE</span>
          </h2>

          {/* Underline Accent */}
          <div className="w-12 2xl:w-16 h-[2px] 2xl:h-[3px] bg-[#cfa856] mx-auto my-2 2xl:my-4" />

          {/* Subtitle Paragraph */}
          <p className="text-slate-300 text-xs sm:text-sm 2xl:text-lg font-normal leading-relaxed max-w-2xl 2xl:max-w-3xl mx-auto pt-0.5">
            Core technical and creative competencies developed over years of professional industry experience.
          </p>

        </ScrollReveal>

        {/* 4 SKILL CATEGORIES GRID WITH SCROLL REVEAL */}
        <div className="max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-8">
          {SKILLS.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <ScrollReveal key={skill.id} delay={index * 100}>
                <div className="rounded-2xl bg-[#0a0a0c] border border-white/10 hover:border-[#cfa856]/70 p-6 sm:p-8 2xl:p-10 transition-all duration-300 shadow-xl hover:shadow-[#cfa856]/15 space-y-4 2xl:space-y-5 h-full flex flex-col justify-between group">
                  
                  <div className="space-y-4">
                    {/* Category Title & Icon */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-xl bg-black/80 border border-[#cfa856]/40 flex items-center justify-center text-[#cfa856] group-hover:bg-[#cfa856] group-hover:text-black transition-all">
                          <IconComponent className="w-5 h-5 2xl:w-6 2xl:h-6" />
                        </div>
                        <h3 className="text-lg sm:text-xl 2xl:text-2xl font-black font-sans text-white tracking-wider uppercase group-hover:text-[#cfa856] transition-colors">
                          {skill.category}
                        </h3>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-[#cfa856]/60 group-hover:text-[#cfa856] transition-colors" />
                    </div>

                    {/* Skill Pill Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {skill.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="px-3.5 py-1.5 rounded-full bg-white/5 border border-[#cfa856]/30 text-[#cfa856] text-xs 2xl:text-sm font-mono font-semibold tracking-wide hover:bg-[#cfa856]/15 hover:border-[#cfa856] transition-all"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs sm:text-sm 2xl:text-base text-slate-300 leading-relaxed font-normal pt-2">
                    {skill.description}
                  </p>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

    </section>
  );
}

