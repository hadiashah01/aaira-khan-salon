"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  getPhoneUrl,
  getSafeExternalUrl,
  getWhatsAppUrl,
} from "@/app/lib/contact";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";

export const LocationMap = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [copyError, setCopyError] = useState("");
  const copyTimerRef = useRef(null);
  const [business, setBusiness] = useState(null);

  const mapsUrl = getSafeExternalUrl(business?.googleMapsUrl);
  const mapEmbedUrl = getSafeExternalUrl(business?.mapEmbedUrl);

  const whatsappUrl = business?.whatsapp
    ? getWhatsAppUrl(business.whatsapp, business.bookingMessage)
    : "";

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

        setBusiness(await response.json());
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to load business details:", error);
        }
      }
    };

    fetchBusiness();

    return () => controller.abort();
  }, []);

  useEffect(
    () => () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    },
    [],
  );

  const handleCopy = async (text, type) => {
    setCopyError("");

    try {
      if (!text || !navigator.clipboard?.writeText) {
        throw new Error("Clipboard access is unavailable");
      }

      await navigator.clipboard.writeText(text);

      setCopiedPhone(type === "phone");
      setCopiedWhatsApp(type === "whatsapp");

      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }

      copyTimerRef.current = window.setTimeout(() => {
        setCopiedPhone(false);
        setCopiedWhatsApp(false);
      }, 2200);
    } catch (error) {
      console.error("Failed to copy contact details:", error);
      setCopyError(
        type === "phone"
          ? "Unable to copy the phone number."
          : "Unable to copy the WhatsApp number.",
      );
    }
  };

  if (!business) {
    return (
      <section
        id="location"
        className="bg-[var(--color-surface-light)] py-16 text-center text-sm text-[var(--color-text-muted)] md:py-24"
        role="status"
      >
        Loading studio details...
      </section>
    );
  }

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
            Find the studio on Main Tariq Road and contact us directly to
            confirm appointments.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="flex h-full flex-col justify-between space-y-6 rounded-2xl bg-[var(--color-secondary)] p-6 text-[var(--color-text)] sm:p-8 lg:col-span-5 lg:h-[350px]">
            <div className="space-y-8">
              {/* Studio Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                  <span className="material-symbols-outlined text-lg">
                    location_on
                  </span>
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

              {/* Phone Contact */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                  <span className="material-symbols-outlined text-lg">
                    call
                  </span>
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                      Contact
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleCopy(business.phone, "phone")}
                      className="shrink-0 cursor-pointer text-[10px] font-sans text-[var(--color-primary)] transition-all duration-300 ease-out hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 active:scale-95"
                    >
                      {copiedPhone ? "Copied" : "Copy"}
                    </button>
                  </div>

                  <a
                    href={getPhoneUrl(business.phone) || undefined}
                    className="block whitespace-nowrap text-xs font-medium text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] sm:text-sm"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Contact */}
              {business.whatsapp && (
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                    <WhatsAppIcon className="h-5 w-5 fill-current" />
                  </div>

                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                        WhatsApp
                      </h3>

                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(business.whatsapp, "whatsapp")
                        }
                        className="shrink-0 cursor-pointer text-[10px] font-sans text-[var(--color-primary)] transition-all duration-300 ease-out hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 active:scale-95"
                      >
                        {copiedWhatsApp ? "Copied" : "Copy"}
                      </button>
                    </div>

                    <a
                      href={whatsappUrl || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Contact ${business.name || "the salon"} on WhatsApp`}
                      className="block whitespace-nowrap text-xs font-medium text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] sm:text-sm"
                    >
                      {business.whatsapp}
                    </a>
                  </div>
                </div>
              )}

              {copyError && (
                <p
                  className="text-xs text-[var(--color-text-muted)]"
                  role="alert"
                >
                  {copyError}
                </p>
              )}

              
            </div>

            {mapsUrl && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] transition-all duration-300 ease-out hover:bg-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 active:scale-95"
              >
                <span>Get Directions</span>
                <span className="material-symbols-outlined text-base">
                  open_in_new
                </span>
              </a>
            )}
          </div>

          <div className="relative h-[240px] min-h-[240px] overflow-hidden rounded-2xl bg-[var(--color-surface)] sm:h-[320px] lg:col-span-7 lg:h-[350px]">
            {mapEmbedUrl ? (
              <iframe
                title={`${business.name || "Aaira Khan Salon & Studio"} location map`}
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <div className="flex h-full items-center justify-center p-6 text-center text-sm text-[var(--color-text-muted)]">
                Map details are unavailable.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
