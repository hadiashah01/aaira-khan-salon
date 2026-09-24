"use client";

import React from "react";

const googleMapsUrl =
  "https://www.google.com/maps/place/Aaira+Khan+Salon+%26+Studio/@24.877671,67.0610268,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33f26fc1d9107:0x4df05e686c43cefe!8m2!3d24.877671!4d67.0636071!16s%2Fg%2F11vwh17dp2";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.467472093217!2d67.0610268!3d24.877671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f26fc1d9107%3A0x4df05e686c43cefe!2sAaira%20Khan%20Salon%20%26%20Studio!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk";

export const LocationMap = () => {
  return (
    <section
      id="location"
      className="bg-white px-5 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-[1380px]">
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
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#974358]">
                    location_on
                  </span>

                  <div>
                    <h3 className="text-xs font-bold text-[#24171B]">
                      Studio Address
                    </h3>

                    <p className="mt-1 text-sm  leading-5 text-[#625356]">
                      Main Tariq Road, Delhi Society, PECHS, Karachi, Pakistan
                    </p>
                  </div>
                </div>

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
                        href="tel:+922134536026"
                        className="block text-[#625356]  hover:text-[#974358]"
                      >
                        021-34536026
                      </a>

                      <a
                        href="https://wa.me/923333959805"
                        target="_blank"
                        rel="noreferrer"
                        className="block text-[#625356]  hover:text-[#974358]"
                      >
                        WhatsApp: +92 333 3959805
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#974358]">
                    schedule
                  </span>

                  <div>
                    <h3 className="text-xs font-bold text-[#24171B]">
                      Opening Hours
                    </h3>

                    <p className="mt-1 text-sm  leading-5 text-[#625356]">
                      Monday – Sunday
                      <br />
                      11:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-7">
                <a
                  href={googleMapsUrl}
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
              title="Aaira Khan Salon & Studio location map"
              src={mapEmbedUrl}
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