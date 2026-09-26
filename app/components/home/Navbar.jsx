"use client";

import React, { useState } from "react";
import { business } from "@/app/data/business";
import {
  getPhoneUrl,
  getWhatsAppBaseUrl,
  getWhatsAppUrl,
} from "@/app/lib/contact";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Offers", href: "#promotions" },
  { label: "Services", href: "#services-catalog" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const bookingUrl = getWhatsAppUrl(business.bookingMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-[#EEDDE1] bg-[#FFF9FA]/95 backdrop-blur-xl">
      {/* Utility bar */}
      <div className="bg-[#24171B] text-white">
        <div className="mx-auto flex min-h-8 max-w-[1380px] items-center justify-between gap-4 px-5 text-[10px] font-medium tracking-wide md:px-12">
          <span className="hidden sm:block">{business.locationLabel}</span>

          <a
            href={getPhoneUrl()}
            className="mx-auto transition-opacity hover:opacity-75 sm:mx-0"
          >
            Bookings: {business.phone}
          </a>

          <a
            href={getWhatsAppBaseUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 text-[#FFD8DF] hover:underline md:inline-flex"
          >
            <span
              className="material-symbols-outlined text-[14px]"
              aria-hidden="true"
            >
              chat
            </span>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-4 md:px-12"
      >
        <a
          href="#top"
          aria-label={`${business.name} home`}
          className="group shrink-0"
        >
          <span className="block font-serif text-[21px] font-bold leading-none tracking-tight text-[#24171B] md:text-2xl">
            Aaira Khan
          </span>

          <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.22em] text-[#8A6330] md:text-[9px]">
            Salon & Studio
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#55484B] transition-colors hover:text-[#974358]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-[#974358] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm transition-all hover:bg-[#81374A] hover:shadow-md md:inline-flex"
        >
          Book Appointment
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#EAD9DD] bg-white text-[#24171B] transition-colors hover:bg-[#FFF0F3] md:hidden"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className="material-symbols-outlined text-[22px]"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#EEDDE1] bg-[#FFF9FA] px-5 py-4 md:hidden"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-[#F1E3E6] py-3 text-sm font-semibold text-[#24171B]"
              >
                {link.label}
              </a>
            ))}

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#974358] py-3 text-xs font-bold uppercase tracking-wider text-white"
            >
              <span
                className="material-symbols-outlined text-base"
                aria-hidden="true"
              >
                chat
              </span>
              Book via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};