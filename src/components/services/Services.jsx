import React from 'react'
import "./services.css"
import { BiCheck } from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>Moving onto my</h5>
      <h2>Hard Skills</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Programming Languages</h3>
          </div>
          <ul className="service_list-split">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Typescript</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Python</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Dart</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Java</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>C++</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>CSS</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Tools & Technologies</h3>
          </div>
          <ul className="service_list-split">
            <li>
              <BiCheck className='service_list-icon' />
              <p>React</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Express</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Next.js</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Node.js</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Flutter</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>KOA</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Angular</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Fastify</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Other</h3>
          </div>
          <ul className="service_list-split">
            <li>
              <BiCheck className='service_list-icon' />
              <p>PostgreSQL</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>MySQL</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>MongoDB</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Redux</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Git</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>GraphQL</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Socket.io</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Jest</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services