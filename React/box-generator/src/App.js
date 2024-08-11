<<<<<<< HEAD
import { useState } from 'react'
import './App.css';
import Form from './components/Form';

function App() {
  const [boxes, setBoxes] = useState([]);
  
=======
import React, { useState } from 'react'
import './App.css';
import Form from './components/boxGeneratoor';

function App() {
  const [boxes, setBoxes] = useState([]);

>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
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