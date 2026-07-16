import BackButton from "@/components/layout/BackButton";

export default function Login() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto max-w-md px-4 md:px-6">

        <BackButton />


        <div className="rounded-xl bg-white p-6 shadow-md md:rounded-2xl md:p-8">

          <h1 className="text-3xl font-extrabold text-[#0B2E6B]">
            Login to Nestoria
          </h1>


          <p className="mt-3 text-sm text-gray-600">
            Access your account to manage properties, enquiries, and services.
          </p>


          <button
            className="mt-6 w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
          >
            Continue with Google
          </button>


        </div>

      </div>

    </main>
  );
}
