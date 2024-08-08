import React, { useState } from 'react'
import axios from 'axios' ; 

const ProductForm = ({addProduct}) => {
    const [title,setTitle]= useState('') ; 
    const [price,setPrice] = useState(0) ; 
    const [description,setDesc] = useState('') ; 

    const handleSubmit = (e) => {
        e.preventDefault() ;
        axios.post("http://localhost:8000/api/products",{
            title,
            price,
            description})
        .then(res => {
            addProduct(res.data.product)
            console.log(res.data)})
        .catch(err => console.log(err)) ; 
        setTitle('') ;
        setPrice(0);
        setDesc('') ; 
    }


  return (
    <>
            <h2 className='text-center'>Product Manager</h2>
            <div className='my-5 d-flex justify-content-center'>
        <form  onSubmit={handleSubmit}>
            <table className='table'>
                <tbody>
                    <tr> 
                        <td> <label htmlFor="">Title:</label></td>
                        <td> <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/> </td>
                    </tr>
                    <tr> 
                        <td> <label htmlFor="">Price:</label></td>
                        <td> <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} /> </td>
                    </tr>
                    <tr> 
                        <td> <label htmlFor="">Description:</label></td>
                        <td> <input type="text" value={description} onChange={(e) => setDesc(e.target.value)} /> </td>
                    </tr>
                    <tr> 
                        <td> </td>
                        <td> <input className='btn btn-outline-warning' type="submit" value="Create" /> </td>
                    </tr>
                </tbody>
            </table>
        </form>     
    </div>
</>
  )
}
export default ProductForm