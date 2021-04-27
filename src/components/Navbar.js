import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import "../styles/Navbar.css";

const StyledMenu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
    width: 3rem;
    height: 2rem;
    z-index: 1;
    padding-left: ${({ open }) => open ? '6px' : '0px'};
    
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: #3397DE;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;


        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? '0' : '1'};

        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }`;

const NavDropDown = styled.div`
        height: ${props => props.open ? "100%" : "0"};
        z-index: 1;
        background-color: #fff;
        transition: height 1000ms;
        positon: fixed;
        width: auto;
        margin: auto;
        overflow: hidden;
    `;

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="navbar-link-container">
                <StyledMenu open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </StyledMenu>
            </div>
            <div className="nav-dropdown-container">
                <NavDropDown open={open} >
            
                </NavDropDown>
            </div>
        </div>
    );
}