import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="site-band bg-linen text-sea">
      <div className="site-container max-w-[980px]">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-heading text-[64px] md:text-[104px]">{title}</h1>
        <div className="body-copy mt-6 max-w-[680px]">{children}</div>
      </div>
    </section>
  );
}

export function EditorialSection({
  title,
  children,
  dark,
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`site-band ${dark ? "bg-forest text-linen" : "bg-linen text-sea"}`}>
      <div className="site-container grid gap-8 md:grid-cols-[0.42fr_0.58fr]">
        <h2 className="font-[family-name:var(--font-garamond)] text-[44px] leading-[0.95] md:text-[68px]">
          {title}
        </h2>
        <div className={`body-copy ${dark ? "text-seashell" : ""}`}>{children}</div>
      </div>
    </section>
  );
}

export function RouteTile({
  href,
  label,
  body,
}: {
  href: string;
  label: string;
  body: string;
}) {
  return (
    <Link href={href} className="route-tile">
      <span>{label}</span>
      <p>{body}</p>
    </Link>
  );
}
