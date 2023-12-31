"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gsap } from "gsap/dist/gsap";
import { debounce } from "lodash";
import {
  resetScreenLevel,
  toggleEnteredSecondPage,
  backToFirstPage,
  setMapMode,
} from "@/store/mapSlice";

function Index() {
  const dispatch = useDispatch();
  const { enteredSecondPage, screenLevel, isLoading } = useSelector(
    (state) => state.map
  );
  const [voteDetail, setVoteDetail] = useState([]);

  useLayoutEffect(() => {
    if (!window) return;
    dispatch(resetScreenLevel(window.innerWidth));
  }, []);

  useEffect(() => {
    const handleResize = debounce(() => {
      dispatch(resetScreenLevel(window.innerWidth));
    }, 200);
    window.addEventListener("resize", handleResize);

    fetch("/api/voteDetail?year=2020")
      .then((res) => res.json())
      .then((data) => setVoteDetail(data));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    switch (screenLevel) {
      case "xl":
        if (enteredSecondPage) {
          gsap.to("#year", { y: "-300px", opacity: 0 });
          gsap.to("#navTitle", { x: "-860px" });
          gsap.to("#TotalVotes", { x: "-600px", opacity: 0 });
          gsap.to("#description", { opacity: 0 });
          gsap.to("#enter", { opacity: 0, display: "none" });
          gsap.to("#title", { y: "300px", opacity: 0 });
          gsap.to("#buttons", { x: "600px", opacity: 0 });
        } else {
          gsap.to("#year", { y: "0", opacity: 1 });
          gsap.to("#navTitle", { x: "0" });
          gsap.to("#TotalVotes", { x: "0", opacity: 1 });
          gsap.to("#description", { opacity: 1 });
          gsap.to("#enter", { opacity: 1, display: "block" });
          gsap.to("#title", { y: "0", opacity: 1 });
          gsap.to("#buttons", { x: "0", opacity: 1 });
        }
        break;

      case "md":
        if (enteredSecondPage) {
          gsap.to("#year", { x: "600px", opacity: 0 });
          gsap.to("#TotalVotes", { opacity: 0 });
          gsap.to("#description", { x: "-600px", opacity: 0 });
          gsap.to("#enter", { opacity: 0, display: "none" });
          gsap.to("#title", { y: "300px", opacity: 0 });
          gsap.to("#buttons", { opacity: 0 });
        } else {
          gsap.to("#year", { x: "0", opacity: 1 });
          gsap.to("#TotalVotes", { opacity: 1 });
          gsap.to("#description", { x: "0", opacity: 1 });
          gsap.to("#enter", { opacity: 1, display: "block" });
          gsap.to("#title", { y: "0", opacity: 1 });
          gsap.to("#buttons", { opacity: 1 });
        }
        break;
      case "sm":
        if (enteredSecondPage) {
          gsap.to("#year", { opacity: 0 });
          gsap.to("#TotalVotes", { opacity: 0 });
          gsap.to("#description", { opacity: 0 });
          gsap.to("#enter", { opacity: 0, display: "none" });
          gsap.to("#title", { opacity: 0 });
          gsap.to("#buttons", { opacity: 0 });
          gsap.to("#inTitle", { opacity: 1 });
        } else {
          gsap.to("#year", { opacity: 1 });
          gsap.to("#TotalVotes", { opacity: 1 });
          gsap.to("#description", { opacity: 1 });
          gsap.to("#enter", { opacity: 1, display: "block" });
          gsap.to("#title", { opacity: 1 });
          gsap.to("#buttons", { opacity: 1 });
          gsap.to("#inTitle", { opacity: 0 });
        }
        break;
    }
  }, [enteredSecondPage]);

  const hamburgerHandler = () => {
    if (screenLevel === "xl") return "/img/hamburger.svg";
    return "/img/hamburger-white.svg";
  };
  const handleMapButtonClick = (mode = "common") => {
    dispatch(toggleEnteredSecondPage(true));
    dispatch(setMapMode(mode));
  };
  const getCandidateButton = (abbr, fullName, fullNameEn, mode) => (
    <div
      onClick={() => {
        handleMapButtonClick(mode);
      }}
      className="duration-10 group relative cursor-pointer bg-gray900 p-2.5 text-gray100 duration-100 ease-linear hover:bg-white-100 hover:text-gray900 md:p-4 xl:px-[54px] xl:py-[14px] xl:pl-[44px]"
    >
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

  return (
    <>
      <div className="absolute  z-10 h-[46px] w-full bg-gray900 md:h-20 xl:hidden"></div>
      <div
        className={`relative mx-auto h-screen w-[348px] text-gray900 md:w-[768px] xl:w-[1320px] `}
      >
        {isLoading && (
          <div className="absolute left-0 top-0 z-55 h-screen w-screen backdrop-blur-sm"></div>
        )}
        <h1
          id="navTitle"
          className="title absolute left-[18px] top-3 z-10 whitespace-nowrap text-[23px] font-semibold leading-none text-gray100 md:left-8 md:top-[22px] md:text-4xl xl:absolute xl:left-[888px] xl:top-[36px] xl:text-gray900"
        >
          Conga 全台開票地圖
        </h1>
        <img
          className="absolute right-3 top-3 z-50 h-[22px] cursor-pointer text-gray100 md:right-[44px]  md:top-[20px] md:h-auto xl:right-6 xl:top-[35px] xl:text-gray900"
          src={hamburgerHandler()}
          alt=""
          onClick={() => {
            dispatch(backToFirstPage());
          }}
        />
        <div
          id="year"
          style={{ fontFamily: "m-plus-1p-b" }}
          className="absolute bottom-[100px] right-[155px] z-0 block w-fit text-[74px] font-black leading-none md:bottom-[230px] md:right-8 md:text-[150px] xl:left-0 xl:top-6 xl:text-[215px]"
        >
          2020
        </div>
        <div className="absolute bottom-[100px] right-0 md:right-4 md:top-[104px] xl:left-4 xl:top-[245px]">
          <div
            id="TotalVotes"
            className="text-right text-[14px] font-bold md:text-[28px] xl:text-left"
          >
            <div>總投票數：{voteDetail.allVotes}</div>
            <div className="mt-2 md:mt-[18px] xl:mt-6">
              全國投票率：{voteDetail.vitePercentage}
            </div>
          </div>
        </div>
        <div
          id="description"
          className="xl:justify-left font- absolute bottom-[186px] hidden w-full justify-between px-8 font-GenSekiGothic-B text-[25px] md:flex xl:bottom-[26px] xl:left-4 xl:w-auto xl:flex-col xl:gap-8"
        >
          <div>2020</div>
          <div>TAIWAN</div>
          <div>PRESIDENTIAL</div>
          <div>ELECTION</div>
        </div>
        <div
          id="enter"
          className={`absolute left-1/2 top-1/2 z-60 -translate-x-1/2 -translate-y-1/2 cursor-pointer whitespace-nowrap blur-none ${
            isLoading
              ? "bg-white100 text-gray900"
              : "bg-gray900 text-gray100 xl:hover:bg-white100 xl:hover:text-gray900"
          }  px-8 py-3 font-GenSekiGothic-H text-base font-black duration-100 ease-linear md:px-[44px] md:py-6 md:text-[40px] `}
          onClick={() => {
            if (isLoading) return;
            handleMapButtonClick("common");
          }}
        >
          {isLoading ? "＞ Loading... ＜" : "＞ 進入開票地圖 ＜"}
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
          {getCandidateButton("宋", "宋楚瑜", "James C.Y. soong", "orange")}
          {getCandidateButton("蔡", "蔡英文", "Tsai Ing-wen", "green")}
          {getCandidateButton("韓", "韓國瑜", "Daniel Han", "blue")}

          <div className="absolute top-[-28px] flex flex-col items-center md:top-[-44px] xl:-top-[98px] xl:left-1/2 xl:-translate-x-1/2">
            <div className="mb-2 w-auto whitespace-nowrap text-[18px] font-semibold md:mb-5 md:text-[24px]">
              候選人得票情形
            </div>
            <img className="hidden xl:block" src="/img/caret-down.svg" alt="" />
          </div>
        </div>
        <h1
          id="title"
          className="absolute bottom-[6px] w-full text-center text-[82px] font-black leading-none md:bottom-[18px] md:text-[177px] xl:bottom-[26px] xl:right-0 xl:w-auto xl:text-[163px]"
          style={{ fontFamily: "m-plus-1p-b" }}
        >
          總統大選
        </h1>
      </div>
    </>
  );
}

export default Index;
