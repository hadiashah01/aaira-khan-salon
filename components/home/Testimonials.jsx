"use client";

import React, { useState } from "react";

const realReviews = [
  {
    id: 1,
    author: "Syeda Alishba",
    time: "7 months ago",
    tag: "Party Makeup",
    text: "I had an amazing experience with Afia for my party makeup. She is truly a senior and very professional makeup artist. From understanding my look to perfect execution, everything was on point.",
    stars: 5,
  },
  {
    id: 2,
    author: "Adeena Shariq",
    time: "1 month ago",
    tag: "Makeover",
    text: "I searched a lot whole week and finally decided on Aaira salon. It was my first experience and I liked it a lot! Staff is very cooperative and polite. Manager Ramsha and artists Kulsoom, Sunbul, and Yumna did 3 makeovers and all were quite good.",
    stars: 5,
  },
  {
    id: 3,
    author: "Mehwish Hammad",
    time: "1 month ago",
    tag: "Facial & Haircut",
    text: "Today I took a facial and haircut, it was a very good experience. Facial was done by Rukhsana—she did a great job and the haircut was good as well.",
    stars: 5,
  },
  {
    id: 4,
    author: "Nida Akram",
    time: "7 months ago",
    tag: "Hydra Facial & Styling",
    text: "We got service done from Aaira. Hydra Facial was done by Sima Shah, makeup was done by Ayesha, and styling was done by Kiran. We really liked their work, thank you so much!",
    stars: 5,
  },
  {
    id: 5,
    author: "Hina Sheikh",
    time: "8 months ago",
    tag: "Bridal & Spa",
    text: "Today I took bridal service from Aaira Khan, Hydra Facial from Saima, pedicure, and body service from Munnaza. Both gave the best service, I felt very relaxed and totally satisfied!",
    stars: 5,
  },
  {
    id: 6,
    author: "Joti Sateesh",
    time: "2 weeks ago",
    tag: "Senior Artist Makeup",
    price: "Rs 4,000–6,000",
    text: "I got makeup done by a senior artist. She has a very soft nature and made a lot of effort in doing my makeup, which made us very satisfied.",
    stars: 5,
  },
  {
    id: 7,
    author: "Aneeqa Salman",
    time: "1 month ago",
    tag: "Waxing",
    text: "Good job! First time tried waxing and fully satisfied. Such a lovely and cooperative staff.",
    stars: 5,
  },
  {
    id: 8,
    author: "Rabia Rizwan",
    time: "6 months ago",
    tag: "Bridal & Management",
    text: "Wonderful experience and the manager lady there was so humble and cooperative. Will visit again for more services.",
    stars: 5,
  },
];

export const Testimonials = () => {
  return (
    <section
      className="w-full bg-[#FFF0F2]/60 px-5 md:px-12 py-14"
      id="reviews"
    >
      <div className="max-w-[1380px] mx-auto space-y-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F5DCE2] pb-6">
          <div className="space-y-1">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">
              Verified Client Reviews
            </span>
            <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#25181C]">
              Real Feedback from Google Maps
            </h2>
            <p className="text-xs text-[#4E4639]">
              Rated 4.6 Stars across recent visits for makeup, hair styling,
              Hydra Facials, and body treatments.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-stone-200 shadow-sm shrink-0">
            <span className="text-2xl font-bold text-[#25181C]">4.6</span>
            <div>
              <div className="flex text-amber-500 text-xs">★★★★★</div>
              <p className="text-[10px] text-stone-500 font-medium">
                Based on 60+ Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {realReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-5 rounded-xl shadow-sm border border-stone-100 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#974358] bg-[#FFD9DF]/60 px-2 py-0.5 rounded">
                    {rev.tag}
                  </span>
                  <span className="text-[10px] text-stone-400">{rev.time}</span>
                </div>

                <div className="flex text-amber-400 text-xs">
                  {"★".repeat(rev.stars)}
                </div>

                <p className="text-xs text-[#25181C] italic leading-relaxed">
                  “{rev.text}”
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex justify-between items-end">
                <div>
                  <p className="text-xs font-bold text-[#25181C]">
                    {rev.author}
                  </p>
                  <p className="text-[10px] text-stone-400">
                    Google Verified Client
                  </p>
                </div>
                {rev.price && (
                  <span className="text-[10px] font-semibold text-[#775A19] bg-[#FFDEA5]/30 px-2 py-0.5 rounded"></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
