import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import PastWork from './components/PastWork'
import Contact from './components/Contact'

const About = () => {
  return (
    <>
    <div className='app'>
    <Sidebar />
    <div>
      <Navbar />
      <main style={{flexDirection: "column", alignItems: "center"}}>
        <PastWork />
        <Contact />
      </main>
    </div>
    </div>
    </>
  )
}

export default About


