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

// Article preview card for the blog index and related lists. Each post carries
// its own floral cover image (lib/blog.ts), so the grid reads as 20 distinct
// covers rather than 5 category-shared ones. The same image is reused as the
// post hero background in app/(site)/blog/[slug]/page.tsx — the index card is
// a literal preview of the post.
export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="blog-card"
      style={{ backgroundImage: `url("${post.image}")` }}
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
