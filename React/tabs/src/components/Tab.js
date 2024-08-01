import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowTabs = () => {
    const taps = ["Tab 1", "Tab 2", "Tab 3"];
    const [msg, setMsg] = useState("");

    const clickHandler = (value) => {
        setMsg(value + "content is showing here");
    };

    return (
        <div className="container mt-4">
            <div className="btn-group">
                {taps.map((item, i) => (
                    <button key={i} className="btn btn-primary me-2" onClick={() => clickHandler(item)}> 
                    {item}
                    </button> ))}
            </div>

            <p className="mt-3">{msg}</p>
        </div>
    );
};

export default ShowTabs;
