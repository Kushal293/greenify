
import React, { useState } from 'react'
import data from "../data.json";

const Suggestions = ({soil}) => {

    const [soildata, setdata] = useState(data)
    
  return (
  <div className='suggestions'>
    {soildata[soil]?.suggestion?.map((item)=>{
        return(<p className='suggest'>{item}</p>)

    })}
    </div>
  )
}

export default Suggestions