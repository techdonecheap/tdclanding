import React from "react"

const AboutTeamBigCard = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="bg-lightblack w-full h-full flex flex-row justify-between rounded-xl xxs:flex-col sm:flex-row">
        <img
          className="w-3/4 object-cover h-96 rounded-l-lg xxs:w-full sm:w-3/4"
          src="https://i.imgur.com/6T70Vsa.jpg"
        ></img>
        <div className="flex flex-col justify-between">
          <div className="text-white text-right m-6 font-poppins xxs:text-center sm:text-right">
            <h1 className="text-5xl font-bold">Tech Predator</h1>
            <h3 className="text-lg font-bold opacity-50">Founder</h3>
          </div>
          <p className="text-white p-6 text-xl text-right xxs:text-center sm:text-right">
            At TechDoneCheap, our core beliefs revolve around democratizing technology and making it accessible to all. We hold the conviction that high-quality tech solutions should not be a luxury, but a standard accessible to businesses and individuals alike, regardless of their budget size. Innovation, integrity, and inclusivity guide our every decision and service offering. We are committed to providing value-driven solutions that empower our clients, fostering a community where technology acts as a bridge rather than a barrier to growth and success. Our mission is to transform the digital landscape into one where affordability does not compromise quality.{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutTeamBigCard
