import React from 'react'
import "./about.css"
import AUB from "../../assets/aub.png"
import AUP from "../../assets/aup.jpg"
import CNDJ from "../../assets/cndj.jpg"


const data = [
  {
    logo: AUB,
    name: "American University of Beirut",
    diploma: "Bachelor in Computer Science, with Minor in Business Administration"
  },
  {
    logo: AUP,
    name: "American University of Paris",
    diploma: "Full semester exchange program for BSc"
  },
  {
    logo: CNDJ,
    name: "College Notre Dame de Jamhour",
    diploma: "French and Lebanese baccalaureate, Mathematics emphasis"
  },
]

const About = () => {
  return (
    <section id='about'>
      <h5>Enough about me. Let's talk about my</h5>
      <h2>Education</h2>
      <div className="container education_container">
{      data.map(({logo, name, diploma}, index) => {
            return(
              <div key={index} className="education_card">
              <div className="education_logo">
                <img src={logo} alt="Logo One" />
              </div>
              <div></div>
              <div>
              <h3 className="education_name">{name}</h3>
              <small className="education_diploma">
                {diploma}
              </small>
              </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default About