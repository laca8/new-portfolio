import React, {useState} from 'react'
import project1 from "../assets/p1.png";
import project2 from "../assets/2.png";
import project3 from "../assets/3.png";
import project4 from "../assets/4.png";
import project5 from "../assets/5.png";
import project6 from "../assets/6.png";
import project7 from "../assets/7.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from 'react-icons/ai'
import ShinyEffect from './ShinyEffect';

const projects = [
    {
        img: project1,
        title: "Project #1",
        description:
          "An e-commerce platform with various features.",
        links: {
          site: "https://proshop-gpt7.onrender.com/",
          github: "#",
        },
      },
      {
        img: project2,
        title: "Project #2",
        description: "A fullstack application built with Node.js and MongoDB.",
        links: {
          site: "https://social-media-tgss.onrender.com/",
          github: "#",
        },
      },
      {
        img: project3,
        title: "Project #3",
        description: "A responsive website designed with modern CSS.",
        links: {
          site: "https://restaurant-client-topaz.vercel.app/",
          github: "#",
        },
      },
      {
        img: project4,
        title: "Project #4",
        description:
          "This application describes the multiplicity of the population and the growth and development of education, culture, health and sports in Egypt",
        links: {
          site:"https://egypt-xe1t.onrender.com/dashboard" ,
          github: "#",
        },
      },
      {
        img: project5,
        title: "Project #5",
        description: "Build by using ReactJS",
        links: {
          site:"https://video-call-opal-six.vercel.app/" ,
          github: "#",
        },
      },
      {
        img: project6,
        title: "Project #6",
        description:
          "Build by using ReactJS",
        links: {
          site: "https://social-media-app-amber-ten.vercel.app/",
          github: "#",
        },
      },
      {
        img: project7,
        title: "Project #7",
        description:
          "Build by using ReactJS",
        links: {
          site: "https://jobfinder-5zac.vercel.app/",
          github: "#",
        },
      },
    {
        img: "",
        title: "Project #8",
        description:
          "Build by using ReactJS",
        links: {
          site:"https://travel-booking.onrender.com/" ,
          github: "#",
        },
    },
        {
        img: "",
        title: "Project #9",
        description:
          "Build by using ReactJS",
        links: {
          site:"https://job-seeking-pi.vercel.app/",
          github: "#",
        },
        },
    {
        img: "",
        title: "Project #10",
        description:
          "Build by using ReactJS",
        links: {
          site:"https://hosbital-management.vercel.app/",
          github: "#",
        },
    }
    
]

const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState(0)

  return (
    <div className='my-6 max-w-[1200px] mx-auto grid grid-cols-8 gap-6 md:py-40' id="portfolio">


<div className='z-10 col-span-3 grid place-items-center grid-cols-1 relative'>
  <p className='text-gray-200 font-bold text-4xl -skew-y-6 '>Select Project</p>
  <img src={arrow} className='absolute w-[50px] top-10 right-12' />

  <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1
   space-y-2 md:space-y-4 text-2xl'>
    {projects.map((project, index) => (
      <li
        key={index}
        onClick={() => setCurrentProject(index)}
        className={`cursor-pointer text-gray-300 rounded-lg px-2 hover:bg-slate-600
         transition duration-300 ${
          currentProject === index ? 'active-project' : ''
        }`}
      >
        {project.title}
      </li>
    ))}
  </ul>
</div>

        




        <div className='z-10 glass  w-full border-2 col-span-5'>
            <div className='w-full h-80'>
                <img src={projects[currentProject].img} alt={projects[currentProject].title} 
                className='w-full h-full object-cover rounded-lg mb-4'/>
            </div>


            <div className='p-6'>
              <p className='text-gray-200 my-4'>
                  {projects[currentProject].description}
              </p>
              <div className='flex space-x-4'>
                  <a href={projects[currentProject].links.site} className='px-4 py-2 bg-slate-600
                   text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>View Site</a>
                  <a href={projects[currentProject].links.github} className='px-4 py-2 bg-gray-800
                   text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300'>
                    <AiFillGithub/>
                    </a>
              </div>
            </div>
            
        </div>


    </div>
  )
}

export default Portfolio
