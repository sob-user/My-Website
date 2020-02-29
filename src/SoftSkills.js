import React from 'react';
import './SoftSkills.css';
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom'



function SoftSkills() {
  return (
    <Animated animationIn="pulse"  isVisible={true} animationInDuration="3000">
    <section className="SoftSkills-bg">
        <article className="SoftSkills-bg-int">
            <div className="SoftSkills-title">soft skills</div>
            <div className="SoftSkills-content">
                <p>emotional intelligence</p>
                <p>critical thinking</p>
                <p>growth mindset</p>
                <p>creativity</p>
            </div>
            <div className="SoftSkills-close"><Link to = {'/AboutMe'} ><button className="Close">close</button></Link></div>
        </article>
    </section>
    </Animated>
  )
}


export default SoftSkills;