"use client";
import React, { useState, useCallback, useEffect } from "react";
import D3Map from "./D3Map.js";
import MapBg from "./MapBg.js";
import ColorBar from "./ColorBar.js";

const mapPositionMode = {
  common: "top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 ",
  xl: "top-1/2 right-0 translate-x-0 -translate-y-1/2 ",
  md: "top-1/2 right-0 translate-x-0 -translate-y-1/2 ",
};

function Map({
  screenLevel,
  enteredSecondPage,
  setIsMapLoading,
  cityDetail,
  setCityCode,
  cityCode,
  mapMode,
  setMapMode,
}) {
  const [selectedCity, setSelectedCity] = useState(null);
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
        mr: -90,
        mt: 84,
        top: 110,
        size: "md",
      };
    } else {
      return {
        width: 300,
        height: window?.innerHeight - 84 || 500,
        mt: 84,
        size: "sm",
      };
    }
  }, []);

  useEffect(() => {
    setSvgSize(svgSetting(screenLevel));
  }, [screenLevel]);

  useEffect(() => {
    if (!cityDetail) return;
    cityDetail.forEach((city) => {
      if (city.cityCode == cityCode) {
        setSelectedCity(city);
      }
    });
  }, [cityCode]);

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

  const resetMap = () => {
    setCityCode("");
    setSelectedCity(null);
    setTransformPosition({
      dx: 0,
      dy: 0,
      scale: 1,
    });
    setChangeCssPosition(false);
  };

  return (
    <section
      className={`absolute left-0 top-0  h-screen w-screen overflow-hidden ${
        enteredSecondPage ? "z-20" : "z-0"
      }`}
    >
      {/* <MapBg cityDetail={cityDetail} selectedCity={selectedCity} /> */}
      <div
        className={`relative h-screen w-screen transform duration-150 ease-in will-change-transform xl:container xl:w-auto`}
        style={{
          transform: `translate(${transformPosition.dx}px, ${transformPosition.dy}px) scale(${transformPosition.scale})`,
        }}
      >
        <section
          className={`
           absolute top-1/2 h-screen -translate-y-1/2 transition-all delay-75 duration-100 ease-in will-change-right-top-transform
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
            cityDetail={cityDetail}
            cityCode={cityCode}
            setCityCode={setCityCode}
            mapMode={mapMode}
            setIsMapLoading={setIsMapLoading}
          />

          {!enteredSecondPage && <img src="/img/map.svg" alt="fake map" />}
        </section>
      </div>
      {selectedCity && (
        <div
          className="absolute left-1/2 top-1/2 flex -translate-x-[594px] -translate-y-1/2 flex-col items-center bg-gray100 px-7 py-[30px] font-GenSekiGothic-R text-gray900"
          style={{ display: cityCode != "" ? "block" : "none" }}
        >
          <div
            className="absolute top-[-46px] bg-gray100 p-[3px]"
            onClick={() => resetMap()}
          >
            <img src="/img/arrow-left.svg" alt="" />
          </div>
          <div className="font-GenSekiGothic-B text-[28px] font-bold leading-none">
            {selectedCity.name}
          </div>
          <div className=" mt-[5px] text-sm">
            {selectedCity.voteDetail.total}票
          </div>
          <div className="mt-[18px] flex w-full items-center justify-between">
            <div className="bg-green300 p-1 text-base leading-none">蔡</div>
            <div className=" font-GenSekiGothic-M font-medium">
              {selectedCity.voteDetail.民主進步黨.percentage}{" "}
              <span className="text-green300">
                ({selectedCity.voteDetail.民主進步黨.compare})
              </span>
            </div>
          </div>
          <div className="mt-[18px] flex w-full items-center justify-between">
            <div className="bg-blue300 p-1 text-base leading-none">韓</div>
            <div className=" font-GenSekiGothic-M font-medium">
              {selectedCity.voteDetail.中國國民黨.percentage}{" "}
              <span className="text-blue300">
                ({selectedCity.voteDetail.中國國民黨.compare})
              </span>
            </div>
          </div>
          <div className="mt-[18px] flex w-full items-center justify-between">
            <div className="bg-orange500 p-1 text-base leading-none">宋</div>
            <div className=" font-GenSekiGothic-M font-medium">
              {selectedCity.voteDetail.親民黨.percentage}{" "}
              <span className="text-orange500">
                ({selectedCity.voteDetail.親民黨.compare})
              </span>
            </div>
          </div>
          <div className="mt-[30px] w-full font-GenSekiGothic-M font-medium">
            過往戰況
          </div>
          <div className="mt-[13px] flex justify-between gap-5">
            <div className="flex flex-col items-center bg-gray900 px-[18px] pb-1.5 pt-1">
              <div className="text-xs text-gray100">2018九合一大選</div>
              <div className="mt-1 bg-blue300 p-0.5 text-base leading-none">
                國
              </div>
            </div>
            <div className="flex flex-col items-center bg-gray900 px-[24px] pb-1.5 pt-1">
              <div className="text-xs text-gray100">2016總統大選</div>
              <div className="mt-1 bg-green300 p-0.5 text-base leading-none">
                民
              </div>
            </div>
          </div>
        </div>
      )}

      <ColorBar
        mapMode={mapMode}
        selectedCity={selectedCity}
        enteredSecondPage={enteredSecondPage}
        screenLevel={screenLevel}
      />
    </section>
  );
}

export default Map;
