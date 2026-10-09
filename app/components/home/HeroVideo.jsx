"use client";

export const HeroVideo = () => {
  return (
    <div className="relative aspect-[4/5] max-h-[620px] w-full overflow-hidden rounded-2xl bg-[var(--color-background)]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};