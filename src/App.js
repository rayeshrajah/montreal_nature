import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowDown } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, faArrowDown)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
