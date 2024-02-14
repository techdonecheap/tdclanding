import React from "react"
import Fade from "react-reveal/Fade"

const BlogHeader = () => {
  return (
    <Fade bottom>
      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <div className="h-full object-cover overflow-hidden rounded-xl m-5">
          <img src="https://i.imgur.com/7QC5WBJ.png"></img>
        </div>
        <div className="m-5">
          <h2 className="text-sm opacity-50">Insights from inside the void</h2>
          <h1 className="text-5xl font-bold font-poppins xxs:text-lg sm:text-5xl">
            Tech Done Cheap Insights You Need to Know
          </h1>
          <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">
            Welcome to the Tech Done Cheap blog, where practicality meets innovation in the realm of affordable technology. Our platform is more than just tips and tricks its a journey into the essence of maximizing technology within any budget. Since we started, Tech Done Cheap has been pioneering ways to make technology accessible and sustainable, blending our deep understanding of tech with cost-effective solutions. Join us as we share insights into economical tech upgrades, DIY projects, and how to leverage technology for personal and business growth without overspending. This blog is where frugality meets functionality, offering everything you need to navigate the tech world affordably.
          </p>
          <div className="flex items-center mt-5">
            <div className="h-10 w-10 object-cover overflow-hidden rounded-full">
              <img
                className="h-10 w-10"
                src="https://i.imgur.com/7QC5WBJ.png"
              ></img>
            </div>
            <div className="ml-2">
              <h2>TDC Admin</h2>
              <h4 className="text-xs opacity-50">Jan 18, 2024</h4>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default BlogHeader
