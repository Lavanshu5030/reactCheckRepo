import React from "react";
import logo from '../assets/images/logo.jpg'
import samosa from '../assets/images/logo.jpg';
import balloon from '../assets/images/shutterstock_1033306540s.avif';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        
      </header>
      <div className='fluid-container'>
        <div className='row'>
          <div className="col-xl-12">
            <img src={balloon} width="100%" height="100%"></img>
            <div className="carousel-caption">
              <marquee direction="right" behavior="alternate">
                <h1>Welcome</h1>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
