"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { updateUserMembership } from "@/services/membershipService";
import { CheckCircle, XCircle } from "lucide-react";

type Request = {
  id:string;
  userId:string;
  userName?:string;
  email?:string;
  plan?:string;
  billingCycle?:string;
  status?:string;
};

const plans=[
"Basic Monthly",
"Basic Yearly",
"Silver Monthly",
"Silver Yearly",
"Gold Monthly",
"Gold Yearly",
"Platinum Monthly",
"Platinum Yearly",
];

export default function MemberApproval(){

const [requests,setRequests]=useState<Request[]>([]);
const [loading,setLoading]=useState(true);


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

}finally{

setLoading(false);

}

};


useEffect(()=>{

loadRequests();

},[]);



const approveMember=async(request:Request)=>{

await updateUserMembership(
request.userId,
{
membershipPlan:request.plan,
billingCycle:request.billingCycle,
membershipStatus:"Active",
}
);


await updateDoc(
doc(db,"membershipRequests",request.id),
{
status:"Approved"
}
);


loadRequests();

};



const rejectMember=async(request:Request)=>{

await updateDoc(
doc(db,"membershipRequests",request.id),
{
status:"Rejected"
}
);

loadRequests();

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

<table className="min-w-[900px] w-full">

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

<tr key={request.id} className="border-b">


<td className="p-4 font-bold text-[#0B2E6B]">
{request.userName || "User"}
</td>


<td className="p-4">
{request.email}
</td>


<td className="p-4">

<select
value={`${request.plan} ${request.billingCycle}`}
onChange={async(e)=>{

const value=e.target.value.split(" ");

await updateDoc(
doc(db,"membershipRequests",request.id),
{
plan:value[0],
billingCycle:value[1]
}
);

loadRequests();

}}
className="rounded-lg border p-2"
>

{plans.map(plan=>(

<option key={plan}>
{plan}
</option>

))}

</select>

</td>


<td className="p-4">
{request.billingCycle}
</td>


<td className="p-4 font-bold">
{request.status || "Pending"}
</td>


<td className="p-4">

<div className="flex gap-2">


<button
onClick={()=>approveMember(request)}
className="flex items-center gap-1 rounded-lg bg-green-600 px-3 py-2 text-xs font-bold text-white"
>

<CheckCircle size={14}/>
Approve

</button>


<button
onClick={()=>rejectMember(request)}
className="flex items-center gap-1 rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white"
>

<XCircle size={14}/>
Reject

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
