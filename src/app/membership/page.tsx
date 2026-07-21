"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import BackButton from "@/components/layout/BackButton";
import { plans } from "@/config/membershipPlans";

import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import auth from "@/lib/auth";
import { db } from "@/lib/firebase";

import { updateUserMembership } from "@/services/membershipService";


export default function MembershipPage() {


const [billing,setBilling] = useState<"monthly"|"yearly">("monthly");


const [currentPlan,setCurrentPlan] = useState<any>({
  ...plans[0],
  billingCycle:"monthly",
});

const [selectedPlan,setSelectedPlan] = useState<any>(null);


const [showFeedback,setShowFeedback] = useState(false);
const [pendingRequest,setPendingRequest] = useState<any>(null);


const [loading,setLoading] = useState(true);



useEffect(()=>{


const unsubscribe = onAuthStateChanged(
auth,
async(user)=>{


if(!user){

setLoading(false);

return;

}



const userRef = doc(
db,
"users",
user.uid
);



const snapshot = await getDoc(userRef);




if (snapshot.exists()) {
  const data = snapshot.data();

  const activeBilling =
    data.billingCycle === "yearly"
      ? "yearly"
      : "monthly";

  setBilling(activeBilling);

  const activePlan =
    plans.find(
      (plan) => plan.name === data.membershipPlan
    ) || plans[0];

  setCurrentPlan({
    ...activePlan,
    billingCycle: activeBilling,
  });
} else {
  setBilling("monthly");

  setCurrentPlan({
    ...plans[0],
    billingCycle: "monthly",
  });
}

setLoading(false);



}

);



return unsubscribe;


},[]);





const handleUpgrade = async(plan:any)=>{

const user = auth.currentUser;

if(!user){

alert("Please login before upgrading");

return;

}


await addDoc(
collection(db,"membershipRequests"),
{

userId:user.uid,

userName:
user.displayName || "Nestoria User",

email:
user.email || "",

plan:plan.name,

billingCycle:
billing==="monthly"
? "Monthly"
: "Yearly",

propertyListingLimit:
billing==="monthly"
?
plan.monthlyListings
:
plan.yearlyListings,

propertyRequestLimit:
billing==="monthly"
?
plan.monthlyRequests
:
plan.yearlyRequests,

interiorRequestLimit:
billing==="monthly"
?
plan.monthlyInterior
:
plan.yearlyInterior,

status:"Pending",

createdAt:serverTimestamp(),

}
);


setSelectedPlan(plan);
setPendingRequest({
  name: plan.name,
  billingCycle: billing,
});

setShowFeedback(true);


};
return (

<main className="min-h-screen bg-gray-100 py-10 md:py-20">

<div className="mx-auto max-w-7xl px-4 md:px-6">


<BackButton />


<section className="mt-6 rounded-2xl bg-[#0B2E6B] p-8 text-white shadow-md">


<h1 className="text-4xl font-extrabold md:text-5xl">
Nestoria Membership Plans
</h1>


<p className="mt-4 max-w-3xl text-blue-100">
Choose a plan that matches your property goals and unlock
more opportunities on Nestoria.
</p>


</section>




<section className="mt-8 flex justify-center">


<div className="rounded-full bg-white p-2 shadow-md">


<button
onClick={()=>setBilling("monthly")}
className={`rounded-full px-6 py-3 font-bold ${
billing==="monthly"
?
"bg-[#0B2E6B] text-white"
:
"text-gray-600"
}`}
>
Monthly
</button>



<button
onClick={()=>setBilling("yearly")}
className={`rounded-full px-6 py-3 font-bold ${
billing==="yearly"
?
"bg-[#0B2E6B] text-white"
:
"text-gray-600"
}`}
>
Yearly ⭐ Save More
</button>


</div>


</section>





<section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">


{
plans.map((plan)=>(


<div
key={plan.name}
className={`relative rounded-2xl bg-white p-6 shadow-md ${
currentPlan.name===plan.name &&
currentPlan.billingCycle===billing
?
"border-4 border-[#FFF700]"
:
""
}`}
>



{
plan.popular && (

<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FFF700] px-4 py-1 text-sm font-bold text-[#0B2E6B]">

⭐ Most Popular

</div>

)

}



<h2 className="text-2xl font-extrabold text-[#0B2E6B]">

{plan.name}

</h2>



{
plan.discount && billing==="yearly" && (

<span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">

{plan.discount}

</span>

)

}



<p className="mt-5 text-3xl font-extrabold">

{
billing==="monthly"
?
plan.monthly
:
plan.yearly
}

</p>



<p className="text-sm text-gray-500">

{
billing==="monthly"
?
"per month"
:
"per year"
}

</p>




<ul className="mt-6 space-y-3 text-sm text-gray-600">


<li>
✔ {
billing==="monthly"
?
plan.monthlyListings
:
plan.yearlyListings
}
 Property Listings
</li>


<li>
✔ {
billing==="monthly"
?
plan.monthlyRequests
:
plan.yearlyRequests
}
 Property Requests
</li>


<li>
✔ {
billing==="monthly"
?
plan.monthlyInterior
:
plan.yearlyInterior
}
 Interior Requests
</li>



{
plan.features.slice(3).map((feature)=>(

<li key={feature}>
✔ {feature}
</li>

))

}



</ul>
<button

onClick={()=>{

if(currentPlan.name===plan.name &&
currentPlan.billingCycle===billing){

return;

}

handleUpgrade(plan);

}}

className={`mt-8 block w-full rounded-lg py-3 text-center font-bold ${
currentPlan.name===plan.name &&
currentPlan.billingCycle===billing

?

"bg-green-100 text-green-700"

:

plan.name==="Basic"

?

"bg-gray-300 text-gray-700"

:

"bg-[#FFF700] text-[#0B2E6B]"

}`}

>


{
currentPlan.name===plan.name &&
currentPlan.billingCycle===billing

?

"Current Plan"

:
plan.name==="Basic"
?
"Free Plan"
:
pendingRequest?.name === plan.name &&
pendingRequest?.billingCycle === billing
?
"Waiting for Approval"
:
`Upgrade to ${plan.name}`

}


</button>



</div>


))


}


</section>





<section className="mt-12 grid gap-6 md:grid-cols-2">


<div className="rounded-2xl bg-white p-6 shadow-md">


<h2 className="text-2xl font-bold text-[#0B2E6B]">

Current Plan

</h2>



<div className="mt-5 rounded-xl bg-green-50 p-5">


<h3 className="text-3xl font-extrabold text-green-700">

{currentPlan.name} Account

</h3>



<p className="mt-2 text-gray-600">

Active membership

</p>



<p className="mt-2 text-gray-600">

Billing:
{" "}
{billing==="monthly" ? "Monthly" : "Yearly"}

</p>



</div>


</div>





<div className="rounded-2xl bg-white p-6 shadow-md">


<h2 className="text-2xl font-bold text-[#0B2E6B]">

Current Usage

</h2>



<div className="mt-5 space-y-4 text-gray-600">


<p>

🏠 Property Listings: 0 / {

billing==="monthly"

?

currentPlan.monthlyListings

:

currentPlan.yearlyListings

}

</p>



<p>

🔍 Property Requests: 0 / {

billing==="monthly"

?

currentPlan.monthlyRequests

:

currentPlan.yearlyRequests

}

</p>



<p>

🛋 Interior Projects: 0 / {

billing==="monthly"

?

currentPlan.monthlyInterior

:

currentPlan.yearlyInterior

}

</p>


</div>


</div>


</section>
<section className="mt-12 rounded-2xl bg-white p-6 shadow-md md:p-8">


<h2 className="text-3xl font-bold text-[#0B2E6B]">
Plan Comparison
</h2>



<div className="mt-6 overflow-x-auto">


<table className="min-w-full border text-sm">


<thead className="bg-[#0B2E6B] text-white">


<tr>

<th className="border p-3 text-left">
Feature
</th>


<th className="border p-3">
Basic
</th>


<th className="border p-3">
Silver
</th>


<th className="border p-3">
Gold
</th>


<th className="border p-3">
Platinum
</th>


</tr>


</thead>




<tbody>


<tr>

<td className="border p-3">
Property Listings
</td>


<td className="border p-3 text-center">
{
billing==="monthly"
?
plans[0].monthlyListings
:
plans[0].yearlyListings
}
</td>


<td className="border p-3 text-center">
{
billing==="monthly"
?
plans[1].monthlyListings
:
plans[1].yearlyListings
}
</td>


<td className="border p-3 text-center">
{
billing==="monthly"
?
plans[2].monthlyListings
:
plans[2].yearlyListings
}
</td>


<td className="border p-3 text-center">
Unlimited
</td>


</tr>




<tr>

<td className="border p-3">
Contact Visibility
</td>


<td className="border p-3 text-center">
Limited
</td>


<td className="border p-3 text-center">
Yes
</td>


<td className="border p-3 text-center">
Yes
</td>


<td className="border p-3 text-center">
Priority
</td>


</tr>





<tr>

<td className="border p-3">
Featured Listings
</td>


<td className="border p-3 text-center">
No
</td>


<td className="border p-3 text-center">
Optional
</td>


<td className="border p-3 text-center">
Included
</td>


<td className="border p-3 text-center">
Premium
</td>


</tr>



</tbody>


</table>


</div>


</section>





<section className="mt-12 rounded-2xl bg-white p-6 shadow-md md:p-8">


<h2 className="text-3xl font-bold text-[#0B2E6B]">

Frequently Asked Questions

</h2>



<div className="mt-6 space-y-5">


<div>

<h3 className="font-bold text-[#0B2E6B]">

Will every user start with Basic?

</h3>


<p className="mt-2 text-gray-600">

Yes. New users automatically receive a Basic account.

</p>


</div>



<div>

<h3 className="font-bold text-[#0B2E6B]">

Can I upgrade anytime?

</h3>


<p className="mt-2 text-gray-600">

Yes. You can upgrade whenever you need more features.

</p>


</div>



<div>

<h3 className="font-bold text-[#0B2E6B]">

How will payment work?

</h3>


<p className="mt-2 text-gray-600">

Payment integration will be connected later with a secure payment gateway.

</p>


</div>


</div>


</section>
<section className="mt-12 rounded-2xl bg-[#0B2E6B] p-8 text-center text-white">


<h2 className="text-3xl font-extrabold">

Upgrade Your Nestoria Experience

</h2>



<p className="mx-auto mt-4 max-w-2xl text-blue-100">

Choose a membership plan that helps you reach more customers
and manage more property opportunities.

</p>







</section>





{
showFeedback && selectedPlan && (

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">


<div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">


<div className="text-5xl">
✅
</div>


<h2 className="mt-4 text-2xl font-extrabold text-[#0B2E6B]">
Request Submitted
</h2>


<p className="mt-3 text-gray-600">

Your upgrade request has been submitted. Please wait for admin approval before your membership is activated.
</p>




<div className="mt-5 rounded-xl bg-gray-100 p-4 text-left">


<p className="font-bold text-[#0B2E6B]">

Plan: {selectedPlan.name}

</p>



<p className="mt-2">

Billing:
{" "}
{billing==="monthly" ? "Monthly" : "Yearly"}

</p>



<p className="mt-2">

Price:
{" "}
{
billing==="monthly"
?
selectedPlan.monthly
:
selectedPlan.yearly
}

</p>


</div>





<button

onClick={()=>{

setShowFeedback(false);

setSelectedPlan(null);

}}

className="mt-6 w-full rounded-lg bg-[#0B2E6B] px-6 py-3 font-bold text-white"

>

OK

</button>



</div>


</div>

)

}



</div>


</main>


);


}
