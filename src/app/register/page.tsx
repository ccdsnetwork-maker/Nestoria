"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import auth from "@/lib/auth";
import BackButton from "@/components/layout/BackButton";


export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function register() {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account created successfully");

    } catch (error: any) {

      alert(error.message);

    }

  }


  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">


      <div className="mx-auto max-w-md px-4 md:px-6">


        <BackButton />


        <div className="rounded-xl bg-white p-6 shadow-md md:rounded-2xl md:p-8">


          <h1 className="text-3xl font-extrabold text-[#0B2E6B]">
            Create Nestoria Account
          </h1>


          <input
            className="mt-6 w-full rounded-lg border p-3 text-sm outline-none"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />


          <input
            className="mt-4 w-full rounded-lg border p-3 text-sm outline-none"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />


          <button
            className="mt-6 w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
            onClick={register}
          >
            Register
          </button>


        </div>


      </div>


    </main>

  );
}
