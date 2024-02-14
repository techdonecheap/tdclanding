import React from "react"
import Fade from "react-reveal/Fade"

const AboutHeader = () => {
  return (
    <Fade bottom cascade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl">
          <img src="https://i.imgur.com/6T70Vsa.jpg"></img>
        </div>
        <div className="mt-5">
          <span className="text-white text-sm opacity-50">About us</span>
          <h1 className="text-white text-7xl font-poppins font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-7xl">
            We're on a mission to reinvent web, UX, product, and content design
            - by making it visual.if that sounds good to you, you should apply.
          </h1>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
