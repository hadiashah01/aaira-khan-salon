"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const WhyChooseUs = () => {
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    const fetchReasons = async () => {
      try {
        const response = await fetch("/api/why-us");
        if (!response.ok) throw new Error("Failed to fetch reasons");
        const data = await response.json();
        setReasons(data);
      } catch (error) {
        console.error("Failed to load reasons:", error);
      }
    };
    fetchReasons();
  }, []);

  return (
    <section
      id="why-us"
      className="relative w-full max-w-full overflow-x-hidden bg-[var(--color-background)] py-16 font-sans text-[var(--color-text)] md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-5">
          
          {/* Left Text Grid (Expands on Mobile & Tablet) */}
          <div className="flex flex-col justify-start lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary-dark)]">
                WHY VISIT US
              </span>
              <h2 className="font-serif text-3xl font-normal leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl">
                Beauty services designed around your occasion
              </h2>
            </div>

            {reasons.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {reasons.map((reason, index) => (
                  <div 
                    key={reason.title || index} 
                    className="group flex h-full transform-none cursor-pointer flex-col justify-between rounded-2xl bg-[var(--color-surface)] p-5 transition-colors duration-300 ease-out hover:bg-[var(--color-surface-soft)]"
                  >
                    <div className="flex items-start gap-4 text-left h-full">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-soft)] text-[var(--color-primary)]">
                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                          {reason.icon}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col justify-start">
                        <h3 className="font-serif text-base font-bold tracking-wide text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)] sm:text-lg">
                          {reason.title}
                        </h3>
                        <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
                          {reason.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Arched Image - Hidden on Mobile & Tablet */}
          <div className="relative hidden lg:flex justify-center   lg:col-span-5">
            <div className="relative h-[450px] w-[280px] overflow-hidden rounded-t-[130px] rounded-b-none bg-[var(--color-surface)] ring-2 ring-[var(--color-primary)] ring-offset-4 ring-offset-[var(--color-background)] shadow-2xl">
              <Image
                src="/images/why-us-salon.jpg"
                alt="Aaira Khan Salon"
                fill
                sizes="280px"
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};