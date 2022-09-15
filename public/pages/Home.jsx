import HeroSection from "../components/hero/HeroSection";
import TrendingSection from "../components/trendingsection/TrendingSection";
import NearbySection from "../components/nearbysection/NearbySection";
import HackatonSection from "../components/hackatons/HackatonSection";
import GymnasiumSection from "../components/gymnasium/GymnasiumSection";
import OverViewSection from "../components/overViewsection/OverViewSection";

export default function Home() {
  return (
    <div className="font-inter">
      <HeroSection />
      <TrendingSection />
      <NearbySection />
      <HackatonSection />
      <OverViewSection />
      <GymnasiumSection />
    </div>
  );
}
