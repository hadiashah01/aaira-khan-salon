"use client";

export const HeroVideo = () => {
  return (
    <div className="relative w-full aspect-[9/16] max-h-[560px] overflow-hidden bg-black shadow-lg border border-[#F5DCE2] sm:aspect-[4/5] lg:aspect-[4/5]">
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