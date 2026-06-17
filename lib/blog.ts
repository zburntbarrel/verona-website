// Blog content layer.
//
// Posts are stored as structured data so the index, the [slug] route, and the
// sitemap can all read from one typed source. Headings inside `body` are used
// to build the in-article table of contents, so keep them meaningful.
//
// Content note: these posts were migrated from the prior XION brand and
// rebranded to Verona. Several reference third parties (exchanges, custodians,
// partners, awards) — confirm each external claim still holds under the Verona
// name before publishing.

export type BlogCategory =
  | "Product"
  | "Custody"
  | "Exchanges"
  | "Partnerships"
  | "Company";

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  date: string; // ISO 8601
  category: BlogCategory;
  author: string;
  readingMinutes: number;
  featured?: boolean;
  // Cover image used both as the index-card background and the post hero
  // background. Public-domain Dutch/rococo floral, ~1400px wide. One per post.
  image: string;
  body: BlogBlock[];
};

export const blogCategories: BlogCategory[] = [
  "Product",
  "Custody",
  "Exchanges",
  "Partnerships",
  "Company",
];

const posts: BlogPost[] = [
  {
    slug: "verona-now-integrates-payments-credentials-and-tamper-proof-records-to-enterprise-grade-applications-through-a-unified-api",
    image: "/assets/blog-cover-01.jpg",
    title:
      "Verona Now Integrates Payments, Credentials, and Tamper-Proof Records Into Enterprise-Grade Applications Through a Unified API",
    dek: "The use cases always made sense. What never made sense was the integration cost. Verona changes that with a unified API built on OAuth2 — the same protocol your team already uses.",
    date: "2026-03-30",
    category: "Product",
    author: "Verona Team",
    readingMinutes: 5,
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "The use cases have always made sense. Programmable payments with rules baked in. Credentials that are portable and cryptographically real. Records nobody can edit after the fact. What never made sense was the integration cost and the time it took to ship any of it.",
      },
      {
        type: "paragraph",
        text: "Verona changes that with a single unified API built on OAuth2 — the same protocol your team already uses for everything else. Instead of standing up bespoke infrastructure for each capability, developers reach for one well-understood standard and get payments, verifiable credentials, and tamper-proof records behind it.",
      },
      { type: "heading", text: "One integration, three primitives" },
      {
        type: "paragraph",
        text: "Verona exposes its core primitives — value, proof, and ownership — through endpoints that look and behave like any modern OAuth2 service. The blockchain underneath is an implementation detail. Teams authenticate, request a scope, and build.",
      },
      {
        type: "list",
        items: [
          "Programmable payments with conditions enforced at the protocol level.",
          "Portable, user-owned credentials that verify without exposing the underlying data.",
          "Append-only records that remain auditable long after they are written.",
        ],
      },
      { type: "heading", text: "Built for the teams already shipping" },
      {
        type: "paragraph",
        text: "By meeting enterprise engineering teams where they already are, Verona collapses a multi-quarter integration into something a single sprint can deliver. The result is verification as a feature your product can simply turn on.",
      },
    ],
  },
  {
    slug: "veronas-protocol-level-zk-verification-and-on-chain-email-authentication-a-technical-deep-dive",
    image: "/assets/blog-cover-02.jpg",
    title:
      "Verona's Protocol-Level ZK Verification and On-Chain Email Authentication: A Technical Deep Dive",
    dek: "Verona's ZK Module and DKIM Module are live on testnet: protocol-level proof verification using GNARK and on-chain email authentication keys with permanent historical records. No DNS dependencies, no smart-contract overhead.",
    date: "2026-02-13",
    category: "Product",
    author: "Verona Team",
    readingMinutes: 8,
    body: [
      {
        type: "paragraph",
        text: "Verona's ZK Module and DKIM Module are live on testnet. Together they move zero-knowledge proof verification and email authentication down to the protocol level, where they are faster, cheaper, and far harder to tamper with than equivalent smart-contract implementations.",
      },
      { type: "heading", text: "Proof verification with GNARK" },
      {
        type: "paragraph",
        text: "The ZK Module verifies proofs natively using GNARK rather than re-implementing a verifier in contract bytecode. Verification becomes a first-class network operation: predictable in cost, consistent in behavior, and available to every application on Verona without bespoke circuitry.",
      },
      { type: "heading", text: "On-chain email authentication" },
      {
        type: "paragraph",
        text: "The DKIM Module records email authentication keys on-chain with a permanent historical record. Because the keys live on the network, verification carries no DNS dependency and no smart-contract overhead — a claim about an email can be checked against the exact key that signed it, even years later.",
      },
      { type: "heading", text: "Why protocol-level matters" },
      {
        type: "paragraph",
        text: "Pushing these capabilities into the protocol removes the per-application tax that has kept verifiable email and ZK proofs niche. Builders inherit them by default, which is the only way primitives like these reach mainstream scale.",
      },
    ],
  },
  {
    slug: "verona-launches-first-on-chain-zero-knowledge-email-verification",
    image: "/assets/blog-cover-03.jpg",
    title:
      "Prove Anything in Your Email: Verona Launches First On-Chain ZK Email Verification",
    dek: "Verona launches the first on-chain email verification infrastructure, enabling zero-knowledge proofs from your inbox without exposing the email itself.",
    date: "2026-02-09",
    category: "Product",
    author: "Verona Team",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "Verona has launched the first on-chain email verification infrastructure. It lets anyone generate a zero-knowledge proof about the contents of an email — that it came from a particular sender, contained a particular fact, or confirmed a particular action — without ever revealing the email itself.",
      },
      { type: "heading", text: "The inbox as a source of truth" },
      {
        type: "paragraph",
        text: "Email is the most universal record most people own. A receipt, a confirmation, an offer letter, a statement — all of it sits in an inbox, signed and verifiable, and almost none of it is usable on-chain. Verona turns those messages into proofs an application can trust.",
      },
      { type: "heading", text: "Private by construction" },
      {
        type: "paragraph",
        text: "Because the proof is zero-knowledge, the user shares only the specific claim they want to make. The raw email, its headers, and everything else stay private. That is the difference between verifying a fact and surrendering your data to verify it.",
      },
    ],
  },
  {
    slug: "verona-founder-anthony-anzalone-named-to-forbes-30-under-30-finance-list",
    image: "/assets/blog-cover-04.jpg",
    title:
      "Verona Founder Anthony Anzalone Named to Forbes 30 Under 30 Finance List",
    dek: "Four years after burning a Banksy and sparking a global debate about digital ownership, Verona founder Anthony Anzalone has been named to the Forbes 30 Under 30 Finance list.",
    date: "2026-01-14",
    category: "Company",
    author: "Verona Team",
    readingMinutes: 4,
    body: [
      {
        type: "paragraph",
        text: "Four years ago he burned a Banksy and sparked a global debate about digital ownership. Today, Verona founder Anthony Anzalone has been named to the Forbes 30 Under 30 Finance list for building something bigger: verification infrastructure that proves what is real on an internet drowning in fakes.",
      },
      { type: "heading", text: "From provocation to infrastructure" },
      {
        type: "paragraph",
        text: "The Banksy moment was a question about what ownership means when anything can be copied. Verona is the answer at scale — a network where value, proof, and ownership are programmable, portable, and verifiable by anyone.",
      },
      {
        type: "quote",
        text: "Web3 needs to work for real people, not just crypto insiders.",
        cite: "Anthony Anzalone, Founder of Verona",
      },
      { type: "heading", text: "What the recognition signals" },
      {
        type: "paragraph",
        text: "Inclusion on the Finance list reflects a shift in how the industry frames Verona's work — not as speculation, but as the connective tissue a trustworthy internet needs.",
      },
    ],
  },
  {
    slug: "verona-bybit-bga-launch-global-impact-accelerator",
    image: "/assets/blog-cover-05.jpg",
    title:
      "Verona's Global Impact Accelerator Goes Live With the Blockchain for Good Alliance",
    dek: "Verona and the Blockchain for Good Alliance are launching the Global Impact Accelerator to support builders solving real-world challenges aligned with the UN Sustainable Development Goals.",
    date: "2025-11-05",
    category: "Partnerships",
    author: "Verona Team",
    readingMinutes: 4,
    body: [
      {
        type: "paragraph",
        text: "Verona and the Blockchain for Good Alliance are launching the Global Impact Accelerator to support builders solving real-world challenges in line with the UN Sustainable Development Goals.",
      },
      { type: "heading", text: "From idea to impact" },
      {
        type: "paragraph",
        text: "The program provides early funding, technical support, and institutional access to entrepreneurs building trust-driven systems across emerging markets. The goal is simple: help founders go from idea to impact by proving what works, then scaling it globally through open-source, verifiable infrastructure.",
      },
      { type: "heading", text: "Proof as a development tool" },
      {
        type: "paragraph",
        text: "When outcomes can be verified rather than asserted, funding and trust flow to what actually works. That is the premise behind the accelerator, and the reason Verona's primitives sit at its center.",
      },
    ],
  },
  {
    slug: "verona-launches-app-verifications-becoming-the-first-to-bring-web2-mobile-app-data-on-chain",
    image: "/assets/blog-cover-06.jpg",
    title:
      "Verona Launches App Verifications, Becoming the First to Bring Web2 Mobile App Data On-Chain",
    dek: "App Verifications brings real-world data from hundreds of millions of smartphone users onto Verona through app attestations — letting anyone verify what happens inside a Web2 app using first-party data.",
    date: "2025-11-03",
    category: "Product",
    author: "Verona Team",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "App Verifications brings real-world data from hundreds of millions of smartphone users onto Verona through app attestations. It empowers users, builders, and entrepreneurs to create applications that can verify anything happening inside a Web2 app using first-party data.",
      },
      { type: "heading", text: "The data was always there" },
      {
        type: "paragraph",
        text: "Your activity inside the apps you already use is real, first-party, and yours. App Verifications gives that data a way to become a portable, user-owned proof — without scraping, without intermediaries, and without handing the underlying information to a third party.",
      },
      { type: "heading", text: "A new surface for builders" },
      {
        type: "paragraph",
        text: "For developers, App Verifications opens an enormous design space: products that reward verified behavior, confirm real usage, or unlock features based on attested activity — all grounded in data the user controls.",
      },
    ],
  },
  {
    slug: "verona-partners-with-wrth-and-aws",
    image: "/assets/blog-cover-07.jpg",
    title:
      "Verona Partners With WRTH and AWS to Solve E-Commerce's $467 Billion Counterfeit Problem",
    dek: "Counterfeits drain $467B from global commerce and keep rising with online shopping. Verona, WRTH, and AWS are embedding verification into e-commerce transactions, turning authenticity into a built-in feature.",
    date: "2025-10-31",
    category: "Partnerships",
    author: "Verona Team",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "Counterfeits drain an estimated $467 billion from global commerce every year, and the figure keeps rising alongside online shopping. Verona has partnered with WRTH and Amazon Web Services to embed verification directly into e-commerce transactions, making authenticity a built-in feature rather than an afterthought.",
      },
      { type: "heading", text: "Authenticity at the point of sale" },
      {
        type: "paragraph",
        text: "By attaching verifiable provenance to products and the transactions around them, the partnership lets shoppers and platforms confirm authenticity at the moment it matters most — before money changes hands.",
      },
      { type: "heading", text: "Verification that scales with commerce" },
      {
        type: "paragraph",
        text: "Pairing Verona's proof layer with AWS infrastructure and WRTH's commerce expertise makes trustworthy digital commerce something that works at the scale of the modern internet, not just in pilots.",
      },
    ],
  },
  {
    slug: "verona-joins-bybit-in-the-blockchain-for-good-alliance",
    image: "/assets/blog-cover-08.jpg",
    title: "Verona Joins Bybit in the Blockchain for Good Alliance",
    dek: "Trust in institutions is eroding while the world leans harder on opaque digital systems. Verona is joining the Blockchain for Good Alliance to help replace assumption with proof.",
    date: "2025-10-29",
    category: "Partnerships",
    author: "Verona Team",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "Trust in institutions is collapsing while the world leans harder on opaque digital systems. Verona is joining the Blockchain for Good Alliance to help replace assumption with proof and rebuild trust through verifiable public infrastructure.",
      },
      { type: "heading", text: "Why this alliance, why now" },
      {
        type: "paragraph",
        text: "The Alliance brings together organizations using blockchain to address real-world problems. Verona's contribution is the layer that makes outcomes checkable — the difference between a promise and a proof.",
      },
    ],
  },
  {
    slug: "verona-evolves-why-verify-anything-is-so-vital",
    image: "/assets/blog-cover-09.jpg",
    title: "Verona Evolves: Why 'Verify Anything' Is So Vital",
    dek: "Trust has eroded across the internet. Claims, clicks, and credentials are no longer taken at face value, and the cost of that doubt is rising everywhere. Verona is evolving to close the gap.",
    date: "2025-10-23",
    category: "Company",
    author: "Verona Team",
    readingMinutes: 6,
    body: [
      {
        type: "paragraph",
        text: "Trust has eroded across the internet. Claims, clicks, and credentials are no longer taken at face value, and the cost of that doubt is rising across every digital system. Verona is evolving to close that gap by making verification of anything immediate, invisible, and universal.",
      },
      { type: "heading", text: "The doubt tax" },
      {
        type: "paragraph",
        text: "Every unverifiable claim adds friction: extra checks, extra middlemen, extra hesitation. Multiplied across commerce, identity, media, and finance, that hesitation is a tax the whole internet pays.",
      },
      { type: "heading", text: "A shared fact layer" },
      {
        type: "paragraph",
        text: "Verona's answer is a shared fact layer — proof, value, and ownership available to any application, so that truth becomes the default rather than the exception. 'Verify anything' is not a slogan; it is the precondition for an internet, and an agent economy, that works.",
      },
    ],
  },
  {
    slug: "verona-fireblocks-integration-opens-doors-to-institutional-adoption",
    image: "/assets/blog-cover-10.jpg",
    title:
      "Fireblocks Integrates Native Verona Support, Opening Doors to 2,400+ Institutions",
    dek: "Verona has joined forces with Fireblocks to accelerate institutional adoption, building a secure bridge between 2,400+ institutions and the Verona ecosystem.",
    date: "2025-10-07",
    category: "Custody",
    author: "Verona Team",
    readingMinutes: 4,
    body: [
      {
        type: "paragraph",
        text: "Verona has officially joined forces with Fireblocks to accelerate institutional blockchain adoption. The integration builds a secure bridge between Fireblocks' network of 2,400+ institutions and the Verona ecosystem, while making onboarding seamless for everyone involved.",
      },
      { type: "heading", text: "Institutional-grade by default" },
      {
        type: "paragraph",
        text: "Fireblocks secures a network responsible for trillions of dollars in digital-asset transactions. Native Verona support means those institutions can custody, transfer, and operate with Verona using infrastructure they already trust.",
      },
      { type: "heading", text: "A two-way bridge" },
      {
        type: "paragraph",
        text: "For institutions, the integration is a low-friction path into Verona. For the Verona ecosystem, it is access to one of the deepest pools of institutional capital and operational rigor in the industry.",
      },
    ],
  },
  {
    slug: "kraken-lists-verona-expanding-access-across-north-america",
    image: "/assets/blog-cover-11.jpg",
    title: "Kraken Lists Verona, Expanding Access Across North America",
    dek: "Verona is now listed on Kraken. Here's what the listing unlocks, and why it matters for access across North America.",
    date: "2025-09-12",
    category: "Exchanges",
    author: "Verona Team",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "Verona is now listed on Kraken, one of the most established and trusted exchanges in the industry. The listing meaningfully expands access for users across North America and beyond.",
      },
      { type: "heading", text: "What the listing unlocks" },
      {
        type: "paragraph",
        text: "A Kraken listing lowers the barrier to acquiring $VERONA for millions of users on a platform they already know, with the liquidity and reliability a major exchange provides.",
      },
      { type: "heading", text: "Why it matters" },
      {
        type: "paragraph",
        text: "Access is the first step toward participation. Easier, more trusted access to $VERONA means more people securing the network, building on it, and putting verifiable data to work.",
      },
    ],
  },
  {
    slug: "verona-integrates-apple-id-onboards-billions-onchain",
    image: "/assets/blog-cover-12.jpg",
    title:
      "Verona Brings Apple's 3 Billion Devices On-Chain: Mass Adoption Just Got Real",
    dek: "Verona is the first blockchain to support Apple ID login at the protocol level, unlocking one-click access to Web3 for over 3 billion Apple users.",
    date: "2025-09-08",
    category: "Product",
    author: "Verona Team",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "Verona has become the first blockchain to support Apple ID login at the protocol level, unlocking one-click access to Web3 for the more than 3 billion devices in Apple's ecosystem.",
      },
      { type: "heading", text: "Sign in with what you already have" },
      {
        type: "paragraph",
        text: "There is no seed phrase to write down, no extension to install, and no token to acquire before you can begin. A user signs in the way they sign in to everything else — and they are on-chain.",
      },
      { type: "heading", text: "Why this is the adoption unlock" },
      {
        type: "paragraph",
        text: "The single largest barrier to mainstream Web3 has always been the first five minutes. By making those five minutes feel like signing into any modern app, Verona turns 3 billion devices into a viable on-ramp.",
      },
    ],
  },
  {
    slug: "bybit-eu-taps-verona-for-inaugural-launchpool-in-the-eu",
    image: "/assets/blog-cover-13.jpg",
    title: "Bybit EU Taps Verona for Inaugural Launchpool in the EU",
    dek: "Bybit EU has chosen Verona for its first-ever EU Launchpool, opening regulated access to $VERONA for 450M+ users.",
    date: "2025-08-14",
    category: "Exchanges",
    author: "Verona Team",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "Bybit EU has chosen Verona for its first-ever EU Launchpool, opening regulated access to $VERONA for a potential audience of more than 450 million users.",
      },
      { type: "heading", text: "Regulated access, by design" },
      {
        type: "paragraph",
        text: "Being the inaugural Launchpool project on Bybit EU places $VERONA inside a regulated European framework from the start — a signal of both demand and compliance maturity.",
      },
      { type: "heading", text: "Meeting users where they are" },
      {
        type: "paragraph",
        text: "Launchpool gives a vast user base a familiar, low-friction way to earn and hold $VERONA, extending Verona's reach across the EU.",
      },
    ],
  },
  {
    slug: "ledger-integrates-verona-expanding-reach-to-6-million-new-users",
    image: "/assets/blog-cover-14.jpg",
    title:
      "Ledger Integrates Verona Natively, Unlocking Secure Web3 Access for 6 Million+ Users",
    dek: "Ledger's global base of 6M+ users can now secure and stake native $VERONA via the Ledger Live app — the world's leading self-custody solution meets a consumer-first blockchain.",
    date: "2025-06-04",
    category: "Custody",
    author: "Verona Team",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "Ledger's global user base of more than 6 million people can now secure and stake native $VERONA tokens directly through the Ledger Live app. The world's leading self-custody solution meets a consumer-first blockchain.",
      },
      { type: "heading", text: "Self-custody, natively supported" },
      {
        type: "paragraph",
        text: "Native Ledger support means $VERONA holders can keep their assets in cold storage while still participating in staking and securing the network — no compromises between safety and participation.",
      },
      { type: "heading", text: "Security meets accessibility" },
      {
        type: "paragraph",
        text: "Pairing Ledger's hardware security with Verona's consumer-first design brings serious self-custody within reach of mainstream users.",
      },
    ],
  },
  {
    slug: "verona-launches-dave-the-premier-blockchain-mobile-development-kit",
    image: "/assets/blog-cover-15.jpg",
    title:
      "Verona Launches Dave, the Premier Blockchain Mobile Development Kit",
    dek: "The Mobile Development Kit 'Dave' breaks crypto's adoption barrier through native mobile apps that make blockchain invisible — enabling 18M mobile developers to meet billions of users where they are.",
    date: "2025-06-03",
    category: "Product",
    author: "Verona Team",
    readingMinutes: 4,
    body: [
      {
        type: "paragraph",
        text: "Verona has launched Dave, a Mobile Development Kit designed to break crypto's adoption barrier through native mobile apps that make blockchain invisible. Dave enables the world's roughly 18 million mobile developers to meet billions of users right where they already are: on their phones.",
      },
      { type: "heading", text: "Mobile-first, blockchain-invisible" },
      {
        type: "paragraph",
        text: "Dave gives developers the tools to build apps that feel like any other mobile app, with Verona's primitives handled under the surface. No wallet friction, no crypto onboarding — just products people can use.",
      },
      { type: "heading", text: "Unlocking the largest developer pool" },
      {
        type: "paragraph",
        text: "By speaking the language of mobile developers, Dave opens Verona to a developer population orders of magnitude larger than crypto-native engineering alone.",
      },
    ],
  },
  {
    slug: "verona-available-anchorage-digital-expanding-institutional-access",
    image: "/assets/blog-cover-16.jpg",
    title:
      "Verona Now Available Through Anchorage Digital, Expanding Institutional Access",
    dek: "Institutions can now access Verona from the security of Anchorage Digital's platform — a qualified custodian and home to the only federally chartered digital-asset bank.",
    date: "2025-03-20",
    category: "Custody",
    author: "Verona Team",
    readingMinutes: 4,
    body: [
      {
        type: "paragraph",
        text: "Institutions can now access Verona from the security of Anchorage Digital's platform. Anchorage Digital is a qualified custodian and home to the only federally chartered digital-asset bank, trusted by leading institutions.",
      },
      { type: "heading", text: "Custody, trading, and staking" },
      {
        type: "paragraph",
        text: "Through Anchorage Digital, institutions can custody, trade, and stake with Verona inside a regulated, security-first environment built for their requirements.",
      },
      { type: "heading", text: "A regulated path in" },
      {
        type: "paragraph",
        text: "For institutional participants, the standard is not just access but access that satisfies compliance and security mandates. Anchorage Digital provides exactly that path into Verona.",
      },
    ],
  },
  {
    slug: "verona-becomes-first-title-ii-mica-eu-compliant-l1-blockchain",
    image: "/assets/blog-cover-17.jpg",
    title:
      "Verona Becomes First Title II MiCA EU-Compliant L1 Blockchain",
    dek: "Verona is compliant with Title II EU regulations, becoming the first L1 on mainnet to release a Markets in Crypto-Assets (MiCA) whitepaper.",
    date: "2025-03-13",
    category: "Company",
    author: "Verona Team",
    readingMinutes: 4,
    body: [
      {
        type: "paragraph",
        text: "Verona is now compliant with Title II EU regulations, becoming the first Layer 1 on mainnet to release a Markets in Crypto-Assets (MiCA) whitepaper.",
      },
      { type: "heading", text: "Why MiCA matters" },
      {
        type: "paragraph",
        text: "MiCA is the EU's comprehensive framework for crypto-assets. Meeting its Title II requirements gives builders, institutions, and users in Europe a clear, regulated basis for engaging with Verona.",
      },
      { type: "heading", text: "Compliance as a foundation" },
      {
        type: "paragraph",
        text: "For a network built to bring verification to the mainstream, regulatory clarity is not a constraint — it is part of the foundation that makes mainstream and institutional adoption possible.",
      },
    ],
  },
  {
    slug: "verona-onboards-global-brands-uber-amazon-bmw-temu",
    image: "/assets/blog-cover-18.jpg",
    title:
      "Verona Opens Doors for Brand Engagement With Uber, Amazon Prime, BMW, The North Face, and Temu",
    dek: "Following its open mainnet launch, Verona is now used by household brands across fashion, gaming, e-commerce, automotive, and food to run reward-driven campaigns — driving acquisition costs down by over 79%.",
    date: "2025-02-20",
    category: "Partnerships",
    author: "Verona Team",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "Following Verona's open mainnet launch, it is now being used by household brands across fashion, gaming, e-commerce, automotive, and food — including Uber, Amazon Prime, BMW, The North Face, and Temu — to create engaging, reward-driven campaigns that strengthen customer connections and can drive user-acquisition costs down by over 79%.",
      },
      { type: "heading", text: "Engagement that pays for itself" },
      {
        type: "paragraph",
        text: "Verifiable, reward-driven engagement gives brands a way to connect with customers that is measurable and far more efficient than traditional acquisition — the kind of result that turns a pilot into a program.",
      },
      { type: "heading", text: "Verification under the hood" },
      {
        type: "paragraph",
        text: "What makes these campaigns work is verifiable user engagement: brands reward real, provable actions rather than guessing. Verona supplies that proof layer invisibly.",
      },
    ],
  },
  {
    slug: "uber-launches-on-verona-mainnet-case-study",
    image: "/assets/blog-cover-19.jpg",
    title: "Uber Utilizes Verona for Customer Acquisition on a Global Scale",
    dek: "The Verona-powered app EarnOS has launched on mainnet, with Uber among the global brands using it to connect with and acquire users through verifiable engagement.",
    date: "2025-02-10",
    category: "Partnerships",
    author: "Verona Team",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "EarnOS, a Verona-powered app, has launched on mainnet with Uber as the latest global brand using the platform to connect with and acquire users directly through verifiable user engagement.",
      },
      { type: "heading", text: "A global brand, a verifiable funnel" },
      {
        type: "paragraph",
        text: "For a company operating at Uber's scale, acquisition efficiency is everything. EarnOS, built on Verona, lets Uber reward verified actions and reach users with a precision that traditional channels struggle to match.",
      },
      { type: "heading", text: "What the case study shows" },
      {
        type: "paragraph",
        text: "The takeaway is simple: when engagement is provable, brands can pay for outcomes rather than impressions — and Verona is the layer that makes the outcome provable.",
      },
    ],
  },
  {
    slug: "verona-and-eigenlayer-integrate-bringing-actively-validated-services-avs-to-novel-consumer-application-builders",
    image: "/assets/blog-cover-20.jpg",
    title:
      "Verona and EigenLayer Integrate to Enable AVS Access for Consumer-Ready Application Builders",
    dek: "The integration lets Verona's developer pool tap EigenLayer's Actively Validated Services and ZK tooling — including zkTLS, provers, and coprocessors — backed by over $14.93B in security.",
    date: "2025-02-13",
    category: "Partnerships",
    author: "Verona Team",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "The integration allows Verona's growing developer pool to tap into EigenLayer's expansive list of Actively Validated Services (AVS) and leverage a wide range of ZK tools — including zkTLS, provers, and coprocessors — to build novel applications backed by over $14.93 billion in security.",
      },
      { type: "heading", text: "More tools, more trust" },
      {
        type: "paragraph",
        text: "AVS access gives Verona builders a deep catalog of verifiable services to compose with, while EigenLayer's restaked security underwrites them. The result is room to build ambitious, consumer-ready applications on a trustworthy base.",
      },
      { type: "heading", text: "ZK by default" },
      {
        type: "paragraph",
        text: "With zkTLS, provers, and coprocessors available out of the box, developers can bring zero-knowledge guarantees to consumer products without assembling the cryptographic stack themselves.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedPost(): BlogPost {
  const all = getAllPosts();
  return all.find((post) => post.featured) ?? all[0];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCategory = getAllPosts().filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = getAllPosts().filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
