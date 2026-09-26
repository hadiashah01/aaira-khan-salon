"use client";
import React, { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/app/lib/contact";
export const SpecialOffers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("/api/offers");
        if (!response.ok) {
          throw new Error("Failed to fetch offers");
        }
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.error("Failed to load offers:", error);
      }
    };
    fetchOffers();
  }, []);
  return (
    <section
      id="promotions"
      className="w-full bg-[#FFF0F2]/70 px-5 md:px-12 py-14 md:py-16 border-y border-[#F5DCE2]"
    >
      <div className="max-w-345 mx-auto space-y-8">
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
          {offers.map((offer, index) => (
            <article
              key={offer.id}
              className="bg-white p-6 md:p-7 rounded-2xl border border-stone-200 shadow-sm flex flex-col"
            >
              <div className="space-y-4 flex-1">
                <span
                  className={`inline-flex text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${index === 0 ? "text-[#974358] bg-[#FFD9DF]" : "text-[#775A19] bg-[#FFDEA5]"}`}
                >
                  {offer.category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#25181C]">
                  {offer.title}
                </h3>
                <p className="text-sm text-[#382A2E] leading-6">
                  {offer.description}
                </p>
              </div>
              <div className="pt-5 mt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-xs font-semibold text-[#775A19]">
                  {offer.note}
                </span>
                <a
                  href={getWhatsAppUrl(offer.message)}
                  target="_blank"
                  rel="noreferrer"
                  className={`min-h-11 text-white text-xs font-bold px-5 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 ${index === 0 ? "bg-[#974358] hover:bg-[#83384b]" : "bg-[#25181C] hover:bg-stone-800"}`}
                >
                  {offer.cta}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
