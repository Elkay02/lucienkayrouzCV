import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>Moving onto my</h5>
      <h2>Skills</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Programming Languages</h3>
          </div>
          <ul className="service_list-split">
          <li>
              <BiCheck className='service_list-icon'/>
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Kotlin</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Python</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Dart</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Java</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>C++</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Swift</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>SQL</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Tools & Technologies</h3>
          </div>
          <ul className="service_list-split">
          <li>
              <BiCheck className='service_list-icon'/>
              <p>React</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Angular</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>React Native</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Django</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Flutter</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>GraphQL</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Android</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Fastify</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>IOS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Tableau</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Other</h3>
          </div>
          <ul className="service_list">
          <li>
              <BiCheck className='service_list-icon'/>
              <p>Highly proficient in Microsoft Office Suite</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>UI/UX design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Project management</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Problem solving</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Critical thinking</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services