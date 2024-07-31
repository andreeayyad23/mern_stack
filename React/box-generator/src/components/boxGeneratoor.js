import React, { useState } from 'react';

const Form = ({newBox}) => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState(200);

  const handleSubmit = (e) => {
    e.preventDefault();

    newBox({ color, size });
    setColor('');
    setSize(200);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

  

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color</label>
                <input type="text" value={color} onChange={handleColorChange}
                />
            </div>
            <div>
                <label>Size</label>
                <input type="number" value={size} onChange={handleSizeChange}
                />
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;
