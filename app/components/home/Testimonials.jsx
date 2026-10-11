"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { getSafeExternalUrl } from "@/app/lib/contact";

export const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const sliderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadTestimonialsData = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        const response = await fetch("/api/reviews", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch reviews: ${response.status}`);
        }

        const data = await response.json();
        if (
          !Array.isArray(data) ||
          data.some(
            (review) =>
              !review ||
              (typeof review.id !== "string" &&
                typeof review.id !== "number") ||
              typeof review.author !== "string" ||
              review.author.trim().length === 0 ||
              typeof review.text !== "string" ||
              review.text.trim().length === 0 ||
              !Number.isFinite(review.stars) ||
              review.stars < 1 ||
              review.stars > 5,
          )
        ) {
          throw new Error("Invalid reviews data");
        }

        setReviews(data);
      } catch (error) {
        if (!(error instanceof Error && error.name === "AbortError")) {
          console.error("Failed to load testimonials:", error);
          setHasError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadTestimonialsData();
    return () => controller.abort();
  }, [loadAttempt]);
useEffect(() => {
  const controller = new AbortController();

  const fetchBusiness = async () => {
    try {
      const response = await fetch("/api/business", {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch business: ${response.status}`);
      }

      const data = await response.json();
      setGoogleMapsUrl(getSafeExternalUrl(data.googleMapsUrl));
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Failed to load business details:", error);
      }
    }
  };

  fetchBusiness();

  return () => controller.abort();
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
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const distance = direction === "left" ? -scrollAmount : scrollAmount;
      if (prefersReducedMotion) {
        sliderRef.current.scrollLeft += distance;
      } else {
        sliderRef.current.scrollBy({ left: distance, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    handleScrollState(slider);
    const observer =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => handleScrollState(slider));
    observer?.observe(slider);
    const handleResize = () => handleScrollState(slider);
    window.addEventListener("resize", handleResize);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [reviews]);

  return (
    <section
      id="reviews"
      aria-label="Client Feedback & Reviews"
      className="bg-[var(--color-secondary)]/3   relative w-full max-w-full overflow-x-hidden  py-16 font-sans text-[var(--color-text-dark)] md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Header Block with Arched Client Portrait */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="shrink-0">
            <div className="relative h-[420px] w-[300px] overflow-hidden  rounded-2xl ring-2 bg-[var(--color-surface)]   ring-[var(--color-primary)] ring-offset-6 ring-offset-white shadow-2xl">
              <Image
                src="/images/gallery/walima-left-01.avif"
                alt="Aaira Khan Salon"
                fill
                sizes="280px"
                className="object-cover"
                loading="lazy"
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
              {googleMapsUrl && (
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-secondary)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text)] transition-all duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95"
                >
                  <span className="text-[var(--color-primary)]">★</span>
                  <span>View Google Reviews</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        {isLoading ? (
          <p
            className="mt-12 text-sm text-[var(--color-text-muted)]"
            role="status"
          >
            Loading client reviews...
          </p>
        ) : hasError ? (
          <div className="mt-12 flex flex-wrap items-center gap-3" role="alert">
            <p className="text-sm text-[var(--color-text-muted)]">
              Unable to load client reviews.
            </p>
            <button
              type="button"
              onClick={() => setLoadAttempt((attempt) => attempt + 1)}
              className="cursor-pointer whitespace-nowrap text-xs font-bold text-[var(--color-text-dark)] underline underline-offset-4"
            >
              Try Again
            </button>
          </div>
        ) : reviews.length === 0 ? (
          <p className="mt-12 text-sm text-[var(--color-text-muted)]">
            No client reviews are available right now.
          </p>
        ) : (
          <div className="relative mt-12">
            <div
              ref={sliderRef}
              onScroll={(e) => handleScrollState(e.currentTarget)}
              className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-4 pt-2"
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
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
