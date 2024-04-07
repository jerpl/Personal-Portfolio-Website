import React from 'react'
import Projectbox from '@components/projectbox';
import Link from 'next/link';

import { BsStack } from "react-icons/bs";

const portfolio = () => {
  return (
    <div className="main main-boxes">
      <div className="page-head ">
        <div className='title-box'>
            <h1 className='title'>Projects.</h1>
            <div className='title-decore'></div>
            <div className='title-decore2'></div>
          </div>
        <h3 className=' hide-small' >Click any box to view the project in Github</h3>
      </div>

      <div className='boxes-container'>
        <div className='card'>
          <Link href="https://github.com/jerpl/SmartSets_AI_Study_Tool" target="_blank" title="Click to View This Project in GitHub">
            <Projectbox>
              <div className='aProject'>
                <div className="project-title">
                  <h2 className='page-subhead'>SmartSets AI Study Tool</h2>
                </div>
                <div className="tech-container">
                  <div className="tech-icon"><BsStack /></div>
                  <h2 className='project-tech'>Python / SQLite </h2>
                </div>
                
                <h3 className='project-desc'>SmartSets is a simple AI study tool that I created in my free time while I was completing my degree in computer science. The purpose 
                is to supercharge your productivity at studying flashcards. Using natural language processing and a neural network to compare your answers to questions with
                the correct answer, smart sets is able to generate a numerical score to represent your competence in every question you answer. Then, It generates custom study sessions
                that take into consideration your competence at each question, forcing you to spend more time on the concepts you struggle with the most.
                </h3>
                
                </div>
            </Projectbox>         
          </Link>
        </div>
        
        
        <div className='card'>
          <Link href="https://github.com/jerpl/Retail-Store-Project" target="_blank" title="Click to View This Project in GitHub">
            <Projectbox>
              <div className='aProject'>
                <div className="project-title">
                  <h2 className='page-subhead'>Retail Store Project</h2>
                </div>
                <div className="tech-container">
                  <div className="tech-icon"><BsStack /></div>
                  <h2 className='project-tech'>JavaScript / NodeJS / MongoDB / Mongoose / ExpressJS / ElasticLunr / HTML / CSS / Pug  </h2>
                </div>
                
                <h3 className='project-desc'>This is a backend project focusing on the major technical components of online retail stores such as Search engine Optimization (SEO), 
                web crawling, and recommender systems. The project consists of two separate components; a web crawler and a recommender system. The web crawler provides the basis 
                of a search engine for products in the store database, displaying the most relevant pages related to a keyword. The recommender system implements
                  efficient algorithms for predicting user preferences based on their historical data.
                </h3>
                
                </div>
            </Projectbox>         
          </Link>
        </div>
        

        <div className='card'>
          <Link href="https://github.com/jerpl/TENS-Therapy-Device" target="_blank" title="Click to View This Project in GitHub">
            <Projectbox>
              <div className='aProject'>
                <div className="project-title">
                  <h2 className='page-subhead'>Full-Stack TENS Medical Therapy Device</h2>
                </div>
                <div className="tech-container">
                  <div className="tech-icon"><BsStack /></div>
                  <h2 className='project-tech'>C++ / QT / SQLite / QT Widgets </h2>
                </div>
                
                <h3 className='project-desc'>Designed and implemented a Full-Stack simulation of the Oasis Pro Transcutaneous Electric Nerve Stimulation device for pain relief and
                recovery. The complete design process was followed including use cases, sequence and UML diagrams, interface design, and backend implementation. The interactive UX 
                was built in QT C++. This was a remote team project I completed during my degree, I included it because of the team management skills I learned from this project. Some
                of the group members were challenging to work with and through delegation and conflict resolution, we were able to produce a great final product.
                </h3>
                
                </div>
            </Projectbox>         
          </Link>
        </div>
        

        <div className='card'>
          <Link href="https://github.com/jerpl/Connect-Four-Game" target="_blank" title="Click to View This Project in GitHub">
            <Projectbox>
              <div className='aProject'>
                <div className="project-title">
                  <h2 className='page-subhead'>Connect Four Multiplayer Game</h2>
                </div>
                <div className="tech-container">
                  <div className="tech-icon"><BsStack /></div>
                  <h2 className='project-tech'>Javascript / NodeJS / MongoDB / Mongoose / HTML / CSS / Bcrypt / jsonwebtoken</h2>
                </div>
                
                <h3 className='project-desc'>This was My first Full-Stack project, an online rendition of the classic game “Connect Four”. There are several improvements to the base
                game including user onboarding, authentication, and password encryption such that you can keep track of your games and add friends. There is also an in-game chatbox 
                to talk with your opponent while you play. This was my first experience with data encryption and multiplayer functionality across more than one device. This project 
                taught me that completing projects will improve your skills faster than just taking classes. 
                </h3>
                
                </div>
            </Projectbox>         
          </Link>
        </div>
        

        <div className='card'>
          <Link href="https://github.com/jerpl/Elevator-Control-System" target="_blank" title="Click to View This Project in GitHub">
            <Projectbox>
              <div className='aProject'>
                <div className="project-title">
                  <h2 className='page-subhead'>Full-Stack Elevator Control System</h2>
                </div>
                <div className="tech-container">
                  <div className="tech-icon"><BsStack /></div>
                  <h2 className='project-tech'>C++ / QT / SQLite / QT Widgets </h2>
                </div>
                
                <h3 className='project-desc'>This project simulates an apartment building's control system, featuring an elevator control system with multiple pathfinding algorithms
                to optimize route prioritization and decrease wait time. Alongside this, I integrated security systems to handle emergencies
                  such as fires, power outages, and threats to elevator passengers, with integrated emergency handling protocols to overwrite the standard pathfinding algorithms. 
                  I worked through the complete design process, including use cases, sequence and UML class diagrams, and an interface to represent interaction from the inside and 
                  outside of the elevators. 
                </h3>
                
                </div>
            </Projectbox>         
          </Link>
        </div>
        
        

        <div className='card'>
          <Link href="https://github.com/jerpl/Personal-Portfolio-Website" target="_blank" title="Click to View This Project in GitHub">
            <Projectbox>
              <div className='aProject'>
                <div className="project-title">
                  <h2 className='page-subhead'>Personal Portfolio Website</h2>
                </div>
                <div className="tech-container">
                  <div className="tech-icon"><BsStack /></div>
                  <h2 className='project-tech'>Javascript / ReactJS / NextJS / HTML / CSS / TailwindCSS </h2>
                </div>
                
                <h3 className='project-desc'>
                The website you're looking at right now! I built this site to share a portfolio of some projects and personal information, in hopes of giving you, the reader, a 
                better sense of who I am as a person. It's great to share what I've done, but in this age of online interviews and remote work, It is very difficult to be seen as a human,
                and I'm hoping this site helps in that regard. I picked up the NextJS React framework and Tailwind CSS for the first time with this project to expand my bag of skills and 
                because they seem fun and cohesive.

                </h3>
                
                </div>
            </Projectbox>         
          </Link>
        </div>
        
      </div>
      
    </div>
  )
}

export default portfolio;
