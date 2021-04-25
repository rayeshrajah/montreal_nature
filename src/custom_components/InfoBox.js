import React, {useRef, useLayoutEffect, useState} from "react";
import "../styles/InfoBox.css";
import styled, { keyframes } from "styled-components";



export default function InfoBox({title, image}) {

    const fadeLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100%{
        opacity:1;
        transform: translateX(0);
    }`;
    
    
    const [show, setShow] = useState(false);
    const scrollBarRef = useRef(null);
    
    const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    animation: ${fadeLeft} 1s;
    transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
    transition: transform 1s;
    `;

    useLayoutEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if(scrollPos > 1800){
                setShow(true);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
   
    return(
        <Div animate={show} className="mini-info-main-container" ref={scrollBarRef}>
        <p>{title}</p>
        <div className="mini-info-box-container" style={{background: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        </div>
        </Div>
    );
}

