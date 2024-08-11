import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD

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
=======
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';

function App() {
    const [currentMsg, setCurrentMsg] = useState([]);
    
    const handleDelete = (index) => {
        const newMessages = [
            ...currentMsg.slice(0, index),
            ...currentMsg.slice(index + 1)
        ];
        setCurrentMsg(newMessages);
    };
    

    const CompleteMessage = (index) => {
        const newTasks = [...currentMsg];
        newTasks[index] = {
            ...newTasks[index],
            completed: !newTasks[index].completed
        };
        setCurrentMsg(newTasks);
    };

    const addNewTask = (message) => {
        setCurrentMsg([...currentMsg, { text: message, completed: false }]);
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
    };

    return (
        <>
<<<<<<< HEAD
            <TaskForm newTask={addNewTask} />
            {currentTasks.map((task, index) => (
                <TaskDisplay key={index} text={task.text} completed={task.completed}
                onDelete={() => handleDelete(index)} 
                onChange={() => completeTask(index)}
=======
            <MessageForm setCurrentMsg={addNewTask} />
            {currentMsg.map((msg, index) => (
                <MessageDisplay key={index} text={msg.text} completed={msg.completed}
                onDeleting={() => handleDelete(index)} 
                onChanging={() => CompleteMessage(index)}
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
                />
            ))}
        </>
    );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
