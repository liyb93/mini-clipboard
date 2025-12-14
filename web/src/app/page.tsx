import { SiteHeader } from "@/components/landing/site-header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { VideoSection } from "@/components/landing/video-section"
import { FAQSection } from "@/components/landing/faq-section"
import { SiteFooter } from "@/components/landing/site-footer"
import { InstallGuide } from "@/components/landing/install-guide"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesGrid />
        <VideoSection />
        <InstallGuide />
        <FAQSection />
      </main>
      <SiteFooter />
    </div>
  )
}
