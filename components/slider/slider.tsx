"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const Slider = () => {
  return (
    <Carousel className="flex items-center max-h-[800px] overflow-hidden">
      <Carousel.Item className="flex items-center">
        <Image
          src={"/images/slider/slider-img-1.jpg"}
          alt="slider image"
          width={800}
          height={400}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={"/images/slider/slider-img-2.jpg"}
          alt="slider image"
          width={800}
          height={400}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={"/images/slider/slider-img-3.jpg"}
          alt="slider image"
          width={800}
          height={400}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
