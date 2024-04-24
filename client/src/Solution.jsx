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
      <main style={{flexDirection: "column", alignItems: "center", position: "relative"}}>
        <Search />
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Major_soil_types_in_India.jpg" alt="map" style={{position: "absolute", top: "20px", right: "100px", height: "330px"}} />
      </main>
    </div>
    </div>
    </>
  )
}

export default Solution