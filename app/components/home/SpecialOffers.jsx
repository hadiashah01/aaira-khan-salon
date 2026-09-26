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
      className="border-y border-[#F1E3E6] bg-[#FFF5F7] px-5 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6330]">
            CURRENT OFFERS
          </span>

          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight tracking-tight text-[#24171B] md:text-4xl">
            Current Promotions at Aaira Khan Salon
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#625356] md:text-base">
            Ask the studio about current package availability, seasonal offers,
            and treatment deals before booking.
          </p>
        </div>

        {/* Offers */}
        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2">
          {offers.map((offer, index) => (
            <article
              key={offer.id}
              className="flex flex-col rounded-2xl border border-[#E9DFE2] bg-white p-6 shadow-sm md:p-7"
            >
              <div className="flex-1 space-y-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${
                    index === 0
                      ? "bg-[#F9E5E9] text-[#974358]"
                      : "bg-[#F8F1E3] text-[#8A6330]"
                  }`}
                >
                  {offer.category}
                </span>

                <h3 className="font-serif text-xl font-bold text-[#24171B] md:text-2xl">
                  {offer.title}
                </h3>

                <p className="text-sm leading-6 text-[#625356]">
                  {offer.description}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-[#F0E7E9] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs font-semibold text-[#8A6330]">
                  {offer.note}
                </span>

                <a
                  href={getWhatsAppUrl(offer.message)}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-xs font-bold text-white transition-colors ${
                    index === 0
                      ? "bg-[#974358] hover:bg-[#83384b]"
                      : "bg-[#24171B] hover:bg-[#3A292E]"
                  }`}
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
