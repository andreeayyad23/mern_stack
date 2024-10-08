import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import NewPlayer from './components/newPlayer';
import ListPlayer from './components/ListPlayer';
import UpdatePlayer from './components/UpdatePlayer';

function App() {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then(res => {
        setPlayers(res.data);
        setLoaded(true);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        {loaded && (
          <Routes>
            <Route path="/" element={<Navigate to="/players/list" replace />} />
            <Route path="/players/addplayer" element={<NewPlayer />} />
            <Route path='/players/list' element={<ListPlayer/>} />
            <Route path="/edit/:id" element={<UpdatePlayer/>} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
