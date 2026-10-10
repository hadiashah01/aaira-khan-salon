import { business } from "@/app/data/business";
import {
  getPhoneUrl,
  getSafeExternalUrl,
  getWhatsAppBaseUrl,
} from "@/app/lib/contact";

import { TikTokIcon } from "@/app/components/ui/TikTokIcon";
import { FacebookIcon } from "@/app/components/ui/FacebookIcon";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";

export function Footer() {
  const socials = business.socials || {};
  const googleMapsUrl = getSafeExternalUrl(business.googleMapsUrl);

  return (
    <footer className="w-full max-w-full overflow-x-hidden border-t border-[var(--color-border-light)] bg-[var(--color-background)] py-16 text-[var(--color-text)] md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-8">
          
          {/* Brand Info & Contact */}
          <div className="space-y-4 md:col-span-7 lg:col-span-8">
            <div className="flex flex-col">
              <h2 className="font-serif text-2xl font-bold tracking-wide text-[var(--color-text)]">
                Aaira Khan
              </h2>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.26em] text-[var(--color-primary)]">
                Salon &amp; Studio
              </span>
            </div>

            <p className="max-w-md text-xs leading-relaxed text-[var(--color-text-muted)]">
              {business.address}.
            </p>

            {/* Quick Actions / Contact Links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-xs font-medium">
              <a
                href={getPhoneUrl()}
                className="cursor-pointer whitespace-nowrap text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)]"
              >
                {business.phone}
              </a>

              <a
                href={getWhatsAppBaseUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)]"
              >
                <WhatsAppIcon className="h-4 w-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              {googleMapsUrl && (
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer whitespace-nowrap text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)]"
                >
                  Directions
                </a>
              )}
            </div>

            {/* Social Media Links (Filled circular badges with clear outlined SVG icons) */}
            <div className="pt-2">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                Follow the Studio
              </p>

              <div className="flex flex-wrap gap-3">
                {/* Instagram */}
                {getSafeExternalUrl(socials.instagram) && <a
                  href={getSafeExternalUrl(socials.instagram)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transform-none cursor-pointer rounded-full bg-[var(--color-surface)] p-3 text-[var(--color-text)] transition-colors duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>}

                {/* Facebook */}
                {getSafeExternalUrl(socials.facebook) && <a
                  href={getSafeExternalUrl(socials.facebook)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transform-none cursor-pointer rounded-full bg-[var(--color-surface)] p-3 text-[var(--color-text)] transition-colors duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95"
                >
                  <FacebookIcon className="h-5 w-5 fill-current" />
                </a>}

                {/* YouTube */}
                {getSafeExternalUrl(socials.youtube) && <a
                  href={getSafeExternalUrl(socials.youtube)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="transform-none cursor-pointer rounded-full bg-[var(--color-surface)] p-3 text-[var(--color-text)] transition-colors duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                  </svg>
                </a>}

                {/* TikTok */}
                {getSafeExternalUrl(socials.tiktok) && <a
                  href={getSafeExternalUrl(socials.tiktok)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="transform-none cursor-pointer rounded-full bg-[var(--color-surface)] p-3 text-[var(--color-text)] transition-colors duration-300 ease-out hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] active:scale-95"
                >
                  <TikTokIcon className="h-5 w-5 fill-current" />
                </a>}
              </div>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div className="space-y-3 md:col-span-5 md:text-right lg:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Quick Links
            </p>

            <nav className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs font-medium md:justify-end">
              <a href="#top" className="cursor-pointer whitespace-nowrap text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)]">
                Home
              </a>
              <a href="#promotions" className="cursor-pointer whitespace-nowrap text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)]">
                Offers
              </a>
              <a href="#services-catalog" className="cursor-pointer whitespace-nowrap text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)]">
                Services
              </a>
              <a href="#gallery" className="cursor-pointer whitespace-nowrap text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)]">
                Gallery
              </a>
              <a href="#reviews" className="cursor-pointer whitespace-nowrap text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)]">
                Reviews
              </a>
              <a href="#faq" className="cursor-pointer whitespace-nowrap text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)]">
                FAQ
              </a>
              <a href="#location" className="cursor-pointer whitespace-nowrap text-[var(--color-text)] transition-all duration-300 ease-out hover:text-[var(--color-primary)]">
                Location
              </a>
            </nav>
          </div>

        </div>

        {/* Bottom Bar - Copyright Only */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border-light)]/40 pt-6 text-xs text-[var(--color-text-muted)] md:flex-row">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}