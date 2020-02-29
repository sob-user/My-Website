import React from 'react';
import './Me.css';
import Photo  from './photo.png'
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom'


function Me() {
  return (
    <Animated animationIn="pulse" isVisible={true} animationInDuration="3000">
    <section className="Me-bg">
        <article className="Me-bg-int">
            <div className="Me-title">developper full stacks js</div>
            <div className="Me-photo"><img src={Photo} alt="salem"/></div>
            <div className="Me-name">OULAD-BELKACEM<br></br>Salem</div>
            <div className="Me-pitch">
            I've been passionate about computing since i was young,
             then i recently decided to retrain as a web developer 
             after a long career as a postman. Fortunately, i discovered 
             coding that's now my hobby.
            </div>
            <div className="Me-close"><Link to = {'/AboutMe'} ><button className="Close">close</button></Link></div>
        </article>
    </section>
    </Animated>
  )
}


export default Me;