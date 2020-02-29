import React from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Linkedin from './components/linkedin';
import {Animated} from "react-animated-css";

function Contact() {
  return (
    <section className="Contact-bg">
      <Navbar />
      <article className="Contact-block">
        
        <div className="form">
        <Animated animationIn="rotateInDownLeft" isVisible={true} animationInDuration="3000">
            <div class="form-style-6">
                <form>
                <input type="text" name="field1" placeholder="Your Name" />
                <input type="email" name="field2" placeholder="Email Address" />
                <textarea name="field3" placeholder="Type your Message"></textarea>
                <input type="submit" value="Send" />
                </form>
            </div>
        </Animated>
        </div>
        
        <div className="or">
             <Animated animationIn="fadeInUp" isVisible={true} animationInDuration="3000">
                  -------OR-------
             </Animated>
        </div>

        <div className="alt-contact"> 
           <Animated animationIn="fadeInRight" isVisible={true} animationInDuration="3000">
                <Linkedin />
           </Animated>
        </div>

      </article>
    </section>
    
  );
}


export default Contact;