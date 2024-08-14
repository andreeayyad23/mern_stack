import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const NewPlayer = (props) => {
    const [playerName, setPlayerName] = useState("");
    const [playerPosition, setPlayerPosition] = useState("");
    const [errors, setErrors] = useState([]);
    const [nameError, setNameError] = useState("");
    const navigate = useNavigate();


    const onSubmitHandle = (e) => {
        e.preventDefault();
        setNameError(""); 

        axios.post("http://localhost:8000/api/players/new", {
            playerName, 
            playerPosition
        })
        .then(res => navigate("/players/list"))
        .catch(err => {
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);
        });          
    };

    return (
        <div>
            <h3><Link to="/players/list">List</Link> | <span>Add Players</span></h3>

            <form onSubmit={onSubmitHandle}>
                {errors.length > 0 && (
                    <div className="text text-danger">
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                    </div>
                )}
                
                {nameError && (
                    <div className="text text-danger">
                        <p>{nameError}</p>
                    </div>
                )}
                <div className="mb-3">
                    <label htmlFor="playerName" className="form-label">Player Name</label>
                    <input
                        id="playerName"
                        type="text"
                        className="form-control"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="playerPosition" className="form-label">Player Position</label>
                    <input
                        id="playerPosition"
                        type="text"
                        className="form-control"
                        value={playerPosition}
                        onChange={(e) => setPlayerPosition(e.target.value)}
                    />
                </div>
                <input type="submit" className="btn btn-success" value="Add" />
            </form>
        </div>
    );
};

export default NewPlayer;
