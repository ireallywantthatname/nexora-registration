"use server";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { FormFields } from "@/lib/formTypes";

// Initialize Firebase once
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function handleFormSubmission(data: FormFields) {
  const teamNameSnapshot = await getDocs(
    query(collection(db, "users"), where("team_name", "==", data.team_name))
  );

  const leaderEmailSnapshot = await getDocs(
    query(
      collection(db, "users"),
      where("leader_email", "==", data.leader_email)
    )
  );

  const member1EmailSnapshot = await getDocs(
    query(
      collection(db, "users"),
      where("member1_email", "==", data.member1_email)
    )
  );

  const member2EmailSnapshot = await getDocs(
    query(
      collection(db, "users"),
      where("member2_email", "==", data.member2_email)
    )
  );

  if (!teamNameSnapshot.empty) {
    return { success: false, error: "Team name already exists" };
  }

  if (!leaderEmailSnapshot.empty) {
    return { success: false, error: "Leader email already exists" };
  }

  if (!member1EmailSnapshot.empty) {
    return { success: false, error: "Member 1 email already exists" };
  }

  if (!member2EmailSnapshot.empty) {
    return { success: false, error: "Member 2 email already exists" };
  }

  try {
    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Document written with ID: ", docRef.id);
    return { success: true };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, error: "Failed to add document" };
  }
}
