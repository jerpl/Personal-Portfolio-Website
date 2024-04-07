import React from 'react'
import '@styles/globals.css';
import Sidebar from '@components/sidebar';

export const metadata = {
  title: "Jeremy Pierce-Lord Web-Resume",
  description: "A brief introduction to who I am and some of my projects",
  };

const RootLayout = ({children}) => {
  

  return (
    <html>
      <head>
      </head>
      <body>
        <main className='app'>  
          <Sidebar />    
          {children}
        </main>
          
      </body>
    </html>
  )
}

export default RootLayout