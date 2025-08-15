import { Navbar } from "../../components/navbar"
import { AboutUsHeroSection } from "../../components/why-us-hero-section"
import { AboutUsPortfolioSection } from "../../components/why-us-portfolio-section"
import { AboutUsStatsAndFeatures } from "../../components/why-us-stats-and-features"
import { AboutUsTradingSteps } from "../../components/why-us-trading-steps"
import  TestimonialsSection  from "../../components/why-us-client-testimonials" // Import the new component
import { Footer } from "../../components/footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutUsHeroSection />
      <AboutUsPortfolioSection />
      <AboutUsStatsAndFeatures />
      <AboutUsTradingSteps />
      <TestimonialsSection /> {/* Add the new component here */}
      <Footer />
    </div>
  )
}
