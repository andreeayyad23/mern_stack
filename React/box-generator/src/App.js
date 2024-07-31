import React, { useState } from 'react'
import './App.css';
import Form from './components/boxGeneratoor';

function App() {
  const [boxes, setBoxes] = useState([]);

  function addBoxs(newBox) {
    setBoxes([...boxes, newBox])
  }
  
  return (
    <div className="App">
      <Form addBox={addBoxs}/>
      <div style={{display:"flex"}}>
        {
          boxes.map((box, i) => {
            return <div key={i} style={{ backgroundColor: box.color, 
            width: box.size+"px", 
            height: box.size+"px", 
            marginRight: 10,}}>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;