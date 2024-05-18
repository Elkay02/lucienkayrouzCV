import React from 'react'
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>But that's not all, I also have many</h5>
      <h2>Soft Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Languages</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>English</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>French</h4>
                <small className='text-light'>Native Speaker</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Arabic</h4>
                <small className='text-light'>Native Speaker</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Strengths</h3>
          <div className="experience_content-split">
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Data Structures</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Algorithm</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Problem-Solving</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>CI / CD</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Teamwork</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Leadership</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Communication</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Critical Thinking</h4>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience