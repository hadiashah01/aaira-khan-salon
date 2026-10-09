"use client";

import React from "react";
import { business } from "@/app/data/business";
import { getPhoneUrl, getWhatsAppUrl } from "@/app/lib/contact";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";

export const MobileBookingBar = () => {
  const bookingUrl = getWhatsAppUrl(business.bookingMessage);

  return (
    <aside
      aria-label="Quick mobile booking and studio contact actions"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-border-light)]/40 bg-[var(--color-surface-light)]/95 px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] text-[var(--color-text-dark)] antialiased backdrop-blur-md md:hidden"
    >
      <style jsx global>{`
        .btn-editorial-active {
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease;
          will-change: transform;
        }
        .btn-editorial-active:active {
          transform: scale(0.98);
        }
      `}</style>

      {/* Grid of Two Ultra-Compact Action Plates */}
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-2.5 font-sans">
        
        {/* Primary Action: WhatsApp Booking */}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book Appointment via WhatsApp"
          className="btn-editorial-active flex min-h-[48px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] shadow-sm transition-all duration-300 ease-out hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] active:scale-95"
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current" />
          
          {/* Responsive Text: Short on <380px, Full on >=380px */}
          <span className="truncate xs:hidden">Book</span>
          <span className="hidden truncate xs:inline">Book Appointment</span>
        </a>

        {/* Secondary Action: Direct Phone Call */}
        <a
          href={getPhoneUrl()}
          aria-label="Call Salon Studio"
          className="btn-editorial-active flex min-h-[48px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-surface)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] transition-all duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] active:scale-95"
        >
          <svg
            className="h-4 w-4 shrink-0 text-[var(--color-primary)]"
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
          
          {/* Responsive Text */}
          <span className="truncate xs:hidden text-[var(--color-primary)]">Call</span>
          <span className="text-[var(--color-primary)] hidden truncate xs:inline">Call Studio</span>
        </a>

      </div>
    </aside>
  );
};