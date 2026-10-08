"use client";

import React, { useEffect, useState } from "react";

export const SocialMediaStrip = () => {
  const [socials, setSocials] = useState(null);

  useEffect(() => {
    const loadBusiness = async () => {
      try {
        const response = await fetch("/api/business");
        if (response.ok) {
          const data = await response.json();
          setSocials(data.socials);
        }
      } catch (error) {
        console.error("Failed to load business socials:", error);
      }
    };
    loadBusiness();
  }, []);

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@aairakhansalon",
      url: socials?.instagram || "https://instagram.com",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "Facebook",
      handle: "Aaira Khan Salon",
      url: socials?.facebook || "https://facebook.com",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      handle: "@aairakhansalon",
      url: socials?.tiktok || "https://tiktok.com",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.96-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.29-2.26.43-4.59 1.95-6.27 1.48-1.67 3.68-2.58 5.92-2.5 1.02.02 2.03.24 2.97.66v4.18c-.73-.41-1.57-.62-2.42-.59-1.28.02-2.52.56-3.32 1.55-.8 1-1.07 2.36-.75 3.6.32 1.25 1.25 2.27 2.48 2.65 1.24.4 2.62.17 3.63-.58.83-.6 1.37-1.53 1.48-2.54.06-2.61.02-5.23.03-7.84 0-3.13 0-6.26-.01-9.39z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[var(--color-surface-light)] py-14 text-[var(--color-text-dark)] border-t border-[var(--color-border-light)]/40">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-6">
          
          {/* Section Heading & Subtitle */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
              JOIN OUR COMMUNITY
            </span>
            <h3 className="font-serif text-2xl font-normal tracking-wide text-[var(--color-text-dark)] sm:text-3xl">
              Follow Us & Stay Inspired
            </h3>
            <p className="text-xs text-[var(--color-text-muted)]">
              Get real-time updates, bridal reveals & daily transformations.
            </p>
          </div>

          {/* Seamless Borderless Curved Cards */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 bg-white hover:bg-[var(--color-primary)] px-5 py-3 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5  "
              >
                <span className="text-[var(--color-text-dark)] group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                  {social.icon}
                </span>

                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-dark)] group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                    {social.name}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-muted)] group-hover:text-[var(--color-secondary)]/80 transition-colors duration-300">
                    {social.handle}
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};