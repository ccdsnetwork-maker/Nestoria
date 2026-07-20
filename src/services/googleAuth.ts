import { 
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult
} from "firebase/auth";

import auth from "@/lib/auth";


const provider = new GoogleAuthProvider();


export async function signInWithGoogle() {

  try {

    const result = await signInWithPopup(
      auth,
      provider
    );

    return result.user;

  } catch (error:any) {

    throw error;

  }

}



export async function getGoogleRedirectResult() {

  try {

    const result = await getRedirectResult(auth);

    return result;

  } catch (error:any) {

    console.error(error);

    return null;

  }

}
