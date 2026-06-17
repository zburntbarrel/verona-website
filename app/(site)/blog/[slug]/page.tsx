import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/PageSections";
import { LogoGlyph } from "@/components/icons";
import {
  formatPostDate,
  getAllPosts,
  getHeadingId,
  getPostBySlug,
  getRelatedPosts,
  type BlogBlock,
} from "@/lib/blog";
import { site } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.dek,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.dek,
      url,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.dek,
    },
  };
}

function ArticleBlock({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 id={getHeadingId(block.text)} className="prose-heading">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul className="prose-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="prose-quote">
          <p>{block.text}</p>
          {block.cite && <cite>{block.cite}</cite>}
        </blockquote>
      );
    default:
      return <p className="prose-p">{block.text}</p>;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = post.body.filter((b) => b.type === "heading");
  const related = getRelatedPosts(slug);

  return (
    <main>
      {/* Header */}
      <section className="site-band bg-linen text-sea pb-0">
        <div className="site-container max-w-[860px]">
          <Link href="/blog" className="eyebrow text-rosso blog-back">
            ← Blog
          </Link>
          <p className="eyebrow mt-6">{post.category}</p>
          <h1 className="display-heading mt-3 text-[44px] md:text-[68px]">
            {post.title}
          </h1>
          <div className="article-card-meta mt-6">
            <span>{post.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </div>
      </section>

      {/* Body with sticky table of contents */}
      <section className="site-band bg-linen text-sea pt-12">
        <div className="site-container blog-article">
          {headings.length > 1 && (
            <aside className="blog-toc" aria-label="On this page">
              <p className="eyebrow">On this page</p>
              <nav>
                {headings.map((h) => (
                  <a key={h.text} href={`#${getHeadingId(h.text)}`}>
                    {h.text}
                  </a>
                ))}
              </nav>
            </aside>
          )}

          <article className="blog-prose">
            <p className="prose-lead">{post.dek}</p>
            {post.body.map((block, i) => (
              <ArticleBlock key={i} block={block} />
            ))}

            <div className="blog-share">
              <span className="eyebrow">Share</span>
              <a
                href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${site.url}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${site.url}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(`${site.url}/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="site-band bg-seashell text-sea">
          <div className="site-container">
            <p className="eyebrow">Keep reading</p>
            <div className="blog-grid mt-8">
              {related.map((rel) => (
                <ArticleCard key={rel.slug} post={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Close — parallax floral CTA with cream panel */}
      <section
        className="relative overflow-hidden text-sea"
        style={{
          backgroundColor: "#e5dccb",
          backgroundImage: "url('/assets/blog-floral-company.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="site-container relative py-24 md:py-32">
          <div className="relative mx-auto max-w-[640px] bg-linen p-10 md:p-16">
            <LogoGlyph className="absolute right-8 top-8 h-7 w-auto text-sea md:right-10 md:top-10" />
            <h2 className="display-heading text-[40px] md:text-[56px]">
              Get the next update <em>first</em>.
            </h2>
            <p className="body-copy mt-6 max-w-[460px]">
              New launches, integrations, and essays, straight from the team.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/get-verona" className="primary-action govern-cta">
                Get $VERONA
              </Link>
              <a href="#newsletter" className="secondary-action text-sea">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
