"use client";

import { useEffect, useRef } from "react";
import { LogoGlyph, VeronaWordmark } from "@/components/icons";

type FrameTone = "dark" | "light";

type ImageMode = "cover" | "tile";

type StoryFrame = {
  id: string;
  chapter: string;
  title: string;
  titleAccent?: string;
  pullQuote?: string;
  image: string;
  imageFallback: string;
  imageMode?: ImageMode;
  tone: FrameTone;
  caption: string;
};

// Each frame is wired to one of the brand assets in /public/assets/story.
const FRAMES: StoryFrame[] = [
  {
    id: "00-cover",
    chapter: "Story",
    title: "The story",
    titleAccent: "& vision",
    pullQuote:
      "How do you prove something is real when it only exists on a screen? Verona started with that question, years before it had the name.",
    image: "/assets/story/damask-blue.png",
    imageFallback: "/assets/floral-birds-pine.jpg",
    imageMode: "tile",
    tone: "dark",
    caption: "Cover",
  },
  {
    id: "01-opening-proof",
    chapter: "Opening proof",
    title: "What makes a digital thing",
    titleAccent: "real?",
    image: "/assets/story/grass-violet.png",
    imageFallback: "/assets/floral-blue-birds.jpg",
    tone: "dark",
    caption: "An overture",
  },
  {
    id: "02-burnt-banksy",
    chapter: "Chapter 01",
    title: "Burnt Banksy",
    pullQuote:
      "Once the physical copy was gone, the digital one was the original.",
    image: "/assets/story/damask-red.png",
    imageFallback: "/assets/floral-pink-rose.jpg",
    imageMode: "tile",
    tone: "dark",
    caption: "2021 · A burn, a livestream, a question",
  },
  {
    id: "03-burnt",
    chapter: "Chapter 02",
    title: "Burnt",
    pullQuote: "The technology held up. The people gave up.",
    image: "/assets/story/roses-dark.png",
    imageFallback: "/assets/floral-tropical-bird.jpg",
    tone: "dark",
    caption: "Crypto for people who don't want crypto",
  },
  {
    id: "04-xion",
    chapter: "Chapter 03",
    title: "XION",
    pullQuote: "If the chain is invisible, what is it actually for?",
    image: "/assets/floral-blue-birds.jpg",
    imageFallback: "/assets/get-verona-floral.jpg",
    tone: "dark",
    caption: "A chain you never see",
  },
  {
    id: "05-the-turn",
    chapter: "Chapter 04",
    title: "The turn",
    pullQuote: "The product was never abstraction. It was proof.",
    image: "/assets/floral-tropical-bird.jpg",
    imageFallback: "/assets/floral-birds-pine.jpg",
    tone: "dark",
    caption: "Companies answered the question",
  },
  {
    id: "06-verona",
    chapter: "Chapter 05",
    title: "Verona",
    pullQuote:
      "What enterprises had been paying for one verification at a time is now a network anyone can build on.",
    image: "/assets/story/cornflower-brown.png",
    imageFallback: "/assets/floral-blue-birds.jpg",
    imageMode: "tile",
    tone: "dark",
    caption: "A network of proven facts",
  },
  {
    id: "07-the-name",
    chapter: "Chapter 06",
    title: "The name",
    titleAccent: "Verona means truth.",
    pullQuote:
      "Verus, the Latin root for verify and veritas. A company proving what's real took the name that means true.",
    image: "/assets/story/columns-venice.png",
    imageFallback: "/assets/floral-pink-rose.jpg",
    tone: "dark",
    caption: "Verus · veritas · verify",
  },
  {
    id: "08-what-we-see",
    chapter: "Chapter 07",
    title: "What we see",
    pullQuote:
      "It started with one proof, made with fire. The ones that come after it will not need the spectacle.",
    image: "/assets/floral-pink-rose.jpg",
    imageFallback: "/assets/floral-tropical-bird.jpg",
    tone: "dark",
    caption: "The intelligence layer · 2026 →",
  },
];

