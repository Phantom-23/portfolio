import React, { useState } from 'react';

import {Link} from 'react-scroll';
import {Link as Jump} from 'react-router-dom';
import Logo from '../../Assests/Logo.png';
import { CiChat1 } from "react-icons/ci";
import './Navbar.css';
import { TbMenuDeep } from "react-icons/tb";
import  'react-bootstrap';


const Navbar = () => {
 console.log(Logo);
 const [showMenu,setMenu]=useState(false);
 const [navcode,setcode]=useState(false);
 const [Resume,viewResume]=useState(false);

  return (
    <nav className='navbar'>

    <Jump to="/"><img src={Logo} alt="beauty" className='logo'/></Jump>
    

        <div className='desktopMenu' style={{display:navcode || Resume?'none':''}}>
            
           
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className='destopMenuListItem'>
            About</Link>
             
            {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100}
            on onClick={()=>setResume(!showResume)} duration={500}className='destopMenuListItem'>Resume
            <div className='resumeDisplayer'>ress</div>

            </Link> */}

          
            
            <Jump className='destopMenuListItem' to="/resume" onClick={()=>viewResume(!Resume)} >Resume</Jump>
            

            <Jump className='destopMenuListItem' to="/code" onClick={()=>setcode(!navcode)}>Coding</Jump>

            <Jump className='destopMenuListItem' to="/projects">Projects</Jump>
            


            <button className='desktopMenuBtn' onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
            <span className='desktopMenuImg'><CiChat1/></span>
                Contact Me
            </button>
        </div>


          {/* back to home link */}

          {/* {Resume && <Jump to="/" className='backToHome' onClick={()=>viewResume(!Resume)} >
          Back To Home
          <div className='backToHomeImg'><RiArrowGoBackFill /></div>
          </Jump>}

        {navcode && <Jump to="/" className='backToHome' onClick={()=>setcode(!navcode)} >
          Back To Home
          <div className='backToHomeImg'><RiArrowGoBackFill /></div>
          </Jump>} */}


        {/* mobilemenu */}
        <span className='mobMenu'  onClick={()=>setMenu(!showMenu)}><TbMenuDeep size={56} /></span>
        <div className='navMenu' style={{display : showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className='ListItem' >About</Link>
            {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100}
            on onClick={()=>setResume(!showResume)} duration={500}className='ListItem'>Resume</Link>
                    {showResume && 
            <div className='resumeDisplayersmall' >
              <Link className='resumeDisplayerListsmall'>
                Download Resume
              </Link> */}
              <Jump className='ListItem' to="/resume" >
               Resume
              </Jump>

            {/* </div>
} */}
            <Jump className='ListItem' to="/code" >
               Coding
              </Jump>
              <Jump className='ListItem' to="/projects" >
               Projects
              </Jump>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}className='ListItem'>contact me</Link>


        </div>

        {/* <NavDropdown eventKey={3} title="Dropdown" className='desktopMenuListItem'>
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown> */}
    </nav>
  )
}

export default Navbar