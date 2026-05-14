import Celebrations from "./HomeComponent/Celebrations";
import Deals from "./HomeComponent/Deals";
import DealsandMap from "./HomeComponent/DealsandMap";
import HeroSection from "./HomeComponent/HeroSection";
import HostelCards from "./HomeComponent/HostelCards";
import HostelPricing from "./HomeComponent/HostelPricing";
import Lifestyle from "./HomeComponent/Lifestyle";
import Testimonials from "./HomeComponent/Testimonials";
import MobileHeroSection from "./HomeComponent/MobileHeroSection";

export default function Home() {
  return (
    <>
      <div className="block lg:hidden">
        <MobileHeroSection />
      </div>
      <div className="hidden lg:block">
        <HeroSection />
      </div>
      <HostelCards />
      <HostelPricing />
      <Lifestyle />
      <Celebrations />
      <Deals />
      <Testimonials />
      <DealsandMap />
    </>

  );
}
