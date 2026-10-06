"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const WhyChooseUs = () => {
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    const fetchReasons = async () => {
      try {
        const response = await fetch("/api/why-us");

        if (!response.ok) {
          throw new Error("Failed to fetch reasons");
        }

        const data = await response.json();
        setReasons(data);
      } catch (error) {
        console.error("Failed to load reasons:", error);
      }
    };

    fetchReasons();
  }, []);

  return (
    <section
      id="why-us"
      aria-label="Why Visit Aaira Khan Salon & Studio"
      className="relative w-full overflow-hidden bg-[var(--color-background)] py-16 text-[var(--color-text)] antialiased md:py-20"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-16 font-sans">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 ">
          
          {/* Left Column: Content */}
          <div className="flex flex-col justify-start lg:col-span-7">
            
            {/* Left-Aligned Header */}
            <div className="mb-8 sm:mb-10">
              <span className="block mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                WHY VISIT US
              </span>

              <h2 className="font-serif text-3xl font-normal leading-[1.2] tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-[2.6rem]">
                Beauty services designed around your occasion
              </h2>
            </div>

            {/* Reasons 2x2 Grid with Card Interactions */}
            {reasons.length === 0 ? (
              <div className="flex min-h-[160px] items-center justify-center bg-[var(--color-surface)] p-6 text-center text-xs font-normal text-[var(--color-text-muted)]">
                Loading studio values...
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                {reasons.map((reason, index) => (
                  <div 
                    key={reason.title || index} 
                    className="group flex flex-col pt-5 border-t border-[var(--color-border-light,rgba(255,255,255,0.1))] transition-colors duration-300 hover:border-[var(--color-primary)] cursor-pointer"
                  >
                    <div className="flex items-start gap-4 text-left">
                      {/* Material Icon (Hover interaction intact) */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-soft)] text-[var(--color-text)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--color-surface)] group-hover:text-[var(--color-primary)]">
                        <span
                          className="material-symbols-outlined text-[22px]"
                          aria-hidden="true"
                        >
                          {reason.icon}
                        </span>
                      </div>

                      {/* Text Details */}
                      <div className="space-y-1">
                        <h3 className="font-serif text-base font-medium tracking-wide text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                          {reason.title}
                        </h3>
                        <p className="text-[12px] font-normal leading-relaxed text-[var(--color-text-muted)]">
                          {reason.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Right Column: Image without borders & lowered down on Y-axis */}
          <div className="relative flex justify-center lg:col-span-4 lg:justify-end pt-4 sm:pt-6 lg:pt-10">
            <div className="relative h-[360px] ring-[1.4px] ring-[var(--color-primary)] ring-offset-6 ring-offset-[var(--color-background)] w-[260px] sm:h-[390px] sm:w-[280px] overflow-hidden rounded-t-[130px] rounded-b-none bg-[var(--color-surface-soft)]">
              <Image
                src="/images/why-us-salon.jpg"
                alt="Aaira Khan Salon Studio Experience"
                fill
                draggable="false"
                sizes="(max-width: 1024px) 100vw, 280px"
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};