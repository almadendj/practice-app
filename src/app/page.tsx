"use client";

import Image from "next/image";
import logo from "../../public/practice-logo.png";
import header from "../../public/header.png";
import HeaderItem from "@/components/header-item";
import MainButton from "@/components/main-button";
import { Rubik } from "next/font/google";

const rubikFont = Rubik({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center">
      <div className="w-full min-h-8 py-3 text-white px-3 flex flex-row items-center justify-between sticky padded z-10">
        <Image className="w-[180px] lg:w-max" src={logo} alt="logo" />
        <div className="flex-grow flex-row items-center text-white font-bold justify-end space-x-6 uppercase hidden lg:flex">
          <HeaderItem>Home</HeaderItem>
          <HeaderItem>About</HeaderItem>
          <HeaderItem>Location</HeaderItem>
          <HeaderItem>Contact</HeaderItem>
          <MainButton onClick={() => {}}>Sign Up</MainButton>
        </div>
      </div>
      <div
        className={
          "-mt-20 flex flex-col justify-center items-center lg:items-start text-white w-full h-[550px] padded " +
          rubikFont.className
        }
        style={{
          backgroundImage: `url(${header.src})`,
          backgroundSize: "cover",
          backgroundPositionY: "bottom",
          backgroundPositionX: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span className="font-bold text-3xl sm:text-5xl lg:text-7xl text-center lg:text-left">
          FIGHT LIKE
          <br />
          A&nbsp;<span className="text-red-500">CHAMPION</span>
        </span>
      </div>
    </main>
  );
}
