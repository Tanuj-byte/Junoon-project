import React from 'react';
import './home.css';
import Carousel from './carousel';
import About from './About';
function home() {
  return (
     <div className="home">
      <h1>
        <Carousel />
        <About />
        
      </h1>
    </div>
  )
}

export default home;