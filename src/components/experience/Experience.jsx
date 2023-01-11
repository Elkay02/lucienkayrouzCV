import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>But that's not all, I also have extracuricular</h5>
      <h2>Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Languages</h3>
          <div className="experience_content">
          <article className='experience_details'> 
              <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>English</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>French</h4>
                <small className='text-light'>Native Speaker</small>
              </div>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>Arabic</h4>
                <small className='text-light'>Native Speaker</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Sports & Competitions</h3>
          <div className="experience_content">
          <article className='experience_details'> 
              <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>Lebanese alpine ski champion in 2014 and 2018; part of the Cedars Racing Club.</h4>
              </div>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>Represented Lebanon in many FIS competitions worldwide since 2014 to present.</h4>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience