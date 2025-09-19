"use client"
import React from "react"
import { Button } from "react-bootstrap"
import { useRouter } from "next/navigation"
import Image from "next/image"

const Hero = () => {
  const router = useRouter()
  return (
    <div className='container relative flex flex-col-reverse md:flex-row items-center justify-between object-contain min-h-[80vh] px-6 md:px-20 text-white'>
      {/* Text Content */}
      <div className='flex-1 flex flex-col gap-6 md:pr-10'>
        <div className='[text-align:center] md:text-left'>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
            Explore the Building Blocks of the Universe
          </h1>
          <p className='text-lg md:text-xl text-gray-200 mt-4'>
            An interactive periodic table to visualize, filter, and discover
            chemical elements with ease.
          </p>
        </div>

        {/* Buttons */}
        <div className='w-[100%] grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 mt-4'>
          <Button
            variant='primary'
            onClick={() => router.push("/periodic-table")}
            className='w-[100%] px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600 transition-colors duration-300'
          >
            Explore Elements
          </Button>
          <Button
            variant='secondary'
            onClick={() => router.push("/")}
            className='w-[100%] px-8 py-3 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-indigo-800 transition-colors duration-300'
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className='flex-1 flex justify-center md:justify-end mb-6 md:mb-0'>
        <Image
          src={"/images/hero/hero-img.png"}
          alt='hero section image'
          width={600}
          height={600}
          className='w-full max-w-xs sm:max-w-sm md:max-w-lg object-contain'
        />
      </div>
    </div>
  )
}

export default Hero
