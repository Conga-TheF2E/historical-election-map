"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";

function Navbar() {
  const root = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".title", { rotation: "+=360" });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex justify-end items-center gap-4 px-5 py-2"
      ref={root}
    >
      <h1 className="title text-4xl font-semibold">Conga 全台開票地圖</h1>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignJustify size={40} color="#282828" strokeWidth={2.5} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}

export default Navbar;
