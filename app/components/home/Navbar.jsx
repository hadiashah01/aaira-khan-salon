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
    <header className="sticky top-0 z-50 w-full overflow-x-hidden bg-[var(--color-surface-light)]/95 backdrop-blur-md text-[var(--color-text-dark)] antialiased transition-all">
      
      {/* Top Utility Bar - Cleaned Up (No dots, No Duplicate Tariq Road) */}
      <div className="hidden sm:block bg-[var(--color-secondary)] text-[#f5f0f2] font-sans">
        <div className="mx-auto flex min-h-9 max-w-[1400px] items-center justify-between gap-4 px-6 text-[10px] font-medium tracking-[0.16em] uppercase sm:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <span className="text-[#a3969a]">
              MAIN TARIQ ROAD DELHI SOCIETY KARACHI
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={getPhoneUrl()}
              className="text-[#f5f0f2] transition-colors duration-200 hover:text-[var(--color-primary)]"
            >
              Bookings: {business.phone}
            </a>

            <a
              href={getWhatsAppBaseUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--color-primary)] transition-colors duration-200 hover:text-white"
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
        className="mx-auto flex min-h-[72px] max-w-[1400px] items-center justify-between gap-4 px-6 font-sans sm:px-10 lg:px-16"
      >
        {/* Brand Wordmark - Updated Subtitle to "& Studio" */}
        <a
          href="#top"
          aria-label={`${business.name} home`}
          className="group flex flex-col shrink-0 py-1 transition-opacity hover:opacity-90"
        >
          <span className="block font-serif text-2xl font-normal leading-none tracking-tight text-[var(--color-text-dark)] sm:text-3xl">
            Aaira Khan
          </span>
          <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.26em] text-[var(--color-primary-dark)]">
           salon &amp; Studio
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden flex-1 items-center justify-center gap-6 lg:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-text-dark)] transition-colors duration-200 hover:text-[var(--color-primary-dark)]"
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
          className="hidden shrink-0 items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 rounded-full shadow-sm sm:inline-flex cursor-pointer"
        >
          <span>Book Appointment</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-[var(--color-text-dark)] lg:hidden focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined text-[24px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="bg-[var(--color-surface-light)] px-6 py-6 lg:hidden font-sans shadow-xl border-t border-[var(--color-border-light)]/40">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-dark)] hover:text-[var(--color-primary-dark)]"
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-[14px] text-[var(--color-text-muted)]">
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
                className="flex w-full items-center justify-center gap-2 bg-[var(--color-secondary)] text-white py-3.5 text-xs font-bold uppercase tracking-[0.18em] rounded-full"
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