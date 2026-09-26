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
  { label: "Home", href: "#top" },
  { label: "Offers", href: "#promotions" },
  { label: "Services", href: "#services-catalog" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const bookingUrl = getWhatsAppUrl(business.bookingMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-[#EEDDE1] bg-[#FFF9FA]/95 backdrop-blur-xl">
      {/* Utility Bar */}
      <div className="bg-[#24171B] text-white">
        <div className="mx-auto flex min-h-9 max-w-[1380px] items-center justify-between gap-4 px-5 text-[10px] font-medium tracking-wide md:px-12">
          <span className="hidden sm:block">{business.locationLabel}</span>

          <a
            href={getPhoneUrl()}
            className="transition-opacity hover:opacity-75"
          >
            Bookings: {business.phone}
          </a>

          <a
            href={getWhatsAppBaseUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-[#FFD8DF] hover:underline sm:inline-flex"
          >
            {/* WhatsApp icon */}
            <WhatsAppIcon className="h-[14px] w-[14px]" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[72px] max-w-[1380px] items-center justify-between gap-6 px-5 md:px-12"
      >
        {/* Logo */}
        <a
          href="#top"
          aria-label={`${business.name} home`}
          className="shrink-0"
        >
          <span className="block font-serif text-[21px] font-bold leading-none tracking-tight text-[#24171B] md:text-2xl">
            Aaira Khan
          </span>

          <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.22em] text-[#8A6330] md:text-[9px]">
            Salon & Studio
          </span>
        </a>

        {/* 
          TABLET + DESKTOP NAVIGATION
          md:flex = tablet se visible
          lg:flex ki zarurat nahi
        */}
        <div className="hidden flex-1 items-center justify-center gap-4 md:flex lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.08em] text-[#55484B] transition-colors hover:text-[#974358] lg:text-[11px]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Tablet + Desktop CTA */}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-lg bg-[#974358] px-3.5 py-2.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white shadow-sm transition-all hover:bg-[#81374A] hover:shadow-md sm:inline-flex md:px-4 md:text-[10px]"
        >
          Book Appointment
        </a>

        {/* MOBILE ONLY Hamburger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#EAD9DD] bg-white text-[#24171B] transition-colors hover:bg-[#FFF0F3] md:hidden"
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

      {/* MOBILE MENU ONLY */}
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
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#974358] py-3 text-xs font-bold uppercase tracking-wider text-white"
            >
              <WhatsAppIcon className="h-[17px] w-[17px]" />
              Book via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
