"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/app/lib/contact";

export const ServicesMenu = () => {
  const [services, setServices] = useState([]);

  const carouselRef = useRef(null);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services");

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await response.json();

        setServices(data.services || []);
      } catch (error) {
        console.error("Failed to load services:", error);
      }
    };

    fetchServices();
  }, []);

  const displayServices = services.length > 0 ? [...services, ...services] : [];

  // -----------------------------
  // Drag Scroll
  // -----------------------------

  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;

    setIsMouseDown(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown || !carouselRef.current) return;

    e.preventDefault();

    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="services-catalog"
      aria-label="Aaira Khan Salon Services & Treatment Catalog"
      className="relative w-full overflow-hidden bg-[var(--color-background)] py-16 text-[var(--color-text)] antialiased selection:bg-[var(--color-primary)] selection:text-[var(--color-secondary)] md:py-24"
    >
      <div className="mx-auto max-w-[1380px] px-5 font-sans sm:px-8 md:px-12 lg:px-16">

        {/* Section Masthead */}
        <div className="flex flex-col items-center gap-6 pb-8 text-center md:pb-10">
          <div className="inline-flex items-center gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-primary)]">
              SERVICES
            </span>

            <span
              className="h-px w-8 bg-[var(--color-primary)]/40"
              aria-hidden="true"
            />
          </div>

          <div className="max-w-3xl space-y-3">
            <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-[var(--color-text)] sm:text-4xl md:text-[2.75rem]">
              Beauty services for every occasion
            </h2>

            <p className="mx-auto max-w-2xl text-sm font-normal tracking-wide leading-relaxed text-[var(--color-text-muted)] sm:text-base sm:leading-7">
              Explore the salon&apos;s main service categories and contact the
              studio for exact rates and availability.
            </p>
          </div>
        </div>

        {/* Services Carousel */}
        {services.length === 0 ? (
          <div className="flex min-h-[240px] items-center justify-center bg-[var(--color-surface)] p-8 text-center text-sm font-light text-[var(--color-text-muted)]">
            Loading treatment portfolio...
          </div>
        ) : (
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`scrollbar-none mt-12 flex gap-7 overflow-x-auto py-4 ${
              isMouseDown ? "cursor-grabbing select-none" : "cursor-default"
            }`}
          >
            {displayServices.map((item, index) => {
              const whatsappMessage = `Hello Aaira Khan Salon, I would like to inquire about ${item.title}.`;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="group flex w-[260px] shrink-0 flex-col items-center text-center sm:w-[290px]"
                >
                  {/* Service Image (Border Removed) */}
                  <div
                    className={`relative h-[380px] w-full overflow-hidden bg-[var(--color-surface-soft)] transition-[border-radius] duration-500 ease-out ${
                      index % 2 === 0
                        ? "rounded-t-full group-hover:rounded-b-full"
                        : "rounded-b-full group-hover:rounded-t-full"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 260px, 290px"
                      draggable={false}
                      className="object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-serif text-[1.35rem] font-normal md:text-nowrap tracking-wide text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-primary)]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 line-clamp-3 text-sm font-normal tracking-wide leading-relaxed text-[var(--color-text-muted)]">
                    {item.description}
                  </p>

                  {/* WhatsApp Action */}
                  <a
                    href={getWhatsAppUrl(whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors duration-200 hover:text-[var(--color-primary-dark)]"
                  >
                    <span>Inquire</span>

                    <span className="material-symbols-outlined text-[13px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* Booking Guidance Note (Borders Completely Removed) */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-start gap-4 rounded-xl bg-[var(--color-surface)] p-6 sm:p-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-soft)] text-[var(--color-primary)]">
              <span
                className="material-symbols-outlined text-[20px]"
                aria-hidden="true"
              >
                info
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-serif text-base sm:text-lg font-medium tracking-wide text-[var(--color-text)]">
                Booking guidance
              </h3>

              <p className="text-xs sm:text-sm font-normal leading-relaxed tracking-wide text-[var(--color-text-muted)]">
                Contact the salon before visiting to confirm current rates,
                availability, and whether your selected service requires an
                advance appointment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};