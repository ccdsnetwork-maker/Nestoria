import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";


export type MembershipPlan = {

  id?: string;

  name: string;

  price: string;

  subscribers: number;

  listings: string;

  status: string;

  discount?: string;

  createdAt?: any;

};



const membershipCollection =
collection(db,"membershipPlans");



export async function getPlans(){

  const snapshot =
  await getDocs(membershipCollection);


  return snapshot.docs.map((item)=>({

    id:item.id,

    ...item.data(),

  })) as MembershipPlan[];

}





export async function addPlan(
  plan:MembershipPlan
){

  const docRef =
  await addDoc(
    membershipCollection,
    {
      ...plan,
      createdAt:serverTimestamp(),
    }
  );


  return docRef.id;

}





export async function updatePlan(
  id:string,
  data:Partial<MembershipPlan>
){

  await updateDoc(
    doc(db,"membershipPlans",id),
    data
  );

}





export async function deletePlan(
  id:string
){

  await deleteDoc(
    doc(db,"membershipPlans",id)
  );

}





export async function togglePlanStatus(
  id:string,
  status:string
){

  await updateDoc(
    doc(db,"membershipPlans",id),
    {
      status:
      status==="Active"
      ?
      "Inactive"
      :
      "Active"
    }
  );

}





export async function updateUserMembership(
  uid:string,
  membership:any
){

  const userRef = doc(
    db,
    "users",
    uid
  );


  await setDoc(
    userRef,
    {
      ...membership,
      membershipUpdatedAt:serverTimestamp(),
    },
    {
      merge:true
    }
  );

}
