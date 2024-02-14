import React from "react";

const FeaturedBlog = () => {
  // Function to handle click event
  const handleImageClick = () => {
    window.location.href = "https://www.techdonecheap.com";
  };

  return (
    <div className="max-w-7xl mx-auto px-8 mt-10">
      <h1 className="text-white font-poppins font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
        CojoviDigital a symphony of web development <br></br>  Marketing mastery and ai integration ...
      </h1>
      <p className="text-white text-lg mt-5 opacity-50 w-3/4 xxs:w-full lg:w-3/4">
        In the digital age, where the internet is more crowded than a New York subway at rush hour, finding a company that not only navigates this complexity but thrives in it, is like finding a needle in a haystack:
      </p>
      <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100" onClick={handleImageClick}>
          <img
            className="relative cursor-pointer"
            alt="marketing mastery"
            src="https://i.imgur.com/jrmqVah.jpg"
          ></img>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            Unlocking Web Success: The Power of SEO Optimization in 2024.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100" onClick={handleImageClick}>
          <img
            className="relative cursor-pointer"
            alt="Jobs Get Done"
            src="https://i.imgur.com/SMsCh6t.png"
          ></img>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            In the dynamic digital landscape of 2024, SEO remains a cornerstone for driving website traffic and generating leads for businesses.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100" onClick={handleImageClick}>
          <img
            className="relative cursor-pointer"
            alt="blog"
            src="https://i.imgur.com/6T70Vsa.jpg"
          ></img>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            Deployment Platforms: The Good, The Bad, and the Techie.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
