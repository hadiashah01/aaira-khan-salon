"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/app/lib/contact";

export const SpecialOffers = () => {
  const [whatsappPhone, setWhatsappPhone] = useState("");
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchOffers = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        const response = await fetch("/api/offers", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch offers: ${response.status}`);
        }

        const data = await response.json();
        if (
          !Array.isArray(data) ||
          data.some(
            (offer) =>
              !offer ||
              (typeof offer.id !== "string" && typeof offer.id !== "number") ||
              typeof offer.title !== "string" ||
              offer.title.trim().length === 0 ||
              typeof offer.message !== "string" ||
              offer.message.trim().length === 0 ||
              (offer.image !== undefined && typeof offer.image !== "string") ||
              (typeof offer.image === "string" &&
                offer.image.trim().length > 0 &&
                !offer.image.startsWith("/images/")) ||
              (offer.cta !== undefined && typeof offer.cta !== "string"),
          )
        ) {
          throw new Error("Invalid offers data");
        }

        setOffers(data);
      } catch (error) {
        if (!(error instanceof Error && error.name === "AbortError")) {
          console.error("Failed to load offers:", error);
          setHasError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchOffers();

    return () => controller.abort();
  }, [loadAttempt]);
  useEffect(() => {
    const controller = new AbortController();

    const fetchBusiness = async () => {
      try {
        const response = await fetch("/api/business", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch business: ${response.status}`);
        }

        const data = await response.json();

        if (typeof data.whatsapp !== "string" || !data.whatsapp.trim()) {
          throw new Error("Invalid business WhatsApp number");
        }

        setWhatsappPhone(data.whatsapp);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to load business details:", error);
        }
      }
    };

    fetchBusiness();

    return () => controller.abort();
  }, []);
  return (
    <section
      id="promotions"
      className="relative w-full max-w-full overflow-x-hidden bg-[var(--color-secondary)]/3   py-16 font-sans text-[var(--color-text-dark)] md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Header Section */}
        <div className="mb-12 text-center space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
            SPECIAL PROMOTIONS
          </span>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-[var(--color-text-dark)] sm:text-4xl md:text-5xl">
            Current Offers &amp; Packages
          </h2>
          <p className="mx-auto max-w-xl text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
            Ask the studio about current package availability and seasonal
            offers before booking.
          </p>
        </div>

        {/* Dynamic Image Cards Grid (Centered 2-Column Max Width) */}
        {isLoading ? (
          <div
            className="mt-12 flex min-h-[200px] items-center justify-center rounded-2xl bg-[var(--color-surface-light)] p-8 text-center text-xs text-[var(--color-text-muted)]"
            role="status"
          >
            Loading current salon offers...
          </div>
        ) : hasError ? (
          <div
            className="mt-12 flex min-h-[200px] flex-col items-center justify-center gap-4 rounded-2xl bg-[var(--color-surface-light)] p-8 text-center"
            role="alert"
          >
            <p className="text-sm text-[var(--color-text-dark)]">
              Unable to load current offers.
            </p>
            <button
              type="button"
              onClick={() => setLoadAttempt((attempt) => attempt + 1)}
              className="cursor-pointer whitespace-nowrap text-xs font-bold text-[var(--color-text-dark)] underline underline-offset-4"
            >
              Try Again
            </button>
          </div>
        ) : offers.length === 0 ? (
          <div className="mt-12 flex min-h-[200px] items-center justify-center rounded-2xl bg-[var(--color-surface-light)] p-8 text-center text-sm text-[var(--color-text-muted)]">
            No current offers are available.
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="group flex h-full transform-none flex-col justify-between overflow-hidden rounded-2xl bg-[var(--color-surface-light)] shadow-sm"
              >
                {/* Image Frame */}
                <div className="relative h-[240px] w-full overflow-hidden bg-[var(--color-surface-soft)]">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover object-top"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                  <div className="space-y-1.5">
                    {offer.category && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary-dark)]">
                        {offer.category}
                      </span>
                    )}
                    <h3 className="font-serif text-base font-bold text-[var(--color-text-dark)] sm:text-lg">
                      {offer.title}
                    </h3>
                    {typeof offer.description === "string" &&
                      offer.description.trim() && (
                        <p className="line-clamp-3 text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
                          {offer.description}
                        </p>
                      )}
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-2 flex items-center justify-between gap-3  ">
                    <span className="line-clamp-2 text-xs font-bold text-[var(--color-text-dark)]">
                      {offer.price || offer.note || ""}
                    </span>

                    <a
                      aria-disabled={!whatsappPhone}
                      tabIndex={whatsappPhone ? 0 : -1}
                      rel="noopener noreferrer"
                      href={
                        whatsappPhone
                          ? getWhatsAppUrl(whatsappPhone, offer.message)
                          : undefined
                      }
                      className={`inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[var(--color-primary-dark)] px-4 py-2.5 text-xs font-semibold transition-colors ${
                        whatsappPhone
                          ? "text-[var(--color-primary-dark)] hover:bg-[var(--color-primary-dark)] hover:text-white"
                          : "cursor-not-allowed opacity-50"
                      }`}
                    >
                      <span>{offer.cta || "Ask About Offer"}</span>

                      <svg
                        className="h-3.5 w-3.5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
