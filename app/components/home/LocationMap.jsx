"use client";

import React, { useEffect, useState } from "react";

export const LocationMap = () => {
  const [business, setBusiness] = useState(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadBusinessData = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        const response = await fetch("/api/business", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch business data: ${response.status}`);
        }

        const data = await response.json();
        if (!data || typeof data !== "object" || Array.isArray(data)) {
          throw new Error("Invalid business data");
        }

        if (Object.keys(data).length === 0) {
          setBusiness(null);
          return;
        }

        if (
          typeof data.address !== "string" ||
          typeof data.phone !== "string" ||
          typeof data.googleMapsUrl !== "string" ||
          typeof data.mapEmbedUrl !== "string"
        ) {
          throw new Error("Incomplete business location data");
        }

        setBusiness(data);
      } catch (error) {
        if (!(error instanceof Error && error.name === "AbortError")) {
          console.error("Failed to load business data:", error);
          setHasError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadBusinessData();

    return () => controller.abort();
  }, [loadAttempt]);

  const handleCopyPhone = async (text) => {
    setCopyError(false);

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard access is unavailable");
      }

      await navigator.clipboard.writeText(text);
      setCopiedPhone(true);
      window.setTimeout(() => setCopiedPhone(false), 2200);
    } catch (error) {
      console.error("Failed to copy phone number:", error);
      setCopyError(true);
    }
  };

  return (
    <section
      id="location"
      className="relative w-full max-w-full overflow-x-hidden bg-[var(--color-surface-light)] py-16 font-sans text-[var(--color-text-dark)] md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto mb-10 max-w-2xl space-y-1 text-center">
          <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
            LOCATION &amp; CONTACT
          </span>
          <h2 className="font-serif text-3xl font-normal leading-tight text-[var(--color-text-dark)] sm:text-4xl md:text-5xl">
            Visit the studio
          </h2>
          <p className="text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
            Find the studio on Main Tariq Road and contact us directly to confirm appointments.
          </p>
        </div>

        {isLoading ? (
          <div className="flex min-h-[240px] items-center justify-center rounded-2xl bg-[var(--color-surface-light)] px-6 text-center text-sm text-[var(--color-text-dark)]">
            Loading location details...
          </div>
        ) : hasError ? (
          <div
            className="flex min-h-[240px] flex-col items-center justify-center gap-4 rounded-2xl bg-[var(--color-surface-light)] px-6 text-center"
            role="alert"
          >
            <p className="text-sm text-[var(--color-text-dark)]">
              Unable to load location details right now.
            </p>
            <button
              type="button"
              onClick={() => setLoadAttempt((attempt) => attempt + 1)}
              className="cursor-pointer whitespace-nowrap text-xs font-bold text-[var(--color-text)] underline underline-offset-4 transition-all duration-300 ease-out hover:text-[var(--color-primary)] active:scale-95"
            >
              Try Again
            </button>
          </div>
        ) : !business ? (
          <div className="flex min-h-[240px] items-center justify-center rounded-2xl bg-[var(--color-surface-light)] px-6 text-center text-sm text-[var(--color-text-dark)]">
            Location details are not available right now.
          </div>
        ) : (
          <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="flex h-full flex-col justify-between space-y-6 rounded-2xl bg-[var(--color-secondary)] p-6 text-[var(--color-text)] sm:p-8 lg:col-span-5">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                      Studio Address
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-[var(--color-text)] sm:text-sm">
                      {business.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                        Contact
                      </h3>
                      <button
                        type="button"
                        onClick={() => handleCopyPhone(business.phone)}
                        className="shrink-0 cursor-pointer whitespace-nowrap text-[10px] font-sans text-[var(--color-primary)] transition-all duration-300 ease-out hover:underline active:scale-95"
                      >
                        {copiedPhone ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <a
                      href={`tel:${business.phone.replace(/\D/g, "")}`}
                      className="block whitespace-nowrap text-xs font-medium text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)] sm:text-sm"
                    >
                      {business.phone}
                    </a>
                    {copyError && (
                      <p className="text-xs text-[var(--color-text-muted)]" role="alert">
                        Unable to copy the phone number.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] transition-all duration-300 ease-out hover:bg-[var(--color-primary-dark)] active:scale-95"
              >
                <span>Get Directions</span>
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
            </div>

            <div className="relative h-[240px] min-h-[240px] overflow-hidden rounded-2xl bg-[var(--color-surface)] sm:h-[320px] lg:col-span-7 lg:h-full">
              <iframe
                title={`${business.name || "Aaira Khan Salon & Studio"} location map`}
                src={business.mapEmbedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
