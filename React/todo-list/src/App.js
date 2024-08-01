import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
    };

    return (
        <>
            <MessageForm setCurrentMsg={addNewTask} />
            {currentMsg.map((msg, index) => (
                <MessageDisplay key={index} text={msg.text} completed={msg.completed}
                onDeleting={() => handleDelete(index)} 
                onChanging={() => CompleteMessage(index)}
                />
            ))}
        </>
    );
}

export default App;
