import React from 'react';

const MessageDisplay = ({ text, completed, onDeleting, onChanging }) => {
    return (
        <div className="d-flex align-items-center mb-2">
            <input type="checkbox" checked={completed} onChange={onChanging} 
                className="me-2"
            />
            <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {text} 
            </p>
            <button onClick={onDeleting} className="btn btn-danger btn-sm ms-2"> Delete </button>

        </div>
    );
};

export default MessageDisplay;
