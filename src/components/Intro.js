import React from 'react';
import "../styles/Intro.css";
import Logo from "../images/nature_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Intro(){
    return (
        <div className="intro-main-container">
            <div className="logo-container">
                <img src={Logo} alt="Nature Picture"></img>
            </div>
            <div className="intro-text-container">
                <h1>Quebec Nature</h1>
                <p>Discover nature at it's finest</p>
                <span><FontAwesomeIcon icon="arrow-down" size="3x"/></span>
            </div>
        </div>
    );
}