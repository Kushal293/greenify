import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const Contact = () => {
  return (
    <>
    <div className='app'>
    <Sidebar />
    <div>
      <Navbar />
      <main style={{flexDirection: "column", alignItems: "center"}}>
        
      </main>
    </div>
    </div>
    </>
  )
}

export default Contact