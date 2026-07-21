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


export type User = {
  id: string;
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  gender?: string;
  dateOfBirth?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  occupation?: string;
  company?: string;
  bio?: string;
  photoURL?: string;
  role?: string;
  accountStatus?: string;
  createdAt?: any;
};


// Create user profile
export async function createUserProfile(
  uid: string,
  data: any
) {
  await setDoc(
    doc(db, "users", uid),
    {
      ...data,
      role: "customer",
      accountStatus: "active",
      createdAt: serverTimestamp(),
    },
    {
      merge: true,
    }
  );
}


// Get single user profile
export async function getUserProfile(
  uid: string
): Promise<User | null> {

  const snapshot = await getDoc(
    doc(db, "users", uid)
  );

  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data(),
    } as User;
  }

  return null;
}


// Update user profile
export async function updateUserProfile(
  uid: string,
  data: any
) {
  await setDoc(
    doc(db, "users", uid),
    {
      ...data,
      updatedAt: serverTimestamp(),
    },
    {
      merge: true,
    }
  );
}


// Admin: get all users
export async function getUsers(): Promise<User[]> {

  const snapshot = await getDocs(
    collection(db, "users")
  );

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  })) as User[];

}


// Admin: toggle user status
export async function toggleUserStatus(
  id: string,
  status: string
) {

  await updateDoc(
    doc(db, "users", id),
    {
      accountStatus: status,
      updatedAt: serverTimestamp(),
    }
  );

}


// Admin: delete user
export async function deleteUser(
  id: string
) {

  await deleteDoc(
    doc(db, "users", id)
  );

}
