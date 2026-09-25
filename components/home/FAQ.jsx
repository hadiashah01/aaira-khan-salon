"use client";

import React, { useState } from "react";
import {faqItems,whatsappBase} from "@/app/data/faqs"
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const generalMessage = encodeURIComponent(
    "Hello Aaira Khan Salon, I have a question about your services and packages.",
  );

  const visibleFAQs = showAll ? faqItems : faqItems.slice(0, 4);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#FFF0F2]/70 px-5 md:px-12 py-14 md:py-16 border-y border-[#F5DCE2]"
    >
      <div className="max-w-[1380px] mx-auto space-y-8 md:space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#25181C] leading-tight">
            Planning Your Visit or Bridal Booking?
          </h2>

          <p className="text-sm text-[#382A2E] leading-6 max-w-2xl">
            Quick answers about bridal packages, party makeup, hair and skin
            treatments, appointments, and bookings.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-6.5xl mx-auto space-y-3">
          {visibleFAQs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full min-h-16 px-5 md:px-6 py-4 flex items-center justify-between gap-5 text-left hover:bg-[#FFF8F9] transition-colors"
                >
                  <span className="text-sm md:text-base font-semibold text-[#25181C]">
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
                  <div id={`faq-answer-${index}`} className="px-5 md:px-6 pb-5">
                    <div className="pt-4 border-t border-stone-100">
                      <p className="text-sm text-[#382A2E] leading-6 max-w-4xl">
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
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#974358] hover:text-[#83384b] transition-colors"
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
        <div className="bg-white border border-[#EBD5DA] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#775A19]">
              STILL HAVE QUESTIONS?
            </span>

            <h3 className="font-serif text-xl md:text-2xl font-bold text-[#25181C]">
              Speak directly with the salon team
            </h3>

            <p className="text-sm text-[#382A2E] leading-6 max-w-2xl">
              Ask about current prices, package inclusions, availability, or a
              specific beauty service.
            </p>
          </div>

          <a
            href={`${whatsappBase}${generalMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 shrink-0 bg-[#974358] text-white text-xs font-bold px-5 py-3 rounded-lg hover:bg-[#83384b] transition-colors inline-flex items-center justify-center gap-2"
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
