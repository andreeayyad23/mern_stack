import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import axios from 'axios'; // Import axios

const ProductList = ({ products, removeFromDom }) => { // Destructure removeFromDom from props

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err)); 
    }

=======

const ProductList = ({ products }) => {
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
    return (
        <div className='text-center'>
            <h1>All Products</h1>
            {products && products.map((product) => (
<<<<<<< HEAD
                <div key={product._id}>
                    <h3>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                    </h3>
                    <button className='btn btn-warning' onClick={(e) => deleteProduct(product._id)}>Delete</button>
                </div>
=======
                <h3 key={product._id}> 
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                </h3>
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
            ))}
        </div>
    );
};

export default ProductList;
