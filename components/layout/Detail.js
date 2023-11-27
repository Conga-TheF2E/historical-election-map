"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

function Navbar({ enteredSecondPage, setEnteredSecondPage }) {
  const root = useRef(null);

  return (
    <section
      className="relative mx-auto h-screen w-[348px] text-gray900 md:w-[768px] xl:w-[1320px]"
      ref={root}
    >
      <div className="absolute left-[34px] top-1/2 bg-gray100 px-7 py-[30px] "></div>
    </section>
  );
}

export default Navbar;
