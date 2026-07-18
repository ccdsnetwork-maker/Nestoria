"use client";

import { useState } from "react";

import Dashboard from "@/components/admin/modules/Dashboard";
import Properties from "@/components/admin/modules/Properties";
import Users from "@/components/admin/modules/Users";
import Membership from "@/components/admin/modules/Membership";
import Interiors from "@/components/admin/modules/Interiors";
import Content from "@/components/admin/modules/Content";
import Messages from "@/components/admin/modules/Messages";
import Settings from "@/components/admin/modules/Settings";


const menu = [
{ id:"dashboard", title:"Dashboard", icon:"📊" },
{ id:"properties", title:"Properties", icon:"🏠" },
{ id:"users", title:"Users", icon:"👥" },
{ id:"membership", title:"Membership Plans", icon:"💳" },
{ id:"interiors", title:"Interior Projects", icon:"🛋" },
{ id:"content", title:"Website Content", icon:"📝" },
{ id:"messages", title:"Messages", icon:"💬" },
{ id:"settings", title:"Settings", icon:"⚙️" },
];


export default function Admin(){

const [active,setActive]=useState("dashboard");


const handleClick=(id:string)=>{

setActive(id);

if(window.innerWidth < 768){

setTimeout(()=>{

document
.getElementById(id)
?.scrollIntoView({
behavior:"smooth",
block:"start"
});

},100);

}

};



const renderModule=()=>{

switch(active){

case "dashboard":
return <Dashboard />;

case "properties":
return <Properties />;

case "users":
return <Users />;

case "membership":
return <Membership />;

case "interiors":
return <Interiors />;

case "content":
return <Content />;

case "messages":
return <Messages />;

case "settings":
return <Settings />;

default:
return <Dashboard />;

}

};


return(

<main className="min-h-screen overflow-x-hidden bg-gray-100">


<div className="flex flex-col md:flex-row min-w-0">


<aside className="bg-[#0B2E6B] p-6 text-white md:min-h-screen md:w-72">


<h1 className="text-3xl font-extrabold">
Nestoria CMS
</h1>


<p className="mt-2 text-blue-100">
Administration Panel
</p>


<nav className="mt-8 space-y-3">

{menu.map(item=>(

<button
key={item.id}
onClick={()=>handleClick(item.id)}
className={`flex w-full items-center gap-3 rounded-lg p-3 text-left font-semibold ${
active===item.id
?
"bg-[#FFF700] text-[#0B2E6B]"
:
"hover:bg-white/10"
}`}
>

<span className="text-xl">
{item.icon}
</span>

{item.title}

</button>

))}

</nav>

</aside>



<section className="flex-1 min-w-0 overflow-hidden p-6 md:p-10">


<div className="hidden md:block w-full min-w-0">

{renderModule()}

</div>



<div className="block md:hidden space-y-12 w-full min-w-0">


<div id="dashboard">
<Dashboard />
</div>


<div id="properties">
<Properties />
</div>


<div id="users">
<Users />
</div>


<div id="membership">
<Membership />
</div>


<div id="interiors">
<Interiors />
</div>


<div id="content">
<Content />
</div>


<div id="messages">
<Messages />
</div>


<div id="settings">
<Settings />
</div>


</div>


</section>


</div>


</main>

);

}
