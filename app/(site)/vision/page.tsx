import { PageHero } from "@/components/PageSections";

export const metadata = {
  title: "Vision",
  description: "Verona's vision for user-owned intelligence and verified AI.",
};

export default function VisionPage() {
  return (
    <main>
      <PageHero eyebrow="Vision" title="Agents need reality.">
        <p>
          Verona supplies verified facts that people own, enterprises can trust,
          and agents can act on without holding the raw data underneath.
        </p>
      </PageHero>
      <section className="site-band bg-forest text-linen">
        <div className="site-container grid gap-8 md:grid-cols-3">
          {[
            ["People own the proof", "A person proves something once and keeps control from then on."],
            ["Data stays private", "The record underneath does not need to move for the fact to be useful."],
            ["Agents can act", "Apps and agents can transact on information that is verified at the source."],
          ].map(([title, body]) => (
            <article key={title} className="audience-card">
              <p className="eyebrow text-sky">{title}</p>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
