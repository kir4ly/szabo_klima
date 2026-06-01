"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Drag state lives in refs so the animation effect never re-runs (and never
  // resets the scroll position) when a drag starts or ends. That re-run was
  // what snapped the carousel back to the middle on every grab.
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  // Triple the images for seamless infinite scroll.
  const tripleImages = [...images, ...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const setWidth = () => container.scrollWidth / 3;

    // Position at the middle set once, on mount only.
    container.scrollLeft = setWidth();

    const autoScroll = () => {
      const w = setWidth();
      if (!isDraggingRef.current) {
        container.scrollLeft += 1;
      }
      // Keep the viewport inside the middle copy so it loops seamlessly.
      if (container.scrollLeft >= w * 2) {
        container.scrollLeft -= w;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += w;
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [images.length]);

  const startDrag = (pageX: number) => {
    const container = containerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = pageX;
    startScrollRef.current = container.scrollLeft;
  };

  const moveDrag = (pageX: number) => {
    const container = containerRef.current;
    if (!container || !isDraggingRef.current) return;
    const w = container.scrollWidth / 3;
    let target = startScrollRef.current - (pageX - startXRef.current);
    // Wrap during the drag too, shifting the anchor so motion stays continuous.
    if (target > w * 2) {
      startScrollRef.current -= w;
      target -= w;
    } else if (target < 0) {
      startScrollRef.current += w;
      target += w;
    }
    container.scrollLeft = target;
  };

  const endDrag = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="flex gap-4 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseDown={(e) => {
        e.preventDefault();
        startDrag(e.pageX);
      }}
      onMouseMove={(e) => moveDrag(e.pageX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].pageX)}
      onTouchMove={(e) => moveDrag(e.touches[0].pageX)}
      onTouchEnd={endDrag}
    >
      {tripleImages.map((img, i) => (
        <div key={i} className="flex-shrink-0 relative h-72 w-72 md:h-96 md:w-96">
          <Image
            src={`/gallery/${img}`}
            alt={`Klíma szerelés ${(i % images.length) + 1}`}
            fill
            sizes="(max-width: 768px) 288px, 384px"
            className="rounded-xl object-cover object-center shadow-lg pointer-events-none"
            draggable={false}
            loading="lazy"
            quality={82}
          />
        </div>
      ))}
    </div>
  );
}
