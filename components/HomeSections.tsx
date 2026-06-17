import type { CSSProperties } from "react";
import Link from "next/link";
import { externalLinks } from "@/lib/site";
import VerifiedFactsOrbit from "@/components/VerifiedFactsOrbit";

const proofSources = [
  ["Websites", "Prove what a site shows about you, without handing over the login."],
  ["Email", "Prove what landed in your inbox, without opening it up."],
  ["Passports", "Prove who you are, without copying the document."],
  ["Apps", "Prove what you did in an app, without exposing the account."],
];

const audiences = [
  {
    label: "For Humans",
    title: "It is your data. Get paid for it.",
    body: "Every day, you prove things online without thinking about it, and others profit at your expense. With Verona, your actions become assets you own and earn from.",
    cta: "Try Ero",
    href: externalLinks.ero,
    external: true,
  },
  {
    label: "For Enterprises",
    title: "Informed decisions, from the source.",
    body: "Make business decisions on records verified at the source. No one touches the data underneath, and you do not carry the liability.",
    cta: "See Burnt",
    href: externalLinks.burnt,
    external: true,
  },
  {
    label: "For Agents",
    title: "Agents that can finally act.",
    body: "Your agent acts on what you have already verified, without ever holding the data behind it.",
    cta: "Read the Docs",
    href: externalLinks.docs,
    external: true,
  },
  {
    label: "For Developers",
    title: "The primitives for autonomous apps.",
    body: "Build on a network of verified facts: proof, action, and money in one flow, on one network.",
    cta: "Read the Docs",
    href: externalLinks.docs,
    external: true,
  },
];

const blogPosts = [
  "Reality in the age of AI",
  "Verona's guide to verified products",
  "Building out in the open",
];

function CtaLink({
  href,
  children,
  external,
  floral = "1",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  floral?: "1" | "2" | "3";
}) {
  const className = "cta-link inline-flex h-11 items-center justify-center rounded-[4px] border border-current px-4 font-[family-name:var(--font-hedvig-sans)] text-[13px] uppercase tracking-[0.1em]";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className} data-floral={floral}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} data-floral={floral}>
      {children}
    </Link>
  );
}

