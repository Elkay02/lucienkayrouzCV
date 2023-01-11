import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/lucienkayrouz/" rel="noopener"><BsLinkedin/></a>
      <a href="https://github.com/Elkay02" rel="noopener"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials