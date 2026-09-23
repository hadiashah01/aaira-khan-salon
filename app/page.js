import { HeroSection } from "@/components/home/HeroSection";
import { SpecialOffers } from "@/components/home/SpecialOffers";
import { ServicesMenu } from "@/components/home/ServicesMenu";
import { Testimonials } from "@/components/home/Testimonials";
import { LocationMap } from "@/components/home/LocationMap";
import { Navbar } from "@/components/home/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFF8F8] font-sans text-[#25181C]">
      <Navbar />
      <HeroSection />
      <SpecialOffers />
      <ServicesMenu />
      <Testimonials />
      <LocationMap />

      {/* Global Disclaimer Footer Bar */}
      <footer className="w-full bg-[#25181C] text-stone-300 px-5 md:px-12 py-8 border-t border-stone-800 text-xs">
        <div className="max-w-345 mx-auto space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="font-serif text-base text-white font-semibold">
                Aaira Khan Salon &amp; Studio
              </p>
              <p className="mt-1 text-stone-400">
                Shop #1, Main Tariq Road, Delhi Society, Delhi CHS, Karachi,
                Sindh 75850, Pakistan.
              </p>
              <p className="text-stone-400">
                Call: 021-34536026 | WhatsApp: 0333-3959805.
              </p>
            </div>
            <p className="text-stone-400">
              © 2026 Aaira Khan Salon &amp; Studio. All Rights Reserved.
            </p>
          </div>
          <div className="pt-3 border-t border-stone-800 text-[11px] text-stone-400 leading-relaxed">
            <strong className="text-stone-300">Disclaimer:</strong> All
            services, promotions, and timings are subject to change directly by
            the salon. Information presented here is based on publicly available
            posts and directories up to 2025–2026. Please confirm all exact
            package details, pricing, and availability via phone or WhatsApp
            prior to booking.
          </div>
        </div>
      </footer>
    </main>
  );
}
