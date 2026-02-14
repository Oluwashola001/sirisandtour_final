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
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
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
     duration: "3hrs" ,
     price: 70,
  currency: "€",
  pickupTimes: ["8:00 am"],
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
  pickupTimes: ["8:00 am"],
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
    description: "Snorkeling and diving at Ras Mohammed National Park coral reefs."
  },
  {
    title: "Sea Trip – Tiran Island",
    image: "/images/itinerary/tiran-island.jpg",
      price: 25,
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
    description: "Boat trip to Tiran Island with snorkeling in crystal-clear waters."
  },
  {
    title: "Submarine – Semi Submarine",
    image: "/images/itinerary/submarin.jpg",
      price: 22,
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
    description: "Glass-bottom boat experience to explore marine life without diving."
  },
  {
    title: "Safari – Desert Safari",
    image: "/images/itinerary/siwa-safari.jpg",
      price: 25,
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
    description: "Quad biking, camel riding, and Bedouin village visit in Sinai desert."
  },
   {
    title: "Airport Transfer",
    image: "/images/itinerary/limouse2.jpg",
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
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
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
    title: "Airport Transfer",
    image: "/images/itinerary/airport.jpg",
    description: "Evening water sports."
  }

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
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
    
    
  ],
    description: "Submarine tour to explore coral reefs and fish."
  },
  {
    title: "Nefertari Submarine",
    image: "/images/itinerary/Nefertari.jpg",
      price: 40,
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
    description: "Underwater viewing experience inside a real submarine."
  },
  {
    title: "Super Desert Safari",
    image: "/images/itinerary/super-safari.jpg",
      price: 40,
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
    description: "Quad biking, camel ride, and desert sunset experience."
  },
  {
    title: "Dolphin House Snorkeling",
    image: "/images/itinerary/dolphin-house.jpg",
      price: 50,
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
    description: "Snorkel with dolphins in their natural habitat."
  },
  {
    title: "Satyah Turtle Bay",
    image: "/images/itinerary/turtle-bay.jpg",
      price: 35,
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
    description: "Snorkeling with turtles and colorful fish."
  },
  {
    title: "Wadi El Gemal National Park",
    image: "/images/itinerary/wadi-el-gemal.jpg",
      price: 28,
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
    description: "Nature reserve visit with mangroves and wildlife."
  },
  {
    title: "Scuba Diving Trip",
    image: "/images/itinerary/scuba-diving.jpg",
      price: 45,
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
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
    
    
  ],
    description: "Visit the famous pottery village and local art workshops."
  },
  {
    title: "Wadi El Rayan & Sandboarding",
    image: "/images/itinerary/wadi-el-rayan.jpg",
      price: 25,
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
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
  highlights: [
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat",
    "2-hours on Orange Island",
    "2-Snorkeling stops",
    "Water sports: banana & sofa boat"
    
    
  ],
    description: "Explore ancient ruins and tombs."
  },
  {
    title: "Salt Lakes & Cleopatra’s Bath",
    image: "/images/itinerary/salt-lake.webp",
      price: 40,
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
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Luxury island day experience."
  },
  {
    title: "Hula Hula Island",
    image: "/images/itinerary/hula.jpg",
       price: 23,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    
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
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Relax on sandy beaches and swim."
  },
  {
    // === POPULATED WITH EXACT POPUP DATA FOR PREVIEW === //
    title: "Paradise Island",
    image: "/images/itinerary/paradise.jpg",
    price: 50,
    infantPrice: "",
    extraInfo: ["5 Euro for natural park"],
    duration: "approx. 3 hours",
    currency: "€",
    pickupTimes: ["8:00 am"],
    returnTime: "4:00 pm",
    highlights: [
      "3-hours in the Paradise island",
      "1 stop for snorkelling",
      "Snorkeling Equipment",
      "Get your lunch in the island open buffet"
    ],
    description: "Boat trip with snorkeling."
  },
  {
    title: "Sharm El Naga Beach",
    image: "/images/itinerary/sharm.jpg",
    price:35 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Snorkeling beach day."
  },
  {
    title: "Sinbad Submarine",
    image: "/images/itinerary/sinbad.jpg",
    price:22 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Underwater viewing experience."
  },
  {
    title: "Parasailing",
    image: "/images/itinerary/parasailing.jpg",
    price:20 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Fly over the Red Sea."
  },
  {
    title: "Hurghada Aquarium",
    image: "/images/itinerary/hurghada- aquarium.jpg",
    price:30 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Marine life exhibition."
  },
  {
    title: "Private Speedboat",
    image: "/images/itinerary/speedboat.jpg",
    price:110 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Private sea tour."
  },
  {
    title: "Fishing Trip",
    image: "/images/itinerary/fishing.jpg",
    price:100 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Sea fishing experience."
  },
  {
    title: "Scuba Diving",
    image: "/images/itinerary/scuba-diving2.jpg",
    price:27 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Certified diving session."
  },
  {
    title: "Horse Riding",
    image: "/images/itinerary/horse.jpg",
    price:20 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Beach or desert horse ride."
  },
  {
    title: "Dolphin House",
    image: "/images/itinerary/dolphin-house2.jpg",
    price:25 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Snorkel with dolphins."
  },
  {
    title: "Kite Surf",
    image: "/images/itinerary/night-surf.jpg",
    price:160 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Evening water sports."
  },
   {
    title: "Safari Hurghada",
    image: "/images/itinerary/safari-hurghada.jpg",
    price:35 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Evening water sports."
  }
  ,
   {
    title: "City Tours",
    image: "/images/itinerary/city.jpg",
    price:15 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Evening water sports."
  },
   {
    title: "Golf",
    image: "/images/itinerary/golf.jpg",
    price:55 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Evening water sports."
  },
  {
    title: "Massage + spa",
    image: "/images/itinerary/spa.jpg",
    price:40 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Evening water sports."
  },
  {
    title: "Tattoo",
    image: "/images/itinerary/tattoo.jpg",
    price:28 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Evening water sports."
  },
   {
    title: "Limousine + Taxi",
    image: "/images/itinerary/limouse.jpg",
    price:15 ,
  currency: "€",
  pickupTimes: ["8:00 am", "9:30 am", "11:00 am"],
    description: "Evening water sports."
  },



   {
    title: "Airport Transfer",
    image: "/images/itinerary/airport.jpg",
    description: "Evening water sports."
  }

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