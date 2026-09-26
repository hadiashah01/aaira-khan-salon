"use client";

import React, { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/app/lib/contact";

import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";

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
    <section className="border-y border-[#F1E3E6] bg-[#FFF0F2] px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[900px] text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6330]">
          PLAN YOUR VISIT
        </span>

        <h2 className="mt-2 font-serif text-3xl font-bold leading-tight tracking-tight text-[#24171B] md:text-4xl">
          Ready to book your appointment?
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#625356] md:text-base md:leading-7">
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
           <WhatsAppIcon className="h-6 w-6" />
            WhatsApp Us
          </a>

          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#DCCED2] bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#24171B] transition-colors hover:bg-[#FFF8F9]"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call Studio
          </a>
        </div>
      </div>
    </section>
  );
};
