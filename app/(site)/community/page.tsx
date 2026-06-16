import { PageHero } from "@/components/PageSections";

export const metadata = {
  title: "Community",
  description: "Verona community programs and participation.",
};

export default function CommunityPage() {
  return (
    <main>
      <PageHero eyebrow="Community" title="Build the fact layer.">
        <p>
          Community program details will live here once the program is ready for
          public participation.
        </p>
      </PageHero>
    </main>
  );
}
