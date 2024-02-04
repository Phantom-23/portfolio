import React from 'react'
import './Intro.css';
import { Link } from 'react-scroll';
import BGG from '../../Assests/BGG.jpg';
import { IoBag } from "react-icons/io5";

import Skills from '../Skills/Skills.js';
import Contact from '../Contact/Contact.js';
const Intro = () => {
  return (
    <section id="intro">
     
      <div className='introContent'>
        <span className="hello">Hello</span>
        <span className='introText'>I'm <span className="introName">Rahul</span><br/>competitive programer</span>
        <p className="intropara">I'm skilled at coding </p>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hireBtn'><span className='btnImg'><IoBag/></span>HIRE ME</button></Link>
      </div>

      <img src={ BGG } alt="beauty" className='bg'/>
      
    </section>
  )
}

export default Intro