import React from "react"
import Fade from "react-reveal/Fade"

const CareersHeader = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="flex">
          <div className="w-2/4 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">TechDoneCheap.com</h2>
            <h1 className="text-5xl font-bold">
              Our tech blog to get all <br></br> jobs done on whatever budget.
            </h1>
            <p className="mt-5 opacity-70">
              Our tech blog is dedicated to tackling technology projects on any budget, focusing on innovative DIY solutions that repurpose and recycle electronics. We delve into the world of gadgets, dissecting them to understand their core components and explore how peripherals from various devices can be reused in creative ways. Our mission is to ensure that no piece of electronics goes to waste, demonstrating through our guides and tutorials how anyone can make the most out of their tech, regardless of financial constraints..
            </p>
          </div>
          <div className="w-2/4 rounded-xl overflow-hidden m-2">
            <img src="https://i.imgur.com/weBH830.png"></img>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="flex flex-row-reverse mt-10">
          <div className="w-2/5 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">StargazerProject.xyz</h2>
            <h1 className="text-5xl font-bold">
              Another source for,  <br></br> Coding, Programming and conspiracy theories
              </h1>
            <p className="mt-5 opacity-70">
              this is moreso for the fun and entertainment aspects of the internet, but this is a safe place for all topics. doesnt matter if its political, conspiracy, or whatever, we talk and converse about all sorts of things.
            </p>
          </div>
          <div className="w-3/5 rounded-xl overflow-hidden m-2">
            <img src="https://i.imgur.com/sKaWvIE.png"></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default CareersHeader
