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
  return (
    <article
      id={frame.id}
      className="story-frame"
      aria-roledescription="story frame"
      aria-label={`${frame.chapter}: ${frame.title}`}
    >
      <div
        className="story-frame-image"
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
        <div className="story-frame-card">
          <LogoGlyph className="story-frame-card-mark h-[26px] w-auto" />
          <p className="story-frame-card-chapter">{frame.chapter}</p>
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
          <footer className="story-frame-card-footer">
            <div className="story-frame-card-caption">
              <VeronaWordmark className="mb-2 h-[16px] w-auto" />
              <span>{frame.caption}</span>
            </div>
            <p className="story-frame-card-index">
              {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
}

export default function StoryStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    // Native smooth scroll. Why this works and the previous lerp didn't:
    // CSS scroll-snap was snapping every intermediate rAF frame back to
    // the nearest cover, so any small `scrollLeft += delta` was rubber-
    // banded to 0. We dropped snap and now let the browser's own smooth
    // scroller handle easing.
    //
    // Pagination: each wheel turn moves by one full frame. The cooldown
    // prevents a fast trackpad fling from skipping past covers.
    let cooldown = false;
    const cooldownMs = 520;

    const advance = (direction: 1 | -1) => {
      if (cooldown) return;
      const w = el.clientWidth;
      const current = el.scrollLeft;
      const targetIndex = Math.round(current / w) + direction;
      const maxIndex = Math.round((el.scrollWidth - w) / w);
      const clamped = Math.max(0, Math.min(maxIndex, targetIndex));
      el.scrollTo({ left: clamped * w, behavior: "smooth" });
      cooldown = true;
      window.setTimeout(() => {
        cooldown = false;
      }, cooldownMs);
    };

    const onWheel = (e: WheelEvent) => {
      const absY = Math.abs(e.deltaY);
      const absX = Math.abs(e.deltaX);
      if (absY === 0 || absY <= absX) return;
      e.preventDefault();
      if (absY < 20) return; // ignore tiny noise from inertial scroll tails
      advance(e.deltaY > 0 ? 1 : -1);
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        advance(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        advance(-1);
      } else if (e.key === "Home") {
        e.preventDefault();
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else if (e.key === "End") {
        e.preventDefault();
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
      }
    };
    el.addEventListener("keydown", onKey);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("keydown", onKey);
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
