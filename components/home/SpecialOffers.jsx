"use client";

import React from "react";

const whatsappBase = "https://wa.me/923333959805?text=";

export const SpecialOffers = () => {
  const bridalMessage = encodeURIComponent(
    "Hello Aaira Khan Salon, I would like to check your current bridal and party makeup packages."
  );

  const treatmentMessage = encodeURIComponent(
    "Hello Aaira Khan Salon, I would like to ask about your current hair and skin treatment offers."
  );

  return (
    <section
      id="promotions"
      className="w-full bg-[#FFF0F2]/70 px-5 md:px-12 py-14 md:py-16 border-y border-[#F5DCE2]"
    >
      <div className="max-w-[1380px] mx-auto space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">
            CURRENT OFFERS
          </span>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#25181C] leading-tight">
            Current Promotions at Aaira Khan Salon
          </h2>

          <p className="text-sm text-[#382A2E] leading-6">
            Ask the studio about current package availability, seasonal offers,
            and treatment deals before booking.
          </p>
        </div>

        {/* Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Bridal */}
          <article className="bg-white p-6 md:p-7 rounded-2xl border border-stone-200 shadow-sm flex flex-col">
            <div className="space-y-4 flex-1">
              <span className="inline-flex text-[10px] font-bold uppercase tracking-wider text-[#974358] bg-[#FFD9DF] px-3 py-1.5 rounded-full">
                Bridal &amp; Event
              </span>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#25181C]">
                Bridal &amp; Party Makeup Packages
              </h3>

              <p className="text-sm text-[#382A2E] leading-6">
                Packages for Nikkah, Barat, Walima, Mehndi, and guest party
                makeup. Inclusions can vary according to the event and selected
                artist.
              </p>
            </div>

            <div className="pt-5 mt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="text-xs font-semibold text-[#775A19]">
                Package details available on request
              </span>

              <a
                href={`${whatsappBase}${bridalMessage}`}
                target="_blank"
                rel="noreferrer"
                className="min-h-11 bg-[#974358] text-white text-xs font-bold px-5 py-3 rounded-lg hover:bg-[#83384b] transition-colors inline-flex items-center justify-center gap-2"
              >
                WhatsApp for Details
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>

          {/* Treatments */}
          <article className="bg-white p-6 md:p-7 rounded-2xl border border-stone-200 shadow-sm flex flex-col">
            <div className="space-y-4 flex-1">
              <span className="inline-flex text-[10px] font-bold uppercase tracking-wider text-[#775A19] bg-[#FFDEA5] px-3 py-1.5 rounded-full">
                Hair &amp; Skin
              </span>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#25181C]">
                Hair &amp; Skin Treatment Deals
              </h3>

              <p className="text-sm text-[#382A2E] leading-6">
                Ask about current offers for treatments such as keratin,
                protein treatments, and Hydra Facials.
              </p>
            </div>

            <div className="pt-5 mt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="text-xs font-semibold text-[#775A19]">
                Current availability may vary
              </span>

              <a
                href={`${whatsappBase}${treatmentMessage}`}
                target="_blank"
                rel="noreferrer"
                className="min-h-11 bg-[#25181C] text-white text-xs font-bold px-5 py-3 rounded-lg hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                Ask About Offers
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};