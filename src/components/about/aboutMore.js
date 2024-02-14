import React from "react"
import Fade from "react-reveal/Fade"

const AboutMore = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 h-full overflow-hidden gap-4 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-3">
          <div className="col-start-1 col-end-3 h-96 overflow-hidden rounded-xl">
            <img
              className="object-cover h-96 w-full"
              src="https://i.imgur.com/6T70Vsa.jpg"
            ></img>
          </div>
          <div className="col-start-3 overflow-hidden rounded-xl h-96 xxs:col-start-1 sm:col-start-3">
            <img
              className="object-cover h-96"
              src="https://i.imgur.com/NrUrWfp.jpg"
            ></img>
          </div>
        </div>
      </Fade>
      <div className="grid grid-cols-4">
        <p className="col-start-3 col-end-5 text-white text-3xl leading-normal mt-10 xxs:col-start-1 sm:col-start-3 xxs:text-sm xs:text-lg sm:text-3xl">
    We empower our clients by providing cost-effective tech solutions that drive growth and efficiency. Whether you're a startup looking for digital exposure or an established company in need of tech support, we have the tools and expertise to help you succeed.  For a more personalized content, please share specific details about your services, values, and how you differentiate from competitors.
        </p>
      </div>
    </div>
  )
}

export default AboutMore
