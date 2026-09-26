"use client";

import React, { useEffect, useState } from "react";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);

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

  return (
    <section
      id="gallery"
      className="border-y border-[#F1E3E6] bg-[#FFF9FA] px-5 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6330]">
            OUR WORK
          </span>

          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight tracking-tight text-[#24171B] md:text-4xl">
            See the Experience
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#625356] md:text-base">
            A glimpse of our salon, beauty services, and the work we create for
            our clients.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {galleryImages.length > 0 && (
            <div className="group col-span-2 row-span-2 overflow-hidden rounded-2xl border border-[#E9DFE2] bg-[#F5EEEE]">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="h-full min-h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:min-h-[440px]"
              />
            </div>
          )}

          {galleryImages.slice(1).map((image, index) => (
            <div
              key={index}
              className="group aspect-square overflow-hidden rounded-2xl border border-[#E9DFE2] bg-[#F5EEEE]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}