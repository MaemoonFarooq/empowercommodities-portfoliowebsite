import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import TradingLanding from "../../components/about-us-hero-section"
import { AboutUsCtaSection } from "@/components/about-us-cta-section"
import { AboutUsPartnersSection } from "@/components/about-us-partners-section"
import ApproachSection from "@/components/approach-section"
import EmpowerCommodities from "@/components/about-us-steps"
// import { AboutUsCredentialsSection } from "@/components/about-us-steps"
import { AboutUsFaqSection } from "@/components/about-us-faq-section"
export default function Page() {
    return (
      <div>
        <Navbar/>
        <TradingLanding />
        <EmpowerCommodities/>
        <ApproachSection/>
        <AboutUsPartnersSection/>
        <AboutUsCtaSection/>
        <AboutUsFaqSection/>
        
        <Footer/>
      </div>
    )
  }
