"use client";

import React from "react";
import { business } from "@/app/data/business";
import { getWhatsAppUrl } from "@/app/lib/contact";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";
import { HeroVideo } from "./HeroVideo";

export const HeroSection = () => {
  const bookingUrl = getWhatsAppUrl(business.bookingMessage);

  return (
    <section className="relative w-full bg-[var(--color-surface-light)] py-12 md:py-20 text-[var(--color-text-dark)] overflow-hidden font-sans">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Editorial Content Block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clean Tag - Dots Removed */}
            <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
              <span>HAIR</span>
              <span>MAKEUP</span>
              <span>SKINCARE</span>
            </div>

            <h1 className="font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[var(--color-text-dark)] sm:text-5xl md:text-6xl">
              Elevate Your Beauty at <br />
              <span className="italic text-[var(--color-primary-dark)] font-serif">
                Aaira Khan Salon
              </span>
            </h1>

            <p className="max-w-lg text-xs sm:text-sm leading-relaxed text-[var(--color-text-muted)] md:text-base">
              Experience signature bridal transformations, luxury hair treatments, and personalized skin care in a serene Tariq Road studio.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4 fill-current" />
                <span>Book via WhatsApp</span>
              </a>

              <a
                href="#services-catalog"
                className="inline-flex items-center justify-center px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-dark)] hover:text-[var(--color-primary-dark)] transition-colors duration-300"
              >
                Explore Services &rarr;
              </a>
            </div>
          </div>

          {/* Hero Video Restored */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <HeroVideo />
          </div>

        </div>
      </div>
    </section>
  );
};