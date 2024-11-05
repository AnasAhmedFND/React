import React from 'react'
import Icon from '../assets/icon.png'
import './nav2.css'

const Navbar2 = () => {
  return (
    <nav className='main'>
        <div className="icon">
            <img src={Icon} alt="" />
        </div>

        <div className="ulitem">
            <ul className='litem'>
                <li className='home'>HOME</li>
                <li className='sm'>ABOUT</li>
                <li className='sm'>SERVICE</li>
               <select name="page" id="pages">
                <option value="PAGE">PAGE</option>
                <option value="#">Blog Grid</option>
                <option value="#">Blog Detail</option>
                <option value="#">Features</option>
                <option value="#">Quote Form</option>
                <option value="#">The Team</option>
                <option value="#">Testimonial</option>
               </select>
                <li className='sm'>CONTACT</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar2
