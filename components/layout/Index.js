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
  const getCandidateButton = (abbr, fullName, fullNameEn) => (
    <div className="duration-10 group relative cursor-pointer bg-gray900 p-2.5 text-gray100 duration-100 ease-linear hover:bg-white hover:text-gray900 md:p-4 xl:px-[54px] xl:py-[14px] xl:pl-[44px]">
      <div className="absolute left-6 top-[30px] hidden h-1 w-2.5 bg-gray100 group-hover:bg-gray900 xl:block"></div>
      <div className="text-[25px] font-semibold leading-none md:text-[40px] xl:text-[35px]">
        {screenLevel !== "xl" ? abbr : fullName}
      </div>
      <div
        className="hidden text-lg xl:block"
        style={{ fontFamily: "m-plus-1p-m" }}
      >
        {fullNameEn}
      </div>
    </div>
  );
  useEffect(() => {
    switch (screenLevel) {
      case "xl":
        if (enteredSecondPage) {
          gsap.to("#year", { y: "-300px", opacity: 0 });
          gsap.to("#navTitle", { x: "-860px" });
          gsap.to("#TotalVotes", { x: "-600px", opacity: 0 });
          gsap.to("#description", { opacity: 0 });
          gsap.to("#enter", { opacity: 0 });
          gsap.to("#title", { y: "300px", opacity: 0 });
          gsap.to("#buttons", { x: "600px", opacity: 0 });
        } else {
          gsap.to("#year", { y: "0", opacity: 1 });
          gsap.to("#navTitle", { x: "0" });
          gsap.to("#TotalVotes", { x: "0", opacity: 1 });
          gsap.to("#description", { opacity: 1 });
          gsap.to("#enter", { opacity: 1 });
          gsap.to("#title", { y: "0", opacity: 1 });
          gsap.to("#buttons", { x: "0", opacity: 1 });
        }
        break;

      case "md":
        if (enteredSecondPage) {
          gsap.to("#year", { x: "600px", opacity: 0 });
          gsap.to("#TotalVotes", { opacity: 0 });
          gsap.to("#description", { x: "-600px", opacity: 0 });
          gsap.to("#enter", { opacity: 0 });
          gsap.to("#title", { y: "300px", opacity: 0 });
          gsap.to("#buttons", { opacity: 0 });
        } else {
          gsap.to("#year", { x: "0", opacity: 1 });
          gsap.to("#TotalVotes", { opacity: 1 });
          gsap.to("#description", { x: "0", opacity: 1 });
          gsap.to("#enter", { opacity: 1 });
          gsap.to("#title", { y: "0", opacity: 1 });
          gsap.to("#buttons", { opacity: 1 });
        }
        break;
      case "sm":
        if (enteredSecondPage) {
          gsap.to("#year", { opacity: 0 });
          gsap.to("#TotalVotes", { opacity: 0 });
          gsap.to("#description", { opacity: 0 });
          gsap.to("#enter", { opacity: 0 });
          gsap.to("#title", { opacity: 0 });
          gsap.to("#buttons", { opacity: 0 });
          gsap.to("#inTitle", { opacity: 1 });
        } else {
          gsap.to("#year", { opacity: 1 });
          gsap.to("#TotalVotes", { opacity: 1 });
          gsap.to("#description", { opacity: 1 });
          gsap.to("#enter", { opacity: 1 });
          gsap.to("#title", { opacity: 1 });
          gsap.to("#buttons", { opacity: 1 });
          gsap.to("#inTitle", { opacity: 0 });
        }
        break;
    }
  }, [enteredSecondPage]);
  useEffect(() => {
    fetch("/api/voteDetail?year=2020")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return (
    <>
      <div className="r-0 fixed z-10 flex w-full items-center justify-between gap-4 bg-gray900 px-[18px] py-3 md:pl-8 md:pr-11 xl:left-1/2 xl:w-[1320px] xl:-translate-x-1/2 xl:items-center xl:justify-end xl:bg-transparent xl:py-[22px] xl:pt-9">
        <h1
          id="navTitle"
          className="title right-[100px] whitespace-nowrap text-[23px] font-semibold leading-none text-gray100 md:text-4xl xl:absolute xl:text-gray900"
        >
          Conga 全台開票地圖
        </h1>
        <img
          className="z-50 h-[22px] cursor-pointer text-gray100 md:h-auto xl:text-gray900"
          src={hamburgerHandler()}
          alt=""
          onClick={() => {
            setEnteredSecondPage(false);
          }}
        />
      </div>
      <div className="relative mx-auto h-screen w-[348px] text-gray900 md:w-[768px] xl:w-[1320px]">
        <div
          id="year"
          style={{ fontFamily: "m-plus-1p-b" }}
          className="absolute bottom-[100px] right-[155px] z-0 block w-fit text-[74px] font-black leading-none md:bottom-[230px] md:right-8 md:text-[150px] xl:left-0 xl:top-7 xl:text-[215px]"
        >
          2020
        </div>
        <div className="absolute bottom-[100px] right-0 md:right-4 md:top-[104px] xl:left-4 xl:top-[222px]">
          <div
            id="TotalVotes"
            className="text-right text-[14px] font-bold md:text-[28px] xl:text-left"
          >
            <div>總投票數：8964896</div>
            <div className="mt-2 md:mt-[18px] xl:mt-7">全國投票率：64%</div>
          </div>
        </div>
        <div
          id="description"
          className="xl:justify-left absolute bottom-[186px] hidden w-full justify-between px-8 text-[25px] font-extrabold md:flex xl:bottom-[26px] xl:left-4 xl:w-auto xl:flex-col xl:gap-8"
        >
          <div>2020</div>
          <div>TAIWAN</div>
          <div>PRESIDENTIAL</div>
          <div>ELECTION</div>
        </div>
        <div
          id="enter"
          className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 cursor-pointer whitespace-nowrap bg-gray900 px-8 py-3 font-GenSekiGothic-H text-base font-black text-gray100 duration-100 ease-linear md:px-[44px] md:py-6 md:text-[40px] xl:hover:bg-white xl:hover:text-gray900"
          onClick={handleMapButtonClick}
        >
          ＞ 進入開票地圖 ＜
        </div>

        <div
          id="inTitle"
          className="absolute left-[15px] top-[58px] text-[22px] font-bold opacity-0 md:hidden"
        >
          2020年 總統大選
        </div>
        <div
          id="buttons"
          className="absolute left-[15px] top-[86px] flex justify-between gap-3 md:left-4 md:top-[148px] xl:left-auto xl:right-0 xl:top-1/2 xl:h-full xl:max-h-[372px] xl:-translate-y-1/2 xl:flex-col xl:gap-0"
        >
          {getCandidateButton("宋", "宋楚瑜", "James C.Y. soong")}
          {getCandidateButton("蔡", "蔡英文", "Tsai Ing-wen")}
          {getCandidateButton("韓", "韓國瑜", "Daniel Han")}

          <div className="absolute top-[-28px] flex flex-col items-center md:top-[-44px] xl:-top-[98px] xl:left-1/2 xl:-translate-x-1/2">
            <div className="mb-2 w-auto whitespace-nowrap text-[18px] font-semibold md:mb-5 md:text-[24px]">
              候選人得票情形
            </div>
            <img className="hidden xl:block" src="/img/caret-down.svg" alt="" />
          </div>
        </div>
        <h1
          id="title"
          className="absolute bottom-[6px] w-full text-center text-[87px] font-black leading-none md:bottom-[18px] md:text-[177px] xl:bottom-[26px] xl:right-0 xl:w-auto xl:text-[163px]"
          style={{ fontFamily: "m-plus-1p-b" }}
        >
          總統大選
        </h1>
      </div>
    </>
  );
}

export default Index;
