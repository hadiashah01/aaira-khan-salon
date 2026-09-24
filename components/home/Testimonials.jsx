"use client";

import React from "react";

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
    text: "I searched a lot whole week and finally decided on Aaira salon. It was my first experience and I liked it a lot! Staff is very cooperative and polite.",
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
    tag: "Hydra Facial",
    text: "We got service done from Aaira. Hydra Facial was done by Sima Shah, makeup was done by Ayesha, and styling was done by Kiran. We really liked their work.",
    stars: 5,
  },
  {
    id: 5,
    author: "Hina Sheikh",
    time: "8 months ago",
    tag: "Bridal & Spa",
    text: "Today I took bridal service from Aaira Khan, Hydra Facial from Saima, pedicure, and body service from Munnaza. Both gave the best service, I felt very relaxed and totally satisfied.",
    stars: 5,
  },
  {
    id: 6,
    author: "Joti Sateesh",
    time: "2 weeks ago",
    tag: "Makeup",
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
const googleMapsUrl =
  "https://www.google.com/maps/place/Aaira+Khan+Salon+%26+Studio/@24.877671,67.0610268,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33f26fc1d9107:0x4df05e686c43cefe!8m2!3d24.877671!4d67.0636071!16s%2Fg%2F11vwh17dp2";

export const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="bg-[#FFF5F7] px-5 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Header */}
        <div className="flex flex-col gap-5 border-b border-[#EEDDE1] pb-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8A6330]">
              CLIENT FEEDBACK
            </span>

            <h2 className="mt-2 font-serif text-3xl font-bold text-[#24171B] md:text-4xl">
              What clients are saying
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#625356]">
              Selected customer feedback highlighting experiences with makeup,
              hair, skin and beauty services.
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-[#DCCED2] bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-[#24171B] transition-colors hover:bg-[#FFF9FA] md:self-auto"
          >
            <span className="text-base">★</span>
            View Google Maps
            <span className="material-symbols-outlined text-sm">
              open_in_new
            </span>
          </a>
        </div>

        {/* Reviews */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {realReviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-xl border border-[#E8DEE1] bg-white p-5 shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-md bg-[#F9E5E9] px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#974358]">
                    {review.tag}
                  </span>

                  <span className="shrink-0 text-[9px] text-[#958589]">
                    {review.time}
                  </span>
                </div>

                <div
                  className="mt-3 text-[11px] tracking-wide text-[#B27722]"
                  aria-label={`${review.stars} out of 5 stars`}
                >
                  {"★".repeat(review.stars)}
                </div>

                <blockquote className="mt-3 text-sm leading-5 text-[#403437]">
                  “{review.text}”
                </blockquote>
              </div>

              <div className="mt-5 border-t border-[#F0E7E9] pt-3">
                <p className="text-xs font-bold text-[#24171B]">
                  {review.author}
                </p>

                <p className="mt-0.5 text-[9px] text-[#958589]">
                  Google review
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};