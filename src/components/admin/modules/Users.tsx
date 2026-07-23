"use client";

import { useEffect, useState } from "react";

import {
  Search,
  Trash2,
  UserCheck,
  UserX,
  Edit,
  Eye,
  X,
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

const [selectedUser,setSelectedUser]=useState<User | null>(null);



const loadUsers=async()=>{

try{

const data=await getUsers();

setUsers(data);

}catch(error){

console.log(error);

}finally{

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
status==="Active"
?
"Suspended"
:
"Active"
);

loadUsers();

};




const handleDelete=async(
id:string
)=>{

const confirmDelete = window.confirm(
"Are you sure you want to delete this user?"
);


if(!confirmDelete) return;


await deleteUser(id);

loadUsers();

};




const filteredUsers=users.filter(
(user)=>

(user.fullName || "")
.toLowerCase()
.includes(search.toLowerCase())

||

(user.email || "")
.toLowerCase()
.includes(search.toLowerCase())

);



return(

<div className="w-full min-w-0">


<h2 className="text-3xl font-extrabold text-[#0B2E6B]">

User Management

</h2>


<p className="mt-2 text-gray-600">

Manage Nestoria users and account access.

</p>



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





<div className="mt-8 overflow-x-auto rounded-xl bg-white shadow-md">


<table className="min-w-[1100px] w-full">


<thead className="bg-[#0B2E6B] text-white">


<tr>


<th className="p-4 text-left">
Name
</th>


<th className="p-4 text-left">
Email
</th>


<th className="p-4 text-left">
Phone
</th>


<th className="p-4 text-left">
Location
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
colSpan={7}
className="p-5 text-center"
>

Loading users...

</td>

</tr>

)}



{!loading && filteredUsers.length===0 && (

<tr>

<td
colSpan={7}
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

{user.phone || "-"}

</td>


<td className="p-4">

{user.location || "-"}

</td>


<td className="p-4">

{user.role || "customer"}

</td>


<td className="p-4 font-bold">

{user.accountStatus || "Active"}

</td>
<td className="p-4">

<div className="flex flex-wrap gap-2">


<button

onClick={()=>setSelectedUser(user)}

className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white transition-all duration-200 hover:brightness-110 hover:shadow-md active:scale-95"

>

<Eye size={14}/>

View

</button>




<button

className="flex items-center gap-1 rounded-lg bg-gray-700 px-3 py-2 text-xs font-bold text-white transition-all duration-200 hover:brightness-110 hover:shadow-md active:scale-95"

>

<Edit size={14}/>

Edit

</button>





<button

onClick={()=>handleStatus(
user.id,
user.accountStatus || "Active"
)}

className="flex items-center gap-1 rounded-lg bg-[#0B2E6B] px-3 py-2 text-xs font-bold text-white transition-all duration-200 hover:brightness-125 hover:shadow-md active:scale-95"

>


{
(user.accountStatus || "Active")==="Active"

?

<UserX size={14}/>

:

<UserCheck size={14}/>

}



{
(user.accountStatus || "Active")==="Active"

?

"Suspend"

:

"Activate"

}


</button>





<button

onClick={()=>handleDelete(user.id)}

className="flex items-center gap-1 rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white transition-all duration-200 hover:brightness-110 hover:shadow-md active:scale-95"

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






{
selectedUser && (

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">


<div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">


<div className="flex items-center justify-between">


<h2 className="text-2xl font-extrabold text-[#0B2E6B]">

User Details

</h2>



<button

onClick={()=>setSelectedUser(null)}

className="rounded-full p-2 transition-all hover:bg-gray-100 active:scale-90"

>

<X size={20}/>

</button>


</div>



<div className="mt-5 space-y-3 text-gray-700">


<p>
<strong>Name:</strong> {selectedUser.fullName || "-"}
</p>


<p>
<strong>Email:</strong> {selectedUser.email || "-"}
</p>


<p>
<strong>Phone:</strong> {selectedUser.phone || "-"}
</p>


<p>
<strong>Location:</strong> {selectedUser.location || "-"}
</p>


<p>
<strong>Address:</strong> {selectedUser.address || "-"}
</p>


<p>
<strong>City:</strong> {selectedUser.city || "-"}
</p>


<p>
<strong>State:</strong> {selectedUser.state || "-"}
</p>


<p>
<strong>Country:</strong> {selectedUser.country || "-"}
</p>


<p>
<strong>Occupation:</strong> {selectedUser.occupation || "-"}
</p>


<p>
<strong>Company:</strong> {selectedUser.company || "-"}
</p>


<p>
<strong>Gender:</strong> {selectedUser.gender || "-"}
</p>


<p>
<strong>Membership:</strong> {selectedUser.membershipPlan || "Basic"}
</p>


<p>
<strong>Status:</strong> {selectedUser.membershipStatus || "Active"}
</p>


<p>
<strong>Billing:</strong> {selectedUser.billingCycle || "-"}
</p>


</div>




<button

onClick={()=>setSelectedUser(null)}

className="mt-6 w-full rounded-lg bg-[#0B2E6B] py-3 font-bold text-white transition-all duration-200 hover:brightness-125 active:scale-95"

>

Close

</button>


</div>


</div>

)

}



</div>

);

}
