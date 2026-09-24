"use client";

import React, { useState } from "react";

const fullServiceCatalog = [
  {
    id: "b1",
    category: "bridal",
    icon: "face_3",
    featured: true,
    image: "/images/services/barat-bridal.jpg",
    title: "Barat & Nikkah Bridal Makeover",
    description:
      "Comprehensive bridal makeup including skin prep, lash application, dupatta setting, and intricate hair design for Barat and Nikkah events.",
    highlights: [
      "Skin Prep",
      "Lash Application",
      "Dupatta Setting",
      "Hair Design",
    ],
  },
  {
    id: "b2",
    category: "bridal",
    icon: "sparkles",
    featured: false,
    image: "/images/services/walima-bridal.jpg",
    title: "Walima & Soft Glam Bridal Look",
    description:
      "Soft, luminous bridal glam tailored for reception functions with customized hair styling.",
    highlights: ["Luminous Glam", "Custom Hair Styling", "Long-lasting Finish"],
  },
  {
    id: "p1",
    category: "party",
    icon: "styler",
    featured: true,
    image: "/images/services/party-makeup.jpg",
    title: "Senior Artist Party Makeup",
    description:
      "Full party makeup crafted by senior artists (Afia, Kulsoom, Yumna) with eye glam and contouring.",
    highlights: ["Eye Glam", "Contouring", "Custom Lip Shade"],
  },
  {
    id: "s1",
    category: "skin",
    icon: "water_drop",
    featured: true,
    image: "/images/services/facial-infusion.jpg",
    title: "Hydra Facial Infusion",
    description:
      "Deep pore cleansing and hydration performed by skin specialists (Sima Shah, Saima, Rukhsana).",
    highlights: ["Deep Cleansing", "Exfoliation", "Hydration Serum"],
  },
  {
    id: "h1",
    category: "hair",
    icon: "content_cut",
    featured: false,
    image: "/images/services/keratin-treatment.jpg",
    title: "Keratin & Hair Protein Treatments",
    description:
      "Smoothing hair treatment designed to tame frizz and leave hair soft, silky, and manageable.",
    highlights: ["Frizz Control", "Silky Texture", "Long-lasting Care"],
  },
  {
    id: "w2",
    category: "waxing",
    icon: "brush",
    featured: false,
    image: "/images/services/eyebrow-threading.jpg",
    title: "Eyebrow Threading & Full Waxing",
    description:
      "Precise eyebrow shaping and gentle body hair removal services tailored to your needs.",
    highlights: ["Precise Shaping", "Gentle Formulas", "Quick Service"],
  },
];

export const ServicesMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { key: "all", label: "All Offerings", icon: "grid_view" },
    { key: "bridal", label: "Bridal", icon: "favorite" },
    { key: "party", label: "Party Glam", icon: "auto_awesome" },
    { key: "skin", label: "Skin & Facials", icon: "water_drop" },
    { key: "hair", label: "Hair Care", icon: "content_cut" },
    { key: "waxing", label: "Waxing & Threading", icon: "content_paste" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? fullServiceCatalog
      : fullServiceCatalog.filter(
          (service) => service.category === selectedCategory,
        );

  return (
    <section
      className="w-full px-5 md:px-12 py-16 bg-gradient-to-b from-white to-[#FFF8F8]"
      id="services-catalog"
    >
      <div className="max-w-[1380px] mx-auto space-y-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#775A19] bg-[#FFDEA5]/40 px-3 py-1 rounded-full border border-[#FFDEA5]">
            CURATED SERVICES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#25181C]">
            Explore Salon &amp; Studio Offerings
          </h2>
          <p className="text-sm text-[#382A2E] leading-relaxed">
            Select a category below to filter treatments performed by senior
            artists and specialists.
          </p>
        </div>

        {/* Horizontal Mobile Scroll Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none snap-x md:justify-center">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all snap-start shrink-0 ${
                  isActive
                    ? "bg-[#25181C] text-white shadow-md scale-105 ring-2 ring-[#974358]/20"
                    : "bg-white border border-stone-200 text-[#382A2E] hover:bg-[#FFE8ED] hover:border-[#974358]/30"
                }`}
              >
                <span className="material-symbols-outlined text-base">
                  {cat.icon}
                </span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between ${
                item.featured
                  ? "bg-white border-2 border-[#974358] shadow-lg ring-1 ring-[#974358]/10"
                  : "bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-stone-300"
              }`}
            >
              {item.featured && (
                <div className="absolute top-3 right-3 z-10 bg-[#974358] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    star
                  </span>
                  <span>Popular Choice</span>
                </div>
              )}

              {/* Service Header Image */}
              <div className="relative h-44 w-full bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-[11px] font-semibold text-[#775A19] bg-white/95 backdrop-blur px-2.5 py-1 rounded-md shadow-sm">
                  Rates on request
                </span>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#25181C]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#382A2E] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Feature Tags */}
                {item.highlights && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.highlights.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded-md"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Card Action */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                  <span className="text-xs text-stone-500 font-medium">
                    Main Tariq Road
                  </span>
                  <a
                    href={`https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(item.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#974358] hover:underline"
                  >
                    <span>Inquire Rates</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
