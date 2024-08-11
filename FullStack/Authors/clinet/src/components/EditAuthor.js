import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditAuthor = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.name);
                setLoading(false);
            })
            .catch(err => {
                setErrors(['Error fetching author data.']);
                setLoading(false);
            });
    }, [id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.put(`http://localhost:8000/api/authors/update/${id}`, { name })
            .then(res => 
                navigate("/") 
            )
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                setLoading(false);
            });
    };

    return (
        <div className="container mt-4">
            <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
                Home
            </button>
            <h3>Edit Author</h3>
            <form onSubmit={onSubmitHandler} className="mt-3">
                {errors.length > 0 && (
                    <div className="alert alert-danger">
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                    </div>
                )}
                <div className="mb-3">
                    <label htmlFor="authorName" className="form-label">Author</label>
                    <input
                        id="authorName"
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update
                </button>
                <Link to="/">Go to Home</Link>
            </form>
        </div>
    );
};

export default EditAuthor;
