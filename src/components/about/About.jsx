import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='.container.about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>projects</h5>
              <small>80+ completed</small>
            </article>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero dolorem dolor enim, optio similique doloremque harum obcaecati debitis impedit eos ratione repellendus nihil maiores eaque mollitia cupiditate atque corrupti.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About