import React from 'react';

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF0F2] via-[#FFF8F8] to-[#FFF8F8] px-5 md:px-12 py-12 lg:py-20">
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Verified Copy */}
        <div className="lg:col-span-7 flex flex-col space-y-5 z-10">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#FBE2E7]/80 text-[#974358]">
            <span className="material-symbols-outlined text-[16px] text-[#775A19]">location_on</span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">
              Main Tariq Road • Delhi Society
            </span>
          </div>

          <h1 className="font-serif text-[36px] md:text-[52px] text-[#25181C] leading-[1.1] tracking-tight">
            Aaira Khan Salon &amp; Studio <span className="italic font-normal text-[#974358] block md:inline">– Tariq Road</span>
          </h1>

          <p className="text-base text-[#4E4639] leading-relaxed max-w-xl">
            Bridal makeup, party glam, hair care, facials, skin treatments, nails, and waxing in Karachi. Located at Main Tariq Road, Delhi Society. Book appointments by phone or WhatsApp.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              className="inline-flex items-center gap-2 bg-[#1E5E41] text-[#FDFBF7] px-6 py-3 rounded hover:bg-[#164731] transition-all shadow-sm"
              href="https://wa.me/923333959805?text=Hello%20Aaira%20Khan%20Salon,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span className="text-sm font-semibold">WhatsApp (0333-3959805)</span>
            </a>
            <a
              className="inline-flex items-center gap-2 bg-[#FBE2E7]/70 text-[#25181C] px-5 py-3 rounded hover:bg-[#F5DCE2] transition-all"
              href="tel:02134536026"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span className="text-sm font-semibold">Call 021-34536026</span>
            </a>
          </div>

          {/* Verified Trust Badges */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg bg-white shadow-sm border border-stone-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#775A19] text-[20px] shrink-0 mt-0.5">verified</span>
              <div>
                <p className="text-xs font-bold text-[#25181C]">Bridal Listing</p>
                <p className="text-[11px] text-[#4E4639] leading-tight mt-0.5">Listed among bridal makeup salons in Karachi directories.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-white shadow-sm border border-stone-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#775A19] text-[20px] shrink-0 mt-0.5">photo_camera</span>
              <div>
                <p className="text-xs font-bold text-[#25181C]">Active Community</p>
                <p className="text-[11px] text-[#4E4639] leading-tight mt-0.5">Client transformations &amp; promos posted on @aaira_khan_salon.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-white shadow-sm border border-stone-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#775A19] text-[20px] shrink-0 mt-0.5">reviews</span>
              <div>
                <p className="text-xs font-bold text-[#25181C]">Public Feedback</p>
                <p className="text-[11px] text-[#4E4639] leading-tight mt-0.5">Featured in vlogs, reviews, and influencer self-care posts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Visual Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[400px] rounded-2xl overflow-hidden bg-stone-100 p-2 border border-stone-200">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-200">
              <img
                alt="Aaira Khan Salon Bridal Artistry Work"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WMhgTBxPMiQUBHjHb0TsyJ28LJtLcANE3T6Efle9gfGeeHgbSIXQ2KLNNZzkX-ow9onAw0mvsNMbXNmgiFPqbb1COx6axUAbYbQvt25OIS3ThpDOIdFupP-bwTNBEWejzscAyGU83Dvjo-3jYYwXo8_pGug8Sup32JW6l5K7Kh1VOKP8wX9CmlybzHGOVc_VgdoujjallIQ-o79AQqC_vPkmwzQRRFHcZAGsu2LcSxAs8fVcDgmkcTHFyc"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};