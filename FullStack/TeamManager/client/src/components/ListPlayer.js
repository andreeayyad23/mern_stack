import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ListPlayer = (props) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data);
            })
            .catch(err => {
                console.error('Error fetching players:', err);
            });
    }, []);

    const removeFromDom = (playerId) => {
        setPlayers(players.filter(player => player._id !== playerId));
    };

    return (
      <div className="container mt-4">
          <h3>List | <span><Link to="/players/addplayer">Add Players</Link></span> </h3>
          
          <table class="table table-dark table-striped">
          <thead>
                  <tr>
                      <th>Team Name</th>
                      <th>Player Position</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {players.map((player, idx) => (
                      <tr key={idx}>
                          <td>{player.playerName}</td>
                          <td>{player.playerPosition}</td>
                          <td>
                              <DeleteButton
                                  playerId={player._id}
                                  successCallback={() => removeFromDom(player._id)}
                                  className="btn btn-danger btn-sm"
                              />
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
};

export default ListPlayer;














