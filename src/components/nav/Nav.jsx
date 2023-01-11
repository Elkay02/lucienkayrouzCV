import React, { useState } from 'react'
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail, BiStats } from "react-icons/bi"
import {FaGraduationCap} from "react-icons/fa"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#top")
  return (
    <nav>
      <a href="#top" onClick={() => setActiveNav("#top")} className={activeNav === "#top" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaGraduationCap/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><BiStats/></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><BiBook/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav