"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";

import store from "@/store";
import Index from "@/components/layout/Index";
import Map from "@/components/Map";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="overflow-hidden bg-gray100 font-GenSekiGothic-R">
        <Map />
        <Index />
      </main>
    </Provider>
  );
}
