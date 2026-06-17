"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/PageSections";
import type { BlogCategory, BlogPost } from "@/lib/blog";

const ALL = "All" as const;

export default function BlogList({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: BlogCategory[];
}) {
  const [active, setActive] = useState<BlogCategory | typeof ALL>(ALL);

  // Only show filters that actually match at least one post.
  const available = useMemo(
    () => categories.filter((c) => posts.some((p) => p.category === c)),
    [categories, posts],
  );

  const filtered = useMemo(
    () => (active === ALL ? posts : posts.filter((p) => p.category === active)),
    [active, posts],
  );

  const filters: (BlogCategory | typeof ALL)[] = [ALL, ...available];

  return (
    <>
      <div className="blog-filter" role="group" aria-label="Filter posts by category">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="blog-filter-chip"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="blog-grid">
          {filtered.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="body-copy">No posts in this category yet.</p>
      )}
    </>
  );
}
