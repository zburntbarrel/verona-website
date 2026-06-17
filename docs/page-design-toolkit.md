# Verona Page Design Toolkit

Hand this to an agent and they can build a page that visually matches `/get-verona` without ever seeing it. Pair with `verona-design-system.md` (brand-level rules) — this doc covers the concrete page-building patterns.

---

## TL;DR — what makes a page "Verona-style"

1. **Cream + navy** as the dominant palette. One brick/forest/sky accent per page, no more.
2. **Serif headlines that breathe** (`.display-heading`, ITC Garamond fallback). Body copy stays in the Hedvig serif.
3. **Section bands** with generous top/bottom padding (`.site-band`, 88px). One job per band.
4. **Editorial floral imagery** as section backgrounds — with `background-attachment: fixed` so they parallax behind a cream content panel. This is the signature move.
5. **Cards earn their existence.** Use a card only when the card itself is the interaction (exchange tile, route tile, image-backed step). Never decorative grids of feature blurbs.
6. **Motion is purposeful, never gratuitous.** Parallax floral backgrounds, the orbit's scroll-driven rotation, and pattern panning inside the central medallion. No spinning logos, no fade-in-on-load.

If the page would look at home in a 1920s editorial magazine that happens to also know what staking is, you're on the right track. If it would look at home on Linear or Vercel, start over.

---

## Color tokens

Declared in `app/globals.css` via `@theme`:

```css
--color-sea:        #192550;  /* primary text + dark surfaces */
--color-sky:        #4cb1df;  /* primary CTA bg */
--color-linen:      #f8f7f3;  /* primary cream / page bg */
--color-forest:     #131e18;  /* darkest surface (footer / contrast band) */
--color-seashell:   #e5dccb;  /* warm fallback under floral images */
--color-brick:      #421d25;  /* deep accent band */
--color-gold:       #bea64d;  /* eyebrow accent, CTA hover */
--color-rosso:      #b56135;  /* nav hover */
--color-grey:       #2f4842;
--color-warm-dark:  #2c241f;
```

Tailwind class names follow the token: `bg-sea`, `text-linen`, `border-brick`, etc.

**Rule of thumb per section:**
- Default surface: linen on sea text, or sea on linen text
- Accent band: brick (rare) or forest (dark grounding)
- Sky is reserved for primary CTAs only — never decoration

---

## Typography classes

Already defined globally. Use these instead of ad-hoc Tailwind text utilities:

```html
<p class="eyebrow">Eyebrow Label</p>      <!-- 12px, all-caps, tracked -->
<h2 class="display-heading">Big Idea</h2> <!-- Garamond, large -->
<p class="body-copy">Long-form prose.</p> <!-- Hedvig serif, 17px/1.65 -->
```

For sub-display sizes scale up with arbitrary Tailwind values:

```jsx
<h1 className="display-heading text-[56px] md:text-[88px]">
```

Italicize a single inline word for accent — no more:

```jsx
<h2>Govern with <em>$VERONA</em>.</h2>
```

---

## Layout shell

Every section follows this pattern:

```jsx
<section className="site-band bg-linen text-sea">
  <div className="site-container">
    {/* content */}
  </div>
</section>
```

- `.site-band` — `padding: 88px 0; position: relative; overflow: hidden;`
- `.site-container` — `max-width: 1320px; padding: 0 24px; margin: 0 auto;`

Two-column inner layouts on desktop:

```jsx
<div className="site-container grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:items-center xl:gap-16">
```

Ratios used on get-verona: `[0.55fr_1.45fr]` (copy / hero element), `[0.8fr_1.2fr]` (copy / supporting text), `[1.1fr_0.9fr]` (copy / CTA). Never 50/50 — always asymmetric.

---

## Section recipes

### 1. Hero with anchored copy + diagram/visual

```jsx
<section className="site-band bg-linen text-sea">
  <div className="site-container grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:items-center xl:gap-16">
    <div className="section-copy">
      <h1 className="display-heading text-[56px] md:text-[88px]">
        Headline here.
      </h1>
      <p className="body-copy mt-6 max-w-[440px]">
        Supporting sentence, ~30 words max.
      </p>
    </div>
    <div className="w-full">
      {/* diagram, illustration, or other visual anchor */}
    </div>
  </div>
</section>
```

Headline is huge on desktop (88px). Body copy is narrow (`max-w-[440px]`) so it forms a clear paragraph, not a wide ribbon.

### 2. Parallax floral section with cream content panel (THE SIGNATURE)

