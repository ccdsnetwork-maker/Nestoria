import {
  doc,
  setDoc,
  getDoc,
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
){

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
