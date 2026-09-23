'use client';

import React from 'react';

export const HeroSection = () => {
  return (
    <section className="w-full bg-[#FFF8F8] px-5 md:px-12 py-12 md:py-16 border-b border-[#F5DCE2]">
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="space-y-5">
          <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#775A19] bg-[#FFDEA5]/30 px-3 py-1 rounded-full">
            Main Tariq Road • Delhi Society • Karachi
          </span>

          <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#25181C] leading-[1.15]">
            Aaira Khan Salon &amp; Studio – Bridal Makeup &amp; Beauty Salon in Karachi
          </h1>

          <p className="text-sm md:text-base text-[#4E4639] leading-relaxed">
            Bridal makeup, party glam, hair care, facials, skin treatments, nails, and waxing at Main Tariq Road, Delhi Society. Book appointments easily by phone or WhatsApp.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noreferrer"
              className="bg-[#974358] text-white px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#83384b] transition-all shadow-sm"
            >
              WhatsApp Us (0333-3959805)
            </a>
            <a
              href="tel:02134536026"
              className="bg-white border border-stone-300 text-[#25181C] px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-stone-50 transition-all"
            >
              Call 021-34536026
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#4E4639]">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#974358] text-base">verified</span>
              <div>
                <strong>Bridal Listing</strong>
                <p className="text-[11px] text-stone-500">Listed in Karachi beauty directories</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#974358] text-base">photo_camera</span>
              <div>
                <strong>Active Community</strong>
                <p className="text-[11px] text-stone-500">Updates on @aaira_khan_salon</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#974358] text-base">reviews</span>
              <div>
                <strong>Public Feedback</strong>
                <p className="text-[11px] text-stone-500">Featured in client reviews &amp; vlogs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Work / Banner Container */}
        <div className="bg-[#FFF0F2] border border-[#F5DCE2] rounded-2xl p-8 flex flex-col justify-center items-center text-center space-y-4 min-h-[320px]">
          <span className="material-symbols-outlined text-4xl text-[#974358]">auto_awesome</span>
          <h3 className="font-serif text-xl font-semibold text-[#25181C]">
            Experience Professional Care
          </h3>
          <p className="text-xs text-[#4E4639] max-w-sm leading-relaxed">
            From signature bridal look execution to refreshing Hydra Facials, our specialists ensure a comforting salon visit.
          </p>
          <a
            href="https://www.instagram.com/aaira_khan_salon/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[#974358] hover:underline inline-flex items-center gap-1"
          >
            <span>View Recent Work on Instagram</span>
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>

      </div>
    </section>
  );
};