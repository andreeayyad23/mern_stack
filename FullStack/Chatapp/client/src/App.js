import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Main.css'
import UserForm from './components/UserForm';
import Message from './components/Message'; 

function App() {
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io(':8000');
    setSocket(socketInstance);


    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const changeUser = (name) => {
    setUser(name);
  };

  return (
    <div className="App">
      {!user ? (
        <UserForm changeUser={changeUser} socket={socket} />
      ) : (
        <Message user={user} socket={socket} />
      )}
    </div>
  );
}

export default App;
