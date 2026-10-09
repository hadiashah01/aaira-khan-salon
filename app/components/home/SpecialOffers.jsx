"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/app/lib/contact";

export const SpecialOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("/api/offers");
        if (response.ok) {
          const data = await response.json();
          setOffers(data);
        }
      } catch (error) {
        console.error("Failed to load offers:", error);
      }
    };
    fetchOffers();
  }, []);

  return (
    <section
      id="promotions"
      className="relative w-full bg-[var(--color-surface-light)] py-16 text-[var(--color-text-dark)] md:py-24 font-sans"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="mb-12 text-center space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
            SPECIAL PROMOTIONS
          </span>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-[var(--color-text-dark)] sm:text-4xl md:text-5xl">
            Current Offers &amp; Packages
          </h2>
          <p className="mx-auto max-w-xl text-xs sm:text-sm text-[var(--color-text-muted)]">
            Ask the studio about current package availability and seasonal offers before booking.
          </p>
        </div>

        {/* Dynamic Image Cards Grid (Centered 2-Column Max Width) */}
        {offers.length === 0 ? (
          <div className="mt-12 flex min-h-[200px] items-center justify-center rounded-2xl bg-white p-8 text-center text-xs text-[var(--color-text-muted)]">
            Loading current salon offers...
          </div>
        ) : (
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <div
                key={offer.id || index}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Image Frame */}
                <div className="relative h-[240px] w-full overflow-hidden bg-[var(--color-surface-soft)]">
                  <Image
                    src={offer.image || "/images/contactUs.jpg"}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary-dark)]">
                      {offer.category || "PROMOTION"}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[var(--color-text-dark)]">
                      {offer.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#544B43] line-clamp-3">
                      {offer.description}
                    </p>
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-2 flex items-center justify-between gap-3 border-t border-[var(--color-border-light)]/40">
                    <span className="text-xs font-bold text-[var(--color-text-dark)] font-mono">
                      {offer.price || offer.note}
                    </span>

                    <a
                      href={getWhatsAppUrl(offer.message)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] text-white px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer"
                    >
                      <span>Book Now</span>
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};