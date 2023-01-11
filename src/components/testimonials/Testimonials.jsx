import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Name 1",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit enim ab laboriosam fugit aliquid et, corrupti blanditiis aliquam reiciendis consectetur iure consequatur exercitationem distinctio deleniti doloribus magni? Itaque, sequi?"
  },
  {
    avatar: AVTR2,
    name: "Name 2",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit enim ab laboriosam fugit aliquid et, corrupti blanditiis aliquam reiciendis consectetur iure consequatur exercitationem distinctio deleniti doloribus magni? Itaque, sequi?"
  },
  {
    avatar: AVTR3,
    name: "Name 3",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit enim ab laboriosam fugit aliquid et, corrupti blanditiis aliquam reiciendis consectetur iure consequatur exercitationem distinctio deleniti doloribus magni? Itaque, sequi?"
  },
  {
    avatar: AVTR4,
    name: "Name 4",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit enim ab laboriosam fugit aliquid et, corrupti blanditiis aliquam reiciendis consectetur iure consequatur exercitationem distinctio deleniti doloribus magni? Itaque, sequi?"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
        >
{
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">
                {review}
              </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials

/*
import React from 'react'
import "./portfolio.css"

import {BsBricks} from "react-icons/bs"
import {FaGamepad} from "react-icons/fa"
import {MdOutlineFastfood} from "react-icons/md"
import {HiOutlineBookOpen} from "react-icons/hi"
import {ImStatsDots, ImStatsBars} from "react-icons/im"

import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    icon: <FaGamepad/>,
    description: "Mobile Party Game",
    TnT: "Flutter, GraphQL, Fastify, Dart",
    activities: "Rubble is a fast-paced, multiplayer party game that can be played on a mobile device. Players are tasked with creating structures using virtual blocks, and must work together to build a stable structure before time runs out. Once the structure is complete, players must then try to knock it down by tapping on the screen to remove blocks. The player who removes the final block and causes the structure to collapse wins the round. Rubble is great for social gatherings and is perfect for people of all ages. It's easy to learn and provides endless entertainment.",
    title: "Rubble",
    github: "https://github.com/Jadsy/Rubble_MVP",
  },
  {
    id: 2,
    icon: <BsBricks/>,
    description: "NFT advertisement website",
    TnT: "React, JavaScript, CSS, HTML ",
    activities: "NFTbriks is a website that promotes the use of non-fungible tokens (NFTs) by selling NFTs in the form of virtual bricks. These bricks represent a spot on a virtual wall where the owner of the brick can post their own NFT for promotion. The wall serves as a showcase for NFTs, allowing users to browse and discover new and unique digital assets. By purchasing a brick, users can not only display their own NFTs on the wall, but also have a piece of the wall itself as an NFT. NFTbriks is a fun and innovative way for NFT enthusiasts to showcase and discover new digital assets.",
    title: "NFTbriks",
    github: "https://github.com/NFTbriks/nftbriks",
  },
  {
    id: 3,
    icon: <MdOutlineFastfood/>,
    description: "Mobile virtual cookbook",
    TnT: "Android Studio, Django, Java, Python, Figma, Volley",
    activities: "CookingHub is a mobile app that helps you organize and sore all of your favorite recipes in one place. With CookingHub, you can easily browse and search through your recipes by category or type of dish. You can also create and save new recipes whenever you want. CookingHub makes it easy to plan and prepare meals. With CookingHub, you'll never lose track of your favorite recipes again.",
    title: "CookingHub",
    github: "https://github.com/Elkay02",
  },
  {
    id: 4,
    icon: <HiOutlineBookOpen/>,
    description: "AUB Course Dictionary",
    TnT: "Java, Eclipse IDE",
    activities: "CourSeera is a Java GUI application designed to help students at the American University of Beirut browse and search through the entire course catalogue for a specific semester. With CourSeera, students can easily view schedules, locations, and teachers for all available classes. CourSeera makes it easy for students to plan their schedules and stay organized, and it's a convenient way to access all of the information about available courses in one place.",
    title: "CourSeera",
    github: "https://github.com/Elkay02",
  },
  {
    id: 5,
    icon: <ImStatsDots/>,
    description: "Linear Regression Analysis",
    TnT: "Python, Jupyter Hub",
    activities: "For this project, a Linear Regression Analysis was conducted to examine the relationship between Education rate and Mortality rate in each US state. Data was collected and analyzed to determine if there was a correlation between the two variables. The results showed that there was a significant negative relationship between Education rate and Mortality rate, meaning that states with higher Education rates tend to have lower Mortality rates. Further analysis was performed to determine the strength and significance of this relationship.",
    title: "Education/Mortality Study",
    github: "https://github.com/Elkay02",
  },
  {
    id: 6,
    icon: <ImStatsBars/>,
    description: "Annual Report Analysis",
    TnT: "Microsoft Office",
    activities: "The Annual Report Analysis examined the financial performance of Inditex, a multinational fashion group. A variety of financial statements and metrics were analyzed to evaluate the company's financial health and performance over the past year. The analysis included a review of Inditex's revenue, expenses, profits, and asset management, as well as a comparison to industry benchmarks and competitors. The results of the analysis were used to identify trends and areas of strength and weakness within the company, and to make recommendations for future financial planning and strategy.",
    title: "Inditex Report",
    github: "https://github.com/Elkay02",
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>And finaly, this is my</h5>
      <h2>Professional Experience</h2>

      <Swiper className="container portfolio_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({id, icon, title, description, TnT, activities, github, demo}) => {
            return(
              <SwiperSlide key={id} className="portfolio_item">
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
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio
*/