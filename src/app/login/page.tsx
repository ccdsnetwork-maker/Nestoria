"use client";

import { useState } from "react";
import Link from "next/link";
import BackButton from "@/components/layout/BackButton";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-gray-100 py-10 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">

        {/* Welcome Section */}
        <section className="flex flex-col justify-center rounded-2xl bg-[#0B2E6B] p-8 text-white">
          <h1 className="text-4xl font-extrabold">
            Welcome Back
          </h1>

          <p className="mt-5 text-base leading-7 text-blue-100">
            Sign in to continue managing your properties,
            property requests, interior design projects and
            all your Nestoria activities from one secure dashboard.
          </p>

          <div className="mt-8 rounded-xl bg-white/10 p-5">
            <h2 className="font-bold">
              Why Sign In?
            </h2>

            <ul className="mt-4 space-y-3 text-sm">
              <li>✔ Manage listed properties</li>
              <li>✔ Track property requests</li>
              <li>✔ Save favourite properties</li>
              <li>✔ Receive instant notifications</li>
              <li>✔ Access interior design services</li>
            </ul>
          </div>
        </section>

        {/* Login Card */}
        <section>
          <BackButton />

          <div className="mt-4 rounded-2xl bg-white p-6 shadow-lg md:p-8">

            <h2 className="text-3xl font-extrabold text-[#0B2E6B]">
              Login
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Enter your account details below.
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

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border py-3 pl-10 pr-12 outline-none focus:border-[#0B2E6B]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <Link
                  href="#"
                  className="font-semibold text-[#0B2E6B]"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B] transition hover:opacity-90"
              >
                Sign In
              </button>

              <button
                type="button"
                className="w-full rounded-lg bg-green-600 py-3 font-bold text-white transition hover:bg-green-700"
              >
                Continue with Google
              </button>

              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-bold text-[#0B2E6B]"
                >
                  Create Account
                </Link>
              </p>

            </form>

          </div>
        </section>

      </div>
    </main>
  );
}
