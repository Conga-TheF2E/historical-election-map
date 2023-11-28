"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { debounce } from "lodash";

import Navbar from "@/components/layout/Navbar";
import Index from "@/components/layout/Index";
import Detail from "@/components/layout/Detail";
import Map from "@/components/Map";

const sizeSetting = {
  desktop: 1280,
  tablet: 768,
};

export default function Home() {
  const [enteredSecondPage, setEnteredSecondPage] = useState(false);
  const [screenLevel, setScreenLevel] = useState(null);
  const [cityCode, setCityCode] = useState("");
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [cityDetail, setCityDetail] = useState(null);
  const [mapMode, setMapMode] = useState("common"); // 'common' | 'blue' | 'green' | 'orange'

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

  useLayoutEffect(() => {
    setScreenLevel(detectWindowWidth());
  });
  useEffect(() => {
    fetch("/api/cityDetail?year=2020")
      .then((res) => res.json())
      .then((data) => {
        setCityDetail(data);
      });

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
      <Map
        screenLevel={screenLevel}
        enteredSecondPage={enteredSecondPage}
        cityDetail={cityDetail}
        setIsMapLoading={setIsMapLoading}
        setCityCode={setCityCode}
        cityCode={cityCode}
        mapMode={mapMode}
        setMapMode={setMapMode}
      />
      <Index
        enteredSecondPage={enteredSecondPage}
        setEnteredSecondPage={setEnteredSecondPage}
        screenLevel={screenLevel}
        cityDetail={cityDetail}
        mapMode={mapMode}
        setMapMode={setMapMode}
      />
    </main>
  );
}
