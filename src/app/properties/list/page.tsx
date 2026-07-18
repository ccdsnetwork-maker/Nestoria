"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import BackButton from "@/components/layout/BackButton";
import ImageUpload from "@/components/properties/ImageUpload";
import SearchSelect from "@/components/properties/SearchSelect";
import AmenitiesCheckbox from "@/components/properties/AmenitiesCheckbox";

import {
propertyTypes,
listingTypes,
bedroomOptions,
bathroomOptions,
} from "@/utils/propertyOptions";

import {
nigeriaLocations,
} from "@/utils/nigeriaLocations";

import {
addProperty,
} from "@/services/propertyService";


export default function ListProperty(){

const router = useRouter();

const searchParams = useSearchParams();


const backPage =
searchParams.get("from") || "/properties";


const [selectedState,setSelectedState]=useState("");

const [selectedCity,setSelectedCity]=useState("");

const [images,setImages]=useState<string[]>([]);


const [form,setForm]=useState({

title:"",
type:"",
listingType:"",
price:"",
location:"",
description:"",
beds:"",
baths:"",
parking:"",
area:"",
agent:"",
phone:"",

});


const [error,setError]=useState("");



const states =
nigeriaLocations.map(
(item)=>item.name
);



const cities =
nigeriaLocations
.find(item=>item.name===selectedState)
?.cities.map(city=>city.name) || [];



const lgas =
nigeriaLocations
.find(item=>item.name===selectedState)
?.cities.find(city=>city.name===selectedCity)
?.lgas || [];




async function handleSubmit(e:any){

e.preventDefault();


const required = [

form.title,
form.type,
form.listingType,
form.location,
form.description,
form.price,
form.beds,
form.baths,
form.agent,
form.phone,

];


if(required.some(item=>!item) || images.length===0){

setError(
"Please complete all required fields and upload at least one photo."
);

return;

}



await addProperty({

title:form.title,

description:form.description,

location:form.location,

price:form.price,

image:images[0],

images,

type:form.type,

category:form.type,

featured:false,

verified:false,

beds:Number(form.beds),

baths:Number(form.baths),

parking:form.parking==="Yes" ? 1 : 0,

area:form.area,

features:[],

agent:form.agent,

status:"Pending",

});



router.push(

`/feedback?title=Your property has been listed successfully&message=Your property is now under review by Nestoria. Click OK to return.&back=${backPage}`

);


}



return (

<main className="min-h-screen bg-gray-100 py-10 md:py-20">


<div className="mx-auto max-w-4xl px-4 md:px-6">


<BackButton />


<h1 className="text-3xl font-extrabold text-[#0B2E6B] md:text-5xl">

List Your Property

</h1>


<p className="mt-3 text-sm text-gray-600 md:text-base">

Provide accurate details about your property and connect with genuine buyers and renters through Nestoria.

</p>


<p className="mt-3 text-sm italic text-gray-500">

<span className="text-red-600">*</span> Fields marked with an asterisk are required.

</p>


{error && (

<p className="mt-5 rounded-lg bg-red-100 p-3 text-sm text-red-700">

{error}

</p>

)}


<form

onSubmit={handleSubmit}

className="mt-6 space-y-5 rounded-xl bg-white p-5 shadow-md md:rounded-2xl md:p-8"

>


<div>

<label className="mb-1 block text-sm font-semibold">

Property Title <span className="text-red-600">*</span>

</label>

<input

required

placeholder="Property Title"

className="w-full rounded-lg border p-3 text-sm"

onChange={(e)=>setForm({...form,title:e.target.value})}

/>

</div>


<div className="grid gap-4 md:grid-cols-2">


<div>

<label className="mb-1 block text-sm font-semibold">

Property Type <span className="text-red-600">*</span>

</label>

<SearchSelect

label="Property Type"

options={propertyTypes}

onSelect={(value)=>setForm({...form,type:value})}

/>

</div>


<div>

<label className="mb-1 block text-sm font-semibold">

Listing Type <span className="text-red-600">*</span>

</label>

<SearchSelect

label="Listing Type"

options={listingTypes}

onSelect={(value)=>setForm({...form,listingType:value})}

/>

</div>


</div>


<div>

<label className="mb-1 block text-sm font-semibold">

Price <span className="text-red-600">*</span>

</label>

<input

required

type="number"

placeholder="Price"

className="w-full rounded-lg border p-3 text-sm"

onChange={(e)=>setForm({...form,price:e.target.value})}

/>

</div>
<div className="grid gap-4 md:grid-cols-3">


<div>

<label className="mb-1 block text-sm font-semibold">

State

</label>

<SearchSelect

label="State"

options={states}

onSelect={(value)=>{

setSelectedState(value);

setSelectedCity("");

}}

/>

</div>



<div>

<label className="mb-1 block text-sm font-semibold">

City

</label>

<SearchSelect

label="City"

options={cities}

disabled={!selectedState}

onSelect={(value)=>setSelectedCity(value)}

/>

</div>



<div>

<label className="mb-1 block text-sm font-semibold">

Local Government

</label>

<SearchSelect

label="Local Government"

options={lgas}

disabled={!selectedCity}

/>

</div>


</div>



<div>

<label className="mb-1 block text-sm font-semibold">

Location / Full Address <span className="text-red-600">*</span>

</label>

<input

required

placeholder="Property Location / Full Address"

className="w-full rounded-lg border p-3 text-sm"

onChange={(e)=>setForm({...form,location:e.target.value})}

/>

</div>




<div>

<label className="mb-1 block text-sm font-semibold">

Description <span className="text-red-600">*</span>

</label>


<textarea

required

placeholder="Detailed Property Description"

className="h-36 w-full rounded-lg border p-3 text-sm"

onChange={(e)=>setForm({...form,description:e.target.value})}

/>

</div>




<div className="grid gap-4 md:grid-cols-3">


<div>

<label className="mb-1 block text-sm font-semibold">

Bedrooms <span className="text-red-600">*</span>

</label>


<SearchSelect

label="Bedrooms"

options={bedroomOptions}

onSelect={(value)=>setForm({...form,beds:value})}

/>

</div>



<div>

<label className="mb-1 block text-sm font-semibold">

Bathrooms <span className="text-red-600">*</span>

</label>


<SearchSelect

label="Bathrooms"

options={bathroomOptions}

onSelect={(value)=>setForm({...form,baths:value})}

/>

</div>



<div>

<label className="mb-1 block text-sm font-semibold">

Parking Space

</label>


<select

className="w-full rounded-lg border p-3 text-sm"

onChange={(e)=>setForm({...form,parking:e.target.value})}

>

<option value="">

Select Parking

</option>

<option value="Yes">

Yes

</option>

<option value="No">

No

</option>

</select>


</div>


</div>




<input

placeholder="Property Size (sqm)"

className="w-full rounded-lg border p-3 text-sm"

onChange={(e)=>setForm({...form,area:e.target.value})}

/>




<AmenitiesCheckbox />




<div>

<label className="mb-1 block text-sm font-semibold">

Property Images <span className="text-red-600">*</span>

</label>


<ImageUpload

onImagesChange={setImages}

/>


</div>





<div className="grid gap-4 md:grid-cols-2">



<div>

<label className="mb-1 block text-sm font-semibold">

Owner/Agent Name <span className="text-red-600">*</span>

</label>


<input

required

placeholder="Owner/Agent Name"

className="rounded-lg border p-3 text-sm"

onChange={(e)=>setForm({...form,agent:e.target.value})}

/>


</div>




<div>

<label className="mb-1 block text-sm font-semibold">

Phone Number <span className="text-red-600">*</span>

</label>


<input

required

type="tel"

placeholder="Phone Number"

className="rounded-lg border p-3 text-sm"

onChange={(e)=>setForm({...form,phone:e.target.value})}

/>


</div>


</div>





<button

type="submit"

className="w-full rounded-lg bg-[#FFF700] py-3 font-bold text-[#0B2E6B]"

>

Submit Property

</button>



</form>


</div>


</main>

);

}
