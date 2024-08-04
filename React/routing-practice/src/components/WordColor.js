import React from 'react'
import { useParams } from 'react-router-dom'

const WordColor = () => {
    const {textcolor, backcolor, word} = useParams();

  if (!isNaN(word)) {
    return {word};
  }

  const styling = {
    color: textcolor,
    backgroundColor: backcolor,
    padding: "3rem",
};

return (
    <p style={styling}>
        The word is: {word}!
    </p>
);

}

export default WordColor
