import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </div>
        </div>
    )
}
    
export default ProductDetails;

