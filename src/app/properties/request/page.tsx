"use client";

import BackButton from "@/components/layout/BackButton";
import SearchSelect from "@/components/properties/SearchSelect";


export default function RequestProperty() {

  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">


      <div className="mx-auto max-w-4xl px-4 md:px-6">


        <BackButton />


        <h1 className="text-3xl font-extrabold text-[#0B2E6B] md:text-5xl">
          Request A Property
        </h1>


        <p className="mt-3 text-sm text-gray-600 md:text-base">
          Can't find the property you need? Submit your requirements and
          our team will help you source suitable options.
        </p>


        <form className="mt-6 space-y-5 rounded-xl bg-white p-5 shadow-md md:mt-10 md:rounded-2xl md:p-8">


          <div className="grid gap-4 md:grid-cols-2">


            <input
              placeholder="Full Name"
              className="rounded-lg border p-3 text-sm"
            />


            <input
              placeholder="Phone Number"
              className="rounded-lg border p-3 text-sm"
            />


          </div>



          <SearchSelect
            label="Location"
            options={[
              "Lagos",
              "Abuja",
              "Ondo",
              "Ogun",
              "Oyo",
            ]}
          />



          <SearchSelect
            label="Property Type"
            options={[
              "House",
              "Apartment",
              "Land",
              "Commercial",
              "Short-let",
            ]}
          />



          <SearchSelect
            label="Purpose"
            options={[
              "Buy",
              "Rent",
              "Investment",
            ]}
          />



          <div className="grid gap-4 md:grid-cols-2">


            <SearchSelect
              label="Bedrooms"
              options={[
                "1",
                "2",
                "3",
                "4",
                "5+",
              ]}
            />


            <SearchSelect
              label="Budget"
              options={[
                "Below ₦10m",
                "₦10m - ₦50m",
                "₦50m - ₦100m",
                "Above ₦100m",
              ]}
            />


          </div>



          <textarea
            placeholder="Describe your preferred property"
            className="h-36 w-full rounded-lg border p-3 text-sm"
          />



          <button
            className="w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
          >
            Submit Property Request
          </button>


        </form>


      </div>


    </main>

  );
}
