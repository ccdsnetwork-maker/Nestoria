"use client";

import { useState } from "react";


type ContentItem = {
id:number;
title:string;
section:string;
description:string;
status:string;
};


const initialContent:ContentItem[]=[

{
id:1,
title:"Homepage Hero",
section:"Homepage",
description:"Main headline, background image and CTA buttons",
status:"Published"
},

{
id:2,
title:"Homepage Banners",
section:"Homepage",
description:"Promotional banners and announcements",
status:"Published"
},

{
id:3,
title:"Featured Properties",
section:"Properties",
description:"Manage homepage featured property listings",
status:"Published"
},

{
id:4,
title:"Testimonials",
section:"Homepage",
description:"Customer reviews and success stories",
status:"Published"
},

{
id:5,
title:"Careers",
section:"Career Page",
description:"Job openings and recruitment information",
status:"Draft"
},

{
id:6,
title:"Footer Information",
section:"Global",
description:"Contact details, social media and locations",
status:"Published"
},

{
id:7,
title:"SEO Settings",
section:"Global",
description:"Meta title, keywords and website descriptions",
status:"Published"
}

];



export default function Content(){


const [content,setContent]=useState(initialContent);



const deleteContent=(id:number)=>{

setContent(
content.filter(item=>item.id!==id)
);

};



return(

<div className="w-full min-w-0">


<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


<div>

<h2 className="text-3xl font-extrabold text-[#0B2E6B]">
Website Content Management
</h2>


<p className="mt-2 text-gray-600">
Control all website sections and information.
</p>


</div>



<button className="rounded-lg bg-[#FFF700] px-5 py-3 text-sm font-bold text-[#0B2E6B]">
+ Add Content
</button>


</div>





<div className="mt-8 w-full overflow-hidden rounded-xl bg-white shadow-md">


<div className="w-full overflow-x-auto">


<table className="min-w-[900px] w-full">


<thead className="bg-[#0B2E6B] text-white">


<tr>

<th className="p-4 text-left text-sm">
Content
</th>


<th className="p-4 text-left text-sm">
Section
</th>


<th className="p-4 text-left text-sm">
Description
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
content.map(item=>(


<tr
key={item.id}
className="border-b"
>


<td className="p-4 font-bold text-[#0B2E6B]">
{item.title}
</td>


<td className="p-4 text-sm">
{item.section}
</td>


<td className="p-4 text-sm">
{item.description}
</td>


<td className="p-4">

<span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
{item.status}
</span>

</td>




<td className="p-4">


<div className="flex flex-wrap gap-2">


<button
className="rounded-lg bg-[#0B2E6B] px-3 py-2 text-xs font-semibold text-white"
>
View
</button>



<button
className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white"
>
Edit
</button>



<button
className="rounded-lg bg-purple-600 px-3 py-2 text-xs font-semibold text-white"
>
SEO
</button>



<button
onClick={()=>deleteContent(item.id)}
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
