"use client";

import React, { useEffect, useState } from "react";
import { getSafeExternalUrl } from "@/app/lib/contact";

export const SocialMediaStrip = () => {
  const [socials, setSocials] = useState({});
  const socialLinks = [
    {
      name: "Instagram",
      url: getSafeExternalUrl(socials.instagram),
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: getSafeExternalUrl(socials.youtube),
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: getSafeExternalUrl(socials.facebook),
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: getSafeExternalUrl(socials.tiktok),
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.96-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.29-2.26.43-4.59 1.95-6.27 1.48-1.67 3.68-2.58 5.92-2.5 1.02.02 2.03.24 2.97.66v4.18c-.73-.41-1.57-.62-2.42-.59-1.28.02-2.52.56-3.32 1.55-.8 1-1.07 2.36-.75 3.6.32 1.25 1.25 2.27 2.48 2.65 1.24.4 2.62.17 3.63-.58.83-.6 1.37-1.53 1.48-2.54.06-2.61.02-5.23.03-7.84 0-3.13 0-6.26-.01-9.39z" />
        </svg>
      ),
    },
  ];
  
  const [isLoading, setIsLoading] = useState(true);

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

        setSocials(
          data.socials && typeof data.socials === "object" ? data.socials : {},
        );
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to load social links:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchBusiness();

    return () => controller.abort();
  }, []);
  const availableSocialLinks = socialLinks.filter(
    (social) => social.url.length > 0,
  );

  return (
    <section className="w-full max-w-full overflow-x-hidden bg-[var(--color-secondary)]/3 py-16 font-sans text-[var(--color-text-dark)] md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center  gap-6    items-center">
          <div className="space-y-1  text-left ">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
              JOIN OUR COMMUNITY
            </span>
            <h3 className="font-serif text-base font-bold text-[var(--color-text-dark)] sm:text-lg">
              Follow Us &amp; Stay Inspired
            </h3>
          </div>

          {isLoading ? (
            <p role="status" className="text-sm text-[var(--color-text-dark)]">
              Loading social links...
            </p>
          ) : availableSocialLinks.length === 0 ? (
            <p className="text-sm text-[var(--color-text-dark)]">
              No social links are available right now.
            </p>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-2xl bg-[var(--color-surface-light)] p-2 shadow-sm">
              {availableSocialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-[var(--color-text-dark)] transition-all duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
