import React from "react"
import Image from "next/image"

const Hero = () => {
  return (
    <div className='container col-xl-10 col-xxl-8 px-4 py-5'>
      <div className='row align-items-center g-lg-5 py-5'>
        <div className='col-lg-7 text-center text-lg-start'>
          <h1 className='display-4 fw-bold lh-1 text-body-emphasis mb-3'>
            Smart, Safe, and Super Fun!
          </h1>
          <p className='col-lg-10 fs-4'>
            Explore a world of safe, high-quality toys and creative kits that
            spark imagination, encourage learning, and make every moment fun for
            your little ones. We have everything your child needs to grow, play,
            and thrive.
          </p>
          <div className='flex flex-col md:flex-row md:justify-center lg:justify-start'>
            <button
              type='button'
              className='btn btn-primary btn-lg px-4 me-sm-3'
            >
              Primary button
            </button>
            <button
              type='button'
              className='btn btn-outline-secondary btn-lg px-4'
            >
              Secondary
            </button>{" "}
          </div>
        </div>
        <div className='col-md-10 mx-auto col-lg-5'>
          <Image
            src={"/images/hero/hero-img.png"}
            alt='hero image'
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
