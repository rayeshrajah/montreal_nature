import React from "react";
import "../styles/InfoContainer.css";
import InfoBox from "../custom_components/InfoBox";
import Image1 from "../images/mont-royal.png"

let arrayTitles = [
                    {title: "Mont-Royal", image: Image1}, 
                  ]

export default function InfoContainer() {
    return(
    <div className="info-master-container">
        <h1>Beautiful Nature within Quebec</h1>
        <div className="info-container">
            {arrayTitles.map((element) => {
                return(
                    <InfoBox title={element.title} image={element.image}/>
                    );
                })}
        </div>
    </div>
    );
}