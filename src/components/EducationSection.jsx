import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const EDUCATION_ITEMS = [
  {
    id: 1,
    degree: 'B.A. (Bachelor of Arts)',
    institution: 'Jharkhand University',
    description: 'Passed Bachelor of Arts degree from Jharkhand University.'
  },
  {
    id: 2,
    degree: '12th Senior Secondary',
    institution: 'C.B.S.E. Board',
    description: 'Passed 12th Senior Secondary Examination from C.B.S.E. Board.'
  },
  {
    id: 3,
    degree: '10th Secondary School',
    institution: 'C.B.S.E. Board',
    description: 'Passed 10th Secondary School Examination from C.B.S.E. Board.'
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="pt-12 sm:pt-16 pb-20 sm:pb-28 bg-[#000000] text-slate-100 relative overflow-hidden select-none border-t border-white/5">
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/3 left-1/3 -translate-y-1/2 w-[700px] h-[350px] bg-[#cfa856]/5 rounded-full blur-[170px] pointer-events-none" />

      {/* FULL SCREEN WIDTH CONTAINER */}
      <div className="w-full px-5 sm:px-10 lg:px-14 xl:px-16 2xl:px-24 3xl:px-32 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-4xl 2xl:max-w-6xl mx-auto mb-12 sm:mb-16 2xl:mb-20 space-y-2.5 2xl:space-y-4">
          
          {/* Top Label */}
          <div className="text-[11px] 2xl:text-sm font-mono tracking-[0.3em] text-[#cfa856] uppercase font-bold flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4 2xl:w-5 2xl:h-5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-sans font-black tracking-tight text-white uppercase leading-tight max-w-4xl mx-auto">
            EDUCATION &nbsp;<span className="text-[#cfa856]">& QUALIFICATIONS</span>
          </h2>

          {/* Underline Accent */}
          <div className="w-12 2xl:w-16 h-[2px] 2xl:h-[3px] bg-[#cfa856] mx-auto my-2 2xl:my-4" />

        </ScrollReveal>

        {/* CLEAN LINE-BY-LINE LIST WITH SCROLL REVEAL */}
        <div className="max-w-3xl 2xl:max-w-5xl 3xl:max-w-[1400px] mx-auto space-y-6 sm:space-y-8 2xl:space-y-10">
          {EDUCATION_ITEMS.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 120}>
              <div className="flex items-start gap-4 sm:gap-6 2xl:gap-8 border-b border-white/10 pb-6 2xl:pb-8 last:border-b-0">
                {/* Gold Graduation Icon */}
                <div className="w-11 h-11 2xl:w-16 2xl:h-16 rounded-full bg-[#cfa856]/10 border border-[#cfa856]/40 flex items-center justify-center text-[#cfa856] shrink-0 mt-0.5 shadow-lg">
                  <GraduationCap className="w-5 h-5 2xl:w-8 2xl:h-8" />
                </div>

                {/* Content Details */}
                <div className="space-y-1.5 2xl:space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 2xl:gap-4">
                    <h3 className="text-lg sm:text-xl 2xl:text-3xl font-bold font-sans text-white uppercase tracking-wide">
                      {item.degree}
                    </h3>
                    <span className="text-xs sm:text-sm font-mono text-[#cfa856] font-semibold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-[#cfa856]" />
                      {item.institution}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm 2xl:text-lg text-slate-300 leading-relaxed font-normal pt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

    </section>
  );
}
