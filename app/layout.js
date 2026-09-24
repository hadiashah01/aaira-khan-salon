import "./globals.css";

export const metadata = {
  title: "Aaira Khan Salon & Studio | Bridal Makeup & Beauty in Karachi",
  description:
    "Aaira Khan Salon & Studio on Main Tariq Road, Karachi. Explore bridal makeup, party makeup, hair, skin and beauty services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
