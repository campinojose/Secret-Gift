"use client";

import React from "react";

export default function DynamicBackground() {
  return (
    <div aria-hidden className="dynamic-bg fixed inset-0 -z-10 pointer-events-none">
      <div className="gradient-layer" />
      <div className="gradient-layer layer-2" />
      <svg className="blobs" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#ff9a9e" />
            <stop offset="100%" stopColor="#fad0c4" />
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="#a18cd1" />
            <stop offset="100%" stopColor="#fbc2eb" />
          </linearGradient>
        </defs>
        <g fillOpacity="0.12" transform="translate(0,0)">
          <ellipse cx="160" cy="120" rx="220" ry="120" fill="url(#g1)" className="blob blob-1" />
          <ellipse cx="640" cy="420" rx="260" ry="160" fill="url(#g2)" className="blob blob-2" />
          <ellipse cx="420" cy="200" rx="160" ry="90" fill="#ffffff55" className="blob blob-3" />
        </g>
      </svg>
    </div>
  );
}
