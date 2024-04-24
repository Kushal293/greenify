import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import InfoCard from './components/InfoCard'
import LatestNews from './components/LatestNews'


function App() {
  const [data, setData] = useState({});
  const [city, setcity] = useState('Ahmedabad')
 const [newsData, setnewsData] = useState({})
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
const getNewsdata=async()=>{
  const url = 'https://newsdata.io/api/1/news?country=in&category=environment&language=en&apikey=pub_4264185370956e46ba1dd973050f8ce79e624';


try {
	const response = await fetch(url);
	const result = await response.json();
	console.log(result);
  setnewsData(result)
} catch (error) {
	console.error(error);
}
}
const handlecity=(city)=>{
  localStorage.setItem('city',city);
  setcity(city)
}
  useEffect(() => {
    localStorage.setItem('city','Ahmedabad');
    getData(city);
    getNewsdata()
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
        <div>
        <CityList />
        <LatestNews data={newsData}/>
       
          </div>
      </main>
    </div>
    </div>
    </>
  )
}

export default App
