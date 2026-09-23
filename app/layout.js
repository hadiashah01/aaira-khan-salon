import "./globals.css";

export const metadata = {
  title: "Aaira Khan Salon & Studio | Tariq Road, Karachi",
  description: "Bridal makeup, party glam, hair, and skin services located at Main Tariq Road, Delhi Society, Karachi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}