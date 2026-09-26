"use client";

import React from "react";
import { business } from "@/app/data/business";
import { getPhoneUrl, getWhatsAppUrl } from "@/app/lib/contact";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";

export const MobileBookingBar = () => {
  const bookingUrl = getWhatsAppUrl(business.bookingMessage);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#F5DCE2] bg-white/95 p-3 shadow-[0_-4px_20px_rgba(37,24,28,0.08)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-[#974358] text-xs font-bold uppercase tracking-wide text-white"
        >
          <WhatsAppIcon className="h-[17px] w-[17px]" />
          Book Appointment
        </a>

        <a
          href={getPhoneUrl()}
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-[#25181C] text-xs font-bold uppercase tracking-wide text-white"
        >
          <span
            className="material-symbols-outlined text-[17px]"
            aria-hidden="true"
          >
            call
          </span>
          Call
        </a>
      </div>
    </div>
  );
};
