import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import axios from 'axios'

const Main = () => {
    const [products,setProducts] = useState([]) 
    const [load,setLoad] = useState(false)


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

  return (
    <div>
      <ProductForm addProduct={addProduct}/>
    </div>
  )
}

export default Main