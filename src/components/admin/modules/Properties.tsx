"use client";

import { useState } from "react";

type Property = {
  id:number;
  title:string;
  location:string;
  price:string;
  status:string;
  featured:boolean;
};


const initialProperties:Property[]=[
{
id:1,
title:"Modern 4 Bedroom Duplex",
location:"Ibadan",
price:"₦85,000,000",
status:"Approved",
featured:true
},
{
id:2,
title:"Luxury Apartment",
location:"Lagos",
price:"₦5,000,000/year",
status:"Pending",
featured:false
}
];


export default function Properties(){

const [properties,setProperties]=useState(initialProperties);


const deleteProperty=(id:number)=>{
setProperties(
properties.filter(property=>property.id!==id)
);
};


const toggleFeatured=(id:number)=>{
setProperties(
properties.map(property=>
property.id===id
?
{
...property,
featured:!property.featured
}
:
property
)
);
};


const approveProperty=(id:number)=>{
setProperties(
properties.map(property=>
property.id===id
?
{
...property,
status:"Approved"
}
:
property
)
);
};


return(

<div className="w-full min-w-0">


<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

<div>
<h2 className="text-3xl font-extrabold text-[#0B2E6B]">
Property Management
</h2>

<p className="mt-2 text-gray-600">
Manage property listings, approvals and featured properties.
</p>

</div>


<button className="rounded-lg bg-[#FFF700] px-5 py-3 text-sm font-bold text-[#0B2E6B]">
+ Add Property
</button>


</div>





<div className="mt-8 w-full overflow-hidden rounded-xl bg-white shadow-md">


<div className="w-full overflow-x-auto">


<table className="min-w-[850px] w-full">


<thead className="bg-[#0B2E6B] text-white">

<tr>

<th className="p-4 text-left text-sm">
Property
</th>

<th className="p-4 text-left text-sm">
Location
</th>

<th className="p-4 text-left text-sm">
Price
</th>

<th className="p-4 text-left text-sm">
Status
</th>

<th className="p-4 text-left text-sm">
Actions
</th>

</tr>

</thead>



<tbody>


{
properties.map(property=>(

<tr
key={property.id}
className="border-b"
>


<td className="p-4">

<p className="font-bold text-[#0B2E6B]">
{property.title}
</p>


{
property.featured &&
<span className="mt-2 inline-block rounded-full bg-[#FFF700] px-3 py-1 text-xs font-bold text-[#0B2E6B]">
Featured
</span>
}


</td>



<td className="p-4 text-sm">
{property.location}
</td>



<td className="p-4 text-sm">
{property.price}
</td>



<td className="p-4">

<span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

{property.status}

</span>

</td>




<td className="p-4">


<div className="flex flex-wrap gap-2">


<button
className="rounded-lg bg-[#0B2E6B] px-3 py-2 text-xs font-semibold text-white"
>
Edit
</button>



<button
onClick={()=>approveProperty(property.id)}
className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white"
>
Approve
</button>



<button
onClick={()=>toggleFeatured(property.id)}
className="rounded-lg bg-yellow-500 px-3 py-2 text-xs font-semibold text-white"
>
{
property.featured
?
"Unfeature"
:
"Feature"
}
</button>



<button
onClick={()=>deleteProperty(property.id)}
className="rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white"
>
Delete
</button>


</div>


</td>



</tr>

))

}


</tbody>


</table>


</div>


</div>


</div>

);

}
