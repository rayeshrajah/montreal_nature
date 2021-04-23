import './App.css';
import './components/Navbar'
import Intro from './components/Intro';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import InfoContainer from './components/InfoContainer';
library.add(fab, faCheckSquare, faCoffee, faArrowDown)

function App() {
  return (
    <div className="App">
      <Intro />
      <InfoContainer />
    </div>
  );
}

export default App;
