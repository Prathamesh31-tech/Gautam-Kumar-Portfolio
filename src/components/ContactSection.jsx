import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Videography / Commercial Shoot',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format pre-filled WhatsApp message text
    const text = `Hi Gautam! New Inquiry from Portfolio Website:\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n📞 *Phone:* ${formData.phone || 'N/A'}\n🎬 *Project Type:* ${formData.projectType}\n💬 *Message:* ${formData.message}`;

    // Target WhatsApp Number: +91 98921 25720
    const whatsappUrl = `https://wa.me/919892125720?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp directly
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', projectType: 'Videography / Commercial Shoot', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="pt-12 sm:pt-16 pb-16 bg-[#000000] text-slate-100 relative overflow-hidden select-none border-t border-white/5">
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#cfa856]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* FULL SCREEN WIDTH CONTAINER */}
      <div className="w-full px-5 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-2.5">
          
          {/* Top Label */}
          <div className="text-[11px] font-mono tracking-[0.3em] text-[#cfa856] uppercase font-bold flex items-center justify-center gap-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          {/* Headline on Single Line */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-black tracking-tight text-white uppercase leading-none whitespace-nowrap">
            LET'S CREATE &nbsp;<span className="text-[#cfa856]">SOMETHING EXTRAORDINARY</span>
          </h2>

          {/* Underline Accent */}
          <div className="w-12 h-[2px] bg-[#cfa856] mx-auto my-2" />

          {/* Subtitle Paragraph */}
          <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto pt-0.5">
            Have a brand shoot, commercial project, or creative video inquiry? Reach out directly or drop a message below.
          </p>

        </ScrollReveal>

        {/* CONTACT CONTENT GRID WITH SCROLL REVEAL */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info List */}
          <ScrollReveal delay={100} className="lg:col-span-5 space-y-7 pt-2">
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#cfa856]/10 border border-[#cfa856]/40 flex items-center justify-center text-[#cfa856] shrink-0 mt-0.5 shadow-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-[#cfa856] uppercase tracking-widest font-bold">
                  LOCATION
                </div>
                <h3 className="text-base sm:text-lg font-bold font-sans text-white">
                  Yashwant Gaurav, Nala Sopara
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-mono">
                  Sky City F Block, Mumbai, Maharashtra
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#cfa856]/10 border border-[#cfa856]/40 flex items-center justify-center text-[#cfa856] shrink-0 mt-0.5 shadow-lg">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-[#cfa856] uppercase tracking-widest font-bold">
                  PHONE NUMBERS
                </div>
                <div className="space-y-1 font-mono text-sm sm:text-base font-bold">
                  <div>
                    <a href="tel:+919899965050" className="text-white hover:text-[#cfa856] transition-colors">
                      +91 98999 65050
                    </a>
                  </div>
                  <div>
                    <a href="tel:+919892125720" className="text-white hover:text-[#cfa856] transition-colors">
                      +91 98921 25720
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#cfa856]/10 border border-[#cfa856]/40 flex items-center justify-center text-[#cfa856] shrink-0 mt-0.5 shadow-lg">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-[#cfa856] uppercase tracking-widest font-bold">
                  EMAIL ADDRESSES
                </div>
                <div className="space-y-1 font-mono text-xs sm:text-sm font-semibold">
                  <div>
                    <a href="mailto:gautamgamer720@gmail.com" className="text-white hover:text-[#cfa856] transition-colors">
                      gautamgamer720@gmail.com
                    </a>
                  </div>
                  <div>
                    <a href="mailto:gkr9892@gmail.com" className="text-white hover:text-[#cfa856] transition-colors">
                      gkr9892@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column: Clean Open Message Form */}
          <ScrollReveal delay={200} className="lg:col-span-7">
            <div className="space-y-5">
              
              <div>
                <h3 className="text-xl font-bold font-sans text-white uppercase tracking-wide">
                  SEND A DIRECT MESSAGE
                </h3>
                <p className="text-xs text-slate-400 font-normal pt-1">
                  Fill out the details below and Gautam will get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white font-sans">MESSAGE SENT SUCCESSFULLY!</h4>
                  <p className="text-xs text-emerald-300 font-mono">
                    Thank you for reaching out. Gautam will review your request and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                        YOUR FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#cfa856] text-xs sm:text-sm font-sans transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#cfa856] text-xs sm:text-sm font-sans transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#cfa856] text-xs sm:text-sm font-sans transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                        PROJECT TYPE
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white focus:outline-none focus:border-[#cfa856] text-xs sm:text-sm font-sans transition-colors"
                      >
                        <option value="Videography / Commercial Shoot">Videography / Commercial Shoot</option>
                        <option value="Model Photoshoot">Model Photoshoot</option>
                        <option value="Product Shoot">Product Shoot</option>
                        <option value="Travel / Documentary">Travel Photography</option>
                        <option value="Wedding Stories">Wedding Stories</option>
                        <option value="Creative Direction & Editing">Creative Direction & Editing</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                      PROJECT DETAILS / MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project scope, location, and preferred dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#cfa856] text-xs sm:text-sm font-sans transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#cfa856] hover:bg-[#dfb864] text-black font-bold font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#cfa856]/20 transition-all transform hover:-translate-y-0.5 active:scale-95"
                  >
                    <Send className="w-4 h-4 fill-black" />
                    <span>SEND MESSAGE</span>
                  </button>

                </form>
              )}

            </div>
          </ScrollReveal>

        </div>

        {/* FOOTER BAR */}
        <div className="mt-16 sm:mt-20 border-t border-white/10 pt-8 text-center text-xs font-mono text-slate-400">
          <div>
            © 2026 <span className="text-[#cfa856] font-bold">GAUTAM KUMAR</span>. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>

    </section>
  );
}
