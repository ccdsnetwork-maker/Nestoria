"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
getProperties,
deleteProperty,
approveProperty,
toggleFeatured,
Property,
} from "@/services/propertyService";


export default function Properties(){

const router = useRouter();

const [properties,setProperties] = useState<Property[]>([]);

const [loading,setLoading] = useState(true);

const [message,setMessage] = useState("");



async function loadProperties(){

try{

setLoading(true);

const data = await getProperties();

setProperties(data);

}

catch(error){

console.log(error);

setMessage("Failed to load properties");

}

finally{

setLoading(false);

}

}



useEffect(()=>{

loadProperties();

},[]);




return (

<div>


<h2 className="text-3xl font-extrabold text-[#0B2E6B]">

Property Management

</h2>



{message && (

<p className="mt-4 rounded-lg bg-gray-100 p-3 text-sm">

{message}

</p>

)}




<div className="mt-6 rounded-xl bg-white p-5 shadow-md">


<h3 className="font-bold text-[#0B2E6B]">

Property Actions

</h3>


<button

onClick={()=>router.push("/properties/list")}

className="mt-4 rounded-lg bg-[#FFF700] px-5 py-3 font-bold text-[#0B2E6B]"

>

Add Property

</button>


</div>





<div className="mt-8 overflow-x-auto rounded-xl bg-white shadow-md">


<table className="w-full min-w-[800px]">


<thead className="bg-[#0B2E6B] text-white">

<tr>

<th className="p-4 text-left">Property</th>

<th className="p-4 text-left">Location</th>

<th className="p-4 text-left">Price</th>

<th className="p-4 text-left">Status</th>

<th className="p-4 text-left">Actions</th>

</tr>

</thead>



<tbody>


{loading && (

<tr>

<td colSpan={5} className="p-5 text-center">

Loading properties...

</td>

</tr>

)}



{!loading && properties.length===0 && (

<tr>

<td colSpan={5} className="p-5 text-center">

No properties found in database

</td>

</tr>

)}



{properties.map((property)=>(


<tr key={property.id} className="border-b">


<td className="p-4 font-bold text-[#0B2E6B]">

{property.title}

</td>


<td className="p-4">

{property.location}

</td>


<td className="p-4">

{property.price}

</td>


<td className="p-4">

{property.status}

</td>


<td className="p-4">


<div className="flex flex-wrap gap-2">


<button

onClick={()=>approveProperty(property.id!)}

className="rounded bg-green-600 px-3 py-2 text-xs text-white"

>

Approve

</button>



<button

onClick={()=>toggleFeatured(property.id!,!property.featured)}

className="rounded bg-[#0B2E6B] px-3 py-2 text-xs text-white"

>

Featured

</button>



<button

onClick={async()=>{

await deleteProperty(property.id!);

loadProperties();

}}

className="rounded bg-red-600 px-3 py-2 text-xs text-white"

>

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
