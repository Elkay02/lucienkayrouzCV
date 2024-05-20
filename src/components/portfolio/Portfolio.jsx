import React from 'react'
import "./portfolio.css"

import { BsBricks } from "react-icons/bs"
import { FaGamepad } from "react-icons/fa"
import { MdOutlineFastfood } from "react-icons/md"
import { HiOutlineBookOpen } from "react-icons/hi"
import { CgWebsite } from "react-icons/cg"
import { FaDumbbell } from "react-icons/fa";
import { FaHandshake, FaKeyboard } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaKeyboard />,
    description: "Typing Learning platform",
    TnT: "Typescript, React, Redux, Express, Socket.io, PostgreSQL",
    activities: "Typing Titans is an engaging learning platform designed to help users improve their typing skills through competitive races, built with a modern tech stack including TypeScript, React, Redux, Express, Socket.io, and PostgreSQL, the project involved integrating various APIs to retrieve and display essential data. Real-time user connectivity was enabled using Socket.io, supporting live competitions and chat functionalities. Comprehensive logic was developed to facilitate competitive typing races between users, making Typing Titans an interactive and effective tool for enhancing typing speed and accuracy.",
    title: "Typing Titans",
    github: "https://github.com/Elkay02/Typing-Titans",
    demo: "https://typing-titans.vercel.app/",
  },
  {
    id: 2,
    icon: <FaHandshake />,
    description: " Services Trading Platform",
    TnT: "TypeScript, Next.js, MongoDB",
    activities: "TalenTrade is an innovative online platform, that enables users to exchange services for time. Developed using TypeScript, Next.js, and MongoDB, the project involved creating a full-stack application adhering to best practices. The platform facilitates seamless service exchanges, enhancing community engagement. MongoDB schemas were meticulously designed and optimized to ensure efficient data storage and retrieval, providing a smooth and responsive user experience. TalenTrade stands out as a reliable and efficient service trading solution, empowering users to trade their skills and time effectively.",
    title: "TalenTrade",
    github: "https://github.com/Elkay02/TalenTrade",
    demo: "https://youtu.be/_hv5mtX6fVk"
  },
  {
    id: 3,
    icon: <FaGamepad />,
    description: "Mobile Party Game",
    TnT: "Flutter, GraphQL, Fastify, Dart",
    activities: "Rubble is an exciting mobile party game. With a selection of five diverse and engaging games, players can join virtual parties and challenge each other in real-time gameplay. This innovative app redefines social interaction by offering a platform where players can seamlessly connect, choose their favorite game, and enjoy hours of fun together. Whether it's testing quick reflexes or engaging in strategic gameplay, Rubble creates a vibrant, interactive community, where friends and strangers alike can bond over shared gaming adventures, making every party a memorable experience.",
    title: "Rubble",
    github: "https://github.com/Jadsy/Rubble_MVP",
  },
  {
    id: 4,
    icon: <FaDumbbell />,
    description: "Personal Workout Tracker",
    TnT: "Typescript, Javascript, React, React Testing Library, Express, Jest, MongoDB ",
    activities: "Workout Hub is a dynamic web application, designed to help users efficiently track their workouts. Utilizing a robust tech stack including TypeScript, JavaScript, React, Express, and MongoDB, the project involved refactoring an existing JavaScript codebase to TypeScript, significantly enhancing performance and maintainability. Comprehensive unit testing was implemented on both the server and client sides using Jest and React Testing Library to ensure code reliability. New features were added to elevate user experience and app usability, making Workout Hub a seamless and user-friendly tool for fitness enthusiasts.",
    title: "Workout Hub",
    github: "https://github.com/Elkay02/Workout-Tracker-App",
  },
  {
    id: 5,
    icon: <CgWebsite />,
    description: "Volunteering Events Website",
    TnT: "React, NodeJS, MySQL, Figma, JavaScript, CSS, HTML",
    activities: "Kolona Lel Watan is a collaborative project that serves as a vital bridge between NGOs and volunteers. It allows NGOs to easily post upcoming events, and prospective volunteers can browse these events and reserve their spots. This initiative fosters community engagement by making it simple for individuals to find and participate in meaningful volunteer opportunities, contributing to the greater good.",
    title: "Kolona Lel Watan",
    github: "https://github.com/Elkay02/Kolona-Lel-Watan",
  },
  {
    id: 6,
    icon: <BsBricks />,
    description: "NFT advertisement website",
    TnT: "React, JavaScript, CSS, HTML ",
    activities: "NFTbriks is a website that promotes the use of non-fungible tokens (NFTs) by selling NFTs in the form of virtual bricks. These bricks represent a spot on a virtual wall where the owner of the brick can post their own NFT for promotion. The wall serves as a showcase for NFTs, allowing users to browse and discover new and unique digital assets. By purchasing a brick, users can not only display their own NFTs on the wall, but also have a piece of the wall itself as an NFT. NFTbriks is a fun and innovative way for NFT enthusiasts to showcase and discover new digital assets.",
    title: "NFTbriks",
    github: "https://github.com/NFTbriks/nftbriks",
  },
  {
    id: 7,
    icon: <MdOutlineFastfood />,
    description: "Mobile virtual cookbook",
    TnT: "Android Studio, Django, Java, Python, Figma, Volley",
    activities: "CookingHub is a mobile app that helps you organize and sore all of your favorite recipes in one place. With CookingHub, you can easily browse and search through your recipes by category or type of dish. You can also create and save new recipes whenever you want. CookingHub makes it easy to plan and prepare meals. With CookingHub, you'll never lose track of your favorite recipes again.",
    title: "CookingHub",
    github: "https://github.com/Elkay02/CookingHubFrontend",
  },
  {
    id: 8,
    icon: <HiOutlineBookOpen />,
    description: "AUB Course Dictionary",
    TnT: "Java, Eclipse IDE",
    activities: "CourSeera is a Java GUI application designed to help students at the American University of Beirut browse and search through the entire course catalogue for a specific semester. With CourSeera, students can easily view schedules, locations, and teachers for all available classes. CourSeera makes it easy for students to plan their schedules and stay organized, and it's a convenient way to access all of the information about available courses in one place.",
    title: "CourSeera",
    github: "https://github.com/Elkay02/CourSeera",
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>And finaly, this is my</h5>
      <h2>Professional Experience</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, icon, title, description, TnT, activities, github, demo }) => {
            return (
              <div key={id} className="portfolio_item">
                <div className="portfolio_item-icon">
                  {icon}
                </div>
                <h3>{title}</h3>
                <h4>{description}</h4>
                <small className="portfolio_tools">Tools & Technologies used: {TnT}</small>
                <small className="portfolio_description">Description: {activities}</small>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn btn-primary" rel="noopener" >GitHub</a>
                  {demo && <a href={demo} className="btn btn-secondary" rel="noopener" >Demo</a>}
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio