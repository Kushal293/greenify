import React from 'react'
import '../App.css'
const LatestNews = ({data}) => {

  return (
    <div style={{}} className='citylist'>

        <h1>Latest News</h1>
        <div className='latest-news' style={{overflowY: "scroll"}}>
                 {
                    data?.results?.map((item)=>{

                        return( 
                        <div className='city' onClick={()=> handlecity('Baroda')} style={{display: "flex", gap: "10px", flexDirection: "row", marginTop: "5px"}}>
                            <div style={{width: "55px", flex: 1}}>
                                <img src={item?.image_url} alt="img" style={{width: "55px"}} />
                            </div>
                            <a href={item?.link} style={{textDecoration: "none", color: "black"}}><p style={{fontSize: "12px", flex: 3}}>{item?.title}</p></a>
                        </div>
                    )
                    })
                 }
                
              </div>
    </div>
  )
}

export default LatestNews