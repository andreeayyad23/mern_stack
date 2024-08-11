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
<<<<<<< HEAD
      <Route path="/" element={<Form/>} />
=======
      <Route path="/Form/" element={<Form/>} />
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
      </Routes>
    </div>

  );
}

export default App;