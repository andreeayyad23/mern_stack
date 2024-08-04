import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Planet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState("");
  const [error, setError] = useState(""); 
  useEffect(() => {

    axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(response => {
        setPlanet(response.data);
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


  return (
    <>
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Population: {planet.population}</p>
    </>
  );
}

export default Planet;
