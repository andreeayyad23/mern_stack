import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import TaskDisplay from './components/TaskDisplay';
import TaskForm from './components/TaskForm';

function App() {
    const [currentTasks, setCurrentTasks] = useState([]);
    
    const handleDelete = (index) => {
        const newTasks = [
            ...currentTasks.slice(0, index),
            ...currentTasks.slice(index + 1)
        ];
        setCurrentTasks(newTasks);
    };
    

    const completeTask = (index) => {
        const newTasks = [...currentTasks];
        newTasks.forEach((task, i) => {
          if (i === index) {
            task.completed = !task.completed;
          }
        });

        setCurrentTasks(newTasks);
      };


    const addNewTask = (task) => {
        setCurrentTasks([...currentTasks, { text: task, completed: false }]);
    };

    return (
        <>
            <TaskForm newTask={addNewTask} />
            {currentTasks.map((task, index) => (
                <TaskDisplay key={index} text={task.text} completed={task.completed}
                onDelete={() => handleDelete(index)} 
                onChange={() => completeTask(index)}
                />
            ))}
        </>
    );
}

export default App;