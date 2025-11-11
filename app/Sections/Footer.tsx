"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Footer.jsx
 * - Tailwind CSS based footer component
 * - Uses framer-motion for a subtle reveal animation
 * - Designed to closely match the provided screenshot (layout, spacing, colors)
 *
 * Requirements:
 * - tailwindcss configured in your project
 * - framer-motion installed: `npm i framer-motion`
 *
 * Usage:
 * import Footer from './Footer';
 * <Footer />
 */

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full" 
      style={{ backgroundColor: '#fbf4ea' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Logo + description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              {/* simple logo mark */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0f172a' }}>
                <span className="text-white font-bold">C</span>
              </div>
              <div className="text-xl font-semibold text-gray-900">CapCons.</div>
            </div>

            <p className="mt-6 text-sm text-gray-700 leading-relaxed">
              Strengthen connections, drive engagement, and grow a thriving community. Reach your
              audience, foster loyalty, and monetize — free from ads and algorithms.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {/* social icons simple circles */}
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 4.01s-1 .46-2 1c-1 0-2 .5-3 .5-1 0-2 0-3 1-1 1-2 2-3 3-1 1-2 2-2 2v6.5s3-1 6-1 9-2 9-7V4z" fill="#111827" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#111827" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 7.5a7.5 7.5 0 01-15 0" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle: three columns of links */}
          <div className="md:col-span-5 grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-xs tracking-wider font-semibold text-gray-600">COMPANY</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-800">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Career</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-wider font-semibold text-gray-600">RESOURCES</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-800">
                <li><a href="#" className="hover:underline">Blogs</a></li>
                <li><a href="#" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-wider font-semibold text-gray-600">GET THE APP</h4>
              <div className="mt-4 space-y-3">
                <a href="#" className="inline-flex items-center gap-3 px-3 py-2 rounded-lg shadow-sm bg-white">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect width="20" height="14" x="2" y="5" rx="3" fill="#111827" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Download on the</div>
                    <div className="text-sm font-semibold text-gray-900">App Store</div>
                  </div>
                </a>

                <a href="#" className="inline-flex items-center gap-3 px-3 py-2 rounded-lg shadow-sm bg-white">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect width="20" height="14" x="2" y="5" rx="3" fill="#111827" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">GET IT ON</div>
                    <div className="text-sm font-semibold text-gray-900">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right placeholder to match spacing from design */}
          <div className="md:col-span-3 flex items-start justify-end">
            {/* This area intentionally left as spacing to mimic the screenshot layout (video/hero sits above in the real design). */}
            <div className="w-full max-w-xs text-right">
              {/* Tiny copyright swirl or decorative element to visually balance */}
              <div className="inline-block px-3 py-2 rounded-lg bg-white shadow-sm">
                <div className="text-sm font-medium text-gray-800">Need help?</div>
                <div className="text-xs text-gray-500">support@capcons.example</div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom legal bar */}
        <div className="mt-10 border-t pt-6 border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <a href="#" className="mb-3 md:mb-0 hover:underline">Terms &amp; Condition</a>
            <div className="text-center text-xs text-gray-500">© Copyright 2025, All Rights Reserved by Capcons</div>
            <a href="#" className="mt-3 md:mt-0 hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
