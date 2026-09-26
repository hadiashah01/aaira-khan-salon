import { Navbar } from "@/app/components/home/Navbar";
import { HeroSection } from "@/app/components/home/HeroSection";
import { SpecialOffers } from "@/app/components/home/SpecialOffers";
import { ServicesMenu } from "@/app/components/home/ServicesMenu";
import { Testimonials } from "@/app/components/home/Testimonials";
import { LocationMap } from "@/app/components/home/LocationMap";
import { WhyChooseUs } from "@/app/components/home/WhyChooseUs";
import { FinalCTA } from "@/app/components/home/FinalCTA";
import { FAQ } from "@/app/components/home/FAQ";
import Gallery from "@/app/components/home/Gallery";
import { MobileBookingBar } from "@/app/components/home/MobileBookingBar";
import { business } from "@/app/data/business";
import { getPhoneUrl, getWhatsAppBaseUrl } from "@/app/lib/contact";

export default function HomePage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#FFF9FA] font-sans text-[#24171B] pb-16 md:pb-0"
    >
      <Navbar />

      <HeroSection />

      <SpecialOffers />

      <ServicesMenu />

      <FAQ />

      <WhyChooseUs />

      <Gallery />

      <Testimonials />

      <LocationMap />

      <FinalCTA />

      <MobileBookingBar />

      <footer className="bg-[#24171B] px-5 py-10 text-stone-300 md:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Business */}
            <div>
              <p className="font-serif text-lg font-semibold text-white">
                {business.name}
              </p>

              <p className="mt-2 max-w-lg text-[11px] leading-5 text-stone-400">
                {business.address}.
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-[11px]">
                <a
                  href={getPhoneUrl()}
                  className="text-stone-300 hover:text-white"
                >
                  {business.phone}
                </a>

                <a
                  href={getWhatsAppBaseUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white"
                >
                  WhatsApp
                </a>

                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white"
                >
                  Directions
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:text-right">
              <p className="text-[10px] uppercase tracking-wider text-stone-500">
                Quick Links
              </p>

              <div className="mt-3 flex flex-wrap gap-4 md:justify-end">
                <a
                  href="#top"
                  className="text-[11px] text-stone-300 hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#promotions"
                  className="text-[11px] text-stone-300 hover:text-white"
                >
                  Offers
                </a>

                <a
                  href="#services-catalog"
                  className="text-[11px] text-stone-300 hover:text-white"
                >
                  Services
                </a>

                <a
                  href="#gallery"
                  className="text-[11px] text-stone-300 hover:text-white"
                >
                  Gallery
                </a>

                <a
                  href="#reviews"
                  className="text-[11px] text-stone-300 hover:text-white"
                >
                  Reviews
                </a>

                <a
                  href="#faq"
                  className="text-[11px] text-stone-300 hover:text-white"
                >
                  FAQ
                </a>

                <a
                  href="#location"
                  className="text-[11px] text-stone-300 hover:text-white"
                >
                  Location
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-stone-800 pt-5 text-[10px] leading-5 text-stone-500">
            Information, services, rates and opening hours may change. Please
            confirm current availability and booking details directly with the
            salon.
          </div>

          <div className="mt-4 text-[10px] text-stone-500">
            © {new Date().getFullYear()} {business.name}
          </div>
        </div>
      </footer>
    </main>
  );
}