"use client";

import React, { useEffect, useState } from "react";

export const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");

  useEffect(() => {
    const loadTestimonialsData = async () => {
      const reviewsResponse = await fetch("/api/reviews");
      const reviewsData = await reviewsResponse.json();

      const businessResponse = await fetch("/api/business");
      const businessData = await businessResponse.json();

      setReviews(reviewsData);
      setGoogleMapsUrl(businessData.googleMapsUrl);
    };

    loadTestimonialsData();
  }, []);

  return (
    <section id="reviews" className="bg-[#FFF5F7] px-5 py-16 md:px-12 md:py-20">
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
          {reviews.map((review) => (
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
