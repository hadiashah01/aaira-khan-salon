"use client";

export const HeroVideo = () => {
  return (
    <div className="relative w-full aspect-[4/5] max-h-[620px] overflow-hidden rounded-3xl bg-[#0d090a] shadow-2xl">
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