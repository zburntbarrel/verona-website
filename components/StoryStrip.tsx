"use client";

import { useEffect, useRef } from "react";
import { LogoGlyph } from "@/components/icons";

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
    image: "/assets/story/rococo-earth.jpg",
    imageFallback: "/assets/floral-birds-pine.jpg",
    tone: "dark",
    caption: "Cover",
  },
  {
    id: "01-opening-proof",
    chapter: "Opening proof",
    title: "What makes a digital thing",
    titleAccent: "real?",
    image: "/assets/story/rococo-girl-running.jpg",
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
    image: "/assets/story/rococo-swing.jpg",
    imageFallback: "/assets/floral-pink-rose.jpg",
    tone: "dark",
    caption: "2021 · A burn, a livestream, a question",
  },
  {
    id: "03-burnt",
    chapter: "Chapter 02",
    title: "Burnt",
    pullQuote: "The technology held up. The people gave up.",
    image: "/assets/story/rococo-cythera.jpg",
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
    image: "/assets/story/rococo-garden-statue.webp",
    imageFallback: "/assets/floral-blue-birds.jpg",
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
    image: "/assets/story/rococo-oath.jpg",
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

function Frame({ frame }: { frame: StoryFrame }) {
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
            <p className="story-frame-card-caption">{frame.caption}</p>
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

    // Custom rAF tween. Browser-native scrollTo({behavior:"smooth"}) is
    // ~300ms with fixed easing and feels abrupt for editorial pacing.
    // easeInOutCubic over 900ms gives soft entry, mid-glide, soft landing.
    const DURATION = 900;
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let activeTween: number | null = null;
    const tweenTo = (target: number, duration = DURATION) => {
      if (activeTween !== null) cancelAnimationFrame(activeTween);
      const start = el.scrollLeft;
      const delta = target - start;
      if (delta === 0) return;
      const startTime = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        el.scrollLeft = start + delta * easeInOutCubic(t);
        if (t < 1) activeTween = requestAnimationFrame(tick);
        else activeTween = null;
      };
      activeTween = requestAnimationFrame(tick);
    };

    let cooldown = false;
    const cooldownMs = DURATION + 60;

    const advance = (direction: 1 | -1) => {
      if (cooldown) return;
      const w = el.clientWidth;
      const current = el.scrollLeft;
      const targetIndex = Math.round(current / w) + direction;
      const maxIndex = Math.round((el.scrollWidth - w) / w);
      const clamped = Math.max(0, Math.min(maxIndex, targetIndex));
      tweenTo(clamped * w);
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
        tweenTo(0, 1100);
      } else if (e.key === "End") {
        e.preventDefault();
        tweenTo(el.scrollWidth - el.clientWidth, 1100);
      }
    };
    el.addEventListener("keydown", onKey);

    // --rise progress per frame. 0 = image fully translated down out of view,
    // 1 = image at rest. Smoothstep across the entering half so the rise feels
    // like a video plate coming up as the cover comes into view.
    const frames = Array.from(el.querySelectorAll<HTMLElement>(".story-frame"));
    const updateRise = () => {
      const w = el.clientWidth;
      if (!w) return;
      const sx = el.scrollLeft;
      for (let i = 0; i < frames.length; i++) {
        const frame = frames[i];
        // offset > 0 = frame is to the right of the viewport center,
        // offset < 0 = frame is to the left. Normalize by viewport width.
        const offset = (i * w - sx) / w;
        // Rise from 0 (one frame to the right) to 1 (centered or left of center).
        // Frames already past center stay at full rise so they don't drop
        // back down on the way out — that would feel like an artifact.
        const raw = 1 - Math.min(1, Math.max(0, offset));
        // smoothstep for a softer entrance
        const eased = raw * raw * (3 - 2 * raw);
        frame.style.setProperty("--rise", eased.toFixed(3));
      }
    };
    updateRise();
    el.addEventListener("scroll", updateRise, { passive: true });
    window.addEventListener("resize", updateRise);

    return () => {
      if (activeTween !== null) cancelAnimationFrame(activeTween);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("scroll", updateRise);
      window.removeEventListener("resize", updateRise);
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
      {FRAMES.map((frame) => (
        <Frame key={frame.id} frame={frame} />
      ))}
    </main>
  );
}
