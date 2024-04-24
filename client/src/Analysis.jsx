import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Graph from './components/Graph'
import Greenery from './components/Greenery'

const Analysis = () => {
  const [city, setcity] = useState('Ahmedabad')
  useEffect(() => {
    const temp = localStorage.getItem('city');
    setcity(temp);
  }, [])
  
  return (
    <>
    <div className='app'>
    <Sidebar />
    <div>
      <Navbar />
      <main>
        <div>
       
        <Graph city={city} title={"Weather Graph for"} time={"last"} />
        <Graph city={city} title={"Weather Graph for next 10 days of"} time={"next"} />
        </div>
        <Greenery />
      </main>
    </div>
    </div>
    </>
  )
}

export default Analysis