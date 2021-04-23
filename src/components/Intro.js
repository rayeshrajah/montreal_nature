import React from 'react';
import "../styles/Intro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Intro(){
    return (
        <div className="intro-main-container">
            <div className="intro-text-container">
                <h1>Montreal Nature</h1>
                <p>Discover nature at it's finest</p>
                <span><FontAwesomeIcon icon="arrow-down" size="3x"/></span>
            </div>
        </div>
    );
}