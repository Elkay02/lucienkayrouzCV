import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>ELKAY</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Education</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_copyright">
        <small>&copy; Lucien Kayrouz. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer