import { Navbar } from "./navbar";
import { HomepageMinimal } from "./homepage-minimal";
import TradingViewTickerTape from "./TradingViewTickerTape"; // ✅ default export
import TradingViewWidget from "./TradingViewWidget";
import TradingViewNewsWidget from "./TradingViewNews";
import { Footer } from "./footer";
import TwoImagesSection from "./home-images";
import PopupForm from "./home-popup";
import BlogSection from "./blog-section";
export function HomepageMain() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/> {/* Top navbar */}
      <main className="flex-grow">
        
        <HomepageMinimal />
        <PopupForm/>
        <TradingViewTickerTape colorTheme="dark" />
        
         <TradingViewWidget />
         <TwoImagesSection/>
        <TradingViewNewsWidget/>
        <BlogSection/>
      </main>

      <Footer />
    </div>
  );
}
