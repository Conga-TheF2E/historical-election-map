import React, { useEffect, useState } from "react";
function Modal(props) {
  const {
    screenLevel,
    enteredSecondPage,
    setIsMapLoading,
    cityDetail,
    setCityCode,
    cityCode,
    mapMode,
    setMapMode,
    selectedCity,
    setSelectedCity,
    resetMap,
  } = props;
  const [showPrivous, setShowPrivous] = useState(false);
  return (
    <div
      className="absolute bottom-0 flex w-full flex-col items-center bg-gray100 px-7 py-[30px] font-GenSekiGothic-R text-gray900 md:bottom-[50px] md:left-1/2 md:w-auto md:-translate-x-[332px] xl:bottom-1/2 xl:-translate-x-[594px] xl:translate-y-1/2"
      style={{
        display: cityCode != "" && mapMode == "common" ? "block" : "none",
      }}
    >
      <div
        className="absolute left-0 top-[-46px] bg-gray100 p-[3px]"
        onClick={() => resetMap()}
      >
        <img src="/img/arrow-left.svg" alt="" />
      </div>
      <div className="font-GenSekiGothic-B text-[28px] font-bold leading-none">
        {selectedCity.name}
      </div>
      <div
        className=" mt-[5px] text-sm"
        style={{
          display:
            screenLevel != "sm" ? "block" : !showPrivous ? "block" : "none",
        }}
      >
        {selectedCity.voteDetail.total}票
      </div>
      <div
        className="mt-[18px] flex w-full items-center justify-between"
        style={{
          display:
            screenLevel != "sm" ? "flex" : !showPrivous ? "flex" : "none",
        }}
      >
        <div className="bg-green300 p-1 text-base leading-none">蔡</div>
        <div className=" font-GenSekiGothic-M font-medium">
          {selectedCity.voteDetail.民主進步黨.percentage}{" "}
          <span className="text-green300">
            ({selectedCity.voteDetail.民主進步黨.compare})
          </span>
        </div>
      </div>
      <div
        className="mt-[18px] flex w-full items-center justify-between"
        style={{
          display:
            screenLevel != "sm" ? "flex" : !showPrivous ? "flex" : "none",
        }}
      >
        <div className="bg-blue300 p-1 text-base leading-none">韓</div>
        <div className=" font-GenSekiGothic-M font-medium">
          {selectedCity.voteDetail.中國國民黨.percentage}{" "}
          <span className="text-blue300">
            ({selectedCity.voteDetail.中國國民黨.compare})
          </span>
        </div>
      </div>
      <div
        className="mt-[18px] flex w-full items-center justify-between"
        style={{
          display:
            screenLevel != "sm" ? "flex" : !showPrivous ? "flex" : "none",
        }}
      >
        <div className="bg-orange500 p-1 text-base leading-none">宋</div>
        <div className=" font-GenSekiGothic-M font-medium">
          {selectedCity.voteDetail.親民黨.percentage}{" "}
          <span className="text-orange500">
            ({selectedCity.voteDetail.親民黨.compare})
          </span>
        </div>
      </div>
      <div
        className="mt-[30px] w-full font-GenSekiGothic-M font-medium "
        style={{
          display: screenLevel != "sm" ? "block" : "none",
        }}
      >
        過往戰況
      </div>
      <div
        className="mt-[13px]  justify-between gap-5"
        style={{
          display: screenLevel == "sm" && !showPrivous ? "none" : "flex",
          marginBottom: screenLevel == "sm" ? "42px" : "0px",
        }}
      >
        <div className="flex flex-col items-center bg-gray900 px-[18px] pb-1.5 pt-1">
          <div className="text-xs text-gray100">2018九合一大選</div>
          <div className="mt-1 bg-blue300 p-0.5 text-base leading-none">國</div>
        </div>
        <div className="flex flex-col items-center bg-gray900 px-[24px] pb-1.5 pt-1">
          <div className="text-xs text-gray100">2016總統大選</div>
          <div className="mt-1 bg-green300 p-0.5 text-base leading-none">
            民
          </div>
        </div>
      </div>
      <div
        className=" absolute right-[18px] top-[-44px] p-2.5 font-GenSekiGothic-B font-bold leading-none"
        style={{
          display: screenLevel != "sm" ? "none" : "block",
          backgroundColor: showPrivous ? "#D3D3D3" : "#282828",
          color: showPrivous ? "#282828" : "#D3D3D3",
        }}
        onClick={() => {
          setShowPrivous(!showPrivous);
        }}
      >
        {showPrivous ? "本屆戰況" : "過往戰況"}
      </div>
    </div>
  );
}
export default Modal;
