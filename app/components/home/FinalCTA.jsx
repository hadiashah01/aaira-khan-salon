"use client";

import React, { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/app/lib/contact";

export const FinalCTA = () => {
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    const loadBusiness = async () => {
      try {
        const response = await fetch("/api/business");

        if (!response.ok) {
          throw new Error("Failed to fetch business data");
        }

        const data = await response.json();
        setBusiness(data);
      } catch (error) {
        console.error("Failed to load business data:", error);
      }
    };

    loadBusiness();
  }, []);

  if (!business) {
    return null;
  }

  const bookingMessage =
    "Hello Aaira Khan Salon, I would like to book an appointment.";

  return (
    <section className="w-full px-5 py-14 md:px-12 md:py-16 bg-[#FFF0F2] border-y border-[#F5DCE2]">
      <div className="mx-auto max-w-[900px] text-center">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">
          PLAN YOUR VISIT
        </span>

        <h2 className="mt-2 font-serif text-3xl font-bold text-[#25181C] md:text-4xl">
          Ready to book your appointment?
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#4E4639] md:text-[17px]">
          Share the service you’re interested in and your preferred date.
          Contact the studio directly to arrange your appointment.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={getWhatsAppUrl(bookingMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#974358] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#83384b]"
          >
            <span className="material-symbols-outlined text-[18px]">
              chat
            </span>
            WhatsApp Us
          </a>

          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#25181C] transition-colors hover:bg-stone-50"
          >
            <span className="material-symbols-outlined text-[18px]">
              call
            </span>
            Call Studio
          </a>
        </div>
      </div>
    </section>
  );
};