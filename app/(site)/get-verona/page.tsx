import BuyVeronaModal from "@/components/BuyVeronaModal";
import { PageHero } from "@/components/PageSections";
import { exchangeLinks, externalLinks } from "@/lib/site";

export const metadata = {
  title: "Get $VERONA",
  description: "How to get, stake, and participate in $VERONA.",
};

export default function GetVeronaPage() {
  return (
    <main>
      <PageHero eyebrow="$VERONA" title="Intelligence, by Verona.">
        <p>
          Every app and agent makes the network smarter. $VERONA is how you hold
          a piece of it. Staking sharpens it further.
        </p>
      </PageHero>

      <section className="site-band bg-sea text-linen">
        <div className="site-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="network-orbit" aria-label="Network flywheel">
            <span>Apps</span>
            <span>Agents</span>
            <strong>$VERONA</strong>
            <span>Sources</span>
            <span>Demand</span>
          </div>
          <div className="section-copy">
            <p className="eyebrow text-sky">Network value</p>
            <h2 className="display-heading">A verified network compounds.</h2>
            <p className="body-copy text-seashell">
              Apps, agents, and the sources they verify feed a growing verified
              network. Demand draws on it. More sources create a richer network,
              and the loop repeats.
            </p>
          </div>
        </div>
      </section>

      <section className="site-band bg-linen text-sea">
        <div className="site-container">
          <div className="section-copy max-w-[760px]">
            <p className="eyebrow">How it works</p>
            <h2 className="display-heading">The network does the work.</h2>
            <p className="body-copy">
              Staking makes you part of it.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Apps and agents build the network."],
              ["02", "$VERONA is your part of it."],
              ["03", "Staking secures the network and earns rewards for it."],
            ].map(([step, body]) => (
              <article key={step} className="proof-card min-h-[220px]">
                <span>{step}</span>
                <p className="mt-10 text-[24px] leading-tight">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <BuyVeronaModal />
            <a href={externalLinks.litepaper} target="_blank" rel="noreferrer" className="secondary-action text-sea">
              Read more
            </a>
          </div>
        </div>
      </section>

      <section className="site-band bg-brick text-linen">
        <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="section-copy">
            <p className="eyebrow text-gold">Buyback and burn</p>
            <h2 className="display-heading">The network buys itself back.</h2>
          </div>
          <p className="body-copy text-seashell">
            Network revenue buys $VERONA on the open market and burns it.
          </p>
        </div>
      </section>

      <section className="site-band bg-seashell text-sea">
        <div className="site-container">
          <div className="section-copy max-w-[760px]">
            <p className="eyebrow">Get $VERONA</p>
            <h2 className="display-heading">Getting started</h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <a href={externalLinks.metaAccount} target="_blank" rel="noreferrer" className="route-tile">
              <span>Create Meta Account</span>
              <p>Set up the account layer used across the Verona ecosystem.</p>
            </a>
            <div className="route-tile">
              <span>Buy $VERONA</span>
              <div className="exchange-grid mt-6">
                {exchangeLinks.map((exchange) => (
                  <a key={exchange.label} href={exchange.href} target="_blank" rel="noreferrer">
                    {exchange.label}
                  </a>
                ))}
              </div>
            </div>
            <a href={externalLinks.staking} target="_blank" rel="noreferrer" className="route-tile">
              <span>Stake $VERONA</span>
              <p>Secure the network and participate in staking rewards.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="site-band bg-forest text-linen">
        <div className="site-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="section-copy">
            <p className="eyebrow text-sky">Governance</p>
            <h2 className="display-heading">Govern with $VERONA.</h2>
            <p className="body-copy text-seashell">
              The native $VERONA token enables you to participate in activities
              such as approving governance proposals for protocol upgrades,
              contributing to economic security through staking, and more within
              the Verona ecosystem.
            </p>
          </div>
          <a href={externalLinks.staking} target="_blank" rel="noreferrer" className="primary-action w-fit">
            Stake $VERONA
          </a>
        </div>
      </section>
    </main>
  );
}
