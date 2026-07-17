import BackButton from "@/components/layout/BackButton";

export default function ChangePassword() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto max-w-md px-4 md:px-6">

        <BackButton />

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-md md:p-8">

          <h1 className="text-3xl font-extrabold text-[#0B2E6B]">
            Change Password
          </h1>

          <p className="mt-3 text-gray-600">
            Update your password to keep your Nestoria account secure.
          </p>


          <form className="mt-6 space-y-4">

            <input
              type="password"
              placeholder="Current Password"
              className="w-full rounded-lg border p-3"
            />


            <input
              type="password"
              placeholder="New Password"
              className="w-full rounded-lg border p-3"
            />


            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full rounded-lg border p-3"
            />


            <button
              type="submit"
              className="w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
            >
              Update Password
            </button>


          </form>

        </section>

      </div>

    </main>
  );
}
