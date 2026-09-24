"use client";

import React from "react";

export const FinalCTA = () => {
  return (
    <section className="w-full px-5 md:px-12 py-14 md:py-16 bg-[#FFF0F2] border-y border-[#F5DCE2]">
      <div className="max-w-[900px] mx-auto text-center">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">
          READY FOR YOUR NEXT LOOK?
        </span>

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#25181C] mt-2">
          Let&apos;s plan your salon appointment
        </h2>

        <p className="text-sm md:text-base text-[#4E4639] leading-6 max-w-2xl mx-auto mt-3">
          Tell us the service you&apos;re interested in and your preferred
          date. The studio can confirm availability and package details
          directly.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">
          <a
            href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noreferrer"
            className="min-h-12 px-6 py-3.5 rounded-xl bg-[#974358] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-[#83384b] transition-colors shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">
              chat
            </span>
            WhatsApp Us
          </a>

          <a
            href="tel:02134536026"
            className="min-h-12 px-6 py-3.5 rounded-xl bg-white border border-stone-300 text-[#25181C] text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              call
            </span>
            Call Studio
          </a>
        </div>
      </div>
    </section>
  );
};