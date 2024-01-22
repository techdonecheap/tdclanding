import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 h-auto mb-10">
      <Fade bottom>
        <div className="w-full flex flex-row justify-between align-middle bg-lightblack p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full sm:w-3/4">
            <div className="font-poppins text-white font-semibold text-2xl leading-10 xxs:text-xs xxs:font-normal sm:text-2xl">
    "My heart used to pound like a scared rabbit at the mere rustle of leaves near my ranch. Predators lurked, a constant threat to my livelihood and beloved wildlife. Then, like a fearless hawk swooping in, arrived Jeff and Adam with One Shot Predator Mgmt! These aren't your rusty shotgun, scare-crow kind of folks. They're a crack team of camo-ninjas, outsmarting predators, jumpin fences, rendering themselves invisible to everything but danger. My livestock sleeps soundly now, while rabbits frolic and birdsong fills the air. They don't just protect farms, they champions wildlife too, building safe havens and educating communities. So, if you're tired of living on the edge of your seat, call One Shot! They'll turn your predator blues into a symphony of peace, for both farm and fauna!"
            </div>
            <div className="mt-10">
              <h1 className="text-white text-3xl font-bold font-poppins">
                Sam Trudeaux
              </h1>
              <h1 className="text-white text-sm font-semibold font-poppins opacity-50">
                RanchHand
              </h1>
            </div>
          </div>
          <div className="w-1/4 overflow-hidden flex align-middle justify-center xxs:hidden sm:block">
            <img
              className="rounded-xl w-auto h-auto"
              src="https://images.unsplash.com/photo-1600828576920-cb1528d7ac66?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4YXMlMjByYW5jaHxlbnwwfHwwfHx8MA%3D%3D"
            ></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
