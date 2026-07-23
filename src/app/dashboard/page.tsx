"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import auth from "@/lib/auth";
import { db } from "@/lib/firebase";
import BackButton from "@/components/layout/BackButton";

const sections = [
  { id: "properties", title: "My Properties", icon: "🏠" },
  { id: "requests", title: "My Requests", icon: "🔍" },
  { id: "interiors", title: "Interior Projects", icon: "🛋" },
  { id: "saved", title: "Saved Properties", icon: "❤️" },
  { id: "messages", title: "Messages", icon: "💬" },
  { id: "settings", title: "Settings", icon: "⚙️" },
];

const properties = [
  {
    name: "Modern 4 Bedroom Duplex",
    location: "Ibadan",
    status: "Approved",
    views: 245,
  },
];

const requests = [
  {
    name: "3 Bedroom Apartment",
    location: "Lagos",
    budget: "₦5m/year",
    status: "Searching",
  },
];

const interiors = [
  {
    name: "Living Room Renovation",
    type: "Residential",
    status: "Quote Sent",
  },
];

const saved = [
  {
    name: "Executive Duplex",
    location: "Abuja",
    price: "₦75,000,000",
  },
];

const messages = [
  {
    id: "support",
    sender: "Nestoria Support",
    message: "Welcome to Nestoria",
    date: "Today",
  },
];

