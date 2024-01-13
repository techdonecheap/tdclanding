import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 h-auto mb-10">
      <Fade bottom>
        <div className="w-full flex flex-row justify-between align-middle bg-lightblack p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full sm:w-3/4">
            <div className="font-poppins text-white font-semibold text-2xl leading-10 xxs:text-xs xxs:font-normal sm:text-2xl">
              "OSPM has exceeded all expectations! Their expertise in predator removal is truly remarkable. 
              We've been using their services for years, and they consistently deliver outstanding results. 
              Their team's dedication and precision are unparalleled. I highly recommend OSPM for any predator 
              removal needs.."
            </div>
            <div className="mt-10">
              <h1 className="text-white text-3xl font-bold font-poppins">
                Cody Viveiros
              </h1>
              <h1 className="text-white text-sm font-semibold font-poppins opacity-50">
                Senior Cock Swinger
              </h1>
            </div>
          </div>
          <div className="w-1/4 overflow-hidden flex align-middle justify-center xxs:hidden sm:block">
            <img
              className="rounded-xl w-auto h-auto"
              src="https://i.imgur.com/LpUWRrE.jpg"
            ></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
