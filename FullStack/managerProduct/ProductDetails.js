import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

    
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
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <div>
                  <Link to={"/"+product._id+"/edit"} className="btn btn-primary mx-2">Edit</Link>
                  <Link to="/" className="btn btn-secondary mx-2">Back</Link>
              </div>
          </div>
      </div>
    );
}
    
export default ProductDetails;

