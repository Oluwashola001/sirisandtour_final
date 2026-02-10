// app/data/tours.ts

export type Testimonial = {
  id: number;
  name: string;
  date: string;
  title: string;
  text: string;
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
   duration?: string;
   currency?: string;
   pickupTimes?: string[];
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

    description:
      "Visit the massive Karnak Temple complex, explore the Valley of the Kings, see the Colossi of Memnon, and admire Queen Hatshepsut’s temple.",
  },
  {
    title: "Balloon – Hot Air Balloon Ride",
    image: "/images/itinerary/balloon.jpg",
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
    description:
      "Enjoy a sunrise hot air balloon ride over Luxor with breathtaking views of temples and the Nile."
  },
  {
    title: "Nile Cruise – Luxor to Aswan",
    image: "/images/itinerary/nile-cruise.jpg",
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
    gallery: ["/images/tours/4.jpg", "/images/tours/5.jpg"],
    overview:
      "Sharm El-Sheikh sea trips offer unforgettable marine experiences, from snorkeling over coral gardens to diving in famous Red Sea sites. Enjoy scenic boat rides and explore the underwater world of Egypt’s most popular coastal destination.",
    itinerary: [
      
  {
    title: "Sea Trip – Pirate Boat",
    image: "/images/itinerary/pirate-boat.jpg",
    description: "Full-day pirate-style boat cruise with snorkeling, swimming, and onboard entertainment."
  },
  {
    title: "Sea Trip – Ras Mohammed",
    image: "/images/itinerary/ras-mohammed.jpg",
    description: "Snorkeling and diving at Ras Mohammed National Park coral reefs."
  },
  {
    title: "Sea Trip – Tiran Island",
    image: "/images/itinerary/tiran-island.jpg",
    description: "Boat trip to Tiran Island with snorkeling in crystal-clear waters."
  },
  {
    title: "Submarine – Semi Submarine",
    image: "/images/itinerary/semi-submarine.jpg",
    description: "Glass-bottom boat experience to explore marine life without diving."
  },
  {
    title: "Safari – Desert Safari",
    image: "/images/itinerary/desert-safari.webp",
    description: "Quad biking, camel riding, and Bedouin village visit in Sinai desert."
  }
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
    description: "Visit the Great Pyramids, Sphinx, and the Grand Egyptian Museum."
  },
  {
    title: "Scenic Flight Over Pyramids",
    image: "/images/itinerary/20.jpg",
    description: "Optional panoramic flight above the pyramids and Cairo skyline."
  },
  {
    title: "Historic Cairo – Al Muizz & Khan El Khalili",
    image: "/images/itinerary/23.jpg",
    description: "Walk through Islamic Cairo’s famous streets and bazaars."
  },
  {
    title: "Islamic Cairo Mosques",
    image: "/images/trending/5.jpg",
    description: "Visit the Citadel, Mohamed Ali Mosque, Al-Azhar and Ibn Tulun Mosque."
  },
  {
    title: "Coptic Cairo Churches",
    image: "/images/itinerary/24.jpg",
    description: "Explore Hanging Church, Coptic Museum, and Old Cairo churches."
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
    gallery: ["/images/tours/1.jpg", "/images/tours/marsa-allam.jpg"],
    overview: "Marsa Alam is ideal for those looking to escape the crowds. This plan highlights the Red Sea’s natural wonders, from colorful coral reefs to crystal-clear waters, making it perfect for eco-tourism and marine adventures.",
    itinerary: [
  {
    title: "Royal Sea Scope Submarine",
    image: "/images/itinerary/royal-seascope.jpg",
    description: "Submarine tour to explore coral reefs and fish."
  },
  {
    title: "Nefertari Submarine",
    image: "/images/itinerary/semi-submarine.jpg",
    description: "Underwater viewing experience inside a real submarine."
  },
  {
    title: "Super Desert Safari",
    image: "/images/itinerary/super-safari.webp",
    description: "Quad biking, camel ride, and desert sunset experience."
  },
  {
    title: "Dolphin House Snorkeling",
    image: "/images/itinerary/dolphin-house.jpg",
    description: "Snorkel with dolphins in their natural habitat."
  },
  {
    title: "Satyah Turtle Bay",
    image: "/images/itinerary/turtle-bay.jpg",
    description: "Snorkeling with turtles and colorful fish."
  },
  {
    title: "Wadi El Gemal National Park",
    image: "/images/itinerary/wadi-el-gemal.jpg",
    description: "Nature reserve visit with mangroves and wildlife."
  },
  {
    title: "Scuba Diving Trip",
    image: "/images/itinerary/scuba-diving.jpg",
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
    gallery: ["/images/tours/6.jpg", "/images/tours/7.jpg"],
    overview: "Fayoum is a peaceful oasis southwest of Cairo, known for its lakes, waterfalls, and protected natural areas. This itinerary includes visits to Wadi El-Rayan, Mudawara Mountain, and local villages, offering a perfect blend of nature and culture.",
   itinerary: [
  {
    title: "Tunis Village",
    image: "/images/itinerary/tunis-village.webp",
    description: "Visit the famous pottery village and local art workshops."
  },
  {
    title: "Wadi El Rayan & Sandboarding",
    image: "/images/itinerary/wadi-el-rayan.webp",
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
      "/images/tours/8.jpg",
      "/images/tours/9.jpg"
    ],
    overview: "Discover the magic of Siwa Oasis as you explore ancient ruins, relax in natural salt lakes, and experience thrilling desert safaris in Egypt’s western desert.",
  itinerary: [
  {
    title: "Shali Fortress & Mountain of the Dead",
    image: "/images/itinerary/img2.webp",
    description: "Explore ancient ruins and tombs."
  },
  {
    title: "Salt Lakes & Cleopatra’s Bath",
    image: "/images/itinerary/salt-lake.webp",
    description: "Relax in therapeutic salt lakes and Cleopatra’s Pool."
  },
  {
    title: "Great Sand Sea Safari",
    image: "/images/itinerary/great-sand-sea.webp",
    description: "4x4 desert safari with sand dunes and sunset views."
  },
  {
    title: "Extended Safari Experience",
    image: "/images/itinerary/siwa-safari.webp",
    description: "Additional desert adventure and camping option."
  }
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
    gallery: ["/images/tours/1.jpg", "/images/tours/2.webp"],
    overview: "Aswan is known for its peaceful Nile setting and rich Nubian heritage. This itinerary includes visits to iconic sites such as Philae Temple, the High Dam, and traditional Nubian villages, offering a perfect mix of history and relaxation.",
   itinerary: [
  {
    title: "High Dam, Philae & Nubian Village",
    image: "/images/itinerary/philae.webp",
    description: "Visit High Dam, Philae Temple, Kalabsha Temple and Nubian Village."
  },
  {
    title: "Abu Simbel & Kom Ombo",
    image: "/images/itinerary/abu-simbel.jpg",
    description: "Full-day trip to Abu Simbel and Kom Ombo Temple."
  },
  {
    title: "Nile Cruise Aswan – Luxor",
    image: "/images/itinerary/nile-cruise.jpg",
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
    title: "Immerse yourself in Egypt’s history and culture.",
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
    image: "/images/itinerary/img2.webp",
    description: "Luxury island day experience."
  },
  {
    title: "Hula Hula Island",
    image: "/images/itinerary/img3.webp",
    description: "Snorkeling and beach relaxation."
  },
  {
    title: "Eden Island",
    image: "/images/itinerary/img5.webp",
    description: "Island escape with coral reefs."
  },
  {
    title: "Orange Bay Island",
    image: "/images/itinerary/orange-bay.jpg",
    description: "Relax on sandy beaches and swim."
  },
  {
    title: "Paradise Island",
    image: "/images/itinerary/nile-cruise.jpg",
    description: "Boat trip with snorkeling."
  },
  {
    title: "Sharm El Naga Beach",
    image: "/images/itinerary/img6.webp",
    description: "Snorkeling beach day."
  },
  {
    title: "Sinbad Submarine",
    image: "/images/itinerary/semi-submarine.jpg",
    description: "Underwater viewing experience."
  },
  {
    title: "Parasailing",
    image: "/images/itinerary/img11.webp",
    description: "Fly over the Red Sea."
  },
  {
    title: "Hurghada Aquarium",
    image: "/images/itinerary/hurghada- aquarium.jpg",
    description: "Marine life exhibition."
  },
  {
    title: "Private Speedboat",
    image: "/images/itinerary/speedboat.jpg",
    description: "Private sea tour."
  },
  {
    title: "Fishing Trip",
    image: "/images/itinerary/fishing.jpg",
    description: "Sea fishing experience."
  },
  {
    title: "Scuba Diving",
    image: "/images/itinerary/scuba-diving.jpg",
    description: "Certified diving session."
  },
  {
    title: "Horse Riding",
    image: "/images/itinerary/horse.jpg",
    description: "Beach or desert horse ride."
  },
  {
    title: "Dolphin House",
    image: "/images/itinerary/dolphin-house.jpg",
    description: "Snorkel with dolphins."
  },
  {
    title: "Night Surf",
    image: "/images/itinerary/night-surf.jpg",
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