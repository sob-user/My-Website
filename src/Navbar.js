import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
        <article className="Navbar">
            <div className="Nav-left"></div>
            <div className="Nav-right">
                <ul className="Nav-ul">
                    <Link to = {'/Home'} ><li>home</li></Link>
                    <Link to = {'/AboutMe'} ><li>about me</li></Link>
                    <Link to = {'/Achievements'} ><li>achievements</li></Link>
                    <Link to = {'/Contact'} ><li>contact</li></Link>
                </ul>
            </div>
        </article>


    
  );
}


export default Navbar;