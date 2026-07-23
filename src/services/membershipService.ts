import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export type MembershipPlan = {
  id?: string;
  name: string;
  price: string;
  listings: string;
  subscribers: number;
  status: string;
};

export async function getPlans() {
  const snapshot = await getDocs(collection(db, "membershipPlans"));

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  })) as MembershipPlan[];
}

export async function addPlan(plan: MembershipPlan) {
  await addDoc(collection(db, "membershipPlans"), plan);
}

export async function deletePlan(id: string) {
  await deleteDoc(doc(db, "membershipPlans", id));
}

export async function togglePlanStatus(
  id: string,
  currentStatus: string
) {
  await updateDoc(doc(db, "membershipPlans", id), {
    status: currentStatus === "Active" ? "Inactive" : "Active",
  });
}

export async function updateUserMembership(
  userId: string,
  data: Record<string, any>
) {
  const ref = doc(db, "users", userId);

  const snapshot = await getDoc(ref);

  if (snapshot.exists()) {
    await updateDoc(ref, data);
  } else {
    await setDoc(ref, data, { merge: true });
  }
}
