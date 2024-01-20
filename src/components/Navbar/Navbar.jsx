import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import Resume from '/resume.pdf';

function Navbar() {

    const [openMenu,setOpenMenu] = useState(false);

    const toggleMenu = ()=>{
        setOpenMenu(!openMenu);
    }

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

    <nav className='nav-wrapper'>
        <div className="nav-content">
            <img src="/logo.png" alt="VG" className="logo" />

            <ul>
                <li>
                    <a href='https://github.com/evilmyth01' target='_blank' className='menu-item'>Github</a>
                </li>
                <li>
                    <a href='http://www.linkedin.com/in/vishal-goswami-527453279' target='_blank' className='menu-item'>LinkedIn</a>
                </li>
                <li>
                    <a className='menu-item'>Work Experience</a>
                </li>
                <li>
                    <a className='menu-item'>Contact Me</a>
                </li>

                <button className='contact-btn' onClick={()=>{}}>
                    <a href={Resume} download="resume">Resume</a>
                </button>

            </ul>


            <button className="menu-btn" onClick={toggleMenu}>
                <span class={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}>
                    {openMenu ? "close" : "menu"}
                </span>
            </button>


        </div>
    </nav>
    </>
  )
}

export default Navbar