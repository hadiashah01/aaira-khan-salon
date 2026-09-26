import { Navbar } from "@/app/components/home/Navbar";
import { HeroSection } from "@/app/components/home/HeroSection";
import { SpecialOffers } from "@/app/components/home/SpecialOffers";
import { ServicesMenu } from "@/app/components/home/ServicesMenu";
import { TeamHighlight } from "@/app/components/home/TeamHighlight";
import { Testimonials } from "@/app/components/home/Testimonials";
import { LocationMap } from "@/app/components/home/LocationMap";
import { WhyChooseUs } from "@/app/components/home/WhyChooseUs";
import { FinalCTA } from "@/app/components/home/FinalCTA";
import { FAQ } from "@/app/components/home/FAQ";
import Gallery from "@/app/components/home/Gallery";
import { MobileBookingBar } from "@/app/components/home/MobileBookingBar";

export default function HomePage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#FFF9FA] font-sans text-[#24171B] pb-16 md:pb-0"
    >
      <Navbar />

      <HeroSection />

      <SpecialOffers />
      <MobileBookingBar />

      <ServicesMenu />
      <FAQ />

      {/* <TeamHighlight /> */}
      <WhyChooseUs />
      <Gallery />
      <Testimonials />

      <LocationMap />
      <FinalCTA />

      <footer className="bg-[#24171B] px-5 py-10 text-stone-300 md:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-serif text-lg font-semibold text-white">
                Aaira Khan Salon & Studio
              </p>

              <p className="mt-2 max-w-lg text-[11px] leading-5 text-stone-400">
                Main Tariq Road, Delhi Society, PECHS, Karachi, Pakistan.
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-[11px]">
                <a
                  href="tel:+922134536026"
                  className="text-stone-300 hover:text-white"
                >
                  021-34536026
                </a>

                <a
                  href="https://wa.me/923333959805"
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-300 hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="md:text-right">
              <p className="text-[10px] uppercase tracking-wider text-stone-500">
                Quick Links
              </p>

              <div className="mt-3 flex flex-wrap gap-4 md:justify-end">
                <a
                  href="#services-catalog"
                  className="text-[11px] text-stone-300 hover:text-white"
                >
                  Services
                </a>

                <a
                  href="#reviews"
                  className="text-[11px] text-stone-300 hover:text-white"
                >
                  Reviews
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
            © {new Date().getFullYear()} Aaira Khan Salon & Studio
          </div>
        </div>
      </footer>
    </main>
  );
}
