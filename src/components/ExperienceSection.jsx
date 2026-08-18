import React from 'react';
import { Award, Calendar, Building2, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Head of Media & Creative Production',
    company: 'Creaators Hub',
    period: 'Feb 2026 – Present',
    isCurrent: true,
    location: 'Mumbai, India',
    description: 'Leading the core creative team and directing end-to-end media production, photography, videography, and post-production for premium brand campaigns.',
    highlights: [
      'Lead end-to-end photography, videography, high-end video editing, and creative production workflows for multi-platform campaigns.',
      'Manage cross-functional creative teams from initial concept brainstorming and scriptwriting to final color grading and master delivery.',
      'Provide overall creative direction, establishing visual brand standards and ensuring top-tier cinematic quality across all deliverables.',
      'Oversee high-stakes studio and location shoots, optimizing production budgets, timelines, and technical equipment pipelines.'
    ]
  },
  {
    id: 2,
    role: 'Photographer & Videographer',
    company: 'Shutterbugs Rolling',
    period: 'Jan 2025 – Feb 2026',
    isCurrent: false,
    location: 'India',
    description: 'Specialized in capturing cinematic visual content, commercial brand films, and high-fashion editorial portraiture.',
    highlights: [
      'Captured high-impact professional photographs and multi-cam cinematic videos for commercial brands, lifestyle, and live events.',
      'Managed complex production equipment setups, including cinema cameras, 3-axis gimbals, prime optics, wireless audio, and studio lighting.',
      'Collaborated closely with directors and clients to translate creative briefs into visually compelling storyboards and shot lists.'
    ]
  },
  {
    id: 3,
    role: 'Photographer & Video Editor',
    company: 'Blue Frog Solutions | Marketing Agency',
    period: 'Jan 2024 – Jan 2025',
    isCurrent: false,
    location: 'India',
    description: 'Created dynamic multimedia content for digital marketing campaigns and managed post-production workflows for agency clients.',
    highlights: [
      'Conceptualized and produced original photography and video assets tailored for high-converting digital marketing and social media campaigns.',
      'Executed advanced post-production video editing, precise color correction, motion graphics, and audio mixing using industry-standard software.',
      'Analyzed campaign performance metrics to refine visual strategies, resulting in enhanced social media engagement and brand retention.'
    ]
  },
  {
    id: 4,
    role: 'Photographer',
    company: 'Tasveer Studios',
    period: 'Aug 2019 – Jan 2024',
    isCurrent: false,
    location: 'India',
    description: 'Delivered professional studio portraiture, outdoor travel photography, and commercial product shoots across diverse assignments.',
    highlights: [
      'Executed high-volume professional studio portraits, commercial product photography, and outdoor travel documentary shoots.',
      'Managed full lifecycle photography assignments, from lighting setup and subject direction to RAW image processing and advanced retouching.',
      'Built long-term relationships with clients and media agencies by consistently delivering crisp, evocative imagery on tight production deadlines.'
    ]
  },
  {
    id: 5,
    role: 'Casting Assistant & Videographer',
    company: 'ACE Studio Mumbai',
    period: 'Jan 2017 – Jan 2019',
    isCurrent: false,
    location: 'Mumbai, India',
    description: 'Supported film and commercial productions with casting management, B-roll camera operation, and set production assistance.',
    highlights: [
      'Assisted executive producers with commercial photography, audition tapes, behind-the-scenes footage, and video production logistics.',
      'Supported talent casting sessions, talent coordination, set preparation, and multi-angle camera operation during live studio shoots.',
      'Handled raw footage archival, camera gear maintenance, and studio workflow coordination in a fast-paced entertainment production setup.'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="pt-12 sm:pt-16 pb-20 sm:pb-28 bg-[#000000] text-slate-100 relative overflow-hidden select-none border-t border-white/5">
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[800px] h-[400px] bg-[#cfa856]/5 rounded-full blur-[170px] pointer-events-none" />

      {/* FULL SCREEN WIDTH CONTAINER */}
      <div className="w-full px-5 sm:px-10 lg:px-14 xl:px-16 2xl:px-24 3xl:px-32 relative z-10">
        
        {/* Section Header with Single Line Headline */}
        <ScrollReveal className="text-center max-w-4xl 2xl:max-w-6xl mx-auto mb-12 sm:mb-16 2xl:mb-20 space-y-2.5 2xl:space-y-4">
          
          {/* Top Label */}
          <div className="text-[11px] 2xl:text-sm font-mono tracking-[0.3em] text-[#cfa856] uppercase font-bold flex items-center justify-center gap-2">
            <Award className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
            <span>CAREER HISTORY</span>
          </div>

          {/* Headline */}
          <h2 className="text-[1.15rem] xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-sans font-black tracking-tight text-white uppercase leading-tight whitespace-nowrap max-w-none mx-auto">
            WORK EXPERIENCE &nbsp;<span className="text-[#cfa856]">& LEADERSHIP</span>
          </h2>

          {/* Underline Accent */}
          <div className="w-12 2xl:w-16 h-[2px] 2xl:h-[3px] bg-[#cfa856] mx-auto my-2 2xl:my-4" />

          {/* Subtitle Paragraph */}
          <p className="text-slate-300 text-xs sm:text-sm 2xl:text-lg font-normal leading-relaxed max-w-2xl 2xl:max-w-3xl mx-auto pt-0.5">
            Over 9+ years of hands-on experience directing visual storytelling, managing creative productions, and delivering cinematic content.
          </p>

        </ScrollReveal>

        {/* FULL WIDTH CARDS LIST WITH SCROLL REVEAL */}
        <div className="max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1700px] mx-auto space-y-6 sm:space-y-8 2xl:space-y-10">
          {EXPERIENCES.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 120}>
              <div className="w-full rounded-2xl bg-[#0a0a0c] border border-white/10 hover:border-[#cfa856]/70 p-6 sm:p-8 2xl:p-10 transition-all duration-300 shadow-2xl hover:shadow-[#cfa856]/10 space-y-4 2xl:space-y-6">
                
                {/* Card Header: Role, Period Badge, Company & Location */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 2xl:pb-6">
                  
                  <div className="space-y-1 2xl:space-y-2">
                    <div className="flex flex-wrap items-center gap-3 2xl:gap-4">
                      <h3 className="text-xl sm:text-2xl 2xl:text-4xl font-black font-sans text-white uppercase tracking-wide">
                        {exp.role}
                      </h3>

                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2.5 2xl:px-3.5 py-0.5 2xl:py-1 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-[10px] 2xl:text-xs font-mono font-bold tracking-widest uppercase">
                          <Sparkles className="w-3 h-3 2xl:w-3.5 2xl:h-3.5" />
                          <span>PRESENT</span>
                        </span>
                      )}
                    </div>

                    <div className="text-xs sm:text-sm 2xl:text-lg font-mono text-[#cfa856] font-semibold flex items-center gap-2 pt-0.5">
                      <Building2 className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#cfa856]" />
                      <span>{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 font-normal flex items-center gap-1">
                        <MapPin className="w-3 h-3 2xl:w-4 2xl:h-4 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="self-start sm:self-center inline-flex items-center gap-1.5 px-4 2xl:px-5 py-1.5 2xl:py-2 rounded-full bg-[#cfa856]/10 border border-[#cfa856]/40 text-[#cfa856] text-xs 2xl:text-sm font-mono font-bold uppercase tracking-wider shrink-0">
                    <Calendar className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                    <span>{exp.period}</span>
                  </div>

                </div>

                {/* Vertical Bullet Points List (One below another) */}
                <div className="space-y-3 2xl:space-y-4 pt-1">
                  {exp.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 2xl:gap-4 text-xs sm:text-sm 2xl:text-lg text-slate-200 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#cfa856] shrink-0 mt-0.5" />
                      <span className="font-normal text-slate-300">{point}</span>
                    </div>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

    </section>
  );
}
