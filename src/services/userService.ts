import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";


export type User = {

id?: string;

name:string;

email:string;

role:string;

status:string;

createdAt?:any;

};



const userCollection = collection(db,"users");



export async function getUsers(){

const snapshot = await getDocs(userCollection);


return snapshot.docs.map((item)=>({

id:item.id,

...item.data(),

})) as User[];

}





export async function addUser(user:User){

const docRef = await addDoc(
userCollection,
{
...user,
createdAt:serverTimestamp(),
}
);


return docRef.id;

}





export async function updateUser(
id:string,
data:Partial<User>
){

await updateDoc(
doc(db,"users",id),
data
);

}





export async function deleteUser(
id:string
){

await deleteDoc(
doc(db,"users",id)
);

}





export async function toggleUserStatus(
id:string,
status:string
){

await updateDoc(
doc(db,"users",id),
{
status
}
);

}
