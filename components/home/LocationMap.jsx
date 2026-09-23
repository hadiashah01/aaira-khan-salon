'use client';

import React from 'react';

export const LocationMap = () => {
  return (
    <section className="w-full px-5 md:px-12 py-12 bg-white" id="location">
      <div className="max-w-[1380px] mx-auto space-y-6">
        
        <div>
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">LOCALITY &amp; CONTACT</span>
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#25181C] mt-0.5">
            Visit Our Studio – Main Tariq Road, Karachi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Details Column */}
          <div className="space-y-5 bg-[#FFF8F8] p-6 rounded-xl border border-stone-200">
            <div>
              <h3 className="font-serif text-base font-bold text-[#25181C] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#974358] text-lg">location_on</span>
                Studio Address
              </h3>
              <p className="text-xs text-[#4E4639] mt-1 leading-relaxed">
                Shop #1, Main Tariq Road, Delhi Society, Delhi CHS, Karachi, Sindh 75850, Pakistan.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold text-[#25181C] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#974358] text-lg">call</span>
                Contact Numbers
              </h3>
              <p className="text-xs text-[#4E4639] mt-1 space-y-1">
                <span className="block">Landline: <a href="tel:02134536026" className="font-semibold underline">021-34536026</a></span>
                <span className="block">WhatsApp: <a href="https://wa.me/923333959805" target="_blank" rel="noreferrer" className="font-semibold underline">0333-3959805</a></span>
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold text-[#25181C] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#974358] text-lg">schedule</span>
                Opening Hours
              </h3>
              <p className="text-xs text-[#4E4639] mt-1 leading-relaxed">
                Operating hours vary by day. Please call or WhatsApp ahead to confirm studio timings or arrange early bridal slots.
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/Upabu4KGUDtyvkTF8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#25181C] text-white py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors"
            >
              <span>Get Directions on Google Maps</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>

          {/* Map Embed Container */}
          <div className="md:col-span-2 rounded-xl overflow-hidden border border-stone-200 h-[340px] bg-stone-100">
            <iframe
              title="Aaira Khan Salon Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.663185360875!2d67.0620803!3d24.8753239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eeb6d2b5555%3A0x6283b8b15d038fa6!2sAaira%20Khan%20Salon%20%26%20Studio!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};