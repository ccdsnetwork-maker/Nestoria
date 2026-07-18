import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";


export type Property = {

id?: string;

title:string;

description?:string;

location:string;

price:string;

image:string;

images?:string[];

type:string;

category:string;

featured:boolean;

verified:boolean;

beds:number;

baths:number;

parking:number;

area:string;

features:string[];

agent:string;

agentId?:string;

ownerId?:string;

status:string;

createdAt?:any;

};




const propertyCollection =
collection(db,"properties");





export async function addProperty(
property:Property
){

const docRef =
await addDoc(
propertyCollection,
{
...property,

status:
property.status || "Pending",

createdAt:serverTimestamp(),

}
);


return docRef.id;

}





export async function getProperties(){

const q =
query(
propertyCollection,
orderBy("createdAt","desc")
);


const snapshot =
await getDocs(q);


return snapshot.docs.map((item)=>({

id:item.id,

...item.data(),

})) as Property[];

}





export async function getFeaturedProperties(){

const q =
query(

propertyCollection,

where("featured","==",true),

where("status","==","Approved"),

limit(6)

);


const snapshot =
await getDocs(q);


return snapshot.docs.map((item)=>({

id:item.id,

...item.data(),

})) as Property[];

}





export async function getPropertyById(
id:string
){

const snapshot =
await getDoc(
doc(db,"properties",id)
);


if(!snapshot.exists()){

return null;

}


return {

id:snapshot.id,

...snapshot.data(),

} as Property;

}





export async function updateProperty(
id:string,

data:Partial<Property>

){

await updateDoc(

doc(db,"properties",id),

data

);

}





export async function deleteProperty(
id:string
){

await deleteDoc(

doc(db,"properties",id)

);

}





export async function approveProperty(
id:string
){

await updateDoc(

doc(db,"properties",id),

{

status:"Approved"

}

);

}





export async function toggleFeatured(

id:string,

featured:boolean

){

await updateDoc(

doc(db,"properties",id),

{

featured

}

);

}
