"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/app/lib/contact";

export const ServicesMenu = () => {
  const [services, setServices] = useState([]);
  const carouselRef = useRef(null);

  // Drag Scroll & Scroll Indicator States
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Update Scroll Progress Bar State
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const totalScrollable = scrollWidth - clientWidth;

    if (totalScrollable > 0) {
      const progress = (scrollLeft / totalScrollable) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    } else {
      setScrollProgress(0);
    }
  };

  useEffect(() => {
    const currentRef = carouselRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (currentRef) currentRef.removeEventListener("scroll", handleScroll);
    };
  }, [services]);

  const displayServices = services.length > 0 ? [...services, ...services] : [];

  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;

    setIsMouseDown(true);
    setHasDragged(false);
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

    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }

    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="services-catalog"
      aria-label="Aaira Khan Salon Services & Treatment Catalog"
      className="relative w-full overflow-hidden bg-[var(--color-background)] py-16 text-[var(--color-text)] antialiased md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 pb-8 text-center md:pb-10 space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">
            SERVICES
          </span>

          <h2 className="font-serif text-3xl font-normal leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl">
            Beauty services for every occasion
          </h2>

          <p className="mx-auto max-w-2xl text-xs sm:text-sm leading-relaxed text-[var(--color-text-muted)]">
            Explore our main beauty categories and get in touch directly to discuss availability and bookings.
          </p>
        </div>

        {/* Services Drag Carousel */}
        {services.length === 0 ? (
          <div className="flex min-h-[240px] items-center justify-center bg-[var(--color-surface)] p-8 text-center text-xs text-[var(--color-text-muted)] rounded-2xl">
            Loading treatment portfolio...
          </div>
        ) : (
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`scrollbar-none mt-6 flex gap-6 overflow-x-auto py-4 ${
              isMouseDown ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
          >
            {displayServices.map((item, index) => {
              const whatsappMessage = `Hello Aaira Khan Salon, I would like to inquire about ${item.title}.`;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="group flex w-[250px] sm:w-[280px] shrink-0 flex-col items-center text-center cursor-pointer"
                >
                  <a
                    href={getWhatsAppUrl(whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (hasDragged) e.preventDefault();
                    }}
                    className="flex flex-col items-center justify-between h-full w-full"
                  >
                    <div className="flex flex-col items-center w-full">
                      {/* Organic Arch Frame */}
                      <div className="w-full pt-2">
                        <div
                          className={`relative h-[340px] w-full overflow-hidden bg-[var(--color-surface-soft)]/40 transition-[border-radius] duration-500 ease-out ${
                            index % 2 === 0
                              ? "rounded-t-full group-hover:rounded-b-full"
                              : "rounded-b-full group-hover:rounded-t-full"
                          }`}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            loading="eager"
                            sizes="280px"
                            draggable={false}
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="mt-5 flex min-h-[3rem] items-center justify-center w-full px-2">
                        <h3 className="font-serif text-lg font-normal tracking-wide text-[var(--color-text)] transition-colors duration-200 group-hover:text-[var(--color-primary)] leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-[var(--color-text-muted)] px-1">
                        {item.description}
                      </p>
                    </div>

                    {/* Clean Action Label */}
                    <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors duration-200 group-hover:text-white">
                      <span>Inquire</span>
                      <span className="material-symbols-outlined text-[14px] transition-transform duration-300 ease-out group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* Scroll Progress Bar */}
        <div className="mt-6 flex w-full justify-center">
          <div className="h-[3px] w-32 sm:w-48 overflow-hidden rounded-full bg-[var(--color-surface-soft)]">
            <div
              className="h-full bg-[var(--color-primary)] transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        {/* Booking Guidance Note */}
        <div className="mt-12">
          <div className="flex items-start gap-4 rounded-2xl bg-[var(--color-surface)] p-6 sm:p-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-soft)] text-[var(--color-primary)]">
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                info
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-base font-medium tracking-wide text-[var(--color-text)]">
                Booking guidance
              </h3>

              <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">
                Contact the salon before visiting to confirm current rates, availability, and whether your selected service requires an advance appointment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};