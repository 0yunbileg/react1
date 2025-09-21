import React from "react"
import FeaturesItem from "./featuresItem"
import { MdOutlineBakeryDining } from "react-icons/md"
import { LuTruck, LuLeaf } from "react-icons/lu"

const FEATURES = [
  {
    id: 1,
    title: "Freshly Baked Daily",
    description:
      "All products are prepared each morning with locally sourced, organic ingredients to ensure the highest quality, taste, and freshness.",
    icon: MdOutlineBakeryDining,
  },
  {
    id: 2,
    title: "Eco-Friendly Packaging",
    description:
      "We use 100% recyclable, compostable, and plastic-free packaging designed to keep your baked goods fresh while reducing environmental impact.",
    icon: LuLeaf,
  },
  {
    id: 3,
    title: "Convenient Online Ordering",
    description:
      "Browse categories, customize your order, and schedule delivery or pickup with secure checkout and multiple payment options.",
    icon: LuTruck,
  },
]

const FeaturesSection = () => {
  return (
    <div className='container text-white !font-serif mt-[100px]'>
      <h1 className='text-center'>Features</h1>
      <div className='flex justify-between mt-[60px]'>
        {FEATURES.map((feature) => (
          <FeaturesItem feature={feature} />
        ))}
      </div>
    </div>
  )
}

export default FeaturesSection
