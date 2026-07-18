"use client";

import { useState } from "react";


type Message = {
id:number;
sender:string;
subject:string;
type:string;
status:string;
date:string;
};


const initialMessages:Message[]=[

{
id:1,
sender:"John Ade",
subject:"Property enquiry",
type:"Property",
status:"Unread",
date:"18 July 2026"
},

{
id:2,
sender:"Sarah Estate Ltd",
subject:"Agent registration request",
type:"Account",
status:"Read",
date:"17 July 2026"
},

{
id:3,
sender:"David Bello",
subject:"Interior design consultation",
type:"Interior",
status:"Unread",
date:"16 July 2026"
}

];



export default function Messages(){


const [messages,setMessages]=useState(initialMessages);



const deleteMessage=(id:number)=>{

setMessages(
messages.filter(message=>message.id!==id)
);

};



const toggleStatus=(id:number)=>{

setMessages(

messages.map(message=>

message.id===id

?
{
...message,
status:
message.status==="Read"
?
"Unread"
:
"Read"
}

:
message

)

);

};



return(

<div className="w-full min-w-0">


<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


<div>

<h2 className="text-3xl font-extrabold text-[#0B2E6B]">
Messages Management
</h2>


<p className="mt-2 text-gray-600">
Manage enquiries, inbox and notifications.
</p>


</div>



<div className="flex flex-wrap gap-3">


<button className="rounded-lg bg-[#0B2E6B] px-5 py-3 text-sm font-bold text-white">
Broadcast
</button>


<button className="rounded-lg bg-[#FFF700] px-5 py-3 text-sm font-bold text-[#0B2E6B]">
Notifications
</button>


</div>


</div>






<div className="mt-8 w-full overflow-hidden rounded-xl bg-white shadow-md">


<div className="w-full overflow-x-auto">


<table className="min-w-[900px] w-full">


<thead className="bg-[#0B2E6B] text-white">


<tr>

<th className="p-4 text-left text-sm">
Sender
</th>


<th className="p-4 text-left text-sm">
Subject
</th>


<th className="p-4 text-left text-sm">
Type
</th>


<th className="p-4 text-left text-sm">
Date
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
messages.map(message=>(


<tr
key={message.id}
className="border-b"
>


<td className="p-4 font-bold text-[#0B2E6B]">
{message.sender}
</td>


<td className="p-4 text-sm">
{message.subject}
</td>


<td className="p-4 text-sm">
{message.type}
</td>


<td className="p-4 text-sm">
{message.date}
</td>


<td className="p-4">

<span className={`rounded-full px-3 py-1 text-xs font-semibold ${
message.status==="Read"
?
"bg-green-100 text-green-700"
:
"bg-yellow-100 text-yellow-700"
}`}>

{message.status}

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
onClick={()=>toggleStatus(message.id)}
className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white"
>
Mark Read
</button>



<button
onClick={()=>deleteMessage(message.id)}
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
