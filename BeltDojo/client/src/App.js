import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import New from './components/New';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Details from './components/Details';
import Update from './components/Update';


function App() {
  const [pirates, setPirates] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/pirates/all')
      .then(res => {
        setPirates(res.data);
        setLoaded(true);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        {loaded && (
          <Routes>
            <Route path="/" element={<Navigate to="/Pirates/add" replace />} />
            <Route path='/Pirates/add' element={<New/>} />
            <Route path='/Pirates/list' element={<List/>} />
            <Route path='/Pirates/:id' element={<Details/>} />
            <Route path='/Pirates/Update/:id' element={<Update/>} />

          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;