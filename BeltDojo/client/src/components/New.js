import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const New = () => {
    const [name, setName] = useState(""); 
    const [ImgUrl, setImgUrl] = useState(""); 
    const [Treasure, setTreasure] = useState(""); 
    const [Phrases, setPhrases] = useState(""); 
    const [position, setPosition] = useState(""); 
    const [pegLeg, setPegLeg] = useState(false); 
    const [eyePatch, setEyePatch] = useState(false); 
    const [hookHand, setHookHand] = useState(false); 
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates/create', {
            pirate_name: name,
            image_url: ImgUrl,
            num_of_chests: Treasure,
            phrase: Phrases,
            position,
            pegLeg,
            eyePatch,
            hookHand
        })
        .then(res => {
            navigate("/Pirates/list");
            setErrors([]);
        })
        .catch(err => {
            if (err.response && err.response.data.errors) {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            }
        });
    };

    return (
        <div className="container mt-4">
          <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
            <div className="container">
                <h3 className="navbar-brand mx-auto">Pirates Crew</h3>
                <button 
                    className="btn btn-primary" 
                    onClick={() => navigate("/Pirates/add")}
                >
                    Add Pirate
                </button>
            </div>
        </nav>
        <form onSubmit={onSubmitHandler} style={{ backgroundColor: '#fd8d01', padding: '20px', borderRadius: '8px' }}>
    {errors.length > 0 && (
        <div className="alert alert-danger">
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </div>
    )}
    <div className='row'>
        <div className='col-md-6'>
            <div className='form-group my-2'>
                <label htmlFor='name'>Pirate Name</label>
                <input 
                    type="text" 
                    id='name' 
                    className='form-control' 
                    value={name}
                    onChange={e => setName(e.target.value)}/>
            </div>
            <div className='form-group my-2'>
                <label htmlFor='ImgUrl'>Image URL</label>
                <input 
                    type="url" 
                    id='ImgUrl' 
                    className='form-control' 
                    value={ImgUrl}
                    onChange={e => setImgUrl(e.target.value)}/>
            </div>
            <div className='form-group my-2'>
                <label htmlFor='Treasure'># of Treasure Chests:</label>
                <input 
                    type="number" 
                    id='Treasure' 
                    className='form-control' 
                    value={Treasure}
                    onChange={e => setTreasure(e.target.value)}/>
            </div>
            <div className='form-group my-2'>
                <label htmlFor='Phrases'>Pirate Catch Phrases</label>
                <textarea 
                    id='Phrases' 
                    className='form-control' 
                    value={Phrases}
                    onChange={e => setPhrases(e.target.value)}
                ></textarea>
            </div>
        </div>
        <div className='col-md-6'>
            <div className='form-group my-2'>
                <label htmlFor='position'>Crew Position:</label>
                <select 
                    id='position' 
                    className='form-control' 
                    value={position}
                    onChange={e => setPosition(e.target.value)}>
                    <option value="">Select position</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                    <option value="Captain">Captain</option>
                </select>
            </div>
            <div className="form-check">
                <input 
                    type="checkbox" 
                    id='pegLeg' 
                    className='form-check-input' 
                    checked={pegLeg}
                    onChange={e => setPegLeg(e.target.checked)}/>
                <label className="form-check-label" htmlFor="pegLeg">Peg Leg</label>
            </div>
            <div className="form-check">
                <input 
                    type="checkbox" 
                    id='eyePatch' 
                    className='form-check-input' 
                    checked={eyePatch}
                    onChange={e => setEyePatch(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="eyePatch">Eye Patch</label>
            </div>
            <div className="form-check">
                <input 
                    type="checkbox" 
                    id='hookHand' 
                    className='form-check-input' 
                    checked={hookHand}
                    onChange={e => setHookHand(e.target.checked)}/>
                <label className="form-check-label" htmlFor="hookHand">Hook Hand</label>
            </div>
            <div className='form-group mt-3'>
                <input type="submit" className='btn btn-primary' value="Add Pirate"/>
            </div>
        </div>
    </div>
</form>

        </div>
    );
};

export default New;
