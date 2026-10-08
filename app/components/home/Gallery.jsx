"use client";

import React, { useEffect, useState, useMemo } from "react";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          throw new Error("Failed to fetch gallery");
        }
        const data = await response.json();
        setGalleryImages(data);
      } catch (error) {
        console.error("Failed to load gallery:", error);
      }
    };

    loadGallery();
  }, []);

  const handleScrollState = (element) => {
    if (!element) return;
    const { scrollLeft, scrollWidth, clientWidth } = element;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
  };

  const handleScroll = (direction, e) => {
    const container = e.currentTarget
      .closest("section")
      .querySelector(".gallery-track");

    if (container) {
      const scrollAmount = container.clientWidth * 0.85;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Group images into 5-card editorial clusters
  const imageGroups = useMemo(() => {
    const categoryTitles = [
      { id: "01", name: "Royal Barat & Walima Bridals" },
      { id: "02", name: "Mehndi & Festive Glam" },
      { id: "03", name: "Hair Styling & Transformations" },
      { id: "04", name: "Skin Care & Studio Treatments" },
    ];

    const groups = [];
    for (let i = 0; i < galleryImages.length; i += 5) {
      const category =
        categoryTitles[Math.floor(i / 5) % categoryTitles.length];
      groups.push({
        meta: category,
        images: galleryImages.slice(i, i + 5),
      });
    }
    return groups;
  }, [galleryImages]);

  const openWhatsAppInquiry = (title) => {
    const message = encodeURIComponent(
      `Hello Aaira Khan Salon! I am interested in consulting about the look: "${title || "Bridal / Salon Service"}".`,
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <section
      id="gallery"
      aria-label="Aaira Khan Salon Portfolio"
      className="relative w-full bg-[#FAF9F6] py-20 text-[#1A1A1A] antialiased md:py-28 font-sans"
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

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-14">
        {/* Minimalist Editorial Header */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-neutral-200/80 pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Portfolio
            </span>
            <h2 className="mt-2 font-serif text-3xl font-light leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl">
              Beauty, Styled Our Way
            </h2>
          </div>

          <p className="max-w-md text-xs leading-relaxed tracking-wide text-neutral-500">
            A curated lookbook of signature bridal makeovers, intricate hair
            artistry, and festive styling crafted at Aaira Khan Salon & Studio.
          </p>
        </div>

        {/* Gallery Content Track */}
        {galleryImages.length === 0 ? (
          <div className="mx-auto mt-20 flex min-h-[240px] max-w-xl items-center justify-center bg-white/60 text-center text-xs font-light tracking-widest uppercase text-neutral-400">
            Loading Portfolio...
          </div>
        ) : (
          <div className="mt-12 relative">
            <div
              onScroll={(e) => handleScrollState(e.currentTarget)}
              ref={(el) => {
                if (el) handleScrollState(el);
              }}
              className="gallery-track no-scrollbar snap-x-mandatory flex gap-12 overflow-x-auto scroll-smooth pb-6 pt-2"
            >
              {imageGroups.map((group, groupIdx) => (
                <div
                  key={groupIdx}
                  className="snap-center-item flex-shrink-0 flex flex-col justify-between w-[85vw] max-w-[1240px]"
                >
                  {/* 5-Card Editorial Layout */}
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                    {/* Left Wing (2 Stacked Cards) */}
                    {group.images.slice(0, 2).length > 0 && (
                      <div className="flex flex-col gap-4 sm:gap-6 w-[28%]">
                        {group.images.slice(0, 2).map((img, idx) => (
                          <div
                            key={img.src || idx}
                            onClick={() =>
                              openWhatsAppInquiry(img.title || img.alt)
                            }
                            className="group relative w-full aspect-[4/5] overflow-hidden bg-neutral-100 cursor-pointer"
                          >
                            <img
                              src={img.src}
                              alt={img.alt || "Aaira Khan Salon Portfolio"}
                              loading="lazy"
                              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />

                            <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md px-3.5 py-2.5 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 border-t border-neutral-200/50">
                              <p className="text-[11px] font-medium text-neutral-900 truncate">
                                {img.title || "Inquire Look"}
                              </p>
                              {img.description && (
                                <p className="text-[10px] text-neutral-500 truncate mt-0.5">
                                  {img.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Center Hero Column */}
                    {group.images[2] && (
                      <div className="w-[44%]">
                        <div
                          onClick={() =>
                            openWhatsAppInquiry(
                              group.images[2].title || group.images[2].alt,
                            )
                          }
                          className="group relative w-full aspect-[3/4] overflow-hidden bg-neutral-100 cursor-pointer shadow-sm"
                        >
                          <img
                            src={group.images[2].src}
                            alt={
                              group.images[2].alt ||
                              "Aaira Khan Salon Featured Work"
                            }
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />

                          <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md px-4 py-3 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 border-t border-neutral-200/50">
                            <p className="text-xs font-serif font-medium text-neutral-900 truncate">
                              {group.images[2].title || "Featured Look"}
                            </p>
                            {group.images[2].description && (
                              <p className="text-[11px] text-neutral-500 truncate mt-0.5">
                                {group.images[2].description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Right Wing (2 Stacked Cards) */}
                    {group.images.slice(3, 5).length > 0 && (
                      <div className="flex flex-col gap-4 sm:gap-6 w-[28%]">
                        {group.images.slice(3, 5).map((img, idx) => (
                          <div
                            key={img.src || idx}
                            onClick={() =>
                              openWhatsAppInquiry(img.title || img.alt)
                            }
                            className="group relative w-full aspect-[4/5] overflow-hidden bg-neutral-100 cursor-pointer"
                          >
                            <img
                              src={img.src}
                              alt={img.alt || "Aaira Khan Salon Portfolio"}
                              loading="lazy"
                              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />

                            <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md px-3.5 py-2.5 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 border-t border-neutral-200/50">
                              <p className="text-[11px] font-medium text-neutral-900 truncate">
                                {img.title || "Inquire Look"}
                              </p>
                              {img.description && (
                                <p className="text-[10px] text-neutral-500 truncate mt-0.5">
                                  {img.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Category Subcaption Line */}
                  <div className="mt-6 flex items-center justify-between border-t border-neutral-200/60 pt-4 px-1">
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                      {group.meta.id} — {group.meta.name}
                    </span>
                    <span className="text-[11px] font-light tracking-wider text-neutral-400 hidden sm:inline-block">
                      Click image to inquire on WhatsApp
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial Footer Navigation */}
            <div className="mt-8 flex items-center justify-between border-t border-neutral-200/80 pt-6">
              <div className="text-[11px] font-light tracking-widest uppercase text-neutral-400">
                Aaira Khan Studio Collection
              </div>

              {/* Minimal SVG Controls */}
              <div className="flex items-center gap-3">
                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={(e) => handleScroll("left", e)}
                  disabled={!canScrollLeft}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 shadow-sm ${
                    !canScrollLeft
                      ? "opacity-30 cursor-not-allowed border border-neutral-200 bg-neutral-100 text-neutral-400"
                      : "bg-[#D4AF37] text-white hover:opacity-90 active:scale-95 cursor-pointer"
                  }`}
                  aria-label="Scroll Left"
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

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={(e) => handleScroll("right", e)}
                  disabled={!canScrollRight}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 shadow-sm ${
                    !canScrollRight
                      ? "opacity-30 cursor-not-allowed border border-neutral-200 bg-neutral-100 text-neutral-400"
                      : "border border-neutral-300 bg-white text-neutral-700 hover:border-[#D4AF37] hover:text-[#D4AF37] active:scale-95 cursor-pointer"
                  }`}
                  aria-label="Scroll Right"
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
          </div>
        )}
      </div>
    </section>
  );
}
