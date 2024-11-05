import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Three from './components/three'
import About from './components/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Navbar2/>
     <Three/> 
     <About/>   
    </>
  )
}

export default App
