import React, { useState } from 'react';

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setCurrentMsg(msg);
        setMsg("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
                <textarea id="message" rows="4" className="form-control" onChange={(e) => setMsg(e.target.value)} 
                value={msg} placeholder='Insert Your Message'
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
};

export default MessageForm;