"use client";

import React from "react";

const reasons = [
  {
    icon: "auto_awesome",
    title: "Occasion-Focused Beauty",
    text: "Bridal, party, hair, and beauty services organized around the look and occasion you have in mind.",
  },
  {
    icon: "groups",
    title: "Specialist Services",
    text: "Different beauty services are handled by artists and specialists according to the treatment.",
  },
  {
    icon: "calendar_month",
    title: "Appointment Guidance",
    text: "Advance booking is recommended for bridal makeup, party packages, and longer treatments.",
  },
  {
    icon: "location_on",
    title: "Main Tariq Road",
    text: "Conveniently located in Delhi Society, PECHS, Karachi.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="w-full px-5 md:px-12 py-14 md:py-16 bg-white">
      <div className="max-w-[1380px] mx-auto">
        <div className="max-w-2xl mb-8">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">
            WHY VISIT US
          </span>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#25181C] mt-2">
            Beauty services designed around your occasion
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="bg-[#FFF8F8] border border-[#F5DCE2] rounded-2xl p-5"
            >
              <div className="w-10 h-10 rounded-full bg-[#FBE2E7] flex items-center justify-center text-[#974358]">
                <span className="material-symbols-outlined text-[20px]">
                  {reason.icon}
                </span>
              </div>

              <h3 className="font-serif text-lg font-bold text-[#25181C] mt-4">
                {reason.title}
              </h3>

              <p className="text-sm text-[#4E4639] leading-6 mt-2">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};