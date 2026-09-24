'use client';

import React from 'react';
import { InstagramEmbed } from './InstagramEmbed';

export const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFF0F2] via-[#FFF8F8] to-white px-5 md:px-12 py-10 md:py-16 border-b border-[#F5DCE2]">
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#775A19] bg-[#FFDEA5]/50 px-3.5 py-1.5 rounded-full border border-[#FFDEA5]">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span>Main Tariq Road • Delhi Society • Karachi</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#25181C] leading-[1.18]">
            Aaira Khan Salon &amp; Studio – Bridal Makeup &amp; Beauty Salon
          </h1>

          <p className="text-sm sm:text-base text-[#382A2E] leading-relaxed max-w-2xl font-normal">
            Specialized bridal makeup, party glam, advanced hair treatments, Hydra Facials, and body care at Main Tariq Road. Experience high-end beauty care tailored to your unique style.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noreferrer"
              className="bg-[#974358] text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#83384b] transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>WhatsApp Booking</span>
            </a>
            <a
              href="tel:02134536026"
              className="bg-white border border-stone-300 text-[#25181C] px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-stone-50 transition-all inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              <span>Call 021-34536026</span>
            </a>
          </div>
        </div>

        {/* Right Column: Instagram Embedded Video */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[420px] bg-white p-3 rounded-2xl border border-[#F5DCE2] shadow-xl">
            <div className="text-center pb-2 border-b border-stone-100 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#974358] bg-[#FFD9DF]/50 px-2.5 py-1 rounded-full">
                Featured Instagram Reel
              </span>
            </div>
            
            <InstagramEmbed reelUrl="https://www.instagram.com/reel/DYhKoRWANZO/" />
          </div>
        </div>

      </div>
    </section>
  );
};