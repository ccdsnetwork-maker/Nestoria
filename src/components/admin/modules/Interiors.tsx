"use client";

import { useState } from "react";


type Project = {
id:number;
title:string;
client:string;
type:string;
designer:string;
budget:string;
status:string;
};


const initialProjects:Project[]=[
{
id:1,
title:"Luxury Living Room",
client:"David Ade",
type:"Residential",
designer:"Unassigned",
budget:"₦5,000,000",
status:"Pending"
},
{
id:2,
title:"Modern Office Space",
client:"Nest Business Ltd",
type:"Commercial",
designer:"John Designer",
budget:"₦12,000,000",
status:"In Progress"
},
{
id:3,
title:"Smart Home Interior",
client:"Sarah Johnson",
type:"Residential",
designer:"Mary Interior",
budget:"₦8,500,000",
status:"Completed"
}
];



export default function Interiors(){


const [projects,setProjects]=useState(initialProjects);



const deleteProject=(id:number)=>{

setProjects(
projects.filter(project=>project.id!==id)
);

};



const assignDesigner=(id:number)=>{

setProjects(

projects.map(project=>

project.id===id

?
{
...project,
designer:"Assigned Designer"
}

:
project

)

);

};



const completeProject=(id:number)=>{

setProjects(

projects.map(project=>

project.id===id

?
{
...project,
status:"Completed"
}

:
project

)

);

};



return(

<div className="w-full min-w-0">


<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


<div>

<h2 className="text-3xl font-extrabold text-[#0B2E6B]">
Interior Projects Management
</h2>


<p className="mt-2 text-gray-600">
Manage design requests, designers and project progress.
</p>


</div>



<button className="rounded-lg bg-[#FFF700] px-5 py-3 text-sm font-bold text-[#0B2E6B]">
+ New Project
</button>


</div>






<div className="mt-8 w-full overflow-hidden rounded-xl bg-white shadow-md">


<div className="w-full overflow-x-auto">


<table className="min-w-[1100px] w-full">


<thead className="bg-[#0B2E6B] text-white">


<tr>

<th className="p-4 text-left text-sm">
Project
</th>


<th className="p-4 text-left text-sm">
Client
</th>


<th className="p-4 text-left text-sm">
Type
</th>


<th className="p-4 text-left text-sm">
Designer
</th>


<th className="p-4 text-left text-sm">
Budget
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
projects.map(project=>(


<tr
key={project.id}
className="border-b"
>


<td className="p-4 font-bold text-[#0B2E6B]">
{project.title}
</td>



<td className="p-4 text-sm">
{project.client}
</td>



<td className="p-4 text-sm">
{project.type}
</td>



<td className="p-4 text-sm">
{project.designer}
</td>



<td className="p-4 text-sm">
{project.budget}
</td>



<td className="p-4">

<span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
{project.status}
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
onClick={()=>assignDesigner(project.id)}
className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white"
>
Assign Designer
</button>



<button
className="rounded-lg bg-purple-600 px-3 py-2 text-xs font-semibold text-white"
>
Upload Design
</button>



<button
className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-semibold text-white"
>
Track
</button>



<button
onClick={()=>completeProject(project.id)}
className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white"
>
Complete
</button>



<button
onClick={()=>deleteProject(project.id)}
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
