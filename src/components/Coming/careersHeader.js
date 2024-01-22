import React from "react"
import Fade from "react-reveal/Fade"

const CareersHeader = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="flex">
          <div className="w-2/4 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">Bullseye</h2>
            <h1 className="text-5xl font-bold">
              We havent finished this <br></br> yet, but we are close.
            </h1>
            <p className="mt-5 opacity-70">
              There is just so much intresting things about these two sharpshooters, we needed extra time to draft their life credentials.
            </p>
          </div>
          <div className="w-2/4 rounded-xl overflow-hidden m-2">
            <img src="https://i.imgur.com/fE6ktC2.jpg"></img>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="flex flex-row-reverse mt-10">
          <div className="w-2/5 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">Sharpshooter</h2>
            <h1 className="text-5xl font-bold">
              Make your rounds,  <br></br> Drop back by again later
              </h1>
            <p className="mt-5 opacity-70">
              and you will get to know our gunslingers.
            </p>
          </div>
          <div className="w-3/5 rounded-xl overflow-hidden m-2">
            <img src="https://i.imgur.com/13Xiz2u.jpg"></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default CareersHeader
