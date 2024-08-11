import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewAuthor from './components/NewAuthor';
import Authors from './components/Authors';
import 'bootstrap/dist/css/bootstrap.min.css';

import EditAuthor from './components/EditAuthor';

function App() {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then(res => {
        setAuthors(res.data);
        setLoaded(true);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        {loaded && (
          <Routes>
            <Route path="/" element={<Authors authors={authors} />} />
            <Route path="/new" element={<NewAuthor />} />
            <Route path="/edit/:id" element={<EditAuthor />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
