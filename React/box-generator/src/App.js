import React, { useState } from 'react'
import './App.css';
import Form from './components/boxGeneratoor';

function App() {
  const [boxes, setBoxes] = useState([]);

  function newBox(newBox) {
    setBoxes([...boxes, newBox])
  }
  
  return (
    <div className="App">
      <Form newBox={newBox}/>
      <div style={{display:"flex"}}>
        {
          boxes.map((box, i) => {
            return <div key={i} style={{ backgroundColor: box.color, width: box.size+"px", height: box.size+"px", marginRight: 10,}}>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;