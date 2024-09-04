import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const List = () => {
    const [pirates, setPirates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/all")
            .then(res => setPirates(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/pirates/delete/${id}`)
            .then(res => {
                console.log(res.data);
                setPirates(pirates.filter(pirate => pirate._id !== id));
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-4" style={{ backgroundColor: '#fd8d01', padding: '20px', borderRadius: '8px' }}>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#6b3603' }}>
                <div className="container">
                    <h3 className="navbar-brand mx-auto">Pirates Crew</h3>
                    <button 
                        className="btn btn-primary" 
                        onClick={() => navigate("/")}
                    >
                        Add Pirate
                    </button>
                </div>
            </nav>
            <div className="row mt-4">
                {pirates.map((pirate) => (
                    <div key={pirate._id} className='col-md-4 mb-3'>
                        <div className='card border border-dark p-3' style={{ backgroundColor: 'white' }}>
                            <div className='d-flex justify-content-around'>
                                <img src={pirate.image_url} alt={pirate.name} width="80" height="80" />
                                <div className='text-center w-75'>
                                    <h5>{pirate.pirate_name}</h5>
                                    <div className='d-flex justify-content-around'>
                                        <Link to={`/Pirates/${pirate._id}`} className='btn btn-info'>View Pirate</Link>
                                        <button className='btn btn-danger' onClick={() => handleDelete(pirate._id)}>Walk the Plank</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
