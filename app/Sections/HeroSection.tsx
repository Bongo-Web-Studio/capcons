"use client";

import React from "react";
import { motion } from "framer-motion";
import FloatingCircle from "./FloatingCircle";
import { FaRegChessKnight } from "react-icons/fa6";
import { LuTvMinimalPlay } from "react-icons/lu";
/**
 * Pixel-accurate HeroSection
 * - First line is "use client" so framer-motion can be used in Next.js app directory.
 * - Tailwind CSS required.
 * - Uses an absolutely positioned SVG for crisp, pixel-perfect concentric rings (black + subtle purple).
 * - Avatar placeholders are gradient circles with white halo to match the screenshot.
 *
 * Drop this into e.g. app/Sections/HeroSection.tsx
 */

export default function HeroSection(): React.ReactElement {


  // SVG sizes / radii are chosen to match the pixel sizes used previously
  // radii correspond to 820/2, 720/2, 560/2, 360/2, 220/2
  const svgSize = 920;
  const center = svgSize / 2;
  const radii = [410, 360, 280, 180, 110];

  return (
    <section
      className="relative h-[115vh] overflow-hidden bg-white"
      style={{
        background: "",
      }}
    >
      {/* --- SVG rings (pixel-perfect crisp rings) --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-20">
        {/* blurred soft glow behind rings */}
      </div>

      {/* Content container (on top of rings) */}
      <div className="relative mx-auto mt-24 max-w-6xl px-6 py-28 sm:py-32 z-30">
        {/* headline + input */}
        <div className="relative z-30 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-black"
            style={{ lineHeight: 1.02 }}
          >
            Built For The <span className="text-[#6b21a8]">Creators</span>
            <br />
            Of <span className="text-[#6b21a8]">Tomorrow.</span>
          </motion.h1>
          <div className="absolute top-[-100px] left-[165px]  w-[2.5cm] h-[2.5cm] rounded-full bg-white border border-gray-100  overflow-hidden p-2">
            <img
              className="w-full h-full rounded-full object-cover "
              src="https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
            />
          </div>

          <div className="absolute top-[150px] left-[-120px]  w-[5cm] bg-white border border-gray-100  p-2  h-[2cm] rounded-2xl flex  gap-5">
            <h1 className="bg-sky-500 rounded-2xl h-[1.5cm] w-[1.5cm] flex justify-center items-center">

              <FaRegChessKnight size={30} className="text-white " />
            </h1>
            <h1 className="w-full  text-start text-gray-800 max-w-[10vh] ">Gamify your journey</h1>
          </div>

          <div className="absolute top-[350px] left-[-50px]  w-[2.5cm] h-[2.5cm] rounded-full bg-white border border-gray-100 overflow-hidden  p-2">
            <img
              className="w-full h-full rounded-full  object-cover"
              src="https://i.pinimg.com/474x/c5/3c/9b/c53c9bcd79b385ae73cf5724f253adcc.jpg"
              alt=""
            />
          </div>

          <div className="absolute top-[-100px] right-[50px]  w-[5.6cm] bg-white border border-gray-100 p-2  h-[2cm] rounded-2xl flex justify-center items-center gap-5 ">
            <h1 className="bg-orange-400 rounded-2xl h-[1.5cm] w-[1.5cm] flex justify-center items-center">
              <LuTvMinimalPlay size={30} className="text-white " />
            </h1>
            <h1 className="">
              <h1 className=" text-start text-gray-800">Go live</h1>
              <h1 className="text-sm text-start text-gray-600">connect in rext time </h1>{" "}
            </h1>
          </div>

          <div className="absolute top-[230px] right-[-60px]  w-[2.5cm] h-[2.5cm] rounded-full overflow-hidden bg-white border border-gray-100  p-2">
            <img
              className="w-full h-full rounded-full  object-cover"
              src="https://media.istockphoto.com/id/1022259708/photo/closeup-portrait-of-young-european-caucasian-man-pictured-isolated-on-pink-background.jpg?s=612x612&w=0&k=20&c=Jk1AJVU1W41qI1-NnP7z-GVTEhUaN1l991V6E29oSGo="
              alt=""
            />
          </div>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex items-center w-full max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center flex-1 rounded-full bg-white px-4 py-2  border border-gray-200 ">
              <input
                aria-label="email"
                placeholder="Enter your Email"
                className="flex-1 bg-transparent outline-none  text-slate-700 placeholder:text-gray-300 text-xl "
              />
              <button
                className="ml-4 rounded-full px-9 py-3 text-sm font-semibold"
                style={{
                  background:
                    "linear-gradient(180deg, #D8FF2A 0%, #B6E300 100%)",
                  boxShadow: "0 6px 16px rgba(56, 201, 0, 0.12)",
                }}
              >
                Join
              </button>
            </div>
          </motion.form>
        </div>

        {/* avatars + small label bubbles */}
    
      </div>

      {/* lower fade */}


{/* Centered concentric circles (responsive) */}
<div className="absolute inset-0 flex items-center justify-center z-10">
  {/* Inner circle */}
  <div className="absolute rounded-full border border-gray-200 w-[110vh] h-[110vh] flex items-center justify-center">
    {/* Outer circle */}
    <div className="absolute rounded-full border border-gray-200 w-[140vh] h-[140vh]" />
  </div>
</div>

<FloatingCircle />

<FloatingCircle/>

    </section>
  );
}
