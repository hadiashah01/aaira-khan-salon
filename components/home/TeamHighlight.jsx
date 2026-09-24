"use client";

import React from "react";

const teamMentions = [
  {
    name: "Afia, Kulsoom & Yumna",
    category: "Makeup Artists",
    note: "Names mentioned by clients in makeup-related feedback.",
  },
  {
    name: "Saima, Rabia & Momina",
    category: "Beauty Services",
    note: "Names appearing in client feedback about salon services.",
  },
  {
    name: "Areeba & Alishba",
    category: "Beauty Services",
    note: "Names mentioned in customer feedback about beauty services.",
  },
  {
    name: "Ramsha & Eman",
    category: "Salon Team",
    note: "Names mentioned in customer feedback and salon interactions.",
  },
];

export const TeamHighlight = () => {
  return (
    <section className="bg-white px-5 py-14 md:px-12 md:py-16">
      <div className="mx-auto max-w-[1380px]">
        <div className="max-w-3xl">
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8A6330]">
            THE SALON TEAM
          </span>

          <h2 className="mt-2 font-serif text-3xl font-bold text-[#24171B] md:text-4xl">
            People clients mention by name
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#625356]">
            Several team members are mentioned by name in customer feedback.
            Exact roles and availability should be confirmed directly with the
            salon when booking.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMentions.map((member) => (
            <article
              key={member.name}
              className="rounded-xl border border-[#E9DFE2] bg-[#FFF9FA] p-5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F6E0E5] font-serif font-bold text-[#974358]">
                {member.name.charAt(0)}
              </div>

              <h3 className="mt-4 font-serif text-base font-bold text-[#24171B]">
                {member.name}
              </h3>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#8A6330]">
                {member.category}
              </p>

              <p className="mt-3 text-[11px] leading-5 text-[#625356]">
                {member.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};