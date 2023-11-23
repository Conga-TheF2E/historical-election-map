"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

function Navbar({ enteredSecondPage, setEnteredSecondPage }) {
  const root = useRef(null);

  // useEffect(() => {
  //   if (enteredSecondPage) {
  //     gsap.to(".title", { left: "300px", opacity: 0 });
  //   }
  // }, [enteredSecondPage]);

  return (
    <section
      className="fixed flex w-full items-center justify-end gap-4 px-5 py-2"
      ref={root}
    >
      {/* <h1 className="title text-4xl font-semibold">Conga 全台開票地圖</h1>
      <img src="/img/hamburger.svg" alt="" /> */}
    </section>
  );
}

export default Navbar;
