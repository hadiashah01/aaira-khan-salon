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

import { YouTubeIcon } from "@/app/components/ui/YouTubeIcon";
import { TikTokIcon } from "@/app/components/ui/TikTokIcon";
import { InstagramIcon } from "@/app/components/ui/InstagramIcon";
import { FacebookIcon } from "@/app/components/ui/FacebookIcon";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";

export default function HomePage() {
 const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: business.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  telephone: business.phone,
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.coordinates.latitude,
    longitude: business.coordinates.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "21:00",
    },
  ],
};
  return (
    <main
      id="top"
      className="min-h-screen bg-[#FFF9FA] font-sans text-[#24171B] pb-16 md:pb-0"
    >
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
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

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px]">
                <a
                  href={getPhoneUrl()}
                  className="text-stone-300 transition-colors hover:text-white"
                >
                  {business.phone}
                </a>

                <a
                  href={getWhatsAppBaseUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp
                </a>

                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 transition-colors hover:text-white"
                >
                  Directions
                </a>
              </div>

              {/* Social links */}
              <div className="mt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                  Follow the Studio
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={business.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="rounded-lg border border-stone-700 px-3 py-2 text-[10px] font-semibold text-stone-300 transition-colors hover:border-stone-500 hover:text-white"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={business.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="rounded-lg border border-stone-700 px-3 py-2 text-[10px] font-semibold text-stone-300 transition-colors hover:border-stone-500 hover:text-white"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={business.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="rounded-lg border border-stone-700 px-3 py-2 text-[10px] font-semibold text-stone-300 transition-colors hover:border-stone-500 hover:text-white"
                  >
                    <YouTubeIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={business.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="rounded-lg border border-stone-700 px-3 py-2 text-[10px] font-semibold text-stone-300 transition-colors hover:border-stone-500 hover:text-white"
                  >
                    <TikTokIcon className="h-4 w-4" />
                  </a>
                </div>
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
