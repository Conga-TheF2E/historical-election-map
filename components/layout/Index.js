"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { selection } from "d3";

function Index() {
  const root = useRef(null);

  const handleMapButtonClick = () => {
    // 在这里触发你的 GSAP 动画
    gsap.to("#year", { y: "-300px", opacity: 0 });
    gsap.to("#TotalVotes", { x: "-600px", opacity: 0 });
  };
  return (
    <section
      className="relative mx-auto h-screen w-[1440px] text-gray900"
      ref={root}
    >
      <div className="absolute top-7">
        <h1
          id="year"
          className="text-[215px] font-black leading-[215px]"
          style={{ fontFamily: "m-plus-1p" }}
        >
          2020
        </h1>
        <div id="TotalVotes" className="mt-7 text-[28px] font-bold">
          <div>總投票數：8964896</div>
          <div className="mt-7">全國投票率：64%</div>
        </div>
      </div>
      <div className="absolute bottom-[26px] flex flex-col gap-8 text-[25px] font-extrabold">
        <div>2020</div>
        <div>TAIWAN</div>
        <div>PRESIDENTIAL</div>
        <div>ELECTION</div>
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-gray900 px-[44px] py-6 text-[40px] font-black text-gray100"
        onClick={handleMapButtonClick}
      >
        ＞ 進入開票地圖 ＜
      </div>

      <div className="absolute right-0 top-1/2 flex h-full max-h-[372px] -translate-y-1/2 flex-col justify-between">
        <div className="relative bg-gray900 px-[54px] py-[14px] pl-[44px] text-gray100">
          <div className="absolute left-6 top-[30px] h-1 w-2.5 bg-gray100"></div>
          <div className="text-[35px] font-semibold leading-[35px]">宋楚瑜</div>
          <div className="text-lg">James C.Y. soong</div>
        </div>
        <div className="relative bg-gray900 px-[54px] py-[14px] pl-[44px] text-gray100">
          <div className="absolute left-6 top-[30px] h-1 w-2.5 bg-gray100"></div>
          <div className="text-[35px] font-semibold leading-[35px]">蔡英文</div>
          <div className="text-lg">Tsai Ing-wen</div>
        </div>
        <div className="relative bg-gray900 px-[54px] py-[14px] pl-[44px] text-gray100">
          <div className="absolute left-6 top-[30px] h-1 w-2.5 bg-gray100"></div>
          <div className="text-[35px] font-semibold leading-[35px]">韓國瑜</div>
          <div className="text-lg">Daniel Han</div>
        </div>
        <div className="absolute -top-[98px] left-1/2 block -translate-x-1/2">
          <div className="w-auto whitespace-nowrap text-[24px] font-semibold">
            候選人得票情形
          </div>
          <img src="/img/caret-down.svg" alt="" />
        </div>
      </div>
      <h1
        className="absolute bottom-[26px] right-0 text-[163px] font-black leading-[163px]"
        style={{ fontFamily: "m-plus-1p" }}
      >
        總統大選
      </h1>
    </section>
  );
}

export default Index;
