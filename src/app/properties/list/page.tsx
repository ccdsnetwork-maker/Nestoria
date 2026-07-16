"use client";

import BackButton from "@/components/layout/BackButton";
import ImageUpload from "@/components/properties/ImageUpload";
import SearchSelect from "@/components/properties/SearchSelect";
import AmenitiesCheckbox from "@/components/properties/AmenitiesCheckbox";

import {
  propertyTypes,
  listingTypes,
  locations,
  bedroomOptions,
  bathroomOptions,
} from "@/utils/propertyOptions";


export default function ListProperty() {

  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">


      <div className="mx-auto max-w-4xl px-4 md:px-6">


        <BackButton />


        <h1 className="text-3xl font-extrabold text-[#0B2E6B] md:text-5xl">
          List Your Property
        </h1>


        <p className="mt-3 text-sm text-gray-600 md:text-base">
          Provide accurate details about your property and connect with
          genuine buyers and renters through Nestoria.
        </p>



        <form className="mt-6 space-y-5 rounded-xl bg-white p-5 shadow-md md:mt-10 md:rounded-2xl md:p-8">


          <input
            placeholder="Property Title"
            className="w-full rounded-lg border p-3 text-sm outline-none"
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
            className="w-full rounded-lg border p-3 text-sm outline-none"
          />



          <SearchSelect
            label="Location"
            options={locations}
          />



          <input
            placeholder="Full Property Address"
            className="w-full rounded-lg border p-3 text-sm outline-none"
          />



          <textarea
            placeholder="Detailed Property Description"
            className="h-36 w-full rounded-lg border p-3 text-sm outline-none"
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
              className="rounded-lg border p-3 text-sm outline-none"
            />


          </div>



          <input
            placeholder="Property Size (sqm)"
            className="w-full rounded-lg border p-3 text-sm outline-none"
          />



          <AmenitiesCheckbox />



          <ImageUpload />



          <div className="grid gap-4 md:grid-cols-2">


            <input
              placeholder="Owner/Agent Name"
              className="rounded-lg border p-3 text-sm outline-none"
            />


            <input
              placeholder="Phone Number"
              className="rounded-lg border p-3 text-sm outline-none"
            />


          </div>



          <button
            type="submit"
            className="w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B] transition hover:opacity-90"
          >
            Submit Property
          </button>


        </form>


      </div>


    </main>

  );
}
