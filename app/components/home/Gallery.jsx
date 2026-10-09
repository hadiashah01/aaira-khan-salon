
"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/app/lib/contact";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadGallery = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch("/api/gallery", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch gallery");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid gallery data");
        }

        setGalleryImages(
          data.filter(
            (image) =>
              image &&
              typeof image.src === "string" &&
              image.src.trim().length > 0,
          ),
        );
      } catch (error) {
        if (!(error instanceof Error && error.name === "AbortError")) {
          console.error("Failed to load gallery:", error);
          setHasError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadGallery();

    return () => controller.abort();
  }, [loadAttempt]);

  // Short category names for mobile filter pills.
  const categories = [
    { label: "All", filterKey: "All" },
    {
      label: "Bridals",
      filterKey: "Royal Barat & Walima Bridals",
    },
    {
      label: "Mehndi & Festive",
      filterKey: "Mehndi & Festive Glam",
    },
    {
      label: "Hair Styling",
      filterKey: "Hair Styling & Transformations",
    },
    {
      label: "Skin Care",
      filterKey: "Skin Care & Studio Treatments",
    },
  ];

  const handleScrollState = (element) => {
    if (!element) return;

    const { scrollLeft, scrollWidth, clientWidth } = element;

    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - 2,
    );
  };

  const handleScroll = (direction, e) => {
    const section = e.currentTarget.closest("section");
    const container = section?.querySelector(".gallery-track");

    if (container) {
      const scrollAmount = container.clientWidth * 0.85;

      container.scrollBy({
        left:
          direction === "left"
            ? -scrollAmount
            : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Filter images without changing their original order.
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter(
      (img) => img.category === activeCategory,
    );
  }, [galleryImages, activeCategory]);

  // Preserve the existing 5-image grouping and sequence.
  // Use the first image's actual category for the group caption.
  const imageGroups = useMemo(() => {
    const groups = [];

    for (let i = 0; i < filteredImages.length; i += 5) {
      const images = filteredImages.slice(i, i + 5);
      const categoryName = images[0]?.category || "Gallery";

      groups.push({
        meta: {
          id: String(groups.length + 1).padStart(2, "0"),
          name: categoryName,
        },
        images,
      });
    }

    return groups;
  }, [filteredImages]);

  // Keep the scroll controls accurate when the category changes.
  useEffect(() => {
    const container = document.querySelector(".gallery-track");

    if (!container) return;

    container.scrollTo({
      left: 0,
      behavior: "auto",
    });

    const frameId = window.requestAnimationFrame(() =>
      handleScrollState(container),
    );

    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, imageGroups.length]);

  const openWhatsAppInquiry = (title) => {
    const message =
      `Hello Aaira Khan Salon! I am interested in consulting ` +
      `about the look: "${title || "Bridal / Salon Service"}".`;

    window.open(
      getWhatsAppUrl(message),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="gallery"
      aria-label="Aaira Khan Salon Portfolio"
      className="relative w-full max-w-full overflow-x-hidden bg-[var(--color-surface-light)] py-16 font-sans text-[var(--color-text-dark)] antialiased md:py-24"
    >
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .snap-x-mandatory {
          scroll-snap-type: x mandatory;
        }

        .snap-center-item {
          scroll-snap-align: center;
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1400px] overflow-x-hidden px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
              Portfolio
            </span>

            <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-4xl md:text-5xl">
              Beauty, Styled Our Way
            </h2>
          </div>

          <p className="max-w-md text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
            Explore our studio lookbook featuring bridal makeovers,
            festive styling, and hair transformations created at
            Aaira Khan Salon.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1">
          {categories.map((cat) => {
            const isActive =
              activeCategory === cat.filterKey;

            return (
              <button
                key={cat.label}
                type="button"
                onClick={() =>
                  setActiveCategory(cat.filterKey)
                }
                aria-pressed={isActive}
                className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold tracking-wider transition-all duration-300 ease-out active:scale-95 ${
                  isActive
                    ? "bg-[var(--color-primary)] text-[var(--color-secondary)]"
                    : "bg-[var(--color-surface-light)] text-[var(--color-text-dark)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Content */}
        {isLoading ? (
          <div className="mx-auto mt-16 flex min-h-[220px] max-w-xl items-center justify-center rounded-2xl bg-[var(--color-surface-light)] px-6 text-center text-xs font-light uppercase tracking-widest text-[var(--color-text-dark)]">
            Loading Portfolio...
          </div>
        ) : hasError ? (
          <div
            className="mx-auto mt-16 flex min-h-[220px] max-w-xl flex-col items-center justify-center gap-4 rounded-2xl bg-[var(--color-surface-light)] px-6 text-center"
            role="alert"
          >
            <p className="text-sm text-[var(--color-text-dark)]">
              Unable to load the portfolio right now.
            </p>

            <button
              type="button"
              onClick={() => setLoadAttempt((attempt) => attempt + 1)}
              className="cursor-pointer whitespace-nowrap text-xs font-bold text-[var(--color-text-dark)] underline underline-offset-4 transition-all duration-300 ease-out hover:text-[var(--color-primary-dark)] active:scale-95"
            >
              Try Again
            </button>
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="mx-auto mt-16 flex min-h-[220px] max-w-xl items-center justify-center rounded-2xl bg-[var(--color-surface-light)] px-6 text-center text-xs uppercase tracking-widest text-[var(--color-text-dark)]">
            No portfolio images available in this category.
          </div>
        ) : (
          <div className="relative mt-10">
            <div
              onScroll={(e) =>
                handleScrollState(e.currentTarget)
              }
              ref={(el) => {
                if (el) handleScrollState(el);
              }}
              className="gallery-track no-scrollbar snap-x-mandatory flex items-stretch gap-10 overflow-x-auto scroll-smooth pb-6 pt-2"
            >
              {imageGroups.map((group, groupIdx) => (
                <div
                  key={`${group.meta.name}-${groupIdx}`}
                  className="snap-center-item flex w-[85vw] max-w-[1240px] shrink-0 flex-col justify-between"
                >
                  {/* Original 5-Image Editorial Layout */}
                  {group.images.length < 5 ? (
                    <div className="flex w-full items-center justify-center gap-4 sm:gap-6 md:gap-8">
                      {group.images.map((img, idx) => (
                        <button
                          key={img.src || idx}
                          type="button"
                          onClick={() =>
                            openWhatsAppInquiry(img.title || img.alt)
                          }
                          aria-label={`Inquire about ${img.title || img.alt || "this look"} on WhatsApp`}
                          className={`group relative block transform-none cursor-pointer overflow-hidden rounded-2xl bg-[var(--color-surface-soft)] text-left transition-colors duration-300 ease-out ${
                            group.images.length === 1
                              ? "aspect-[3/4] w-[44%]"
                              : group.images.length === 2
                                ? "aspect-[4/5] w-[40%]"
                                : "aspect-[4/5] w-[28%]"
                          }`}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt || "Aaira Khan Salon Portfolio"}
                            fill
                            sizes="(max-width: 640px) 36vw, 24vw"
                            className="object-cover object-top"
                          />
                          <div className="absolute inset-x-0 bottom-0 translate-y-full transform bg-[var(--color-surface-light)] px-3.5 py-2.5 transition-all duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0">
                            <p className="truncate text-[11px] font-bold text-[var(--color-text-dark)]">
                              {img.title || "Inquire Look"}
                            </p>
                            {img.description && (
                              <p className="mt-0.5 truncate text-[10px] text-[var(--color-text-dark)]">
                                {img.description}
                              </p>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                    {/* Left Wing */}
                    {group.images.slice(0, 2).length > 0 && (
                      <div className="flex min-w-0 flex-[1] flex-col gap-4 sm:gap-6">
                        {group.images
                          .slice(0, 2)
                          .map((img, idx) => (
                            <button
                              key={img.src || idx}
                              type="button"
                              onClick={() =>
                                openWhatsAppInquiry(
                                  img.title || img.alt,
                                )
                              }
                              aria-label={`Inquire about ${img.title || img.alt || "this look"} on WhatsApp`}
                              className="group relative block aspect-[4/5] w-full transform-none cursor-pointer overflow-hidden rounded-2xl bg-[var(--color-surface-soft)] text-left"
                            >
                              <Image
                                src={img.src}
                                alt={
                                  img.alt ||
                                  "Aaira Khan Salon Portfolio"
                                }
                                fill
                                sizes="(max-width: 640px) 44vw, (max-width: 1024px) 24vw, 20vw"
                                className="object-cover object-top"
                              />

                              <div className="absolute inset-x-0 bottom-0 translate-y-full transform bg-[var(--color-surface-light)] px-3.5 py-2.5 transition-all duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0">
                                <p className="truncate text-[11px] font-bold text-[var(--color-text-dark)]">
                                  {img.title || "Inquire Look"}
                                </p>

                                {img.description && (
                                  <p className="mt-0.5 truncate text-[10px] text-[var(--color-text-dark)]">
                                    {img.description}
                                  </p>
                                )}
                              </div>
                            </button>
                          ))}
                      </div>
                    )}

                    {/* Center Hero Image */}
                    {group.images[2] && (
                      <div className="min-w-0 flex-[1.57]">
                        <button
                          type="button"
                          onClick={() =>
                            openWhatsAppInquiry(
                              group.images[2].title ||
                                group.images[2].alt,
                            )
                          }
                          aria-label={`Inquire about ${group.images[2].title || group.images[2].alt || "this featured look"} on WhatsApp`}
                          className="group relative block aspect-[3/4] w-full transform-none cursor-pointer overflow-hidden rounded-2xl bg-[var(--color-surface-soft)] text-left"
                        >
                          <Image
                            src={group.images[2].src}
                            alt={
                              group.images[2].alt ||
                              "Aaira Khan Salon Featured Work"
                            }
                            fill
                            sizes="(max-width: 640px) 88vw, (max-width: 1024px) 38vw, 32vw"
                            className="object-cover object-top"
                          />

                          <div className="absolute inset-x-0 bottom-0 translate-y-full transform bg-[var(--color-surface-light)] px-4 py-3 transition-all duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0">
                            <p className="truncate font-serif text-xs font-bold text-[var(--color-text-dark)]">
                              {group.images[2].title ||
                                "Featured Look"}
                            </p>

                            {group.images[2].description && (
                              <p className="mt-0.5 truncate text-[11px] text-[var(--color-text-dark)]">
                                {group.images[2].description}
                              </p>
                            )}
                          </div>
                        </button>
                      </div>
                    )}

                    {/* Right Wing */}
                    {group.images.slice(3, 5).length > 0 && (
                      <div className="flex min-w-0 flex-[1] flex-col gap-4 sm:gap-6">
                        {group.images
                          .slice(3, 5)
                          .map((img, idx) => (
                            <button
                              key={img.src || idx}
                              type="button"
                              onClick={() =>
                                openWhatsAppInquiry(
                                  img.title || img.alt,
                                )
                              }
                              aria-label={`Inquire about ${img.title || img.alt || "this look"} on WhatsApp`}
                              className="group relative block aspect-[4/5] w-full transform-none cursor-pointer overflow-hidden rounded-2xl bg-[var(--color-surface-soft)] text-left"
                            >
                              <Image
                                src={img.src}
                                alt={
                                  img.alt ||
                                  "Aaira Khan Salon Portfolio"
                                }
                                fill
                                sizes="(max-width: 640px) 44vw, (max-width: 1024px) 24vw, 20vw"
                                className="object-cover object-top"
                              />

                              <div className="absolute inset-x-0 bottom-0 translate-y-full transform bg-[var(--color-surface-light)] px-3.5 py-2.5 transition-all duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0">
                                <p className="truncate text-[11px] font-bold text-[var(--color-text-dark)]">
                                  {img.title || "Inquire Look"}
                                </p>

                                {img.description && (
                                  <p className="mt-0.5 truncate text-[10px] text-[var(--color-text-dark)]">
                                    {img.description}
                                  </p>
                                )}
                              </div>
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                  )}

                  {/* Caption: actual category of the first image */}
                  <div className="mt-6 flex min-h-14 items-center justify-between gap-4 px-1 pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]">
                      {group.meta.id} {group.meta.name}
                    </span>
                    <span className="hidden text-[11px] font-light tracking-wider text-[var(--color-text-dark)] sm:inline-block">
                      Click image to inquire on WhatsApp
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="mt-8 flex min-h-12 items-center justify-between gap-4 pt-4">
              <div className="text-[11px] font-light uppercase tracking-widest text-[var(--color-text-dark)]">
                Aaira Khan Studio Collection
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => handleScroll("left", e)}
                  disabled={!canScrollLeft}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out active:scale-95 ${
                    !canScrollLeft
                      ? "cursor-not-allowed bg-[var(--color-surface-light)] text-[var(--color-text-muted)] opacity-60"
                      : "cursor-pointer bg-[var(--color-primary)] text-[var(--color-secondary)] hover:bg-[var(--color-primary-dark)]"
                  }`}
                  aria-label="Scroll Left"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
                  onClick={(e) => handleScroll("right", e)}
                  disabled={!canScrollRight}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-out active:scale-95 ${
                    !canScrollRight
                      ? "cursor-not-allowed bg-[var(--color-surface-light)] text-[var(--color-text-muted)] opacity-60"
                      : "cursor-pointer bg-[var(--color-surface-light)] text-[var(--color-text-dark)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)]"
                  }`}
                  aria-label="Scroll Right"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
          </div>
        )}
      </div>
    </section>
  );
}
