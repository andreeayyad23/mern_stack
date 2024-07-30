import React from 'react';
import { useState } from "react";
import './App.css';
import BoxGeneratoor from './components/boxGeneratoor';
import Box from './components/boxDisplay';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
      setBoxes([newBox, ...boxes]);
  };

  return (
      <div className="App">
          <BoxGeneratoor addBox={addBox} />

          {boxes.map((box, index) => (
              <Box key={index} size={box.size} color={box.color} />
          ))}
      </div>
  );
}

export default App;
