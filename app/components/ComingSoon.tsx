'use client'

import Image from "next/image"
import { ArrowUpRight, Clock3 } from "lucide-react"
import { useEffect, useRef } from "react"

const destinations = [
  {
    id: 1,
    title: "Türkiye",
    image: "/soon/Turkye.jpg",
    description:
      "Where East meets West. Explore the history of Istanbul, the hot air balloons of Cappadocia, and the beaches of Antalya. An unforgettable journey of shopping and world-class cuisine.",
    tag: "Türkiye",
  },
  {
    id: 2,
    title: "Italy",
    image: "/soon/italy.jpg",
    description:
      "The soul of art and taste. Explore the history of Rome, the canals of Venice, and the art of Florence. A perfect blend of culture, romance, and breathtaking scenery.",
    tag: "Italy",
  },
  {
    id: 3,
    title: "Morocco",
    image: "/soon/morocco.jpg",
    description:
      "An oasis of culture. Explore the souks of Marrakech, the blue streets of Chefchaouen, and the desert dunes. Legendary hospitality and world-class cuisine.",
    tag: "Morocco",
  },
]

export default function ComingSoonCards() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    cardRefs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .card-reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .card-reveal.card-visible { opacity: 1; transform: translateY(0); }
        .card-reveal:nth-child(2) { transition-delay: 0.12s; }
        .card-reveal:nth-child(3) { transition-delay: 0.24s; }

        .dest-card {
          transition: box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        @media (hover: hover) {
          .dest-card:hover {
            transform: translateY(-7px);
            box-shadow: 0 24px 48px -10px rgba(10,123,190,0.15), 0 6px 16px -4px rgba(0,0,0,0.06);
          }
          .dest-card:hover .card-img {
            transform: scale(1.05);
          }
          .dest-card:hover .arrow-btn {
            background: #0867a1;
            transform: rotate(45deg) scale(1.08);
          }
        }

        .card-img {
          transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .arrow-btn {
          transition: background 0.25s ease, transform 0.3s ease;
        }

        .dest-title { font-family: 'Cormorant Garamond', serif; }
        .dest-body  { font-family: 'DM Sans', sans-serif; }

        .shimmer-bar {
          background: linear-gradient(90deg, #0a7bbe18 0%, #0a7bbe40 50%, #0a7bbe18 100%);
          background-size: 200% 100%;
          animation: shimmer 2.4s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {destinations.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => { cardRefs.current[index] = el }}
              className="card-reveal dest-card dest-body relative flex flex-col w-full bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)]"
            >
              {/* IMAGE */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="card-img"
                  style={{ objectFit: "cover" }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Tag — bottom-left over image */}
                <span className="absolute bottom-4 left-4 dest-body text-xs font-medium tracking-widest uppercase text-white/90 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  {item.tag}
                </span>

                {/* Arrow CTA — bottom-right */}
                <button className="arrow-btn absolute bottom-4 right-4 bg-[#0a7bbe] text-white p-2.5 rounded-full shadow-md">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-6">

                {/* Shimmer "launching soon" indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="shimmer-bar h-[3px] w-8 rounded-full" />
                  <span className="dest-body text-[11px] font-500 tracking-[0.18em] uppercase text-[#0a7bbe]/70">
                    Launching Soon
                  </span>
                </div>

                <h2 className="dest-title text-[2.2rem] font-bold leading-none text-gray-900 mb-3">
                  {item.title}
                </h2>

                <p className="text-[0.875rem] text-gray-800 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Footer row */}
                <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Clock3 size={13} strokeWidth={1.8} />
                    <span className="text-xs tracking-wide">Available soon</span>
                  </div>

                  <button className="dest-body text-xs font-medium text-[#0a7bbe] bg-[#0a7bbe]/8 hover:bg-[#0a7bbe]/15 transition-colors px-4 py-2 rounded-full">
                    Anticipate
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}