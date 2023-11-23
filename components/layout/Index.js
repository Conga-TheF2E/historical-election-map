"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

function Index({ enteredSecondPage, setEnteredSecondPage, screenLevel }) {
  const hamburgerHandler = () => {
    if (screenLevel === "xl") return "/img/hamburger.svg";
    return "/img/hamburger-white.svg";
  };
  console.log(hamburgerHandler());
  const handleMapButtonClick = () => {
    setEnteredSecondPage(true);
  };
  useEffect(() => {
    if (screenLevel !== "xl") return;
    if (enteredSecondPage) {
      gsap.to("#year", { y: "-300px", opacity: 0 });
      gsap.to("#navTitle", { x: "-860px" });
      gsap.to("#TotalVotes", { x: "-600px", opacity: 0 });
      gsap.to("#description", { opacity: 0, display: "none" });
      gsap.to("#enter", { opacity: 0, display: "none" });
      gsap.to("#title", { y: "300px", opacity: 0 });
      gsap.to("#buttons", { x: "600px", opacity: 0 });
    } else {
      gsap.to("#year", { y: "0", opacity: 1 });
      gsap.to("#navTitle", { x: "0" });
      gsap.to("#TotalVotes", { x: "0", opacity: 1 });
      gsap.to("#description", { opacity: 1, display: "flex" });
      gsap.to("#enter", { opacity: 1, display: "block" });
      gsap.to("#title", { y: "0", opacity: 1 });
      gsap.to("#buttons", { x: "0", opacity: 1 });
    }
  }, [enteredSecondPage]);
  return (
    <>
      <div className="r-0 fixed z-40 flex w-full items-center justify-between gap-4 bg-gray900 py-[22px] pl-8 pr-11 xl:left-1/2 xl:w-[1320px] xl:-translate-x-1/2 xl:items-center xl:justify-end xl:bg-transparent xl:pt-9">
        <h1
          id="navTitle"
          className="title right-[100px] whitespace-nowrap text-4xl font-semibold leading-9 text-gray100 xl:absolute xl:text-gray900"
        >
          Conga 全台開票地圖
        </h1>
        <img
          className="cursor-pointer text-gray100 xl:text-gray900"
          src={hamburgerHandler()}
          alt=""
          onClick={() => {
            setEnteredSecondPage(false);
          }}
        />
      </div>
      <div className="relative mx-auto h-screen w-[768px] text-gray900 xl:w-[1320px]">
        <div className="absolute bottom-[230px] right-8 z-0 xl:left-0 xl:top-7">
          <h1
            id="year"
            className="block text-[150px] font-black leading-[162px] xl:text-[215px]"
            style={{ fontFamily: "m-plus-1p-b" }}
          >
            2020
          </h1>
        </div>
        <div className="absolute right-4 top-[104px] xl:left-4 xl:top-[222px]">
          <div
            id="TotalVotes"
            className="text-right text-[28px] font-bold xl:text-left"
          >
            <div>總投票數：8964896</div>
            <div className="mt-7">全國投票率：64%</div>
          </div>
        </div>
        <div
          id="description"
          className="xl:justify-left absolute bottom-[186px] flex w-full justify-between px-8 text-[25px] font-extrabold xl:bottom-[26px] xl:left-4 xl:w-auto xl:flex-col xl:gap-8"
        >
          <div>2020</div>
          <div>TAIWAN</div>
          <div>PRESIDENTIAL</div>
          <div>ELECTION</div>
        </div>
        <div
          id="enter"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer whitespace-nowrap bg-gray900 px-[44px] py-6 text-[40px] font-black text-gray100 duration-100 ease-linear hover:bg-white hover:text-gray900"
          onClick={handleMapButtonClick}
        >
          ＞ 進入開票地圖 ＜
        </div>

        <div
          id="buttons"
          className="absolute left-4 top-[148px] flex h-full max-h-[372px] flex-col justify-between xl:left-auto xl:right-0 xl:top-1/2 xl:-translate-y-1/2"
        >
          <div className=" duration-10 group relative cursor-pointer bg-gray900 px-[54px] py-[14px] pl-[44px] text-gray100 duration-100 ease-linear ease-linear hover:bg-white hover:text-gray900">
            <div className="absolute left-6 top-[30px] h-1 w-2.5 bg-gray100 group-hover:bg-gray900"></div>
            <div className="text-[35px] font-semibold leading-[35px]">
              宋楚瑜
            </div>
            <div className="text-lg" style={{ fontFamily: "m-plus-1p-m" }}>
              James C.Y. soong
            </div>
          </div>
          <div className="duration-10 group relative cursor-pointer bg-gray900 px-[54px] py-[14px] pl-[44px] text-gray100 duration-100 ease-linear ease-linear hover:bg-white hover:text-gray900">
            <div className="absolute left-6 top-[30px] h-1 w-2.5 bg-gray100 group-hover:bg-gray900"></div>
            <div className="text-[35px] font-semibold leading-[35px]">
              蔡英文
            </div>
            <div className="text-lg" style={{ fontFamily: "m-plus-1p-m" }}>
              Tsai Ing-wen
            </div>
          </div>
          <div className="duration-10 group relative cursor-pointer bg-gray900 px-[54px] py-[14px] pl-[44px] text-gray100 duration-100 ease-linear ease-linear hover:bg-white hover:text-gray900">
            <div className="absolute left-6 top-[30px] h-1 w-2.5 bg-gray100 group-hover:bg-gray900"></div>
            <div className="text-[35px] font-semibold leading-[35px]">
              韓國瑜
            </div>
            <div className="text-lg" style={{ fontFamily: "m-plus-1p-m" }}>
              Daniel Han
            </div>
          </div>
          <div className="absolute top-[-44px] flex flex-col items-center xl:-top-[98px] xl:left-1/2 xl:-translate-x-1/2">
            <div className="mb-5 w-auto whitespace-nowrap text-[24px] font-semibold">
              候選人得票情形
            </div>
            <img className="hidden xl:block" src="/img/caret-down.svg" alt="" />
          </div>
        </div>
        <h1
          id="title"
          className="absolute bottom-[18px] w-full text-center text-[177px] font-black leading-[177px] xl:bottom-[26px] xl:right-0 xl:w-auto xl:text-[163px] xl:leading-[163px]"
          style={{ fontFamily: "m-plus-1p-b" }}
        >
          總統大選
        </h1>
      </div>
    </>
  );
}

export default Index;
