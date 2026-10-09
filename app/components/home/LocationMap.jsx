"use client";

import React, { useEffect, useState } from "react";

export const LocationMap = () => {
  const [business, setBusiness] = useState(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const loadBusinessData = async () => {
      try {
        const response = await fetch("/api/business");
        if (response.ok) {
          const data = await response.json();
          setBusiness(data);
        }
      } catch (error) {
        console.error("Failed to load business data:", error);
      }
    };
    loadBusinessData();
  }, []);

  const handleCopyPhone = (text) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  if (!business) return null;

  return (
    <section id="location" className="relative w-full bg-[var(--color-surface-light)] py-16 text-[var(--color-text-dark)] md:py-24 font-sans">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        
        <div className="mx-auto mb-10 max-w-2xl text-center space-y-1">
          <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
            LOCATION &amp; CONTACT
          </span>
          <h2 className="font-serif text-3xl font-normal text-[var(--color-text-dark)] sm:text-4xl md:text-5xl">
            Visit the studio
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">
            Find the studio on Main Tariq Road and contact us directly to confirm appointments.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Contact Details Card */}
          <div className="flex flex-col justify-between bg-[var(--color-secondary)] p-6 sm:p-8 text-white rounded-2xl shadow-sm lg:col-span-5 space-y-6">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Studio Address</h3>
                  <p className="text-xs sm:text-sm font-medium text-[#f5f0f2] mt-0.5">{business.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                  <span className="material-symbols-outlined text-lg">call</span>
                </div>
                <div className="flex-1 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Contact</h3>
                    <button type="button" onClick={() => handleCopyPhone(business.phone)} className="text-[10px] font-mono text-[var(--color-primary)] hover:underline cursor-pointer">
                      {copiedPhone ? "Copied ✓" : "Copy"}
                    </button>
                  </div>
                  <a href={`tel:${business.phone.replace(/\D/g, "")}`} className="block text-xs sm:text-sm font-medium text-[#f5f0f2] hover:text-[var(--color-primary)]">
                    {business.phone}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-full items-center justify-center gap-2 bg-[var(--color-primary)] px-6 text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)] rounded-xl transition-all hover:bg-[#c5a059] cursor-pointer"
            >
              <span>Get Directions</span>
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>

          {/* Compact Map Frame (Reduced Height on Mobile) */}
          <div className="relative h-[240px] sm:h-[320px] lg:h-full min-h-[240px] overflow-hidden rounded-2xl bg-white shadow-sm lg:col-span-7">
            <iframe
              title={`${business.name} location map`}
              src={business.mapEmbedUrl}
              width="100%"
              height="100%"
              loading="eager"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
};