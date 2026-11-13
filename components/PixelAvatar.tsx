"use client";
import React from "react";

/**
 * Pixel Art Avatar - 8-bit style representation
 * Designed to replace the hero profile photo
 */
export default function PixelAvatar() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Pixel Art Container */}
      <svg
        viewBox="0 0 16 16"
        className="w-full h-full pixel-art"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Vinicius Dilly - Full Stack Developer pixel avatar"
        role="img"
      >
        {/* Background */}
        <rect width="16" height="16" fill="#0a0f1a" />

        {/* Hair - Dark brown/black pixels */}
        <rect x="5" y="1" width="6" height="1" fill="#1a1a2e" />
        <rect x="4" y="2" width="8" height="1" fill="#1a1a2e" />
        <rect x="4" y="3" width="2" height="1" fill="#1a1a2e" />
        <rect x="10" y="3" width="2" height="1" fill="#1a1a2e" />

        {/* Face skin tone */}
        <rect x="5" y="4" width="6" height="1" fill="#ffdbac" />
        <rect x="4" y="5" width="8" height="1" fill="#ffdbac" />
        <rect x="4" y="6" width="8" height="1" fill="#ffdbac" />
        <rect x="5" y="7" width="6" height="1" fill="#ffdbac" />
        <rect x="5" y="8" width="6" height="1" fill="#ffdbac" />

        {/* Eyes - Looking at screen */}
        <rect x="5" y="5" width="1" height="1" fill="#1a1a2e" />
        <rect x="10" y="5" width="1" height="1" fill="#1a1a2e" />
        <rect x="5" y="6" width="1" height="1" fill="#4d8be9" />
        <rect x="10" y="6" width="1" height="1" fill="#4d8be9" />

        {/* Glasses frames */}
        <rect x="4" y="5" width="2" height="2" fill="transparent" stroke="#4d8be9" strokeWidth="0.5" />
        <rect x="10" y="5" width="2" height="2" fill="transparent" stroke="#4d8be9" strokeWidth="0.5" />

        {/* Mouth - slight smile */}
        <rect x="6" y="8" width="4" height="1" fill="#c68642" />

        {/* Body - Hoodie/Coder shirt */}
        <rect x="3" y="9" width="10" height="1" fill="#4d8be9" />
        <rect x="2" y="10" width="12" height="1" fill="#4d8be9" />
        <rect x="2" y="11" width="12" height="1" fill="#4d8be9" />
        <rect x="3" y="12" width="10" height="1" fill="#3a7bc8" />

        {/* Laptop/Code symbol on chest */}
        <rect x="6" y="10" width="4" height="3" fill="#0a0f1a" />
        <rect x="7" y="11" width="1" height="1" fill="#4d8be9" />
        <rect x="9" y="11" width="1" height="1" fill="#4d8be9" />
        <rect x="8" y="12" width="1" height="1" fill="#4d8be9" />

        {/* Arms */}
        <rect x="1" y="10" width="1" height="3" fill="#ffdbac" />
        <rect x="14" y="10" width="1" height="3" fill="#ffdbac" />

        {/* Keyboard hints */}
        <rect x="4" y="13" width="8" height="1" fill="#2d3748" />
        <rect x="5" y="14" width="1" height="1" fill="#4a5568" />
        <rect x="7" y="14" width="1" height="1" fill="#4a5568" />
        <rect x="9" y="14" width="1" height="1" fill="#4a5568" />
        <rect x="11" y="14" width="1" height="1" fill="#4a5568" />

        {/* Blinking eye animation frame (optional) */}
        <rect x="0" y="0" width="16" height="16" fill="transparent" className="eye-blink" />
      </svg>

      {/* Decorative code symbols floating around */}
      <div className="absolute top-0 left-0 text-[var(--primary-color)] opacity-60 animate-float-fast">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-0 right-0 text-[var(--primary-color)] opacity-40 animate-float-slow">
        {}
      </div>
    </div>
  );
}
