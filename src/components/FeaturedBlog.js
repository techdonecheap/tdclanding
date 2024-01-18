import React from "react"

const FeaturedBlog = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-10">
      <h1 className="text-white font-poppins font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
        A Couple Important Things <br></br>  That Set Us Apart ...
      </h1>
      <p className="text-white text-lg mt-5 opacity-50 w-3/4 xxs:w-full lg:w-3/4">
        There are many companies that claim to offer predator removal services, but not all of them can deliver the quality and reliability that you deserve. At One Shot Predator Mgmt, we have a few important things that set us apart from the competition. Here are some of them:

      </p>
      <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img
            className="relative"
            alt="Silent Night"
            src="https://i.imgur.com/g4Aeb0q.jpg"
          ></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            Working at Night and in Silence to Protect Your Farm.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img
            className="relative"
            alt="Jobs Get Done"
            src="https://i.imgur.com/BxZxOUl.jpg"
          ></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            We efficiently eraticate the problem or problems.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img
            className="relative"
            alt="blog"
            src="https://i.imgur.com/wlyvIrM.jpg"
          ></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            Safety and Efficiency is our top priorities.
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlog
