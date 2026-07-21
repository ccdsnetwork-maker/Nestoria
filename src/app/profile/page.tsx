"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";

import auth from "@/lib/auth";

import {
  getUserProfile,
  updateUserProfile,
  User,
} from "@/services/userService";

import {
  uploadToCloudinary,
} from "@/services/cloudinaryService";

import BackButton from "@/components/layout/BackButton";


export default function Profile(){


  const [uid,setUid] = useState("");

  const [loading,setLoading] = useState(true);

  const [saving,setSaving] = useState(false);

  const [uploading,setUploading] = useState(false);

  const [success,setSuccess] = useState(false);



  const [form,setForm] = useState({

    fullName:"",
    email:"",

    phone:"",
    location:"",

    gender:"",
    dateOfBirth:"",
    address:"",
    city:"",
    state:"",
    country:"",
    occupation:"",
    company:"",
    bio:"",

    photoURL:"",

  });



  useEffect(()=>{


    const unsubscribe = onAuthStateChanged(
      auth,
      async(user)=>{


        if(user){


          setUid(user.uid);



          const profile = await getUserProfile(
            user.uid
          );

const typedProfile = profile as User | null;

          setForm({
  fullName:
    typedProfile?.fullName || user.displayName || "",

  email:
    user.email || "",

  phone:
    typedProfile?.phone || "",

  location:
    typedProfile?.location || "",

  gender:
    typedProfile?.gender || "",

  dateOfBirth:
    typedProfile?.dateOfBirth || "",

  address:
    typedProfile?.address || "",

  city:
    typedProfile?.city || "",

  state:
    typedProfile?.state || "",

  country:
    typedProfile?.country || "",

  occupation:
    typedProfile?.occupation || "",

  company:
    typedProfile?.company || "",

  bio:
    typedProfile?.bio || "",

  photoURL:
    typedProfile?.photoURL || user.photoURL || "",
});      



        }


        setLoading(false);


      }
    );



    return unsubscribe;


  },[]);





  function handleChange(
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ){


    setForm({

      ...form,

      [e.target.name]:e.target.value,

    });


  }





  async function handleImageUpload(
    e:React.ChangeEvent<HTMLInputElement>
  ){


    const file = e.target.files?.[0];


    if(!file) return;



    try{


      setUploading(true);



      const url = await uploadToCloudinary(
        file
      );



      setForm({

        ...form,

        photoURL:url,

      });



    }catch(error:any){


      alert(error.message);


    }finally{


      setUploading(false);


    }


  }





  async function saveProfile(){


    if(!uid) return;



    try{


      setSaving(true);



      await updateUserProfile(

        uid,

        form

      );



      setSuccess(true);



    }catch(error:any){


      alert(error.message);


    }finally{


      setSaving(false);


    }


  }





  if(loading){


    return (

      <main className="min-h-screen flex items-center justify-center">

        Loading profile...

      </main>

    );


  }






  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">


      <div className="mx-auto max-w-4xl px-4 md:px-6">


        <BackButton />



        <section className="mt-6 rounded-2xl bg-white p-6 shadow-md md:p-8">


          <div className="flex flex-col items-center text-center">


            <label className="cursor-pointer">


              <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gray-200 text-5xl">


                {
                  form.photoURL
                  ?

                  <img
                    src={form.photoURL}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />

                  :

                  "👤"

                }


              </div>


              <input

                type="file"

                accept="image/*"

                className="hidden"

                onChange={handleImageUpload}

              />


            </label>



            <p className="mt-2 text-sm text-gray-500">

              {uploading ? "Uploading..." : "Click image to change"}

            </p>


            <h1 className="mt-5 text-3xl font-extrabold text-[#0B2E6B]">

              User Profile

            </h1>


          </div>

          <h2 className="mt-8 text-xl font-bold text-[#0B2E6B]">
            Basic Information
          </h2>


          <div className="mt-5 grid gap-5 md:grid-cols-2">


            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="rounded-lg border p-3"
            />


            <input
              name="email"
              value={form.email}
              readOnly
              placeholder="Email Address"
              className="rounded-lg border bg-gray-100 p-3"
            />


            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="rounded-lg border p-3"
            />


            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className="rounded-lg border p-3"
            />


          </div>




          <h2 className="mt-10 text-xl font-bold text-[#0B2E6B]">
            Additional Information
          </h2>


          <div className="mt-5 grid gap-5 md:grid-cols-2">


            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="rounded-lg border p-3"
            >

              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Other">
                Other
              </option>

            </select>




            <input
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              className="rounded-lg border p-3"
            />




            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="rounded-lg border p-3"
            />



            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="rounded-lg border p-3"
            />



            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="State"
              className="rounded-lg border p-3"
            />



            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country"
              className="rounded-lg border p-3"
            />



            <input
              name="occupation"
              value={form.occupation}
              onChange={handleChange}
              placeholder="Occupation"
              className="rounded-lg border p-3"
            />



            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company (Optional)"
              className="rounded-lg border p-3"
            />


          </div>



          <textarea

            name="bio"

            value={form.bio}

            onChange={handleChange}

            placeholder="About Me"

            className="mt-5 min-h-32 w-full rounded-lg border p-3"

          />



          <div className="mt-8 flex flex-col gap-4 sm:flex-row">


            <button

              onClick={saveProfile}

              disabled={saving}

              className="rounded-lg bg-[#FFF700] px-6 py-3 font-bold text-[#0B2E6B]"

            >

              {
                saving
                ?
                "Saving..."
                :
                "Save Profile"
              }

            </button>



            <Link

              href="/change-password"

              className="rounded-lg border border-[#0B2E6B] px-6 py-3 text-center font-bold text-[#0B2E6B]"

            >

              Change Password

            </Link>


          </div>


        </section>
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-md md:p-8">

          <h2 className="text-2xl font-bold text-[#0B2E6B]">
            Account Information
          </h2>


          <div className="mt-5 space-y-3 text-gray-600">

            <p>
              📅 Member since: Nestoria Member
            </p>

            <p>
              🏠 Properties listed: 0
            </p>

            <p>
              🔍 Property requests: 0
            </p>

            <p>
              🛋 Interior projects: 0
            </p>

          </div>


        </section>



      </div>




      {
        success && (

          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">


            <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl">


              <h2 className="text-2xl font-extrabold text-[#0B2E6B]">

                Profile Updated Successfully

              </h2>


              <p className="mt-3 text-gray-600">

                Your Nestoria profile information has been saved.

              </p>


              <button

                onClick={()=>setSuccess(false)}

                className="mt-6 w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"

              >

                Continue

              </button>


            </div>


          </div>

        )
      }



    </main>

  );


}
