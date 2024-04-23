
import React, { useRef, useState } from 'react'
import data from "../data.json";
import temp from "../example.json";

const Suggestions = ({soil}) => {

    const [soildata, setdata] = useState(temp);
    const sliderRef = useRef(null);

    const slideLeft = () => {
      const slider = sliderRef.current;
      slider.scrollLeft -= slider.offsetWidth;
    }

    const slideRight = () => {
      const slider = sliderRef.current;
      slider.scrollLeft += slider.offsetWidth;
    }
    
  return (
  <div className='suggestion-container'>
    <div className='suggestions' ref={sliderRef}>
    {soildata[soil]?.suggestion?.map((item)=>{
        return(
          <div className='single-suggestion'>
            <p className='suggest'>{item?.name}</p>
           <div className='tree-info'>
              <div className='img-container'>
                <img src={item?.img} alt="image" className='tree-img' />
              </div>
              <div className='info-container'>
              {
                item?.info.map((info) => {
                  return (<p> {"=>"} {info}</p>)
                })
              } 
              </div>
            </div>
          </div>
        )

    }
  )
    }

</div>
<div className='arrow-left' onClick={slideLeft}> {"<"} </div>
    <div className='arrow-right' onClick={slideRight}> {">"} </div>
  </div>
    ) 
  }

export default Suggestions