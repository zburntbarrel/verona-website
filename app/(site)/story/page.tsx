import { EditorialSection, PageHero } from "@/components/PageSections";

export const metadata = {
  title: "Story",
  description: "The story and vision behind Verona, from Burnt Banksy and XION to the intelligence layer for AI.",
};

export default function StoryPage() {
  return (
    <main>
      <PageHero eyebrow="Story" title="The story & vision">
        <p>
          How do you prove something is real when it only exists on a screen?
          Verona started with that question, years before it had the name.
        </p>
      </PageHero>

      <section className="site-band bg-seashell text-sea">
        <div className="site-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="section-copy">
            <p className="eyebrow">Opening proof</p>
            <h2 className="display-heading">What makes a digital thing real?</h2>
          </div>
          <div className="border border-sea/20 bg-linen p-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/verona-hero.svg"
              alt="Verona brand illustration"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <EditorialSection title="Burnt Banksy">
        <p>
          In 2021, Anthony Anzalone, then going by Burnt Banksy, bought an
          original Banksy print for $95,000, burned it on a livestream, and sold
          the recording as an NFT for $380,000, about four times the price of
          the print. The logic was blunt. Once the physical copy was gone, the
          digital one was the original.
        </p>
        <p className="mt-5">
          Coverage split hard. Some called the burn the future of ownership.
          Some called the buyers morons. Either way, the question underneath it
          stuck.
        </p>
      </EditorialSection>

      <EditorialSection title="Burnt" dark>
        <p>
          He started Burnt to build crypto products for people who did not care
          about crypto. Every product the team shipped broke at the same place,
          the part where a normal person had to deal with wallets, seed phrases,
          and gas. The technology held up. The people gave up. So the team
          stopped building apps and went after that breaking point directly.
        </p>
      </EditorialSection>

      <EditorialSection title="XION">
        <p>
          That work became XION, a chain designed so its users would never see
          it. You signed up with an email. There was nothing to memorize and no
          gas to buy. Companies launched products on it whose customers never
          knew a blockchain was involved, which created a new problem, a good
          one. If the chain is invisible, what is it actually for?
        </p>
      </EditorialSection>

      <EditorialSection title="The turn" dark>
        <p>
          The companies using it answered. What they kept asking for was not
          cheaper transactions. They wanted to confirm true things about a
          person, that the income is real, that the job exists, that you are who
          you claim, without taking custody of the documents or the liability
          that comes with holding them. The team recognized the question. It was
          the one from the fire. The product was never abstraction. It was proof.
        </p>
      </EditorialSection>

      <EditorialSection title="Verona">
        <p>
          So the company renamed itself after what it had become. Verona is the
          intelligence layer for AI. A fact is proven once, at its source. The
          person it describes owns it. Any agent they authorize can act on it,
          and the raw data never moves. What enterprises had been paying for one
          verification at a time is now a network anyone can build on.
        </p>
      </EditorialSection>

      <EditorialSection title="The name" dark>
        <p>
          Verona means truth. Under it sits verus, the Latin word for true, the
          same root that gives us verify and veritas. A company whose whole job
          is proving what is real took the name that means true, and that was
          the reason for the choice. The city lent the rest. Its arches and its
          Roman bones have outlasted everything built around them, and the brand
          borrows that endurance on purpose.
        </p>
      </EditorialSection>

      <EditorialSection title="What we see">
        <p>
          The internet is filling with agents that act on our behalf, and every
          one of them runs on information it has to trust. Right now that
          information barely exists. Verona is built to supply it. A person
          proves something once and owns it from then on. The data stays theirs
          and earns for them. The machines finally get something real to act on.
          It started with one proof, made with fire. The ones that come after it
          will not need the spectacle.
        </p>
      </EditorialSection>
    </main>
  );
}
