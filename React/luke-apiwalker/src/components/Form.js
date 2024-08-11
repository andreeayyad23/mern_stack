import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [search, setSearch] = useState('people');
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  const handleTypeChange = (event) => {
    setSearch(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      navigate(`/${search}/${id}`);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="Search" className="form-label">Search for:</label>
        <select
          name="Search"
          className="form-select"
          value={search}
          onChange={handleTypeChange}
        >
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">ID:</label>
        <input
          type="text"
          className="form-control"
          value={id}
          onChange={handleIdChange}
        />
      </div>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  );
};

export default Form;
