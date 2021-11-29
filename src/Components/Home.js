import React, { Component } from 'react'
import linkedin from '../img/linkedin-icon.png';
import facebook from '../img/facebook-icon.png';
import github from '../img/github-icon.png';
import twitter from '../img/twitter-icon.png';  

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>This is home.</p>

                <ul>
      
      <li className="nav-item">
        <a className="nav-link" href="#">
          <img className="icons" src={linkedin} alt='linkedin...'></img></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><img className="icons" src={facebook} alt='facebook...'></img></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><img className="icons" src={twitter} alt='twitter...'></img></a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#"><img className="icons" src={github} alt='github...'></img></a>
      </li>
      
      
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
            </div>
        )
    }
}
