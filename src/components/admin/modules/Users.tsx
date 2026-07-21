"use client";

import { useEffect, useState } from "react";
import {
Search,
Trash2,
UserCheck,
UserX,
Edit,
} from "lucide-react";

import {
getUsers,
deleteUser,
toggleUserStatus,
User,
} from "@/services/userService";


export default function Users(){


const [users,setUsers]=useState<User[]>([]);

const [loading,setLoading]=useState(true);

const [search,setSearch]=useState("");



const loadUsers=async()=>{

try{

const data=await getUsers();

setUsers(data);

}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}

};



useEffect(()=>{

loadUsers();

},[]);





const handleStatus=async(
id:string,
status:string
)=>{

await toggleUserStatus(
id,
status==="Active" ? "Suspended" : "Active"
);

loadUsers();

};





const handleDelete=async(id:string)=>{

await deleteUser(id);

loadUsers();

};




const filteredUsers = users.filter(
  (user) =>
    (user.fullName ?? "")
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    (user.email ?? "")
      .toLowerCase()
      .includes(search.toLowerCase())
);



return(

<div className="w-full min-w-0">


<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


<h2 className="text-3xl font-extrabold text-[#0B2E6B]">

User Management

</h2>


</div>



<div className="mt-6 rounded-xl bg-white p-5 shadow-md">


<div className="flex items-center gap-3 rounded-lg border p-3">


<Search size={18}/>


<input

placeholder="Search users..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="w-full outline-none"

/>


</div>


</div>





<div className="mt-8 w-full overflow-x-auto rounded-xl bg-white shadow-md">


<table className="min-w-[900px] w-full">


<thead className="bg-[#0B2E6B] text-white">


<tr>

<th className="p-4 text-left">
Name
</th>


<th className="p-4 text-left">
Email
</th>


<th className="p-4 text-left">
Role
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

<td
colSpan={5}
className="p-5 text-center"
>

Loading users...

</td>

</tr>

)}





{!loading && filteredUsers.length===0 && (

<tr>

<td
colSpan={5}
className="p-5 text-center"
>

No users found

</td>

</tr>

)}





{filteredUsers.map((user)=>(


<tr
key={user.id}
className="border-b"
>


<td className="p-4 font-bold text-[#0B2E6B]">

{user.fullName || "No Name"}
</td>



<td className="p-4">

{user.email}

</td>



<td className="p-4">

{user.role}

</td>



<td className="p-4">

{user.status}

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
user.id!,
user.status
)}

className="flex items-center gap-1 rounded-lg bg-[#0B2E6B] px-3 py-2 text-xs font-bold text-white"

>


{user.status==="Active"

?

<UserX size={14}/>

:

<UserCheck size={14}/>

}


{user.status==="Active"
?
"Suspend"
:
"Activate"
}


</button>





<button

onClick={()=>handleDelete(user.id!)}

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
