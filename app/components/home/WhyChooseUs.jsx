"use client";

import React, { useEffect, useState } from "react";

export const WhyChooseUs = () => {
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    const fetchReasons = async () => {
      try {
        const response = await fetch("/api/why-us");

        if (!response.ok) {
          throw new Error("Failed to fetch reasons");
        }

        const data = await response.json();
        setReasons(data);
      } catch (error) {
        console.error("Failed to load reasons:", error);
      }
    };

    fetchReasons();
  }, []);

  return (
    <section className="bg-white px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1380px]">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6330]">
            WHY VISIT US
          </span>

          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight tracking-tight text-[#24171B] md:text-4xl">
            Beauty services designed around your occasion
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-[#E9DFE2] bg-[#FFF9FA] p-5 transition-shadow hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9E5E9] text-[#974358]">
                <span className="material-symbols-outlined text-[20px]">
                  {reason.icon}
                </span>
              </div>

              <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-[#24171B]">
                {reason.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#625356]">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
