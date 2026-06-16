export const site = {
  name: "Verona",
  url: "https://verona.dev",
  title: "Verona - Making AI Intelligent",
  description:
    "Verona makes user-verified data portable, private, and programmable, so agents can transact on information the user actually owns.",
};

export const externalLinks = {
  ero: "https://apps.apple.com/us/app/ero/id6754165797",
  burnt: "https://burnt.com",
  docs: "https://docs.verona.dev",
  github: "https://github.com/burnt-labs",
  litepaper: "https://docs.verona.dev/verona/about-verona/lite-paper",
  metaAccount: "https://settings.burnt.com/",
  staking: "https://staking.burnt.com/",
  twitter: "https://x.com/veronahq",
  telegram: "https://t.me/veronahq",
  discord: "https://discord.gg/verona",
  linkedin: "https://www.linkedin.com/company/burnt-labs",
  youtube: "https://www.youtube.com/@burnt_xion",
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type NavGroup = {
  label: string;
  href?: string;
  links?: NavLink[];
};

export const navigation: NavGroup[] = [
  {
    label: "About",
    links: [
      {
        label: "Story",
        href: "/story",
        description: "How Burnt, XION, and Verona became one proof network.",
      },
      {
        label: "Vision",
        href: "/vision",
        description: "The intelligence layer Verona is building for AI.",
      },
      {
        label: "Press",
        href: "/press",
        description: "Coverage, announcements, and media notes.",
      },
      {
        label: "Media Kit",
        href: "/media-kit",
        description: "Logos, brand assets, bios, and descriptions.",
      },
    ],
  },
  {
    label: "$VERONA",
    links: [
      {
        label: "Get $VERONA",
        href: "/get-verona",
        description: "How to create an account, buy, and stake.",
      },
      {
        label: "Stake $VERONA",
        href: externalLinks.staking,
        description: "Secure the network and participate in rewards.",
        external: true,
      },
    ],
  },
  {
    label: "Resources",
    links: [
      {
        label: "Litepaper",
        href: externalLinks.litepaper,
        description: "Read the current network and token model.",
        external: true,
      },
      {
        label: "Docs",
        href: externalLinks.docs,
        description: "Build with Verona primitives and network APIs.",
        external: true,
      },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export const footerGroups = [
  {
    label: "Developers",
    links: [
      { label: "Docs", href: externalLinks.docs, external: true },
      { label: "GitHub", href: externalLinks.github, external: true },
    ],
  },
  {
    label: "Humans",
    links: [
      { label: "Ero", href: externalLinks.ero, external: true },
      { label: "Get $VERONA", href: "/get-verona" },
      { label: "Stake $VERONA", href: externalLinks.staking, external: true },
      { label: "Litepaper", href: externalLinks.litepaper, external: true },
      { label: "Community Program", href: "/community" },
    ],
  },
  {
    label: "Enterprise",
    links: [
      { label: "Burnt", href: externalLinks.burnt, external: true },
      { label: "Contact Us", href: "mailto:hello@verona.dev", external: true },
    ],
  },
  {
    label: "Brand",
    links: [
      { label: "Press", href: "/press" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "PR Team", href: "mailto:press@verona.dev", external: true },
    ],
  },
  {
    label: "Follow Us",
    links: [
      { label: "Twitter", href: externalLinks.twitter, external: true },
      { label: "Telegram", href: externalLinks.telegram, external: true },
      { label: "Discord", href: externalLinks.discord, external: true },
      { label: "LinkedIn", href: externalLinks.linkedin, external: true },
      { label: "YouTube", href: externalLinks.youtube, external: true },
      { label: "Newsletter", href: "#newsletter" },
    ],
  },
];

export const exchangeLinks: NavLink[] = [
  { label: "KuCoin", href: "https://www.kucoin.com/", external: true },
  { label: "Gate", href: "https://www.gate.com/", external: true },
  { label: "MEXC", href: "https://www.mexc.com/", external: true },
];

export const languages = ["English", "Chinese", "Korean"];
