import React from "react";
import "../styles/InfoBox.css";


export default function InfoBox({title, image}) {
    return(
        <div className="mini-info-box-container" style={{background: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <p>{title}</p>
        </div>
    );
}