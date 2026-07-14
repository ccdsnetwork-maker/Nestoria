"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "@/lib/auth";

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
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">
        Create Nestoria Account
      </h1>

      <input
        className="border p-3 block mt-6 w-full"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-3 block mt-4 w-full"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="mt-6 bg-green-700 text-white px-6 py-3 rounded"
        onClick={register}
      >
        Register
      </button>
    </main>
  );
}