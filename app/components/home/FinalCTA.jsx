"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/app/lib/contact";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";

export const FinalCTA = () => {
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    const loadBusiness = async () => {
      try {
        const response = await fetch("/api/business");
        if (response.ok) {
          const data = await response.json();
          setBusiness(data);
        }
      } catch (error) {
        console.error("Failed to load business data:", error);
      }
    };
    loadBusiness();
  }, []);

  if (!business) return null;

  const bookingMessage = "Hello Aaira Khan Salon, I would like to book an appointment.";

  return (
    <section 
      id="booking-cta" 
      className="relative w-full overflow-hidden bg-[var(--color-background)] py-16 text-[var(--color-text)] antialiased selection:bg-[var(--color-primary)] selection:text-[var(--color-secondary)] md:py-24 font-sans"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/final-cta-bg.jpg" 
          alt="Aaira Khan Salon Studio Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] filter brightness-[0.9] contrast-[1.05]"
        />
        
        {/* Soft Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/90 via-[var(--color-secondary)]/40 to-transparent lg:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-secondary)]/30 via-transparent to-[var(--color-secondary)]/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center lg:grid-cols-12">
          
          {/* Smooth, Natural Floating Card */}
          <div className="w-full bg-[var(--color-surface-light)] p-8 text-[var(--color-text-dark)] shadow-xl sm:p-12 md:p-14 lg:col-span-6 lg:p-16 border border-[var(--color-border-light)]/20">
            
            {/* Sub-tag */}
            <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-primary-dark)]">
              Studio Appointments
            </span>

            {/* Title */}
            <h2 className="mt-4 font-serif text-3xl font-normal leading-[1.2] tracking-tight text-[var(--color-text-dark)] sm:text-4xl md:text-[2.6rem]">
              We’d love to welcome you <br />
              <span className="italic font-light text-[var(--color-tertiary)]">at our studio</span>
            </h2>

            {/* Paragraph */}
            <p className="mt-5 text-sm font-normal leading-relaxed text-[var(--color-text-dark)]/75 sm:text-base">
              Whether you need bridal makeup, hair styling, or skin care—reserve your preferred time directly with our artists.
            </p>

            {/* Action Buttons with Clear Visual Hierarchy */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center pt-2">
              
              {/* Primary Action Button (Solid Dark + Subtle Gold Glow on Hover) */}
              <a
                href={getWhatsAppUrl(bookingMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 bg-[var(--color-secondary)] px-7 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)] shadow-md transition-all duration-300 hover:bg-[var(--color-primary-dark)] hover:shadow-lg cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current" />
                <span>Book via WhatsApp</span>
              </a>

              {/* Secondary Call Button (Ghost Outline - Never turns Solid Black) */}
              <a
                href={`tel:${business.phone?.replace(/\D/g, "")}`}
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 border border-[var(--color-secondary)]/40 bg-transparent px-7 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-secondary)] transition-all duration-300 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/5 cursor-pointer"
              >
                <span>Call Studio</span>
              </a>

            </div>

            {/* Location Tag */}
            <div className="mt-8 pt-6 border-t border-[var(--color-text-dark)]/10">
              <p className="text-[11px] font-mono font-semibold tracking-widest text-[var(--color-text-dark)]/60 uppercase">
                Main Tariq Road &bull; Karachi
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};