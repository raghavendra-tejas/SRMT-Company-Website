import React from 'react'
import LogoTruck from "./Images/Logo-Truck.png"

const NavBar = () => {
  return (
    
    <div>
      <header class="text-gray-400 bg-gradient-to-r from-white to-sky-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <div class="w-20">
              <img src={LogoTruck} alt="Logo-Truck" />
            </div>
            
            <span class="ml-3 font-blackopsone text-gray-800 text-4xl">SRMT</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-xs justify-center">
            <a class="mr-5 hover:text-white">Home</a>
            <a class="mr-5 hover:text-white">About</a>
            <a class="mr-5 hover:text-white">Services</a>
            <a class="mr-5 hover:text-white">Contact</a>
          </nav>
          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-sm mt-4 md:mt-0">Get a Quote
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  )
}

export default NavBar