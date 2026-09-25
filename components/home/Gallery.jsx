import { galleryImages } from "@/app/data/gallery";
export default function Gallery() {
  return (
    <section className="bg-[#FFF8F8] px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1380px]">
        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#974358]">
            Our Work
          </p>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            See the Experience
          </h2>

          <p className="mt-3 text-base leading-relaxed text-stone-600 md:text-lg">
            A glimpse of our salon, beauty services, and the work we create for
            our clients.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {/* Large Image */}
          <div className="group col-span-2 row-span-2 overflow-hidden rounded-2xl">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="h-full min-h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Other Images */}
          {galleryImages.slice(1).map((image, index) => (
            <div
              key={index}
              className="group aspect-square overflow-hidden rounded-2xl "
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
