import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom'
import Deadpool from './components/deadpool';
import {Animated} from "react-animated-css";

function LandingPage() {
  return (
    <section className="Langing-bg">
        <article className='LandingTxt'>
        <Animated animationIn="zoomIn" isVisible={true} animationInDuration="3000">
             <h2>welcome</h2>
             <h2>to my</h2>
             <h2>portfolio</h2>
        </Animated>
        <Animated animationIn="bounceInRight" isVisible={true} animationInDuration="15000">
             < Deadpool />
        </Animated>
        </article>
        
        <Animated animationIn="bounceIn" isVisible={true} animationInDelay="8000">
        <Link to = {'/Home'} ><button className="Enter">discover me</button></Link>
        </Animated>
    </section>
    
  );
}


export default LandingPage;