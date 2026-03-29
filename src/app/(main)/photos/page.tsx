"use client";

import PhotoCarousel, { type PhotoSlide } from "@/components/PhotoCarousel";

const singlePhotos: PhotoSlide[] = [
  {
    src: "/photos/john-nash.webp",
    alt: "john-nash",
    caption: "@HackPrinceton",
  },
  {
    src: "/photos/james-webb.webp",
    alt: "james-webb",
    caption: "A picture of James-Webb Telescope launch 10,000+ miles away from my view.",
    detail: "Shot on OnePlus 6",
  },
  {
    src: "/photos/metallica.webp",
    alt: "metallica",
    caption: "\\m/ James & Kirk from Metallica.",
    detail:
      "Kirk is playing Greeny, the legendary guitar once owned by Peter Green and Gary Moore.",
  },
  {
    src: "/photos/bagheera.webp",
    alt: "bagheera",
    caption: "@Shenandoah",
    detail: "My friend Bagheera likes to stargaze.",
  },
];

const appalachianPhotos: PhotoSlide[] = [
  {
    src: "/photos/appalachian-1.webp",
    alt: "appalachian-1",
    caption: ".1",
  },
  {
    src: "/photos/appalachian-2.webp",
    alt: "appalachian-2",
    caption: ".2",
  },
  {
    src: "/photos/appalachian-3.webp",
    alt: "appalachian-3",
    caption: ".3",
  },
  {
    src: "/photos/appalachian-4.webp",
    alt: "appalachian-4",
    caption: ".4",
  },
];

const shenandoahPhotos: PhotoSlide[] = [
  {
    src: "/photos/shenandoah-1.webp",
    alt: "shenandoah-1",
    caption: ".1",
  },
  {
    src: "/photos/shenandoah-2.webp",
    alt: "shenandoah-2",
    caption: ".2",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl">
      <h1 className="pb-4 text-3xl font-bold">Photos</h1>
      <p>Here are some of my favourite photos.</p>

      <div className="min-h-screen gap-3 pt-4">
        <PhotoCarousel
          title="Portrait Notes"
          description="A quick reel from concerts, skies, and friends."
          slides={singlePhotos}
          frameClassName="w-full max-w-xs md:max-w-none md:h-175 md:w-150"
          className="pb-4"
        />

        <PhotoCarousel
          title="The Appalachian: One of the oldest biome on the planet."
          slides={appalachianPhotos}
          frameClassName="w-full aspect-[4/3]"
          className="pt-2"
        />

        <PhotoCarousel
          title="Shenandoah"
          slides={shenandoahPhotos}
          frameClassName="w-full aspect-[4/3]"
          className="pt-2"
        />
      </div>
    </div>
  );
}
