import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const NewAuthor = props => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", {
            name
        })
            .then(res => navigate("/"))
            .catch(err => {
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });          
    }

    return (
        <div className="container mt-4">

<button className="btn btn-primary mb-3" onClick={() => navigate("/")}>Home</button>
<form onSubmit={onSubmitHandler}>
                    {errors.length > 0 && (
                        <div className="alert alert-danger">
                            {errors.map((err, index) => <p key={index}>{err}</p>)}
                        </div>
                    )}
                    <div className="mb-3">
                        <label htmlFor="authorName" className="form-label">Author</label>
                        <input
                            id="authorName"
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <input type="submit" className="btn btn-success" value="Create"></input>
            </form>
            
        </div>
    )
}

export default NewAuthor