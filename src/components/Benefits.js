import React from "react";
import Card from "../custom_components/Card";
import "../styles/Benefits.css";

export default function Benefits() {
    return(
        <div className="benefits-main-container">
            <h1>Benefits To Discover</h1>
            <div className="benefits-box">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

