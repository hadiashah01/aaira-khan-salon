export const HeroVideo = () => {
  return (
    <div className="relative w-full h-[460px] rounded-2xl overflow-hidden bg-black shadow-lg border border-[#F5DCE2]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center"
      >
        <source src="/videos/hero-reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};