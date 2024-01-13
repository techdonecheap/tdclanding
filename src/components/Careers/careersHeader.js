import React from "react"
import Fade from "react-reveal/Fade"

const CareersHeader = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="flex">
          <div className="w-2/4 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">Snarkle-Flarts</h2>
            <h1 className="text-5xl font-bold">
              ill get to this <br></br> part eventually.
            </h1>
            <p className="mt-5 opacity-70">
              there is alot of context ineed to get from you guys to compelte the about page, pricing page, contact page, etc etc
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
            <h2 className="text-sm opacity-50 font-semibold">Moose-knuckel</h2>
            <h1 className="text-5xl font-bold">
              blah blah balh, yeah yeah yeah <br></br> we are cool.
            </h1>
            <p className="mt-5 opacity-70">
              sometime i think my peepee grows when im sleeping
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
