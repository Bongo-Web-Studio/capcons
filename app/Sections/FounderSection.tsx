"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function FounderSection({
  founderImage = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80",
  avatar1 = "https://images.unsplash.com/photo-1545996124-1b7ef30f5a7a?auto=format&fit=crop&w=200&q=80",
  avatar2 = "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=200&q=80",
  avatar3 = "https://images.unsplash.com/photo-1545996104-9f3e6d245a8f?auto=format&fit=crop&w=200&q=80",
}: any) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  // use a numeric cubic-bezier easing array instead of a string
  const easeOutCubicBezier = [0.22, 1, 0.36, 1];

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -40, scale: 0.98 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeOutCubicBezier as any },
    },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 40, scale: 0.98 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeOutCubicBezier as any },
    },
  };

  return (
    <div className="w-full flex justify-center py-12 bg-white">
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
      >
        {/* LEFT CARD */}
        <motion.div
          variants={slideInLeft}
          className="relative bg-[#FEF7EE] rounded-2xl p-10 md:p-12 shadow-sm"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[rgba(0,0,0,0.08)] grid place-items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14"
                  stroke="#111827"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7" cy="7" r="2" fill="#111827" />
              </svg>
            </div>
            <div className="text-sm font-semibold text-gray-700">STORM NORMS</div>
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-tight text-[#0F172A]">
            At Stormnorm, we back
            <br /> Founders who Build
            <br /> Differently.
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm md:text-base text-[#334155] max-w-xl">
            Stormnorm is your creative studio for building differently where ambition meets clarity.
            We bring founders together to design, refine, and scale ideas that shape the future.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#D7FF4C] to-[#D1FF3A] shadow-md ring-1 ring-[rgba(0,0,0,0.06)]">
              Explore
            </button>
          </div>

          {/* Decorative bottom panel */}
          <div className="mt-8 flex gap-4 items-center">
            {/* small image card */}
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shadow-inner flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
                alt="yoga"
                className="w-full h-full object-cover"
              />
            </div>

            {/* purple card */}
            <div className="flex-1 bg-[#4A12A8] text-white rounded-2xl p-4 md:p-5 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src={avatar1} alt="a1" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src={avatar2} alt="a2" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src={avatar3} alt="a3" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div className="ml-2 text-sm text-white/90">Lives have been transformed.</div>
              </div>

              <div className="ml-4 text-right">
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight">2K+</div>
              </div>
            </div>
          </div>

          {/* subtle rounded background accent */}
          <div className="pointer-events-none absolute -bottom-8 left-6 w-44 h-44 rounded-2xl bg-gradient-to-br from-transparent to-white/10 filter blur-xl opacity-30" />
        </motion.div>

        {/* RIGHT IMAGE CARD */}
        <motion.div variants={slideInRight} className="w-full flex justify-center">
          <div className="w-full max-w-md md:max-w-xl rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src={founderImage}
              alt="founder"
              className="w-full h-[420px] object-cover block"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
