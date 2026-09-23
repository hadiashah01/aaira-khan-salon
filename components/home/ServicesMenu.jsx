'use client';

import React, { useState } from 'react';

const fullServiceCatalog = [
  // Bridal Category
  {
    id: 'b1',
    category: 'bridal',
    title: 'Barat & Nikkah Bridal Makeover',
    description: 'Comprehensive bridal makeup including skin prep, lash application, dupatta setting, and intricate hair design for Barat and Nikkah events.',
  },
  {
    id: 'b2',
    category: 'bridal',
    title: 'Walima & Soft Glam Bridal Look',
    description: 'Soft, luminous bridal glam tailored for reception functions with customized hair styling.',
  },

  // Party Makeup Category
  {
    id: 'p1',
    category: 'party',
    title: 'Senior Artist Party Makeup',
    description: 'Full party makeup crafted by senior artists (Afia, Kulsoom, Yumna) with eye glam and contouring for guests and family.',
  },
  {
    id: 'p2',
    category: 'party',
    title: 'Glamorous Event Makeover & Hairstyling',
    description: 'Glamorous event makeup paired with signature hairstyles (curls, updo, or sleek finish).',
  },

  // Facials & Skin Care
  {
    id: 's1',
    category: 'skin',
    title: 'Hydra Facial Infusion',
    description: 'Deep pore cleansing and hydration performed by skin specialists (Sima Shah, Saima, Rukhsana).',
  },
  {
    id: 's2',
    category: 'skin',
    title: 'Whitening & Brightening Facial',
    description: 'Skin polishing and brightening facial designed to restore glow and smooth skin texture.',
  },

  // Hair Care & Color
  {
    id: 'h1',
    category: 'hair',
    title: 'Keratin & Hair Protein Treatments',
    description: 'Smoothing hair treatment designed to tame frizz and leave hair soft, silky, and manageable.',
  },
  {
    id: 'h2',
    category: 'hair',
    title: 'Balayage & Hair Coloring',
    description: 'Custom dimensional hair coloring, highlights, and modern balayage techniques.',
  },

  // Mani-Pedi & Massage
  {
    id: 'n1',
    category: 'nails',
    title: 'Whitening Manicure & Spa Pedicure',
    description: 'Deep nail grooming, exfoliation, polish, and relaxing massage care for hands and feet.',
  },
  {
    id: 'n2',
    category: 'nails',
    title: 'Relaxing Head & Body Massage',
    description: 'Stress-relieving body massage therapy offered as a standalone service or package add-on.',
  },

  // Waxing & Threading
  {
    id: 'w1',
    category: 'waxing',
    title: 'Full Body & Face Waxing',
    description: 'Painless hair removal services for face, arms, legs, or full body using gentle wax formulas.',
  },
  {
    id: 'w2',
    category: 'waxing',
    title: 'Eyebrow Threading & Shaping',
    description: 'Precise eyebrow threading and facial hair removal tailored to your facial structure.',
  }
];

export const ServicesMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Services' },
    { key: 'bridal', label: 'Bridal' },
    { key: 'party', label: 'Party Makeup' },
    { key: 'skin', label: 'Facials & Skin' },
    { key: 'hair', label: 'Hair Care & Color' },
    { key: 'nails', label: 'Mani-Pedi & Massage' },
    { key: 'waxing', label: 'Waxing & Threading' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? fullServiceCatalog
    : fullServiceCatalog.filter(service => service.category === selectedCategory);

  return (
    <section className="w-full px-5 md:px-12 py-12 bg-white" id="services-catalog">
      <div className="max-w-[1380px] mx-auto space-y-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">SERVICES CATALOG</span>
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#25181C]">
            Explore Salon &amp; Studio Offerings
          </h2>
          <p className="text-xs text-[#4E4639]">
            Select a category to filter services. All services are performed by experienced specialists at the Main Tariq Road studio.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.key
                  ? 'bg-[#25181C] text-white shadow-sm'
                  : 'bg-[#FFE8ED] text-[#25181C] hover:bg-[#FBE2E7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-stone-200 bg-[#FFF8F8] flex flex-col justify-between space-y-4 hover:border-[#974358] transition-colors"
            >
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-semibold text-[#25181C]">{item.title}</h3>
                <p className="text-xs text-[#4E4639] leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#775A19]">
                  Rates on request
                </span>
                <a
                  href={`https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20inquire%20about%20rates%20for%20${encodeURIComponent(item.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#974358] hover:underline"
                >
                  <span>Inquire</span>
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