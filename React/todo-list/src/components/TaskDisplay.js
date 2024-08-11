import React from 'react';

const TaskDisplay = ({ text, completed, onDelete, onChange }) => {
  return (
    <div className="d-flex align-items-center mb-2">
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={onChange} 
        className="me-2"
      />
      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text} 
      </p>
      <button onClick={onDelete} className="btn btn-danger btn-sm ms-2"> Delete </button>
    </div>
  );
};

export default TaskDisplay;