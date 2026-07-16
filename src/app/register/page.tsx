"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import auth from "@/lib/auth";
import BackButton from "@/components/layout/BackButton";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [acceptTerms, setAcceptTerms] = useState(false);

  async function register() {
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!acceptTerms) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account created successfully.");

    } catch (error: any) {

      alert(error.message);

    }
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 md:py-20">

      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">

        {/* Left Side */}

        <section className="flex flex-col justify-center rounded-2xl bg-[#0B2E6B] p-8 text-white">

          <h1 className="text-4xl font-extrabold">
            Join Nestoria
          </h1>

          <p className="mt-5 leading-7 text-blue-100">
            Create your Nestoria account to list properties,
            request properties, manage enquiries and access
            our premium interior design services.
          </p>

          <div className="mt-8 rounded-xl bg-white/10 p-5">

            <h2 className="font-bold">
              With your account you can:
            </h2>

            <ul className="mt-4 space-y-3 text-sm">
              <li>✔ List unlimited properties</li>
              <li>✔ Save favourite listings</li>
              <li>✔ Request unavailable properties</li>
              <li>✔ Book inspections</li>
              <li>✔ Access your personal dashboard</li>
            </ul>

          </div>

        </section>

        {/* Right Side */}

        <section>

          <BackButton />

          <div className="mt-4 rounded-2xl bg-white p-6 shadow-lg md:p-8">

            <h2 className="text-3xl font-extrabold text-[#0B2E6B]">
              Create Account
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Complete the form below to get started.
            </p>

            <div className="mt-8 space-y-5">

              <div className="relative">

                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                  className="w-full rounded-lg border py-3 pl-10 pr-4 outline-none"
                />

              </div>

              <div className="relative">

                <Phone
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  className="w-full rounded-lg border py-3 pl-10 pr-4 outline-none"
                />

              </div>

              <div className="relative">

                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full rounded-lg border py-3 pl-10 pr-4 outline-none"
                />

              </div>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="w-full rounded-lg border py-3 pl-10 pr-12 outline-none"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  className="w-full rounded-lg border py-3 pl-10 pr-12 outline-none"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

              <label className="flex items-start gap-3 text-sm">

                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) =>
                    setAcceptTerms(
                      e.target.checked
                    )
                  }
                />

                <span>
                  I agree to the Terms & Conditions
                  and Privacy Policy.
                </span>

              </label>

              <button
                onClick={register}
                className="w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
              >
                Create Account
              </button>

              <button
                type="button"
                className="w-full rounded-lg bg-green-600 py-3 font-bold text-white"
              >
                Continue with Google
              </button>

              <p className="text-center text-sm text-gray-600">

                Already have an account?{" "}

                <Link
                  href="/login"
                  className="font-bold text-[#0B2E6B]"
                >
                  Login
                </Link>

              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
