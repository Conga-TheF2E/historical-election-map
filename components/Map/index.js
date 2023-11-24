"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import Script from "next/script";
import D3Map from "./D3Map.js";

const svgSetting = {
  xl: (() => {
    if (typeof window !== "undefined") {
      return {
        width: 660,
        height: window.innerHeight,
        px: 40,
        size: "xl",
      };
    } else {
      // 在非瀏覽器環境下提供一個預設值
      return {
        width: 660,
        height: 750,
        size: "xl",
      };
    }
  })(),
  md: (() => {
    if (typeof window !== "undefined") {
      return {
        width: 550,
        height: window.innerHeight,
        px: 20,
        size: "md",
      };
    } else {
      // 在非瀏覽器環境下提供一個預設值
      return {
        width: 550,
        height: 650,
        size: "md",
      };
    }
  })(),
  sm: (() => {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        px: 0,
        size: "sm",
      };
    } else {
      // 在非瀏覽器環境下提供一個預設值
      return {
        width: 300, // 例如：預設寬度為300
        height: 400, // 預設高度為400
        size: "sm",
      };
    }
  })(),
};

function Map({ screenLevel, enteredSecondPage }) {
  const init = useRef(true);
  const [changeCssPosition, setChangeCssPosition] = useState(false);
  const [transformPosition, setTransformPosition] = useState({
    dx: 20,
    dy: 20,
    scale: 0.75,
  });

  useEffect(() => {
    // 進入地圖模式會回到原本的位置
    setTransformPosition({
      dx: enteredSecondPage ? 0 : 20,
      dy: enteredSecondPage ? 0 : 20,
      scale: enteredSecondPage ? 1 : 0.75,
    });
  }, [enteredSecondPage]);

  const handleCityClick = useCallback(
    (position) => {
      if (screenLevel === "sm") {
        setTransformPosition(position);
      } else {
        setChangeCssPosition(true);
      }
    },
    [screenLevel]
  );

  return (
    <section
      className={`absolute left-0 top-0  h-screen w-screen overflow-hidden ${
        enteredSecondPage ? "z-20" : "z-0"
      }`}
    >
      <div
        className={`container flex transform  items-center duration-300 ease-in will-change-transform`}
        style={{
          transform: `translate(${transformPosition.dx}px, ${transformPosition.dy}px) scale(${transformPosition.scale})`,
          padding: `0 ${svgSetting[screenLevel].px}px`,
          justifyContent: changeCssPosition ? "flex-end" : "center",
        }}
      >
        <D3Map
          svgSize={svgSetting[screenLevel]}
          onCityClick={handleCityClick}
        />
      </div>
      <Script src="https://unpkg.com/topojson@3" />
    </section>
  );
}

export default Map;
