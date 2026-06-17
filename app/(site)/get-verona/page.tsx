import BuyVeronaModal from "@/components/BuyVeronaModal";
import VerifiedFactsOrbit from "@/components/VerifiedFactsOrbit";
import { LogoGlyph } from "@/components/icons";
import { exchangeLinks, externalLinks } from "@/lib/site";

export const metadata = {
  title: "Get $VERONA",
  description: "How to get, stake, and participate in $VERONA.",
};

export default function GetVeronaPage() {
  return (
    <main>
      <section className="site-band bg-linen text-sea">
        <div className="site-container grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:items-center xl:gap-16">
          <div className="section-copy">
            <h1 className="display-heading text-[56px] md:text-[88px]">
              Intelligence, by Verona.
            </h1>
            <p className="body-copy mt-6 max-w-[440px]">
              Every app and agent makes the network smarter. $VERONA is how you
              hold a piece of it. Staking sharpens it further.
            </p>
          </div>
          <div className="w-full">
            <VerifiedFactsOrbit />
          </div>
        </div>
      </section>

      <section
        id="exchanges"
        className="relative overflow-hidden text-sea"
        style={{
          backgroundColor: "#e5dccb",
          backgroundImage: "url('/assets/get-verona-floral.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 18%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-72"
          style={{
            background:
              "linear-gradient(180deg, rgba(25,37,80,0.22) 0%, rgba(25,37,80,0) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1320px] p-12 sm:p-20 md:p-32 lg:p-40 xl:p-48">
          <div className="bg-linen/95 p-8 backdrop-blur-sm md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
              <div>
                <h2 className="display-heading">Get $VERONA</h2>
                <p className="body-copy mt-4">
                  Participate in governing, staking and interacting with Verona
                  through $VERONA.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {exchangeLinks.map((exchange) => (
                  <a
                    key={exchange.label}
                    href={exchange.href}
                    target="_blank"
                    rel="noreferrer"
                    className="exchange-cell"
                  >
                    <img
                      src={exchange.logo}
                      alt=""
                      loading="lazy"
                      className="exchange-logo"
                    />
                    <span className="exchange-label">{exchange.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-band bg-linen text-sea">
        <div className="site-container">
          <div className="section-copy max-w-[760px]">
            <h2 className="display-heading">How it works</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Apps and agents build the network."],
              ["02", "$VERONA is your part of it."],
              ["03", "Staking secures the network and earns rewards for it. A stronger network is a smarter one."],
            ].map(([step, body]) => (
              <article key={step} className="proof-card min-h-[220px]">
                <span>{step}</span>
                <p className="mt-10 text-[24px] leading-tight">{body}</p>
              </article>
            ))}
          </div>
          <p className="body-copy mt-10 max-w-[640px]">
            The network does the work. Staking makes you part of it.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BuyVeronaModal />
            <a
              href={externalLinks.litepaper}
              target="_blank"
              rel="noreferrer"
              className="secondary-action text-sea"
            >
              Read more
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden text-sea"
        style={{
          backgroundColor: "#e5dccb",
          backgroundImage: "url('/assets/floral-birds-pine.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="site-container relative py-24 md:py-32">
          <div className="relative ml-auto max-w-[560px] bg-linen p-10 md:p-14">
            <LogoGlyph className="absolute right-8 top-8 h-7 w-auto text-sea md:right-10 md:top-10" />
            <h2 className="display-heading text-[44px] md:text-[60px]">
              The network <em>buys itself back</em>.
            </h2>
            <p className="body-copy mt-6">
              Network revenue buys $VERONA on the open market and burns it.
            </p>
          </div>
        </div>
      </section>

      <section className="site-band bg-linen text-sea">
        <div className="site-container">
          <div className="section-copy max-w-[760px]">
            <p className="eyebrow">Get $VERONA</p>
            <h2 className="display-heading">Getting started</h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <a
              href={externalLinks.metaAccount}
              target="_blank"
              rel="noreferrer"
              data-floral="1"
              className="route-tile"
            >
              <span>Create Meta Account</span>
              <p>Set up the account layer used across the Verona ecosystem.</p>
            </a>
            <a href="#exchanges" data-floral="2" className="route-tile">
              <span>Buy $VERONA</span>
              <p>Purchase $VERONA from any major exchange.</p>
            </a>
            <a
              href={externalLinks.staking}
              target="_blank"
              rel="noreferrer"
              data-floral="3"
              className="route-tile"
            >
              <span>Stake $VERONA</span>
              <p>Secure the network and participate in staking rewards.</p>
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden text-sea"
        style={{
          backgroundColor: "#e5dccb",
          backgroundImage: "url('/assets/floral-pink-rose.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="site-container relative py-24 md:py-32">
          <div className="relative mx-auto max-w-[760px] bg-linen p-10 md:p-16">
            <LogoGlyph className="absolute right-8 top-8 h-7 w-auto text-sea md:right-10 md:top-10" />
            <h2 className="display-heading text-[44px] md:text-[64px]">
              Govern with <em>$VERONA</em>.
            </h2>
            <p className="body-copy mt-6">
              The native $VERONA token enables you to participate in various
              activities such as approving governance proposals for protocol
              upgrades, contributing to economic security through staking, and
              more, all within the VERONA ecosystem.
            </p>
            <div className="mt-12 flex justify-center">
              <a
                href={externalLinks.staking}
                target="_blank"
                rel="noreferrer"
                className="primary-action govern-cta"
              >
                Stake $VERONA
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
