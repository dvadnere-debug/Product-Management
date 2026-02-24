"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/banners/banner1.jpg",
  "/banners/banner2.jpg",
  "/banners/banner3.jpg",
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden">

      {/* Banner Image */}
      <Image
        src={images[index]}
        alt="banner"
        fill
        priority
        className="object-cover"
      />

      {/* Left Arrow */}
      <button
        onClick={() =>
          setIndex(index === 0 ? images.length - 1 : index - 1)
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 px-3 py-1 rounded-full"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setIndex((index + 1) % images.length)
        }
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 px-3 py-1 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}