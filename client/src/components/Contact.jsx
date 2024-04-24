import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <div style={{display: "flex"}}>
      <div style={{flex: 1, borderRight: "2px solid lightgrey"}}>
      <p style={{ width: "70%"}}>
      Feel free to Contact Us to learn more about how you can get involved or collaborate with us! You can also connect with us on Facebook, Twitter, and Instagram to stay updated on our latest initiatives and events.
      </p>
      <p style={{ width: "70%"}}>
      Together, let's greenify our cities and make a difference, one tree at a time.
      </p>
      </div>
      <div style={{flex: 1, display: "flex", flexDirection: "column", marginLeft: "20px"}}>
        <p>email: <span>greenify@gmail.com</span></p>
        {/* <p>phone no: <span>+91 9087623874</span></p> */}
      </div>
      </div>
    </div>
  )
}

export default Contact