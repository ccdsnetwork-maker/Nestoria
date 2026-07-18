"use client";

import { useState } from "react";


export default function Settings(){


const [settings,setSettings]=useState({

company:"Nestoria Interiors & Properties",
email:"nestoriainteriorsandproperties@gmail.com",
phone:"08029651803",
facebook:"",
instagram:"",
twitter:"",
payment:"Flutterwave",
firebase:"Connected",
maintenance:false

});



return(

<div className="w-full min-w-0">


<h2 className="text-3xl font-extrabold text-[#0B2E6B]">
System Settings
</h2>


<p className="mt-2 text-gray-600">
Manage website configuration and security.
</p>





<div className="mt-8 grid gap-6 lg:grid-cols-2">





<div className="rounded-xl bg-white p-6 shadow-md">

<h3 className="text-xl font-bold text-[#0B2E6B]">
Company Profile
</h3>


<div className="mt-5 space-y-4">


<input
value={settings.company}
onChange={(e)=>setSettings({...settings,company:e.target.value})}
className="w-full rounded-lg border p-3"
placeholder="Company name"
/>



<input
value={settings.email}
onChange={(e)=>setSettings({...settings,email:e.target.value})}
className="w-full rounded-lg border p-3"
placeholder="Email"
/>



<input
value={settings.phone}
onChange={(e)=>setSettings({...settings,phone:e.target.value})}
className="w-full rounded-lg border p-3"
placeholder="Phone"
/>


</div>

</div>







<div className="rounded-xl bg-white p-6 shadow-md">

<h3 className="text-xl font-bold text-[#0B2E6B]">
Social Media
</h3>


<div className="mt-5 space-y-4">


<input
className="w-full rounded-lg border p-3"
placeholder="Facebook URL"
/>



<input
className="w-full rounded-lg border p-3"
placeholder="Instagram URL"
/>



<input
className="w-full rounded-lg border p-3"
placeholder="Twitter URL"
/>


</div>


</div>







<div className="rounded-xl bg-white p-6 shadow-md">


<h3 className="text-xl font-bold text-[#0B2E6B]">
Payment Settings
</h3>


<p className="mt-4">
Gateway:
<span className="ml-2 font-semibold">
{settings.payment}
</span>
</p>


<button className="mt-5 rounded-lg bg-[#0B2E6B] px-4 py-2 text-sm font-bold text-white">
Update Payment
</button>


</div>







<div className="rounded-xl bg-white p-6 shadow-md">


<h3 className="text-xl font-bold text-[#0B2E6B]">
Firebase Settings
</h3>


<p className="mt-4">
Database Status:
<span className="ml-2 font-semibold text-green-600">
{settings.firebase}
</span>
</p>


<button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white">
Configure Firebase
</button>


</div>







<div className="rounded-xl bg-white p-6 shadow-md">


<h3 className="text-xl font-bold text-[#0B2E6B]">
Security
</h3>


<label className="mt-5 flex items-center gap-3">

<input
type="checkbox"
checked={settings.maintenance}
onChange={(e)=>setSettings({
...settings,
maintenance:e.target.checked
})}
/>

Enable Maintenance Mode

</label>


<button className="mt-5 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white">
Security Audit
</button>


</div>







<div className="rounded-xl bg-white p-6 shadow-md">


<h3 className="text-xl font-bold text-[#0B2E6B]">
Backup & Restore
</h3>


<div className="mt-5 flex flex-wrap gap-3">


<button className="rounded-lg bg-[#0B2E6B] px-4 py-2 text-sm font-bold text-white">
Create Backup
</button>


<button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white">
Restore
</button>


</div>


</div>







<div className="rounded-xl bg-white p-6 shadow-md lg:col-span-2">


<h3 className="text-xl font-bold text-[#0B2E6B]">
Roles & Permissions
</h3>


<div className="mt-5 grid gap-4 md:grid-cols-3">


<div className="rounded-lg border p-4">
<h4 className="font-bold">
Admin
</h4>
<p className="text-sm text-gray-600">
Full platform access
</p>
</div>



<div className="rounded-lg border p-4">
<h4 className="font-bold">
Agent
</h4>
<p className="text-sm text-gray-600">
Property management access
</p>
</div>



<div className="rounded-lg border p-4">
<h4 className="font-bold">
Designer
</h4>
<p className="text-sm text-gray-600">
Interior project access
</p>
</div>


</div>


</div>



</div>





<button className="mt-8 rounded-lg bg-[#FFF700] px-6 py-3 text-sm font-bold text-[#0B2E6B]">
Save Settings
</button>



</div>

);

}
