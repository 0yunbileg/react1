import Slider from "@/components/slider/slider";
import CardsSection from "@/components/cards/cardsSection";
import Hero from "@/components/hero/hero";
import PopularSection from "@/components/populars/popularSection";
import FeaturesSection from "@/components/features/featuresSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-[60px] bg-[#AB886D]">
      <Slider />
      <Hero />
      {/* <div className='pet'></div> */}
      <PopularSection />
      <FeaturesSection />
      <CardsSection />
    </div>
  );
}
