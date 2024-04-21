import React, { useEffect, useState } from 'react'

const Greenery = ({show}) => {
    
    const [data, setData] = useState("");
    const [temp, setTemp] = useState("");
    const [city, setcity] = useState('')
    useEffect(() => {
        const ci=localStorage.getItem('city')
        setcity(ci)
        const getGreen = async () => {
            const green = await fetch(`http://127.0.0.1:5000/getgreen`);
            const json = await green.json();
            // console.log(json);
            setData(json);
        }

        const getTemp = async () => {
            const green = await fetch(`http://127.0.0.1:5000/predict_weather`);
            const json = await green.json();
            // console.log(json.predictions[0]);
            
            setTemp(json.predictions[0]);
        }

        getGreen();
        getTemp();
    }, [])

  return (
    <div className='greenery' >
        {!show &&<h2>Information :</h2>}
        <div className='green-container'>
            {
                !show&&
            
            <div className='card'>
                <div className='green-info'>{parseInt(temp)} &deg;C </div>
                <p>Next Day Temperature</p>
            </div>
            }
            <div className='card'>
                <div className='green-info'>{parseInt(data)} %</div>
                <p style={{textAlign: "center"}}>Greenery Percentage In {city} </p>
            </div>
        </div>
    </div>
  )
}

export default Greenery