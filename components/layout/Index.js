"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { selection } from 'd3';

function Index() {
  const root = useRef(null);

  return (
    <section className='w-[1440px] mx-auto relative h-screen'>
        <div className='absolute top-7'>
            <h1 className='text-[215px] leading-[215px]'>2020</h1>
            <div className='text-[28px] font-bold mt-7'>
                <div>總投票數：8964896</div>
                <div className='mt-7'>全國投票率：64%</div>
            </div>
        </div>
        <div className='absolute bottom-[26px] font-extrabold text-[25px] flex flex-col gap-8'>
            <div>2020</div>
            <div>TAIWAN</div>
            <div>PRESIDENTIAL</div>
            <div>ELECTION</div>
        </div>
        <div className='bg-primary text-white py-6 px-[44px] font-black text-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            ＞ 進入開票地圖 ＜
        </div>
        <div>
            <div>候選人得票情形</div>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <h1 className='font-black text-[163px] leading-[163px] absolute bottom-[26px] right-0'>總統大選</h1>
    </section>
  );
}

export default Index;