This is the move. Use it for ~1 section per page, max 2.

```jsx
<section
  className="relative overflow-hidden text-sea"
  style={{
    backgroundColor: "#e5dccb",
    backgroundImage: "url('/assets/floral-pink-rose.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",   // <-- the parallax magic
  }}
>
  <div className="site-container relative py-24 md:py-32">
    <div className="relative mx-auto max-w-[760px] bg-linen p-10 md:p-16">
      <LogoGlyph className="absolute right-8 top-8 h-7 w-auto text-sea md:right-10 md:top-10" />
      <h2 className="display-heading text-[44px] md:text-[64px]">
        Section headline.
      </h2>
      <p className="body-copy mt-6">
        Body copy on cream panel reads cleanly while the floral parallaxes behind.
      </p>
    </div>
  </div>
</section>
```

Notes:
- `background-attachment: fixed` is ignored on mobile (iOS Safari especially) — degrades gracefully to a normally-scrolling image.
- The cream `bg-linen` content panel must have generous padding (`p-10 md:p-16`).
- Optional small `LogoGlyph` watermark in the top-right corner of the cream panel.
- Use `max-w-[560px]` to `max-w-[760px]` for the panel. Never full-width.

### 3. Stepped/proof cards with image backgrounds

```jsx
<div className="mt-12 grid gap-4 md:grid-cols-3">
  {[
    ["Apps and agents build the network.", "1"],
    ["$VERONA is your part of it.", "2"],
    ["Staking secures the network and earns rewards.", "3"],
  ].map(([body, floral]) => (
    <article
      key={floral}
      className="proof-card min-h-[220px]"
      data-floral={floral}
    >
      <p className="text-[24px] leading-tight">{body}</p>
    </article>
  ))}
</div>
```

Three images are wired in `globals.css` under `.proof-card[data-floral="1|2|3"]`. The CSS layers a 35–50% navy overlay over the photo so white text remains readable. Add more variants by extending the CSS:

```css
.proof-card[data-floral="4"]::before {
  background-image:
    linear-gradient(rgb(25 37 80 / 0.35), rgb(25 37 80 / 0.5)),
    url('/assets/your-new-image.jpg');
}
```

### 4. Dark grounding band (brick or forest)

Use for governance, mission, or single-statement moments. Inverts the palette.

```jsx
<section className="site-band bg-forest text-linen">
  <div className="site-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
    <div className="section-copy">
      <p className="eyebrow text-sky">Section eyebrow</p>
      <h2 className="display-heading">Governance statement.</h2>
      <p className="body-copy text-seashell">Supporting paragraph.</p>
    </div>
    <a className="primary-action w-fit" href="...">Primary action</a>
  </div>
</section>
```

Use `bg-brick text-linen` for the same pattern with a warmer/redder ground.

### 5. Tile grid (exchanges, routes)

```jsx
<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
  {items.map((item) => (
    <a key={item.label} href={item.href} className="exchange-cell">
      <img src={item.logo} alt="" loading="lazy" className="exchange-logo" />
      <span className="exchange-label">{item.label}</span>
    </a>
  ))}
</div>
```

Tile-grid breakpoints: always start at 2 cols on mobile, never 1.

---

## Buttons

Two flavors. Don't invent a third.

```jsx
<a className="primary-action">Primary CTA</a>     {/* sky bg, sea text */}
<a className="secondary-action text-sea">Read more</a>  {/* outline, currentColor */}
```

Primary hover swaps to gold. Secondary hover inverts (fills with currentColor, text becomes linen).

For the rare "premium" CTA with floral hover state, add `.primary-action.govern-cta` — defined in `globals.css`.

---

## Image asset library

Located in `public/assets/`. Established floral/painterly images:

| File | Vibe | Best for |
|---|---|---|
| `get-verona-floral.jpg` | warm muted floral, neutral | hero-adjacent parallax sections |
| `floral-pink-rose.jpg` | pink-rose, bright | governance / CTA-driving sections |
| `floral-blue-birds.jpg` | navy + birds, moody | dark cards / serious-tone sections |
| `floral-tropical-bird.jpg` | tropical, lively | optimistic/growth sections |
| `floral-birds-pine.jpg` | painterly birds + pine | reflective/long-form sections |
| `floral-card-1.png`, `floral-card-2.png` | unsplash (Birmingham Museum) | proof-card backgrounds |
| `pattern-damask-white.svg` | white damask line art | small surfaces over sea bg |
| `pattern-damask-deep.png` | dense navy damask | central medallion / accent fills |
| `pattern-floral-blue.jpg` | blue-on-cream floral | tile patterns |

