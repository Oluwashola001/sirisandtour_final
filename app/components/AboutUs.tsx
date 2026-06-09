'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { pacifico } from '@/app/fonts';

export default function AboutUs() {
  return (
    <section className="w-full px-6 lg:px-20 py-10 mt-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= TEXT SIDE (MOBILE FIRST) ================= */}
        <div className="order-1 lg:order-2 flex flex-col -mt-40 gap-8 max-w-xl">
          
          {/* Script title */}
          <div className="mt-30">
            <p className={`text-lg sm:text-2xl text-[#0A7BBE] whitespace-nowrap ${pacifico.className}`}>
              Koky · Hurghada trips
            </p>
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A7BBE] mt-2 leading-tight">
              Experience Egypt<br /> Like Never Before
            </h1>
          </div>

          {/* Intro Description */}
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            At Koky, we don't just organize trips; we welcome you as part of our extended family.
          </p>

          {/* Formatted Text Sections */}
          <div className="flex flex-col gap-8 text-gray-600 leading-relaxed">
            
            {/* Story & Spirit */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Story & Spirit</h3>
              <p>
                Our company didn't start in closed offices. It began with our passion for the desert and the sea, 
                and our desire to share this magic in a way that transforms your soul. We believe that Egypt is more 
                than just pyramids and museums; its tranquil sandy beaches, hidden oases, and starry skies make time 
                seem endless. In our world, time slows down, giving you the chance to connect with yourselves and your loved ones.
              </p>
            </div>

            {/* Why We Call You "Family" */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why We Call You "Family"</h3>
              <p>
                <strong className="text-[#0A7BBE]">Attention to the smallest details:</strong> Every detail matters 
                to us, from the moment we meet you until the moment we say goodbye, ensuring your adventure becomes 
                a story we cherish just as much as you do.
              </p>
            </div>

            {/* Why Koky is the best (List) */}
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 border-b pb-2">Why is Koky the best?</h3>
              <p className="mb-4">We believe that the true journey begins from within, so we focus on:</p>
              
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <span className="text-[#0A7BBE] font-bold text-xl leading-none">•</span>
                  <p>
                    <strong className="text-gray-900">A genuine family spirit:</strong> We don't just welcome "tourists," 
                    but our brothers and sisters, our fellow travelers. We care for everyone, young and old, to ensure a safe, comfortable, and inspiring journey.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#0A7BBE] font-bold text-xl leading-none">•</span>
                  <p>
                    <strong className="text-gray-900">Authenticity in every detail:</strong> You'll enjoy dishes lovingly prepared by locals, 
                    hear stories you won't find in books, and experience authenticity far removed from the hustle and bustle of digital cities.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#0A7BBE] font-bold text-xl leading-none">•</span>
                  <p>
                    <strong className="text-gray-900">Our philosophy "From sky to sea":</strong> We are experts on land and sea; 
                    we know the secrets of the desert as well as the depths of the ocean, offering you the diverse magic your family deserves.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#0A7BBE] font-bold text-xl leading-none">•</span>
                  <p>
                    <strong className="text-gray-900">Our promise:</strong> To be your trusted guide in nature's embrace. We promise your family 
                    a seamless blend of excitement and safety, from the refreshing breezes of the Red Sea to the magic of the desert and mountains.
                  </p>
                </li>
              </ul>
            </div>

            {/* Closing Statement & Quote */}
            <div>
              <p className="mb-6">
                Let us transform your holidays into legendary tales to be told to your children and grandchildren. 
                Join <strong className="text-[#0A7BBE]">Koky</strong>, where every trip is the beginning of a new love story with Egypt.
              </p>
              
              {/* Stylized Brand Callout */}
              <div className="bg-[#EEF7FB] border-l-4 border-[#0A7BBE] p-5 rounded-r-xl">
                <p className="text-lg font-bold text-gray-900">
                  Koky <span className="text-[#0A7BBE] text-2xl leading-none align-middle mx-1">·</span> Hurghada trips
                </p>
                <p className="text-[#0A7BBE] italic mt-1 font-medium">"From the sky to the sea... your next adventure is calling."</p>
              </div>
            </div>

          </div>

          {/* Features (Untouched logic, slightly adjusted spacing) */}
          <div className="flex flex-col gap-6 mt-4">
            {/* Exclusive Trip */}
            <div className="flex gap-4 items-start group">
              <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#E9D09A] group-hover:bg-[#0A7BBE] transition-colors duration-300" />
              <div>
                <h3 className="font-semibold text-lg text-[#0A7BBE]">Exclusive Trip</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Between the magic of the desert and the tranquility of the waves, we design bespoke itineraries that combine adventure and privacy to suit your family's aspirations.
                </p>
              </div>
            </div>

            {/* Professional Guide */}
            <div className="flex gap-4 items-start group">
              <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#E9D09A] group-hover:bg-[#0A7BBE] transition-colors duration-300" />
              <div>
                <h3 className="font-semibold text-lg text-[#0A7BBE]">Professional Guide</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Travel companions with local expertise who transform every tour into an enjoyable experience and ensure your family's safety and comfort every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* Learn More BUTTON */}
          <button
            className="
              relative overflow-hidden w-fit px-8 py-4 rounded-full mt-4
              border border-[#0A7BBE]
              text-[#0A7BBE] font-semibold
              group
            "
          >
            <span
              className="
                absolute inset-0 bg-[#0A7BBE]
                translate-x-[-100%]
                group-hover:translate-x-0
                transition-transform duration-500 ease-out
              "
            />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              Learn More
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </button>
        </div>

        {/* ================= IMAGE SIDE (Untouched) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 mt-20 lg:-mt-40 lg:order-1 w-full flex flex-col gap-6"
        >
          {/* TOP IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[520px] overflow-hidden rounded-[40px]">
            <Image
              src="/images/gallery/7.jpg"
              alt="Tour Group"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* middle IMAGE */}
          <div className="hidden sm:block relative w-full h-[220px] sm:h-[380px] lg:h-[520px] overflow-hidden rounded-[40px]">
            <Image
              src="/images/gallery/4.jpg"
              alt="Tour Group"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          
          {/* BOTTOM IMAGE (Animated) */}
          <motion.div
            className="
              relative w-full h-[240px] sm:h-[280px] lg:h-[320px]
              overflow-hidden
              border-[5px] border-white
              shadow-2xl
              rounded-[40px]
            "
            animate={{
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/gallery/1.jpg"
              alt="Sunset Tour"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}