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

  // Safely normalize the overview content into an array of strings
  const overviewParagraphs: string[] = Array.isArray(tour.overview) 
    ? tour.overview 
    : typeof tour.overview === "string" 
      ? (tour.overview as unknown as string).split("\n") 
      : [];

  return (
    <section className="w-full -ml-2 px-4 md:px-12 py-14 mt-35 relative">

      {/* ===== TITLE SECTION ===== */}
      <div className="w-full mb-12 flex justify-center -mt-6 items-center max-w-6xl mx-auto">
        <h1 
          className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#0A7BBE] break-words text-center leading-tight tracking-tight drop-shadow-sm px-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
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
            {tour.gallery.slice(0, 2).map((img: string, i: number) => (
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
                className={`w-full md:w-auto px-6 py-3 rounded-t-3xl h-15 transition-all text-black font-medium
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
                  /* Reduced padding here (p-3 instead of p-6) to let cards take up more width */
                  className="bg-white text-black rounded-b-3xl p-3 sm:p-6 shadow"
                >
                  
                  {/* BEAUTIFIED MOBILE OVERVIEW */}
                  {tab.id === "overview" && (
                    <div className="py-4 px-2">
                      <h2 
                        className="text-2xl font-extrabold text-[#0A7BBE] mb-5 text-center" 
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        The Experience
                      </h2>
                      <div className="space-y-4">
                        {overviewParagraphs.map((paragraph: string, idx: number) => (
                          paragraph.trim() ? (
                            <p key={idx} className="text-sm text-gray-700 leading-relaxed font-medium text-justify">
                              {/* Drop cap for the first paragraph */}
                              {idx === 0 && (
                                <span 
                                  className="float-left text-5xl text-[#0A7BBE] font-bold pr-2 pt-1 leading-none" 
                                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                                >
                                  {paragraph.charAt(0)}
                                </span>
                              )}
                              {idx === 0 ? paragraph.substring(1) : paragraph}
                            </p>
                          ) : null
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "itinerary" && (
                    <ul className="flex flex-col items-center space-y-6 pt-2">
                      {tour.itinerary.map((item: any, i: number) => {
                        const whatsappNumber = "201288062555";
                        const message = `Hello, I'm interested in ${item.title}`;
                        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

                        return (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="w-full max-w-2xl bg-[#f4f7f8] rounded-[28px] shadow-lg overflow-hidden border border-gray-100"
                          >
                            {/* IMAGE - CLICKABLE */}
                            <div 
                              /* Increased mobile height (h-56) so it doesn't look slim */
                              className="relative w-full h-56 sm:h-64 cursor-pointer"
                              onClick={() => setSelectedItinerary(item)}
                            >
                              {/* Price */}
                              {item.price && item.currency && (
                                <div
                                  className="absolute top-3 right-3 z-10 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full font-bold shadow-md border-2 border-white/50 backdrop-blur-sm"
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
                            <div className="p-5 sm:p-6 text-center">

                              {/* TITLE - CLICKABLE */}
                              <h2
                                className="text-[1.1rem] sm:text-lg font-bold mb-1.5 cursor-pointer hover:underline leading-tight"
                                style={{ color: BRAND }}
                                onClick={() => setSelectedItinerary(item)}
                              >
                                {item.title}
                              </h2>

                              <p className="text-gray-500 text-xs font-medium mb-3">
                                Available Every Day
                              </p>

                              {/* PICKUP DROPDOWN */}
                              {item.pickupTimes && item.pickupTimes.length > 0 && (
                                <div className="mt-3 mb-5 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                                  <div
                                    className="text-xs sm:text-sm font-bold mb-1.5 uppercase tracking-wide"
                                    style={{ color: BRAND }}
                                  >
                                    Pickup Times
                                  </div>
                                  <div className="text-gray-700 text-sm font-medium">
                                    {item.pickupTimes.map((time: string, index: number) => (
                                      <p key={index}>{time}</p>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* HIGHLIGHTS */}
                              <div className="text-left mb-5">
                                <h3 className="text-sm font-bold mb-3 text-center text-gray-800 uppercase tracking-wide">
                                  Key Highlights
                                </h3>

                                <div className="max-h-28 overflow-y-auto pr-2 custom-scroll">
                                  <ul className="space-y-2">
                                    {item.highlights?.map((point: string, index: number) => (
                                      <li
                                        key={index}
                                        className="flex items-start gap-2.5 text-gray-700 text-sm font-medium leading-relaxed"
                                      >
                                        <span className="mt-0.5 font-bold" style={{ color: BRAND }}>✓</span>
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* DESCRIPTION DROPDOWN */}
                              <div className="mb-5">
                                <button
                                  onClick={() =>
                                    setOpenDescriptionIndex(openDescriptionIndex === i ? null : i)
                                  }
                                  className="flex items-center justify-center gap-1.5 font-bold w-full text-xs uppercase tracking-wide bg-gray-100 py-2 rounded-lg transition active:bg-gray-200"
                                  style={{ color: BRAND }}
                                >
                                  Read Full Description
                                  {openDescriptionIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </button>

                                {openDescriptionIndex === i && (
                                  <p className="mt-3 text-gray-600 text-sm leading-relaxed text-justify px-1">
                                    {item.description}
                                  </p>
                                )}
                              </div>

                              {/* BUTTONS CONTAINER */}
                              <div className="flex flex-col gap-2.5">
                                {/* WHATSAPP BUTTON */}
                                <a
                                  href={whatsappLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform"
                                  style={{ backgroundColor: BRAND }}
                                >
                                  <FaWhatsapp className="text-xl" />
                                  Contact via WhatsApp
                                </a>

                                {/* DETAILS BUTTON */}
                                <button
                                  onClick={() => setSelectedItinerary(item)}
                                  className="w-full border-2 py-2.5 rounded-xl font-bold text-sm bg-white active:bg-gray-50 transition-colors"
                                  style={{
                                    borderColor: BRAND,
                                    color: BRAND
                                  }}
                                >
                                  ℹ View All Details
                                </button>
                              </div>

                            </div>
                          </motion.li>
                        );
                      })}
                    </ul>
                  )}       

                  {tab.id === "reviews" && (
                    <div className="px-2">
                      <ReviewTestimonial testimonials={tour.testimonials} />
                    </div>
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
            className="mx-auto mt-8 bg-white text-black p-6 shadow rounded-3xl"
          >
            
            {/* BEAUTIFIED DESKTOP OVERVIEW */}
            {activeTab === "overview" && (
              <div className="max-w-4xl mx-auto py-10 px-8 sm:px-14 bg-gradient-to-b from-white to-[#f4f7f8] rounded-[32px] border border-gray-100 shadow-sm">
                <h2 
                  className="text-4xl font-extrabold text-[#0A7BBE] mb-8 text-center" 
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  The Experience
                </h2>
                <div className="space-y-6">
                  {overviewParagraphs.map((paragraph: string, idx: number) => (
                    paragraph.trim() ? (
                      <p key={idx} className="text-base sm:text-lg text-gray-700 leading-8 font-medium">
                        {/* Elegant drop cap for the first paragraph */}
                        {idx === 0 && (
                          <span 
                            className="float-left text-6xl text-[#0A7BBE] font-bold pr-4 pt-1 leading-none" 
                            style={{ fontFamily: "'Playfair Display', Georgia, serif", textShadow: "2px 2px 0px rgba(10,123,190,0.1)" }}
                          >
                            {paragraph.charAt(0)}
                          </span>
                        )}
                        {idx === 0 ? paragraph.substring(1) : paragraph}
                      </p>
                    ) : null
                  ))}
                </div>
              </div>
            )}

            {activeTab === "itinerary" && (
              <ul
                className="grid gap-6 px-4 sm:px-0"
                style={{
                  gridTemplateColumns: "repeat(3, 1fr)",    
                  maxWidth: "1400px",
                }}
              >
                {tour.itinerary.map((item: any, i: number) => {
                  const whatsappNumber = "201288062555";
                  const message = `Hello, I'm interested in ${item.title}`;
                  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: i * 0.1, // nice stagger effect
                      }}
                      className="group w-full max-w-2xl bg-[#f4f7f8] rounded-[28px] shadow-xl overflow-hidden 
                                 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                    >

                      {/* IMAGE - CLICKABLE */}
                      <div 
                        className="relative w-full h-48 sm:h-64 overflow-hidden"
                        onClick={() => setSelectedItinerary(item)}
                      >
                        {/* Dynamic Price */}
                        {item.price && item.currency && (
                          <div
                            className="absolute top-3 right-3 z-10 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border-2 border-white/50 backdrop-blur-sm shadow-lg flex items-center gap-1.5"
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
                        {/* Shine Effect (Top → Bottom) */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                          <div
                            className="
                              absolute inset-0
                              bg-gradient-to-b from-transparent via-white/25 to-transparent
                              translate-y-[-100%]
                              group-hover:translate-y-[100%]
                              transition-transform
                              duration-1000
                              ease-out
                            "
                          />
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="px-4 sm:px-6 py-4 sm:py-6 text-center">

                        {/* TITLE - CLICKABLE */}
                        <h2
                          className="text-lg sm:text-xl font-bold mb-2 hover:underline leading-tight"
                          style={{ color: BRAND }}
                          onClick={() => setSelectedItinerary(item)}
                        >
                          {item.title}
                        </h2>

                        <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
                          Available Every Day
                        </p>

                        {/* PICKUP DROPDOWN */}
                        <div className="mt-4 mb-6">
                          <div
                            className="text-xs sm:text-sm font-bold mb-2 uppercase tracking-wide"
                            style={{ color: BRAND }}
                          >
                            Pickup Times
                          </div>

                          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 text-sm font-medium text-gray-700 space-y-1.5">
                            {item.pickupTimes?.map((time: string, index: number) => (
                              <p key={index}>{time}</p>
                            ))}
                          </div>
                        </div>

                        {/* HIGHLIGHTS WITH SCROLL */}
                        <div className="text-left mb-6">
                          <h3 className="text-sm sm:text-base font-bold mb-4 text-center uppercase tracking-wide text-gray-800">
                            Key Highlights
                          </h3>

                          <div className="max-h-[6.5rem] overflow-y-auto pr-3 custom-scroll">
                            <ul className="space-y-3">
                              {item.highlights?.map((point: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-3 text-gray-700 text-sm sm:text-base font-medium leading-relaxed"
                                >
                                  <span className="font-bold mt-0.5" style={{ color: BRAND }}>✓</span>
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
                            className="flex items-center justify-center gap-2 font-bold w-full uppercase tracking-wide text-xs bg-gray-100 py-2.5 rounded-lg hover:bg-gray-200 transition"
                            style={{ color: BRAND }}
                          >
                            Read Full Description
                            {openDescriptionIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>

                          {openDescriptionIndex === i && (
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed text-justify px-2">
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
                            className="flex-1 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition hover:opacity-90 shadow-md"
                            style={{ 
                              backgroundColor: BRAND, 
                              color: 'white'
                            }}
                          >
                            <FaWhatsapp className="text-xl sm:text-xl" />
                            WhatsApp
                          </a>

                          {/* DETAILS BUTTON - CLICKABLE */}
                          <button
                            onClick={() => setSelectedItinerary(item)}
                            className={`flex-1 border-2 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition bg-white
                              border-[#0A7BBE] text-[#0A7BBE]
                              hover:bg-gray-50`}
                          >
                            ℹ View Details
                          </button>
                        </div>

                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            )}

            {activeTab === "included" && (
              <ul className="list-disc ml-5 space-y-2">
                {tour.included.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {activeTab === "excluded" && (
              <ul className="list-disc ml-5 space-y-2">
                {tour.excluded.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
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
              className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent close on modal click
            >
              
              {/* Header */}
              <div className="p-6 text-white relative bg-gradient-to-r from-[#075E94] to-[#0A7BBE]">
                <button 
                  onClick={() => setSelectedItinerary(null)} 
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition"
                >
                  <X size={26} />
                </button>

                <div className="flex gap-4 items-center mt-2">
                   {/* Item Image as Thumbnail */}
                  <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-2xl overflow-hidden border-2 border-white/30 shrink-0 shadow-md">
                    <Image 
                      src={selectedItinerary.image} 
                      alt={selectedItinerary.title} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold leading-tight">{selectedItinerary.title}</h2>
                    <div className="flex gap-4 mt-3 text-xs md:text-sm font-medium opacity-90">
                      <span className="flex items-center gap-1.5"><Calendar size={16}/> Every day</span>
                      <span className="flex items-center gap-1.5"><Clock size={16}/> {selectedItinerary.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 space-y-10">

                {/* ===== OVERVIEW ===== */}
                <div>
                  <h3 className="text-[#0A7BBE] text-lg font-bold flex items-center gap-2 mb-5 uppercase tracking-wide">
                    <Tag size={20} />
                    Overview
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {/* Adult */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition">
                      <div className="w-12 h-12 bg-[#0A7BBE]/10 rounded-full mx-auto flex items-center justify-center text-[#0A7BBE] mb-3">
                        <User size={22} />
                      </div>
                      <p className="text-xs uppercase tracking-wide text-gray-400 font-bold mb-1">Price</p>
                      <p className="text-xl font-bold text-[#0A7BBE]">
                        € {selectedItinerary.price}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1 uppercase">Per person</p>
                    </div>

                    {/* Duration */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition">
                      <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto flex items-center justify-center text-gray-700 mb-3">
                        <Clock size={22} />
                      </div>
                      <p className="text-xs uppercase tracking-wide text-gray-400 font-bold mb-1">Duration</p>
                      <p className="text-lg font-bold text-gray-800">
                        {selectedItinerary.duration}
                      </p>
                    </div>

                    {/* Infant */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition">
                      <div className="w-12 h-12 bg-[#0A7BBE]/10 rounded-full mx-auto flex items-center justify-center text-[#0A7BBE] mb-3">
                        <Baby size={22} />
                      </div>
                      <p className="text-xs uppercase tracking-wide text-gray-400 font-bold mb-1">Infants</p>
                      <p className="text-lg font-bold text-gray-800">
                        {selectedItinerary.infantPrice || "Contact Us"}
                      </p>
                    </div>

                  </div>
                </div>

                {/* ===== TOUR SCHEDULE (TIMELINE STYLE) ===== */}
                {selectedItinerary.moreDetails?.length > 0 && (
                  <div>
                    <h3 className="text-[#0A7BBE] text-lg font-bold mb-6 uppercase tracking-wide">
                      Trip Details
                    </h3>

                    <div className="relative border-l-[3px] border-[#0A7BBE]/20 pl-6 space-y-8">

                      {selectedItinerary.moreDetails.map((detail: any, i: number) => (
                        <div key={i} className="relative">

                          {/* Timeline Dot */}
                          <span className="absolute -left-[31px] top-1 w-4 h-4 bg-[#0A7BBE] rounded-full ring-4 ring-white shadow-sm"></span>

                          <div className="bg-gray-50 rounded-2xl p-5 shadow-sm border border-gray-100">
                            <p className="font-bold text-[#0A7BBE] mb-2 text-sm uppercase tracking-wide">
                              {detail.item}
                            </p>
                            <p className="text-sm text-gray-700 font-medium leading-relaxed">
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
                  <div className="bg-amber-50 text-amber-800 px-5 py-4 rounded-2xl flex items-start gap-3 text-sm font-semibold border border-amber-200 shadow-sm">
                    <Info size={20} className="mt-0.5 shrink-0 text-amber-600"/> 
                    <div className="space-y-1.5">
                      {selectedItinerary.extraInfo.map((info: string, i: number) => (
                        <p key={i}>{info}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* ===== PICKUP & RETURN ===== */}
                <div className="space-y-4">

                  {selectedItinerary.pickupTimes?.length > 0 && (
                    <div className="bg-[#f0f9ff] p-5 rounded-2xl flex items-center gap-4 border border-[#bae6fd]">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <ArrowUp size={20} className="text-[#0A7BBE]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                          Hotel Pickup
                        </p>
                        <p className="font-bold text-gray-800 text-sm">
                          {selectedItinerary.pickupTimes[0]}
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedItinerary.returnTime && (
                    <div className="bg-[#f0f9ff] p-5 rounded-2xl flex items-center gap-4 border border-[#bae6fd]">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <ArrowDown size={20} className="text-[#0A7BBE]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                          Hotel Return
                        </p>
                        <p className="font-bold text-gray-800 text-sm">
                          {selectedItinerary.returnTime}
                        </p>
                      </div>
                    </div>
                  )}

                </div>

                {/* ===== INCLUDED ===== */}
                {selectedItinerary.included?.length > 0 && (
                  <div className="bg-green-50/50 p-6 rounded-3xl border border-green-100">
                    <h3 className="font-bold text-lg mb-5 text-gray-800 uppercase tracking-wide">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {selectedItinerary.included.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                          <Check className="text-green-500 mt-0.5 shrink-0" size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ===== EXCLUDED ===== */}
                {selectedItinerary.excluded?.length > 0 && (
                  <div className="bg-red-50/50 p-6 rounded-3xl border border-red-100">
                    <h3 className="font-bold text-lg mb-5 text-gray-800 uppercase tracking-wide">
                      Not Included
                    </h3>
                    <ul className="space-y-3">
                      {selectedItinerary.excluded.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                          <X className="text-red-400 mt-0.5 shrink-0" size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ===== CONTACT BUTTON ===== */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/201288062555?text=${encodeURIComponent(`Hello, I'm interested in ${selectedItinerary.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full sm:w-2/3 mx-auto py-4 rounded-2xl font-bold text-white text-base items-center justify-center gap-3 transition hover:opacity-90 shadow-xl active:scale-95"
                    style={{ backgroundColor: '#0A7BBE' }}
                  >
                    <FaWhatsapp className="text-2xl" /> Book via WhatsApp
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