import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    return (
        <div className='text-center'>
            <h1>All Products</h1>
            {products && products.map((product) => (
                <h3 key={product._id}> 
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                </h3>
            ))}
        </div>
    );
};

export default ProductList;
