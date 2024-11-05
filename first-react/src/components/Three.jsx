import React from 'react'
import './thr.css'
import Hero from '../assets/heros.jpg'

const three = () => {
  return (
    <div className="hero">
      <div className="banar">
        <img src={Hero} alt="" />
      </div>

      <div className="top">
            <h2 className='business'>BUSINESS CONSULTANCY</h2>
            <h1 className='level'>Take Our Help To Reach <br /> The Top Level</h1>
            <div className="but">
              <button className='but1'>Get Quote</button>
              <button className='but2'>Contact Us</button>
            </div>
      </div>
    </div>
  )
}

export default three
