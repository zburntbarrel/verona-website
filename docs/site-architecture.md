# Verona Website Architecture

## Routes

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Homepage | Active |
| `/story` | Story and transition from Burnt to XION to Verona | Active |
| `/vision` | Future vision page | Scaffolded |
| `/get-verona` | Token acquisition, staking, and governance | Active |
| `/blog` | Blog index | Scaffolded |
| `/press` | Press coverage | Scaffolded; hide sparse content until coverage exists |
| `/media-kit` | Logos, brand assets, bios, and descriptions | Scaffolded |
| `/community` | Community program | Scaffolded link target |

## Deployment

- Target: Cloudflare Workers using OpenNext for Cloudflare.
- Config: `wrangler.jsonc`, `open-next.config.ts`, and `public/_headers`.
- Generated output: `.open-next/`, ignored from git and ESLint.
- Local commands: `npm run dev`, `npm run preview`, `npm run deploy`.
- Burnt parity: this repo mirrors `burnt-labs/burnt-www` by using Wrangler
  configuration, Cloudflare security/cache headers, a push-to-main deploy
  workflow, and a pull-request preview upload workflow.

## Header

- Logo: `/`
- About: Story, Vision, Press, Media Kit
- `$VERONA`: Get `$VERONA`, Stake `$VERONA`
- Resources: Litepaper, Docs
- Blog: `/blog`
- Right: language selector, Get `$VERONA`

## Footer

- Developers: Docs, GitHub
- Humans: Ero, Get `$VERONA`, Stake `$VERONA`, Litepaper, Community Program
- Enterprise: Burnt, Contact Us
- Brand: Press, Media Kit, PR Team
- Follow Us: Twitter, Telegram, Discord, LinkedIn, YouTube, Newsletter

## Homepage Sections

1. Hero
2. Backers
3. Founder video
4. The Gap
5. How Verona Works
6. Network Model and Audience
7. Ero
8. Brands
9. Blog Preview
10. Token
11. Close CTA
12. Email Signup

The "In the News" section should remain hidden until there is real coverage.

## Known Content Gaps

- Founder video asset
- Proof/network visual
- Audience visuals
- Ero UI or video asset
- Confirmed brand logo wall
- Press coverage/logo list
- Blog posts and thumbnails
- Exchange logo assets
- Final staking URL
