"use client";

import React, { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/app/lib/contact";

export const FAQ = () => {
  const [faqItems, setFaqItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const response = await fetch("/api/faqs");

        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }

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
      className="border-y border-[#F1E3E6] bg-[#FFF9FA] px-5 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6330]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight tracking-tight text-[#24171B] md:text-4xl">
            Planning Your Visit or Bridal Booking?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#625356] md:text-base">
            Quick answers about bridal packages, party makeup, hair and skin
            treatments, appointments, and bookings.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-9 max-w-5xl space-y-3">
          {visibleFAQs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-[#E9DFE2] bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left transition-colors hover:bg-[#FFF8F9] md:px-6"
                >
                  <span className="text-sm font-semibold text-[#24171B] md:text-base">
                    {item.question}
                  </span>

                  <span
                    className={`material-symbols-outlined shrink-0 text-[20px] text-[#974358] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div id={`faq-answer-${index}`} className="px-5 pb-5 md:px-6">
                    <div className="border-t border-[#F0E7E9] pt-4">
                      <p className="max-w-4xl text-sm leading-6 text-[#625356]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* See More */}
        <div className="mt-7">
          <button
            type="button"
            onClick={() => {
              setShowAll(!showAll);
              setOpenIndex(null);
            }}
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#974358] transition-colors hover:text-[#83384b]"
          >
            {showAll ? "Show fewer FAQs" : "See more FAQs"}

            <span
              className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                showAll ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              expand_more
            </span>
          </button>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-9 flex flex-col gap-6 rounded-2xl border border-[#E9DFE2] bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between md:p-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6330]">
              STILL HAVE QUESTIONS?
            </span>

            <h3 className="font-serif text-xl font-bold text-[#24171B] md:text-2xl">
              Speak directly with the salon team
            </h3>

            <p className="max-w-2xl text-sm leading-6 text-[#625356]">
              Ask about current prices, package inclusions, availability, or a
              specific beauty service.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#974358] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#83384b]"
          >
            Ask on WhatsApp

            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};