"use client"
import React, { useEffect } from "react"
import Carousel from "react-bootstrap/Carousel"
import Image from "next/image"

const Slider = () => {
  return (
    <Carousel className='max-h-[400px] overflow-hidden'>
      <Carousel.Item className='flex items-center'>
        <img src={"/images/slider/slider-img-1.jpg"} alt='slider image' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={"/images/slider/slider-img-2.jpg"} alt='slider image' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={"/images/slider/slider-img-3.jpg"} alt='slider image' />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
