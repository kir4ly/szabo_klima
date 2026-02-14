"use client";

import { useRef, useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollSpeed] = useState(1);
  const animationRef = useRef<number>(null);

  // Triple the images for seamless infinite scroll
  const tripleImages = [...images, ...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Start from the middle set
    const singleSetWidth = container.scrollWidth / 3;
    container.scrollLeft = singleSetWidth;

    const autoScroll = () => {
      if (!isDragging && container) {
        container.scrollLeft += autoScrollSpeed;

        // Reset to middle when reaching the end
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft = singleSetWidth;
        }
        // Reset to middle when scrolling back past start
        if (container.scrollLeft <= 0) {
          container.scrollLeft = singleSetWidth;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, autoScrollSpeed, images.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="flex gap-4 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {tripleImages.map((img, i) => (
        <div key={i} className="flex-shrink-0">
          <img
            src={`/gallery/${img}`}
            alt={`Klíma szerelés ${(i % images.length) + 1}`}
            className="h-72 w-72 rounded-xl object-cover object-center shadow-lg md:h-96 md:w-96 pointer-events-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
