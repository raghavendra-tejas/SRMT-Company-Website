import React from 'react'
import HeroTruck from "./Images/Hero-Truck.jpeg"

const Hero = () => {
  return (
    <div class="relative">
      <img class="w-screen h-screen opacity-50 object-cover" src={HeroTruck} alt="Hero-Truck" />
      <div class="absolute top-20 left-20 right-20">
        <p class="text-gray-600 font-mono leading-loose">Welcome to <span class="font-blackopsone text-2xl tracking-widest text-gray-800">SRMT</span></p>
        {/* <br /> */}
        <p class="font-extrabold text-4xl font-sans text-gray-600">We Transport Milk</p>
      </div>
    </div>
  )
}

export default Hero