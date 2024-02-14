import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

const BlogsContainer = () => {
  const blogData = [
    {
      img:
        "https://i.imgur.com/SMsCh6t.png",
      heading: "IllaBuilder: A Whirlwind Romance with AI Application Development.",
      para:
      " In the neon-lit, cyberpunk future we all pretended to live in during our childhood, IllaBuilder stands out not just as a platform but as the Gandalf of AI development—ushering in the age where creating AI-driven applications is as easy as pie. Scratch that, easier than pie (have you ever actually tried to make pie?). This open-source, low-code marvel is here to turn your drag-and-drop fantasies into reality, making the dark art of AI as accessible as your local coffee shop's Wi-Fi.,",
    },
    {
      img:
        "https://i.imgur.com/xFFB1e5.png",
      heading: "CojoviDigital A Symphony of Web Development, Marketing Mastery, and AI.",
      para:
      " In the digital age, where the internet is more crowded than a New York subway at rush hour, finding a company that not only navigates this complexity but thrives in it, is like finding a needle in a haystack. Enter CojoviDigital, the digital maestro conducting an orchestra of web development, marketing expertise, coding wizardry, and AI integrations with the finesse of a seasoned virtuoso. This isn't just a business review; it's an ode to the brilliance that is CojoviDigital. Let's dive deep into why this company isn't just another player in the digital field, but the very conductor of the symphony.",
    },
    {
      img:
        "https://i.imgur.com/6T70Vsa.jpg",
      heading: "Deployment Platforms The Good, The Bad, and the Techie.",
      para:
      " Hey there, fellow tech enthusiasts! Today, we're diving deep into the world of deployment platforms. We've got four heavy hitters in our lineup: Vercel.app, Netlify, Digital Ocean, and Heroku. Let's break them down, weigh their pros and cons, and figure out which one could be the champion of your deployment needs.",
    },
    {
      img:
        "https://i.imgur.com/WtCAE4m.jpg",
      heading: "The Rabbit R1 AI Gadget A Deep Dive into 2024's Exciting Technological Leap.",
      para:
      " Welcome to today's blog where we're diving into the world of the Rabbit R1, the latest AI-powered gadget that's been making waves in the tech world. From its unique design to its innovative features,  the Rabbit R1 seems poised to redefine our interactions with technology. Let's hop right in.",
    },
    {
      img:
        "https://techdonecheap.files.wordpress.com/2023/04/img_1101.jpg",
      heading: "3D Print : StormBreaker.",
      para:
      " The Adventures of Thor: Losing Mjölnir and Gaining Stormbreaker, Once upon a time, in the land of Asgard, Thor was the proud owner of the mighty hammer Mjölnir. But, as fate would have it, Thor's evil brother Loki had other plans for the powerful weapon.",
    },
    {
      img:
        "https://www.japantimes.co.jp/uploads/imported_images/uploads/2023/03/np_file_215776.jpeg",
      heading: "Unveiling ChatGPTs My GPTs Personalization at Its Finest!",
      para:
      " A Revolution in Conversational AI, Hello, dear readers! Today, we're diving into the exciting world of AI personalization with ChatGPT's latest feature: My GPTs. This innovative tool is changing the game in how we interact with AI, offering a level of customization that's as unique as your favorite coffee order - extra shots, anyone?.",
    },
    {
      img:
        "https://techdonecheap.files.wordpress.com/2023/04/ce9e9-banner.jpg",
      heading: "Dont be fooled by fake accounts, How to Find out if who your messaging is real or not!",
      para:
      " So this lil story has a little backing to it.  This woman started texting me on Facebook messenger, of course first thing I did was check her profile.  SHOCKER, she didnt have a Facebook profile she just had messenger.  Of course I asked her about it and there were the excuses, blah blah.  At this particular time in my timeline, I was in florida working, and I was out there alone, so having somebody to bullshit with wasn’t a bad thing.  I was sure the person was fake, but didnt really pry.",
    },
    {
      img:
        "https://i.imgur.com/f2F9ahX.png",
      heading: "Fanttik E1 Pro 3.7V Mini Electric Screwdriver - The Ultimate Tool for DIY Enthusiasts.",
      para:
      " Do you ever find yourself fumbling with a manual screwdriver, wishing for a more efficient, powerful, and user-friendly option? Well, your DIY dreams are about to come true with the **Fanttik E1 Pro 3.7V Mini Electric Screwdriver**. This compact powerhouse is a game-changer for anyone who loves to tinker, repair, or create. And guess what? You can grab this must-have tool right now through [this special link](https://amzn.to/3TkmspR) - and yes, it's an affiliate link, so you'll be supporting me while upgrading your toolkit. Win-win!.",
    },
    {
      img:
        "https://techdonecheap.files.wordpress.com/2023/04/kali-aircr.jpg",
      heading: "Hacking/Penetrating Wi-Fi networks, Kali Linux & Aircrack-ng.",
      para:
      " This guide will show you how to crack [pre-shared key](https://techofide.com/blogs/how-to-use-aircrack-ng-aircrack-ng-tutorial-practical-demonstration/#psk) [WPA/WPA2](https://techofide.com/blogs/how-to-use-aircrack-ng-aircrack-ng-tutorial-practical-demonstration/#wepwap) networks using the Aircrack-ng tool, which is used to crack wifi passwords. We are going to discuss what are pre-shared keys, what is packet injection, then we will verify if your Network Interface Card (NIC) supports packet injection. Then we will go ahead and crack the WAP/WAP2 wireless network.",
    },
  ]
  return (
    <div className="max-w-7xl mx-auto mt-10 text-white">
    <Fade bottom cascade>
    <div className="grid grid-cols-3 gap-4 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {blogData.map(blog => (
      <div key={blog.heading}> {/* Added key for better list performance */}
      <a href="http://www.techdonecheap.com" target="_blank" rel="noopener noreferrer">
      <div className="w-96 h-72 overflow-hidden rounded-xl xxs:w-full sm:w-96">
      <img
      className="h-full w-full object-cover cursor-pointer" // Added cursor-pointer for visual feedback
      src={blog.img}
      alt="Blog"
      ></img>
      </div>
      </a>
      <h1 className="text-3xl mt-2 font-poppins font-bold">
      {blog.heading}
      </h1>
      <p className="text-sm opacity-50 mt-2">{blog.para}</p>
      </div>
    ))}
    </div>
    </Fade>
    {/* Newsletter section remains unchanged */}
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
  );
};

export default BlogsContainer
  