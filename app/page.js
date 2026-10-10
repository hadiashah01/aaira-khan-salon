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
import { SocialMediaStrip } from "./components/home/SocialMediaStrip";
import { Footer } from "@/app/components/home/Footer";
import { getSafeExternalUrl } from "@/app/lib/contact";

const toSchemaTime = (time) => {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;

  let hour = Number(match[1]) % 12;
  if (match[3].toUpperCase() === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${match[2]}`;
};

export default function HomePage() {
  const openingHoursSpecification = Object.entries(business.hours).flatMap(
    ([day, range]) => {
      const dayOfWeek = `${day[0].toUpperCase()}${day.slice(1)}`;
      const [openLabel, closeLabel] =
        typeof range === "string" ? range.split(/\s*[–-]\s*/) : [];
      const opens = openLabel ? toSchemaTime(openLabel) : null;
      const closes = closeLabel ? toSchemaTime(closeLabel) : null;

      if (!opens || !closes) return [];

      return [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek,
          opens,
          closes,
        },
      ];
    },
  );

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.name,
    image: "https://aaira-khan-salon.vercel.app/images/og-image.jfif",
    url: "https://aaira-khan-salon.vercel.app/",
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
    sameAs: [
      business.socials.instagram,
      business.socials.facebook,
      business.socials.youtube,
      business.socials.tiktok,
    ].map(getSafeExternalUrl).filter(Boolean),
    openingHoursSpecification,
  };

  return (
    <main
      id="top"
      className="min-h-screen bg-[var(--color-surface-light)] pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] font-sans text-[var(--color-text-dark)] md:pb-0"
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
      <SocialMediaStrip />
      <FinalCTA />
      <MobileBookingBar />
      <Footer />
    </main>
  );
}