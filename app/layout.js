import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Bodoni_Moda, Plus_Jakarta_Sans } from "next/font/google";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
export const metadata = {
  metadataBase: new URL("https://aaira-khan-salon.vercel.app/"),

  title: {
    default: "Aaira Khan Salon & Studio | Bridal Makeup in Karachi",
    template: "%s | Aaira Khan Salon & Studio",
  },

  description:
    "Discover bridal makeup, party makeup, hair, skin and beauty services at Aaira Khan Salon & Studio on Main Tariq Road, Karachi.",

  applicationName: "Aaira Khan Salon & Studio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Aaira Khan Salon & Studio",
    title: "Aaira Khan Salon & Studio | Bridal Makeup in Karachi",
    description:
      "Bridal makeup, party makeup, hair, skin and beauty services at Main Tariq Road, Karachi.",
    url: "https://aaira-khan-salon.vercel.app/",
    images: [
      {
        url: "/images/og-image.jfif",
        width: 1200,
        height: 630,
        alt: "Aaira Khan Salon & Studio in Karachi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aaira Khan Salon & Studio | Bridal Makeup in Karachi",
    description:
      "Bridal makeup, party makeup, hair, skin and beauty services at Main Tariq Road, Karachi.",
    images: ["/images/og-image.jfif"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="6Yt3Sm_zxUbSaJHLghqlo9xt33aZkVaNaURhEtPiuo0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>

      <body>{children}</body>
      <Analytics />
    </html>
  );
}
