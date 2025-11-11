"use client";

import React from "react";
import {
  HiOutlineMinusSmall,
  HiOutlineSquares2X2,
  HiOutlineCheckCircle,
  HiOutlineBars3,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";

/**
 * CommunitySection (Refined with React Icons)
 * - Replaces inline SVGs with React Icons
 * - Pixel-accurate layout retained
 * - TailwindCSS required
 */

export default function CommunitySection() {
  return (
    <section className="bg-[#FFF6EA] rounded-md overflow-hidden w-[85vw] flex">
      {/* Left Side Content */}
      <div className="w-[60%]">
        {/* Small accent circle */}
        <div
          style={{
            background: "linear-gradient(180deg, #D8FF2A 0%, #B6E300 100%)",
            boxShadow: "0 6px 16px rgba(56, 201, 0, 0.12)",
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-medium text-[#1D293D] ml-10 mt-10"
        >
          ↻
        </div>

        <div className="gap-8 items-center p-10 mt-20">
          {/* Heading */}
          <div className="md:col-span-7">
            <h2 className="text-6xl font-semibold leading-tight text-[#1D293D]">
              Turn your{" "}
              <mark className="bg-[#DFF652] rounded px-1 py-0.5">
                Community
              </mark>{" "}
              into a
              <br /> Marketplace and Connect like
              <br /> never before
            </h2>

            <p className="mt-4 text-2xl text-gray-500">
              Social Commerce and Seamless Engagement
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {/* Feature 1 */}
              <div className="items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center  text-[#3B0FA8] text-2xl">
                  <HiOutlineMinusSmall />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    Full Hosted E-Commerce
                  </h4>
                  <p className="text-lg text-gray-400 mt-1">
                    Sell products directly to your community with zero hassle.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className=" items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center  text-[#3B0FA8] text-2xl">
                  <HiOutlineSquares2X2 />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    Integrated with GoKwik
                  </h4>
                  <p className="text-lg text-gray-400  mt-1">
                    Smooth, fast transactions for a seamless shopping
                    experience.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center  text-[#3B0FA8] text-2xl">
                  <HiOutlineCheckCircle />
                </div>
                <div> 
                  <h4 className="text-2xl font-semibold text-gray-900">
                    Proven Success
                  </h4>
                  <p className="text-lg text-gray-400 mt-1">
                    Capcons creators have achieved ₹100 Cr in sales, proving the
                    power of social commerce.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className=" items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-purple-200 flex items-center justify-center  text-[#3B0FA8] text-2xl">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    WhatsApp via Quickengage
                  </h4>
                  <p className="text-lg text-gray-400 mt-1">
                    Reach your audience instantly with automated messages and
                    campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-[40%] flex justify-center md:justify-end relative">
        <div className="w-[80%]" style={{ transform: "rotate(-4deg)" }}>
          <img
            src="./bg2.png"
            alt="phone preview"
            className="w-full h-auto object-cover mt-[4cm] ml-[1cm]"
          />
        </div>
      </div>
    </section>
  );
}
