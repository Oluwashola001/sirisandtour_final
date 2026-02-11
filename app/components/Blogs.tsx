'use client';

import Image from "next/image";
import Link from "next/link";

const primaryColor = "#0A7BBE";

const blogPosts = [
  {
    id: 1,
    email: "sirisandtours@gmail.com",
    date: "June 19, 2025",
    category: "Uncategorized",
    title: "Egypt: A Journey Through Time from the Nile to the Sea",
    excerpt:
      "Egypt is more than just a destination; it's a unique and unforgettable experience. Your journey begins at the majestic temples of Luxor and Aswan on the banks of the Nile, and continues to the vibrant beaches of Hurghada and Sharm El Sheikh. Whether you seek to uncover the secrets of the pharaohs or simply relax by the turquoise waters of the Red Sea, every corner of Egypt offers a new story.",
    image: "/images/trending/2.jpg",
  },
  {
    id: 2,
    email: "sirisandtours@gmail.com",
    date: "June 19, 2025",
    category: "Crystal Mountain",
    title: "The Magic of the South: Luxor and Aswan, Where History Smile",
    excerpt:
      " In the heart of Upper Egypt, where the Nile flows gently between granite cliffs, Luxor and Aswan await you. Here, the grandeur of ancient architecture in the Valley of the Kings meets the warm hospitality of Nubian culture on Heissa Island. It's an invitation to disconnect from the modern world and connect with the roots of human civilization on a tranquil Nile cruise under a warm, ever-present sun.",
    image: "/images/trending/3.jpg",
  },
  {
    id: 3,
    email: "sirisandtours@gmail.com",
    date: "June 19, 2025",
    category: "White Desert",
    title: "The Red Sea Trilogy: Hurghada, Sharm El Sheikh, and Marsa Alam",
    excerpt:
      "  For adventure seekers and those who crave the deep, the Red Sea offers three unforgettable experiences.  Enjoy the luxury and vibrant nightlife of Sharm El Sheikh, discover the diverse family activities of Hurghada, or escape to the tranquility of unspoiled nature and rare marine life in Marsa Alam. Our waters are not just for swimming; they are a world of coral and vibrant colors waiting to be explored.",
    image: "/images/trending/4.jpg",
  },
  {
    id: 4,
    email: "sirisandtours@gmail.com",
    date: "June 19, 2025",
    category: "Black Desert",
    title: "Oases of Tranquility: Siwa and Fayoum, a Haven for Peace Seekers ",
    excerpt:
      " If you're looking for desert tranquility, Siwa beckons with its ancient fortress and soul-healing salt lakes. Just steps from the capital, Fayoum emerges as a masterpiece, combining the allure of its lakes, the waterfalls of Wadi El Rayan, and the timeless beauty of Wadi El Hitan. It's a journey into the heart of untouched nature, where the stars are the only light and silence reigns supreme.",
    image: "/images/trending/1.jpg",
  },
  {
    id: 5,
    email: "sirisandtours@gmail.com",
    date: "June 20, 2025",
    category: "Bahariya Oasis",
    title: "Adventure Safari: From the Dunes of Siwa to the Mountains of Marsa Alam",
    excerpt:
      " For thrill-seekers, Egypt's deserts offer an incredible variety of experiences; from sandboarding in Siwa's Great Sand Sea to mountain safaris in Sharm El Sheikh and Marsa Alam. Our bespoke tours take you to uncharted territories where rugged mountains meet the sea, and where you can enjoy evenings around a Bedouin campfire under a starry sky.",
    image: "/images/trending/5.jpg",
  },
  {
    id: 6,
    email: "sirisandtours@gmail.com",
    date: "June 20, 2025",
    category: "Desert Camping",
    title: "Wellness Egypt: Restoring Balance in Siwa and Aswan",
    excerpt:
      "Beyond traditional tourism, Egypt stands out as a global center for natural wellness. Immerse yourself in the healing sands of Aswan, or enjoy the sulfur springs and mineral waters of Siwa. Here, nature is the healer, and the dry climate and fresh air are your means to restore your energy and rejuvenate in an atmosphere of complete privacy.",
    image: "/images/trending/6.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="px-6 lg:px-20 py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {blogPosts.map((post) => (
          <article key={post.id} className="hover:scale-[1.02] transition">
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            <div className="pt-6">
              <div className="text-sm text-gray-500 flex gap-2 flex-wrap">
                <span>{post.email}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>

              <h3
                className="text-2xl font-semibold mt-4"
                style={{ color: primaryColor }}
              >
                {post.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {post.excerpt}
              </p>

              <Link
                href="#"
                className="inline-block mt-6 px-8 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition"
                style={{ backgroundColor: primaryColor }}
              >
                READ MORE
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
