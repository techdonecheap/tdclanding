import React from "react"

const FeaturedBlog = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-10">
      <h1 className="text-white font-poppins font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
        Some fucking shit <br></br> about shit we kill
      </h1>
      <p className="text-white text-lg mt-5 opacity-50 w-3/4 xxs:w-full lg:w-3/4">
        Listen dude, we fuck shit up, nuff said, quit asking stupid questions and just 
        read our fucking blog about shit you need todo if you dont want your farm fucked up,
        or about how badass we are
      </p>
      <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img
            className="relative"
            alt="blog"
            src="https://i.imgur.com/i9HxC6N.png"
          ></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img
            className="relative"
            alt="blog"
            src="https://i.imgur.com/5Q4xFpp.png"
          ></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img
            className="relative"
            alt="blog"
            src="https://i.imgur.com/bXPPe1m.png"
          ></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlog
