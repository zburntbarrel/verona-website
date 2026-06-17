import Link from "next/link";
import BlogList from "@/components/BlogList";
import { LogoGlyph } from "@/components/icons";
import {
  blogCategories,
  formatPostDate,
  getAllPosts,
  getFeaturedPost,
} from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Updates, launches, and essays from the team building Verona.",
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const rest = getAllPosts().filter((post) => post.slug !== featured.slug);

  return (
    <main>
      {/* Hero */}
      <section className="site-band bg-linen text-sea">
        <div className="site-container max-w-[980px]">
          <p className="eyebrow">Blog</p>
          <h1 className="display-heading text-[56px] md:text-[88px]">
            Follow the <em>latest</em>.
          </h1>
          <p className="body-copy mt-6 max-w-[440px]">
            Announcements, launches, and notes from the team building the
            verification layer for an internet where truth is easy to prove.
          </p>
        </div>
      </section>

      {/* Featured — parallax floral with a cream panel */}
      <section
        className="relative overflow-hidden text-sea"
        style={{
          backgroundColor: "#e5dccb",
          backgroundImage: "url('/assets/blog-floral-product.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 18%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="site-container relative py-24 md:py-32">
          <Link
            href={`/blog/${featured.slug}`}
            className="relative mx-auto block max-w-[760px] bg-linen p-10 md:p-16"
          >
            <LogoGlyph className="absolute right-8 top-8 h-7 w-auto text-sea md:right-10 md:top-10" />
            <p className="eyebrow text-rosso">Featured · {featured.category}</p>
            <h2 className="display-heading mt-4 text-[40px] md:text-[60px]">
              {featured.title}
            </h2>
            <p className="body-copy mt-6 max-w-[560px]">{featured.dek}</p>
            <div className="article-card-meta mt-6">
              <time dateTime={featured.date}>{formatPostDate(featured.date)}</time>
              <span aria-hidden>·</span>
              <span>{featured.readingMinutes} min read</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Archive — filterable grid of article cards */}
      <section className="site-band bg-linen text-sea">
        <div className="site-container">
          <BlogList posts={rest} categories={blogCategories} />
        </div>
      </section>

      {/* Close — parallax floral CTA with cream panel */}
      <section
        className="relative overflow-hidden text-sea"
        style={{
          backgroundColor: "#e5dccb",
          backgroundImage: "url('/assets/blog-floral-exchanges.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="site-container relative py-24 md:py-32">
          <div className="relative mx-auto max-w-[760px] bg-linen p-10 md:p-16">
            <LogoGlyph className="absolute right-8 top-8 h-7 w-auto text-sea md:right-10 md:top-10" />
            <h2 className="display-heading text-[40px] md:text-[60px]">
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
