"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");
  const sliderRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const loadTestimonialsData = async () => {
      try {
        const [reviewsResponse, businessResponse] = await Promise.all([
          fetch("/api/reviews"),
          fetch("/api/business"),
        ]);

        if (!reviewsResponse.ok || !businessResponse.ok) return;

        const [reviewsData, businessData] = await Promise.all([
          reviewsResponse.json(),
          businessResponse.json(),
        ]);

        setReviews(reviewsData);
        setGoogleMapsUrl(businessData.googleMapsUrl);
      } catch (error) {
        console.error("Failed to load testimonials:", error);
      }
    };

    loadTestimonialsData();
  }, []);

  const handleScrollState = (element) => {
    if (!element) return;
    const { scrollLeft, scrollWidth, clientWidth } = element;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
  };

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.85;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="reviews"
      aria-label="Client Feedback & Reviews"
      className="relative w-full max-w-full overflow-x-hidden bg-[var(--color-surface-light)] py-16 font-sans text-[var(--color-text-dark)] md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Header Block with Arched Client Portrait */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="shrink-0">
            <div className="relative h-[450px] w-[280px] overflow-hidden rounded-t-[130px] rounded-b-none bg-[var(--color-surface)] ring-2 ring-[var(--color-primary)] ring-offset-4 ring-offset-white shadow-2xl">
              <Image
                src="/images/gallery/bridal-03.png"
                alt="Aaira Khan Salon"
                fill
                sizes="280px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
              CLIENT REVIEWS
            </span>

            <h2 className="font-serif text-3xl font-normal leading-tight text-[var(--color-text-dark)] sm:text-4xl md:text-5xl">
              What clients are saying
            </h2>

            <p className="text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
              Real feedback shared by clients after visiting our salon for
              bridal makeup, hair styling, and skincare services.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <a
                href={googleMapsUrl || "https://maps.google.com"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-secondary)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text)] transition-all duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95"
              >
                <span className="text-[var(--color-primary)]">★</span>
                <span>View Google Reviews</span>
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        {reviews.length > 0 && (
          <div className="relative mt-12">
            <div
              ref={sliderRef}
              onScroll={(e) => handleScrollState(e.currentTarget)}
              className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-4 pt-2"
            >
              {reviews.map((review, index) => (
                <div
                  key={review.id || index}
                  className="flex h-full w-[280px] shrink-0 transform-none flex-col justify-between rounded-2xl bg-[var(--color-surface-light)] p-6 shadow-sm sm:w-[340px]"
                >
                  <div>
                    <div className="text-3xl font-serif text-[var(--color-primary-dark)] leading-none mb-2">
                      “
                    </div>

                    <p className="line-clamp-3 text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
                      {review.text}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 pt-4">
                    <div className="h-9 w-9 rounded-full bg-[var(--color-secondary)] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {review.author?.[0] || "C"}
                    </div>

                    <div className="truncate">
                      <h3 className="truncate font-serif text-base font-bold text-[var(--color-text-dark)] sm:text-lg">
                        {review.author}
                      </h3>
                      <p className="text-[10px] text-[var(--color-text-muted)] truncate mt-0.5">
                        Google Review
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons (Matching Gallery.jsx) */}
            <div className="mt-8 flex items-center justify-end gap-3 pt-4 border-t border-[var(--color-border-light)]/40">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out active:scale-95 ${
                  !canScrollLeft
                    ? "opacity-30 cursor-not-allowed bg-white text-[var(--color-text-muted)]"
                    : "bg-[var(--color-primary)] text-[var(--color-secondary)] hover:opacity-90 cursor-pointer shadow-sm"
                }`}
                aria-label="Previous Review"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out active:scale-95 ${
                  !canScrollRight
                    ? "opacity-30 cursor-not-allowed bg-white text-[var(--color-text-muted)]"
                    : "bg-white text-[var(--color-text-dark)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] cursor-pointer shadow-sm"
                }`}
                aria-label="Next Review"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
