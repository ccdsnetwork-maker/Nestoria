"use client";

import { useState } from "react";


type User = {
id:number;
name:string;
email:string;
role:string;
status:string;
membership:string;
};


const initialUsers:User[]=[
{
id:1,
name:"John Ade",
email:"john@email.com",
role:"Buyer",
status:"Active",
membership:"Basic"
},
{
id:2,
name:"Sarah Estate Ltd",
email:"sarah@email.com",
role:"Agent",
status:"Active",
membership:"Premium"
},
{
id:3,
name:"Michael Interior",
email:"michael@email.com",
role:"Interior Designer",
status:"Suspended",
membership:"None"
}
];


export default function Users(){

const [users,setUsers]=useState(initialUsers);
const [search,setSearch]=useState("");



const deleteUser=(id:number)=>{

setUsers(
users.filter(user=>user.id!==id)
);

};



const toggleStatus=(id:number)=>{

setUsers(
users.map(user=>

user.id===id
?
{
...user,
status:user.status==="Active"
?
"Suspended"
:
"Active"
}
:
user

)

);

};



const upgradeUser=(id:number)=>{

setUsers(
users.map(user=>

user.id===id
?
{
...user,
membership:"Premium"
}
:
user

)

);

};



const filteredUsers=users.filter(user=>

user.name.toLowerCase().includes(search.toLowerCase())
||
user.email.toLowerCase().includes(search.toLowerCase())

);



return(

<div className="w-full min-w-0">


<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


<div>

<h2 className="text-3xl font-extrabold text-[#0B2E6B]">
User Management
</h2>


<p className="mt-2 text-gray-600">
Manage customers, agents and platform users.
</p>


</div>



<button className="rounded-lg bg-[#FFF700] px-5 py-3 text-sm font-bold text-[#0B2E6B]">
+ Add User
</button>


</div>





<div className="mt-6">

<input

placeholder="Search users..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="w-full rounded-lg border p-3 md:w-96"

/>

</div>






<div className="mt-8 w-full overflow-hidden rounded-xl bg-white shadow-md">


<div className="w-full overflow-x-auto">


<table className="min-w-[950px] w-full">


<thead className="bg-[#0B2E6B] text-white">

<tr>

<th className="p-4 text-left text-sm">
Name
</th>


<th className="p-4 text-left text-sm">
Email
</th>


<th className="p-4 text-left text-sm">
Role
</th>


<th className="p-4 text-left text-sm">
Membership
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
filteredUsers.map(user=>(


<tr
key={user.id}
className="border-b"
>



<td className="p-4 font-bold text-[#0B2E6B]">
{user.name}
</td>



<td className="p-4 text-sm">
{user.email}
</td>



<td className="p-4 text-sm">
{user.role}
</td>



<td className="p-4 text-sm">
{user.membership}
</td>



<td className="p-4">

<span className={`rounded-full px-3 py-1 text-xs font-semibold ${
user.status==="Active"
?
"bg-green-100 text-green-700"
:
"bg-red-100 text-red-700"
}`}>

{user.status}

</span>

</td>




<td className="p-4">

<div className="flex flex-wrap gap-2">


<button
className="rounded-lg bg-[#0B2E6B] px-3 py-2 text-xs font-semibold text-white"
>
View Profile
</button>



<button
onClick={()=>toggleStatus(user.id)}
className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-semibold text-white"
>
{
user.status==="Active"
?
"Suspend"
:
"Activate"
}
</button>



<button
onClick={()=>upgradeUser(user.id)}
className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white"
>
Upgrade
</button>



<button
className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white"
>
Reset Password
</button>



<button
onClick={()=>deleteUser(user.id)}
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
