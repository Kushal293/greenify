import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import InfoCard from './components/InfoCard'


function App() {
  const [data, setData] = useState({});
  const [city, setcity] = useState('Ahmedabad')
  const getData = async (city) => {
    try {
        const res = await fetch(`http://127.0.0.1:5000/weather/${city}`);
        const json = await res.json();
        // setcity(ci)
        console.log(json);
        setData(json);
    } catch (error) {
        console.log(error);
    }
   
}
const handlecity=(city)=>{
  localStorage.setItem('city',city);
  setcity(city)
}
  useEffect(() => {
    
    getData(city);
}, [city]);

  const CityList = () => {
    return (
      <div className='citylist'>
          <h1>Select City:</h1>
          <div className='cities'>
              <div className='city' onClick={() => handlecity("Ahmedabad")}>
                  <p>Ahmedabad</p>
                  <span>5 min ago</span>
              </div>
              <div className='city' onClick={()=> handlecity('Baroda')}>
                  <p>Baroda</p>
                  <span>5 min ago</span>
              </div>
              <div className='city' onClick={() => handlecity("London")}>
                  <p>London</p>
                  <span>5 min ago</span>
              </div>
          </div>
      </div>
    )
  }
  return (
    <>
    <div className='app'>
    <Sidebar />
    <div>
      <Navbar />
      <main>
        <InfoCard  data={data}/>
      <CityList />
      </main>
    </div>
    </div>
    </>
  )
}

export default App
