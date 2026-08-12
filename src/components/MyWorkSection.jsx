import React, { useState, useEffect } from 'react';
import { Video, User, Box, Sparkles, Layers, ArrowRight, ArrowLeft, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FASHION_PRODUCT_VIDEO_URLS = [
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385751/AMSWAN_REEL_updated_transition_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385751/BLUF1390.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385732/crapsss_ads_5_449.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385730/Crapsss_Reel_15.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385731/Crapsss_Reel_17.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385718/Amswan_Transiton_video_4_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385692/Amswan_Transiton_video_5.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385675/AMSWAN_REEL_17.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355763/SHAGUN_10.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355627/EFFECTINE_2.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355601/RITESH_INTERNATIONAL_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355516/VELOCITECH_007.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355505/Sequence_18_3.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355467/Abhishek_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355437/Bathroom_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355415/MAFADENY_OUTDOOR_SHHOOT.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355405/VELOCITECH_005.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355321/Shiv_industries_New_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355155/JAVED_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355097/Dejure_fitness_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355081/EFFECTINE_06.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354983/JAVED_02.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354961/Pictaz_Studio_03.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354873/Pictaz_Studio_23-2.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354725/Kasuallyb_outdoor_tasveer_reel_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354593/Varija_Reel_2.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354517/Tankhi_reel.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354300/EFFECTINE_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353821/HOUSE_OF_BRAND_15.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353427/Pictaz_Studio_05_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353543/Pictaz_Studio_07.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353169/STYLUM_REEL_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353090/Oomph_reel_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353060/15th_april_reel_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786352919/mafideny_outdoor_2.mp4"
];

// WORK CATEGORIES MATCHING EXACT USER REQUIREMENTS
const WORK_CATEGORIES = [
  {
    id: 'fashion-product-video',
    title: 'FASHION PRODUCT VIDEO',
    icon: Sparkles,
    coverImage: 'https://res.cloudinary.com/yoesjpsv/video/upload/v1786385751/AMSWAN_REEL_updated_transition_1.jpg',
    coverVideo: 'https://res.cloudinary.com/yoesjpsv/video/upload/v1786385751/AMSWAN_REEL_updated_transition_1.mp4',
    description: 'High-fashion editorial films, commercial product videos, and trendsetting style stories.',
    gallery: FASHION_PRODUCT_VIDEO_URLS.map((url, index) => ({
      id: index + 1,
      type: 'video',
      url: url,
      cover: url.replace(/\.mp4$/i, '.jpg')
    }))
  },
  {
    id: 'product-shoot',
    title: 'PRODUCT SHOOT',
    icon: Box,
    coverImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
    description: 'Clean, detailed and impactful product visuals that sell the story.',
    gallery: [
      { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80' },
      { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80' },
      { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80' },
      { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'event-video',
    title: 'EVENT VIDEO',
    icon: Video,
    coverImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    description: 'High-energy live event coverage, festival highlights, and commercial video stories.',
    gallery: [
      { id: 1, type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-videographer-filming-a-model-in-a-studio-41477-large.mp4', cover: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80' },
      { id: 2, type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-camera-filming-a-sunset-landscape-40898-large.mp4', cover: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80' },
      { id: 3, type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-camera-recording-a-landscape-40897-large.mp4', cover: 'https://images.unsplash.com/photo-1512790182412-b19e6d614397?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'model-photoshoot',
    title: 'MODEL PHOTOSHOOT',
    icon: User,
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    description: 'Striking portraits and editorial shots that define style and personality.',
    gallery: [
      { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80' },
      { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80' },
      { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80' },
      { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80' },
      { id: 5, type: 'image', url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'random-work',
    title: 'RANDOM WORK',
    icon: Layers,
    coverImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80',
    description: 'A creative mix of spontaneous moments, travel captures, and experimental visual projects.',
    gallery: [
      { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80' },
      { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80' },
      { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80' },
      { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80' }
    ]
  }
];

export default function MyWorkSection() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  // Active media item derived from activeCategory and activeMediaIndex
  const activeMedia = activeCategory && activeMediaIndex !== null ? activeCategory.gallery[activeMediaIndex] : null;

  // Strict Lock background page scroll and remove scrollbars when modal/lightbox is active
  useEffect(() => {
    if (activeCategory || activeMediaIndex !== null) {
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    };
  }, [activeCategory, activeMediaIndex]);

  // Handle Browser / Mobile Hardware Back Button support
  useEffect(() => {
    if (activeCategory) {
      window.history.pushState({ modal: 'gallery', id: activeCategory.id }, '', `#gallery-${activeCategory.id}`);
      
      const handlePopState = () => {
        if (activeMediaIndex !== null) {
          setActiveMediaIndex(null);
        } else {
          setActiveCategory(null);
          // Restore exact scroll position
          setTimeout(() => {
            window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
          }, 10);
        }
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [activeCategory, activeMediaIndex, savedScrollPosition]);

  // Keyboard left/right and Escape support for Fullscreen Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeCategory || activeMediaIndex === null) return;
      if (e.key === 'ArrowLeft') {
        handlePrevMedia();
      } else if (e.key === 'ArrowRight') {
        handleNextMedia();
      } else if (e.key === 'Escape') {
        setActiveMediaIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCategory, activeMediaIndex]);

  // Open category modal and save current scroll position
  const handleOpenCategory = (category) => {
    setSavedScrollPosition(window.scrollY);
    setActiveCategory(category);
    setActiveMediaIndex(null);
  };

  // Close category modal and restore scroll position
  const handleCloseCategory = () => {
    setActiveCategory(null);
    setActiveMediaIndex(null);

    if (window.location.hash.startsWith('#gallery-')) {
      window.history.back();
    }

    setTimeout(() => {
      window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
    }, 10);
  };

  const handlePrevMedia = () => {
    if (!activeCategory) return;
    setActiveMediaIndex((prev) => (prev === 0 ? activeCategory.gallery.length - 1 : prev - 1));
  };

  const handleNextMedia = () => {
    if (!activeCategory) return;
    setActiveMediaIndex((prev) => (prev === activeCategory.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="work" className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#000000] text-slate-100 relative overflow-hidden select-none">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#cfa856]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* FULL SCREEN WIDTH CONTAINER */}
      <div className="w-full px-5 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          
          {/* Top Label */}
          <div className="text-[11px] font-mono tracking-[0.3em] text-[#cfa856] uppercase font-bold">
            MY WORK
          </div>

          {/* Headline: WHAT I SEE. WHAT I FEEL. */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight text-white uppercase leading-tight">
            WHAT I SEE.&nbsp;
            <span className="text-[#cfa856]">WHAT I FEEL.</span>
          </h2>

          {/* Underline Accent */}
          <div className="w-12 h-[2px] bg-[#cfa856] mx-auto my-2" />

          {/* Subtitle Paragraph */}
          <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto pt-0.5">
            Turning real moments into memories through my lens.
          </p>

        </ScrollReveal>

        {/* 5 Column Wide Grid across Full Screen Width with ScrollReveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-7">
          {WORK_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <ScrollReveal key={category.id} delay={index * 100}>
                <div
                  onClick={() => handleOpenCategory(category)}
                  className="group cursor-pointer rounded-2xl bg-[#0a0a0c] border border-white/10 hover:border-[#cfa856]/70 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[#cfa856]/15 h-full"
                >
                  <div>
                    {/* Top Image Box with Wider Aspect Ratio */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                      {category.coverVideo ? (
                        <video
                          src={category.coverVideo}
                          poster={category.coverImage}
                          className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                          muted
                          loop
                          playsInline
                          onMouseOver={(e) => e.target.play()}
                          onMouseOut={(e) => e.target.pause()}
                        />
                      ) : (
                        <img
                          src={category.coverImage}
                          alt={category.title}
                          className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                        />
                      )}
                      
                      {/* Dark Bottom Gradient Fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-90" />

                      {/* Circular Icon Badge overlapping image bottom-left */}
                      <div className="absolute bottom-3 left-4 z-10 w-11 h-11 rounded-full bg-black/80 border border-[#cfa856]/60 backdrop-blur-md flex items-center justify-center text-[#cfa856] group-hover:bg-[#cfa856] group-hover:text-black transition-all shadow-lg">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Body Content */}
                    <div className="p-5 pt-3 space-y-2">
                      <h3 className="font-sans font-black tracking-wider text-white group-hover:text-[#cfa856] transition-colors text-base sm:text-lg uppercase leading-snug">
                        {category.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* VIEW WORK Footer Link */}
                  <div className="p-5 pt-0">
                    <div className="text-xs font-bold font-mono text-[#cfa856] uppercase tracking-widest flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                      <span>VIEW WORK</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* FULL GALLERY MODAL - FULL WIDTH & CLEAN MEDIA */}
      {activeCategory && (
        <div className={`fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto animate-fadeIn ${activeMediaIndex !== null ? 'overflow-hidden' : ''}`}>
          
          {/* Header Bar: Only BACK Button with Arrow on the Left */}
          <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-md border-b border-white/10 px-6 sm:px-12 py-4 flex items-center justify-start">
            <button
              onClick={handleCloseCategory}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#cfa856] hover:text-black text-[#cfa856] text-xs font-mono font-bold tracking-widest uppercase transition-all border border-[#cfa856]/40 shadow-lg group"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>BACK</span>
            </button>
          </div>

          {/* Full Width Gallery Grid */}
          <div className="w-full px-4 sm:px-8 lg:px-12 py-8 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {activeCategory.gallery.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveMediaIndex(index)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#cfa856] cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 shadow-2xl"
                >
                  {item.type === 'video' ? (
                    <div className="relative w-full h-full">
                      <video
                        src={item.url}
                        poster={item.cover}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center pointer-events-none">
                        <div className="w-10 h-10 rounded-full bg-black/60 border border-[#cfa856]/60 backdrop-blur-md flex items-center justify-center text-[#cfa856] group-hover:scale-110 group-hover:bg-[#cfa856] group-hover:text-black transition-all shadow-lg">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.url}
                      alt="Portfolio Gallery Item"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="border-t border-white/10 bg-black/80 px-6 sm:px-12 py-4 text-center text-xs text-slate-400 font-mono">
            GAUTAM KUMAR PORTFOLIO &nbsp;•&nbsp; {activeCategory.title}
          </div>

        </div>
      )}

      {/* FULLSCREEN LIGHTBOX WITH PREVIOUS (<), NEXT (>), AND CLOSE (X) */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn select-none overflow-hidden">
          
          {/* Top Right Close Button (X) */}
          <button
            onClick={() => setActiveMediaIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-[#cfa856] hover:text-black text-white transition-all border border-white/10 shadow-2xl"
            title="Close Lightbox (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Previous Arrow Button (<) */}
          {activeCategory.gallery.length > 1 && (
            <button
              onClick={handlePrevMedia}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#cfa856] hover:text-black text-white transition-all border border-white/20 shadow-2xl backdrop-blur-md transform hover:scale-110 active:scale-95"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Right Next Arrow Button (>) */}
          {activeCategory.gallery.length > 1 && (
            <button
              onClick={handleNextMedia}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#cfa856] hover:text-black text-[#cfa856] transition-all border border-white/20 shadow-2xl backdrop-blur-md transform hover:scale-110 active:scale-95"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Center Media Display - HD Widescreen Video Size */}
          <div className="w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative">
            {activeMedia.type === 'video' ? (
              <video
                key={activeMedia.id}
                src={activeMedia.url}
                poster={activeMedia.cover}
                controls
                autoPlay
                className="w-full h-auto aspect-video max-h-[80vh] rounded-2xl shadow-2xl border border-white/10 object-contain bg-black"
              />
            ) : (
              <img
                key={activeMedia.id}
                src={activeMedia.url}
                alt="Portfolio Item"
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            )}

            {/* Counter indicator */}
            <div className="absolute -bottom-8 text-xs font-mono text-slate-400 tracking-widest uppercase">
              {activeMediaIndex + 1} / {activeCategory.gallery.length}
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
