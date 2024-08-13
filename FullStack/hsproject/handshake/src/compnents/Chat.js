import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  const [socket, setSocket] = useState([]);

  useEffect(() => {
    // Initialize the socket connection
    const socketIo = io(':8000');
    setSocket(socketIo);

    // Set up event listener
    socketIo.on('send_data_to_all', data => console.log(data));

    // Cleanup function
    return () => {
      socketIo.removeAllListeners();
    };
  }, []);

  return (
    <div className="App">
      <h1>Socket Test</h1>
    </div>
  );
}

export default App;
