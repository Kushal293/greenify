import React from 'react'
import data from '../example.json';

const Soil = ({soil}) => {
  return (
    <div className='soilType'>
        <div>
        <p>{data[soil]?.type}</p>
       <a href={data[soil]?.links[0]} target="_blank">More Info</a>
        </div>

        <img src={data[soil]?.img} alt="soilImg" className='img' />
    </div>
  )
}

export default Soil