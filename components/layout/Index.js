"use client";
import React, { useRef, useState, useEffect  } from "react";
import { gsap } from "gsap/dist/gsap";

function Index({ enteredSecondPage, setEnteredSecondPage }) {
  const root = useRef(null);
  
  const hamburgerHandler = ()=>{
    if(screen.width > 1025)return '/img/hamburger.svg'
    return '/img/hamburger-white.svg'
  }
  console.log(hamburgerHandler())
  const handleMapButtonClick = () => {
    setEnteredSecondPage(true);
  };
  useEffect(() => {
    if(screen.width < 1025) return
    if (enteredSecondPage) {
      gsap.to("#year", { y: "-300px", opacity: 0 });
      gsap.to("#navTitle", { x:'-860px' });
      gsap.to("#TotalVotes", { x: "-600px", opacity: 0 });
      gsap.to("#description", { opacity: 0 , display:'none'});
      gsap.to("#enter", { opacity: 0, display:'none' });
      gsap.to("#title", { y: "300px", opacity: 0 });
      gsap.to("#buttons", { x: "600px", opacity: 0 });
    } else {
      gsap.to("#year", { y: "0", opacity: 1 });
      gsap.to("#navTitle", { x: '0'});
      gsap.to("#TotalVotes", { x: "0", opacity: 1 });
      gsap.to("#description", { opacity: 1, display:'flex' });
      gsap.to("#enter", { opacity: 1 , display:'block'});
      gsap.to("#title", { y: "0", opacity: 1 });
      gsap.to("#buttons", { x: "0", opacity: 1 });
    }
  }, [enteredSecondPage]);
  return (
    <section
      ref={root}
    >
      <div className="flex fixed xl:left-1/2 xl:-translate-x-1/2 xl:w-[1320px] w-full r-0 xl:items-center items-center xl:justify-end justify-between gap-4 xl:pt-9 py-[22px] pr-11 pl-8 bg-gray900 xl:bg-transparent z-50">
        <h1 id="navTitle" className="xl:absolute right-[100px] title text-4xl font-semibold whitespace-nowrap xl:text-gray900 text-gray100 leading-9">Conga 全台開票地圖</h1>
        <img className="cursor-pointer xl:text-gray900 text-gray100" src={ hamburgerHandler() } alt="" onClick={()=>{setEnteredSecondPage(false)}}/>
      </div>  
      <div className="relative mx-auto h-screen w-[768px] xl:w-[1320px] text-gray900">
        <div className="absolute xl:top-7 xl:left-0 bottom-[230px] right-8">
          <h1
            id="year"
            className="xl:text-[215px] text-[150px] font-black leading-[162px] block"
            style={{ fontFamily: "m-plus-1p-b" }}
          >
            2020
          </h1>
        </div>
        <div className="absolute xl:top-[222px] xl:left-4 top-[104px] right-4">
          <div id="TotalVotes" className="text-[28px] font-bold text-right xl:text-left">
            <div>總投票數：8964896</div>
            <div className="mt-7">全國投票率：64%</div>
          </div>
        </div>
      <div id="description" className="absolute xl:bottom-[26px] bottom-[186px] px-8 justify-between xl:justify-left xl:left-4 w-full xl:w-auto flex xl:flex-col xl:gap-8 text-[25px] font-extrabold">
        <div>2020</div>
        <div>TAIWAN</div>
        <div>PRESIDENTIAL</div>
        <div>ELECTION</div>
      </div>
      <div
        id="enter"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-gray900 px-[44px] py-6 text-[40px] font-black text-gray100 hover:bg-white hover:text-gray900 ease-linear duration-100 whitespace-nowrap"
        onClick={handleMapButtonClick}
      >
        ＞ 進入開票地圖 ＜
      </div>

      <div id="buttons" className="absolute xl:right-0 xl:left-auto left-4 xl:top-1/2 top-[148px] flex h-full max-h-[372px] xl:-translate-y-1/2 flex-col justify-between">
        <div className=" group relative bg-gray900 px-[54px] py-[14px] pl-[44px] text-gray100 hover:bg-white hover:text-gray900 ease-linear duration-10 cursor-pointer ease-linear duration-100">
          <div className="absolute left-6 top-[30px] h-1 w-2.5 bg-gray100 group-hover:bg-gray900"></div>
          <div className="text-[35px] font-semibold leading-[35px]">宋楚瑜</div>
          <div className="text-lg" style={{ fontFamily: "m-plus-1p-m" }}>James C.Y. soong</div>
        </div>
        <div className="group relative bg-gray900 px-[54px] py-[14px] pl-[44px] text-gray100 hover:bg-white hover:text-gray900 ease-linear duration-10 cursor-pointer ease-linear duration-100">
          <div className="absolute left-6 top-[30px] h-1 w-2.5 bg-gray100 group-hover:bg-gray900"></div>
          <div className="text-[35px] font-semibold leading-[35px]">蔡英文</div>
          <div className="text-lg" style={{ fontFamily: "m-plus-1p-m" }}>Tsai Ing-wen</div>
        </div>
        <div className="group relative bg-gray900 px-[54px] py-[14px] pl-[44px] text-gray100 hover:bg-white hover:text-gray900 ease-linear duration-10 cursor-pointer ease-linear duration-100">
          <div className="absolute left-6 top-[30px] h-1 w-2.5 bg-gray100 group-hover:bg-gray900"></div>
          <div className="text-[35px] font-semibold leading-[35px]">韓國瑜</div>
          <div className="text-lg" style={{ fontFamily: "m-plus-1p-m" }}>Daniel Han</div>
        </div>
        <div className="absolute xl:-top-[98px] top-[-44px] xl:left-1/2 xl:-translate-x-1/2 flex flex-col items-center">
          <div className="w-auto whitespace-nowrap text-[24px] font-semibold mb-5">
            候選人得票情形
          </div>
          <img className="hidden xl:block" src="/img/caret-down.svg" alt="" />
        </div>
      </div>
        <h1
          id="title"
          className="absolute text-center xl:bottom-[26px] bottom-[18px] xl:right-0 xl:text-[163px] text-[177px] font-black xl:leading-[163px] leading-[177px] w-full xl:w-auto"
          style={{ fontFamily: "m-plus-1p-b" }}
        >
          總統大選
        </h1>
      </div>
      
    </section>
  );
}

export default Index;
