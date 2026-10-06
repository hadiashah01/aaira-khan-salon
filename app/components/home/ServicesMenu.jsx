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
      className="relative w-full overflow-hidden bg-[var(--color-background)] py-16 text-[var(--color-text)] antialiased selection:bg-[var(--color-primary)] selection:text-[var(--color-secondary)] md:py-24"
    >
      <div className="mx-auto max-w-[1380px] px-5 font-sans sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center gap-6 pb-8 text-center md:pb-10">
          <div className="inline-flex items-center gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-primary)]">
              SERVICES
            </span>
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
            className={`scrollbar-none mt-8 sm:mt-12 flex gap-5 sm:gap-7 overflow-x-auto py-7${
              isMouseDown ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
          >
            {displayServices.map((item, index) => {
              const whatsappMessage = `Hello Aaira Khan Salon, I would like to inquire about ${item.title}.`;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="group flex w-[240px] xs:w-[260px] sm:w-[290px] shrink-0 flex-col items-center text-center cursor-pointer"
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
                      <div className="w-full pt-2 sm:pt-4">
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                          <img
                            src="/images/aaira-khan-white-bg.jpg"
                            alt="Aaira Khan Logo Background"
                            className="h-full w-full object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface-light)]/90 via-transparent to-[var(--color-surface-light)]/90" />
                        </div>
                      </div>

                      <div className="mt-5 sm:mt-6 flex min-h-[3.5rem] items-center justify-center w-full px-2">
                        <h3 className="font-serif text-lg sm:text-[1.25rem] md:text-[1.35rem] font-normal tracking-wide text-[var(--color-text)] transition-colors duration-200 group-hover:text-[var(--color-primary)] break-words leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 line-clamp-3 text-xs sm:text-sm font-normal tracking-wide leading-relaxed text-[var(--color-text-muted)] px-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors duration-200 group-hover:text-[var(--color-primary-dark)]">
                      <span>Inquire</span>
                      <span className="material-symbols-outlined text-[15px] transition-transform duration-300 ease-out group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-6 flex w-full justify-center">
          <div className="h-[3px] w-32 sm:w-48 overflow-hidden rounded-full bg-[var(--color-surface-soft,rgba(255,255,255,0.1))]">
            <div
              className="h-full bg-[var(--color-primary)] transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        <div className="mt-10 sm:mt-16">
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
