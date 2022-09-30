import React, { useCallback } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import ControlButton from "../../utilities/ControlButton";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { useForm } from "react-hook-form";

function UserProfile() {
  const auth = getAuth();
  const { register, handleSubmit, setValue } = useForm();
  setValue("displayName", auth.currentUser.displayName);
  const updateAllRegisteredProfileFields = async (data) => {
    console.log("expensive $");
    try {
      if (auth.currentUser.displayName !== data.displayName) {
        await updateProfile(auth.currentUser, {
          displayName: data.displayName,
        });
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          displayName: data.displayName,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-10/12 h-screen my-10">
      <header className="flex items-center justify-between">
        <p>
          You have authenticated! Welcome to your admin page{" "}
          <span className="text-regalBlue">{auth.currentUser.email}</span>
        </p>
      </header>
      <main className="my-4">
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(updateAllRegisteredProfileFields)}
        >
          <label>Current display name</label>
          <input
            {...register("displayName")}
            type="text"
            className="w-2/12 p-2 bg-blue-200 rounded-lg outline-none"
          />
          <ControlButton
            name="Update"
            className="w-2/12 px-5 text-white bg-blue-400 rounded-md shadow-xl hover:bg-blue-600"
          />
        </form>
      </main>
    </div>
  );
}

export default UserProfile;
