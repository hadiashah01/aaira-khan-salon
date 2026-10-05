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
      aria-label="Aaira Khan Salon & Studio Introduction"
      className="relative w-full overflow-hidden bg-[#FDFBF7] text-[#1A1412] antialiased selection:bg-[#C5A059] selection:text-[#FDFBF7]"
    >
      <style jsx global>{`
        /* Quiet, cinematic editorial motion system */
        @keyframes editorialFadeUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes editorialFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .motion-fade-header {
          animation: editorialFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s
            forwards;
          opacity: 0;
        }

        .motion-headline {
          animation: editorialFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s
            forwards;
          opacity: 0;
        }

        .motion-body-focus {
          animation: editorialFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s
            forwards;
          opacity: 0;
        }

        .motion-actions {
          animation: editorialFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s
            forwards;
          opacity: 0;
        }

        .motion-lookbook {
          animation: editorialFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s
            forwards;
          opacity: 0;
        }

        /* Microscopic tactile hover lift */
        .btn-editorial-hover {
          transition:
            transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease;
          will-change: transform;
        }
        .btn-editorial-hover:hover {
          transform: translateY(-1px);
        }
        .btn-editorial-hover:active {
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .motion-fade-header,
          .motion-headline,
          .motion-body-focus,
          .motion-actions,
          .motion-lookbook {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .btn-editorial-hover:hover {
            transform: none !important;
          }
        }
      `}</style>

      {/* Subtle Alabaster & Champagne Border Structure */}
      <div className="relative mx-auto max-w-[1440px] px-6 pt-12 pb-16 sm:px-10 sm:pt-16 sm:pb-24 lg:px-16 lg:pt-20 lg:pb-28">
        {/* Global Metadata & Geographic Anchor Line (Delay: 0.0s) */}

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Left Column: Bodoni Moda Display Typography & Booking Integration (7 Cols) */}
          <div className="flex flex-col justify-between lg:col-span-7 lg:pr-2">
            <div className="space-y-8 lg:space-y-10">
              {/* Display Headline Block (Delay: 0.2s - Soft 12px drift upward over 0.8s) */}
              <div className="motion-headline space-y-4">
                <div className="inline-flex items-center gap-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C5A059]">
                    AAIRA KHAN SALON & STUDIO KARACHI
                  </span>
                  <span
                    className="h-px w-8 bg-[#C5A059]/40"
                    aria-hidden="true"
                  />
                </div>

                {/* Main Display Heading: Razor-Sharp High-Contrast Bodoni Moda */}
                <h1 className="font-bodoni text-[2.75rem] font-normal leading-[1.06] tracking-[-0.025em] text-[#1A1412] sm:text-5xl md:text-5xl lg:text-[4.25rem] xl:text-[4.65rem]">
                  Bridal Beauty, Makeup & Hair for{" "}
                  <span className="font-bodoni italic font-normal text-[#C5A059]">
                    Special Moments
                  </span>
                </h1>
              </div>

              {/* Description Paragraph & Architectural Focus Points (Delay: 0.4s) */}
              <div className="motion-body-focus space-y-8 lg:space-y-10">
                {/* Editorial Excerpt */}
                <p className="max-w-xl text-base font-light leading-relaxed text-[#544B43] sm:text-[17px] sm:leading-8">
                  Bridal makeup, party glam, hair treatments, Hydra Facials, and
                  beauty care at Main Tariq Road — tailored to your occasion,
                  preferred look, and schedule.
                </p>

                {/* Architectural Service Ribbons: Hairline Dividers */}
                <div className="border-t border-b border-[#EAE3D5] py-5 sm:py-6">
                  <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                    <div className="space-y-1">
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-[#8C8174]">
                        Focus 01
                      </dt>
                      <dd className="text-xs font-medium tracking-wide uppercase text-[#1F1916] flex items-center gap-2">
                        <span
                          className="h-1 w-1 rounded-full bg-[#C5A059]"
                          aria-hidden="true"
                        />
                        Bridal &amp; Occasion Glam
                      </dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-[#8C8174]">
                        Focus 02
                      </dt>
                      <dd className="text-xs font-medium tracking-wide uppercase text-[#1F1916] flex items-center gap-2">
                        <span
                          className="h-1 w-1 rounded-full bg-[#C5A059]"
                          aria-hidden="true"
                        />
                        Hair & Skin Treatments
                      </dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-[#8C8174]">
                        Focus 03
                      </dt>
                      <dd className="text-xs font-medium tracking-wide uppercase text-[#1F1916] flex items-center gap-2">
                        <span
                          className="h-1 w-1 rounded-full bg-[#C5A059]"
                          aria-hidden="true"
                        />
                        Skin & Facial Care
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Conversion-Focused CTA Architecture (Delay: 0.6s & Microscopic Hover Lift) */}
              <div className="motion-actions pt-2">
                <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  {/* Primary WhatsApp Action in Rich Espresso with Soft -1px translateY hover */}
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-hover group relative inline-flex items-center justify-center gap-3.5 rounded-none border border-[#1A1412] bg-[#1A1412] px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#FDFBF7] hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-[#1A1412] focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Book on WhatsApp</span>
                  </a>

                  {/* Secondary Atelier Studio Contact with Soft -1px translateY hover */}
                  <a
                    href={getPhoneUrl()}
                    className="btn-editorial-hover inline-flex items-center justify-center gap-2.5 rounded-none border border-[#CFBE9B] bg-transparent px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#1A1412] hover:border-[#1A1412] hover:bg-[#F5EFE4] focus:outline-none focus:ring-1 focus:ring-[#1A1412]"
                  >
                    <span className="material-symbols-outlined text-[17px]">
                      call
                    </span>
                    <span>Call the Studio</span>
                  </a>
                </div>

                <p className="mt-4 flex items-center gap-2 text-xs italic text-[#786D62]">
                  <span
                    className="inline-block h-1 w-1 rounded-full bg-[#C5A059]"
                    aria-hidden="true"
                  />
                  Advance booking is recommended for bridal appointments and
                  longer treatments.
                </p>
              </div>
            </div>

            {/* Bottom Anchor Trust Line */}
            <div className="motion-fade-header mt-10 flex items-center justify-start border-t border-[#EAE3D5] pt-6 text-[11px] text-[#7A7065]">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#1A1412]">
                  Google Reviews
                </span>
                <span className="font-semibold text-[#C5A059]">4.6 ★</span>
                <span className="text-[#968B7E]">667 Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lookbook Atelier Exhibition Frame (5 Cols) with Subtle Entry Drift */}
          <div className="motion-lookbook lg:col-span-5 flex flex-col justify-center">
            <div className="relative mx-auto w-full max-w-[480px]">
              {/* Primary Gallery Cassette */}
              <div className="relative bg-[#FAF6EE] p-3">
                {/* Cassette Header Bar */}
                <div className="mb-2.5 flex items-center justify-between border-b border-[#E8DFCF] px-2 pb-2.5 text-[10px] uppercase tracking-[0.2em] text-[#72675C]">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[#C5A059]"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-[#1A1412]">
                      Lookbook Archive
                    </span>
                  </div>
                  <span className="font-bodoni italic text-xs capitalize text-[#877C6F]">
                    Karachi
                  </span>
                </div>

                {/* Video Asset Frame with Deep Espresso Matting */}
                <div className="relative overflow-hidden bg-[#140F0E]">
                  <HeroVideo />
                </div>

                {/* Cassette Footer & Archive Catalog Index */}
                <div className="mt-3 flex items-center justify-between px-1 text-[11px] text-[#63594F]">
                  <span className="font-bodoni italic text-sm text-[#261E1A]">
                    BRIDAL LOOK
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-[#968B7E]">
                    LOOK 01 / 08
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between   px-4 py-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <span
                    className="material-symbols-outlined text-[16px] text-[#C5A059]"
                    aria-hidden="true"
                  >
                    auto_awesome
                  </span>

                  <span className="font-medium uppercase tracking-[0.14em] text-[#1A1412]">
                    Bridal &amp; Occasion Glam
                  </span>
                </div>

                <span className="text-[11px] text-[#786D62]">
                  Makeup · Hair · Facials
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
