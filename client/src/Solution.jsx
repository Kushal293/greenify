import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Search from './components/Search'

import Suggestions from './components/Suggestions'
import Greenery from './components/Greenery'
const Solution = () => {
  return (
    <>
    <div className='app'>
    <Sidebar />
    <div>
      <Navbar />
      <main style={{flexDirection: "column", alignItems: "center"}}>
        <Search />
        <Greenery show={"show"} />
      </main>
    </div>
    </div>
    </>
  )
}

export default Solution