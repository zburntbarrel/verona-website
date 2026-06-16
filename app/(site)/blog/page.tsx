import { PageHero, RouteTile } from "@/components/PageSections";

export const metadata = {
  title: "Blog",
  description: "Updates and essays from Verona.",
};

const posts = [
  {
    label: "Reality in the age of AI",
    body: "Notes on why agents need verified facts before they can act.",
  },
  {
    label: "Verona's guide to verified products",
    body: "A working model for products that reuse private user-owned proofs.",
  },
  {
    label: "Building out in the open",
    body: "Launch notes, technical updates, and network progress from the team.",
  },
];

export default function BlogPage() {
  return (
    <main>
      <PageHero eyebrow="Blog" title="Follow the latest.">
        <p>Blogs, announcements, launches, and notes from the team building the intelligence layer.</p>
      </PageHero>
      <section className="site-band bg-seashell text-sea">
        <div className="site-container grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <RouteTile key={post.label} href="/blog" {...post} />
          ))}
        </div>
      </section>
    </main>
  );
}
