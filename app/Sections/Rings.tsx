
// Rings.jsx
import React from "react";

function circumference(r: number) {
  return 2 * Math.PI * r;
}
function dashForPercent(r: number, visiblePercent = 0.35) {
  const c = circumference(r);
  const visible = c * visiblePercent;
  const gap = Math.max(0.1, c - visible);
  return `${visible} ${gap}`;
}
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const a = (angleDeg - 90) * (Math.PI / 180); // SVG 0° is at 12 o'clock
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

export default function Rings({
  size = 900,
  center = 450,
  avatars = [
    { angle: 300, r: 260, src: "/avatar1.jpg" },
    { angle: 220, r: 320, src: "/avatar2.jpg" },
    { angle: 120, r: 200, src: "/avatar3.jpg" },
  ],
}) {
  const r1 = 260; // inner ring radius
  const r2 = 330; // outer ring radius

  return (
    <div
      style={{
        width: "100%",
        maxWidth: size,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        height="auto"
        style={{ overflow: "visible", display: "block" }}
      >
        <defs>
          {/* subtle background radial fade mask so rings blend into center */}
          <radialGradient id="fade" cx="50%" cy="50%" r="50%">
            <stop offset="40%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.0" />
          </radialGradient>

          {/* Mask from center out to fade edges — apply to ring group */}
          <mask id="ringFade">
            <rect width="100%" height="100%" fill="white" />
            {/* a big transparent hole in the center so inner parts fade less (optional) */}
            <circle cx={center} cy={center} r={120} fill="black" />
            {/* radial fade overlay: white->transparent so outer stroke fades */}
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>

          {/* gradient stroke for ring */}
          <linearGradient id="ringGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#C9B6FF" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#7C4DFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#9C7DFF" stopOpacity="0.5" />
          </linearGradient>

          {/* glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* subtle background center soft circle */}
        <circle
          cx={center}
          cy={center}
          r={180}
          fill="none"
          stroke="#f3eaff"
          strokeWidth={260}
          opacity={0.06}
        />

        {/* group rings so we can apply mask or opacity */}
        <g mask="url(#ringFade)" opacity={0.95}>
          {/* inner ring */}
          <circle
            cx={center}
            cy={center}
            r={r1}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth={2.6}
            strokeLinecap="round"
            strokeDasharray={dashForPercent(r1, 0.38)} // visible fraction
            strokeDashoffset={circumference(r1) * 0.05} // rotate where the gap sits
            style={{ filter: "url(#glow)" }}
            opacity={0.85}
          />

          {/* outer ring */}
          <circle
            cx={center}
            cy={center}
            r={r2}
            fill="none"
            stroke="#D6C9FF"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeDasharray={dashForPercent(r2, 0.22)}
            strokeDashoffset={circumference(r2) * 0.45}
            style={{ mixBlendMode: "multiply", filter: "url(#glow)" }}
            opacity={0.6}
          />
        </g>

        {/* faint guideline circles (very light) for depth */}
        <circle cx={center} cy={center} r={r1 - 70} fill="none" stroke="#efe9ff" strokeWidth={0.9} opacity={0.25} />
        <circle cx={center} cy={center} r={r2 + 30} fill="none" stroke="#efe9ff" strokeWidth={0.9} opacity={0.18} />

        {/* avatars placed on outer/inner rings */}
        {avatars.map((a, i) => {
          const pos = polarToCartesian(center, center, a.r, a.angle);
          const sizePx = 56;
          return (
            <g key={i} transform={`translate(${pos.x - sizePx / 2}, ${pos.y - sizePx / 2})`}>
              {/* soft halo */}
              <circle cx={sizePx / 2} cy={sizePx / 2} r={sizePx / 2 + 6} fill="#fff" opacity={0.5} style={{ filter: "url(#glow)" }} />
              {/* avatar image (use <image> or <foreignObject> for complex markup) */}
              <image
                href={a.src}
                x="4"
                y="4"
                width={sizePx - 8}
                height={sizePx - 8}
                style={{ borderRadius: "50%" }}
                clipPath={`circle(${(sizePx - 8) / 2}px at ${sizePx / 2 - 4}px ${sizePx / 2 - 4}px)`}
              />
              {/* optional outer stroke ring */}
              <circle cx={sizePx / 2} cy={sizePx / 2} r={(sizePx - 8) / 2} fill="none" stroke="#fff" strokeWidth={1.6} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
