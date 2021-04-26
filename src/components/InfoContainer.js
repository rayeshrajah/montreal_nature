import React, { useRef, useLayoutEffect, useState } from "react";
import "../styles/InfoContainer.css";
import InfoBox from "../custom_components/InfoBox";
import Image1 from "../images/mont_royal.jpg"
import Image2 from "../images/la_maurice.jpg"
import Image3 from "../images/forillion.jpg"
import Image4 from "../images/momo_falls.jpg"

let arrayTitles = [
                    {title: "Mont-Royal", image: Image1, person:"@jpValery", splashUrl:"https://unsplash.com/@jpvalery"},
                    {title: "La Maurice", image: Image2, person:"@sebastianSeck", splashUrl:"https://unsplash.com/@sebaseck"},
                    {title: "Forillion", image: Image3, person:"@etienneDel", splashUrl:"https://unsplash.com/@etiennedelorieux"},
                    {title: "Momo Falls", image: Image4, person:"@lukeChesser", splashUrl:"https://unsplash.com/@lukechesser"} 
                  ]

export default function InfoContainer() {

    return(
    <div className="info-master-container">
        <h1>Breathtaking Sceneries</h1>
        <div className="info-container">
            {arrayTitles.map((element) => { 
                return(
                    <InfoBox title={element.title} image={element.image} person={element.person} splashUrl={element.splashUrl}/>
                    );
                })}
        </div>
    </div>
    );
}