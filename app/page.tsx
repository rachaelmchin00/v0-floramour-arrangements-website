import { HeroSection } from "@/components/home/hero-section"
import { PortfolioGrid } from "@/components/home/portfolio-grid"
import { AboutPreview } from "@/components/home/about-preview"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutPreview />
      <PortfolioGrid />
      <CTASection />
    </div>
  )
}
