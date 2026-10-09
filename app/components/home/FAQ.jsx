"use client";

import React, { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/app/lib/contact";

export const FAQ = () => {
  const [faqItems, setFaqItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const response = await fetch("/api/faqs");
        if (!response.ok) throw new Error("Failed to fetch FAQs");
        const data = await response.json();
        setFaqItems(data);
      } catch (error) {
        console.error("Failed to load FAQs:", error);
      }
    };
    loadFAQs();
  }, []);

  const generalMessage =
    "Hello Aaira Khan Salon, I have a question about your services and packages.";

  const visibleFAQs = showAll ? faqItems : faqItems.slice(0, 4);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[var(--color-surface-light)] py-16 text-[var(--color-text-dark)] antialiased md:py-24 font-sans"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="font-serif text-3xl font-normal tracking-tight text-[var(--color-text-dark)] sm:text-4xl md:text-5xl">
            Planning Your Visit or Booking?
          </h2>

          <p className="text-xs sm:text-sm leading-relaxed text-[var(--color-text-muted)]">
            Quick answers regarding appointments, bridal bookings, party makeup, and studio policies.
          </p>
        </div>

        {/* Clean Accordion Cards List */}
        <div className="mt-10 max-w-4xl space-y-3">
          {visibleFAQs.map((item, index) => {
            const isOpen = openIndex === index;
            const itemNumber = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={item.question || index}
                className="overflow-hidden rounded-2xl bg-white transition-all duration-300 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[var(--color-primary-dark)] shrink-0">
                      {itemNumber}
                    </span>

                    <span className="font-serif text-base sm:text-lg text-[var(--color-text-dark)] font-medium">
                      {item.question}
                    </span>
                  </div>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-light)] text-[var(--color-text-dark)]">
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[var(--color-primary-dark)]" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 pl-11 sm:pl-12">
                    <p className="text-xs sm:text-sm leading-relaxed text-[#544B43]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Show More Trigger */}
        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              setShowAll(!showAll);
              setOpenIndex(0);
            }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-dark)] hover:text-[var(--color-primary-dark)] transition-colors duration-300 cursor-pointer"
          >
            <span>{showAll ? "Show fewer FAQs" : "See more FAQs"}</span>
            <svg
              className={`h-3.5 w-3.5 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 max-w-4xl">
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-white p-6 sm:p-8 shadow-sm md:flex-row md:items-center">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-primary-dark)]">
                STILL HAVE QUESTIONS?
              </span>
              <h3 className="font-serif text-xl font-normal text-[var(--color-text-dark)]">
                Speak directly with our team
              </h3>
              <p className="text-xs text-[var(--color-text-muted)]">
                Ask about package inclusions, service pricing, or advance scheduling.
              </p>
            </div>

            <a
              href={getWhatsAppUrl(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer"
            >
              <span>Ask on WhatsApp</span>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};