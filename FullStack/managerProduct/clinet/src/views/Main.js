import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import axios from 'axios'
import ProductList from '../components/ProductList'
import ProductDetails from './ProductDetails'

const Main = () => {
    const [products, setProducts] = useState([]) 
    const [load, setLoad] = useState(false)


    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res.data.products); 
            setProducts(res.data.products);
            setLoad(true);
            
        })
        .catch(err => console.log(err)) ; 
    },[])

    const addProduct = (newProduct) => {
        setProducts([...products,newProduct]) ; 
    }

<<<<<<< HEAD
    const removeFromDom = productId => {
      setProducts(products.filter(product => product._id !== productId));
  }
=======
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f

  return (
    <div>
      <ProductForm addProduct={addProduct}/>
<<<<<<< HEAD
      <hr/>
      {load && <ProductList products={products} removeFromDom={removeFromDom}/>}
=======
      {load && <ProductList products={products}/>}
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
      <ProductDetails/>
    </div>
  )
}

export default Main