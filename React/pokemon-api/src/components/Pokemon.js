import React, { useState } from 'react'


export default function Pokemon() {
    const [Pokemons , setPokemons] = useState([]);



    const DisplayPokemon = () => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => {
        return response.json();

      }).then(data => {
        setPokemons(data.results.map(pokemon => pokemon.name));


    }).catch(err=>{
          console.log(err);
      });
    }






  return (


    <div>
        <button onClick={DisplayPokemon}>Fetch Pokemon</button>

            <ul>
                { Pokemons.map( (pokemon, i) => 
                    <li key={ i }>{ pokemon }</li> ) }
            </ul>
        </div>

    ); 

  

    

};