"use client";

import React, { useEffect, useState } from "react";

export const LocationMap = () => {
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    const loadBusinessData = async () => {
      const response = await fetch("/api/business");
      const data = await response.json();

      setBusiness(data);
    };

    loadBusinessData();
  }, []);

  if (!business) {
    return null;
  }

  return (
    <section id="location" className="bg-white px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1380px]">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8A6330]">
            LOCATION & CONTACT
          </span>

          <h2 className="mt-2 font-serif text-3xl font-bold text-[#24171B] md:text-4xl">
            Visit the studio
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#625356]">
            Find the studio on Main Tariq Road and contact the salon directly
            before visiting to confirm availability.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          {/* Details */}
          <div className="lg:col-span-4">
            <div className="flex h-full flex-col rounded-2xl border border-[#E9DFE2] bg-[#FFF8F9] p-6">
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#974358]">
                    location_on
                  </span>

                  <div>
                    <h3 className="text-xs font-bold text-[#24171B]">
                      Studio Address
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-[#625356]">
                      {business.address}
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#974358]">
                    call
                  </span>

                  <div>
                    <h3 className="text-xs font-bold text-[#24171B]">
                      Contact
                    </h3>

                    <div className="mt-1 space-y-1 text-sm leading-6">
                      <a
                        href={`tel:${business.phone.replace(/\D/g, "")}`}
                        className="block text-[#625356] hover:text-[#974358]"
                      >
                        {business.phone}
                      </a>

                      <a
                        href={`https://wa.me/${business.whatsapp.replace(
                          /\D/g,
                          "",
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-[#625356] hover:text-[#974358]"
                      >
                        WhatsApp: {business.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#974358]">
                    schedule
                  </span>

                  <div>
                    <h3 className="text-xs font-bold text-[#24171B]">
                      Opening Hours
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-[#625356]">
                      Monday – Sunday
                      <br />
                      {business.hours.monday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Directions */}
              <div className="mt-auto pt-7">
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#24171B] px-4 text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#3A292E]"
                >
                  Get Directions
                  <span className="material-symbols-outlined text-[15px]">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-[#E9DFE2] bg-[#F4F0F1] shadow-sm lg:col-span-8">
            <iframe
              title={`${business.name} location map`}
              src={business.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[320px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
