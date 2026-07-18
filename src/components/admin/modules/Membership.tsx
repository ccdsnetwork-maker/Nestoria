"use client";

import { useState } from "react";


type Plan = {
id:number;
name:string;
price:string;
subscribers:number;
duration:string;
status:string;
discount:string;
};


const initialPlans:Plan[]=[
{
id:1,
name:"Basic Plan",
price:"₦5,000/month",
subscribers:120,
duration:"Monthly",
status:"Active",
discount:"5%"
},
{
id:2,
name:"Gold Plan",
price:"₦15,000/month",
subscribers:89,
duration:"Monthly",
status:"Active",
discount:"10%"
},
{
id:3,
name:"Premium Plan",
price:"₦30,000/month",
subscribers:35,
duration:"Monthly",
status:"Inactive",
discount:"15%"
}
];



export default function Membership(){


const [plans,setPlans]=useState(initialPlans);



const deletePlan=(id:number)=>{

setPlans(
plans.filter(plan=>plan.id!==id)
);

};



const toggleStatus=(id:number)=>{

setPlans(

plans.map(plan=>

plan.id===id

?
{
...plan,
status:
plan.status==="Active"
?
"Inactive"
:
"Active"
}

:
plan

)

);

};





return(

<div className="w-full min-w-0">


<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


<div>

<h2 className="text-3xl font-extrabold text-[#0B2E6B]">
Membership Management
</h2>


<p className="mt-2 text-gray-600">
Manage subscription plans, subscribers and discounts.
</p>


</div>



<button className="rounded-lg bg-[#FFF700] px-5 py-3 text-sm font-bold text-[#0B2E6B]">
+ Create Plan
</button>


</div>





<div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">


{
plans.map(plan=>(


<div
key={plan.id}
className="rounded-xl bg-white p-6 shadow-md"
>


<h3 className="text-2xl font-bold text-[#0B2E6B]">
{plan.name}
</h3>



<p className="mt-3 text-3xl font-extrabold">
{plan.price}
</p>




<div className="mt-5 space-y-3 text-sm text-gray-600">


<p>
Subscribers:
<strong className="ml-2 text-black">
{plan.subscribers}
</strong>
</p>


<p>
Duration:
<strong className="ml-2 text-black">
{plan.duration}
</strong>
</p>


<p>
Discount:
<strong className="ml-2 text-black">
{plan.discount}
</strong>
</p>



<p>

Status:

<span className={`ml-2 rounded-full px-3 py-1 text-xs font-semibold ${
plan.status==="Active"
?
"bg-green-100 text-green-700"
:
"bg-red-100 text-red-700"
}`}>

{plan.status}

</span>

</p>



</div>





<div className="mt-6 flex flex-wrap gap-2">


<button
className="rounded-lg bg-[#0B2E6B] px-3 py-2 text-xs font-semibold text-white"
>
Edit
</button>



<button
className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white"
>
Subscribers
</button>



<button
className="rounded-lg bg-purple-600 px-3 py-2 text-xs font-semibold text-white"
>
Renew
</button>



<button
className="rounded-lg bg-yellow-500 px-3 py-2 text-xs font-semibold text-white"
>
Discount
</button>



<button
onClick={()=>toggleStatus(plan.id)}
className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white"
>
{
plan.status==="Active"
?
"Deactivate"
:
"Activate"
}
</button>



<button
onClick={()=>deletePlan(plan.id)}
className="rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white"
>
Delete
</button>


</div>


</div>


))

}


</div>


</div>

);

}
