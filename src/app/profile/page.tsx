import Link from "next/link";
import BackButton from "@/components/layout/BackButton";

export default function Profile() {

  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto max-w-4xl px-4 md:px-6">

        <BackButton />


        <section className="mt-6 rounded-2xl bg-white p-6 shadow-md md:p-8">


          <div className="flex flex-col items-center text-center">


            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gray-200 text-5xl">
              👤
            </div>


            <h1 className="mt-5 text-3xl font-extrabold text-[#0B2E6B]">
              User Profile
            </h1>


            <p className="mt-2 text-gray-600">
              Manage your Nestoria account information
            </p>


          </div>




          <div className="mt-8 grid gap-5 md:grid-cols-2">


            <div>

              <label className="text-sm font-semibold">
                Full Name
              </label>

              <input
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border p-3"
              />

            </div>



            <div>

              <label className="text-sm font-semibold">
                Email Address
              </label>

              <input
                placeholder="Email"
                className="mt-2 w-full rounded-lg border p-3"
              />

            </div>



            <div>

              <label className="text-sm font-semibold">
                Phone Number
              </label>

              <input
                placeholder="Phone"
                className="mt-2 w-full rounded-lg border p-3"
              />

            </div>



            <div>

              <label className="text-sm font-semibold">
                Location
              </label>

              <input
                placeholder="City, State"
                className="mt-2 w-full rounded-lg border p-3"
              />

            </div>


          </div>          <div className="mt-8 flex flex-col gap-4 sm:flex-row">


            <button
              className="rounded-lg bg-[#FFF700] px-6 py-3 font-bold text-[#0B2E6B]"
            >
              Save Profile
            </button>


            <Link
              href="/change-password"
              className="rounded-lg border border-[#0B2E6B] px-6 py-3 text-center font-bold text-[#0B2E6B]"
            >
              Change Password
            </Link>


          </div>


        </section>



        <section className="mt-8 rounded-2xl bg-white p-6 shadow-md md:p-8">


          <h2 className="text-2xl font-bold text-[#0B2E6B]">
            Account Information
          </h2>


          <div className="mt-5 space-y-3 text-gray-600">


            <p>
              📅 Member since: 2026
            </p>


            <p>
              🏠 Properties listed: 0
            </p>


            <p>
              🔍 Property requests: 0
            </p>


            <p>
              🛋 Interior projects: 0
            </p>


          </div>


        </section>



      </div>


    </main>

  );

}
