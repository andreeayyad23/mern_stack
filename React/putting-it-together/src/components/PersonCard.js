import React, { useState } from 'react';
import styles from './CSS/PersonCard.module.css';
const PersonCard = (props) => {
    const [age, setAge] = useState (props.age); 

    const handleClick = () => setAge(age +1);

    return (
        <div>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button className={styles.pd} onClick={handleClick}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;