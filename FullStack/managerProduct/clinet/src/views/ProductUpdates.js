import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductUpdates = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res);
            navigate(`/products/${id}`);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="container mt-4">
            <h1 className="text-center">Update Product</h1>
            <form onSubmit={updateProduct} className="form-group">
                <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        id="title"
                        name="title" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price">Price</label>
                    <input 
                        type="number" 
                        id="price"
                        name="price"
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        id="description"
                        name="description"
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Product</button>
            </form>
        </div>
    );
};

export default ProductUpdates;
