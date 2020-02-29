import React from 'react';
import './AboutMe.css';
import './Home.css';
import JumpingSquare from './components/jumping-square';
import {Animated} from "react-animated-css";
import Navbar from './Navbar';
import {Link} from 'react-router-dom'

function AboutMe() {
    
  return (
    <section className="About-bg">
    <Navbar />
        <article className="About-menu">
            
            <div className="About-one">
                <Animated animationIn="fadeInRight" isVisible={true} animationInDuration="3000">
                      <Link to = {'/Me'} ><p>me</p></Link>
                </Animated>
            </div>
            
            <div className="About-two">
                <Animated animationIn="fadeInUp" isVisible={true} animationInDuration="3000">
                       <Link to = {'/MyStack'} ><p>my stack</p></Link>
                </Animated>
            </div>
            
            <div className="About-three">
                <Animated animationIn="fadeInLeft" isVisible={true} animationInDuration="6000">
                      <JumpingSquare />
                </Animated>
            </div>

            <div className="About-four">
                <Animated animationIn="fadeInLeft" isVisible={true} animationInDuration="3000">
                        <Link to = {'/Certifications'} ><p>certifications</p></Link>
                </Animated>
                </div>
            
            <div className="About-five"></div>

            <div className="About-six">
                <Animated animationIn="fadeInDown" isVisible={true} animationInDuration="3000">
                        <Link to = {'/SoftSkills'} ><p>soft skills</p></Link>
                </Animated>
            </div>
        </article>
    </section>
    
  );
}


export default AboutMe;