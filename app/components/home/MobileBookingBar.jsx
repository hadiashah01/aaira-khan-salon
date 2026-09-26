"use client";

import React from "react";

export const MobileBookingBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-[#F5DCE2] p-3 shadow-[0_-4px_20px_rgba(37,24,28,0.08)]">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noreferrer"
          className="min-h-11 rounded-xl bg-[#974358] text-white text-xs font-bold uppercase tracking-wide inline-flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[17px]">
            calendar_month
          </span>
          Book Appointment
        </a>

        <a
          href="tel:02134536026"
          className="min-h-11 rounded-xl bg-[#25181C] text-white text-xs font-bold uppercase tracking-wide inline-flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[17px]">call</span>
          Call
        </a>
      </div>
    </div>
  );
};
