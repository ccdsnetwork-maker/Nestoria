"use client";

import Link from "next/link";
import BackButton from "@/components/layout/BackButton";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";


const enquiryTypes = [
  "Property Enquiry",
  "Property Listing",
  "Property Request",
  "Interior Design",
  "General Support",
];


export default function Contact() {

  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">


      <div className="mx-auto max-w-6xl px-4 md:px-6">


        <BackButton />



        <section className="rounded-2xl bg-[#0B2E6B] p-8 text-white shadow-lg md:p-12">


          <h1 className="text-4xl font-extrabold md:text-5xl">
            Contact Nestoria
          </h1>


          <p className="mt-5 max-w-3xl leading-7 text-blue-100">
            Have questions about properties, interior design,
            listing your property, or any of our services?
            Our team is ready to assist you.
          </p>


        </section>




        <div className="mt-10 grid gap-8 lg:grid-cols-2">



          <section className="rounded-2xl bg-white p-6 shadow-md md:p-8">


            <h2 className="text-2xl font-bold text-[#0B2E6B]">
              Contact Information
            </h2>



            <div className="mt-6 space-y-5 text-gray-600">


              <p className="flex items-center gap-3">
                <Mail size={20} />

                nestoriainteriorsandproperties@gmail.com
              </p>



              <p className="flex items-center gap-3">
                <Phone size={20} />

                08029651803
              </p>



              <p className="flex items-center gap-3">
                <MessageCircle size={20} />

                08168049408
              </p>



              <p className="flex items-start gap-3">
                <MapPin size={20} />

                <span>
                  Lagos Head Office
                  <br />
                  Ondo | Ogun | Oyo | Abuja Branch Office
                </span>
              </p>


            </div>




            <Link
              href="/messages/new?recipient=admin&type=contact"
              className="mt-8 block rounded-lg bg-green-600 py-3 text-center font-bold text-white"
            >
              Chat With Admin
            </Link>



          </section>          <section className="rounded-2xl bg-white p-6 shadow-md md:p-8">


            <h2 className="text-2xl font-bold text-[#0B2E6B]">
              Send Us A Message
            </h2>


            <p className="mt-3 text-gray-600">
              Fill the form below and our team will get back to you.
            </p>



            <form className="mt-6 space-y-5">


              <div className="grid gap-4 md:grid-cols-2">


                <input
                  placeholder="Full Name"
                  className="rounded-lg border p-3"
                />


                <input
                  placeholder="Phone Number"
                  className="rounded-lg border p-3"
                />


              </div>




              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border p-3"
              />




              <select
                className="w-full rounded-lg border p-3"
              >

                <option>
                  Select Enquiry Type
                </option>


                {enquiryTypes.map((type) => (
                  <option key={type}>
                    {type}
                  </option>
                ))}


              </select>




              <textarea
                placeholder="Write your message..."
                className="h-40 w-full rounded-lg border p-3"
              />




              <button
                type="submit"
                className="w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
              >
                Send Message
              </button>


            </form>


          </section>


        </div>



      </div>


    </main>

  );

}
