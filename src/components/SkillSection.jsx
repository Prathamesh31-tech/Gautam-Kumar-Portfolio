import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SKILLS = [
  {
    id: 1,
    title: 'Videography & Cinematography',
    description: 'Expertise in operating professional cinema cameras, dynamic gimbal movements, and capturing high-definition cinematic visual stories.'
  },
  {
    id: 2,
    title: 'Lighting & Composition',
    description: 'Proficient in studio and outdoor natural lighting setups, 3-point illumination, contrast management, and aesthetic frame composition.'
  },
  {
    id: 3,
    title: 'Photo & Video Editing',
    subtitle: '(Adobe Photoshop, Lightroom, Premiere Pro, DaVinci Resolve)',
    description: 'Skilled in advanced video editing, color grading, motion cuts, and high-end RAW photo retouching using industry-standard software.'
  },
  {
    id: 4,
    title: 'Creative Direction & Storyboarding',
    description: 'Capability to translate creative concepts into structured storyboards, mood boards, shot execution plans, and visual direction.'
  },
  {
    id: 5,
    title: 'Client & Team Collaboration',
    description: 'Strong leadership in managing on-set production teams, directing subjects, and working closely with clients to fulfill visual requirements.'
  },
  {
    id: 6,
    title: 'Basic Knowledge of Computer',
    description: 'Sound operational knowledge of computer systems, media asset organization, data backups, and digital workflow software.'
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

        {/* CLEAN MINIMAL 6 SKILL CARDS GRID WITH SCROLL REVEAL */}
        <div className="max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 2xl:gap-8">
          {SKILLS.map((skill, index) => (
            <ScrollReveal key={skill.id} delay={index * 100}>
              <div className="rounded-2xl bg-[#0a0a0c] border border-white/10 hover:border-[#cfa856]/70 p-6 2xl:p-9 transition-all duration-300 shadow-xl hover:shadow-[#cfa856]/10 space-y-2.5 2xl:space-y-3 h-full">
                {/* Skill Title with Checkmark */}
                <div className="flex items-start gap-3 2xl:gap-4">
                  <CheckCircle2 className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#cfa856] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base sm:text-lg 2xl:text-2xl font-bold font-sans text-white leading-snug">
                      {skill.title}
                    </h3>
                    {skill.subtitle && (
                      <div className="text-xs 2xl:text-sm font-mono text-[#cfa856] pt-0.5">
                        {skill.subtitle}
                      </div>
                    )}
                  </div>
                </div>

                {/* Clean 2-Line Description */}
                <p className="text-xs sm:text-sm 2xl:text-lg text-slate-300 leading-relaxed font-normal pl-8 2xl:pl-10">
                  {skill.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

    </section>
  );
}
