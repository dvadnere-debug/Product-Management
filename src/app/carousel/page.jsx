"use client";

import { useRef } from "react";
import {cards} from "./data"

export default function CardCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      
      
      <div className="flex justify-between mb-4">
        <button onClick={() => scroll("left")} className="px-4 py-2 bg-gray-200 rounded">
          L
        </button>
        <button onClick={() => scroll("right")} className="px-4 py-2 bg-gray-200 rounded">
          R
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none]"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-62.5 bg-white border-black rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
