import React, { useState, useEffect } from 'react';

const Message = ({ user, socket }) => {
  const [text, setText] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const handleMessage = (message) => {
      setChat((prevChat) => [...prevChat, message]);
    };

    socket.on('message', handleMessage);

    return () => {
      socket.off('message', handleMessage);
    };
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      socket.emit('message', { sender: user, message: text });
      setText(""); // Clear the input field after sending
    }
  };

    return (
      <div className="App container mt-4">
        <div className="chat-box mb-4 p-3 border rounded" style={{ height: '300px', overflowY: 'scroll' }}>
          {chat.map((mess, idx) => (
            <div
              key={idx}
              className={`chat-message mb-2 ${mess.sender === 'You' ? 'sent' : 'received'}`}
            >
              <strong className="d-block">{mess.sender}</strong>
              <p className="mb-0">{mess.message}</p>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              type="text"
              className="form-control mr-2"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type a message..."
            />
            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    );
  };

export default Message;
