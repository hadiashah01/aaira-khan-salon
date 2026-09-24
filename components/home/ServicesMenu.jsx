"use client";

import React, { useState } from "react";

const fullServiceCatalog = [
  {
    id: "b1",
    category: "bridal",
    image: "/images/services/barat-bridal.jpg",
    title: "Barat & Nikkah Bridal Makeover",
    description:
      "A complete bridal makeup experience with makeup, lashes, dupatta setting and hair styling.",
    highlights: ["Skin Prep", "Lashes", "Dupatta Setting"],
    featured: true,
  },
  {
    id: "b2",
    category: "bridal",
    image: "/images/services/walima-bridal.jpg",
    title: "Walima & Soft Glam Bridal Look",
    description:
      "A refined reception look with customized makeup and coordinated hair styling.",
    highlights: ["Soft Glam", "Hair Styling", "Long Wear"],
    featured: false,
  },
  {
    id: "p1",
    category: "party",
    image: "/images/services/party-makeup.jpg",
    title: "Senior Artist Party Makeup",
    description:
      "Party makeup tailored around your preferred eye look, complexion and overall style.",
    highlights: ["Eye Glam", "Contouring", "Lip Shade"],
    featured: true,
  },
  {
    id: "s1",
    category: "skin",
    image: "/images/services/facial-infusion.jpg",
    title: "Hydra Facial Infusion",
    description:
      "A facial treatment focused on cleansing, exfoliation and hydration for refreshed-looking skin.",
    highlights: ["Cleansing", "Exfoliation", "Hydration"],
    featured: true,
  },
  {
    id: "h1",
    category: "hair",
    image: "/images/services/keratin-treatment.jpg",
    title: "Keratin & Hair Protein Treatments",
    description:
      "Hair treatment focused on reducing frizz and improving manageability.",
    highlights: ["Frizz Control", "Smooth Finish", "Hair Care"],
    featured: false,
  },
  {
    id: "w2",
    category: "waxing",
    image: "/images/services/eyebrow-threading.jpg",
    title: "Eyebrow Threading & Waxing",
    description:
      "Eyebrow shaping and waxing services tailored to the selected treatment.",
    highlights: ["Shaping", "Waxing", "Quick Service"],
    featured: false,
  },
];

const categories = [
  { key: "all", label: "All Services", icon: "grid_view" },
  { key: "bridal", label: "Bridal", icon: "favorite" },
  { key: "party", label: "Party", icon: "auto_awesome" },
  { key: "skin", label: "Skin", icon: "water_drop" },
  { key: "hair", label: "Hair", icon: "content_cut" },
  { key: "waxing", label: "Waxing", icon: "brush" },
];

export const ServicesMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices =
    selectedCategory === "all"
      ? fullServiceCatalog
      : fullServiceCatalog.filter(
          (service) => service.category === selectedCategory,
        );

  return (
    <section
      id="services-catalog"
      className="bg-white px-5 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-[1380px]">
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
            const whatsappMessage = encodeURIComponent(
              `Hello Aaira Khan Salon, I would like to inquire about ${item.title}.`,
            );

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
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F5EEEE]">
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
                      href={`https://wa.me/923333959805?text=${whatsappMessage}`}
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
