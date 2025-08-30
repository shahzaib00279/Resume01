import webimage from '../assets/icon-design.svg'
import devimage from '../assets/icon-dev.svg'
import mobileimage from '../assets/icon-app.svg'
import photoimage from '../assets/icon-photo.svg'
import logo2 from '../assets//logo-1-color.png' 
import logo3 from '../assets//logo-2-color.png'
import logo4 from '../assets//logo-3-color.png'
import logo5 from '../assets//logo-4-color.png'
import logo6 from '../assets//logo-5-color.png'
import projectimage1 from '../assets//avatar-1.png'
import projectimage2 from '../assets//avatar-2.png'
import projectimage3 from '../assets//avatar-3.png' 
import projectimage4 from '../assets//avatar-4.png'

const data = [
    { image: webimage,
       title: "Web design",
        description: "The most modern and high-quality design made at a professional level." },
    { 
      image: devimage,
       title: "Web development",
        description: "High-quality development of sites at the professional level." },
    {
       image: mobileimage,
        title: "Mobile apps",
         description: "Professional development of applications for iOS and Android." },
    { 
      image: photoimage,
       title: "Photography",
        description: "I make high-quality photos of any category at a professional level." }
  ]
  const ClientLogo = [
    logo2, logo3, logo4, logo5, logo6
  ]
  const testimonials = [
    {
      project: projectimage1,
      name: "Muhammad Jahanzaib",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      project: projectimage2,
      name: "Jessica Miller",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      project: projectimage3,
      name: "Emily Evans",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {  
      project: projectimage4,
      name: "Naveed Sarwar",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    }
  ]
  export {data, ClientLogo, testimonials}