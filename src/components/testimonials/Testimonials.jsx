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