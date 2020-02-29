import React from 'react';
import './MyStack.css';
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom'



function MyStack() {
  return (
    <Animated animationIn="pulse" isVisible={true} animationInDuration="3000">
    <section className="Me-bg">
        <article className="MyStack-bg-int">
            <div className="MyStack-title">my stack</div>
            <div className="MyStack-content">
               <div className="MyStack-floor">
               <i class="fab fa-js"></i>
               <i class="fab fa-react"></i>
               <i class="fab fa-html5"></i>
               <i class="fab fa-css3"></i>
               </div>
               
               <div className="MyStack-floor">
               <i class="fab fa-bootstrap"></i> 
               <i class="fab fa-github-square"></i> 
               <i class="fab fa-node"></i>
               </div>

               <div className="MyStack-floor">
               <i class="fab fa-wordpress"></i>
               <i class="fab fa-vuejs"></i>
               </div> 
               
            </div>
            <div className="MyStack-close"><Link to = {'/AboutMe'} ><button className="Close">close</button></Link></div>
        </article>
    </section>
    </Animated>
  )
}


export default MyStack;