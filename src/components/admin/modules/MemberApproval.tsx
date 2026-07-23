"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { updateUserMembership } from "@/services/membershipService";

import {
  CheckCircle,
  XCircle,
  Trash2,
  Loader2,
} from "lucide-react";


type Request = {
  id:string;
  userId:string;
  userName?:string;
  email?:string;
  plan?:string;
  billingCycle?:string;
  status?:string;
};



export default function MemberApproval(){

const [requests,setRequests]=useState<Request[]>([]);
const [loading,setLoading]=useState(true);

const [processing,setProcessing]=useState<string | null>(null);



const loadRequests=async()=>{

try{

const q=query(
collection(db,"membershipRequests"),
orderBy("createdAt","desc")
);


const snapshot=await getDocs(q);


const data=snapshot.docs.map(item=>({

id:item.id,
...item.data()

})) as Request[];


setRequests(data);


}catch(error){

console.log(error);

}
finally{

setLoading(false);

}

};



useEffect(()=>{

loadRequests();

},[]);




const approveMember=async(request:Request)=>{

setProcessing(request.id);

try{

await updateUserMembership(
request.userId,
{

membershipPlan:request.plan,

billingCycle:
request.billingCycle?.toLowerCase(),

membershipStatus:"Active",

}
);



await updateDoc(
doc(db,"membershipRequests",request.id),
{

status:"Approved"

}
);


await loadRequests();


}
finally{

setProcessing(null);

}

};





const rejectMember=async(request:Request)=>{

setProcessing(request.id);

try{


await updateDoc(
doc(db,"membershipRequests",request.id),
{

status:"Rejected"

}
);


await loadRequests();


}
finally{

setProcessing(null);

}

};





const deleteRequest=async(id:string)=>{

const confirmDelete =
window.confirm(
"Are you sure you want to permanently delete this request?"
);


if(!confirmDelete) return;


setProcessing(id);


try{


await deleteDoc(
doc(db,"membershipRequests",id)
);


await loadRequests();


}
finally{

setProcessing(null);

}

};





const badge=(status:string)=>{


if(status==="Approved")

return "bg-green-100 text-green-700";


if(status==="Rejected")

return "bg-red-100 text-red-700";


return "bg-yellow-100 text-yellow-700";


};




return(

<div className="w-full">


<h2 className="text-3xl font-extrabold text-[#0B2E6B]">
Member Approval
</h2>


<p className="mt-2 text-gray-600">
Approve subscriptions and control premium access.
</p>



<div className="mt-8 overflow-x-auto rounded-xl bg-white shadow-md">


<table className="min-w-[950px] w-full">


<thead className="bg-[#0B2E6B] text-white">

<tr>

<th className="p-4 text-left">User</th>

<th className="p-4 text-left">Email</th>

<th className="p-4 text-left">Plan</th>

<th className="p-4 text-left">Billing</th>

<th className="p-4 text-left">Status</th>

<th className="p-4 text-left">Action</th>

</tr>

</thead>



<tbody>


{loading && (

<tr>

<td colSpan={6} className="p-5 text-center">

Loading requests...

</td>

</tr>

)}



{requests.map((request)=>(


<tr
key={request.id}
className="border-b"
>



<td className="p-4 font-bold text-[#0B2E6B]">

{request.userName || "User"}

</td>




<td className="p-4">

{request.email}

</td>




<td className="p-4">

<span className="font-semibold">

{request.plan || "Not selected"}

</span>

</td>




<td className="p-4">

<span className="font-semibold">

{request.billingCycle || "Monthly"}

</span>

</td>





<td className="p-4">

<span
className={`rounded-full px-3 py-1 text-xs font-bold ${badge(request.status || "Pending")}`}
>

{request.status || "Pending"}

</span>

</td>





<td className="p-4">


<div className="flex gap-2">



<button

onClick={()=>approveMember(request)}

disabled={processing===request.id}

className="flex items-center gap-1 rounded-lg bg-green-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-green-700 active:scale-95 disabled:opacity-50"

>

{

processing===request.id

?

<Loader2 size={14} className="animate-spin"/>

:

<CheckCircle size={14}/>

}


Approve

</button>





<button

onClick={()=>rejectMember(request)}

disabled={processing===request.id}

className="flex items-center gap-1 rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-red-700 active:scale-95 disabled:opacity-50"

>

<XCircle size={14}/>

Reject

</button>





<button

onClick={()=>deleteRequest(request.id)}

disabled={processing===request.id}

className="flex items-center gap-1 rounded-lg bg-gray-700 px-3 py-2 text-xs font-bold text-white transition hover:bg-gray-900 active:scale-95 disabled:opacity-50"

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
