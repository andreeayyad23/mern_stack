import React, { useState } from "react";

const BoxGenerator = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(100);

    const addBox = (e) => {
        e.preventDefault();

        const newBox = {
            size: size,
            color: color,
        };

        props.addBox(newBox);

        setColor("");
        setSize(100);
    };

  return (
    <>
    <h1>Box Generator:</h1>
      <form onSubmit={addBox}>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" value="color">Color</span>
          </div>
          <input type="text" className="form-control test" value={color} onChange={(e) => setColor(e.target.value)}/>
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
              <span className="input-group-text">Size</span>
                </div>
                <input type="number" className="form-control test" value={size} onChange={(e) => setSize(e.target.value)}
                />
                </div>
          <button type="submit" className="btn btn-danger">Add</button>
      </form>
    </>
  );
};


export default BoxGenerator;
