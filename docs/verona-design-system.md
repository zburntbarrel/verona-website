# Verona Design System

Source: Figma file `Burnt - Verona Rebrand - External (Copy)`, frames 3-56.

Do not use frame 12 / node `1071:2275` as a production pattern. Jean marked that pattern as reserved for another use.

## Brand Idea

Verona should feel editorial, classical, material, and human. The site should not feel like generic SaaS, sterile crypto infra, or a futuristic 3D dashboard. The core language is proof, truth, value, and ownership.

## Logo System

- The Raveneye is the central symbol. It combines mirrored ravens, an eye silhouette, and jewel eyes.
- The wordmark is the literal brand identifier and should be used for external-facing navigation and first-viewport brand presence.
- Use the full lockup when the audience may not already know the Raveneye.
- Use the symbol alone for compact UI, favicon, social, app icon, and merch contexts.
- Partnership lockups should make the relationship explicit, such as "Built on Verona".

## Typography

- Primary: ITC Garamond Std Book Condensed for headlines and brand moments.
- Secondary: Hedvig Letters Serif and Hedvig Letters Sans for body, subheadings, eyebrows, UI, and technical clarity.
- Signature: Retrouvailles Italic for rare human accent moments.
- Fallbacks: Instrument Serif for the headline role and Inter for UI/body when brand fonts are unavailable.

Production mapping:

- `--font-garamond`: EB Garamond fallback for ITC Garamond.
- `--font-hedvig-serif`: Hedvig Letters Serif.
- `--font-hedvig-sans`: Hedvig Letters Sans.
- `--font-inter`: Inter fallback for utility UI.

Rules:

- Headline scale should be meaningfully larger than body copy.
- Body copy is left aligned. Do not right-align paragraphs.
- Do not mix multiple typefaces inside one body block.
- Use emphasis sparingly, capped at one or two adjacent words in a heading.
- Eyebrows use Hedvig Sans, all caps or title case, with generous tracking.

## Color

Primary group:

| Token | Hex | Meaning |
| --- | --- | --- |
| Linen | `#F8F7F3` | Transparency |
| Sky | `#4CB1DF` | Trust |
| Seashell | `#E5DCCB` | Integrity |
| Sea | `#192550` | Vastness |

Secondary group:

| Token | Hex | Meaning |
| --- | --- | --- |
| Forest | `#131E18` | Depth |
| Brick | `#421D25` | Reliability |
| Gold | `#BEA64D` | Authenticity |
| Rosso | `#B56135` | Heritage warmth |

Supporting neutrals:

- White `#FFFFFF`
- Black `#000000`
- Grey `#2F4842`
- Warm dark `#2C241F`

Rules:

- Avoid stacking colors from the same family for type contrast.
- Do not use color as arbitrary word emphasis.
- Keep primary UI highly legible: Sea or Forest text on Linen/Seashell, Linen text on Sea/Forest.
- Sky is the main accent for calls to action and active states.

## Visual Language

- Imagery should feel real, historical, natural, and artful.
- Avoid sterile tech stock photos and predictable abstract 3D graphics.
- Classical art, flowers, nature, printed material, and editorial compositions are preferred when they support the copy.
- Layouts can use full-bleed image moments or framed editorial compositions.
- The actual feeling matters more than literal art-history categorization.

## Web Application Guidance

- Header and menus should be calm, compact, and legible, with editorial dropdown panels rather than bulky SaaS mega menus.
- Sections should be full-width bands. Use cards only for repeated items, article previews, route tiles, and action groups.
- Radius should stay tight, generally 2-6px.
- Avoid decorative glow/orb treatments.
- Product visuals should show real surfaces where available: Ero UI, proof flows, exchange logos, or diagrams.
