import React from "react";
import smile from "./Images/smile.png";
import first from "./Images/first.png";
import second from "./Images/second.png";
import third from "./Images/third.png";
import fourth from "./Images/fourth.png";
import fifth from "./Images/fifth.png";
import sixth from "./Images/sixth.png";

const Gallery = () => {
  return (
    <section class="text-gray-400 bg-gradient-to-b from-cyan-900 to-gray-900 body-font">
      <div class="container px-5 py-10 pt-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <div class="flex justify-between">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white lg:mb-0 mb-4">
              Deliver with &nbsp;
            </h1>
            <img class="w-14" alt="smile" src={smile} />
          </div>
          <p class="2xl:pl-6 2xl:w-2/3 mx-auto leading-relaxed text-justify">
            We are leaders in the milk transportation industry offers
            first-rate, advanced and budget-friendly services. We are serving
            this industry for many years and delivering the best transportation
            solution to our clients. As a top transportation company, we
            completely understand our customer's needs and offer them
            comprehensive transportation solutions by employing the most updated
            technology and equipment. We offer services for domestic, commercial
            and industrial moves.
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-center block"
                src={third}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-center block"
                src={sixth}
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full object-center block w-66"
                src={fifth}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full object-cover object-center block"
                src={first}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-center block"
                src={fourth}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-center block"
                src={second}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
