"use client";

import React, { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/app/lib/contact";

export const FAQ = () => {
  const [faqItems, setFaqItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadFAQs = async () => {
      const response = await fetch("/api/faqs");
      const data = await response.json();

      setFaqItems(data);
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
      className="w-full border-y border-[#F5DCE2] bg-[#FFF0F2]/70 px-5 py-14 md:px-12 md:py-16"
    >
      <div className="mx-auto max-w-[1380px] space-y-8 md:space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#775A19]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="font-serif text-3xl font-bold leading-tight text-[#25181C] md:text-4xl">
            Planning Your Visit or Bridal Booking?
          </h2>

          <p className="max-w-2xl text-sm leading-6 text-[#382A2E]">
            Quick answers about bridal packages, party makeup, hair and skin
            treatments, appointments, and bookings.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-6xl space-y-3">
          {visibleFAQs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left transition-colors hover:bg-[#FFF8F9] md:px-6"
                >
                  <span className="text-sm font-semibold text-[#25181C] md:text-base">
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
                    <div className="border-t border-stone-100 pt-4">
                      <p className="max-w-4xl text-sm leading-6 text-[#382A2E]">
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
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => {
              setShowAll(!showAll);
              setOpenIndex(null);
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#974358] transition-colors hover:text-[#83384b]"
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
        <div className="flex flex-col gap-6 rounded-2xl border border-[#EBD5DA] bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between md:p-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#775A19]">
              STILL HAVE QUESTIONS?
            </span>

            <h3 className="font-serif text-xl font-bold text-[#25181C] md:text-2xl">
              Speak directly with the salon team
            </h3>

            <p className="max-w-2xl text-sm leading-6 text-[#382A2E]">
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
            <span
              className="material-symbols-outlined text-[16px]"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
