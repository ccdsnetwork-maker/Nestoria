import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function createUserProfile(
  uid: string,
  data: {
    fullName: string;
    phone: string;
    email: string;
  }
) {
  await setDoc(
    doc(db, "users", uid),
    {
      ...data,
      role: "customer",
      accountStatus: "active",
      createdAt: serverTimestamp(),
    }
  );
}
