"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type PhotoSlide = {
  src: string;
  alt: string;
  caption: string;
  detail?: string;
};

type PhotoCarouselProps = {
  title: string;
  description?: string;
  slides: PhotoSlide[];
  imageClassName?: string;
  className?: string;
};

const SWIPE_THRESHOLD = 45;

export default function PhotoCarousel({
  title,
  description,
  slides,
  imageClassName,
  className,
}: PhotoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const totalSlides = slides.length;

  if (totalSlides === 0) {
    return null;
  }

  const goToIndex = (index: number) => {
    if (index < 0) {
      setActiveIndex(totalSlides - 1);
      return;
    }

    if (index >= totalSlides) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex(index);
  };

  const goToPrevious = () => goToIndex(activeIndex - 1);
  const goToNext = () => goToIndex(activeIndex + 1);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) {
      return;
    }

    const deltaX = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) {
      return;
    }

    if (deltaX > 0) {
      goToPrevious();
      return;
    }

    goToNext();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  };

  const currentSlide = slides[activeIndex];

  return (
    <section className={cn("flex flex-col gap-3", className)}>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        {description ? <p className="pt-1 text-sm">{description}</p> : null}
      </div>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} photo carousel`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="outline-none focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2"
      >
        <div
          className="relative"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          {slides.map((slide, index) => (
            <figure
              key={slide.src}
              className={cn(
                "transition-opacity duration-500",
                index === activeIndex
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-0 opacity-0",
              )}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                draggable={false}
                className={cn("w-full select-none", imageClassName)}
              />
            </figure>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-2 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm md:text-base">{currentSlide.caption}</p>
            {currentSlide.detail ? (
              <p className="text-xs text-black/70 md:text-sm">{currentSlide.detail}</p>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              className="border border-black/25 p-2 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
              aria-label={`Previous ${title} photo`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="border border-black/25 p-2 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
              aria-label={`Next ${title} photo`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2" role="tablist" aria-label={`${title} slides`}>
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === activeIndex}
                onClick={() => goToIndex(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border border-black/40 transition",
                  index === activeIndex ? "bg-black" : "bg-transparent hover:bg-black/20",
                )}
              />
            ))}
          </div>
          <p className="text-sm text-black/70">.{activeIndex + 1}</p>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing slide {activeIndex + 1} of {totalSlides}
      </p>
    </section>
  );
}
