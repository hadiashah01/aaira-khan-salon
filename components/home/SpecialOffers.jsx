'use client';

import React from 'react';

export const SpecialOffers = () => {
  return (
    <section className="w-full bg-[#FFF0F2]/60 px-5 md:px-12 py-12" id="promotions">
      <div className="max-w-[1380px] mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">
            PROMOTIONS OVERVIEW
          </span>
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#25181C]">
            Current Promotions at Aaira Khan Salon &amp; Studio
          </h2>
          <p className="text-xs text-[#4E4639] max-w-3xl leading-relaxed">
            Aaira Khan Salon &amp; Studio regularly runs seasonal offers on bridal, party makeup, hair, and skin services. Because packages and terms update frequently, please confirm current deals directly via phone or WhatsApp before booking.
          </p>
        </div>

        {/* Promotion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Card 1 – Event Packages */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#974358] bg-[#FFD9DF]/60 px-2.5 py-1 rounded">
                Event Packages
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#25181C]">
                Bridal &amp; Party Makeup Packages
              </h3>
              <p className="text-xs text-[#4E4639] leading-relaxed">
                Custom makeup packages for Nikkah, Barat, Walima, Mehndi, and guest party makeup. Inclusions and terms vary based on event date and artist requirements.
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#775A19]">Rates on request</span>
              <a
                href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20check%20your%20current%20bridal%20and%20party%20makeup%20rates."
                target="_blank"
                rel="noreferrer"
                className="bg-[#974358] text-white text-xs font-bold px-4 py-2 rounded hover:bg-[#83384b] transition-colors"
              >
                Check Current Bridal Rates →
              </a>
            </div>
          </div>

          {/* Card 2 – Treatment Offers */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#775A19] bg-[#FFDEA5]/50 px-2.5 py-1 rounded">
                Treatment Offers
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#25181C]">
                Hair &amp; Skin Service Offers
              </h3>
              <p className="text-xs text-[#4E4639] leading-relaxed">
                Special offers on hair treatments (such as keratin and protein treatments) and facials during specific time slots or seasons.
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#775A19]">Rates on request</span>
              <a
                href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20ask%20about%20today's%20hair%20and%20skin%20offers."
                target="_blank"
                rel="noreferrer"
                className="bg-[#25181C] text-white text-xs font-bold px-4 py-2 rounded hover:bg-stone-800 transition-colors"
              >
                Ask About Today’s Offers →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};