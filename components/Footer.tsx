import Link from "next/link";
import { footerGroups, site } from "@/lib/site";
import { LogoGlyph, VeronaWordmark } from "./icons";

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="footer-link">
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className="footer-link">
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-sea/15 bg-forest px-6 py-14 text-linen md:px-12 lg:px-[60px]">
      <div className="mx-auto grid w-full gap-12 lg:grid-cols-[minmax(220px,0.9fr)_minmax(0,2.1fr)]">
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex w-fit items-center gap-3" aria-label="Verona home">
            <VeronaWordmark className="h-[23px] w-[132px]" />
            <LogoGlyph className="h-8 w-[50px]" />
          </Link>
          <p className="max-w-[300px] font-[family-name:var(--font-hedvig-serif)] text-[15px] leading-7 text-seashell">
            User-owned intelligence for agents, apps, enterprises, and people.
          </p>
          <p className="font-[family-name:var(--font-hedvig-sans)] text-[11px] uppercase tracking-[0.14em] text-seashell/70">
            {site.url.replace("https://", "")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {footerGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-4">
              <h3 className="font-[family-name:var(--font-hedvig-sans)] text-[12px] uppercase tracking-[0.14em] text-sky">
                {group.label}
              </h3>
              <nav className="flex flex-col gap-3" aria-label={group.label}>
                {group.links.map((link) => (
                  <FooterLink key={link.label} {...link} />
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
