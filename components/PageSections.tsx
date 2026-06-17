import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

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

// Article preview card for the blog index and related lists. Reuses the
// `.article-card` pattern; editorial/typographic (floral budget is spent on the
// featured + CTA bands, per the toolkit).
// Floral assigned per category so imagery runs through the whole grid while
// staying organized (the toolkit's image-backed card + navy-overlay technique).
const FLORAL_BY_CATEGORY: Record<string, string> = {
  Product: "product",
  Partnerships: "partnerships",
  Custody: "custody",
  Exchanges: "exchanges",
  Company: "company",
};

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="blog-card"
      data-floral={FLORAL_BY_CATEGORY[post.category] ?? "product"}
    >
      <span className="blog-card-scrim" aria-hidden />
      <div className="blog-card-body">
        <span className="blog-card-cat">{post.category}</span>
        <h3>{post.title}</h3>
        <div className="article-card-meta">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
      </div>
    </Link>
  );
}
