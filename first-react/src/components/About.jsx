import React from 'react'
import './about.css'
import Planning from '../assets/about1.jpg'
import Analaysis from '../assets/about2.jpg'
import Advisory from '../assets/about3.jpg'
const About = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Welcome To <span className='reds'>CONSULT</span></h1>
            <p className='diam'>Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore</p>
            <p >Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam stet magna at et sanctus, vero sea sit amet dolores, sit dolor duo invidunt dolor, kasd rebum consetetur diam invidunt erat stet. Accusam nonumy lorem kasd eirmod. Justo clita sadipscing ea invidunt rebum sadipscing consetetur. Amet diam amet amet sanctus sanctus invidunt erat ipsum eirmod.</p>
            <button className='getbut'>Get A Quote</button>
        </div>

        <div className="right">
            <div className="item1">
               <img className='icons' src={Planning} alt="" />
               <div className="text1">
                <h3 className='hhh'>Business Planning</h3>
                <p className='ppp'>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
               </div>
            </div>

            <div className="item2">
                <img className='icons' src={Analaysis} alt="" />
                <div className="text2">
                <h3 className='hhh'>Financial Analaysis</h3>
                <p className='ppp'>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                </div>
            </div>

            <div className="item3">
                <img className='icons' src={Advisory} alt="" />
                <div className="text3">
                <h3 className='hhh'>legal Advisory</h3>
                <p className='ppp'>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default About
