"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Logo = {
  name: string;
  wikiFile?: string | null;
  fallbackUrl: string;
};

type Source = {
  name: string;
  url: string;
};

/**
 * Tailwind-based marquee for Next.js (client component)
 *
 * - Uses Wikimedia API when available, falls back to provided fallbackUrl.
 * - Pure <img> tags used to avoid next/image remote config complexity.
 * - Duplicate the logo list for seamless loop.
 */

export default function Marquee() {
  const logos: Logo[] = [
    {
      name: "AWS",
      wikiFile: "File:Amazon_Web_Services_Logo.svg",
      fallbackUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "MoEngage",
      wikiFile: "File:Moengage_logo.png",
      fallbackUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Moengage_logo.png",
    },
    {
      name: "GoKwik",
      wikiFile: null,
      fallbackUrl:
        "https://seeklogo.com/images/G/gokwik-logo-6154606BE8-seeklogo.com.png",
    },
    {
      name: "TeddyBox",
      wikiFile: null,
      fallbackUrl: "https://via.placeholder.com/240x80?text=Teddy+Box",
    },
    {
      name: "Razorpay",
      wikiFile: "File:Razorpay_logo.svg",
      fallbackUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/Razorpay_logo.svg",
    },
    {
      name: "Google",
      wikiFile: "File:Google_%22G%22_logo.svg",
      fallbackUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_%22G%22_logo.svg",
    },
  ];

  const [sources, setSources] = useState<Source[]>([]);

  useEffect(() => {
    let mounted = true;

    async function fetchFromWikimedia(fileTitle: string): Promise<string | null> {
      const api = "https://commons.wikimedia.org/w/api.php";
      const params = new URLSearchParams({
        action: "query",
        titles: fileTitle,
        prop: "imageinfo",
        iiprop: "url",
        format: "json",
        origin: "*",
      });
      try {
        const res = await fetch(`${api}?${params.toString()}`);
        if (!res.ok) throw new Error("wiki fetch failed");
        const data = await res.json();
        const pages = data.query && data.query.pages;
        const page = pages && Object.values(pages)[0] as any;
        if (
          page &&
          page.imageinfo &&
          page.imageinfo[0] &&
          page.imageinfo[0].url
        ) {
          return page.imageinfo[0].url as string;
        }
        throw new Error("no image url");
      } catch (err: unknown) {
        // safe handling of unknown
        const msg = err instanceof Error ? err.message : String(err);
        console.warn("Wikimedia fetch failed for", fileTitle, msg);
        return null;
      }
    }

    (async () => {
      const results: Source[] = await Promise.all(
        logos.map(async (l) => {
          if (l.wikiFile) {
            const url = await fetchFromWikimedia(l.wikiFile);
            return { name: l.name, url: url ?? l.fallbackUrl };
          }
          return { name: l.name, url: l.fallbackUrl };
        })
      );
      if (mounted) setSources(results);
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (sources.length === 0) {
    return (
      <div className="relative w-full overflow-hidden py-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="text-sm text-gray-500">Loading logos…</div>
        </motion.div>
      </div>
    );
  }

  const trackLogos = [...sources, ...sources]; // duplicate for seamless loop

  return (
    <div className="relative w-full overflow-hidden py-8 bg-white">
      <h1 className="w-full text-center flex justify-center items-center text-4xl mb-15 mt-5 text-slate-800 ">
        The Word's best companies trust Capcons.
      </h1>

      {/* left fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/12 z-20"
        aria-hidden
      >
        <div className="h-full w-full bg-gradient-to-r from-white to-transparent" />
      </div>

      {/* right fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/12 z-20"
        aria-hidden
      >
        <div className="h-full w-full bg-gradient-to-l from-white to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center"
      >
        <div
          className="flex items-center gap-12 marquee-track"
          role="list"
          aria-label="Trusted companies marquee"
        >
          {trackLogos.map((l, idx) => (
            <div
              className="flex items-center justify-center min-w-[190px] max-w-[260px] px-2 marquee-item"
              role="listitem"
              key={`${l.name}-${idx}`}
            >
              <img
                src={l.url}
                alt={l.name}
                draggable="false"
                className="w-full h-auto max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
