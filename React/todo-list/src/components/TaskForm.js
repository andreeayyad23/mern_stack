import React, { useState } from 'react';

const TaskForm = (props) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.newTask(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
                <textarea id="task" rows="4" className="form-control" onChange={(e) => setTask(e.target.value)} 
                value={task} placeholder='Insert Your Task'
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
};

export default TaskForm;