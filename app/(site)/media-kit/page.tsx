import { PageHero, RouteTile } from "@/components/PageSections";

export const metadata = {
  title: "Media Kit",
  description: "Verona logos, brand guidance, bios, and descriptions.",
};

export default function MediaKitPage() {
  return (
    <main>
      <PageHero eyebrow="Media Kit" title="Brand assets.">
        <p>
          Logos, descriptions, bios, and brand guidance for partners and press.
        </p>
      </PageHero>
      <section className="site-band bg-linen text-sea">
        <div className="site-container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <RouteTile href="/media-kit" label="Logos" body="Raveneye symbol, wordmark, lockups, and relationship marks." />
          <RouteTile href="/media-kit" label="Typography" body="Display, supporting, body, and signature usage rules." />
          <RouteTile href="/media-kit" label="Color" body="Primary, secondary, and supporting color guidance." />
          <RouteTile href="/media-kit" label="Visual Language" body="Editorial imagery, layout principles, and image direction." />
        </div>
      </section>
    </main>
  );
}
