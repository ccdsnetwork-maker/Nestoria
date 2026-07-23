"use client";

import { useEffect } from "react";

import Link from "next/link";


export default function ErrorPage({

error,

reset,

}:{

error:Error & {digest?:string};

reset:()=>void;

}){


useEffect(()=>{

console.error(error);

},[error]);



return(

<main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">


<div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">


<div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-4xl">

⚠️

</div>


<h1 className="mt-6 text-3xl font-extrabold text-[#0B2E6B]">

Something Went Wrong

</h1>


<p className="mt-4 text-gray-600">

Nestoria encountered an unexpected problem while loading this page.

</p>


<div className="mt-6 rounded-xl bg-gray-100 p-4 text-left">


<p className="font-bold text-[#0B2E6B]">

Error Details

</p>


<p className="mt-2 text-sm text-gray-600">

{error.message || "Unknown system error"}

</p>


</div>



<div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">


<button

onClick={()=>reset()}

className="rounded-lg bg-[#0B2E6B] px-6 py-3 font-bold text-white transition active:scale-95"

>

Try Again

</button>



<Link

href="/"

className="rounded-lg bg-[#FFF700] px-6 py-3 font-bold text-[#0B2E6B] transition active:scale-95"

>

Home

</Link>


</div>


</div>


</main>

);

}
