import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CursorCanvas from './components/canvas/CursorCanvas'
import './components/canvas/CursorCanvas.css'

function App() {
 const [windowSize,setWindowSize]=useState(window.innerWidth);

 useEffect(()=>{
  function handleSize(){
    setWindowSize(window.innerWidth);
  }
  // The resize event listener is independent of React's rendering process and will call handleResize whenever the window is resized
  window.addEventListener('resize',handleSize);

  return ()=>{
   window.removeEventListener('resize',handleSize);
  }
 },[]);
  
  return (
    <>
      {windowSize > 768 ? <CursorCanvas /> : ''}
      <Navbar/>
      <Home/>

    </>
  )
}

export default App
