# Verona Website

Next.js App Router site for [verona.dev](https://verona.dev), built around the Verona brand guidelines and prepared for Cloudflare Workers via OpenNext.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
npx opennextjs-cloudflare build
```

`npm run check` runs lint and the standard Next.js production build.

## Cloudflare

This project uses `@opennextjs/cloudflare` and `wrangler`.

```bash
npm run preview
npm run deploy
```

Do not deploy, tag, or publish a release without Jean's explicit approval.

## Project Docs

- `docs/verona-design-system.md`: Figma-derived brand system notes.
- `docs/site-architecture.md`: routes, navigation, footer, page structure, and content gaps.
