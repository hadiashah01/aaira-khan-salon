"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/app/lib/contact";

export const ServicesMenu = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const carouselRef = useRef(null);
  const pointerRef = useRef(null);
  const draggedAtRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchServices = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        const response = await fetch("/api/services", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch services: ${response.status}`);
        }

        const data = await response.json();
        if (
          !data ||
          typeof data !== "object" ||
          !Array.isArray(data.services) ||
          !Array.isArray(data.categories) ||
          data.categories.some(
            (category) =>
              !category ||
              typeof category.key !== "string" ||
              typeof category.label !== "string" ||
              typeof category.icon !== "string",
          ) ||
          data.services.some(
            (service) =>
              !service ||
              (typeof service.id !== "string" &&
                typeof service.id !== "number") ||
              typeof service.title !== "string" ||
              service.title.trim().length === 0 ||
              typeof service.image !== "string" ||
              !service.image.startsWith("/images/") ||
              (service.description !== undefined &&
                typeof service.description !== "string"),
          )
        ) {
          throw new Error("Invalid services data");
        }

        setServices(data.services);
      } catch (error) {
        if (!(error instanceof Error && error.name === "AbortError")) {
          console.error("Failed to load services:", error);
          setHasError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchServices();
    return () => controller.abort();
  }, [loadAttempt]);

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
    if (!currentRef) return;

    handleScroll();
    const observer =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(handleScroll);
    observer?.observe(currentRef);
    window.addEventListener("resize", handleScroll);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", handleScroll);
    };
  }, [services]);

  const handlePointerDown = (event) => {
    if (
      event.pointerType !== "mouse" ||
      event.button !== 0 ||
      !carouselRef.current
    ) {
      return;
    }

    pointerRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: carouselRef.current.scrollLeft,
      hasDragged: false,
    };
  };

  const handlePointerMove = (event) => {
    const pointer = pointerRef.current;
    if (
      !pointer ||
      pointer.pointerId !== event.pointerId ||
      !carouselRef.current
    ) {
      return;
    }

    const distance = event.clientX - pointer.startX;
    if (Math.abs(distance) > 5) {
      pointer.hasDragged = true;
    }

    if (pointer.hasDragged) {
      event.preventDefault();
      carouselRef.current.scrollLeft = pointer.scrollLeft - distance;
    }
  };

  const handlePointerEnd = (event) => {
    if (pointerRef.current?.pointerId === event.pointerId) {
      if (pointerRef.current.hasDragged) {
        draggedAtRef.current = Date.now();
      }
      pointerRef.current = null;
    }
  };

  return (
    <section
      id="services-catalog"
      aria-label="Aaira Khan Salon Services & Treatment Catalog"
      className="relative w-full max-w-full overflow-hidden bg-[var(--color-background)] py-16 font-sans text-[var(--color-text)] antialiased md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 font-sans">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 pb-8 text-center md:pb-10 space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
            SERVICES
          </span>

          <h2 className="font-serif text-3xl font-normal leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl">
            Beauty services for every occasion
          </h2>

          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
            Explore our main beauty categories and get in touch directly to
            discuss availability and bookings.
          </p>
        </div>

        {/* Services Drag Carousel */}
        {isLoading ? (
          <div
            className="flex min-h-[240px] items-center justify-center rounded-2xl bg-[var(--color-surface)] p-8 text-center text-xs text-[var(--color-text-muted)]"
            role="status"
          >
            Loading treatment portfolio...
          </div>
        ) : hasError ? (
          <div
            className="flex min-h-[240px] flex-col items-center justify-center gap-4 rounded-2xl bg-[var(--color-surface)] p-8 text-center"
            role="alert"
          >
            <p className="text-sm text-[var(--color-text)]">
              Unable to load services right now.
            </p>
            <button
              type="button"
              onClick={() => setLoadAttempt((attempt) => attempt + 1)}
              className="cursor-pointer whitespace-nowrap text-xs font-bold text-[var(--color-text)] underline underline-offset-4"
            >
              Try Again
            </button>
          </div>
        ) : services.length === 0 ? (
          <div className="flex min-h-[240px] items-center justify-center rounded-2xl bg-[var(--color-surface)] p-8 text-center text-sm text-[var(--color-text-muted)]">
            No services are available right now.
          </div>
        ) : (
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            onPointerLeave={handlePointerEnd}
            onClickCapture={(event) => {
              if (Date.now() - draggedAtRef.current < 250) {
                event.preventDefault();
              }
            }}
            className="scrollbar-none mt-6 flex cursor-grab gap-6 overflow-x-auto py-4"
          >
            {services.map((item, index) => {
              const whatsappMessage = `Hello Aaira Khan Salon, I would like to inquire about ${item.title}.`;

              return (
                <div
                  key={item.id}
                  className="group flex h-full w-[250px] shrink-0 flex-col items-center text-center sm:w-[280px]"
                >
                  <a
                    href={getWhatsAppUrl(whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full w-full cursor-pointer flex-col items-center justify-between focus-visible:outline"
                  >
                    <div className="flex flex-col items-center w-full">
                      {/* Organic Arch Frame */}
                      <div className="w-full pt-2">
                        <div className="relative h-[340px] w-full overflow-hidden bg-[var(--color-surface-soft)]/40 rounded-2xl ">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            loading="lazy"
                            sizes="280px"
                            draggable={false}
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="mt-5 flex min-h-[3rem] items-center justify-center w-full px-2">
                        <h3 className="font-serif text-base font-bold leading-snug tracking-wide text-[var(--color-text)] transition-colors duration-200 group-hover:text-[var(--color-primary)] sm:text-lg">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="mt-1 line-clamp-3 px-1 text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
                        {item.description}
                      </p>
                    </div>

                    {/* Clean Action Label */}
                    <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors duration-200  ">
                      <span>Inquire</span>
                      <span className="material-symbols-outlined text-[14px]">
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
              <span
                className="material-symbols-outlined text-lg"
                aria-hidden="true"
              >
                info
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-base font-bold tracking-wide text-[var(--color-text)] sm:text-lg">
                Booking guidance
              </h3>

              <p className="line-clamp-3 text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
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
