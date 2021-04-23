import React from "react";
import Logo from "../images/nature_logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav class="navbar navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                </a>
            </div>
        </nav>
    );
}