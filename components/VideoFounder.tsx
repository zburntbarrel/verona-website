"use client";

export default function VideoFounder() {
  return (
    <section
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
      <div className="relative flex aspect-video w-screen items-center justify-center bg-white">
        <span className="font-[family-name:var(--font-inter)] text-[68px] font-bold text-black/30">
          VIDEO
        </span>
      </div>
    </section>
  );
}
