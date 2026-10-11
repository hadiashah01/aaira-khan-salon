"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const WhyChooseUs = () => {
  const [reasons, setReasons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchReasons = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        const response = await fetch("/api/why-us", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch reasons: ${response.status}`);
        }

        const data = await response.json();
        if (
          !Array.isArray(data) ||
          data.some(
            (reason) =>
              !reason ||
              typeof reason.title !== "string" ||
              reason.title.trim().length === 0 ||
              typeof reason.text !== "string" ||
              reason.text.trim().length === 0 ||
              typeof reason.icon !== "string",
          )
        ) {
          throw new Error("Invalid reasons data");
        }

        setReasons(data);
      } catch (error) {
        if (!(error instanceof Error && error.name === "AbortError")) {
          console.error("Failed to load reasons:", error);
          setHasError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchReasons();
    return () => controller.abort();
  }, [loadAttempt]);

  return (
    <section
      id="why-us"
      className="relative w-full max-w-full overflow-x-hidden bg-[var(--color-background)] py-16 font-sans text-[var(--color-text)] md:py-24"
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
              <h2 className="font-serif text-3xl font-normal leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl">
                Beauty services designed around your occasion
              </h2>
            </div>

            {/* Reasons 2x2 Grid with Card Interactions */}
            {reasons.length === 0 ? (
              <div className="flex min-h-[160px] items-center justify-center bg-[var(--color-surface)] p-6 text-center text-xs font-normal text-[var(--color-text-muted)]">
                Loading studio values...
              </div>
            ) : reasons.length === 0 ? (
              <p className="text-sm text-[var(--color-text-muted)]">
                Studio details are not available right now.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className="flex h-full flex-col justify-between rounded-2xl bg-[var(--color-surface)] p-5"
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
                        <p className="mt-1 line-clamp-3 text-xs   text-[var(--color-text-muted)] sm:text-sm">
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
                src="/images/service.avif"
                alt="Aaira Khan Salon"
                fill
                sizes="280px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};