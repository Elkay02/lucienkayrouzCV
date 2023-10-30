import React from 'react'
import "./portfolio.css"

import {BsBricks} from "react-icons/bs"
import {FaGamepad} from "react-icons/fa"
import {MdOutlineFastfood} from "react-icons/md"
import {HiOutlineBookOpen} from "react-icons/hi"
import {ImStatsDots} from "react-icons/im"
import {CgWebsite} from "react-icons/cg"

const data = [
  {
    id: 1,
    icon: <FaGamepad/>,
    description: "Mobile Party Game",
    TnT: "Flutter, GraphQL, Fastify, Dart",
    activities: "Rubble is an exciting mobile party game. With a selection of five diverse and engaging games, players can join virtual parties and challenge each other in real-time gameplay. This innovative app redefines social interaction by offering a platform where players can seamlessly connect, choose their favorite game, and enjoy hours of fun together. Whether it's testing quick reflexes or engaging in strategic gameplay, Rubble creates a vibrant, interactive community, where friends and strangers alike can bond over shared gaming adventures, making every party a memorable experience.",
    title: "Rubble",
    github: "https://github.com/Jadsy/Rubble_MVP",
  },
  {
    id: 2,
    icon: <CgWebsite/>,
    description: "Volunteering Events Website",
    TnT: "React, NodeJS, MySQL, Figma, JavaScript, CSS, HTML",
    activities: "Kolona Lel Watan is a collaborative project that serves as a vital bridge between NGOs and volunteers. It allows NGOs to easily post upcoming events, and prospective volunteers can browse these events and reserve their spots. This initiative fosters community engagement by making it simple for individuals to find and participate in meaningful volunteer opportunities, contributing to the greater good.",
    title: "Kolona Lel Watan",
    github: "https://github.com/Elkay02/Kolona-Lel-Watan",
  },
  {
    id: 3,
    icon: <BsBricks/>,
    description: "NFT advertisement website",
    TnT: "React, JavaScript, CSS, HTML ",
    activities: "NFTbriks is a website that promotes the use of non-fungible tokens (NFTs) by selling NFTs in the form of virtual bricks. These bricks represent a spot on a virtual wall where the owner of the brick can post their own NFT for promotion. The wall serves as a showcase for NFTs, allowing users to browse and discover new and unique digital assets. By purchasing a brick, users can not only display their own NFTs on the wall, but also have a piece of the wall itself as an NFT. NFTbriks is a fun and innovative way for NFT enthusiasts to showcase and discover new digital assets.",
    title: "NFTbriks",
    github: "https://github.com/NFTbriks/nftbriks",
  },
  {
    id: 4,
    icon: <MdOutlineFastfood/>,
    description: "Mobile virtual cookbook",
    TnT: "Android Studio, Django, Java, Python, Figma, Volley",
    activities: "CookingHub is a mobile app that helps you organize and sore all of your favorite recipes in one place. With CookingHub, you can easily browse and search through your recipes by category or type of dish. You can also create and save new recipes whenever you want. CookingHub makes it easy to plan and prepare meals. With CookingHub, you'll never lose track of your favorite recipes again.",
    title: "CookingHub",
    github: "https://github.com/Elkay02/CookingHubFrontend",
  },
  {
    id: 5,
    icon: <HiOutlineBookOpen/>,
    description: "AUB Course Dictionary",
    TnT: "Java, Eclipse IDE",
    activities: "CourSeera is a Java GUI application designed to help students at the American University of Beirut browse and search through the entire course catalogue for a specific semester. With CourSeera, students can easily view schedules, locations, and teachers for all available classes. CourSeera makes it easy for students to plan their schedules and stay organized, and it's a convenient way to access all of the information about available courses in one place.",
    title: "CourSeera",
    github: "https://github.com/Elkay02/CourSeera",
  },
  {
    id: 6,
    icon: <ImStatsDots/>,
    description: "Linear Regression Analysis",
    TnT: "Python, Jupyter Hub",
    activities: "For this project, a Linear Regression Analysis was conducted to examine the relationship between Education rate and Mortality rate in each US state. Data was collected and analyzed to determine if there was a correlation between the two variables. The results showed that there was a significant negative relationship between Education rate and Mortality rate, meaning that states with higher Education rates tend to have lower Mortality rates. Further analysis was performed to determine the strength and significance of this relationship.",
    title: "Education/Mortality Study",
    github: "https://github.com/Elkay02/Education-Mortality-Study",
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>And finaly, this is my</h5>
      <h2>Professional Experience</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, icon, title, description, TnT, activities, github, demo}) => {
            return(
              <div key={id} className="portfolio_item">
                <div className="portfolio_item-icon">
                  {icon}
                </div>
                <h3>{title}</h3>
                <h4>{description}</h4>
                <small className="portfolio_description">Tools & Technologies used: {TnT}</small>
                <small className="portfolio_description">Description: {activities}</small>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn btn-primary" rel="noopener" >GitHub</a>
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