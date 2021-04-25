import React, { useRef, useLayoutEffect, useState } from "react";
import "../styles/InfoContainer.css";
import InfoBox from "../custom_components/InfoBox";
import Image1 from "../images/mont_royal.jpg"
import Image2 from "../images/la_maurice.jpg"
import Image3 from "../images/forillion.jpg"
import Image4 from "../images/momo_falls.jpg"

let arrayTitles = [
                    {title: "Mont-Royal", image: Image1},
                    {title: "La Maurice", image: Image2},
                    {title: "Forillion", image: Image3},
                    {title: "Momo Falls", image: Image4} 
                  ]

export default function InfoContainer() {

    return(
    <div className="info-master-container">
        <h1>Breathtaking Sceneries</h1>
        <div className="info-container">
            {arrayTitles.map((element) => { 
                return(
                    <InfoBox title={element.title} image={element.image} />
                    );
                })}
        </div>
    </div>
    );
}