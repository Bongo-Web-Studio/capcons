"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as any }, // <-- cast fixes TS error
  },
};

export default function ProPlan() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-[40px] leading-tight font-semibold text-slate-900 flex items-baseline gap-4">
            <span className="relative inline-block mr-2">
              <span className="relative z-10">Pro Plans</span>
              <span className="absolute left-0 right-0 -bottom-2 h-3 bg-yellow-300/80 rounded-md transform -skew-x-6" />
            </span>
            <span className="text-2xl font-normal text-slate-800">for Pros who</span>
            <span className="ml-2 text-2xl font-normal text-slate-800">want more.</span>
          </h2>
          <p className="text-sm text-slate-400 mt-3">Ready to scale? Capcons Pro unlocks advanced features</p>
        </div>

        {/* Cards row */}
        <div className="flex items-start justify-between gap-8">
          {/* Left card */}
          <motion.div
            variants={cardVariant}
            whileHover={{ translateY: -6, boxShadow: "0 22px 40px rgba(18,24,38,0.06)" }}
            className="relative w-72 min-h-[360px] rounded-[28px] bg-white border border-gray-100 overflow-hidden flex-shrink-0"
          >
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-purple-50 to-transparent opacity-90" />

            <div className="p-8 z-10 relative flex flex-col h-full">
              <div className="text-xs text-slate-500 font-medium">More Ways To Connect</div>
              <h3 className="mt-3 text-sm font-semibold text-slate-900">Commerce, Courses, Livestreams — Monetize And Engage Effortlessly.</h3>

              <div className="mt-auto flex items-end justify-center">
                {/* Globe icon */}
                <svg width="140" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                  <g stroke="#C7B8FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="60" cy="60" r="28" strokeOpacity="0.85" />
                    <path d="M20 60h80" />
                    <path d="M60 32c14 6 24 20 24 28s-10 22-24 28c-14-6-24-20-24-28s10-22 24-28z" />
                    <path d="M60 32v56" />
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Center card - larger */}
          <motion.div
            variants={cardVariant}
            whileHover={{ translateY: -8, scale: 1.02 }}
            className="relative w-[420px] min-h-[420px] rounded-[34px] bg-white border border-gray-100 overflow-hidden flex-shrink-0"
          >
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-purple-50 to-transparent opacity-95" />

            <div className="p-8 z-10 relative flex flex-col h-full">
              <div className="text-center">
                <div className="text-xs text-slate-500 font-medium">Smarter Insights</div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">Deep Analytics To Track Impact And Optimize Growth.</h3>
              </div>

              <div className="mt-8 flex-1 flex items-end justify-center">
                <svg width="360" height="170" viewBox="0 0 360 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#EDEBFF" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#F8F7FF" stopOpacity="0.65" />
                    </linearGradient>
                  </defs>
                  <path d="M0 110 C70 20 150 120 200 90 C260 50 340 80 360 92 L360 170 L0 170 Z" fill="url(#g1)" />
                </svg>

                <div className="absolute left-1/2 transform -translate-x-1/2 top-36">
                  <div className="w-3.5 h-3.5 rounded-full bg-violet-500 shadow-lg" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            variants={cardVariant}
            whileHover={{ translateY: -6 }}
            className="relative w-72 min-h-[360px] rounded-[28px] bg-white border border-gray-100 overflow-hidden flex-shrink-0"
          >
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-purple-50 to-transparent opacity-90" />

            <div className="p-8 z-10 relative flex flex-col h-full">
              <div className="text-xs text-slate-500 font-medium">Your Brand, Your Way</div>
              <h3 className="mt-3 text-sm font-semibold text-slate-900">Custom Layouts, Branding, And Features That Reflect You.</h3>

              <div className="mt-auto flex items-end justify-center">
                {/* wrench icon */}
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                  <path d="M14.7 3.3l2 2a2 2 0 0 1 0 2.83l-2.54 2.54a6 6 0 0 1-7.77 7.77L3.1 18.1a2 2 0 0 1 0-2.83l2-2" stroke="#C7B8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
