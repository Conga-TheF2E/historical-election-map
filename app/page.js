"use client";
import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

import Navbar from "@/components/layout/Navbar";
import Index from "@/components/layout/Index";
import Map from "@/components/Map";

const sizeSetting = {
  desktop: 1280,
  tablet: 768,
};

export default function Home() {
  const [enteredSecondPage, setEnteredSecondPage] = useState(false);
  const [screenLevel, setScreenLevel] = useState("xl");

  const detectWindowWidth = () => {
    const w = window.innerWidth;
    if (w >= sizeSetting.desktop) {
      return "xl";
    } else if (w >= sizeSetting.tablet) {
      return "md";
    } else {
      return "sm";
    }
  };

  useEffect(() => {
    setScreenLevel(detectWindowWidth());
    const handleResize = debounce(() => {
      setScreenLevel(detectWindowWidth());
    }, 200);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="overflow-hidden bg-gray100 font-GenSekiGothic-R">
      <Map screenLevel={screenLevel} enteredSecondPage={enteredSecondPage} />
      <Index
        enteredSecondPage={enteredSecondPage}
        setEnteredSecondPage={setEnteredSecondPage}
        screenLevel={screenLevel}
      />
    </main>
  );
}