export default function Dashboard(){

const [active,setActive]=useState("properties");

const [profile,setProfile]=useState({
  fullName:"User Name",
  email:"user@email.com",
  phone:"",
  location:"",
  photoURL:"",
  membershipPlan:"Basic",
  membershipStatus:"Active",
  billingCycle:"Monthly",
  propertyListingLimit:5,
  propertyRequestLimit:5,
  interiorRequestLimit:3,
});

const contentRef = useRef<HTMLDivElement | null>(null);


useEffect(()=>{

const unsubscribe = onAuthStateChanged(
auth,
async(user)=>{

if(!user) return;

let userData:any={
  fullName:user.displayName || "Nestoria User",
  email:user.email || "",
  phone:"",
  location:"",
  photoURL:user.photoURL || "",
};


const userRef=doc(
db,
"users",
user.uid
);


const snapshot=await getDoc(userRef);


if(snapshot.exists()){

userData={
 ...userData,
 ...snapshot.data(),
};

}


setProfile(userData);


});


return unsubscribe;


},[]);


useEffect(()=>{

if(window.innerWidth < 768){

setTimeout(()=>{

contentRef.current?.scrollIntoView({
behavior:"smooth",
block:"start",
});

},100);

}

},[active]);


return (

<main className="min-h-screen bg-gray-100 py-10 md:py-20">

<div className="mx-auto max-w-6xl px-4 md:px-6">

<BackButton />


<section className="mt-6 rounded-2xl bg-[#0B2E6B] p-8 text-white shadow-md">

<h1 className="text-4xl font-extrabold">
Welcome Back To Nestoria
</h1>

<p className="mt-3 text-blue-100">
Manage your properties, requests, interior projects and account.
</p>

</section>


<section
ref={contentRef}
className="mt-8 rounded-2xl bg-white p-6 shadow-md"
>

<div className="flex flex-col gap-6 md:flex-row md:items-center">


<div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gray-200 text-5xl">

{
profile.photoURL
?
<img
src={profile.photoURL}
alt="Profile"
className="h-full w-full object-cover"
/>
:
"👤"
}

</div>


<div>

<h2 className="text-2xl font-bold text-[#0B2E6B]">
{profile.fullName}
</h2>

<p className="text-gray-600">
{profile.email}
</p>

<p className="text-gray-600">
{profile.phone}
</p>

<p className="text-gray-600">
{profile.location}
</p>

</div>


<Link
href="/profile"
className="md:ml-auto rounded-lg bg-[#FFF700] px-6 py-3 text-center font-bold text-[#0B2E6B] transition-all duration-200 hover:brightness-95 hover:shadow-md active:scale-95"
>

Edit Profile

</Link>


</div>

</section>
<section className="mt-8 rounded-2xl bg-white p-6 shadow-md">

<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

<div>

<h2 className="text-2xl font-bold text-[#0B2E6B]">
Membership Status
</h2>


<p className="mt-2 text-gray-600">
Your current Nestoria account plan
</p>


<div className="mt-3 inline-block rounded-full bg-blue-100 px-4 py-2 font-bold text-[#0B2E6B]">

🟦 {profile.membershipPlan} Member

</div>


<p className="mt-2 text-sm text-gray-600">
Status: {profile.membershipStatus}
</p>


<p className="mt-1 text-sm text-gray-600">
Billing: {profile.billingCycle}
</p>


</div>


<Link
href="/membership"
className="rounded-lg bg-[#FFF700] px-6 py-3 text-center font-bold text-[#0B2E6B] transition-all duration-200 hover:brightness-95 hover:shadow-md active:scale-95"
>

Upgrade Account

</Link>


</div>

</section>




<section className="mt-8 rounded-2xl bg-white p-6 shadow-md">


<h2 className="text-2xl font-bold text-[#0B2E6B]">
Dashboard Menu
</h2>


<div className="mt-5 grid gap-4 md:grid-cols-3">


{
sections.map((section)=>(


<button
key={section.id}
onClick={()=>setActive(section.id)}

className={`rounded-xl p-5 text-left shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 ${
active===section.id
?
"bg-[#0B2E6B] text-white scale-[1.02]"
:
"bg-gray-100 hover:bg-gray-200"
}`}

>


<div className="text-3xl">
{section.icon}
</div>


<h3 className="mt-3 font-bold">
{section.title}
</h3>


</button>


))

}


</div>


</section>





<section
ref={contentRef}
className="mt-8 rounded-2xl bg-white p-6 shadow-md"
>


{active==="properties" && (

<div>

<h2 className="text-2xl font-bold text-[#0B2E6B]">
🏠 My Properties
</h2>


{
properties.map((item)=>(

<div
key={item.name}
className="mt-5 rounded-lg border p-4"
>

<p className="font-bold">
{item.name}
</p>

<p>
📍 {item.location}
</p>

<p>
Status: {item.status}
</p>

<p>
Views: {item.views}
</p>


</div>

))

}


</div>

)}





{active==="requests" && (

<div>

<h2 className="text-2xl font-bold text-[#0B2E6B]">
🔍 My Requests
</h2>


{
requests.map((item)=>(

<div
key={item.name}
className="mt-5 rounded-lg border p-4"
>

<p className="font-bold">
{item.name}
</p>

<p>
📍 {item.location}
</p>

<p>
Budget: {item.budget}
</p>

<p>
Status: {item.status}
</p>


</div>

))

}


</div>

)}
{active==="interiors" && (

<div>

<h2 className="text-2xl font-bold text-[#0B2E6B]">
🛋 Interior Projects
</h2>


{
interiors.map((item)=>(

<div
key={item.name}
className="mt-5 rounded-lg border p-4"
>


<p className="font-bold">
{item.name}
</p>


<p>
Type: {item.type}
</p>


<p>
Status: {item.status}
</p>


</div>

))

}


</div>

)}





{active==="saved" && (

<div>


<h2 className="text-2xl font-bold text-[#0B2E6B]">
❤️ Saved Properties
</h2>


{
saved.map((item)=>(

<div
key={item.name}
className="mt-5 rounded-lg border p-4"
>


<p className="font-bold">
{item.name}
</p>


<p>
📍 {item.location}
</p>


<p>
{item.price}
</p>


</div>

))

}


</div>

)}






{active==="messages" && (

<div>


<h2 className="text-2xl font-bold text-[#0B2E6B]">
💬 Messages
</h2>


{
messages.map((item)=>(

<div
key={item.id}
className="mt-5 rounded-lg border p-4"
>


<p className="font-bold">
{item.sender}
</p>


<p className="mt-2">
{item.message}
</p>


<p className="text-sm text-gray-500">
{item.date}
</p>



<Link
href={`/chat/${item.id}`}
className="mt-4 inline-block rounded-lg bg-[#0B2E6B] px-5 py-2 font-bold text-white transition-all duration-200 hover:brightness-125 hover:shadow-md active:scale-95"
>

Reply

</Link>


</div>

))

}


</div>

)}






{active==="settings" && (

<div>


<h2 className="text-2xl font-bold text-[#0B2E6B]">
⚙️ Account Settings
</h2>



<div className="mt-5 space-y-4">


<Link
href="/change-password"
className="block rounded-lg border p-4 transition-all duration-200 hover:bg-gray-100 hover:shadow-md active:scale-95"
>

🔐 Change Password

</Link>





<button
className="w-full rounded-lg border p-4 text-left text-red-600 transition-all duration-200 hover:bg-red-50 hover:shadow-md active:scale-95"
>

🗑 Delete Account

</button>



</div>




<div className="mt-8 rounded-xl border p-5">


<h3 className="font-bold text-[#0B2E6B]">
Profile Settings
</h3>



<p className="mt-2 text-gray-600">
Update your personal information, profile picture,
phone number and location from your profile page.
</p>



<Link
href="/profile"
className="mt-4 inline-block rounded-lg bg-[#0B2E6B] px-5 py-2 font-bold text-white transition-all duration-200 hover:brightness-125 hover:shadow-md active:scale-95"
>

Open Profile Settings

</Link>


</div>



</div>

)}



</section>


</div>


</main>


);

}
