'use client'

import Image from "next/image"
import { ArrowUp } from "lucide-react"

const destinations = [
  {
    id: 1,
    title: "Türkiye",
    image: "/soon/Turkye.jpg",
    description:
      "Where East meets West. Explore the history of Istanbul, the hot air balloons of Cappadocia, and the beaches of Antalya. An unforgettable journey of shopping and world-class cuisine.",
    launch: "Launching Soon",
  },
  {
    id: 2,
    title: "Italy",
    image: "/soon/italy.jpg",
    description:
      "The soul of art and taste. Explore the history of Rome, the canals of Venice, and the art of Florence. A perfect blend of culture, romance, and breathtaking scenery.",
    launch: "Launching Soon",
  },
  {
    id: 3,
    title: "Morocco",
    image: "/soon/morocco.jpg",
    description:
      "An oasis of culture. Explore the souks of Marrakech, the blue streets of Chefchaouen, and the desert dunes. Legendary hospitality, authentic Berber heritage, and world-class cuisine.",
    launch: "Launching Soon",
  },
]

export default function ComingSoonCards() {
  return (
    <section className="py-24 bg-white">
      {/* Increased width cleanly */}
      <div className="mx-auto max-w-[1700px] px-6 lg:px-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {destinations.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col -ml-7 w-80  bg-white border-2 border-[#0a7bbe] rounded-3xl overflow-hidden shadow-sm"
          >
            {/* IMAGE */}
        
<div className="relative h-64 w-full">
  <Image
    src={item.image}
    alt={item.title}
    fill
    
    style={{ objectFit: "cover" }}
  />

  {/* BADGE */}
  <div className="absolute top-4 right-4 bg-[#0a7bbe] text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wider">
    COMING SOON
  </div>
</div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 p-8">
              <h2 className="text-3xl font-serif font-bold text-[#0a7bbe] mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Push bottom content evenly */}
              <div className="mt-auto">
                <h3 className="text-4xl font-bold text-[#0a7bbe] mb-4">
                  Coming Soon
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <span className="text-lg">📅</span>
                  <span>{item.launch}</span>
                </div>

                <button className="w-full bg-[#0a7bbe] hover:bg-[#0867a1] transition text-white py-4 rounded-xl text-lg font-semibold">
                  Coming Soon
                </button>
              </div>
            </div>

            {/* FLOATING ARROW — perfectly aligned */}
            <div className="absolute bottom-36 right-4 -mb-10">
              <button className="bg-[#0a7bbe] text-white p-4 rounded-full shadow-lg hover:scale-105 transition">
                <ArrowUp size={20} />
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}