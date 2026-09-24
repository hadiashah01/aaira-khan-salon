"use client";

import React from "react";
import { HeroVideo } from "./HeroVideo";

const whatsappUrl =
  "https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full bg-gradient-to-b from-[#FFF0F2] via-[#FFF8F8] to-white border-b border-[#F5DCE2]"
    >
      <div className="max-w-[1380px] mx-auto px-5 md:px-12 py-10 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Content */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {/* Location */}
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#775A19] bg-[#FFDEA5]/50 px-3.5 py-2 rounded-full border border-[#FFDEA5]">
                <span className="material-symbols-outlined text-[16px]">
                  location_on
                </span>

                <span>Main Tariq Road • Delhi Society • Karachi</span>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-[2.15rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#25181C] leading-[1.08] tracking-[-0.02em] max-w-3xl">
                Bridal Makeup, Beauty & Hair for Your Special Moments
              </h1>

              {/* Supporting copy */}
             <p className="text-base sm:text-[17px] text-[#382A2E] leading-7 max-w-2xl">
                Bridal makeup, party glam, hair treatments, Hydra Facials, and
                beauty care at Main Tariq Road — tailored to your occasion,
                preferred look, and schedule.
              </p>

              {/* Trust points */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-[#382A2E]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[17px] text-[#974358]">
                    check_circle
                  </span>
                  Bridal &amp; Party Makeup
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[17px] text-[#974358]">
                    check_circle
                  </span>
                  Hair &amp; Skin Treatments
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[17px] text-[#974358]">
                    check_circle
                  </span>
                  Appointment-Based Service
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#974358] text-white px-5 py-3.5 rounded-xl text-sm font-bold hover:bg-[#83384b] transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">
                    chat
                  </span>
                  Book on WhatsApp
                </a>

                <a
                  href="tel:02134536026"
                  className="bg-white border border-stone-300 text-[#25181C] px-5 py-3.5 rounded-xl text-sm font-bold hover:bg-stone-50 transition-all inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">
                    call
                  </span>
                  Call the Studio
                </a>
              </div>

              <p className="text-xs text-stone-500">
                For bridal packages and long-duration treatments, advance
                booking is recommended.
              </p>
            </div>
          </div>

          {/* Featured visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[430px] bg-white p-3 sm:p-4 rounded-2xl border border-[#F5DCE2] shadow-xl">
              <div className="flex justify-center pb-3 border-b border-stone-100 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#974358] bg-[#FFD9DF]/60 px-3 py-1.5 rounded-full">
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
