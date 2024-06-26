import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export const LogIn = (props: {
  setDisplayComponent: (value: string) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<string | null>("");

  const login = async (email: string, password: string) => {
    const signIn = signInWithEmailAndPassword(auth, email, password);
    signIn
      .then((userCredental) => {
        const user = userCredental.user;
        setCurrentUser(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    return signIn;
  };

  useEffect(() => {
    if (currentUser && currentUser.length > 1) redirect("/dashboard");
  }, [currentUser]);

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
        <h1 className=" text-[32px] text-[#FFFFFF] pt-[24px]">Login</h1>
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
          onClick={() => login(email, password)}
        >
          Login to your account
        </button>
        <p onClick={() => props.setDisplayComponent("register")}>register</p>
      </div>
    </div>
  );
};
