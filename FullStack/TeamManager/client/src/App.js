import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import NewPlayer from './components/newPlayer';
import ListPlayer from './components/ListPlayer';
function App() {
  const[playerName, setPlayerName] = useState([]);
  const[playerPosition, setPlayerPosition] = useState([])
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then(res => {
        setPlayerName(res.data);
        setPlayerPosition(res.data)
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
            <Route path='/players/list' element={<ListPlayer />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;


