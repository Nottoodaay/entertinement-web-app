import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export const Register = (props: {
  setDisplayComponent: (value: string) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (email: string, password: string) => {
    const signIn = createUserWithEmailAndPassword(auth, email, password);
    signIn
      .then((userCredental) => {
        const user = userCredental.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => console.log("succsess"));
    return signIn;
  };

  if (() => register(email, password)) redirect("/");

  return (
    <div>
      <div
        className="
        w-[328px] h-[366px]
        flex flex-col gap-[40px]
        bg-[#161D2F] rounded-xl
        pl-[24px]
        "
      >
        <h1 className=" text-[32px] text-[#FFFFFF] pt-[24px]">Register</h1>
        <div className=" flex flex-col gap-[24px]">
          <input
            className="
                 w-[280px] h-[38px] 
                  border-b border-[#5A698F]
                  text-[white] outline-none
                 bg-[#161D2F]
                 "
            type="text"
            placeholder=" Email Adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="
                 w-[280px] h-[38px] 
                  border-b border-[#5A698F]
                  text-[white] outline-none
                 bg-[#161D2F]
                 "
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className=" 
             w-[280px] h-[48px] 
             rounded-md 
             flex items-center justify-center
            bg-[#FC4747] text-[white]"
          onClick={() => register(email, password)}
        >
          Login to your account
        </button>
        <p onClick={() => props.setDisplayComponent("login")}>log in</p>
      </div>
    </div>
  );
};
