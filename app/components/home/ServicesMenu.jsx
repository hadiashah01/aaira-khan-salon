"use client";

import React, { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/app/lib/contact";

export const ServicesMenu = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services");

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await response.json();

        setServices(data.services);
        setCategories(data.categories);
      } catch (error) {
        console.error("Failed to load services:", error);
      }
    };

    fetchServices();
  }, []);

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter(
          (service) => service.category === selectedCategory,
        );

  return (
    <section
      id="services-catalog"
      className="bg-white px-5 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-345">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8A6330]">
            SERVICES
          </span>

          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#24171B] md:text-4xl">
            Beauty services for every occasion
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#594A4E]">
            Explore the salon's main service categories and contact the studio
            for exact rates and availability.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none md:justify-center">
          {categories.map((category) => {
            const isActive = selectedCategory === category.key;

            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setSelectedCategory(category.key)}
                aria-pressed={isActive}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-bold transition-all ${
                  isActive
                    ? "bg-[#24171B] text-white shadow-sm"
                    : "border border-[#E4D9DC] bg-white text-[#55484B] hover:border-[#974358] hover:text-[#974358]"
                }`}
              >
                <span className="material-symbols-outlined text-[15px]">
                  {category.icon}
                </span>

                {category.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((item) => {
            const whatsappMessage = `Hello Aaira Khan Salon, I would like to inquire about ${item.title}.`;

            return (
              <article
                key={item.id}
                className={`group overflow-hidden rounded-2xl bg-white transition-all ${
                  item.featured
                    ? "border border-[#C47A8B] shadow-[0_8px_30px_rgba(151,67,88,0.10)]"
                    : "border border-[#E8DFE1] shadow-sm hover:-translate-y-0.5 hover:shadow-md"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#F5EEEE]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {item.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#24171B]/90 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-white backdrop-blur">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold leading-snug text-[#24171B]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-[#625356]">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#F8F3F4] px-2 py-1 text-[11px] font-medium text-[#65575A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#F0E7E9] pt-4">
                    <span className="text-[12px] text-[#8A7A7E]">
                      Rate on request
                    </span>

                    <a
                      href={getWhatsAppUrl(whatsappMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[12px] font-bold text-[#974358] hover:underline"
                    >
                      Inquire

                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Booking guidance */}
        <div className="mt-8 rounded-xl border border-[#E9DDE0] bg-[#FFF8F9] px-5 py-4">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined mt-0.5 text-[18px] text-[#974358]">
              info
            </span>

            <div>
              <h3 className="text-sm font-bold text-[#24171B]">
                Booking guidance
              </h3>

              <p className="mt-1 text-[11px] leading-5 text-[#625356]">
                Contact the salon before visiting to confirm current rates,
                availability and whether your selected service requires an
                advance appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};