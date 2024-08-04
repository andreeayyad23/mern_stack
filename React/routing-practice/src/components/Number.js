import React from 'react'
import { useParams } from 'react-router-dom'
const Number = () => {
    const {number} = useParams();

      if (isNaN(number)) {
        return (<p>The Word is: {number}</p>)
      }
      return (<p>The number is: {number}</p>)
  
}

export default Number
