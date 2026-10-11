"use client";

import { useEffect, useState } from "react";

export const HeroVideo = () => {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updatePlayback = () => setShouldPlay(!motionPreference.matches);

    updatePlayback();
    motionPreference.addEventListener("change", updatePlayback);

    return () => motionPreference.removeEventListener("change", updatePlayback);
  }, []);

  return (
    <div className="relative aspect-[2/5] max-h-[500px] w-full lg:w-[80%] overflow-hidden rounded-2xl  ring-[var(--color-primary)] ring-2 ring-offset-6 ring-offset-6 bg-[var(--color-background)]">
      <video
        autoPlay={shouldPlay}
        loop
        muted
        playsInline
        poster="/images/og-image.jfif"
        preload={shouldPlay ? "metadata" : "none"}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
