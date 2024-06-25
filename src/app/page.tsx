"use client";

import { useState } from "react";
import { LogIn } from "./components/LogIn";
import { Register } from "./components/Register";

export default function Home() {
  const [displayComponent, setDisplayComponent] = useState("login");

  return (
    <main className="  bg-[#10141E] w-[100vw] h-[100vh] flex items-center justify-center">
      {displayComponent === "login" ? (
        <LogIn setDisplayComponent={setDisplayComponent} />
      ) : (
        <Register setDisplayComponent={setDisplayComponent} />
      )}
    </main>
  );
}
