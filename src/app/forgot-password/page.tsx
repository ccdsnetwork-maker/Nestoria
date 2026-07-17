"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import BackButton from "@/components/layout/BackButton";

export default function ForgotPassword() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto max-w-xl px-4 md:px-6">

        <BackButton />

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-lg md:p-8">

          <h1 className="text-3xl font-extrabold text-[#0B2E6B]">
            Forgot Password?
          </h1>

          <p className="mt-3 text-gray-600">
            Enter your email address and we will send instructions
            to reset your password.
          </p>


          <form className="mt-8 space-y-5">

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border py-3 pl-10 pr-4 outline-none focus:border-[#0B2E6B]"
                />

              </div>

            </div>


            <button
              type="submit"
              className="w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
            >
              Send Reset Link
            </button>


          </form>


          <p className="mt-6 text-center text-sm text-gray-600">

            Remember your password?{" "}

            <Link
              href="/login"
              className="font-bold text-[#0B2E6B]"
            >
              Back to Login
            </Link>

          </p>


        </section>

      </div>

    </main>
  );
}
