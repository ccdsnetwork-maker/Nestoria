import BackButton from "@/components/layout/BackButton";

export default function Careers() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto max-w-4xl px-4 md:px-6">

        <BackButton />

        <h1 className="text-3xl font-extrabold text-[#0B2E6B] md:text-5xl">
          Join Nestoria Team
        </h1>


        <p className="mt-3 text-sm text-gray-600 md:text-base">
          Apply as a real estate marketer, field agent, interior designer,
          or join our growing property solutions team.
        </p>


        <div className="mt-8 rounded-xl bg-white p-6 shadow-md md:rounded-2xl md:p-8">

          <h2 className="text-xl font-bold text-[#0B2E6B]">
            Career Opportunities
          </h2>


          <ul className="mt-4 space-y-3 text-gray-600">

            <li>✔ Real Estate Marketer</li>
            <li>✔ Property Consultant</li>
            <li>✔ Interior Design Specialist</li>
            <li>✔ Field Agent</li>

          </ul>


        </div>

      </div>

    </main>
  );
}
