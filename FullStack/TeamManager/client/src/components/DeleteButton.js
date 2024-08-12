import React from 'react'
import axios from 'axios';

const DeleteButton =     props => {

    const { playerId, successCallback } = props;
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className='btn btn-danger' onClick={deletePerson}>
            Delete
        </button>
    )
}

export default DeleteButton;