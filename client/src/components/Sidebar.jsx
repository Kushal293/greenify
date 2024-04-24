import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to="/" style={{textDecoration: "none", color: "green"}} ><h2>Greenify</h2></Link>
        <ul className='menu'>
            <li><Link to={"/"} style={{textDecoration: "none", color: "green"}} >Dashboard</Link></li>
            <li><Link to={"/analysis"} style={{textDecoration: "none", color: "green"}} >Analysis</Link></li>
            <li><Link to={"/solution"} style={{textDecoration: "none", color: "green"}} >Solution</Link></li>
            <li><Link to={"/about"} style={{textDecoration: "none", color: "green"}} >About Us</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar