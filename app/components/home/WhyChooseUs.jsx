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
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-5">
          {/* Left Text Grid (Expands on Mobile & Tablet) */}
          <div className="flex flex-col justify-start lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
                WHY VISIT US
              </span>
              <h2 className="font-serif text-3xl font-normal leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl">
                Beauty services designed around your occasion
              </h2>
            </div>

            {isLoading ? (
              <p
                className="text-sm text-[var(--color-text-muted)]"
                role="status"
              >
                Loading studio details...
              </p>
            ) : hasError ? (
              <div className="flex flex-wrap items-center gap-3" role="alert">
                <p className="text-sm text-[var(--color-text-muted)]">
                  Unable to load studio details.
                </p>
                <button
                  type="button"
                  onClick={() => setLoadAttempt((attempt) => attempt + 1)}
                  className="cursor-pointer whitespace-nowrap text-xs font-bold text-[var(--color-text)] underline underline-offset-4"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className="flex h-full flex-col justify-between rounded-2xl bg-[var(--color-surface)] p-5"
                  >
                    <div className="flex items-start gap-4 text-left h-full">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-soft)] text-[var(--color-primary)]">
                        <span
                          className="material-symbols-outlined text-[20px]"
                          aria-hidden="true"
                        >
                          {reason.icon}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col justify-start">
                        <h3 className="font-serif text-base font-bold tracking-wide text-[var(--color-text)] sm:text-lg">
                          {reason.title}
                        </h3>
                        <p className="mt-1 line-clamp-3 text-xs text-[var(--color-text-muted)] sm:text-sm">
                          {reason.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Arched Image - Hidden on Mobile & Tablet */}
          <div className="relative hidden lg:flex justify-center lg:col-span-5">
            <div className="relative mt-10 h-[420px] w-[300px] overflow-hidden rounded-2xl bg-[var(--color-surface)] ring-2 ring-[var(--color-primary)] ring-offset-6 ring-offset-[var(--color-background)] shadow-2xl">
              <Image
                src="/images/service.avif"
                alt="Aaira Khan Salon"
                fill
                sizes="300px"
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
