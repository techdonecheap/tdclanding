import React from "react"
import Fade from "react-reveal/Fade"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Fade bottom cascade>
        <div className="w-full flex flex-row justify-between mt-10 xxs:flex-col xs:flex-col sm:flex-row">
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">65</h1>
            <h3 className="text-white">Blog Archive</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">1k</h1>
            <h3 className="text-white">Discord Chats</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">103</h1>
            <h3 className="text-white">1on1 Problems solved</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">0</h1>
            <h3 className="text-white">Unhappy Subscribers</h3>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
            From initial problem, to <br></br>
            efficient solutions
          </h1>
          <h2 className="text-white text-sm mt-5 opacity-50">
          At TechDoneCheap, we believe in making technology accessible and affordable for everyone. Our services range from web development and digital marketing to IT consulting and tech support, all tailored to help our clients thrive in the digital era.. 
            <br></br><br></br>
            Our expertise has proven successful, keeping in mind budget, resources, and accessability.
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-white text-4xl">Stats</h1>
            <div className="mt-5">
              <div>
                <h2 className="text-white opacity-50 text-xl">Year Founded</h2>
                <h1 className="text-white text-sm">2020</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">Total Success</h2>
                <h1 className="text-white text-sm">89%</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">Team Members</h2>
                <h1 className="text-white text-sm">4</h1>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h1 className="text-white text-4xl">Our Core Behaviours</h1>
            <p className="mt-10 text-white opacity-50">
              At TechDoneCheap, our core beliefs revolve around democratizing technology and making it accessible to all. We hold the conviction that high-quality tech solutions should not be a luxury, but a standard accessible to businesses and individuals alike, regardless of their budget size. Innovation, integrity, and inclusivity guide our every decision and service offering. <br></br>We are committed to providing value-driven solutions that empower our clients, fostering a community where technology acts as a bridge rather than a barrier to growth and success. Our mission is to transform the digital landscape into one where affordability does not compromise quality...".
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl">
            Work more easily with everyone
          </h1>
          <h2 className="text-white text-sm mt-5 opacity-50">
            Our foundational beliefs at TechDoneCheap underscore the principle that effective and innovative technology solutions should be universally accessible. We champion the idea that financial constraints should not hinder access to the latest technological advancements.<br></br> Through a commitment to transparency, affordability, and quality, we strive to break down the barriers that often segregate smaller entities from leveraging technology for growth. Our vision is rooted in the belief that by equipping our clients with the tools and knowledge they need, we can collectively foster a more inclusive and technologically empowered future..
            <br></br>
          
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">
              Engineered for Swift Action<br></br>
            </h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              Our goal at TechDoneCheap is to revolutionize the way technology services are delivered by providing high-quality, affordable solutions that cater to the needs of both individuals and businesses. We aim to eliminate the financial barriers to technological access and innovation, ensuring that our clients are equipped with the latest tools and knowledge to thrive in the digital age. Through our commitment to excellence and affordability, we strive to be the catalyst for change in the tech industry, making advanced technology accessible to all.
            </p>
          </div>

          <div className="w-1/3 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">
              Operational Excellence,<br></br>No matter the budget
            </h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              Our expertise knows no bounds. TDC operates effectively across diverse environments, reflecting our adaptability and dedication to excellence. Since 2020, we've set new standards in getting it done with minimal cost, ensuring productivity.
            </p>
          </div>
          <div className="w-1/3 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">
              Blogs <br></br>and Mass archive of data
            </h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              At TechDoneCheap, we offer blogs and mass archives of data, serving as a treasure trove of insights and resources for tech enthusiasts and professionals alike. Our platform is designed to educate, inspire, and empower our users by providing them with comprehensive access to cutting-edge technology trends, tutorials, and in-depth analyses. Through our extensive collection of content, we aim to foster a community of informed and savvy tech users, equipped to navigate the complexities of the digital world with confidence and ease.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureSection
