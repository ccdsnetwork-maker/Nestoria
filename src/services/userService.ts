import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";


export async function createUserProfile(
  uid:string,
  data:any
){

  await setDoc(
    doc(db,"users",uid),
    {
      ...data,
      role:"customer",
      accountStatus:"active",
      createdAt:serverTimestamp(),
    },
    {
      merge:true,
    }
  );

}
export async function getUserProfile(
  uid:string
): Promise<any>

{

  const snapshot = await getDoc(
    doc(db,"users",uid)
  );


  if(snapshot.exists()){

    return {
      id:snapshot.id,
      ...snapshot.data(),
    };

  }

  return null;

}



export async function updateUserProfile(
  uid:string,
  data:any
){

  await setDoc(
    doc(db,"users",uid),
    {
      ...data,
      updatedAt:serverTimestamp(),
    },
    {
      merge:true,
    }
  );

}



// ADMIN USERS MODULE FUNCTIONS


export async function getUsers(){

  const snapshot = await getDocs(
    collection(db,"users")
  );


  return snapshot.docs.map((item)=>({
    id:item.id,
    ...item.data(),
  }));

}



export async function toggleUserStatus(
  id:string,
  status:string
){

  await updateDoc(
    doc(db,"users",id),
    {
      accountStatus:
        status==="active"
        ? "inactive"
        : "active",
    }
  );

}



export async function deleteUser(
  id:string
){

  await deleteDoc(
    doc(db,"users",id)
  );

}
