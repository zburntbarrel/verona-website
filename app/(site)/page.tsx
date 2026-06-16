import AiCapable from "@/components/AiCapable";
import Hero from "@/components/Hero";
import {
  BlogPreview,
  BrandProof,
  CloseAndSignup,
  EroProof,
  HowVeronaWorks,
  NetworkAudience,
  TokenSection,
} from "@/components/HomeSections";
import Investors from "@/components/Investors";
import VideoFounder from "@/components/VideoFounder";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="sticky top-[73px]">
          <Hero />
        </div>
        <div className="relative z-10">
          <Investors />
        </div>
      </div>
      <VideoFounder />
      <AiCapable />
      <HowVeronaWorks />
      <NetworkAudience />
      <EroProof />
      <BrandProof />
      <BlogPreview />
      <TokenSection />
      <CloseAndSignup />
    </main>
  );
}
