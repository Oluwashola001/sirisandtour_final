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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {destinations.map((item) => (
          <div
            key={item.id}
            className="relative bg-white border-2 border-[#8c7455] rounded-3xl overflow-hidden shadow-sm"
          >
            {/* IMAGE */}
            <div className="relative h-57 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* BADGE */}
              <div className="absolute top-6 right-6 bg-[#8c7455] text-white px-6 py-2 rounded-full font-semibold tracking-wider">
                COMING SOON
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <h2 className="text-3xl font-serif font-bold text-[#3b2f23] mb-4">
                {item.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                {item.description}
              </p>

              <h3 className="text-4xl font-bold text-[#8c7455] mb-4">
                Coming Soon
              </h3>

              <div className="flex items-center gap-2 text-gray-600 mb-8">
                <span className="text-xl">📅</span>
                <span>{item.launch}</span>
              </div>

              <button className="w-full bg-[#b7a58a] hover:bg-[#a08d72] transition text-white py-4 rounded-xl text-xl font-semibold">
                Coming Soon
              </button>
            </div>

            {/* FLOATING ARROW */}
            <div className="absolute bottom-24 right-6">
              <button className="bg-[#8c7455] text-white p-4 rounded-full shadow-lg hover:scale-105 transition">
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}