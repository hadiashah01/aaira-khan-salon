"use client";

import React, { useState } from "react";
import { business } from "@/app/data/business";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";
import {
  getPhoneUrl,
  getWhatsAppBaseUrl,
  getWhatsAppUrl,
} from "@/app/lib/contact";

const navLinks = [
  { label: "Offers", href: "#promotions" },
  { label: "Services", href: "#services-catalog" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Location", href: "#location" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);
  const bookingUrl = getWhatsAppUrl(business.bookingMessage);

  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-x-hidden bg-[var(--color-surface-light)]/95 text-[var(--color-text-dark)] antialiased transition-all duration-300 ease-out">
      
      {/* Top Utility Bar - Cleaned Up (No dots, No Duplicate Tariq Road) */}
      <div className="hidden bg-[var(--color-secondary)] font-sans text-[var(--color-text)] sm:block">
        <div className="mx-auto flex min-h-9 max-w-[1400px] items-center justify-between gap-4 px-6 text-[10px] font-medium tracking-[0.16em] uppercase sm:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <span className="text-[var(--color-text-muted)]">
              MAIN TARIQ ROAD DELHI SOCIETY KARACHI
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={getPhoneUrl()}
              className="whitespace-nowrap text-[var(--color-text)] transition-colors duration-300 ease-out hover:text-[var(--color-primary)]"
            >
              Bookings: {business.phone}
            </a>

            <a
              href={getWhatsAppBaseUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-[var(--color-primary)] transition-all duration-300 ease-out hover:text-[var(--color-text)]"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[72px] w-full max-w-[1400px] items-center justify-between gap-4 overflow-x-hidden px-6 font-sans sm:px-10 lg:px-16"
      >
        {/* Brand Wordmark - Updated Subtitle to "& Studio" */}
        <a
          href="#top"
          aria-label={`${business.name} home`}
          className="group flex shrink-0 flex-col py-1 transition-all duration-300 ease-out hover:opacity-90"
        >
          <span className="block font-serif text-2xl font-normal leading-none tracking-tight text-[var(--color-text-dark)] sm:text-3xl">
            Aaira Khan
          </span>
          <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.26em] text-[var(--color-primary-dark)]">
            Salon &amp; Studio
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden flex-1 items-center justify-center gap-6 lg:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-text-dark)] transition-all duration-300 ease-out hover:text-[var(--color-primary-dark))]"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-[48px] shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-secondary)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text)] transition-all duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95 sm:inline-flex"
        >
          <span>Book Appointment</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center text-[var(--color-text-dark)] transition-all duration-300 ease-out focus:outline-none active:scale-95 lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined text-[24px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="border-t border-[var(--color-border-light)]/40 bg-[var(--color-surface-light)] px-6 py-6 font-sans lg:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex cursor-pointer items-center justify-between py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-dark)] transition-all duration-300 ease-out hover:text-[var(--color-secondary)]"
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-[14px] text-[var(--color-text-dark)]">
                  arrow_forward
                </span>
              </a>
            ))}

            <div className="pt-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-secondary)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text)] transition-all duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4 fill-current" />
                <span>Book via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};