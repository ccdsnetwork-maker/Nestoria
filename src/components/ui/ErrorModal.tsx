"use client";

type ErrorModalProps = {
  message:string;
  onClose:()=>void;
};


export default function ErrorModal({
  message,
  onClose,
}:ErrorModalProps){


return(

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">


<div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">


<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-4xl">

⚠️

</div>



<h2 className="mt-5 text-2xl font-extrabold text-[#0B2E6B]">

Something Went Wrong

</h2>



<p className="mt-3 text-gray-600">

{message}

</p>



<div className="mt-6 rounded-xl bg-blue-50 p-4 text-left">


<p className="font-bold text-[#0B2E6B]">

Nestoria Support

</p>


<p className="mt-1 text-sm text-gray-600">

Please check your connection and try again.

</p>


</div>



<button

onClick={onClose}

className="mt-6 w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B] transition active:scale-95"

>

Close

</button>



</div>


</div>

);

}
