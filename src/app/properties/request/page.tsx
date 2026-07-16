"use client";

import { useState } from "react";

import BackButton from "@/components/layout/BackButton";
import SearchSelect from "@/components/properties/SearchSelect";

import {
  nigeriaLocations,
} from "@/utils/nigeriaLocations";


const propertyTypes = [
  "House",
  "Apartment",
  "Land",
  "Commercial",
  "Short-let",
];


const purposeOptions = [
  "Buying",
  "Renting",
  "Investment",
];


const bedroomOptions = [
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4 Bedrooms",
  "5+ Bedrooms",
];


export default function RequestProperty() {


  const [selectedState, setSelectedState] = useState("");

  const [selectedCity, setSelectedCity] = useState("");



  const states = nigeriaLocations.map(
    (item) => item.name
  );



  const cities =
    nigeriaLocations
      .find(
        (item) => item.name === selectedState
      )
      ?.cities.map(
        (city) => city.name
      ) || [];



  const lgas =
    nigeriaLocations
      .find(
        (item) => item.name === selectedState
      )
      ?.cities.find(
        (city) => city.name === selectedCity
      )
      ?.lgas || [];



  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">


      <div className="mx-auto max-w-4xl px-4 md:px-6">


        <BackButton />



        <h1 className="text-3xl font-extrabold text-[#0B2E6B] md:text-5xl">
          Request A Property
        </h1>



        <p className="mt-3 text-sm text-gray-600 md:text-base">
          Tell us the type of property you need and our team will help you find suitable options.
        </p>



        <form className="mt-6 space-y-5 rounded-xl bg-white p-5 shadow-md md:rounded-2xl md:p-8">


          <div className="grid gap-4 md:grid-cols-2">


            <input
              placeholder="Your Full Name"
              className="rounded-lg border p-3 text-sm"
            />


            <input
              placeholder="Phone Number"
              className="rounded-lg border p-3 text-sm"
            />


          </div>




          <div className="grid gap-4 md:grid-cols-2">


            <SearchSelect
              label="Property Type"
              options={propertyTypes}
            />


            <SearchSelect
              label="Purpose"
              options={purposeOptions}
            />


          </div>




          <div className="grid gap-4 md:grid-cols-2">


            <SearchSelect
              label="Bedrooms"
              options={bedroomOptions}
            />


            <input
              placeholder="Budget Range"
              className="rounded-lg border p-3 text-sm"
            />


          </div>





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
            If your city or local government area cannot be found, type your preferred property location manually below.
          </p>




          <input
            placeholder="Preferred Property Location"
            className="w-full rounded-lg border p-3 text-sm"
          />




          <textarea
            placeholder="Describe your preferred property requirements"
            className="h-36 w-full rounded-lg border p-3 text-sm"
          />




          <button
            type="submit"
            className="w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
          >
            Send Property Request
          </button>



        </form>


      </div>


    </main>

  );

}
