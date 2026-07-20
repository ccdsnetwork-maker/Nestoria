"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import auth from "@/lib/auth";
import { createUserProfile } from "@/services/userService";
import { signInWithGoogle } from "@/services/googleAuth";
import BackButton from "@/components/layout/BackButton";


export default function Register() {

  const router = useRouter();


  const [fullName,setFullName]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");

  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);

  const [acceptTerms,setAcceptTerms]=useState(false);

  const [showSuccess,setShowSuccess]=useState(false);



  async function register(){


    if(!fullName.trim()){
      alert("Please enter your full name.");
      return;
    }


    if(!phone.trim()){
      alert("Please enter your phone number.");
      return;
    }


    if(!email.trim()){
      alert("Please enter your email address.");
      return;
    }


    if(password!==confirmPassword){
      alert("Passwords do not match.");
      return;
    }


    if(!acceptTerms){
      alert("Please accept the Terms & Conditions.");
      return;
    }



    try{


      const result=await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );



      await createUserProfile(
        result.user.uid,
        {
          fullName,
          phone,
          email,
        }
      );



      setShowSuccess(true);



    }catch(error:any){

      alert(error.message);

    }


  }



  async function googleLogin(){


    try{

      await signInWithGoogle();

      router.push("/dashboard");


    }catch(error:any){

      alert(error.message);

    }


  }



  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">


      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">


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


              <input
                placeholder="Full Name"
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                className="w-full rounded-lg border py-3 px-4 outline-none"
              />


              <input
                placeholder="Phone Number"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                className="w-full rounded-lg border py-3 px-4 outline-none"
              />


              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full rounded-lg border py-3 px-4 outline-none"
              />



              <div className="relative">

                <input
                  type={showPassword ? "text":"password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="w-full rounded-lg border py-3 px-4 pr-12 outline-none"
                />


                <button
                  type="button"
                  onClick={()=>setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >

                  {
                    showPassword
                    ?
                    <EyeOff size={18}/>
                    :
                    <Eye size={18}/>
                  }

                </button>


              </div>




              <div className="relative">


                <input
                  type={showConfirmPassword ? "text":"password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  className="w-full rounded-lg border py-3 px-4 pr-12 outline-none"
                />



                <button
                  type="button"
                  onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >

                  {
                    showConfirmPassword
                    ?
                    <EyeOff size={18}/>
                    :
                    <Eye size={18}/>
                  }

                </button>


              </div>




              <label className="flex items-start gap-3 text-sm">


                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e)=>setAcceptTerms(e.target.checked)}
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
                onClick={googleLogin}
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
      {showSuccess && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">


          <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl">


            <h3 className="text-2xl font-bold text-[#0B2E6B]">
              Account Created Successfully
            </h3>


            <p className="mt-3 text-gray-600">
              Your Nestoria account has been created successfully.
            </p>


            <button
              onClick={()=>router.push("/login")}
              className="mt-6 w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"
            >
              OK
            </button>


          </div>


        </div>

      )}



    </main>

  );

}
