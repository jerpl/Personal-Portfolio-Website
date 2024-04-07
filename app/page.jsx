'use client'

import React from 'react'
import Link from 'next/link'


const Home = () => {


  return (
    <div className=' main home-page'>
      <div className="text-box">
        <h1>
          Hello,</h1>
        <h2 className='padd-bottom'>
          my name is Jeremy.
        </h2>
        <h4 className='padd-bottom'>
          I am a practicality-oriented Full-Stack developer with a passion for the world of design, and the ways in which we can utilize technology to improve our lives.
        </h4>
        
        <div className='aboutBtn'>
          <div className='title-box'>
            <Link href="/about" className='front'>
              <h3 className='center'>Learn More...</h3>
            </Link>
            <div className='button-decore'></div>
            <div className='button-decore2'></div>
          </div>
        </div>
      </div>
      <div className="home-image">
        <img src="assets/images/profileSquare.jpg" alt="Profile Picture"></img>
        <div className="home-image-decore"></div>
        <div className='image-decore2'></div>
      </div>
    </div>
  )
}

export default Home
