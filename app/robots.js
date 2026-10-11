export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://aaira-khan-salon.vercel.app/sitemap.xml",
  };
}