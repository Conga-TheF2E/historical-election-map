"use client";
import React, {useState} from 'react';
import Navbar from "@/components/layout/Navbar";
import Index from "@/components/layout/Index";

export default function Home() {
  const [enteredSecondPage, setEnteredSecondPage] = useState(false);
  return (
    <main className="bg-gray100 font-GenSekiGothic-R overflow-hidden">
      <Navbar enteredSecondPage={enteredSecondPage} setEnteredSecondPage={setEnteredSecondPage}/>
      <Index enteredSecondPage={enteredSecondPage} setEnteredSecondPage={setEnteredSecondPage}/>
    </main>
  );
}
