"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  text: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ava",
    text:
      "Capcons has completely streamlined our operations. Managing refunds and product updates used to take hours—now it’s done in minutes. It’s a game-changer for our team’s productivity.",
    avatar: "/images/avatars/avatar1.png",
  },
  {
    id: 2,
    name: "Liam",
    text:
      "Switching to Capcons was the best decision we made this year. The custom branding features are robust, allowing us to maintain a consistent look across all our new courses and live events.",
    avatar: "/images/avatars/avatar2.png",
  },
  {
    id: 3,
    name: "Zoey",
    text:
      "The deep analytics provided useful insights we didn’t even know we were missing. We were able to optimise our sales funnel and saw a 30% increase in conversions almost immediately.",
    avatar: "/images/avatars/avatar3.png",
  },
];

const floatVariants: Variants = {
  animate: (i: number | undefined = 0) => ({
    x: i % 2 === 0 ? [0, 12, 0, -12, 0] : [0, -12, 0, 12, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: (i ?? 0) * 0.25 },
  }),
};

export default function CustomerSection(): React.ReactElement {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-semibold text-gray-900"
        >
          See what our{" "}
          <span className="relative inline-block">
            <span className="relative z-10">
              <span className="px-2">Customers</span>
            </span>
            {/* neon highlight */}
            <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 mx-auto w-max rounded-md -z-10">
              <span className="block w-full h-8 md:h-10 rounded-md bg-[#eaff00] opacity-30 blur-sm" />
            </span>
          </span>{" "}
          are saying?
        </motion.h2>

        <div className="mt-12 flex flex-col md:flex-row items-start gap-10">
          {/* Left big quote block */}
          <div className="flex-shrink-0 md:w-64">
            <div className="text-8xl md:text-9xl font-extrabold leading-none text-[#b7ff1a]">“</div>
            <div className="mt-6 text-2xl md:text-3xl font-medium text-gray-800">
              What our
              <br />
              customers are
              <br />
              saying
            </div>
          </div>

          {/* Right - cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.article
                  key={t.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative"
                >
                  {/* floating wrapper handles infinite left-right motion */}
                  <motion.div
                    custom={i}
                    variants={floatVariants}
                    animate="animate"
                    className="bg-[#fff9f7] rounded-xl p-6 shadow-sm border border-transparent hover:shadow-md min-h-[160px] flex flex-col justify-between"
                  >
                    <p className="text-sm text-gray-700 leading-relaxed">{t.text}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-1">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <svg
                              key={idx}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 text-gray-900"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.385 2.46c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.611 9.393c-.783-.57-.38-1.81.589-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
                            </svg>
                          ))}
                        </div>
                        <div className="text-xs text-gray-600">5.0</div>
                      </div>

                      <img
                        src={t.avatar}
                        alt={`${t.name}-avatar`}
                        className="w-10 h-10 rounded-full ring-2 ring-white shadow-md object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* small speech tail to match image */}
                  <div className="absolute left-8 bottom-[-10px] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#fff9f7]" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
