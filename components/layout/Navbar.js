"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

function Navbar({ enteredSecondPage, setEnteredSecondPage }) {
  const root = useRef(null);

  return (
    <section
      className="fixed flex w-full items-center justify-end gap-4 px-5 py-2"
      ref={root}
    ></section>
  );
}

export default Navbar;
