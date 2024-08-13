import React, { useState } from 'react';
const UserForm = ({ changeUser, socket }) => {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim()) {
      changeUser(name);
      socket.emit("new-client-logon", {
        sender: "server",
        time: new Date(),
        message: `${name} has joined the chat`
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Mern Chat</h5>
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                  Join Chat
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UserForm;
