// app/data/tours.ts

import { Certificate } from "crypto";

export type Testimonial = {
  id: number;
  name: string;
  date: string;
  title: string;
  text: string;
};
export type BringItem = {
  item: string;
  reason: string;
};


export type Tour = {
  title: string;      
  cardTitle?: string;
  slug: string;    
  description: string;
  heroImage: string;
  heroVideo?: string;
  gallery: string[];
  overview: string;
  included: string[];
  excluded: string[];
  reviews: string[];
  itinerary: {
    title: string;
    image: string;
    price?: number;
moreDetails?: {
  item: string;
  reason: string;
}[];
    infantPrice?: string; // Added for the popup
    extraInfo?: string []; // Added for the popup
    duration?: number | string;
    currency?: string;
    pickupTimes?: string[];
    returnTime?: string; // Added for the popup
     included?: string[];
  excluded?: string[];
    highlights?: string[];
    description: string;
  }[];
  testimonials: Testimonial[];
};

export const makeSlug = (title: string) =>
  title.toLowerCase().replace(/ /g, '-');

export const tours: Tour[] = [
  {
    title: "Experience Luxor’s legendary heritage ", 
    cardTitle: "Luxor", 
    
    slug: makeSlug("6 Day Egypt Desert  Oasis Tour"), 
    
    description:
      "Experience Luxor’s legendary heritage and serene Nile vistas in comfort and style.",
    heroImage: "/images/tours/1.jpg",
    heroVideo: "/videos/luxor.mp4",
    gallery: ["/images/tours/luxor.jpg", "/images/tours/luxor2.jpg"],
    overview:
      "Luxor is a living museum of ancient Egypt. This trip takes you through the city’s iconic temples, royal tombs, and historic sites along the Nile, offering a perfect blend of culture, history, and breathtaking landscapes.",
    itinerary: [
  {
    title: "Day Tour – Karnak, Valley of the Kings, Memnon, Hatshepsut",
    image: "/images/itinerary/karnak.jpg",
    duration: "3 hrs",
      price: 75,
  currency: "€",
  pickupTimes: ["3:30 am from Hurghada"],
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
    
    
  ],

    description:
      "Visit the massive Karnak Temple complex, explore the Valley of the Kings, see the Colossi of Memnon, and admire Queen Hatshepsut’s temple.",
  },
  {
    title: "Balloon – Hot Air Balloon Ride",
    image: "/images/itinerary/balloon.jpg",
     price: 70,
  currency: "€",
  pickupTimes: ["24:00 from Hurghada"],
 highlights: [
  "Experience the thrill of soaring above fairy chimneys and rock-cut churches",
  "Fuel up with complimentary tea, coffee, and a pastry before your take-off",
  "Savor views of Cappadocia from a bird's-eye-perspective in a hot air balloon",
  "Raise a toast to your flight and watch the sunrise with a champagne in hand",
  "Commemorate your memorable experience with an individual flight certificate"
]
,
  included:[ "Flight Certificate, Water, Tea, Cpffee"],
  excluded:["Gratuities (Tipping)"], 
    infantPrice: "Not allowed for childern under 6 years old", 
    extraInfo: ["Refund Policy: Full refund for weather cancellations or 24h notice " ,"Booking Advice: Highly recommended to book 3 days in advance"],
  moreDetails: [
  {
    item: "Flight Time",
    reason: "45 minutes"
  },
  {
    item: "Snorkeling Stops",
    reason: "2 stops"
  },
  {
    item: "Transportation",
    reason: "Hotel/Cruise pick-up & drop-off (A/C vehicles)"
  },
  {
    item: "River Crossing",
    reason: "Speedboat transfer to the West Bank"
  },
  {
    item: "Health & Safety",
    reason: "Not suitable for pregnant women, people with heart or back problems, or wheelchair users."
  },
  {
    item: "Weather Note",
    reason: "Bring a light jacket — it can be cold in the early morning."
  }
]
,

  description:
      "Explore a spectacular setting from the sky on this hot air balloon ride over Cappadocia. Be picked up from your accommodation in Göreme before the first light of day and relax on the transfer to the launch site, a location selected by your pilot based on the day's weather conditions.Upon arrival, enjoy tea and coffee with a light pastry while the crew makes flight preparations. Get into the basket and listen as the pilot gives detailed safety instructions. Then, as the burners are fired up, slowly rise into the sky. Watch the balloon gently gain elevation as you soar above the Cappadocia scenery. Upon returning to the ground, celebrate your flight with sparkling wine or champagne. Receive a flight certificate to commemorate your experience before heading back to your hotel."

  },

  {
    title: "Nile Cruise – Luxor to Aswan",
    image: "/images/itinerary/nile-cruise.jpg",
         price: 90,
  currency: "€",
  pickupTimes: ["Depends Where You Are"],
       duration: "5hrs" ,
 highlights: [
  "Covers all must-do experiences in Luxor & Aswan in one epic journey",
  "Soar over Luxor on an unforgettable hot air balloon ride",
  "Walk in the footsteps of pharaohs at Karnak & the Valley of the Kings",
  "Cruise the Nile in style with guided stops at Egypt’s top temples",
  "Witness the awe-inspiring Abu Simbel Temples"
],
included:["Live tour guide" ,":" , "Arabic, English, German, Spanish, French"],
    description:
      "Relax on a scenic Nile cruise from Luxor to Aswan, stopping at historic temples along the way."
  }
],

    included: ["Hotel Pickup", "Professional Guide",],
    excluded: [""],
    reviews: ["⭐⭐⭐⭐⭐ Amazing experience!", "⭐⭐⭐⭐ Great tour and friendly guide."],
    testimonials: [
      {
        id: 1,
        name: "Martina B",
        date: "2025-06-05",
        title: "Unforgettable trip",
        text: "Unforgettable trip in the company of Mohamed. Everything was organized to perfection.",
      },
      {
        id: 2,
        name: "Raziye A",
        date: "2025-05-07",
        title: "White Desert & Siwa",
        text: "Camping in the White Desert was a unique and unforgettable experience.",
      },
      {
        id: 3,
        name: "Noemi A",
        date: "2025-04-30",
        title: "Beautiful Experience",
        text: "A once-in-a-lifetime night in the desert. Truly magical.",
      },
      {
        id: 4,
        name: "Lucia F",
        date: "2025-04-23",
        title: "Desert Adventure",
        text: "Wonderful experience with excellent organization.",
      },
    ],
  },

  {
    title: "Experience world-class sea trips from Sharm El-Sheikh",
    cardTitle: "Sharm El-Sheikh ",
    slug: makeSlug("Classic Nile Cruise Experience"),
    description:
      "Experience world-class sea trips from Sharm El-Sheikh, featuring iconic dive spots and stunning scenery.",
    heroImage: "/images/tours/2.jpg",
    heroVideo: "/videos/sham.mp4",
    gallery: ["/images/tours/16.jpg", "/images/tours/17.jpg"],
    overview:
      "Sharm El-Sheikh sea trips offer unforgettable marine experiences, from snorkeling over coral gardens to diving in famous Red Sea sites. Enjoy scenic boat rides and explore the underwater world of Egypt’s most popular coastal destination.",
    itinerary: [
      
  {
    title: "Sea Trip – Pirate Boat",
    image: "/images/itinerary/pirate-boat.jpg",
      price: 120,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
    
    
  ],
    description: "Full-day pirate-style boat cruise with snorkeling, swimming, and onboard entertainment."
  },
  {
    title: "Sea Trip – Ras Mohammed",
    image: "/images/itinerary/ras-mohammed.jpg",
      price: 28,
    pickupTimes:["8:00am - 4:00pmm"],
  currency: "€",
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
    
    
  ],
    description: "Snorkeling and diving at Ras Mohammed National Park coral reefs."
  },
  {
    title: "Sea Trip – Tiran Island",
    image: "/images/itinerary/tiran-island.jpg",
      price: 25,
    
  currency: "€",
  pickupTimes: ["8:00 am -4:30pm"],
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
    
    
  ],
    description: "Boat trip to Tiran Island with snorkeling in crystal-clear waters."
  },
  {
    title: "Submarine – Semi Submarine",
    image: "/images/itinerary/submarin.jpg",
      price: 22,
  currency: "€",
  pickupTimes: ["Periodic (Every two hours from 9AM)"],
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
    
    
  ],
    description: "Glass-bottom boat experience to explore marine life without diving."
  },
  {
    title: "Safari – Desert Safari",
    image: "/images/itinerary/siwa-safari.jpg",
      price: 25,
  currency: "€",
  pickupTimes: ["Sunrise (4:00 Am) or Sunset (3:00PM)"],
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
    
    
  ],
    description: "Quad biking, camel riding, and Bedouin village visit in Sinai desert."
  },
     {
    title: "Limousine + Taxi",
    image: "/images/itinerary/limouse2.jpg",
    price:15 ,
  currency: "€",
       pickupTimes:["On Request (24/7)"],
  highlights: [
  "Professional representative with personalized sign and luggage assistance",
  "100% On-time guarantee; drivers arrive 15 minutes early",
  "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)",
  "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports",
  "Professional, multilingual drivers",
  "Transparent all-inclusive rates (Tolls and Parking included)"
],

moreDetails: [
  {
    item: "Meet & Greet",
    reason: "A professional representative awaits you with a personalized sign and full luggage assistance"
  },
  {
    item: "Punctuality",
    reason: "100% On-time guarantee; drivers arrive 15 minutes before scheduled pickup"
  },
  {
    item: "Premium Fleet",
    reason: "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)"
  },
  {
    item: "Onboard Comfort",
    reason: "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports"
  },
  {
    item: "Expert Drivers",
    reason: "Professional, multilingual drivers with deep knowledge of Egypt's safest and fastest routes"
  },
  {
    item: "Fixed Pricing",
    reason: "Transparent, all-inclusive rates (Tolls and Parking included) with no hidden fees"
  }
],

included: [
  "Personalized Meet & Greet",
  "Full luggage assistance",
  "Air-conditioned vehicle",
  "High-speed Wi-Fi",
  "Bottled mineral water",
  "Mobile charging ports"
],



    description: "Evening water sports."
  },
],
    included: [ "Airport Transfers", "Guide",],
    excluded: ["Drinks", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Beautiful cruise!", "⭐⭐⭐⭐ Highly recommended."],
    testimonials: [
      {
        id: 1,
        name: "Mark T",
        date: "2025-04-10",
        title: "Top Service",
        text: "Professional guides and amazing landscapes.",
      },
      {
        id: 2,
        name: "Sandra P",
        date: "2025-03-18",
        title: "Highly Recommended",
        text: "Everything was perfect from start to finish.",
      },
      {
        id: 3,
        name: "Ali R",
        date: "2025-03-02",
        title: "Memorable Trip",
        text: "Very safe, very well planned.",
      },
      {
        id: 4,
        name: "Helen K",
        date: "2025-02-21",
        title: "Loved It",
        text: "Would absolutely do this again.",
      },
    ],
  },

  {
    title: "Discover the heart of Egypt with its pyramids, museums, and bustling streets.",
    cardTitle: "Cairo",
    slug: makeSlug("Explore Egypt From the Pyramids to the White Desert"),
    description: "Discover the heart of Egypt with its pyramids, museums, and bustling streets.",
    heroImage: "/images/trending/3.jpg",
    heroVideo: "/videos/cario.mp4",
    gallery: ["/images/trending/4.jpg", "/images/trending/21.jpg"],
    overview: "A perfect blend of history and modern Egypt, this Cairo trip covers the major archaeological sites and cultural highlights, giving you a deep insight into the country’s rich past.",
    itinerary: [
  {
    title: "Giza Pyramids & Grand Egyptian Museum",
    image: "/images/itinerary/22.jpg",
    
      price: 80,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
  ],description: "Visit the Great Pyramids, Sphinx, and the Grand Egyptian Museum."
  },
  {
    title: "Scenic Flight Over Pyramids",
    image: "/images/itinerary/20.jpg",
     price: 120,
  currency: "€",
  pickupTimes: ["8:00 am"],
included:["Private group", "Host or Greeter : English, Arabic"],
    infantPrice: "",
    extraInfo:["Free Cancellation: Cancel up 24hrs in advance for full refund", "Reserve now & pay later: Keep your travel plans flexble- book your spot and pay nothing today"
     ], 
  
moreDetails: [
  {
    item: "Priority Access",
    reason: "Skip the line through a separate entrance for faster entry."
  }
],

  highlights: [
    "Feel the thrill of a private helicopter flight over Cairo and the Pyramids",

"Perfect for couples, families, or VIP guests seeking a luxurious experience"
,
"Enjoy breathtaking aerial views of Cairo and the Pyramids of Giza",

"Capture breathtaking photos from the sky as you glide over ancient landmarks",

"exclusive landing at the Pyramids for a truly unforgettable adventure!"  
  ],
description: "Experience Cairo like never before. Take off on a private helicopter ride and enjoy breathtaking panoramic views of the Nile, Cairo Tower, and the historic Salah El-Din Citadel. Feel the thrill of soaring above the ancient wonders of Cairo and Giza in a luxurious private aircraft—an experience that blends opulence with adventure. From the moment of ascent, the vast metropolis of Cairo unfolds beneath you, where winding streets, historic landmarks, and modern structures merge seamlessly with the surrounding desert. As the journey continues toward Giza, the legendary pyramids rise majestically from the sands, offering an unobstructed aerial view of the Great Pyramid of Khufu, the Pyramid of Khafre, and the Pyramid of Menkaure. More than a sightseeing tour, this exclusive flight is an immersive encounter with Egypt’s timeless history, revealing its grandeur from a perspective reserved for the few."
  },
  {
    title: "Historic Cairo – Al Muizz & Khan El Khalili",
    image: "/images/itinerary/23.jpg",
      price: 40,
  currency: "€",
  pickupTimes: ["8:00 am",],
included:["Private group", "Host or Greeter : English, Arabic"],
    infantPrice: "",
    extraInfo:["Free Cancellation: Cancel up 24hrs in advance for full refund", "Reserve now & pay later: Keep your travel plans flexble- book your spot and pay nothing today"
     ], 
  
moreDetails: [
  {
    item: "Comfortable Walking Shoes",
    reason: "The tour involves walking on historic cobblestone streets."
  },
  {
    item: "Camera or Smartphone",
    reason: "To capture stunning photos of thousand-year-old landmarks."
  },
  {
    item: "Headscarf / Light Shawl",
    reason: "Useful for sun protection and for ladies when entering mosques."
  },
  {
    item: "Cash (Local Currency)",
    reason: "Recommended for shopping and tipping in the small alleys."
  },
  {
    item: "Sunglasses",
    reason: "To protect your eyes from the bright daylight."
  }
],



  highlights: [
    "Stop 1 : Bab al-Futuh & Al-Muizz St.,Exploring Fatimid walls and the Qalawun Complex",
"Stop 2: Islamic Architecture (Bayt al-Suhaymi),Admiring traditional Cairene house design and Mashrabiya",
"Stop 3:The Historic Souq (Khan el-Khalili), Free time for shopping for antiques, textiles, and souvenirs",
"Stop 4: Heritage Break (El Fishawy Cafe),Relaxing at Cairo’s oldest cafe with traditional Egyptian tea",
"Stop 5 : Tour Finale (Al-Hussein Area),Enjoying lunch or dinner at a restaurant with an ancient view"
  ],
    description: "A Note from SIRI SAND TOURS: We pay attention to every detail to ensure you have an unforgettable journey through history."
  },
  {
    title: "Islamic Cairo Mosques",
    image: "/images/trending/5.jpg",
     price: 65,
  currency: "€",
  pickupTimes: ["8:00 am"],
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
    
    
  ],
    description: "Visit the Citadel, Mohamed Ali Mosque, Al-Azhar and Ibn Tulun Mosque."
  },
  {
    title: "Coptic Cairo Churches",
    image: "/images/itinerary/24.jpg",
      price: 65,
  currency: "€",
  pickupTimes: ["8:00 am",],
 highlights: [
  "Purpose Reason 1. Modest clothing in respect for the sanctity of the places and houses of worship.",
  "Professional camera. The ancient Coptic icons and inlaid wood details (the altar veil) are worth documenting.",
  "Hat and glasses for moving around the outdoor areas between churches.",
  "An information booklet (or guide). The area is rich in spiritual stories that need explanation to understand its value."
],

  moreDetails: [
  {
    item: "9:00 AM – Muhammad Ali Mosque (Marble Mosque)",
    reason:
      "Icon of the Citadel, famous for its Ottoman architecture, towering minarets, and breathtaking panoramic views over Cairo. Located inside the Citadel of Saladin."
  },
  {
    item: "10:30 AM – Mosque of al-Nasir Muhammad ibn Qalawun",
    reason:
      "A remarkable Mamluk mosque distinguished by its minarets decorated with green mosaic tiles (Qashani). Located inside the Citadel of Saladin."
  },
  {
    item: "11:30 AM – Mosque & Madrasa of Sultan Hassan",
    reason:
      "Known as the 'Pyramid of Islamic Architecture' and considered one of the greatest Mamluk buildings in the world. Located at Citadel Square."
  },
  {
    item: "12:30 PM – Al-Rifa’i Mosque",
    reason:
      "Located opposite Sultan Hassan Mosque, it houses the tombs of the Muhammad Ali dynasty and the Shah of Iran, distinguished by its royal decorations."
  },
  {
    item: "1:30 PM – Mosque of Ahmad Ibn Tulun",
    reason:
      "The oldest mosque preserved in its original state, famous for its unique spiral minaret and vast courtyard. Located in Sayyida Zainab."
  },
  {
    item: "2:30 PM – Lunch & Relaxation",
    reason:
      "Enjoy an oriental lunch at a restaurant overlooking the historic landmarks of Old Cairo in the Citadel / Al-Azhar area."
  }
]
,
    description: "🗺️ SIRI SAND TOURS' advice to our clients : This tour is located entirely within a safe pedestrian zone, making it ideal for families and seniors, as there is no need to use a car once you reach the entrance of the religious complex."
  },
  {
    title: "Limousine + Taxi",
    image: "/images/itinerary/limouse.jpg",
    price:15 ,
  currency: "€",
    pickupTimes:["On Request (24/7)"],
  highlights: [
  "Professional representative with personalized sign and luggage assistance",
  "100% On-time guarantee; drivers arrive 15 minutes early",
  "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)",
  "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports",
  "Professional, multilingual drivers",
  "Transparent all-inclusive rates (Tolls and Parking included)"
],

moreDetails: [
  {
    item: "Meet & Greet",
    reason: "A professional representative awaits you with a personalized sign and full luggage assistance"
  },
  {
    item: "Punctuality",
    reason: "100% On-time guarantee; drivers arrive 15 minutes before scheduled pickup"
  },
  {
    item: "Premium Fleet",
    reason: "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)"
  },
  {
    item: "Onboard Comfort",
    reason: "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports"
  },
  {
    item: "Expert Drivers",
    reason: "Professional, multilingual drivers with deep knowledge of Egypt's safest and fastest routes"
  },
  {
    item: "Fixed Pricing",
    reason: "Transparent, all-inclusive rates (Tolls and Parking included) with no hidden fees"
  }
],

included: [
  "Personalized Meet & Greet",
  "Full luggage assistance",
  "Air-conditioned vehicle",
  "High-speed Wi-Fi",
  "Bottled mineral water",
  "Mobile charging ports"
],



    description: "Evening water sports."
  },

]
,
    included: [ "Guide",],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Fantastic tour!", "⭐⭐⭐⭐ Loved it!"],
    testimonials: [
      {
        id: 1,
        name: "Jonas M",
        date: "2025-02-01",
        title: "Amazing Views",
        text: "The desert views were breathtaking.",
      },
      {
        id: 2,
        name: "Emily S",
        date: "2025-01-15",
        title: "Perfect Experience",
        text: "Highly professional team.",
      },
      {
        id: 3,
        name: "Martina B",
        date: "2025-06-05",
        title: "Unforgettable trip",
        text: "Unforgettable trip in the company of Mohamed. Everything was organized to perfection.",
      },
      {
        id: 4,
        name: "Raziye A",
        date: "2025-05-07",
        title: "White Desert & Siwa",
        text: "Camping in the White Desert was a unique and unforgettable experience.",
      },
    ],
  },

  {
    title: "Experience a peaceful Red Sea getaway with snorkeling & diving,",
    cardTitle: "Marsa Alam ",
    slug: makeSlug("Luxury Siwa Oasis White Desert Adventure"),
    description: "Experience a peaceful Red Sea getaway with snorkeling, diving, and coastal relaxation in Marsa Alam.",
    heroImage: "/images/tours/4.jpg",
    heroVideo: "/videos/marsa.mp4",
    gallery: ["/images/tours/14.jpg", "/images/tours/15.jpg"],
    overview: "Marsa Alam is ideal for those looking to escape the crowds. This plan highlights the Red Sea’s natural wonders, from colorful coral reefs to crystal-clear waters, making it perfect for eco-tourism and marine adventures.",
    itinerary: [
  {
    title: "Royal Sea Scope Submarine",
    image: "/images/itinerary/royal-seascope.jpg",
      price: 35,
  currency: "€",
  pickupTimes: ["9:00 am"],
  
moreDetails: [
  {
    item: "Morning Trip(1)",
    reason: "09:00AM- 11:00AM"
  },
 {
    item: "Morning Trip (2)",
    reason: "11:00AM- 1:00PM"
  },
 {
    item: "afternoon Trip(3)",
    reason: "03:00AM- 5:00PM"
  },
],
 duration: "8hrs" ,

 highlights: [
  "Underwater Viewing: Descend to a depth of 3 meters inside the Sea Scope submarine.",
  "Enjoy 45 minutes of viewing diverse marine life through specialized glass windows.",
  "Snorkeling Stop: 45 minutes stop to explore vibrant coral reefs on the sea floor."
],

  included:["Complimentary Gear: Full", "snorkeling equipment (Life jackets, masks, and fins) provided for free." ,"Refreshments: Free mineral water available from the dispenser throughout the trip."],
    description: "Submarine tour to explore coral reefs and fish."
  },
  {
    title: "Nefertari Submarine",
    image: "/images/itinerary/Nefertari.jpg",
      price: 40,
  currency: "€",
 pickupTimes: ["09:00 AM"],
duration: "10hrs",
included: [
  "Soft drinks and mineral water",
  "Life jacket",
  "Lunch",
  "Hotel transfers (Pick-up & Drop-off)",
  "Snorkeling equipment",
  "National Park fees and taxes"
],

excluded: [
  "Professional Photographer",
  "Transfers from South Marsa Alam Airport ($7 per person)"
],

extraInfo: [
  "Free Cancellation: Cancel up to 24 hours in advance for a full refund.",
  "Reserve now & pay later: Keep your travel plans flexible — book your spot and pay nothing today."
],

highlights: [
  "Morning Trip: Starts at 09:00 AM and ends at 01:30 PM.",
  "Sunset Trip: Starts at 02:00 PM and ends at 07:00 PM."
],

moreDetails: [
  {
    item: "Required Documents",
    reason: "Personal ID (for Egyptians) or Passport (for non-Egyptians)."
  },
  {
    item: "Clothing & Footwear",
    reason: "Comfortable clothes and comfortable shoes are recommended."
  },
  {
    item: "Personal Essentials",
    reason: "Sunglasses and sunscreen."
  },
  {
    item: "Snorkeling Guide",
    reason: "Professional snorkeling guide available during the trip."
  }
],

    description: "Underwater viewing experience inside a real submarine."
  },
  {
    title: "Super Desert Safari",
    image: "/images/itinerary/super-safari.jpg",
      price: 40,
  currency: "€",
 pickupTimes: ["12:30 PM"],

included: [
  "4x4 Jeep Cars",
  "Bedouin Party",
  "Helmet",
  "Dinner",
  "Mineral Water",
  "Tour Guide",
  "Beach Buggy",
  "Bedouin Village",
  "Bedouin & Oriental Show",
  "Camel Riding",
  "Hotel Transfers (Pick up & Drop off)",
  "All Taxes & Service Charges"
],

excluded: [
  "Scarf (Shawl)",
  "Photographer"
],
duration: "7 Hours",

highlights: [
  "Trip Time: Starts from 12:30 PM until 7:30 PM.",
  "Desert adventure with 4x4 Jeep and Beach Buggy experience.",
  "Camel riding and visit to a traditional Bedouin village.",
  "Enjoy Bedouin dinner with Oriental show entertainment."
],

moreDetails: [
  {
    item: "Required Items",
    reason: "National ID or Passport (for non-Egyptians)."
  },
  {
    item: "Clothing",
    reason: "Comfortable clothes"
  },
  {
    item: "Footwear",
    reason: "Sports shoes (sneakers)"
  },
  {
    item: "Extra",
    reason: "Bring a jacket or coat."
  }
],

    description: "Quad biking, camel ride, and desert sunset experience."
  },
  {
    title: "Dolphin House Snorkeling",
    image: "/images/itinerary/dolphin-house.jpg",
      price: 50,
  currency: "€",
  duration: "10 Hours",

pickupTimes: ["07:30 AM"],

included: [
  "Snorkeling gear",
  "Life jacket",
  "Lunch",
  "Drinks",
  "Hotel transfers"
],

excluded: [
  "Photographer"
],

moreDetails: [
  {
    item: "Must Bring",
    reason: "Swimwear, sunscreen, sunglasses, and ID/Passport."
  }
],

    description: "Snorkel with dolphins in their natural habitat."
  },
  {
    title: "Satyah Turtle Bay",
    image: "/images/itinerary/turtle-bay.jpg",
      price: 35,
  currency: "€",
 included: [
  "Professional snorkeling guide",
  "Life jacket",
  "Lunch on the yacht",
  "snorkeling eguipment",
  "National park fees ",
  "All necesary permits",
  "Drinks",
  "Hotel transfers"
],
duration:"8hrs",
highlights:["Exact pickup time is confimed during booking"],
excluded: [
  "Professional Photographer"
],
    description: "Snorkeling with turtles and colorful fish."
  },
  {
    title: "Wadi El Gemal National Park",
    image: "/images/itinerary/wadi-el-gemal.jpg",
      price: 28,
  currency: "€",
  duration:"8hrs",
highlights:["Pickup time set upon booking"],
excluded: [
  "Professional Photographer", "personal expenses"
],
moreDetails: [
  {
    item: "Essentials",
    reason: "Comfortable clothings & shoes sunscreen, sunglasses, ID/Passport."
  }
],
    description: "Nature reserve visit with mangroves and wildlife."
  },
  {
    title: "Scuba Diving Trip",
    image: "/images/itinerary/scuba-diving.jpg",
      price: 45,
  currency: "€",
  pickupTimes: ["8:00 am"],
  included:["Permit"],
  excluded:["Photographer"],
  duration:"7hrs",
  moreDetails: [
  {
    item: "Requirements",
    reason: "ID/Passport, Sunglasses, Sunscreen, Swimwear"},
    
  {
    item: "Transfers",
    reason: " Included (Hotel pick-up & drop-off)"
  },
  {
    item: "Equipment",
    reason: "Included (Diving & Snorkeling gear)"
  },
  {
    item: "Food & Drinks",
    reason: "Included (Open buffet lunch, Water, Soft drinks)"
  },
  
],
  
    description: "Full-day diving excursion with professional instructors."
  }
]
,
    included: ["Taxi", "Guide", "Limousine"],
    excluded: [""],
    reviews: ["⭐⭐⭐⭐⭐ Luxurious!", "⭐⭐⭐⭐ Amazing experience!"],
    testimonials: [
      {
        id: 1,
        name: "Lucia F",
        date: "2025-04-23",
        title: "Desert Adventure",
        text: "Wonderful experience with excellent organization.",
      },
      {
        id: 2,
        name: "Mark T",
        date: "2025-04-10",
        title: "Top Service",
        text: "Professional guides and amazing landscapes.",
      },
      {
        id: 3,
        name: "Sandra P",
        date: "2025-03-18",
        title: "Highly Recommended",
        text: "Everything was perfect from start to finish.",
      },
      {
        id: 4,
        name: "Ali R",
        date: "2025-03-02",
        title: "Memorable Trip",
        text: "Very safe, very well planned.",
      },
    ],
  },

  {
    title: "Explore Fayoum’s natural beauty & ancient sites",
    cardTitle: "Fayoum Oasis",
    slug: makeSlug("Cairo Alexandria Highlights Tour"),
    description: "Explore Fayoum’s natural beauty, ancient sites, and desert landscapes on a refreshing escape from the city.",
    heroImage: "/images/tours/5.jpg",
    heroVideo: "/videos/fayoum.mp4",
    gallery: ["/images/tours/18.jpg", "/images/tours/19.jpg"],
    overview: "Fayoum is a peaceful oasis southwest of Cairo, known for its lakes, waterfalls, and protected natural areas. This itinerary includes visits to Wadi El-Rayan, Mudawara Mountain, and local villages, offering a perfect blend of nature and culture.",
    itinerary: [
  {
    title: "Tunis Village",
    image: "/images/itinerary/tunis-village.jpg",
      price: 70,
  currency: "€",
  pickupTimes: ["8:00 am"],
  moreDetails: [
  {
    item: "08:00 AM",
    reason: "Traditional Breakfast: Arrive at the village for a rural breakfast (Feteer & Honey) overlooking the lake."
  },
  {
    item: "10:00 AM",
    reason: "Pottery School: Tour the workshops, try hand-making pottery, or shop for unique handicrafts."
  },
  {
    item: "12:00 PM",
    reason: "4x4 Safari: Visit Wadi El Rayan, the Waterfalls, and Mudawarra Mountain with Sandboarding."
  },
  {
    item: "03:00 PM",
    reason: "Authentic Lunch: Return for a home-cooked Egyptian meal (Roasted Duck or local specialties)."
  },
  {
    item: "04:30 PM",
    reason: "Sunset Experience: Felucca ride on Lake Qarun at sunset or Horseback riding through the farms."
  },
  {
    item: "06:00 PM",
    reason: "Art & Departure: Free tour of the Caricature Museum followed by the return journey."
  }
],
duration:"10hrs",
    description: "Visit the famous pottery village and local art workshops."
  },
  {
    title: "Wadi El Rayan & Sandboarding",
    image: "/images/itinerary/wadi-el-rayan.jpg",
      price: 25,
  currency: "€",
  pickupTimes: ["8:00 am"],
  duration:"10hrs",
  moreDetails: [
  {
    item: "Waterfalls Visit",
    reason: "Sports Shoes & Comfy Clothes"
  },
  {
    item: "Jabal al-Mudawarra (Hiking)",
    reason: "Sunglasses & Cap"
  },
  {
    item: "Sandboarding",
    reason: "Sunblock"
  },
  {
    item: "4x4 Safari & Lake Felucca",
    reason: "Extra Water"
  },
  {
    item: "Tunis Village & Lunch",
    reason: "Cash for shopping"
  }
],

    description: "Waterfalls, sandboarding, and desert safari adventure."
  }
]
,
    included: ["Hotel", "Guide", "Meals"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Great tour!", "⭐⭐⭐⭐ Excellent guide."],
    testimonials: [
      {
        id: 1,
        name: "Helen K",
        date: "2025-02-21",
        title: "Loved It",
        text: "Would absolutely do this again.",
      },
      {
        id: 2,
        name: "Jonas M",
        date: "2025-02-01",
        title: "Amazing Views",
        text: "The desert views were breathtaking.",
      },
      {
        id: 3,
        name: "Emily S",
        date: "2025-01-15",
        title: "Perfect Experience",
        text: "Highly professional team.",
      },
      {
        id: 4,
        name: "Martina B",
        date: "2025-06-05",
        title: "Unforgettable trip",
        text: "Unforgettable trip in the company of Mohamed. Everything was organized to perfection.",
      },
    ],
  },

  {
    title: "A peaceful escape to Egypt’s remote Siwa Oasis",
    cardTitle: " Siwa Oasis",
    slug: makeSlug("Red Sea  Desert Safari Tour"),
    description: "A peaceful escape to Egypt’s remote Siwa Oasis, blending ancient history, salt lakes, and desert adventure.",
    heroImage: "/images/tours/7.jpg",
    heroVideo: "/videos/siwa.mp4",
    gallery: [
      "/images/tours/21.jpg",
      "/images/tours/20.jpg"
    ],
    overview: "Discover the magic of Siwa Oasis as you explore ancient ruins, relax in natural salt lakes, and experience thrilling desert safaris in Egypt’s western desert.",
  itinerary: [
  {
    title: "Shali Fortress & Mountain of the Dead",
    image: "/images/itinerary/shali-fortress.jpg",
      price: 45,
  currency: "€",
  pickupTimes: [""],
  highlights: [
  "Day 1: Heritage Discovery - Tour of Shali Fortress with panoramic view of the oasis.",
  "Day 2: Wellness & Adventure - Explore history at Mountain of the Dead and the Temple of the Oracle.",
  "Day 3: Relaxation & Memories - Tour of Dakrur Mountain, the icon of sand therapy."
],

moreDetails: [
  {
    item: "Day 1",
    reason: "Heritage Discovery: Shali Fortress panoramic views."
  },
  {
    item: "Day 2",
    reason: "Wellness & Adventure: Mountain of the Dead and Temple of the Oracle exploration."
  },
  {
    item: "Day 3",
    reason: "Relaxation & Memories: Dakrur Mountain visit for sand therapy experience."
  }
],

    description: "Make sure to bring comfortable clothing and suitable shoes for walking over fortresses and sand dunes"
  },
  {
    title: "Salt Lakes & Cleopatra’s Bath",
    image: "/images/itinerary/salt-lake.webp",
      price: 40,
  currency: "€",
  pickupTimes: [""],
 highlights: [
  "Cleopatra's Spring - Swimming & Cafes.",
  "Siwan Lunch - Traditional Meal (Mandi).",
  "Salt Lakes - Floating in Salt Mines.",
  "Fatnas Island.",
  "Sunset & Palm Groves."
],

moreDetails: [
  {
    item: "Cleopatra's Spring",
    reason: "Visit before Salt Lakes to rinse off the salt later; enjoy swimming and cafes."
  },
  {
    item: "Siwan Lunch",
    reason: "Experience a traditional meal (Mandi)."
  },
  {
    item: "Salt Lakes",
    reason: "Float effortlessly in the mineral-rich salt waters."
  },
  {
    item: "Fatnas Island",
    reason: "Explore the serene island surroundings."
  },
  {
    item: "Sunset & Palm Groves",
    reason: "End the day with a beautiful sunset among palm groves."
  }
],

    description: "Relax in therapeutic salt lakes and Cleopatra’s Pool."
  },
  {
    title: "Great Sand Sea Safari",
    image: "/images/itinerary/great-sand-sea.webp",
      price: 60,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
    
    
  ],
    description: "4x4 desert safari with sand dunes and sunset views."
  },
  
]
,
    included: ["Hotel", "Guide", "Meals", "Transport"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐ Amazing tour!", "⭐⭐⭐⭐⭐ Loved it!"],
    testimonials: [
      {
        id: 1,
        name: "Ali R",
        date: "2025-03-02",
        title: "Memorable Trip",
        text: "Very safe, very well planned.",
      },
      {
        id: 2,
        name: "Helen K",
        date: "2025-02-21",
        title: "Loved It",
        text: "Would absolutely do this again.",
      },
      {
        id: 3,
        name: "Jonas M",
        date: "2025-02-01",
        title: "Amazing Views",
        text: "The desert views were breathtaking.",
      },
      {
        id: 4,
        name: "Emily S",
        date: "2025-01-15",
        title: "Perfect Experience",
        text: "Highly professional team.",
      },
    ],
  },

  {
    title: "Explore Aswan’s serene Nile scenery & ancient temples",
    cardTitle: "Aswan ",
    slug: makeSlug("Ancient Egypt Discovery Tour"),
    description: "Explore Aswan’s serene Nile scenery, ancient temples, and Nubian culture.",
    heroImage: "/images/tours/8.jpg",
    heroVideo: "/videos/aswan.mp4",
    gallery: ["/images/tours/12.jpg", "/images/tours/13.jpg"],
    overview: "Aswan is known for its peaceful Nile setting and rich Nubian heritage. This itinerary includes visits to iconic sites such as Philae Temple, the High Dam, and traditional Nubian villages, offering a perfect mix of history and relaxation.",
    itinerary: [
  {
    title: "High Dam, Philae & Nubian Village",
    image: "/images/itinerary/philae.jpg",
      price: 60,
  currency: "€",
  duration:"6hrs"
  ,
    extraInfo:["Free Cancellation: Cancel up 24hrs in advance for full refund", "Reserve now & pay later: Keep your travel plans flexble- book your spot and pay nothing today"
     ], 
  included:["Live tour guide" ,":" , "Arabic, English, German, Spanish, French"],
  pickupTimes: ["8:00 am"],
  highlights: [
  "Stand in awe at Philae Temple, rescued from the Nile's rising waters",
  "Enjoy the unique view of the Nile as it crosses Aswan High Dam",
  "Find out the secrets and the story behind the Unfinished Obelisk",
  "Discover the vibrant Nubian Village and its painted alleyways",
  "Step into history, culture, and modern miracles in one unforgettable day"
]
,
    description: "Visit High Dam, Philae Temple, Kalabsha Temple and Nubian Village."
  },
  {
    title: "Abu Simbel & Kom Ombo",
    image: "/images/itinerary/abu-simbel.jpg",
      price: 80,
  currency: "€",
    extraInfo:["Free Cancellation: Cancel up 24hrs in advance for full refund", "Reserve now & pay later: Keep your travel plans flexble- book your spot and pay nothing today"
     ], 
     duration:"10hrs",
  pickupTimes: ["8:00 am"],
  included:["Live tour guide" ,":" , "Arabic, English, German, Spanish, French"
    ,"Pickup: You will be picked up from your accomodation in aswan"
  ],
 highlights: [
  "Enjoy a full day tour exploring Abu Simbel temple",
  "Enjoy visiting Abu Simbel temple (one of UNESCO site)",
  "Enjoy a comfortable Pick up and drop off from your hotel"
]
,
    description: "Full-day trip to Abu Simbel and Kom Ombo Temple."
  },
  {
    title: "Nile Cruise Aswan – Luxor",
    image: "/images/itinerary/nile-cruise2.jpg",
      price: 90,
  currency: "€",
  
  pickupTimes: ["8:00 am"],
    extraInfo:["Free Cancellation: Cancel up 24hrs in advance for full refund", "Reserve now & pay later: Keep your travel plans flexble- book your spot and pay nothing today"
     ], 
     duration:"5hrs",
 highlights: [
  "Explore the temples of Philae, Kom Ombo, Edfu, Luxor, and Karnak",
  "Discover.. Cruise the Nile with overnights in Aswan, Edfu, and Luxor",
  "Visit the majestic Abu Simbel Temples with an Egyptologist guide"
]
,
included:["Live tour guide" ,"" , "English",  "Pickup: All guest will be contacted by the guide one day before their arrival"
],
    description: "Relaxing Nile cruise between Aswan and Luxor."
  }
]
,
    included: ["Hotel", "Guide", "Meals", "Transport"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐⭐ Excellent!", "⭐⭐⭐⭐ Fun trip!"],
    testimonials: [
      {
        id: 1,
        name: "Sandra P",
        date: "2025-03-18",
        title: "Highly Recommended",
        text: "Everything was perfect from start to finish.",
      },
      {
        id: 2,
        name: "Ali R",
        date: "2025-03-02",
        title: "Memorable Trip",
        text: "Very safe, very well planned.",
      },
      {
        id: 3,
        name: "Helen K",
        date: "2025-02-21",
        title: "Loved It",
        text: "Would absolutely do this again.",
      },
      {
        id: 4,
        name: "Jonas M",
        date: "2025-02-01",
        title: "Amazing Views",
        text: "The desert views were breathtaking.",
      },
    ],
  },

  {
    title: "SIRI SAND TOURS presents your personalized Hurghada city tour program, tailored to your preferences, from 4:00 PM to 9:00 PM:",
    cardTitle: "Hurghada",
    slug: makeSlug("Egypt Cultural Heritage Tour"),
    description: "Immerse yourself in Egypt’s history and culture.",
    heroImage: "/images/tours/9.jpg",
    heroVideo: "/videos/hurghada.mp4",
    gallery: ["/images/tours/10.jpeg", "/images/tours/11.jpg"],
    overview:
      "Learn about Egypt’s traditions, monuments, and culture.",
    itinerary: [
  {
    title: "Tawila Island Resort (VVIP)",
    image: "/images/itinerary/tawila.jpg",
    duration: "3 hrs",
       price: 320,
  currency: "€",
  highlights: [
  "Morning Activity",
  "Evening Experience",
  "Arrival & Resort Check-in",
  "Welcome Sunset Dinner",
  "Island Exploration & Swimming",
  "Beachside Yoga Session",
  "Coral Reef Snorkeling Trip",
  "Outdoor Movie Night",
  "Luxury Spa & Wellness Treatment",
  "Private In-Villa Dining",
  "Kayaking & Paddle Boarding",
  "Beach BBQ Party",
  "Relaxation & Free Leisure Time",
  "Lounge Music & Cocktails",
  "Farewell Breakfast",
  "Checkout & Departure"
],

moreDetails: [
  {
    item: "Morning Activity",
    reason: "Start your day with curated morning experiences."
  },
  {
    item: "Evening Experience",
    reason: "Enjoy relaxing evening activities and entertainment."
  },
  {
    item: "Arrival & Resort Check-in",
    reason: "Settle into your resort upon arrival."
  },
  {
    item: "Welcome Sunset Dinner",
    reason: "Dine while watching a beautiful sunset."
  },
  {
    item: "Island Exploration & Swimming",
    reason: "Explore the island and enjoy swimming sessions."
  },
  {
    item: "Beachside Yoga Session",
    reason: "Participate in a relaxing yoga session by the beach."
  },
  {
    item: "Coral Reef Snorkeling Trip",
    reason: "Discover vibrant marine life while snorkeling."
  },
  {
    item: "Outdoor Movie Night",
    reason: "Enjoy a cinematic experience under the stars."
  },
  {
    item: "Luxury Spa & Wellness Treatment",
    reason: "Indulge in wellness and spa therapies."
  },
  {
    item: "Private In-Villa Dining",
    reason: "Savor exclusive dining within your villa."
  },
  {
    item: "Kayaking & Paddle Boarding",
    reason: "Engage in water sports and active exploration."
  },
  {
    item: "Beach BBQ Party",
    reason: "Enjoy a lively BBQ party by the beach."
  },
  {
    item: "Relaxation & Free Leisure Time",
    reason: "Unwind with free time at your own pace."
  },
  {
    item: "Lounge Music & Cocktails",
    reason: "Experience evening music with cocktails."
  },
  {
    item: "Farewell Breakfast",
    reason: "Conclude your stay with a memorable breakfast."
  },
  {
    item: "Checkout & Departure",
    reason: "Check out from the resort and depart."
  }
],

    description: "Luxury island day experience."
  },
  {
    title: "Hula Hula Island",
    image: "/images/itinerary/hula.jpg",
       price: 23,
    pickupTimes:["8:15am - 8:45am"],
  currency: "€",
  pickupTimes: ["9:00 am"],
  included: [
  "Hotel Transfers",
  "Island Permits",
  "Snorkeling Guide",
  "Water Sports (Banana & Cobra)",
  "Lunch & Drinks (on Yacht)",
  "Beach Chairs",
  "Diving Equipment"
],
excluded: [
  "Professional Photographer",
  "Island Drinks",
  "Transfers from Makadi, Sahl Hasheesh, El Gouna, Soma Bay"
],

highlights: [
  "Timing - 9:00 AM to 4:00 PM.",
  "Mandatory Items - ID/Passport, Comfortable Clothes, Swimwear, Sunscreen, Sunglasses."
],

moreDetails: [
  {
    item: "Timing",
    reason: "Tour runs from 9:00 AM to 4:00 PM."
  },
  {
    item: "Mandatory Items",
    reason: "Bring ID/Passport, Comfortable Clothes, Swimwear, Sunscreen, Sunglasses."
  }
],

    description: "Snorkeling and beach relaxation."
  },
  {
    title: "Eden Island",
    image: "/images/itinerary/eden.jpg",
       price: 40,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Island escape with coral reefs."
  },
  {
    title: "Orange Bay Island",
    image: "/images/itinerary/orange-bay.jpg",
       price:25 ,
    pickupTimes:["8:15am - 8:45am"],
  currency: "€",
 pickupTimes: ["9:00 am"],
  included: [
  "Hotel Transfers",
  "Island Permits",
  "Snorkeling Guide",
  "Water Sports (Banana & Cobra)",
  "Lunch & Drinks (on Yacht)",
  "Beach Chairs",
  "Diving Equipment"
],
excluded: [
  "Professional Photographer",
  "Island Drinks",
  "Transfers from Makadi, Sahl Hasheesh, El Gouna, Soma Bay"
],

highlights: [
  "Timing - 9:00 AM to 4:00 PM.",
  "Mandatory Items - ID/Passport, Comfortable Clothes, Swimwear, Sunscreen, Sunglasses."
],

moreDetails: [
  {
    item: "Timing",
    reason: "Tour runs from 9:00 AM to 4:00 PM."
  },
  {
    item: "Mandatory Items",
    reason: "Bring ID/Passport, Comfortable Clothes, Swimwear, Sunscreen, Sunglasses."
  }
],
    description: "Relax on sandy beaches and swim."
  },
  {
  
    title: "Paradise Island",
    image: "/images/itinerary/paradise.jpg",
    price: 50,
    pickupTimes:["8:15am - 8:45am"],
    infantPrice: "",
   pickupTimes: ["9:00 am"],
  included: [
  "Hotel Transfers",
  "Island Permits",
  "Snorkeling Guide",
  "Water Sports (Banana & Cobra)",
  "Lunch & Drinks (on Yacht)",
  "Beach Chairs",
  "Diving Equipment"
],
excluded: [
  "Professional Photographer",
  "Island Drinks",
  "Transfers from Makadi, Sahl Hasheesh, El Gouna, Soma Bay"
],

highlights: [
  "Timing - 9:00 AM to 4:00 PM.",
  "Mandatory Items - ID/Passport, Comfortable Clothes, Swimwear, Sunscreen, Sunglasses."
],

moreDetails: [
  {
    item: "Timing",
    reason: "Tour runs from 9:00 AM to 4:00 PM."
  },
  {
    item: "Mandatory Items",
    reason: "Bring ID/Passport, Comfortable Clothes, Swimwear, Sunscreen, Sunglasses."
  }
],

    description: "Boat trip with snorkeling."
  },
  {
    title: "Sharm El Naga Beach",
    image: "/images/itinerary/sharm.jpg",
    price:35 ,
    pickupTimes:["8:30am - 9:00am"],
  currency: "€",
  pickupTimes:["8:00am"],
  highlights: [
  "Schedule - 08:00 AM to 04:30 PM.",
  "Requirements - ID/Passport, Sunglasses, Swimwear, Sunscreen."
],

moreDetails: [
  {
    item: "Schedule",
    reason: "Tour runs from 08:00 AM to 04:30 PM."
  },
  {
    item: "Requirements",
    reason: "Bring ID/Passport, Sunglasses, Swimwear, Sunscreen."
  }
],

included: [
  "Diving gear",
  "Drinks (Yacht)",
  "Beach Lunch & BBQ",
  "Snorkeling guide",
  "Transfers"
],

excluded: [
  "Photography"
],

    description: "Snorkeling beach day."
  },
  {
    title: "Sinbad Submarine",
    image: "/images/itinerary/sinbad.jpg",
    price:22 ,
    pickupTimes:["Slots:9:00am, 11:00am, 1:00pm"],
  currency: "€",
 highlights: [
  "Availability - Daily (All week)",
  "Duration - 60 minutes underwater",
  "Depth - Up to 25 meters deep",
  "Highlights - Small Marine Museum, Coral Reefs, & Colorful Fish"
],

moreDetails: [
  {
    item: "Availability",
    reason: "Activity is available daily throughout the week."
  },
  {
    item: "Duration",
    reason: "Experience 60 minutes underwater."
  },
  {
    item: "Depth",
    reason: "Dive up to 25 meters deep."
  },
  {
    item: "Highlights",
    reason: "Explore Small Marine Museum, Coral Reefs, & Colorful Fish."
  }
],

included: [
  "Submarine tour",
  "Museum entry"
],

excluded: [
  "Hotel transfers (Transportation)"
],

    description: "Underwater viewing experience."
  },
  {
    title: "Parasailing",
    image: "/images/itinerary/parasailing.jpg",
    price:20 ,
    pickupTimes:["Flexible (Morning or Afternoon)"],
  currency: "€",
  highlights: [
 
  "Optional - Double Flight: Max weight 150 kg (for 2 people)",
  "Add-ons - Transportation can be added (extra charge)",
  "Kids - Not suitable for children",
  "Essentials - Swimwear, Sunglasses, and a Towel"
],

moreDetails: [
 
  {
    item: "Optional",
    reason: "Double Flight option available for up to 150 kg (2 people)."
  },
  {
    item: "Add-ons",
    reason: "Transportation can be added for an extra charge."
  },
  {
    item: "Kids",
    reason: "Activity is not suitable for children."
  },
  {
    item: "Essentials",
    reason: "Bring Swimwear, Sunglasses, and a Towel."
  }
],

included: [
  "10-minute flight"
],

excluded: [
  "Transportation"
],

    description: "Fly over the Red Sea."
  },
  {
    title: "Hurghada Aquarium",
    image: "/images/itinerary/hurghada- aquarium.jpg",
    price:30 ,
    pickupTimes:["10:00am or 2:00pm"],
  currency: "€",
  infantPrice:"Not suitable for children.",
  highlights: [
  "Optional - Double Flight: Max weight 150 kg (for 2 people)",
  "Add-ons - Transportation can be added (extra charge)",
  "Kids - Not suitable for children",
  "Essentials - Swimwear, Sunglasses, and a Towel"
],

moreDetails: [
 
  {
    item: "Optional",
    reason: "Double Flight available for up to 150 kg (2 people)."
  },
  {
    item: "Add-ons",
    reason: "Transportation can be added for an extra charge."
  },

  {
    item: "Essentials",
    reason: "Bring Swimwear, Sunglasses, and a Towel."
  }
],

included: [
  "10-minute flight"
],

excluded: [
  "Transportation"
],

  
    description: "Marine life exhibition."
  },
  {
    title: "Private Speedboat",
    image: "/images/itinerary/speedboat.jpg",
    price:110 ,
    pickupTimes:["Flexible On Request"],
  currency: "€",
   
 highlights: [
  "Dolphin Trip (Abu Minqar) OR Island Trip (Orange / Eden / Paradise)",
  "Per Boat Pricing (No hidden fees / No upselling)",
  "Payment on trip day (Cash any currency or Card in EGP)",
  "Island Entry €10 Adults / €5 Children (For Option 2)"
],

moreDetails: [
  {
    item: "Tours",
    reason: "Dolphin Trip (Abu Minqar) OR Island Trip (Orange / Eden / Paradise)"
  },
  {
    item: "Transport",
    reason: "Hotel Transfers included"
  },
  {
    item: "Pricing",
    reason: "Per Boat (No hidden fees / No upselling)"
  },
  {
    item: "Payment",
    reason: "On trip day (Cash in any currency or Card in EGP)"
  },
  {
    item: "Island Entry",
    reason: "€10 Adults / €5 Children (For Option 2)"
  }
],

included: [
  "Snorkeling gear",
  "Private Guide",
  "Lunch",
  "Drinks & Snacks",
  "Hotel Transfers"
],

infantPrice:"€5",

    description: "Private sea tour."
  },
  {
    title: "Fishing Trip",
    image: "/images/itinerary/fishing.jpg",
    price:100 ,
    pickupTimes:["8:00am"],
  currency: "€",
  highlights: [
  "Hurghada, Red Sea",
  "Grady White (Well-equipped)",
  "12+ Years Experience",
  "Child Friendly Policy",
  "Keep your catch"
],

moreDetails: [
  {
    item: "Location",
    reason: "Hurghada, Red Sea"
  },
  {
    item: "Boat",
    reason: "Grady White (Well-equipped)"
  },
  {
    item: "Experience",
    reason: "12+ Years"
  },
  {
    item: "Fees",
    reason: "Taxes & Fuel included"
  },
  {
    item: "Policies",
    reason: "Child Friendly. Keep your catch. No pickup"
  }
],

included: [
  "Tackle",
  "Bait",
  "License",
  "Drinks & Snacks"
],

excluded: [
  "Pickup"
],

    description: "Sea fishing experience."
  },
  {
    title: "Scuba Diving",
    image: "/images/itinerary/scuba-diving2.jpg",
    price:27 ,
    pickupTimes:["8:00am-8:30am"],
  currency: "€",
  highlights: [
  "Beginner-friendly (No prior experience required)",
  "Guided step-by-step by friendly instructors",
  "Hurghada, Red Sea",
  "2 Diving stops (15-20 minutes each)",
  "Free Hotel Pickup & Drop-off (Within Hurghada)",
  "Full Scuba equipment included",
  "Lunch on board and unlimited soft drinks"
],

moreDetails: [
  {
    item: "Experience Level",
    reason: "Beginner-friendly, no prior experience required"
  },
  {
    item: "Service Style",
    reason: "Guided step-by-step by friendly instructors"
  },
  {
    item: "Location",
    reason: "Hurghada, Red Sea"
  },
  {
    item: "Diving Sessions",
    reason: "2 diving stops (15-20 minutes each)"
  },
  {
    item: "Transport",
    reason: "Free Hotel Pickup & Drop-off within Hurghada"
  },
  {
    item: "Equipment",
    reason: "Full Scuba equipment included"
  },
  {
    item: "Food & Drinks",
    reason: "Lunch on board and unlimited soft drinks"
  }
],

included: [
  "Full Scuba equipment",
  "Lunch on board",
  "Unlimited soft drinks",
  "Hotel Pickup & Drop-off within Hurghada"
],

excluded: [
  "Underwater photography",
  "National park fee (€7.00 per person)"
],

    description: "Certified diving session."
  },
  {
    title: "Horse Riding",
    image: "/images/itinerary/horse.jpg",
    price:20 ,
    pickupTimes:["Sunrise (6:00am) or Sunset (4:00pm)"],
  currency: "€",
  highlights: [
  "Horseback Riding (Makadi Bay)",
  "Duration: 3 Hours",
  "Rating: 4.6 (450 reviews)",
  "Free Cancellation & Mobile Tickets"
],

moreDetails: [
  {
    item: "Activity",
    reason: "Horseback Riding (Makadi Bay)"
  },
  {
    item: "Duration",
    reason: "3 Hours"
  },
  {
    item: "Rating",
    reason: "4.6 (450 reviews)"
  },
  {
    item: "Benefits",
    reason: "Free Cancellation & Mobile Tickets"
  }
],

included: [
  "Horse",
  "Expert Guide",
  "Water"
],

excluded: [
  "Not specified"
],

    description: "Beach or desert horse ride."
  },
  {
    title: "Dolphin House",
    image: "/images/itinerary/dolphin-house2.jpg",
    price:25 ,
    pickupTimes:["1:30pm"],
  currency: "€",
  extraInfo:["Free Cancellation: Cancel up 72hrs in advance for full refund", "Reserve now & pay later: Keep your travel plans flexble- book your spot and pay nothing today"
     ], 
  highlights: [
  "1-Hour Dolphin and Walruses Show",
  "Instant Confirmation",
  "Hotel Pickup & Drop-off Included",
  "Free Cancellation (72 Hours in Advance)"
],
duration:"1hr",

moreDetails: [
 
  {
    item: "Confirmation",
    reason: "Mobile E-ticket with QR code to scan at the gates"
  },
  
  
],
infantPrice:"Children less than 6 years old are FREE of charge",
included: [
  "1-Hour Dolphin and Walruses Show",
  "Hotel pickup and drop-off (Hurghada, Makadi Bay)",
  "Swimming with Dolphins (Optional - if package selected)",
  "Family Swimming with Dolphins (Optional - if package selected)"
],

excluded: [
  "Food and Drinks (Unless option selected during checkout)",
  "Pickup from El Gouna, Soma Bay, Safaga (Extra cost)"
],

    description: "Snorkel with dolphins."
  },

  {
    title: "Kite Surf",
    image: "/images/itinerary/night-surf.jpg",
    price:160 ,
  currency: "€",
  pickupTimes: ["8:30 am"],
    description: "Evening water sports."
  },
   {
    title: "Safari Hurghada",
    image: "/images/itinerary/safari-hurghada.jpg",
    price:35 ,
     pickupTimes:["11:30AM-12:30PM"],
  currency: "€",
  duration:"8/10hrs",
  highlights: [
  "Moderate difficulty",
  "Group Size: 2-50 people",
  "Meeting Point: Hotel pickup",
  "Food & Drinks: Arabic welcome drink and BBQ buffet"
],

moreDetails: [
  {
    item: "Difficulty",
    reason: "Moderate"
  },
  {
    item: "Group Size",
    reason: "2-50 people"
  },
  {
    item: "Meeting Point",
    reason: "Hotel pickup"
  },
  {
    item: "Activities Included",
    reason: "Quad bike rental, 4x4 Jeep safari, Spider car buggy ride, Camel ride, Folklore show, Arabic welcome drink, BBQ buffet"
  },
  {
    item: "Food & Drinks",
    reason: "Arabic welcome drink and BBQ buffet"
  }
],
  included: [
  "Professional English-speaking guide",
  "Hotel pickup/drop-off",
  "Bedouin village entrance fee",
  "Safety equipment"
],

excluded: [
  "Travel insurance",
  "Tips/gratuities",
  "Personal photo printing",
  "Alcoholic beverages"
],

    description: "Evening water sports."
  }
  ,
   {
    title: "City Tours",
    image: "/images/itinerary/city.jpg",
    price:15 ,
     pickupTimes:["3:00PM-4:00pm"],
  currency: "€",
  highlights: [
  "City Tour Hurghada (4:00 PM - 9:00 PM)",
  "Old Sheraton Panorama - Sea view",
  "Hurghada Marina - Stroll among luxurious yachts",
  "Fish Market - Experience live local marine life",
  "El Mina Mosque - Islamic architectural masterpiece",
  "The Old Town (El Dahar) - Explore the charm of the past",
  "Saint Shenouda Church - Historical landmarks",
  "Fruit & Vegetable Market - Traditional local market tour",
  "Safe and comfortable journey with skilled driver"
],

moreDetails: [
  {
    item: "Old Sheraton Panorama",
    reason: "Enjoy the most beautiful sea view"
  },
  {
    item: "Hurghada Marina",
    reason: "A stroll among luxurious yachts"
  },
  {
    item: "Fish Market",
    reason: "Experience live local marine life"
  },
  {
    item: "El Mina Mosque",
    reason: "Visit this Islamic architectural masterpiece"
  },
  {
    item: "The Old Town (El Dahar)",
    reason: "Explore the charm of the past"
  },
  {
    item: "Saint Shenouda Church",
    reason: "Visit historical landmarks of El Dahar"
  },
  {
    item: "Fruit & Vegetable Market",
    reason: "Tour of the traditional local market with a knowledgeable guide"
  },
  {
    item: "Journey",
    reason: "A skilled driver familiar with the roads; safe, enjoyable, and comfortable"
  }
],

included: [
  "Professional guide",
  "Skilled driver",
  "City tour transportation"
],

excluded: [
  "Personal expenses",
  "Food & drinks"
],

    description: "Evening water sports."
  },
   {
    title: "Golf",
    image: "/images/itinerary/golf.jpg",
    price:55 ,
     pickupTimes:["10:00am"],
  currency: "€",
 extraInfo: [
  "Free Cancellation: Cancel up to 24 hours in advance for a full refund.",
  "Reserve now & pay later: Keep your travel plans flexible — book your spot and pay nothing today."
],
highlights: [
  "Reserve now, pay later",
  "Duration: 3 hours",
  "Group Size: Max 6 (English/Arabic)",
  "Minimum Handicap (HCP) 36",
  "Not suitable for Pregnancy / Over 95 years old"
],

moreDetails: [
  {
    item: "Payment",
    reason: "Reserve now, pay later"
  },
  {
    item: "Duration",
    reason: "3 hours"
  },
  {
    item: "Group Size",
    reason: "Max 6 (English/Arabic)"
  },
  {
    item: "Requirement",
    reason: "Minimum Handicap (HCP) 36"
  },
  {
    item: "Not Suitable For",
    reason: "Pregnancy / Over 95 years old"
  }
],

included: [
  "9 or 18 holes",
  "Range token",
  "Free trolley"
],

excluded: [
  "Transport",
  "Golf carts",
  "Food/drinks"
],

    description: "Evening water sports."
  },
  {
    title: "Massage + spa",
    image: "/images/itinerary/spa.jpg",
    price:40 ,
    pickupTimes:["Based On Appointment"],
  currency: "€",
  duration:"2hrs",
  highlights: [
  "Hurghada Hammam & Massage",
  "Main Services: Steam, Jacuzzi, Exfoliation, & 45-min Massage",
  "Private Group Only",
  "Not Wheelchair Accessible"
],

moreDetails: [
  {
    item: "Main Services",
    reason: "Steam, Jacuzzi, Exfoliation, & 45-min Massage"
  },
  {
    item: "Type",
    reason: "Private Group Only"
  },
  {
    item: "Note",
    reason: "Not Wheelchair Accessible"
  },
  {
    item: "Full Body Exfoliation",
    reason: "Traditional Hammam"
  },
  
  {
    item: "Relaxing Massage",
    reason: "45 Minutes"
  },
  {
    item: "Steam Bath",
    reason: "Spa Access"
  },
 
  {
    item: "Sauna",
    reason: "Spa Access"
  }
],

included: [
  "Hotel Transfers"
],

excluded: [
  "Not Wheelchair Accessible"
],

    description: "Evening water sports."
  },
  {
    title: "Tattoo",
    image: "/images/itinerary/tattoo.jpg",
    price:28 ,
    pickupTimes:["Based On Oppointment"],
  currency: "€",
  highlights: [
  "Strict adherence to highest international hygiene and sterilization standards",
  "Handpicked elite guest artists specializing in creative Arabic calligraphy and Oriental symbolism",
  "Premium 'Aftercare Kit' with natural desert-inspired oils for tattoo healing"
],

moreDetails: [
  {
    item: "Safety First",
    reason: "We strictly adhere to the highest international hygiene and sterilization standards"
  },
  {
    item: "Curation",
    reason: "Handpicked elite guest artists specializing in creative Arabic calligraphy and Oriental symbolism"
  },
  {
    item: "Exclusive Gear",
    reason: "Every client receives a premium 'Aftercare Kit' with natural desert-inspired oils for optimal tattoo healing"
  }
],

included: [
  "Premium Aftercare Kit"
],



    description: "Evening water sports."
  },
   {
    title: "Limousine + Taxi",
    image: "/images/itinerary/limouse.jpg",
    price:15 ,
     pickupTimes:["On Request (24/7)"],
  currency: "€",
  highlights: [
  "Professional representative with personalized sign and luggage assistance",
  "100% On-time guarantee; drivers arrive 15 minutes early",
  "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)",
  "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports",
  "Professional, multilingual drivers",
  "Transparent all-inclusive rates (Tolls and Parking included)"
],

moreDetails: [
  {
    item: "Meet & Greet",
    reason: "A professional representative awaits you with a personalized sign and full luggage assistance"
  },
  {
    item: "Punctuality",
    reason: "100% On-time guarantee; drivers arrive 15 minutes before scheduled pickup"
  },
  {
    item: "Premium Fleet",
    reason: "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)"
  },
  {
    item: "Onboard Comfort",
    reason: "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports"
  },
  {
    item: "Expert Drivers",
    reason: "Professional, multilingual drivers with deep knowledge of Egypt's safest and fastest routes"
  },
  {
    item: "Fixed Pricing",
    reason: "Transparent, all-inclusive rates (Tolls and Parking included) with no hidden fees"
  }
],

included: [
  "Personalized Meet & Greet",
  "Full luggage assistance",
  "Air-conditioned vehicle",
  "High-speed Wi-Fi",
  "Bottled mineral water",
  "Mobile charging ports"
],



    description: "Evening water sports."
  },



    {
    title: "Limousine + Taxi",
    image: "/images/itinerary/limouse.jpg",
    price:15 ,
  currency: "€",
  highlights: [
  "Professional representative with personalized sign and luggage assistance",
  "100% On-time guarantee; drivers arrive 15 minutes early",
  "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)",
  "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports",
  "Professional, multilingual drivers",
  "Transparent all-inclusive rates (Tolls and Parking included)"
],

moreDetails: [
  {
    item: "Meet & Greet",
    reason: "A professional representative awaits you with a personalized sign and full luggage assistance"
  },
  {
    item: "Punctuality",
    reason: "100% On-time guarantee; drivers arrive 15 minutes before scheduled pickup"
  },
  {
    item: "Premium Fleet",
    reason: "Modern, fully air-conditioned vehicles (Standard Sedan, Family Van, Luxury Business Class)"
  },
  {
    item: "Onboard Comfort",
    reason: "Complimentary High-speed Wi-Fi, bottled mineral water, and mobile charging ports"
  },
  {
    item: "Expert Drivers",
    reason: "Professional, multilingual drivers with deep knowledge of Egypt's safest and fastest routes"
  },
  {
    item: "Fixed Pricing",
    reason: "Transparent, all-inclusive rates (Tolls and Parking included) with no hidden fees"
  }
],

included: [
  "Personalized Meet & Greet",
  "Full luggage assistance",
  "Air-conditioned vehicle",
  "High-speed Wi-Fi",
  "Bottled mineral water",
  "Mobile charging ports"
],



    description: "Evening water sports."
  },
]
,

    included: [ "Guide", "Meals", "Transport"],
    excluded: ["Flights", "Tips"],
    reviews: ["⭐⭐⭐⭐ Great cultural experience!", "⭐⭐⭐⭐⭐ Loved it!"],
    testimonials: [
      {
        id: 1,
        name: "Emily S",
        date: "2025-01-15",
        title: "Perfect Experience",
        text: "Highly professional team.",
      },
      {
        id: 2,
        name: "Martina B",
        date: "2025-06-05",
        title: "Unforgettable trip",
        text: "Unforgettable trip in the company of Mohamed. Everything was organized to perfection.",
      },
      {
        id: 3,
        name: "Raziye A",
        date: "2025-05-07",
        title: "White Desert & Siwa",
        text: "Camping in the White Desert was a unique and unforgettable experience.",
      },
      {
        id: 4,
        name: "Noemi A",
        date: "2025-04-30",
        title: "Beautiful Experience",
        text: "A once-in-a-lifetime night in the desert. Truly magical.",
      },
    ],
  },
];
