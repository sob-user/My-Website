import React from 'react';
import './Home.css';
import Tenor from './components/tenor';
import {Animated} from "react-animated-css";
import Navbar from './Navbar';

function Home() {
  return (
    <section className="Home-bg">
        < Navbar />

        <article className="Entrance-txt">
        <Animated animationIn="fadeInLeft" isVisible={true} animationInDuration="3000">
            <p>This is the completion of everything I learned during my
                 training but also a great programming adventure start.</p>
        </Animated>
        <Animated animationIn="fadeInRight" isVisible={true} animationInDuration="3000">
                 < Tenor />
        </Animated>
        </article>
    </section>
    
  );
}


export default Home;