import React from 'react'
import './navbar.css'
import Mail from '../assets/mail.png'
import Call from '../assets/call.jpg'

const Navbar = () => {
  return (
    <nav className='navbar'>
       
        <ul className='discription'>
            <li>FAQs</li>
            <li>support</li>
            <li>Privacy</li>
            <li>Policy</li>
            <li>Career</li>
           
        </ul>
         

         <div className="social">
            <div className="maildiv">
                <img src={Mail} alt="" />
                <p className='p1'>mail@domain.com</p>
            </div>
            <div className="calldiv">
            <img src={Call} alt="" />
            <p>+012 345 6789</p>
            </div>
         </div>
    </nav>
  )
}

export default Navbar
