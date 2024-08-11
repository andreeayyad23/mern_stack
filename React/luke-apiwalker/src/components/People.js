import axios from "axios";
import React,{useState , useEffect } from "react";
import { useParams } from "react-router-dom";


const People =()=>{
    const {id} = useParams();
    const [people , setPeople] = useState({});
    const [error, setError] = useState(""); 

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{
            console.log(response)
            setPeople(response.data)

        })
        .catch(err => {
            setError(err);
          });
      }, [id]);
    
    
      if (error) {
        return (
          <div>
            <p>Error: These aren't the droids you're looking for</p>
            <img src="https://ew.com/thmb/D8L25vbrQ405gamnnh_L17RPGIk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/revenge-of-the-sith-2000-8a98ad56e8834130969bddf9350671c7.jpg" alt="Error" style={{ width: '300px', height: 'auto' }} /> {/* Display error image */}
          </div>
        );
      }

    return(
        <>
        <h1>{people.name}</h1>
        <p>Height: {people.height}</p>
        <p>Mass: {people.mass}</p>
        <p>Hair Color: {people.hair_color}</p>
        <p>Skin Color: {people.skin_color}</p>
        </>
    )
}

export default People;