function Frame({ frame, index, total }: { frame: StoryFrame; index: number; total: number }) {
  const textColor = frame.tone === "dark" ? "text-linen" : "text-sea";
  const markOpacity = frame.tone === "dark" ? "opacity-95" : "opacity-80";

  return (
    <article
      id={frame.id}
      className={`story-frame ${textColor}`}
      aria-roledescription="story frame"
      aria-label={`${frame.chapter}: ${frame.title}`}
    >
      <div
        className="story-frame-image"
        data-mode={frame.imageMode ?? "cover"}
        style={{
          backgroundImage: `url('${frame.image}'), url('${frame.imageFallback}')`,
        }}
        aria-hidden
      />
      <div
        className={`story-frame-overlay ${frame.tone === "dark" ? "story-frame-overlay-dark" : "story-frame-overlay-light"}`}
        aria-hidden
      />

      <div className="story-frame-content">
        <header className={`story-frame-marks ${markOpacity}`}>
          <span aria-hidden />
          <LogoGlyph className="h-[24px] w-auto md:h-[30px]" />
        </header>

        <div className="story-frame-body">
          <h2 className="story-frame-title">
            {frame.title}
            {frame.titleAccent ? (
              <>
                {" "}
                <span className="story-frame-title-accent">
                  {frame.titleAccent}
                </span>
              </>
            ) : null}
          </h2>
          {frame.pullQuote ? (
            <p className="story-frame-quote">{frame.pullQuote}</p>
          ) : null}
        </div>

        <footer className={`story-frame-footer ${markOpacity}`}>
          <div className="story-frame-mark">
            <VeronaWordmark className="h-[18px] w-auto md:h-[20px]" />
            <p className="story-frame-caption">{frame.caption}</p>
          </div>
          <p className="story-frame-chapter">
            {frame.chapter}{" "}
            <span aria-hidden>·</span>{" "}
            <span className="story-frame-index">
              {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </span>
          </p>
        </footer>
      </div>
    </article>
  );
}

export default function StoryStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    // Translate vertical wheel intent into a smooth horizontal sweep.
    // Approach: each wheel tick adds to a target scroll position;
    // requestAnimationFrame lerps the real scrollLeft toward that target.
    // The CSS uses `scroll-snap-type: x proximity` so the browser only
    // settles to a frame when the user stops, never fighting mid-animation.
    let targetX = el.scrollLeft;
    let rafId: number | null = null;

    const max = () => el.scrollWidth - el.clientWidth;
    const clamp = (v: number) => Math.max(0, Math.min(max(), v));

    const tick = () => {
      const delta = targetX - el.scrollLeft;
      if (Math.abs(delta) < 0.5) {
        el.scrollLeft = targetX;
        rafId = null;
        return;
      }
      // Ease-out: cover ~12% of the remaining distance each frame at 60fps.
      el.scrollLeft += delta * 0.12;
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafId === null) rafId = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      const absY = Math.abs(e.deltaY);
      const absX = Math.abs(e.deltaX);
      // Horizontal trackpad gestures fall through to native scroll.
      if (absY === 0 || absY <= absX) return;
      e.preventDefault();
      // Light gain so a normal wheel notch advances a decent chunk
      // without feeling twitchy.
      targetX = clamp(targetX + e.deltaY * 1.15);
      start();
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    // Arrow keys page through frames when the strip has focus.
    const onKey = (e: KeyboardEvent) => {
      const w = el.clientWidth;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        targetX = clamp(Math.round(targetX / w) * w + w);
        start();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        targetX = clamp(Math.round(targetX / w) * w - w);
        start();
      } else if (e.key === "Home") {
        e.preventDefault();
        targetX = 0;
        start();
      } else if (e.key === "End") {
        e.preventDefault();
        targetX = max();
        start();
      }
    };
    el.addEventListener("keydown", onKey);

    // If anything else (touch swipe, trackpad horizontal) moves scrollLeft,
    // re-sync the target so the next wheel event continues from that point
    // instead of jumping back to where the lerp left off.
    let syncTimer: number | null = null;
    const onScroll = () => {
      if (rafId !== null) return; // currently lerping, ignore
      if (syncTimer !== null) window.clearTimeout(syncTimer);
      syncTimer = window.setTimeout(() => {
        targetX = el.scrollLeft;
      }, 80);
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (syncTimer !== null) window.clearTimeout(syncTimer);
    };
  }, []);

  return (
    <main
      ref={stripRef}
      className="story-strip"
      aria-label="Verona story"
      tabIndex={0}
    >
      <p className="sr-only">
        Scroll right to read each chapter of the Verona story. Use arrow keys
        to page between frames.
      </p>
      {FRAMES.map((frame, index) => (
        <Frame key={frame.id} frame={frame} index={index} total={FRAMES.length} />
      ))}
    </main>
  );
}
