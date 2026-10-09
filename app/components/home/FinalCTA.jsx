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
      className="relative w-full overflow-hidden bg-[var(--color-surface-light)] py-16 text-[var(--color-text-dark)] antialiased md:py-24 font-sans"
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
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center lg:grid-cols-12">
          
          {/* Floating Luxury Card */}
          <div className="w-full bg-white p-8 text-[var(--color-text-dark)] shadow-2xl sm:p-12 md:p-14 lg:col-span-6 lg:p-16  rounded-xl backdrop-blur-sm">
            
            <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-primary-dark)]">
              Studio Appointments
            </span>

            <h2 className="mt-4 font-serif text-3xl font-light leading-[1.2] tracking-tight text-[var(--color-text-dark)] sm:text-4xl md:text-[2.6rem]">
              We’d love to welcome you <br />
              <span className="italic font-light text-[var(--color-text-muted)]">at our studio</span>
            </h2>

            <p className="mt-5 text-sm font-normal leading-relaxed text-[#4a383e] sm:text-base">
              Whether you need bridal makeup, hair styling, or skin care—reserve your preferred time directly with our artists.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center pt-2">
              
              {/* Primary WhatsApp Action */}
              <a
                href={getWhatsAppUrl(bookingMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex  min-h-[50px] items-center justify-center gap-2.5 bg-[var(--color-secondary)] px-7 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-md transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] hover:shadow-lg cursor-pointer rounded-lg"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current" />
                <span>Book via WhatsApp</span>
              </a>

              {/* Direct Phone Action */}
              <a
                href={`tel:${business.phone?.replace(/\D/g, "")}`}
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 border border-[var(--color-secondary)]/30 bg-transparent px-7 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-dark)] transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary-dark)] hover:bg-[var(--color-primary)]/10 cursor-pointer rounded-lg"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call Studio</span>
              </a>

            </div>

            <div className="mt-8 pt-6 ">
              <p className="text-[11px] font-mono font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
                Main Tariq Road &bull; Karachi
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};