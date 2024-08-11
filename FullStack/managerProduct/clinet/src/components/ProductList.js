import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

const ProductList = ({ products, removeFromDom }) => { // Destructure removeFromDom from props

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err)); 
    }

    return (
        <div className='text-center'>
            <h1>All Products</h1>
            {products && products.map((product) => (
                <div key={product._id}>
                    <h3>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                    </h3>
                    <button className='btn btn-warning' onClick={(e) => deleteProduct(product._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
