import { PageHero } from "@/components/PageSections";

export const metadata = {
  title: "Press",
  description: "Press coverage and media notes for Verona.",
};

export default function PressPage() {
  return (
    <main>
      <PageHero eyebrow="Press" title="Coverage, when it is real.">
        <p>
          Press coverage will live here once there is confirmed Verona coverage
          ready to publish.
        </p>
      </PageHero>
      <section className="site-band bg-seashell text-sea">
        <div className="site-container grid gap-4 md:grid-cols-3">
          {["Featured piece", "Recent coverage", "Coverage grid"].map((item) => (
            <article key={item} className="proof-card min-h-[180px]">
              <span>{item}</span>
              <p>Reserved for verified press links and outlet metadata.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
