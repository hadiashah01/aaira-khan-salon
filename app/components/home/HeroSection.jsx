"use client";

import React from "react";
import { business } from "@/app/data/business";
import { getWhatsAppUrl } from "@/app/lib/contact";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";
import { HeroVideo } from "./HeroVideo";

export const HeroSection = () => {
  const bookingUrl = getWhatsAppUrl(business.bookingMessage);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-surface-light)] py-16 font-sans text-[var(--color-text-dark)] md:py-24">
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

            <h1 className="font-serif text-3xl font-normal leading-tight text-[var(--color-text-dark)] sm:text-4xl md:text-5xl">
              Elevate Your Beauty at <br />
              <span className="italic text-[var(--color-primary-dark)] font-serif">
                Aaira Khan Salon
              </span>
            </h1>

            <p className="max-w-lg text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
              Experience signature bridal transformations, luxury hair treatments, and personalized skin care in a serene Tariq Road studio.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[var(--color-secondary)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text)] transition-all duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4 fill-current" />
                <span>Book via WhatsApp</span>
              </a>

              <a
                href="#services-catalog"
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] transition-all duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95"
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