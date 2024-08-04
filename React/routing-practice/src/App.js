import Home from './components/Home';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Number from './components/Number';
import WordColor from './components/WordColor';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/:number/" element={<Number />} />
       <Route path="/:word/:textcolor/:backcolor" element={<WordColor />} />


       </Routes>
    </div>
  );
}

export default App;
