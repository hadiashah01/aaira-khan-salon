import React from 'react';

export const LocationMap = () => {
  return (
    <section className="w-full px-5 md:px-12 py-12">
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Verified Address Block */}
        <div className="lg:col-span-5 bg-white p-6 rounded-xl shadow-sm border border-stone-100 space-y-5">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">Visit Studio</span>
            <h2 className="font-serif text-[26px] font-medium text-[#25181C] mt-0.5">Main Tariq Road Location</h2>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#775A19] text-[18px] shrink-0 mt-0.5">pin_drop</span>
              <div>
                <p className="font-bold text-[#25181C]">Studio Address</p>
                <p className="text-[#4E4639]">Shop #1, Main Tariq Road, Delhi Society, Delhi CHS, Karachi, Sindh 75850, Pakistan.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#775A19] text-[18px] shrink-0 mt-0.5">call</span>
              <div>
                <p className="font-bold text-[#25181C]">Contact Numbers</p>
                <p className="text-[#4E4639]">Landline: 021-34536026</p>
                <p className="text-[#4E4639]">WhatsApp: 0333-3959805</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#775A19] text-[18px] shrink-0 mt-0.5">schedule</span>
              <div>
                <p className="font-bold text-[#25181C]">Opening Hours</p>
                <p className="text-[#4E4639]">Operating hours vary by day. Please call or WhatsApp ahead to confirm studio timings or arrange early bridal slots.</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              className="inline-flex items-center justify-center gap-2 bg-[#775A19] text-white px-5 py-2.5 rounded text-xs font-semibold hover:bg-[#624a14] transition-all w-full"
              href="https://maps.app.goo.gl/Upabu4KGUDtyvkTF8"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">directions</span>
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="lg:col-span-7 bg-[#FFE8ED] rounded-xl overflow-hidden border border-[#F5DCE2] min-h-[300px] flex items-center justify-center p-6 text-center">
          <div className="space-y-2">
            <span className="material-symbols-outlined text-[#974358] text-[36px]">map</span>
            <p className="text-sm font-semibold text-[#25181C]">Aaira Khan Salon &amp; Studio</p>
            <p className="text-xs text-[#4E4639]">Main Tariq Road, Delhi Society, Karachi</p>
            <a
              className="inline-block text-[11px] font-bold text-[#974358] uppercase tracking-wider underline pt-1"
              href="https://maps.app.goo.gl/Upabu4KGUDtyvkTF8"
              target="_blank"
              rel="noreferrer"
            >
              Open External Map Link
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};