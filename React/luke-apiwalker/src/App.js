import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <div className='App'>
       <Routes>
       <Route path="/people/:id" element={<People />} />
      <Route path="/planets/:id" element={<Planet/>} />
      <Route path="/" element={<Form/>} />
      </Routes>
    </div>

  );
}

export default App;