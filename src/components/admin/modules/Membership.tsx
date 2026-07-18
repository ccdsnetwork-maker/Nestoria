"use client";

import { useEffect, useState } from "react";

import {
Plus,
Edit,
Trash2,
CheckCircle,
XCircle,
} from "lucide-react";

import {
getPlans,
addPlan,
deletePlan,
togglePlanStatus,
MembershipPlan,
} from "@/services/membershipService";



export default function Membership(){


const [plans,setPlans]=useState<MembershipPlan[]>([]);

const [loading,setLoading]=useState(true);


const [newPlan,setNewPlan]=useState({

name:"",
price:"",
listings:"",

});




const loadPlans=async()=>{

try{

const data=await getPlans();

setPlans(data);

}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}

};



useEffect(()=>{

loadPlans();

},[]);





const handleAdd=async()=>{


if(!newPlan.name) return;


await addPlan({

name:newPlan.name,

price:newPlan.price,

listings:newPlan.listings,

subscribers:0,

status:"Active",

});


setNewPlan({

name:"",
price:"",
listings:"",

});


loadPlans();

};





const handleDelete=async(id:string)=>{

await deletePlan(id);

loadPlans();

};





const handleStatus=async(
id:string,
status:string
)=>{

await togglePlanStatus(
id,
status
);

loadPlans();

};





return(

<div className="w-full min-w-0">


<h2 className="text-3xl font-extrabold text-[#0B2E6B]">

Membership Management

</h2>


<p className="mt-2 text-gray-600">

Manage subscription plans and premium access.

</p>





<div className="mt-6 rounded-xl bg-white p-5 shadow-md">


<h3 className="font-bold text-[#0B2E6B]">

Create Membership Plan

</h3>



<div className="mt-4 grid gap-3 md:grid-cols-3">


<input

className="rounded-lg border p-3"

placeholder="Plan name"

value={newPlan.name}

onChange={(e)=>setNewPlan({

...newPlan,

name:e.target.value

})}

/>



<input

className="rounded-lg border p-3"

placeholder="Price"

value={newPlan.price}

onChange={(e)=>setNewPlan({

...newPlan,

price:e.target.value

})}

/>



<input

className="rounded-lg border p-3"

placeholder="Listings"

value={newPlan.listings}

onChange={(e)=>setNewPlan({

...newPlan,

listings:e.target.value

})}

/>


</div>




<button

onClick={handleAdd}

className="mt-4 flex items-center gap-2 rounded-lg bg-[#FFF700] px-5 py-3 font-bold text-[#0B2E6B]"

>


<Plus size={18}/>

Create Plan


</button>


</div>





<div className="mt-8 w-full overflow-x-auto">


<table className="min-w-[900px] w-full rounded-xl bg-white shadow-md">


<thead className="bg-[#0B2E6B] text-white">


<tr>

<th className="p-4 text-left">
Plan
</th>

<th className="p-4 text-left">
Price
</th>

<th className="p-4 text-left">
Subscribers
</th>

<th className="p-4 text-left">
Listings
</th>

<th className="p-4 text-left">
Status
</th>

<th className="p-4 text-left">
Actions
</th>


</tr>

</thead>



<tbody>



{loading && (

<tr>

<td colSpan={6} className="p-5 text-center">

Loading plans...

</td>

</tr>

)}





{plans.map((plan)=>(


<tr
key={plan.id}
className="border-b"
>


<td className="p-4 font-bold text-[#0B2E6B]">

{plan.name}

</td>



<td className="p-4">

{plan.price}

</td>



<td className="p-4">

{plan.subscribers}

</td>



<td className="p-4">

{plan.listings}

</td>



<td className="p-4">

{plan.status}

</td>




<td className="p-4">


<div className="flex flex-wrap gap-2">


<button

className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white"

>

<Edit size={14}/>

Edit

</button>




<button

onClick={()=>handleStatus(
plan.id!,
plan.status
)}

className="flex items-center gap-1 rounded-lg bg-[#0B2E6B] px-3 py-2 text-xs font-bold text-white"

>


{plan.status==="Active"

?

<XCircle size={14}/>

:

<CheckCircle size={14}/>

}


{plan.status==="Active"
?
"Disable"
:
"Activate"
}


</button>





<button

onClick={()=>deletePlan(plan.id!)}

className="flex items-center gap-1 rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white"

>

<Trash2 size={14}/>

Delete

</button>


</div>


</td>


</tr>


))}


</tbody>


</table>


</div>


</div>


);

}
