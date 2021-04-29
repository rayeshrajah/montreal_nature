import React, { useRef, useEffect } from 'react';
import './App.css';
import './components/Navbar'
import Intro from './components/Intro';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import InfoContainer from './components/InfoContainer';
import Navbar from './components/Navbar';
import Benefits from './components/Benefits';
library.add(fab, faCheckSquare, faCoffee, faArrowDown)

function App() {
  const domRef = useRef(null);

useEffect(() => {
console.log(domRef.current.children[1]);
}, [domRef])

function scrollToIntro() {
  domRef.current.children[1].scrollIntoView({
    behaviour: "smooth",
    block: "nearest",
    inline: "start"
  })
}

function scrollToScenery() {
  domRef.current.children[2].scrollIntoView({
    behaviour: "smooth",
    block: "nearest",
    inline: "start"
  })
}

function scrollToDiscover() {
  domRef.current.children[3].scrollIntoView({
    behaviour: "smooth",
    block: "nearest",
    inline: "start"
  })
}

  return (
    <div className="App" ref={domRef}>
      <Navbar goIntro={scrollToIntro} goScenery={scrollToScenery} goBenefits={scrollToDiscover} />
      <Intro />
      <InfoContainer />
      <Benefits />
    </div>
  );
}

export default App;