**Adding a new image:**
1. Drop the file in `public/assets/`.
2. Reference it as `/assets/your-file.ext` (root-relative, never relative).
3. If using as a section background, always include a `backgroundColor` fallback (use a token color that harmonizes with the image — `#e5dccb` for warm images, `#192550` for cool/dark).
4. If text sits over it, add a linear-gradient overlay in the same `background-image` rule so contrast holds.

---

## Motion patterns

### Parallax background (the most-used)

`background-attachment: fixed` on any section with a background image. Page scroll moves the cream content; floral stays anchored. That's it — no JS.

### Scroll-driven pattern pan (medallion, hero accents)

Tie an element's `background-position` (or a CSS variable) to a smoothed scroll-progress value computed in a single `requestAnimationFrame` loop. Reference implementation: `components/VerifiedFactsOrbit.tsx` — the `coreMedallionRef` pan inside the `animate()` function.

Pattern:

```ts
let scrollProgress = 0;       // raw value, clamped [-1, 1]
let smoothedScroll = 0;       // damped, used downstream

function animate() {
  const rect = container.getBoundingClientRect();
  const viewportH = window.innerHeight || 1;
  const centerY = rect.top + rect.height / 2;
  scrollProgress = Math.max(-1, Math.min(1, (centerY - viewportH / 2) / (viewportH / 2)));
  smoothedScroll += (scrollProgress - smoothedScroll) * 0.08;

  // Use smoothedScroll to drive any visual property:
  element.style.backgroundPosition = `50% calc(50% + ${smoothedScroll * -500}px)`;

  requestAnimationFrame(animate);
}
```

### Orbit / 3D motion (rare, only when content warrants)

Three.js + DOM overlay. Reference: `VerifiedFactsOrbit.tsx`. Don't replicate unless the section concept genuinely calls for orbital motion. Most pages don't need this.

### Reduced motion

Always check `prefers-reduced-motion` and zero out scroll-driven motion when set:

```ts
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const TRAVEL = reducedMotion ? 0 : Math.PI * 0.5;
```

---

## Do's and don'ts

**Do**
- Use cream panels over parallax floral backgrounds.
- Use one accent color per page beyond the navy/cream base.
- Use the established type scale (`.display-heading`, `.body-copy`, `.eyebrow`).
- Use asymmetric grid columns (0.55/1.45, 0.8/1.2, 1.1/0.9).
- Italicize a single key word in headlines for emphasis.
- Pair `background-attachment: fixed` with a cream content panel.

**Don't**
- Don't make 3-column feature grids with icon-in-colored-circle + 2-line description. THE AI slop tell.
- Don't use uniform border-radius on every element. Get-verona uses sharp 4px on cards, fully-round only on medallions/avatars.
- Don't put `text-align: center` on long body copy. Headlines can center; paragraphs don't.
- Don't use purple/violet anywhere.
- Don't use system fonts as the primary display. Always Garamond/Hedvig.
- Don't add decorative blobs, floating circles, or wavy dividers between sections. The floral imagery is the decoration budget — don't double-spend.
- Don't put visible step numbers (01/02/03) above cards. The visual order is enough.

---

## Quick checklist before shipping a new page

- [ ] At least one parallax floral section, no more than two.
- [ ] Headline uses `.display-heading` with a meaningful size jump from body.
- [ ] One primary CTA on the page, in `primary-action` style.
- [ ] No more than one accent color beyond navy/cream.
- [ ] No card grid that exists purely as decoration.
- [ ] No emojis.
- [ ] Body copy paragraphs are left-aligned and width-capped (~440–760px).
- [ ] All section bands use `.site-band` and `.site-container`.
- [ ] Images live in `/public/assets/` and are referenced root-relative.
- [ ] If the section has motion, it respects `prefers-reduced-motion`.

---

## Where to look in the repo

- `app/globals.css` — all design tokens, component classes (`.proof-card`, `.exchange-cell`, `.route-tile`, `.primary-action`, etc.)
- `app/(site)/get-verona/page.tsx` — canonical example using every pattern in this doc
- `components/VerifiedFactsOrbit.tsx` — reference for scroll-driven motion
- `components/icons.tsx` — brand glyphs (`LogoGlyph`, `Wordmark`)
- `lib/site.ts` — link/data registry, follow this pattern for any new page's data
- `public/assets/` — image library

When in doubt, copy a `<section>` from `get-verona/page.tsx`, change the content, keep the structure.
