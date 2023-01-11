import React from 'react'
import "./header.css"
import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'
import {BsArrowRight} from "react-icons/bs"

const Header = () => {
  return (
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Lucien Kayrouz</h1>
          <h5 className="text_light">Front-End Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
        
          <h3>About Me</h3>
          <p>Soon-to-be computer science graduate seeking a position as a mobile or web frontend developer. Strong skills in HTML, CSS, and JavaScript, as well as experience with React and Flutter frameworks. Proven ability to design and implement user-friendly interfaces and websites. Passionate about creating engaging and intuitive user experiences on both mobile and web platforms. Seeking a dynamic and innovative company where I can apply my skills and continue to grow as a developer.</p>
        
        </div>
          <a href="#contact" className='scroll_down'><BsArrowRight/> </a>
        
        </div>
      </header>
    )
}

export default Header