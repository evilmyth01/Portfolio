import React from 'react'
import './MobileNav.css'
import Resume from '/resume.pdf';

function MobileNav({isOpen,toggleMenu}) {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="mobile-menu-container">
            <img src="../assets/menu-icon-19338.jpg" alt="MMC" className='logo' />
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

        </div>

    </div>
    </>
  )
}

export default MobileNav