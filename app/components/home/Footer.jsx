import { business } from "@/app/data/business";
import { getPhoneUrl, getWhatsAppBaseUrl } from "@/app/lib/contact";

import { TikTokIcon } from "@/app/components/ui/TikTokIcon";
import { FacebookIcon } from "@/app/components/ui/FacebookIcon";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-[#0d090a] text-[#f5f0f2] border-t border-[#2d2226] px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 items-start">
          
          {/* Brand Info & Contact */}
          <div className="md:col-span-7 lg:col-span-8 space-y-5">
            <h2 className="font-serif text-2xl font-bold tracking-wide text-white">
              {business.name}
            </h2>

            <p className="max-w-md text-xs leading-relaxed text-[#a3969a]">
              {business.address}.
            </p>

            {/* Quick Actions / Contact Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium">
              <a
                href={getPhoneUrl()}
                className="text-[#f5f0f2] hover:text-[#d4af37] transition-colors"
              >
                {business.phone}
              </a>

              <a
                href={getWhatsAppBaseUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#f5f0f2] hover:text-[#d4af37] transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5f0f2] hover:text-[#d4af37] transition-colors"
              >
                Directions
              </a>
            </div>

            {/* Social Media Links (Filled circular badges with clear outlined SVG icons) */}
            <div className="pt-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a3969a] mb-3">
                Follow the Studio
              </p>

              <div className="flex flex-wrap gap-3">
                {/* Instagram */}
                <a
                  href={business.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 bg-[#181214] hover:bg-[#d4af37] text-white hover:text-[#0d090a] rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={business.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-3 bg-[#181214] hover:bg-[#d4af37] text-white hover:text-[#0d090a] rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                >
                  <FacebookIcon className="h-5 w-5 fill-current" />
                </a>

                {/* YouTube */}
                <a
                  href={business.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-3 bg-[#181214] hover:bg-[#d4af37] text-white hover:text-[#0d090a] rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href={business.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="p-3 bg-[#181214] hover:bg-[#d4af37] text-white hover:text-[#0d090a] rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                >
                  <TikTokIcon className="h-5 w-5 fill-current" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div className="md:col-span-5 lg:col-span-4 md:text-right space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a3969a]">
              Quick Links
            </p>

            <nav className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs font-medium md:justify-end">
              <a href="#top" className="text-[#f5f0f2] hover:text-[#d4af37] transition-colors">
                Home
              </a>
              <a href="#promotions" className="text-[#f5f0f2] hover:text-[#d4af37] transition-colors">
                Offers
              </a>
              <a href="#services-catalog" className="text-[#f5f0f2] hover:text-[#d4af37] transition-colors">
                Services
              </a>
              <a href="#gallery" className="text-[#f5f0f2] hover:text-[#d4af37] transition-colors">
                Gallery
              </a>
              <a href="#reviews" className="text-[#f5f0f2] hover:text-[#d4af37] transition-colors">
                Reviews
              </a>
              <a href="#faq" className="text-[#f5f0f2] hover:text-[#d4af37] transition-colors">
                FAQ
              </a>
              <a href="#location" className="text-[#f5f0f2] hover:text-[#d4af37] transition-colors">
                Location
              </a>
            </nav>
          </div>

        </div>

        {/* Bottom Bar - Copyright Only */}
        <div className="mt-12 border-t border-[#2d2226] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a3969a]">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}