"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AutoplayVideo.module.css";

type Props = {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
  className?: string;
};

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/* Muted, looping, inline video with no controls that starts on its own.
   Visitors who ask for reduced motion get the poster and a small play/pause
   button instead. Playback starts from script because React doesn't render
   the `muted` attribute, which some browsers require before they'll autoplay. */
export default function AutoplayVideo({ src, poster, width, height, label, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;

    // Only plays (and so only downloads) while it's on screen
    let inView = false;
    const query = window.matchMedia(REDUCED_MOTION);
    const apply = () => {
      setReducedMotion(query.matches);
      if (query.matches || !inView) video.pause();
      else video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (!query.matches) apply();
    });
    observer.observe(video);

    apply();
    query.addEventListener("change", apply);
    return () => {
      observer.disconnect();
      query.removeEventListener("change", apply);
    };
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <div className={styles.wrap}>
      <video
        ref={videoRef}
        className={className}
        src={src}
        poster={poster}
        width={width}
        height={height}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {reducedMotion && (
        <button
          type="button"
          className={`${styles.toggle} ${playing ? styles.toggleCorner : ""}`}
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
            {playing ? (
              <path d="M8 6h3v12H8zM13 6h3v12h-3z" fill="currentColor" />
            ) : (
              <path d="M9 6.5v11l9-5.5z" fill="currentColor" />
            )}
          </svg>
        </button>
      )}
    </div>
  );
}
