import React from 'react'
import smile from "./Images/smile.png"
import first from "./Images/first.png"
import second from "./Images/second.png"
import third from "./Images/third.png"
import fourth from "./Images/fourth.png"
import fifth from "./Images/fifth.png"
import sixth from "./Images/sixth.png"

const Gallery = () => {
  return (
    <section class="text-gray-400 bg-gradient-to-r from-sky-900 to-white body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <div class="flex justify-between">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">Deliver with &nbsp;</h1>
            <img class="w-14" alt="smile" src={smile} />
          </div>
          {/* <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"></p> */}
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-center block" src={third} />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-center block" src={sixth} />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full object-center block w-66" src={fifth} />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full object-cover object-center block" src={first} />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-center block" src={fourth} />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-center block" src={second} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery