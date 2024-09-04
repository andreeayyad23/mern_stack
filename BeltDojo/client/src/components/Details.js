import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Details = () => {
    const { id } = useParams();
    const [pirate, setPirate] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                setPirate(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container bg-custom-orange py-4">
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
                <div className="col-lg-6 d-flex justify-content-center mb-4">
                    <img 
                        src={pirate.image_url} 
                        alt={pirate.pirate_name} 
                        
                        style={{ maxWidth: '100%'}} 
                    />
                </div>
                <div className="col-lg-6">
                    <div className="card border-dark mb-4">
                        <div className="card-body">
                            <h1 className="card-title text-center">{pirate.pirate_name}</h1>
                            <h1 className="card-text text-center">{pirate.phrase}</h1>
                        </div>
                    </div>
                    <div className="card border-dark">
                        <div className="card-body">
                            <h2 className="card-title text-center">About</h2>
                            <h4>Position: {pirate.position}</h4>
                            <h4>Number of Chests: {pirate.num_of_chests}</h4>
                            <h4>Peg Leg: {pirate.pegLeg ? "Yes" : "No"}</h4>
                            <h4>Eye Patch: {pirate.eyePatch ? "Yes" : "No"}</h4>
                            <h4>Hook Hand: {pirate.hookHand ? "Yes" : "No"}</h4>
                        </div>
                    </div>
                    <button
                                    className="btn btn-warning mt-4"
                                    onClick={() => navigate(`/pirates/update/${id}`)}
                                >
                                    Edit Pirate
                                </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
