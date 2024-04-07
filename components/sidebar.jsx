"use client"

import React from 'react'
import Link from "next/link";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { GoHomeFill } from "react-icons/go";
import { TiUser } from "react-icons/ti";
import {IoIosPaper} from "react-icons/io";
import { BsStack } from "react-icons/bs";
import {MdFolderShared} from "react-icons/md";

import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";

 

const Sidebar = () => {

    const [sidebarCollapse, setSidebarCollapse] = useState(false);
    const location = usePathname();

  return (
    <div className={`sidebar-container ${sidebarCollapse ? "collapsed" : ""}`}>

        <div className={`profile-container ${sidebarCollapse ? "collapsed" : ""}`}>
            <div className="profile-pic-container">
                <img src="assets/images/profileSquare.jpg" className='profile-pic'></img>
                
            </div>
            

            <div className={`hide ${sidebarCollapse ? "collapsed" : ""}`}>
                <div className="animation" onClick={e => setSidebarCollapse(!sidebarCollapse)}></div>
                <HiMenuAlt3 size={32} color='#2D292A' className='openIcon'/>
                <HiMenuAlt2 size={32} color='#2D292A' className='closedIcon'/>
            </div>
        </div>

        <div className={`menu-container ${sidebarCollapse ? "collapsed" : ""}`}>
            <ul className='menu-items'>
                <li className={location === "/" ? "active" : ""}>
                    <Link href="/" className='navLink'>
                        <div className="navIcon"><GoHomeFill className='ico' /></div>
                        <h3 className='text'>Home</h3>
                    </Link>  
                </li>
                <li className={location === "/about" ? "active" : ""}>
                    <Link href="/about" className='navLink'>
                        <div className="navIcon"><TiUser className='ico'/></div>
                        <h3 className='text'>About</h3>
                    </Link>
                </li>
                <li className={location === "/portfolio" ? "active" : ""}>
                    <Link href="/portfolio" className='navLink'>
                        <div className="navIcon" color='white' ><MdFolderShared className='ico'/></div>
                        <h3 className='text'>Portfolio</h3>
                    </Link>
                </li> 
                <li className={location === "/resume" ? "active" : ""}>
                    <a className='navLink' href="assets/files/resume.pdf" download={"assets/files/resume.pdf"} target="_blank"> 
                        <div className="navIcon"><IoIosPaper className='ico'/></div>
                        <h3 className='text'>Resume</h3>
                    </a>
                     
                </li>
            </ul>        
        </div>

        <div className={`contact-container ${sidebarCollapse ? "collapsed" : ""}`}>
            <div className="name">
                    <h2>Jeremy P.L</h2>
                </div>
                <div className="email">
                    <h4>pljeremy01@gmail.com</h4>
                </div>
                <div className={`links-container ${sidebarCollapse ? "collapsed" : ""}`}>
                    <Link href="https://github.com/jerpl?tab=repositories" target="_blank" title="Go to my github">
                        <div className="git"><FaGithub color='#2D292A' size={18}/></div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/jeremy-pierce-lord-122b9822b/" target="_blank" title="Go to my linkedin">
                        <div className="in"><FaLinkedin color='#2D292A' size={18}/></div>
                    </Link>
            </div>
        </div>
    </div>
    
  )
}

export default Sidebar

/*
<Link href="/resume" className='navLink'>
                        <div className="navIcon"><IoIosPaper /></div>
                        <h3 className='text'>Resume</h3>
                    </Link>
*/