export function HowVeronaWorks() {
  return (
    <section className="site-band bg-linen text-sea">
      <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="section-copy">
          <p className="eyebrow">How Verona works</p>
          <h2 className="display-heading">One proof, and the whole network trusts it.</h2>
          <p className="body-copy">
            Verify a fact once, at its source. You own it, any agent you authorize acts on it, and the data underneath never shows.
          </p>
        </div>

        <div className="proof-network" aria-label="Source proof network">
          <div className="proof-column">
            {proofSources.map(([title, body]) => (
              <div key={title} className="proof-card">
                <span>{title}</span>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <div className="proof-core">
            <span>Verified fact</span>
          </div>
          <div className="proof-fan">
            <span>Agents</span>
            <span>Apps</span>
            <span>Enterprise</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NetworkAudience() {
  return (
    <section className="site-band bg-sea text-linen">
      <div className="site-container">
        <div className="section-copy max-w-[720px]">
          <p className="eyebrow text-sky">Network model</p>
          <h2 className="display-heading">Every participant connects to the same fact layer.</h2>
          <p className="body-copy text-seashell">
            Humans, enterprises, agents, and developers do different jobs, but the shared center is the same: reusable verified facts.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {audiences.map((audience) => (
            <article key={audience.label} className="audience-card">
              <p className="eyebrow text-sky">{audience.label}</p>
              <h3>{audience.title}</h3>
              <p>{audience.body}</p>
              <CtaLink href={audience.href} external={audience.external}>
                {audience.cta}
              </CtaLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EroProof() {
  return (
    <section className="site-band bg-forest text-linen">
      <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="section-copy">
          <p className="eyebrow text-sky">Live proof</p>
          <h2 className="display-heading">Ero, built on Verona, live.</h2>
          <p className="body-copy text-seashell">
            People earn real money for what they already do online. Their activity is verified, their data never exposed.
          </p>
          <CtaLink href={externalLinks.ero} external>
            Try Ero
          </CtaLink>
        </div>

        <div className="product-frame">
          <div className="product-frame-top" />
          <div className="product-frame-body">
            <span>Verified activity</span>
            <span>Private proof</span>
            <span>Reward earned</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandProof() {
  // Each row scrolls in alternating directions at slightly different cadences,
  // so the wall feels like motion rather than a single conveyor belt.
  const rows = [
    { src: "/assets/brand-logos-row-1.png", duration: "60s", reverse: false },
    { src: "/assets/brand-logos-row-2.png", duration: "72s", reverse: true },
    { src: "/assets/brand-logos-row-3.png", duration: "84s", reverse: false },
  ];

  return (
    <section className="site-band bg-seashell text-sea">
      <div className="site-container">
        <div className="section-copy max-w-[620px]">
          <p className="eyebrow">Brands</p>
          <h2 className="display-heading">
            Verona, leveraged by brands you already use.
          </h2>
        </div>
      </div>
      <div
        className="brand-marquee mt-12"
        aria-label="Brand examples"
        role="list"
      >
        {rows.map((row, i) => (
          <div
            key={i}
            className="brand-marquee-row"
            data-reverse={row.reverse ? "true" : undefined}
            style={
              { "--marquee-duration": row.duration } as CSSProperties
            }
          >
            {/* Doubled strip = one full duplicate so the loop point is
                seamless. The animation moves the inner -50% then jumps back. */}
            <div className="brand-marquee-strip">
              <img
                src={row.src}
                alt=""
                role="presentation"
                className="brand-marquee-img"
                draggable={false}
              />
              <img
                src={row.src}
                alt=""
                role="presentation"
                className="brand-marquee-img"
                draggable={false}
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BlogPreview() {
  return (
    <section className="site-band bg-linen text-sea">
      <div className="site-container">
        <div className="section-copy max-w-[680px]">
          <p className="eyebrow">Blog</p>
          <h2 className="display-heading">Follow the latest news and updates about Verona.</h2>
          <p className="body-copy">Blogs, announcements, launches, and notes from the team building the intelligence layer.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {blogPosts.map((title) => (
            <Link key={title} href="/blog" className="article-card">
              <span>July 2026</span>
              <h3>{title}</h3>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <CtaLink href="/blog">Read more</CtaLink>
        </div>
      </div>
    </section>
  );
}

export function TokenSection() {
  return (
    <section
      className="site-band bg-sea text-linen"
      style={{
        backgroundImage: "linear-gradient(rgba(25,37,80,0.78), rgba(25,37,80,0.78)), url('/assets/button-accent.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="site-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="w-full">
          <VerifiedFactsOrbit />
        </div>
        <div className="section-copy">
          <p className="eyebrow text-sky">$VERONA</p>
          <h2 className="display-heading">A stronger network is a smarter network.</h2>
          <p className="body-copy text-seashell">
            Apps and agents feed a growing verified network, demand draws on it, and $VERONA is how you hold a piece of it.
          </p>
          <div className="flex flex-wrap gap-3">
            <CtaLink href="/get-verona" floral="3">Get $VERONA</CtaLink>
            <CtaLink href={externalLinks.litepaper} external floral="3">
              Read the litepaper
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CloseAndSignup() {
  return (
    <section id="newsletter" className="site-band bg-linen text-sea">
      <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div className="section-copy">
          <p className="eyebrow">Verona</p>
          <h2 className="display-heading">Prove it once. Own it. Put it to work.</h2>
          <p className="body-copy">
            The network is live, the proofs are real, and your agents are waiting.
          </p>
          <div className="flex flex-wrap gap-3">
            <CtaLink href={externalLinks.ero} external floral="1">
              Try Ero
            </CtaLink>
            <CtaLink href="/get-verona" floral="2">Get $VERONA</CtaLink>
          </div>
        </div>

        <form className="signup-form">
          <h3>Get Verona in your inbox.</h3>
          <p>The intelligence layer is just getting started. Stay close. No spam, unsubscribe anytime.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="email@domain.com" aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
}
