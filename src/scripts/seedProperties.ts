import { addProperty } from "@/services/propertyService";

const properties = [
  {
    title:"Modern 4-Bedroom Detached Duplex",
    location:"Oluyole Estate, Ibadan",
    price:"₦85,000,000",
    image:"/images/properties/property1.jpg",
    type:"For Sale",
    category:"Luxury",
    featured:true,
    verified:true,
    beds:4,
    baths:5,
    parking:3,
    area:"650 sqm",
    features:[
      "POP Ceiling",
      "Fitted Kitchen",
      "CCTV",
      "Borehole",
      "Solar Power"
    ],
    agent:"John Adeyemi",
    status:"Approved"
  },

  {
    title:"Luxury Smart Apartment",
    location:"Lekki Phase 1, Lagos",
    price:"₦120,000,000",
    image:"/images/properties/property2.jpg",
    type:"For Sale",
    category:"Luxury",
    featured:true,
    verified:true,
    beds:5,
    baths:6,
    parking:4,
    area:"720 sqm",
    features:[
      "Swimming Pool",
      "Cinema",
      "Gym",
      "Smart Home",
      "CCTV"
    ],
    agent:"Mary Johnson",
    status:"Approved"
  }

];


export async function seedProperties(){

for(const property of properties){

await addProperty(property as any);

}

console.log("Properties uploaded");

}
