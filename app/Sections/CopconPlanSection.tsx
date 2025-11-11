"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CopconPlanSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8"
      >
        {/* Header row: left headline + right small paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Ready to scale?
              <span className="inline-block ml-3 -skew-x-2">
                <span className="bg-[#dffb57] px-2 py-0.5 rounded-sm inline-block -skew-x-2">
                  Capcons
                </span>
                <span className="bg-[#dffb57] px-2 py-0.5 rounded-sm inline-block ml-2 -skew-x-2">Pro</span>
              </span>
              <br />
              <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl">
                unlocks advanced features
              </span>
            </h2>
          </div>

          <div className="text-sm lg:text-right text-gray-500">
            <p>
              With its smart ecosystem and powerful collaboration tools, Capcons fuels the growth of passionate communities.
            </p>
          </div>
        </div>

        {/* Image / media block */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.995 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100"
          >
            {/* Replace the src below if you store the image elsewhere. Using the provided path. */}
            <img
              src={'/mnt/data/Screenshot 2025-11-11 163004.png'}
              alt="Capcons demo"
              className="w-full h-64 md:h-96 object-cover block"
            />

            {/* Play button centered over the image */}
            <button
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full flex items-center gap-3 shadow-md"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path d="M8 5v14l11-7L8 5z" fill="#111827" />
              </svg>
              <span className="text-sm font-medium text-gray-900">Play Video (2:34)</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
