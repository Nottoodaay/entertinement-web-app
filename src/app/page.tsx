'use client'

import { useState } from "react";
import { LogIn } from "./components/LogIn";

export default function Home() {
  
  return (
    <main className="  bg-[#10141E] w-[100vw] h-[100vh] flex items-center justify-center">
      <LogIn/>
    </main>
  );
}
