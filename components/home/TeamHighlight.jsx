'use client';

import React from 'react';

const teamMembers = [
  {
    name: 'Afia, Kulsoom & Yumna',
    role: 'Senior Makeup Artists',
    note: 'Mentioned across multiple reviews for professional party makeup and soft glam execution.',
  },
  {
    name: 'Saima, Rabia & Momina',
    role: 'Facial & Skin Specialists',
    note: 'Praised for relaxing facial techniques, deep cleansing, and skin brightening.',
  },
  {
    name: 'Areeba & Alishba',
    role: 'Spa & Beauty Specialists',
    note: 'Highlighted for outstanding pedicure work and precise eyebrow shaping.',
  },
  {
    name: 'Elma, Ramsha & Eman',
    role: 'Consultation & Management',
    note: 'Commended for friendly guidance, warm coordination, and a welcoming salon environment.',
  },
];

export const TeamHighlight = () => {
  return (
    <section className="w-full px-5 md:px-12 py-12 bg-white">
      <div className="max-w-[1380px] mx-auto space-y-6">
        <div>
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">EXPERIENCED SPECIALISTS</span>
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#25181C] mt-0.5">
            Our Dedicated Team at Aaira Khan Salon &amp; Studio
          </h2>
          <p className="text-xs text-[#4E4639] max-w-3xl mt-1 leading-relaxed">
            Our team members are regularly highlighted in Google reviews for their polite nature and professional work. Clients frequently mention specific artists and therapists by name.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((staff, idx) => (
            <div key={idx} className="bg-[#FFF8F8] p-5 rounded-xl border border-stone-200 space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FBE2E7] flex items-center justify-center text-[#974358] font-serif font-bold text-base">
                {staff.name.charAt(0)}
              </div>
              <h3 className="font-serif text-base font-semibold text-[#25181C] pt-1">{staff.name}</h3>
              <p className="text-xs font-semibold text-[#775A19]">{staff.role}</p>
              <p className="text-[11px] text-[#4E4639] leading-relaxed pt-1">{staff.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};