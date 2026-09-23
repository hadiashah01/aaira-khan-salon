import React from 'react';

export const Testimonials = () => {
  return (
    <section className="w-full bg-[#FFF0F2]/60 px-5 md:px-12 py-12">
      <div className="max-w-[1380px] mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">Public Feedback</span>
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#25181C]">What Clients &amp; Directories Say Online</h2>
          <p className="text-xs text-[#4E4639]">
            Aaira Khan Salon &amp; Studio is listed among Karachi bridal salons and mentioned in vlogs and posts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* YouTube Client Review */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded">YouTube Vlog (Aug 2025)</span>
              <p className="text-xs text-[#25181C] italic leading-relaxed">
                “Went to Aaira Khan Salon &amp; Studio on Tariq Road… honestly it was an amazing experience. Waxing was so painless, facial was amazing, and my hair protein treatment left my hair so silky and smooth.”
              </p>
            </div>
            <p className="text-xs font-semibold text-[#4E4639]">— Client Review Vlog</p>
          </div>

          {/* Tashheer Directory */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-[#775A19] bg-[#FFDEA5]/40 px-2 py-0.5 rounded">Tashheer Listing (2025)</span>
              <p className="text-xs text-[#25181C] italic leading-relaxed">
                “One of the famous beauty salons among influencers in Karachi… personalized attention and service in a warm atmosphere.”
              </p>
            </div>
            <p className="text-xs font-semibold text-[#4E4639]">— Top Bridal Salons List</p>
          </div>

          {/* Influencer Post */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-[#974358] bg-[#FFD9DF]/60 px-2 py-0.5 rounded">Instagram Mention</span>
              <p className="text-xs text-[#25181C] italic leading-relaxed">
                “Shoutout to @aaira_khan_salon for the self-care session! Manicure, pedicure, massage, deep hair treatment, and haircut — walked out feeling relaxed and styled.”
              </p>
            </div>
            <p className="text-xs font-semibold text-[#4E4639]">— Influencer Post</p>
          </div>
        </div>

        <p className="text-[11px] text-center text-stone-500 italic">
          Note: Online feedback includes mixed client reviews across public platforms. We encourage clients to confirm all booking terms directly.
        </p>
      </div>
    </section>
  );
};