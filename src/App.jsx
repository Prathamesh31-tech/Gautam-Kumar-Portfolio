import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MyWorkSection from './components/MyWorkSection';
import ExperienceSection from './components/ExperienceSection';
import SkillSection from './components/SkillSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import ShowreelModal from './components/ShowreelModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-[#cfa856] selection:text-black">
      
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Section 1: Hero / About Section */}
        <HeroSection
          onOpenShowreel={() => setIsShowreelOpen(true)}
        />

        {/* Section 2: MY WORK Folders Section */}
        <MyWorkSection />

        {/* Section 3: EXPERIENCE Timeline Section */}
        <ExperienceSection />

        {/* Section 4: SKILL & TECHNICAL MASTERY Section */}
        <SkillSection />

        {/* Section 5: EDUCATION & QUALIFICATIONS Section */}
        <EducationSection />

        {/* Section 6: CONTACT & GET IN TOUCH Section */}
        <ContactSection />
      </main>

      {/* Floating Bottom-Right WhatsApp CTA Button */}
      <FloatingWhatsApp />

      {/* Showreel Video Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />

    </div>
  );
}
