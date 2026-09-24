"use client";

import React from "react";

export const SpecialOffers = () => {
  return (
    <section
      className="w-full bg-[#FFF0F2]/70 px-5 md:px-12 py-14 border-y border-[#F5DCE2]"
      id="promotions"
    >
      <div className="max-w-[1380px] mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest uppercase text-[#775A19]">
            PROMOTIONS OVERVIEW
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#25181C]">
            Current Promotions at Aaira Khan Salon
          </h2>
          <p className="text-xs sm:text-sm text-[#382A2E] max-w-3xl leading-relaxed">
            Aaira Khan Salon &amp; Studio regularly runs seasonal offers on
            bridal, party makeup, hair, and skin services. Confirm current
            package availability directly via phone or WhatsApp prior to
            booking.
          </p>
        </div>

        {/* Promotion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Bridal Deals */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#974358] bg-[#FFD9DF] px-3 py-1 rounded-full">
                Event Deals
              </span>
              <h3 className="font-serif text-xl font-bold text-[#25181C]">
                Bridal &amp; Party Makeup Packages
              </h3>
              <p className="text-xs sm:text-sm text-[#382A2E] leading-relaxed">
                Custom makeup packages for Nikkah, Barat, Walima, Mehndi, and
                guest party makeup. Inclusions vary based on event date and
                artist selection.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#775A19]">
                Rates on request
              </span>
              <a
                href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20check%20your%20current%20bridal%20and%20party%20makeup%20rates."
                target="_blank"
                rel="noreferrer"
                className="bg-[#974358] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#83384b] transition-colors"
              >
                Check Rates →
              </a>
            </div>
          </div>

          {/* Card 2: Treatments */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#775A19] bg-[#FFDEA5] px-3 py-1 rounded-full">
                Care Deals
              </span>
              <h3 className="font-serif text-xl font-bold text-[#25181C]">
                Hair &amp; Skin Treatment Deals
              </h3>
              <p className="text-xs sm:text-sm text-[#382A2E] leading-relaxed">
                Special offers on hair treatments (such as keratin and protein
                treatments) and Hydra Facials during specific time slots or
                seasons.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#775A19]">
                Rates on request
              </span>
              <a
                href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20ask%20about%20today's%20hair%20and%20skin%20offers."
                target="_blank"
                rel="noreferrer"
                className="bg-[#25181C] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-stone-800 transition-colors"
              >
                Ask About Offers →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
