"use client";

import { useState } from "react";

/**
 * Click-to-play video. Until pressed it is just a lazy-loaded poster image, so neither the
 * poster nor the video downloads during the first page load (posters used to compete with the hero on mobile).
 */
export default function LazyVideo({ src, poster, label }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <video
        className="aspect-[4/5] w-full object-cover"
        src={src}
        poster={poster}
        controls
        autoPlay
        playsInline
        aria-label={label}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play: ${label}`}
      className="group relative block aspect-[4/5] w-full"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        width={640}
        height={800}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
        <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-1 size-7" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
