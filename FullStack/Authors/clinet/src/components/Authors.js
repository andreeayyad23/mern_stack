import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const Authors = (props) => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => {
                console.error('Error fetching authors:', err);
            });
    }, []);

    const removeFromDom = (authorId) => {
        setAuthors(authors.filter(author => author._id !== authorId));
    };

    return (
        <div className="container mt-4">
            <button className="btn btn-primary mb-3" onClick={() => navigate("/new")}>Add An Author</button>
            <h3>All Authors:</h3>
            <ul className="list-group">
                {authors.map((author, idx) => (
                    <li key={idx} className="list-group-item d-flex justify-content-between ">
                        <p>{author.name}</p>
                        <button className="btn btn-warning" onClick={() => navigate(`/edit/${author._id}`)}>Edit</button>
                        <DeleteButton
                                authorId={author._id}
                                successCallback={() => removeFromDom(author._id)}
                                className="btn btn-warning btn-sm"
                            />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Authors;
