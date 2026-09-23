'use client';

import React, { useState } from 'react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F8]/95 backdrop-blur-md border-b border-[#F5DCE2]">
      {/* Top Notification Bar */}
      <div className="bg-[#25181C] text-[#FFF8F8] px-4 py-1.5 text-[11px] text-center font-medium tracking-wide flex justify-between items-center max-w-[1380px] mx-auto">
        <span className="hidden sm:inline">Main Tariq Road Studio • Open for Appointments</span>
        <span className="mx-auto sm:mx-0">For bookings &amp; inquiries: 021-34536026</span>
        <a
          href="https://wa.me/923333959805"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-1 text-[#FFD9DF] hover:underline"
        >
          <span className="material-symbols-outlined text-[13px]">chat</span>
          WhatsApp Us
        </a>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-[1380px] mx-auto px-5 md:px-12 py-3 flex items-center justify-between">
        {/* Brand Logo / Title */}
        <a href="#" className="flex flex-col">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#25181C]">
            Aaira Khan
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#775A19] -mt-1">
            Salon &amp; Studio
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#4E4639]">
          <a href="#promotions" className="hover:text-[#974358] transition-colors">Promotions</a>
          <a href="#services-catalog" className="hover:text-[#974358] transition-colors">Services Catalog</a>
          <a href="#reviews" className="hover:text-[#974358] transition-colors">Client Feedback</a>
          <a href="#location" className="hover:text-[#974358] transition-colors">Location &amp; Contact</a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noreferrer"
            className="bg-[#974358] text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#83384b] transition-all shadow-sm"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#25181C] focus:outline-none p-1"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8F8] border-b border-[#F5DCE2] px-5 py-4 space-y-3">
          <a
            href="#promotions"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#25181C] py-1"
          >
            Promotions
          </a>
          <a
            href="#services-catalog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#25181C] py-1"
          >
            Services Catalog
          </a>
          <a
            href="#reviews"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#25181C] py-1"
          >
            Client Feedback
          </a>
          <a
            href="#location"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#25181C] py-1"
          >
            Location &amp; Contact
          </a>
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noreferrer"
              className="bg-[#974358] text-white text-center py-2.5 rounded text-xs font-bold uppercase tracking-wider"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};