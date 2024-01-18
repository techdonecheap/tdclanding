import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

const BlogsContainer = () => {
  const blogData = [
    {
      img:
        "https://i.imgur.com/TftDpeHl.png",
      heading: "Efficiency in Predator Removal: Why Speed Matters.",
      para:
      " In the world of predator management, timing is everything. A swift response not only ensures immediate relief but also prevents potential disruptions to the delicate ecosystem of your farm. OSPM's commitment to rapid action is rooted in our understanding of the urgent nature of predator threats.  Our efficiency is a product of meticulous planning, expert skills, and a deep respect for both our clients and the wildlife we manage. By combining speed with precision, OSPM delivers solutions that are not just quick, but also effective and humane. This balance is what makes us leaders in predator management, providing peace of mind with every operation.,",
    },
    {
      img:
        "https://i.imgur.com/9c2MRAul.png",
      heading: "Adapting to Every Challenge Nature Offers.",
      para:
      " Nature's unpredictability requires a predator management service that's as adaptable as the wildlife it handles. At OSPM, we pride ourselves on our ability to navigate and operate effectively in any environment – be it dense woodlands, rolling hills, or open fields. Our adaptability is not just a skill; it's our promise to protect your land, no matter its terrain. Our team's deep understanding of animal behavior, coupled with state-of-the-art technology, enables us to provide tailored solutions for every situation. Whether it's a cunning coyote or a stealthy bobcat, OSPM is equipped to handle the challenge, ensuring the safety of your farm and maintaining the natural balance.",
    },
    {
      img:
        "https://i.imgur.com/jcbic7Ol.png",
      heading: "The Silent Guardians of Your Farm.",
      para:
      " In the stillness of dusk, when shadows grow long and the farm settles for the night, our team at OSPM takes action. We are the silent guardians, ensuring that the peace of your fields and the safety of your livestock are undisturbed. Our approach to predator management is not just about removal; it's about restoring balance and tranquility to your land.  OSPM's unique blend of military precision and hunting expertise makes us unparalleled in the field of predator control. With every mission, we bring a commitment to discretion and efficiency, ensuring that your farm remains a safe haven for its rightful inhabitants. Trust in OSPM to be your silent, vigilant protectors.",
    },
    {
      img:
        "https://i.imgur.com/5dRCCHql.png",
      heading: "Dawn of Safety: OSPM's Early Morning Vigilance.",
      para:
      " As the first light of dawn breaks over the horizon, OSPM's team is already at work, ensuring that your farm awakens to safety and serenity. Our early morning patrols are a cornerstone of our commitment to protecting your livelihood. In these quiet hours, our vigilance is heightened, preempting any threats that nocturnal predators might pose.  This proactive approach is what sets OSPM apart. We believe in not just responding to threats, but in preventing them. As the farm stirs to life, our clients can rest assured that their fields and livestock have been guarded throughout the night, ensuring a peaceful start to the day.",
    },
    {
      img:
        "https://i.imgur.com/8wZLW4Vl.png",
      heading: "Innovative Technology in Predator Management.",
      para:
      " At OSPM, we harness the power of technology to stay ahead in predator management. Our use of advanced tools, like high-tech drones, exemplifies our innovative approach. These drones enable us to survey large areas of land quickly and efficiently, identifying potential predator threats before they become a problem.  This technology not only enhances our efficiency but also ensures the safety of both the wildlife and your farm. By integrating these cutting-edge tools into our strategy, OSPM provides a service that is not just effective but also respectful of the environment and the natural habitats we work within.",
    },
    {
      img:
        "https://i.imgur.com/5Bk1o46l.png",
      heading: "The Art of Stealth in Predator Control.",
      para:
      " Stealth is an art form at OSPM, and it's crucial in our approach to predator control. As the shadows lengthen and the landscape transitions to twilight, our team employs tactics honed through years of experience. This expertise allows us to navigate various terrains silently, effectively managing predator threats without disruption to the local ecosystem.  Our strategic approach is designed to ensure minimal disturbance to both the wildlife and the farm environment. It's this delicate balance between assertive action and respectful management that defines our service, making OSPM a trusted name in predator control.",
    },
    {
      img:
        "https://images.unsplash.com/photo-1507209575474-fa61e9d3086b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://images.unsplash.com/photo-1542330952-bffc55e812b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ]
  return (
    <div className="max-w-7xl mx-auto mt-10 text-white">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 gap-4 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map(blog => (
            <div>
              <div className="w-96 h-72 overflow-hidden rounded-xl xxs:w-full sm:w-96">
                <img
                  className="h-full w-full object-cover"
                  src={blog.img}
                ></img>
              </div>
              <h1 className="text-3xl mt-2 font-poppins font-bold">
                {blog.heading}
              </h1>
              <p className="text-sm opacity-50 mt-2">{blog.para}</p>
            </div>
          ))}
        </div>
      </Fade>
      <div className="w-full h-72 mt-10 bg-gradient-to-r from-pink to-purple rounded-xl flex flex-col items-center justify-center">
        <h1 className="font-poppins font-bold text-3xl">Stay in the loop</h1>
        <h2 className="text-lg mt-2 opacity-50">
          Join our newsletter to get top news before anyone else
        </h2>
        <div className="flex-row mt-10">
          <Input placeholder="email."></Input>
          <Button
            colorClass="bg-white"
            title="Subscribe"
            textColor="text-black"
            marginClass="ml-5"
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default BlogsContainer
