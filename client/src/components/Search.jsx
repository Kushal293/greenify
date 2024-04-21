import React, { useState } from 'react'
import Suggestions from './Suggestions'

const Search = () => {
    const [solitype, setsolitype] = useState('black')
    const [show, setshow] = useState(false)
  return (
    <div style={{display:'flex',flexDirection:'column', gap: "30px"}} className='search'>
        <form className='inputList'>
            {/* <div className='inp' style={{width: "300px"}}>
                <input type="number" className='temp-inp' min="5" max="50" placeholder='Enter your targated temperature...'/>
            </div>
            <div className='inp'>
                <input type="number" className='temp-inp' min="20" max="600" placeholder='Enter your targated aqi...'/>
            </div> */}
            <div className='inp'>
                <select onChange={(e)=>{console.log(e.target.value);setsolitype(e.target.value)}} name="soil" id="soil" className='temp-inp soil'>
                    <option value="black">Black soil</option>
                    <option value="alluvial">Alluvial soil</option>
                    <option value="red_and_yellow">Red and Yellow soil</option>
                    <option value="laterite">Laterite soil</option>
                    <option value="desert">Arid and Desert soil</option>
                    <option value="mountain">Mountain soil</option>
                </select>
            </div>
            <button onClick={()=>setshow(true)} className='getBtn'>Get</button>
        </form>
        <Suggestions  soil={solitype}/>
    </div>
  )
}

export default Search