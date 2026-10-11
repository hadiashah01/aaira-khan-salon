"use client";

import React, { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/app/lib/contact";

export const FAQ = () => {
  const [faqItems, setFaqItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadBusiness = async () => {
      try {
        const response = await fetch("/api/business", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch business data");
        }

        const data = await response.json();
        setBusiness(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to load business data:", error);
        }
      }
    };

    loadBusiness();

    return () => controller.abort();
  }, []);
  useEffect(() => {
    const controller = new AbortController();

    const loadFAQs = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        const response = await fetch("/api/faqs", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch FAQs: ${response.status}`);
        }

        const data = await response.json();
        if (
          !Array.isArray(data) ||
          data.some(
            (item) =>
              !item ||
              typeof item.question !== "string" ||
              item.question.trim().length === 0 ||
              typeof item.answer !== "string" ||
              item.answer.trim().length === 0,
          )
        ) {
          throw new Error("Invalid FAQ data");
        }

        setFaqItems(data);
      } catch (error) {
        if (!(error instanceof Error && error.name === "AbortError")) {
          console.error("Failed to load FAQs:", error);
          setHasError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadFAQs();

    return () => controller.abort();
  }, [loadAttempt]);

  const generalMessage =
    "Hello Aaira Khan Salon, I have a question about your services and packages.";

  const visibleFAQs = showAll ? faqItems : faqItems.slice(0, 4);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative w-full max-w-full overflow-x-hidden bg-[var(--color-surface-light)] py-16 font-sans text-[var(--color-text-dark)] antialiased md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="font-serif text-3xl font-normal leading-tight text-[var(--color-text-dark)] sm:text-4xl md:text-5xl">
            Planning Your Visit or Booking?
          </h2>

          <p className="text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
            Quick answers regarding appointments, bridal bookings, party makeup,
            and studio policies.
          </p>
        </div>

        {/* Clean Accordion Cards List */}
        {isLoading ? (
          <div className="mt-10 flex min-h-[180px] max-w-4xl items-center justify-center rounded-2xl bg-[var(--color-surface-light)] px-6 text-center text-sm text-[var(--color-text-dark)]">
            Loading FAQs...
          </div>
        ) : hasError ? (
          <div
            className="mt-10 flex min-h-[180px] max-w-4xl flex-col items-center justify-center gap-4 rounded-2xl bg-[var(--color-surface-light)] px-6 text-center"
            role="alert"
          >
            <p className="text-sm text-[var(--color-text-dark)]">
              Unable to load FAQs right now.
            </p>
            <button
              type="button"
              onClick={() => setLoadAttempt((attempt) => attempt + 1)}
              className="cursor-pointer whitespace-nowrap text-xs font-bold text-[var(--color-text-dark)] underline underline-offset-4 transition-all duration-300 ease-out hover:text-[var(--color-primary-dark)] active:scale-95"
            >
              Try Again
            </button>
          </div>
        ) : faqItems.length === 0 ? (
          <div className="mt-10 flex min-h-[180px] max-w-4xl items-center justify-center rounded-2xl bg-[var(--color-surface-light)] px-6 text-center text-sm text-[var(--color-text-dark)]">
            No FAQs are available right now.
          </div>
        ) : (
          <div className="mt-10 max-w-4xl space-y-3">
            {visibleFAQs.map((item, index) => {
              const isOpen = openIndex === index;
              const itemNumber = (index + 1).toString().padStart(2, "0");
              const triggerId = `faq-trigger-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <div
                  key={item.question}
                  className="flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-[var(--color-surface-light)] text-[var(--color-text-dark)] shadow-sm transition-all duration-300 ease-out"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="shrink-0 font-sans text-xs font-bold text-[var(--color-primary-dark)]">
                        {itemNumber}
                      </span>

                      <span className="font-serif text-base font-bold text-[var(--color-text-dark)] sm:text-lg">
                        {item.question}
                      </span>
                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-background)] text-[var(--color-text)]">
                      <svg
                        className={`h-4 w-4 transition-all duration-300 ease-out ${
                          isOpen ? "rotate-180 text-[var(--color-primary)]" : ""
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

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!isOpen}
                    className="px-5 pb-6 pt-1 sm:px-6 pl-11 sm:pl-12"
                  >
                    <p className="text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Show More Trigger */}
        {!isLoading && !hasError && faqItems.length > 4 && (
          <div className="mt-6">
            <button
              type="button"
              onClick={() => {
                setShowAll(!showAll);
                setOpenIndex(0);
              }}
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-dark)] transition-all duration-300 ease-out hover:text-[var(--color-secondary)] active:scale-95"
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
        )}

        {/* Bottom Banner */}
        <div className="mt-12 max-w-4xl">
          <div className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-[var(--color-surface-light)] p-6 shadow-sm sm:p-8 md:flex-row md:items-center">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-primary-dark)]">
                STILL HAVE QUESTIONS?
              </span>
              <h3 className="font-serif text-base font-bold text-[var(--color-text-dark)] sm:text-lg">
                Speak directly with our team
              </h3>
              <p className="line-clamp-2 text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
                Ask about package inclusions, service pricing, or advance
                scheduling.
              </p>
            </div>

            <a
              aria-disabled={!business?.whatsapp}
              tabIndex={business?.whatsapp ? 0 : -1}
              href={
                business?.whatsapp
                  ? getWhatsAppUrl(business.whatsapp, generalMessage)
                  : undefined
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-secondary)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text)] transition-all duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95"
            >
              <span>Ask on WhatsApp</span>
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
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
