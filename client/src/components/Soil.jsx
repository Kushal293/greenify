import React from 'react'
import data from '../example.json';

const Soil = ({soil}) => {
  return (
    <div className='soilType'>
        <p>{data[soil]?.type}</p>
        <img src={data[soil]?.img} alt="soilImg" className='img' />
    </div>
  )
}

export default Soil