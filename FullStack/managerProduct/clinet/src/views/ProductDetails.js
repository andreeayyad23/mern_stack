import React, { useEffect, useState } from 'react'
import axios from 'axios';
<<<<<<< HEAD
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

=======
import { useParams } from "react-router-dom";
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
    
const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
<<<<<<< HEAD
    const [removeFromDom]  = useState('')
    const navigate = useNavigate();

=======
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);
<<<<<<< HEAD

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err)); 
            navigate("/");

    }

    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center">
              <h1>{product.title}</h1>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <div>
                  <Link to={"/"+product._id+"/edit"} className="btn btn-primary mx-2">Edit</Link>
                  <Link to="/" className="btn btn-secondary mx-2">Back</Link>
                  <button className='btn btn-warning' onClick={(e) => deleteProduct(product._id)}>Delete</button>

              </div>
          </div>
      </div>
    );
=======
    
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </div>
        </div>
    )
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
}
    
export default ProductDetails;

