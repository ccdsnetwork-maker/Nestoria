"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updatePassword } from "firebase/auth";

import auth from "@/lib/auth";
import BackButton from "@/components/layout/BackButton";


export default function ChangePassword(){

  const router = useRouter();


  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const [loading,setLoading] = useState(false);



  async function changePassword(){


    const user = auth.currentUser;


    if(!user){

      alert("Please login first.");
      return;

    }



    if(!password || !confirmPassword){

      alert("Please fill both password fields.");
      return;

    }



    if(password !== confirmPassword){

      alert("Password mismatch. Please make sure both passwords are the same.");

      return;

    }



    if(password.length < 6){

      alert("Password must be at least 6 characters.");

      return;

    }



    try{


      setLoading(true);


      await updatePassword(
        user,
        password
      );


      alert("Password updated successfully.");

      router.push("/profile");


    }catch(error:any){


      if(error.code === "auth/requires-recent-login"){

        alert(
          "For security reasons, please logout and login again before changing your password."
        );


      }else{

        alert(error.message);

      }


    }finally{


      setLoading(false);


    }


  }



  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">


      <div className="mx-auto max-w-xl px-4 md:px-6">


        <BackButton />


        <section className="mt-6 rounded-2xl bg-white p-6 shadow-md md:p-8">


          <h1 className="text-3xl font-extrabold text-[#0B2E6B]">

            Change Password

          </h1>


          <p className="mt-3 text-gray-600">

            Enter your new password twice to confirm.

          </p>



          <div className="mt-8 space-y-5">


            <input

              type="password"

              placeholder="New Password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              className="w-full rounded-lg border p-3"

            />



            <input

              type="password"

              placeholder="Confirm New Password"

              value={confirmPassword}

              onChange={(e)=>setConfirmPassword(e.target.value)}

              className="w-full rounded-lg border p-3"

            />



            <button

              onClick={changePassword}

              disabled={loading}

              className="w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"

            >

              {loading ? "Updating..." : "Update Password"}

            </button>



          </div>


        </section>


      </div>


    </main>

  );

}
