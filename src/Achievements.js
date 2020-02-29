import React from 'react';
import './Achievements.css';
import Navbar from './Navbar';
import {Animated} from "react-animated-css";

function Achievements() {
  return (
    <section className="Achievements-bg">
      <Navbar />
      <article className="Achievements-menu">
        <div className="Todolist">
        <Animated animationIn="flipInY" isVisible={true} animationInDuration="3000">
          <p>To Do List</p>
        </Animated>
          </div>

        <div className="Force4">
        <Animated animationIn="lightSpeedIn" isVisible={true} animationInDuration="3000">
          <p>Force 4</p>
        </Animated>
          </div>
      </article>
    </section>
    
  );
}


export default Achievements;