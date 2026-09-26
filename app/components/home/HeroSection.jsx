"use client";

import React from "react";
import { HeroVideo } from "./HeroVideo";
import { business } from "@/app/data/business";
import { getPhoneUrl, getWhatsAppUrl } from "@/app/lib/contact";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";
 
export const HeroSection = () => {
  const bookingUrl = getWhatsAppUrl(business.bookingMessage);

  return (
    <section
      id="home"
      className="w-full border-b border-[#F1E3E6] bg-gradient-to-b from-[#FFF0F2] via-[#FFF8F8] to-white"
    >
      <div className="mx-auto max-w-[1380px] px-5 py-12 sm:py-14 md:px-12 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Content */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {/* Location */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E8D4A9] bg-[#F8F1E3] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A6330] sm:text-xs">
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden="true"
                >
                  location_on
                </span>

                <span>{business.locationLabel}</span>
              </div>

              {/* Heading */}
              <h1 className="max-w-3xl font-serif text-[2.15rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#24171B] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                Bridal Makeup, Beauty & Hair for Your Special Moments
              </h1>

              {/* Supporting copy */}
              <p className="max-w-2xl text-base leading-7 text-[#4F4347] sm:text-[17px]">
                Bridal makeup, party glam, hair treatments, Hydra Facials, and
                beauty care at Main Tariq Road — tailored to your occasion,
                preferred look, and schedule.
              </p>

              {/* Trust points */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#4F4347] sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="material-symbols-outlined text-[17px] text-[#974358]"
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  Bridal & Party Makeup
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="material-symbols-outlined text-[17px] text-[#974358]"
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  Hair & Skin Treatments
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="material-symbols-outlined text-[17px] text-[#974358]"
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  Appointment-Based Service
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#974358] px-5 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#83384b]"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  Book on WhatsApp
                </a>

                <a
                  href={getPhoneUrl()}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#DCCED2] bg-white px-5 py-3.5 text-sm font-bold text-[#24171B] transition-all hover:bg-[#FFF8F9]"
                >
                  <span className="material-symbols-outlined text-lg">
                    call
                  </span>
                  Call the Studio
                </a>
              </div>

              <p className="text-xs text-[#7A6D70]">
                For bridal packages and long-duration treatments, advance
                booking is recommended.
              </p>
            </div>
          </div>

          {/* Featured visual */}
          <div className="flex justify-center lg:col-span-5">
            <div className="w-full max-w-[430px] rounded-2xl border border-[#E9DFE2] bg-white p-3 shadow-xl sm:p-4">
              <div className="mb-3 flex justify-center border-b border-[#F0E7E9] pb-3">
                <span className="rounded-full bg-[#F9E5E9] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#974358]">
                  Featured Bridal Look
                </span>
              </div>

              <HeroVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};