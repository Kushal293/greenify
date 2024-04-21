import React, { useEffect, useState } from 'react'

const InfoCard = ({data}) => {

    const [city, setCity] = useState("Ahmedabad");

    useEffect(() => {
        const data = localStorage.getItem('city');
        setCity(data);
    });
   

  return (
    <div className='infocard'>
        <h2>Information :   <span className='place'>{city}</span></h2>
        <div className='container'>
            <div className='card'>
                <div className='info'>{parseInt(data?.temperature)} &deg;C</div>
                <p>Tempreture</p>
            </div>
        
        <div className='card'>
            <div className='info'>{parseInt((data?.humidity) *100 )}%</div>
            <p>Humidity</p>
        </div>
        <div className='card'>
            <div className='info'>{parseInt((data?.aqi) *100)}</div>
            <p>AQI</p>
        </div>
        </div>
    </div>
  )
}

export default InfoCard