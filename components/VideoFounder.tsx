"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function VideoFounder() {
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) {
        gsap.set(video.current, { scale: 1 });
        return;
      }

      // Subtle scale-up tied to the natural scroll of the section coming into
      // view. No pin — no extra scroll consumed.
      gsap.fromTo(
        video.current,
        { scale: 0.45 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom+=1200",
            end: "top center",
            scrub: true,
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-sea"
      style={{
        backgroundImage: "url('/assets/investors/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Same gradient overlay as the Investors section above, so the navy reads as one continuous surface */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(25,37,80,0.7)] to-sea"
      />
      <div
        ref={video}
        className="relative flex aspect-video w-screen origin-center items-center justify-center bg-white will-change-transform"
      >
        <span className="font-[family-name:var(--font-inter)] text-[68px] font-bold text-black/30">
          VIDEO
        </span>
      </div>
    </section>
  );
}
