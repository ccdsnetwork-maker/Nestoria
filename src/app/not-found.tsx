"use client";

import Link from "next/link";

export default function NotFound(){

return(

<main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

<div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">


<div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#0B2E6B] text-4xl text-[#FFF700]">

404

</div>


<h1 className="mt-6 text-3xl font-extrabold text-[#0B2E6B]">

Page Not Found

</h1>


<p className="mt-4 text-gray-600">

The page you are looking for does not exist, has been moved,
or the link may be incorrect.

</p>


<div className="mt-6 rounded-xl bg-blue-50 p-4 text-left">


<p className="font-bold text-[#0B2E6B]">

Nestoria Error Code

</p>


<p className="mt-1 text-gray-600">

404 - Requested page unavailable

</p>


</div>



<Link

href="/"

className="mt-8 inline-block rounded-lg bg-[#FFF700] px-8 py-3 font-bold text-[#0B2E6B] transition active:scale-95"

>

Return Home

</Link>


</div>


</main>

);

}
