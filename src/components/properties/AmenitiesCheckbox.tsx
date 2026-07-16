"use client";

const amenities = [
  "Swimming Pool",
  "CCTV",
  "Generator",
  "24/7 Security",
  "Borehole Water",
  "Parking Space",
  "Fenced Compound",
  "Balcony",
  "Air Conditioning",
  "Kitchen Cabinet",
  "Wardrobe",
  "Elevator",
  "Internet/WiFi",
  "Estate Security",
  "Garden",
  "Gym",
  "Playground",
  "Store Room",
  "BQ",
  "POP Ceiling",
  "Inverter",
  "Serviced Apartment",
];


export default function AmenitiesCheckbox() {

  return (

    <div>

      <h3 className="mb-3 text-lg font-bold text-[#0B2E6B]">
        Amenities & Facilities
      </h3>


      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">

        {amenities.map((item) => (

          <label
            key={item}
            className="flex items-center gap-3 rounded-lg border bg-white p-3 text-sm text-gray-700"
          >

            <input
              type="checkbox"
              className="h-4 w-4"
            />

            <span>
              {item}
            </span>

          </label>

        ))}

      </div>


    </div>

  );
}
