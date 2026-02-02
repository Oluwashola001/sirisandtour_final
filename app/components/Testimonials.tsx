'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  date: string;
  title: string;
  text: string;
};

const testimonials: Testimonial[] = [
  { id: 1, name: 'Martina B', date: '2025-06-05', title: 'Unforgettable trip', text: 'Unforgettable trip in the company of Mohamed. Everything was organized to perfection.' },
  { id: 2, name: 'Raziye A', date: '2025-05-07', title: 'White Desert & Siwa', text: 'Camping in the White Desert was a unique and unforgettable experience.' },
  { id: 3, name: 'Noemi A', date: '2025-04-30', title: 'Beautiful Experience', text: 'A once-in-a-lifetime night in the desert. Truly magical.' },
  { id: 4, name: 'Lucia F', date: '2025-04-23', title: 'Desert Adventure', text: "Wonderful experience with excellent organization." },
  { id: 5, name: 'Mark T', date: '2025-04-10', title: 'Top Service', text: 'Professional guides and amazing landscapes.' },
  { id: 6, name: 'Sandra P', date: '2025-03-18', title: 'Highly Recommended', text: 'Everything was perfect from start to finish.' },
  { id: 7, name: 'Ali R', date: '2025-03-02', title: 'Memorable Trip', text: 'Very safe, very well planned.' },
  { id: 8, name: 'Helen K', date: '2025-02-21', title: 'Loved It', text: 'Would absolutely do this again.' },
  { id: 9, name: 'Jonas M', date: '2025-02-01', title: 'Amazing Views', text: 'The desert views were breathtaking.' },
  { id: 10, name: 'Emily S', date: '2025-01-15', title: 'Perfect Experience', text: 'Highly professional team.' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [openId, setOpenId] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);

  // Desktop view limits
  const maxIndexLg = testimonials.length - 4; 

  const nextLg = () => setIndex(prev => Math.min(prev + 1, maxIndexLg));
  const prevLg = () => setIndex(prev => Math.max(prev - 1, 0));

  // AUTO SLIDE EFFECT
  useEffect(() => {
    // Stop if dragging or if user has manually interacted (autoSlideEnabled is false)
    if (isDragging || !autoSlideEnabled) return;

    const interval = setInterval(() => {
      setIndex(prev => {
        // Desktop behavior
        if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
          return prev >= maxIndexLg ? 0 : prev + 1;
        }
        // Mobile behavior (Loop back to 0 at end)
        return prev >= testimonials.length - 1 ? 0 : prev + 1;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [maxIndexLg, isDragging, autoSlideEnabled]);

  const Card = (item: Testimonial) => {
    const isOpen = openId === item.id;
    return (
      // Changed: Removed global 'h-full flex flex-col justify-between'. 
      // Added 'lg:' prefix so it only applies to desktop grid layout.
      // Mobile will now use natural height (block).
      <div className="border rounded-2xl p-6 bg-white shadow-sm lg:h-full lg:flex lg:flex-col lg:justify-between w-full">
        <div>
          <h4 className="font-bold text-black">{item.name}</h4>
          <p className="text-sm text-gray-500 mb-2">{item.date}</p>

          <div className="flex gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="w-4 h-4 rounded-full border-2 border-[#00AA6C] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#00AA6C]" />
              </span>
            ))}
          </div>

          <h5 className="font-semibold mb-2 text-black">{item.title}</h5>
          {/* Added break-words to ensure text wraps properly on small screens */}
          <p className={`text-sm text-gray-700 break-words ${isOpen ? '' : 'line-clamp-3'}`}>
            {item.text}
          </p>
        </div>

        <button 
          onClick={() => setOpenId(isOpen ? null : item.id)} 
          className="mt-4 flex items-center gap-1 text-sm text-[#0A7BBE] font-medium hover:underline"
        >
          {isOpen ? <>Hide <ChevronUp size={16} /></> : <>Read more <ChevronDown size={16} /></>}
        </button>
      </div>
    );
  };

  // Mobile tracker settings
  const trackerWidth = 120; // px total length of track
  const indicatorWidth = 24; // px width of moving indicator
  const maxTranslate = trackerWidth - indicatorWidth; // max movement

  return (
    <section className="py-20 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 lg:px-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          {/* Using inline style for cursive as fallback for custom font */}
          <p className="text-[#0A7BBE] text-3xl mb-2" style={{ fontFamily: 'cursive' }}>Testimonials</p>
          <h2 className="text-4xl font-bold text-[#0A7BBE] mb-6">What Clients Say About us</h2>
          <p className="font-bold text-lg text-black">EXCELLENT</p>

          <div className="flex justify-center gap-2 my-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="w-5 h-5 rounded-full border-2 border-[#00AA6C] flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-[#00AA6C]" />
              </span>
            ))}
          </div>

          <p className="text-black">Based on <span className="font-semibold">43 reviews</span></p>

          <div className="flex justify-center mt-3">
            {/* Replaced next/image with standard img tag */}
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="Tripadvisor"
              width={150}
              height={30}
              className="h-8 w-auto"
            />
          </div>
        </div>

        {/* DESKTOP VIEW (Grid) */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-4 gap-6">
            {testimonials.slice(index, index + 4).map((t) => <div key={t.id}>{Card(t)}</div>)}
          </div>

          {index > 0 && (
            <button onClick={prevLg} className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-black hover:bg-gray-50 transition">
              <ChevronLeft />
            </button>
          )}
          {index < maxIndexLg && (
            <button onClick={nextLg} className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-black hover:bg-gray-50 transition">
              <ChevronRight />
            </button>
          )}
        </div>

        {/* MOBILE VIEW (Slider) */}
        <div className="lg:hidden relative">
          
          <motion.div
            className="flex"
            // The logic: animate x to negative percentage based on index
            animate={{ x: `-${index * 100}%` }}
            // Changed from 'spring' to 'tween' to remove bounce/wobble
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            
            // Drag configuration
            drag="x"
            dragDirectionLock
            // Important: This constraint + Elastic makes it follow finger but snap back
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            // Important: Disable momentum so it doesn't fly to the end
            dragMomentum={false}
            
            onDragStart={() => {
              setIsDragging(true);
              setAutoSlideEnabled(false); // Disable auto-slide permanently on interaction
            }}
            onDragEnd={(event, info) => {
              setIsDragging(false);

              // Reduced threshold for easier snapping (50px distance or decent velocity)
              const swipeConfidenceThreshold = 500; 
              const swipePower = Math.abs(info.offset.x) * info.velocity.x;
              
              // Swipe Left (Next)
              if (swipePower < -swipeConfidenceThreshold || info.offset.x < -50) {
                 // Enabled looping: If at end, loop to 0. Else next.
                 setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
              } 
              // Swipe Right (Prev)
              else if (swipePower > swipeConfidenceThreshold || info.offset.x > 50) {
                 // Enabled looping: If at 0, loop to end. Else prev.
                 setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
              }
              // If not enough swipe, it snaps back to current index via 'animate'
            }}
            style={{ touchAction: "pan-y" }}
          >
            {testimonials.map((t) => (
              // Added max-w-full and w-full to strictly constrain the slide to the container width
              <div key={t.id} className="min-w-full w-full max-w-full flex-shrink-0 px-2 box-border">
                {Card(t)}
              </div>
            ))}
          </motion.div>

          {/* MOBILE TRACKER */}
          <div className="mt-6 relative h-1 w-full max-w-[120px] mx-auto bg-gray-200 rounded-full">
            <motion.div
              className="absolute top-0 left-0 h-1 w-6 bg-black rounded-full"
              // Calculate position based on current index / total slides
              animate={{ 
                x: (index / (testimonials.length - 1)) * maxTranslate 
              }}
              // Matched transition to the slider for consistency
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            />
          </div>
          
        </div>

      </div>
    </section>
  );
}