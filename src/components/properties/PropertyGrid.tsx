"use client";

import { useEffect, useState } from "react";

import PropertyCard from "@/components/home/Featured/PropertyCard";

import Pagination from "@/components/ui/Pagination";

import {
  getProperties,
  Property,
} from "@/services/propertyService";


const ITEMS_PER_PAGE = 6;


export default function PropertyGrid(){


const [properties,setProperties] = useState<Property[]>([]);

const [currentPage,setCurrentPage] = useState(1);

const [loading,setLoading] = useState(true);



useEffect(()=>{


async function loadProperties(){

const data = await getProperties();

setProperties(data);

setLoading(false);

}


loadProperties();


},[]);




if(loading){

return (

<div className="rounded-xl bg-white p-6 text-center shadow">

Loading properties...

</div>

);

}



const totalPages = Math.max(

1,

Math.ceil(properties.length / ITEMS_PER_PAGE)

);



const start =
(currentPage - 1) * ITEMS_PER_PAGE;



const currentProperties =
properties.slice(
start,
start + ITEMS_PER_PAGE
);





return (

<>


<div className="mb-4 flex flex-wrap gap-3 rounded-lg bg-white px-4 py-3 text-sm text-[#0B2E6B] shadow-sm md:mb-6">


<span>

Total Properties: {properties.length}

</span>


<span>|</span>


<span>

Showing: {currentProperties.length}

</span>


<span>|</span>


<span>

Page: {currentPage} of {totalPages}

</span>


</div>





<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">


{currentProperties.map((property)=>(


<PropertyCard

key={property.id}

property={property as any}

/>


))}


</div>





<Pagination

currentPage={currentPage}

totalPages={totalPages}

onPageChange={setCurrentPage}

/>



</>

);


}
