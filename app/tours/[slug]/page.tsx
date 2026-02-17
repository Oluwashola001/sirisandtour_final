"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { tours, Tour } from "../../data/tours";
import { ArrowRightIcon } from "lucide-react";
import ReviewTestimonial from "../../components/ReviewTestimonial";
import NewsletterSection from "../../components/Newsletter";
import { ChevronDown, ChevronUp, X, Calendar, Clock, Tag, User, Baby, Info, ArrowUp, ArrowDown, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const tour: Tour | undefined = tours.find((t) => t.slug === slug);

  const [selectedItinerary, setSelectedItinerary] = useState<any>(null);

  if (!tour) {
    return <div className="p-20 text-center text-2xl">Tour Not Found</div>;
  }

  const BRAND = "#0A7BBE"; // change this once to update everything

  /* ✅ TABS INSIDE COMPONENT */
  const tabs = [
  
  {
      id: "itinerary",
      label: `Discover ${tour.cardTitle || tour.title}`,
    },
    { id: "overview", label: "Trip Overview" },
  
    { id: "reviews", label: "Traveler Reviews" },
  ];

  /* ✅ ITINERARY OPENS BY DEFAULT */
  const [activeTab, setActiveTab] = useState<string | null>("itinerary");
  const isMobile = useMediaQuery("(max-width: 768px)");

 const [openPickupIndex, setOpenPickupIndex] = useState<number | null>(null);
const [openDescriptionIndex, setOpenDescriptionIndex] = useState<number | null>(null);



  const handleTabClick = (id: string) => {
    if (activeTab === id) {
      setActiveTab(null);
    } else {
      setActiveTab(id);
    }
  };

  return (
    <section className="w-full -ml-2 px-4 md:px-12 py-14 mt-35 relative">

      {/* ===== TITLE SECTION ===== */}
      <div className="w-full mb-10 flex justify-center -mt-10 items-center">
        <h1 className="text-1xl md:text-3xl lg:text-2xl font-bold text-[#0A7BBE] break-words text-center">
          {tour.title}
        </h1>
      </div>

      <div className="overflow-x-hidden">
        <div className="grid grid-cols-2 gap-5 w-screen items-start">

          {/* VIDEO LEFT */}
          <div className="overflow-hidden rounded-[30px] h-[340px] w-full lg:w-195 md:h-[360px] lg:h-[520px]">
            <motion.video
              src={tour.heroVideo || undefined}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGES RIGHT */}
          <div className="flex flex-col w-full lg:w-100 -ml-2 lg:ml-35 md:w-80 gap-2 pr-8 lg:pr-10">
            {tour.gallery.slice(0, 2).map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[30px] relative w-full h-[165px] md:h-[180px] lg:h-[250px]"
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="mt-10">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:flex-wrap">
          {tabs.map((tab) => (
            <div key={tab.id} className="w-full md:w-auto">

              <button
                onClick={() => handleTabClick(tab.id)}
                className={`w-full md:w-auto px-6 py-3 rounded-t-3xl h-15 transition-all text-black
                  ${
                    activeTab === tab.id
                      ? "bg-[#0a7bbe] text-white"
                      : "bg-gray-100 hover:bg-[#075E94] hover:text-white"
                  }`}
              >
                {tab.label}
              </button>

              {/* MOBILE CONTENT */}
              {isMobile && activeTab === tab.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white text-black rounded-b-3xl p-6 shadow"
                >
                  {tab.id === "overview" && <p>{tour.overview}</p>}
        {activeTab === "itinerary" && (
          <ul className="flex flex-col items-center space-y-8 px-2 sm:px-0">
            {tour.itinerary.map((item, i) => {

              const whatsappNumber = "201288062555";
              const message = `Hello, I'm interested in ${item.title}`;
              const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

              return (
                <li
          key={i}
          className="w-full max-w-2xl bg-[#f4f7f8] rounded-[28px] shadow-xl overflow-hidden 
                    transform transition-transform duration-300 hover:scale-105"
        >
                  {/* IMAGE - CLICKABLE */}
                  <div 
                    className="relative w-full h-40 sm:h-48 cursor-pointer"
                    onClick={() => setSelectedItinerary(item)}
                  >
                    {/* Duration */}
                    {item.duration && (
                      <div
                        className="absolute top-2 left-2 z-10 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full font-semibold shadow-md  border-2 border-white shadow-lg"
                        style={{ backgroundColor: BRAND }}
                      >
                        <span className="">approx.</span>
   <span>{item.duration}</span>
                      </div>
                    )}

                    {/* Price */}
                    {item.price && item.currency && (
                    <div
          className="absolute top-2 right-2 z-10 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full font-semibold shadow-md  border-2 border-white shadow-lg"
          style={{ backgroundColor: BRAND }}
        >
          {item.currency} {item.price}
        </div>

                    )}

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="px-3 sm:px-6 py-3 sm:py-4 text-center">

                    {/* TITLE - CLICKABLE */}
                    <h2
                      className="text-base sm:text-lg font-semibold mb-1 cursor-pointer hover:underline"
                      style={{ color: BRAND }}
                      onClick={() => setSelectedItinerary(item)}
                    >
                      {item.title}
                    </h2>

                    <p className="text-gray-600 text-xs sm:text-sm mb-2">
                      Every day
                    </p>

                    {/* PICKUP DROPDOWN */}
      
{item.pickupTimes && item.pickupTimes.length > 0 && (
  <div className="mt-3 mb-6">
    <div
      className="text-sm sm:text-base font-medium mb-2"
      style={{ color: BRAND }}
    >
      Pickup:
    </div>

    <div className="text-black">
      {item.pickupTimes.map((time, index) => (
        <p key={index}>{time}</p>
      ))}
    </div>
  </div>
)}


                    {/* HIGHLIGHTS */}
                    <div className="text-left mb-4">
                      <h3 className="text-sm sm:text-base font-semibold mb-2 text-center">
                        Highlights:
                      </h3>

                      <div className="max-h-24 overflow-y-auto pr-2 custom-scroll">
                        <ul className="space-y-1">
                          {item.highlights?.map((point: string, index: number) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-700 text-xs sm:text-sm"
                            >
                              <span style={{ color: BRAND }}>✓</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* DESCRIPTION DROPDOWN */}
                    <div className="mb-4">
                      <button
                        
                        onClick={() =>
 setOpenDescriptionIndex(openDescriptionIndex === i ? null : i)
}
                        className="flex items-center justify-center gap-1 font-semibold w-full text-xs sm:text-sm"
                        style={{ color: BRAND }}
                      >
                       Full Description
                        {openDescriptionIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      {openDescriptionIndex === i && (
                        <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* WHATSAPP BUTTON */}
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 sm:py-3 rounded-xl font-semibold text-white text-xs sm:text-sm flex items-center justify-center gap-2 mb-2 transition shadow-md"
                      style={{ backgroundColor: BRAND }}
                    >
                      <FaWhatsapp className="text-xl sm:text-2xl" />
                      Contact Now
                    </a>

                    {/* DETAILS BUTTON - CLICKABLE */}
                    <button
                      onClick={() => setSelectedItinerary(item)}
                      className="w-full border-2 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition"
                      style={{
                        borderColor: BRAND,
                        color: BRAND
                      }}
                    >
                      ℹ Details
                    </button>

                  </div>
                </li>
              );
            })}
          </ul>
        )}

                  

                  {tab.id === "reviews" && (
                    <ReviewTestimonial testimonials={tour.testimonials} />
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP TAB CONTENT */}
      {!isMobile && activeTab && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mx-auto mt-8 bg-white text-black  p-6 shadow"
          >
            {activeTab === "overview" && <p>{tour.overview}</p>}
        {activeTab === "itinerary" && (
          <ul
          className="grid gap-6 px-4 sm:px-0"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",     maxWidth: "1400px",

          }}
        >


            {tour.itinerary.map((item, i) => {

              const whatsappNumber = "201288062555";
              const message = `Hello, I'm interested in ${item.title}`;
              const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

              return (
            <li
          key={i}
          className="group w-full max-w-2xl bg-[#f4f7f8] rounded-[28px] shadow-xl overflow-hidden 
                    transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
        >

          {/* IMAGE - CLICKABLE */}
          <div 
            className="relative w-full max-h-48 sm:h-64 overflow-hidden"
            onClick={() => setSelectedItinerary(item)}
          >
            {/* Duration */}
            {item.duration && (
              <div
                className="absolute top-3 left-3 z-10 text-white text-xs sm:text-sm px-3 py-2 rounded-full  border-2 border-white  font-semibold shadow-md"
                style={{ backgroundColor: BRAND }}
              >

                
                <span className="">approx.</span>
   <span>{item.duration}</span>
              </div>
            )}

            {/* Dynamic Price */}
            {item.price && item.currency && (
              <div
                className="absolute top-2 right-2 z-10 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border-2 border-white shadow-lg flex items-center gap-1.5"
                style={{ backgroundColor: BRAND }}
              >
                {item.currency} {item.price}
              </div>
            )}

            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* CONTENT */}
          <div className="px-4 sm:px-6 py-4 sm:py-6 text-center">

            {/* TITLE - CLICKABLE */}
            <h2
              className="text-lg sm:text-xl font-semibold mb-2 hover:underline"
              style={{ color: BRAND }}
              onClick={() => setSelectedItinerary(item)}
            >
              {item.title}
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm">
              Every day
            </p>

            {/* PICKUP DROPDOWN */}
           <div className="mt-3 mb-6">
  <div
    className="text-sm sm:text-base font-medium mb-2"
    style={{ color: BRAND }}
  >
    Pickup:
  </div>

  <div className="bg-white rounded-lg shadow p-3 text-sm space-y-2">
    {item.pickupTimes?.map((time, index) => (
      <p key={index}>{time}</p>
    ))}
  </div>
</div>


            {/* HIGHLIGHTS WITH SCROLL */}
          <div className="text-left mb-6">
          <h3 className="text-base sm:text-lg font-semibold mb-4 text-center">
            Highlights :
          </h3>

          <div className="max-h-[6.5rem] overflow-y-auto pr-3 custom-scroll">
            <ul className="space-y-3">
              {item.highlights?.map((point: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-xs sm:text-sm"
                >
                  <span style={{ color: BRAND }}>✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

            {/* DESCRIPTION DROPDOWN */}
            <div className="mb-6">
              <button
                onClick={() =>
                  setOpenDescriptionIndex(openDescriptionIndex === i ? null : i)
                }
                className="flex items-center justify-center gap-2 font-semibold w-full"
                style={{ color: BRAND }}
              >
               Full Description
                {openDescriptionIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {openDescriptionIndex === i && (
                <p className="mt-4 text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>

            {/* buttons */}
   <div className="flex flex-row gap-3">
  {/* WHATSAPP BUTTON */}
  <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition 
             hover:bg-[#075E94] hover:text-white"
  style={{ 
    backgroundColor: BRAND, 
    color: 'white'
  }}
>
  <FaWhatsapp className="text-xl sm:text-xl ml-2" />
  Contact Now
</a>


  {/* DETAILS BUTTON - CLICKABLE */}
  <button
    onClick={() => setSelectedItinerary(item)}
    className={`flex-1 border-2 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition 
      border-[#0A7BBE] text-[#0A7BBE]
                hover:bg-[#075E94] hover:text-white hover:border-[#075E94] border-[${BRAND}] text-[${BRAND}]`}
  >
    ℹ Details
  </button>
</div>



          </div>
        </li>

              );
            })}
          </ul>
        )}



            

            {activeTab === "reviews" && (
              <ReviewTestimonial testimonials={tour.testimonials} />
            )}
          </motion.div>
        </AnimatePresence>
      )}

      
      <NewsletterSection />

      {/* ===== POPUP MODAL ===== */}
      <AnimatePresence>
        {selectedItinerary && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedItinerary(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent close on modal click
            >
              
              {/* Header */}
              <div className="p-6 text-white relative bg-gradient-to-r from-cyan-500 to-blue-600">
                <button 
                  onClick={() => setSelectedItinerary(null)} 
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition"
                >
                  <X size={24} />
                </button>

                <div className="flex gap-4 items-center">
                   {/* Item Image as Thumbnail */}
                  <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-xl overflow-hidden border-2 border-white/30 shrink-0 shadow-sm">
                    <Image 
                      src={selectedItinerary.image} 
                      alt={selectedItinerary.title} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold">{selectedItinerary.title}</h2>
                    <div className="flex gap-4 mt-2 text-xs md:text-sm font-medium opacity-90">
                      <span className="flex items-center gap-1"><Calendar size={14}/> Every day</span>
                      <span className="flex items-center gap-1"><Clock size={14}/> {selectedItinerary.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

         {/* Body */}
<div className="p-6 md:p-8 space-y-12">

  {/* ===== OVERVIEW ===== */}
  <div>
    <h3 className="text-[#0A7BBE] text-xl font-semibold flex items-center gap-2 mb-8">
      <Tag size={18} />
      Overview
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

      {/* Adult */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
        <div className="w-14 h-14 bg-[#0A7BBE]/10 rounded-full mx-auto flex items-center justify-center text-[#0A7BBE] mb-4">
          <User size={24} />
        </div>
        <p className="text-sm text-gray-500 mb-1">Price</p>
        <p className="text-2xl font-semibold text-[#0A7BBE]">
          € {selectedItinerary.price}
        </p>
        <p className="text-xs text-gray-400 mt-1">Per person</p>
      </div>

      {/* Duration */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
        <div className="w-14 h-14 bg-[#0a2340]/10 rounded-full mx-auto flex items-center justify-center text-[#0a2340] mb-4">
          <Clock size={22} />
        </div>
        <p className="text-sm text-gray-500 mb-1">Duration</p>
        <p className="text-lg font-semibold text-[#0a2340]">
          {selectedItinerary.duration}
        </p>
      </div>

      {/* Infant */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
        <div className="w-14 h-14 bg-cyan-100 rounded-full mx-auto flex items-center justify-center text-[#0a2340] mb-4">
          <Baby size={24} />
        </div>
        <p className="text-sm text-gray-500 mb-1">Infants</p>
        <p className="text-2xl font-semibold text-[#0a2340]">
          {selectedItinerary.infantPrice || ""}
        </p>
      </div>

    </div>
  </div>


  {/* ===== TOUR SCHEDULE (TIMELINE STYLE) ===== */}
  {selectedItinerary.moreDetails?.length > 0 && (
    <div>
      <h3 className="text-[#0A7BBE] text-xl font-semibold mb-8">
        Trip Details
      </h3>

      <div className="relative border-l-2 border-[#0A7BBE]/30 pl-6 space-y-10">

        {selectedItinerary.moreDetails.map((detail: any, i: number) => (
          <div key={i} className="relative">

            {/* Timeline Dot */}
            <span className="absolute -left-[9px] top-1 w-4 h-4 bg-[#0A7BBE] rounded-full border-4 border-white shadow"></span>

            <div className="bg-gray-50 rounded-xl p-5 shadow-sm border border-gray-100">

              <p className="font-semibold text-[#0A7BBE] mb-2 text-base">
                {detail.item}
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                {detail.reason}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  )}


  {/* ===== EXTRA INFO ===== */}
  {selectedItinerary.extraInfo && (
    <div className="bg-[#fff9c4] text-[#856404] px-4 py-3 rounded-lg flex items-start gap-2 text-sm font-semibold border-l-4 border-[#ffeb3b]">
      <Info size={18} className="mt-0.5 shrink-0"/> 
      <div className="space-y-1">
        {selectedItinerary.extraInfo.map((info: string, i: number) => (
          <p key={i}>{info}</p>
        ))}
      </div>
    </div>
  )}


  {/* ===== PICKUP & RETURN ===== */}
  <div className="space-y-4">

    {selectedItinerary.pickupTimes?.length > 0 && (
      <div className="bg-cyan-50 p-4 rounded-xl flex items-center gap-4 border border-cyan-100">
        <ArrowUp size={18} className="text-cyan-600" />
        <div>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
            Hotel Pickup
          </p>
          <p className="font-semibold text-gray-800 text-sm">
            {selectedItinerary.pickupTimes[0]}
          </p>
        </div>
      </div>
    )}

    {selectedItinerary.returnTime && (
      <div className="bg-cyan-50 p-4 rounded-xl flex items-center gap-4 border border-cyan-100">
        <ArrowDown size={18} className="text-cyan-600" />
        <div>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
            Hotel Return
          </p>
          <p className="font-semibold text-gray-800 text-sm">
            {selectedItinerary.returnTime}
          </p>
        </div>
      </div>
    )}

  </div>


  {/* ===== INCLUDED ===== */}
  {selectedItinerary.included?.length > 0 && (
    <div>
      <h3 className="font-bold text-lg mb-4 text-[#0a7bbe]">
        What's Included
      </h3>
      <ul className="space-y-3">
        {selectedItinerary.included.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
            <Check className="text-cyan-500 mt-0.5" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )}


  {/* ===== EXCLUDED ===== */}
  {selectedItinerary.excluded?.length > 0 && (
    <div>
      <h3 className="font-bold text-lg mb-4 text-[#0a7bbe]">
        Exclude
      </h3>
      <ul className="space-y-3">
        {selectedItinerary.excluded.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
            <Check className="text-red-400 mt-0.5" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )}


  {/* ===== CONTACT BUTTON ===== */}
  <div className="pt-4">
    <a
      href={`https://wa.me/201288062555?text=${encodeURIComponent(`Hello, I'm interested in ${selectedItinerary.title}`)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full sm:w-1/2 mx-auto py-3 rounded-xl font-bold text-white text-center transition hover:opacity-90 shadow-lg"
      style={{ backgroundColor: '#0A7BBE' }}
    >
      <span className="flex items-center justify-center gap-2">
        <FaWhatsapp className="text-xl" /> Contact Now
      </span>
    </a>
  </div>

</div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
