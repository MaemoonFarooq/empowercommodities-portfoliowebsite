import { Navbar } from "../../components/navbar" // Updated import
import { CareerHeroSection } from "../../components/career-hero-section"
import { CareerCallToBrokers } from "../../components/career-call-to-brokers"
import { Footer } from "../../components/footer"
import { CvApplicationForm } from "../../components/cv-application-form"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/> {/* Using the new Navbar */}
      <CareerHeroSection />
      <CareerCallToBrokers /> {/* Added back the CareerCallToBrokers section */}
      <CvApplicationForm />
      <Footer />
    </div>
  )
}
