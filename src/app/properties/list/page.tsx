"use client";

import { useState } from "react";

import BackButton from "@/components/layout/BackButton";
import ImageUpload from "@/components/properties/ImageUpload";
import SearchSelect from "@/components/properties/SearchSelect";
import AmenitiesCheckbox from "@/components/properties/AmenitiesCheckbox";

import {
  propertyTypes,
  listingTypes,
  bedroomOptions,
  bathroomOptions,
} from "@/utils/propertyOptions";

import {
  nigeriaLocations,
} from "@/utils/nigeriaLocations";


export default function ListProperty() {

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");


  const states = nigeriaLocations.map(
    (item) => item.name
  );


  const cities =
    nigeriaLocations
      .find((item) => item.name === selectedState)
      ?.cities.map((city) => city.name) || [];


  const lgas =
    nigeriaLocations
      .find((item) => item.name === selectedState)
      ?.cities.find((city) => city.name === selectedCity)
      ?.lgas || [];


  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto max-w-4xl px-4 md:px-6">

        <BackButton />


        <h1 className="text-3xl font-extrabold text-[#0B2E6B] md:text-5xl">
          List Your Property
        </h1>


        <p className="mt-3 text-sm text-gray-600 md:text-base">
          Provide accurate details about your property and connect with genuine buyers and renters through Nestoria.
        </p>



        <form className="mt-6 space-y-5 rounded-xl bg-white p-5 shadow-md md:rounded-2xl md:p-8">


          <input
            placeholder="Property Title"
            className="w-full rounded-lg border p-3 text-sm"
          />


          <div className="grid gap-4 md:grid-cols-2">

            <SearchSelect
              label="Property Type"
              options={propertyTypes}
            />

            <SearchSelect
              label="Listing Type"
              options={listingTypes}
            />

          </div>


          <input
            placeholder="Price"
            className="w-full rounded-lg border p-3 text-sm"
          />



          <div className="grid gap-4 md:grid-cols-3">

            <SearchSelect
              label="State"
              options={states}
              onSelect={(value) => {
                setSelectedState(value);
                setSelectedCity("");
              }}
            />


            <SearchSelect
              label="City"
              options={cities}
              disabled={!selectedState}
              onSelect={(value) => {
                setSelectedCity(value);
              }}
            />


            <SearchSelect
              label="Local Government"
              options={lgas}
              disabled={!selectedCity}
            />

          </div>



          <p className="text-sm text-gray-500">
            If your city or local government area cannot be found, type your property location manually below.
          </p>



          <input
            placeholder="Property Location / Full Address"
            className="w-full rounded-lg border p-3 text-sm"
          />



          <textarea
            placeholder="Detailed Property Description"
            className="h-36 w-full rounded-lg border p-3 text-sm"
          />


          <div className="grid gap-4 md:grid-cols-3">

            <SearchSelect
              label="Bedrooms"
              options={bedroomOptions}
            />

            <SearchSelect
              label="Bathrooms"
              options={bathroomOptions}
            />

            <input
              placeholder="Parking Space"
              className="rounded-lg border p-3 text-sm"
            />

          </div>


          <input
            placeholder="Property Size (sqm)"
            className="w-full rounded-lg border p-3 text-sm"
          />


          <AmenitiesCheckbox />


          <ImageUpload />


          <div className="grid gap-4 md:grid-cols-2">

            <input
              placeholder="Owner/Agent Name"
              className="rounded-lg border p-3 text-sm"
            />

            <input
              placeholder="Phone Number"
              className="rounded-lg border p-3 text-sm"
            />

          </div>


          <button
            type="submit"
            className="w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
          >
            Submit Property
          </button>


        </form>

      </div>

    </main>

  );

}
