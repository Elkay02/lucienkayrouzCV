import React from 'react'
import "./header.css"
import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'
import { BsArrowRight } from "react-icons/bs"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Lucien Kayrouz</h1>
        <h5 className="text_light">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">

          <h3>About Me</h3>
          <p>
            Passionate full-stack developer with extensive knowledge of cutting-edge technologies such as
            Next.js, React, TypeScript, JavaScript, Redux, Express, and MongoDB.
            Proven ability to implement user-friendly applications both independently and as part of a team.
            Continuously striving to improve my skills and learn new technologies.
          </p>

        </div>
        <a href="#contact" className='scroll_down'><BsArrowRight /> </a>

      </div>
    </header>
  )
}

export default Header