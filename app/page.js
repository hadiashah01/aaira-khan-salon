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

export default function HomePage() {
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
    ],
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
      <SocialMediaStrip />
      <MobileBookingBar />
      <Footer />
    </main>
  );
}