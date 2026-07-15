export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;

  type: string;

  featured: boolean;
  verified: boolean;

  beds: number;
  baths: number;
  parking: number;
  area: string;

  features: string[];

  agent: string;
}

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Modern 4-Bedroom Detached Duplex",
    location: "Oluyole Estate, Ibadan",
    price: "₦85,000,000",
    image: "/images/properties/property1.jpg",

    type: "For Sale",

    featured: true,
    verified: true,

    beds: 4,
    baths: 5,
    parking: 3,
    area: "650 sqm",

    features: [
      "POP Ceiling",
      "Fitted Kitchen",
      "CCTV",
      "Borehole",
      "Solar Power",
    ],

    agent: "John Adeyemi",
  },

  {
    id: 2,
    title: "Luxury Smart Apartment",
    location: "Lekki Phase 1, Lagos",
    price: "₦120,000,000",
    image: "/images/properties/property2.jpg",

    type: "For Sale",

    featured: true,
    verified: true,

    beds: 5,
    baths: 6,
    parking: 4,
    area: "720 sqm",

    features: [
      "Swimming Pool",
      "Cinema",
      "Gym",
      "Smart Home",
      "CCTV",
    ],

    agent: "Mary Johnson",
  },

  {
    id: 3,
    title: "Executive Short-let Apartment",
    location: "Victoria Island, Lagos",
    price: "₦250,000 / Night",
    image: "/images/properties/property3.jpg",

    type: "Short-let",

    featured: true,
    verified: true,

    beds: 2,
    baths: 2,
    parking: 2,
    area: "320 sqm",

    features: [
      "24/7 Power",
      "WiFi",
      "Swimming Pool",
      "Housekeeping",
      "Security",
    ],

    agent: "David Williams",
  },
];