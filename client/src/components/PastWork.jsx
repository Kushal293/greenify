import React from 'react'

const PastWork = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className='about'>
        <div className='story'>
          <div className='img-story'>
          <img src="https://imgs.mongabay.com/wp-content/uploads/sites/30/2022/03/08122458/hill7-768x361.png" alt="" />
            </div>       
          <p>At Greenify, we are passionate about creating greener and more sustainable communities for future generations. With the ever-increasing challenges posed by urbanization and environmental degradation, we believe that everyone has a role to play in preserving our planet.</p>
        </div>
        <div className='story' style={{flexDirection: "row-reverse"}}>
          <div className='img-story'>
          <img src="https://i.ytimg.com/vi/11XIWo05tHY/maxresdefault.jpg" alt="" />
          </div>
          <p>Greenify is more than just a platform; it's a movement towards positive environmental change. Our mission is to empower individuals, communities, and organizations to take action towards creating and maintaining green spaces in urban areas.</p>
        </div>
      </div>
    </div>
  )
}

export default PastWork