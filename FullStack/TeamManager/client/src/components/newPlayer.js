import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const NewPlayer = (props) => {
    const [playerName, setPlayerName] = useState("");
    const [playerPosition, setPlayerPosition] = useState("");
    const [errors, setErrors] = useState([]);
    const [nameError, setNameError] = useState("");
    const navigate = useNavigate();

    // Function to check if the player name is duplicated
    const checkDuplicateName = async (name) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/players/check?name=${name}`);
            return response.data.exists;
        } catch (error) {
            console.error("Error checking duplicate name:", error);
            return false;
        }
    };

    const onSubmitHandle = async (e) => {
        e.preventDefault();
        setNameError("");  // Clear previous name error

        // Check if the player name already exists
        const isDuplicate = await checkDuplicateName(playerName);
        if (isDuplicate) {
            setNameError("Player name already exists.");
            return;  // Prevent form submission
        }

        // Proceed with form submission
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
