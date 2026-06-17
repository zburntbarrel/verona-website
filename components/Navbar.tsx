import Link from "next/link";
import { externalLinks, navigation, type NavLink } from "@/lib/site";
import { DropdownIcon, LogoGlyph, VeronaWordmark } from "./icons";
import LanguageSwitcher from "./LanguageSwitcher";

function NavAnchor({ link, className }: { link: NavLink; className?: string }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        <span>{link.label}</span>
        {link.description && <small>{link.description}</small>}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      <span>{link.label}</span>
      {link.description && <small>{link.description}</small>}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-sea/10 bg-linen/90 backdrop-blur-[8px]">
      <nav className="mx-auto flex w-full items-center justify-between gap-5 px-5 py-4 md:px-8 lg:px-[60px]">
        <Link href="/" className="flex shrink-0 items-center gap-[11.25px] text-sea" aria-label="Verona home">
          <VeronaWordmark className="h-[22.5px] w-[130.667px]" />
          <LogoGlyph className="h-8 w-[49.41px]" />
        </Link>

        <ul className="hidden items-center gap-7 py-1.5 lg:flex">
          {navigation.map((item) => (
            <li key={item.label} className="nav-hover-group group relative">
              {item.links ? (
                <>
                  <button type="button" className="nav-trigger" aria-haspopup="menu">
                    {item.label}
                    <DropdownIcon className="size-5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />
                  </button>
                  <div className="nav-dropdown" role="menu">
                    {item.links.map((link) => (
                      <NavAnchor key={link.label} link={link} className="nav-dropdown-link" />
                    ))}
                  </div>
                </>
              ) : item.href ? (
                <Link href={item.href} className="nav-trigger">
                  {item.label}
                </Link>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <LanguageSwitcher variant="desktop" />
          <Link href="/get-verona" className="accent-button">
            Get $VERONA
          </Link>
        </div>

        <details className="mobile-nav lg:hidden">
          <summary aria-label="Open navigation">
            Menu
            <DropdownIcon className="size-5" aria-hidden />
          </summary>
          <div className="mobile-nav-panel">
            {navigation.map((item) =>
              item.links ? (
                <div key={item.label} className="mobile-nav-group">
                  <p>{item.label}</p>
                  {item.links.map((link) => (
                    <NavAnchor key={link.label} link={link} className="mobile-nav-link" />
                  ))}
                </div>
              ) : item.href ? (
                <Link key={item.label} href={item.href} className="mobile-nav-link">
                  {item.label}
                </Link>
              ) : null
            )}
            <div className="mobile-nav-group">
              <p>Language</p>
              <LanguageSwitcher variant="mobile" />
            </div>
            <a href={externalLinks.ero} target="_blank" rel="noreferrer" className="secondary-action w-full justify-center">
              Try Ero
            </a>
            <Link href="/get-verona" className="accent-button w-full justify-center">
              Get $VERONA
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
