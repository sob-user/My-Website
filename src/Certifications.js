import React from 'react';
import './Certifications.css';
import Opquast  from './opquast.png'
import Scrum  from './scrum-method.png'
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom'



function Certifications() {
  return (
    <Animated animationIn="pulse" isVisible={true} animationInDuration="3000">
    <section className="Certifications-bg">
        <article className="Certifications-bg-int">
            <div className="Certifications-title">certifications</div>
            <div className="Certifications-content">
                <img src={Opquast} alt="opquast logo"/>
                <img src={Scrum} alt="scrum logo"/>
            </div>
            <div className="Certifications-close"><Link to = {'/AboutMe'} ><button className="Close">close</button></Link></div>
        </article>
    </section>
    </Animated>
  )
}


export default Certifications;