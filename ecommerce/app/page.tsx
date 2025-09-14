import Image from "next/image"
import Slider from "@/components/slider/slider"
import CardsSection from "@/components/cards/cardsSection"
import Hero from "@/components/hero/hero"

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center gap-[60px] mt-[60px]'>
      <Hero />
      <div className='pet'></div>
      <CardsSection />
      <Slider />
    </div>
  )
}
