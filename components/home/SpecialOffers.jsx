import React from 'react';

export const SpecialOffers = () => {
  return (
    <section className="w-full bg-[#FBE2E7]/40 px-5 md:px-12 py-12">
      <div className="max-w-[1380px] mx-auto space-y-6">
        <div>
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#974358]">Promotions Overview</span>
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#25181C] mt-0.5">
            Current Promotions (Subject to Confirmation)
          </h2>
          <p className="text-xs text-[#4E4639] max-w-3xl mt-1 leading-relaxed">
            Aaira Khan Salon &amp; Studio regularly runs seasonal offers on bridal, party makeup, hair, and skin services. Because packages and terms update frequently, please confirm current deals directly via phone or WhatsApp before booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Generic Bridal Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#775A19] bg-[#FFDEA5]/40 px-2.5 py-1 rounded">
                Event Packages
              </span>
              <h3 className="font-serif text-[20px] font-semibold text-[#25181C]">Bridal &amp; Party Makeup Packages</h3>
              <p className="text-xs text-[#4E4639] leading-relaxed">
                Custom makeup packages for Nikkah, Barat, Walima, Mehndi, and guest party makeup. Pricing and inclusions vary based on event date and artist requirements.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center gap-2 bg-[#974358] text-white px-4 py-2.5 rounded text-xs font-semibold hover:bg-[#83384b] transition-all self-start"
              href="https://wa.me/923333959805?text=Hello,%20I%20would%20like%20to%20know%20your%20current%20bridal%20and%20party%20makeup%20packages%20and%20prices."
              target="_blank"
              rel="noreferrer"
            >
              <span>Check Current Bridal Rates</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          {/* Generic Hair & Skin Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#974358] bg-[#FFD9DF]/60 px-2.5 py-1 rounded">
                Treatment Offers
              </span>
              <h3 className="font-serif text-[20px] font-semibold text-[#25181C]">Hair &amp; Skin Service Offers</h3>
              <p className="text-xs text-[#4E4639] leading-relaxed">
                Past promotions have included percentage-off deals on hair treatments (e.g., keratin, protein) and facials during specific time slots or seasons.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center gap-2 bg-[#25181C] text-white px-4 py-2.5 rounded text-xs font-semibold hover:bg-stone-800 transition-all self-start"
              href="https://wa.me/923333959805?text=Hello,%20do%20you%20have%20any%20current%20offers%20on%20hair%20or%20facial%20services?"
              target="_blank"
              rel="noreferrer"
            >
              <span>Ask About Today’s Offers</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};