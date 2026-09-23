'use client';

import React, { useState } from 'react';

const serviceCatalog = [
  {
    id: 1,
    cat: 'bridal',
    title: 'Barat Bridal Makeup',
    description: 'Bridal makeup and hair styling for Barat events, including foundation, eye makeup, dupatta setting, and hair arrangement.',
    waText: 'Hello, I am interested in inquiring about your Barat bridal makeup package.'
  },
  {
    id: 2,
    cat: 'bridal',
    title: 'Walima Soft Glam',
    description: 'Soft bridal makeup look and hair styling tailored for Walima/reception events.',
    waText: 'Hello, I would like to inquire about your Walima bridal makeup rates.'
  },
  {
    id: 3,
    cat: 'bridal',
    title: 'Mehendi / Mayun Glow',
    description: 'Festive event makeup and traditional hair styling for Mehndi and Mayun functions.',
    waText: 'Hello, I am interested in booking Mehndi/Mayun makeup.'
  },
  {
    id: 4,
    cat: 'party',
    title: 'Signature Party Makeup',
    description: 'Full party/guest makeup including lash application, contouring, and salon hair styling (curls, straightening, or half-updo).',
    waText: 'Hello, I would like to check rates for party makeup.'
  },
  {
    id: 5,
    cat: 'skin',
    title: 'Hydra Facial Infusion',
    description: 'Deep-cleansing facial focused on hydration and skin cleansing. Specific devices and steps depend on the package chosen.',
    waText: 'Hello, I want to inquire about Hydra Facial options and pricing.'
  },
  {
    id: 6,
    cat: 'skin',
    title: 'Double Glow Facial',
    description: 'Brightening facial focused on skin polish and soothing masks. Facial steps vary by skin type.',
    waText: 'Hello, I would like to know details about the Double Glow Facial.'
  },
  {
    id: 7,
    cat: 'hair',
    title: 'Keratin & Protein Treatments',
    description: 'Smoothing hair conditioning treatment designed to reduce frizz and improve texture. Results depend on hair condition and aftercare.',
    waText: 'Hello, I want to ask about hair protein and keratin treatments.'
  },
  {
    id: 8,
    cat: 'nails',
    title: 'Manicure & Pedicure Spa',
    description: 'Complete hands and feet grooming service with soak, exfoliation, cuticle care, massage, and polish.',
    waText: 'Hello, I would like to book a Mani-Pedi appointment.'
  }
];

export const ServicesMenu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? serviceCatalog
    : serviceCatalog.filter(item => item.cat === activeCategory);

  return (
    <section className="w-full px-5 md:px-12 py-12" id="services-catalog">
      <div className="max-w-[1380px] mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">Service Menu</span>
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#25181C]">Salon &amp; Studio Offerings</h2>
          <p className="text-xs text-[#4E4639]">
            Services are performed by beauty professionals using standard products. For details on product brands or therapist qualifications, please ask the salon directly.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { key: 'all', label: 'All Services' },
            { key: 'bridal', label: 'Bridal' },
            { key: 'party', label: 'Party Makeup' },
            { key: 'skin', label: 'Facials & Skin' },
            { key: 'hair', label: 'Hair Care' },
            { key: 'nails', label: 'Nails & Spa' },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-[#25181C] text-white'
                  : 'bg-[#FFE8ED] text-[#25181C] hover:bg-[#FBE2E7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-5 shadow-sm border border-stone-100 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-semibold text-[#25181C]">{item.title}</h3>
                <p className="text-xs text-[#4E4639] leading-relaxed">{item.description}</p>
              </div>
              <div>
                <p className="text-[11px] text-stone-500 italic mb-2">Price &amp; Duration: On request</p>
                <a
                  className="inline-flex items-center gap-1.5 text-[#974358] hover:text-[#782A3F] text-xs font-bold uppercase tracking-wider"
                  href={`https://wa.me/923333959805?text=${encodeURIComponent(item.waText)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Inquire via WhatsApp</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};