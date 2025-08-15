import { TradingHero } from "@/components/trading-hero"
import { Navbar } from "../../components/navbar" // Updated import
import CommoditiesTrading from "@/components/commodities-trading"
import { AgrifuturesComponent } from "@/components/products-steps"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <TradingHero />
      <CommoditiesTrading/>
      <AgrifuturesComponent/>
      <Footer/>

    </main>
  )
}
