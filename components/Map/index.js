"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import Script from "next/script";
import D3Map from "./D3Map.js";

function Map({ screenLevel, enteredSecondPage }) {
  const [changeCssPosition, setChangeCssPosition] = useState(false);
  const [transformPosition, setTransformPosition] = useState({
    dx: 20,
    dy: 20,
    scale: 0.75,
  });
  const [svgSize, setSvgSize] = useState({
    width: 660,
    height: 750,
    mr: 60,
    size: "xl",
  });

  const svgSetting = useCallback((currentScreenLevel) => {
    if (currentScreenLevel === "xl") {
      return {
        width: 660,
        height: window?.innerHeight || 750,
        mr: 60,
        size: "xl",
      };
    } else if (currentScreenLevel === "md") {
      return {
        width: 550,
        height: window?.innerHeight - 84 || 650,
        mr: 20,
        mt: 84,
        top: 45,
        size: "md",
      };
    } else {
      return {
        width: 300,
        height: window?.innerHeight - 84 || 500,
        mr: 20,
        mt: 84,
        size: "sm",
      };
    }
  }, []);

  useEffect(() => {
    setSvgSize(svgSetting(screenLevel));
  }, [screenLevel]);

  useEffect(() => {
    // 進入地圖模式會回到原本的位置
    setTransformPosition({
      dx: enteredSecondPage ? 0 : 20,
      dy: enteredSecondPage ? 0 : 20,
      scale: enteredSecondPage ? 1 : 0.75,
    });

    if (!enteredSecondPage) {
      setChangeCssPosition(false);
    }
  }, [enteredSecondPage]);

  const handleCityClick = useCallback(
    (position) => {
      if (screenLevel === "sm") {
        setTransformPosition(position);
      } else {
        if (screenLevel === "md") {
          setTransformPosition({
            dx: 0,
            dy: 0,
            scale: 0.9,
          });
        }
        setChangeCssPosition(true);
      }
    },
    [screenLevel]
  );

  const mapPositionMode = {
    common: "top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 ",
    xl: "top-1/2 right-0 translate-x-0 -translate-y-1/2 ",
    md: "top-1/2 right-0 translate-x-0 -translate-y-1/2 ",
  };

  return (
    <section
      className={`absolute left-0 top-0  h-screen w-screen overflow-hidden ${
        enteredSecondPage ? "z-20" : "z-0"
      }`}
    >
      <div
        className={`container relative h-screen transform duration-150 ease-in will-change-transform`}
        style={{
          transform: `translate(${transformPosition.dx}px, ${transformPosition.dy}px) scale(${transformPosition.scale})`,
        }}
      >
        <section
          className={`
           will-change-right-top-transform absolute top-1/2 h-screen -translate-y-1/2 transition-all delay-75 duration-100 ease-in
            ${
              changeCssPosition
                ? mapPositionMode[screenLevel]
                : mapPositionMode.common
            }
        `}
          style={{
            top: changeCssPosition && `calc( 50% - ${svgSize.top || 0}px )`,
            marginRight: changeCssPosition && `${svgSize.mr || 0}px`,
            marginTop: `${svgSize.mt || 0}px`,
          }}
        >
          <D3Map
            svgSize={svgSize}
            onCityClick={handleCityClick}
            enteredSecondPage={enteredSecondPage}
          />
        </section>
      </div>
    </section>
  );
}

export default Map;
