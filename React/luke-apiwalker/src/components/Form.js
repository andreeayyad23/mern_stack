import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [searchType, setSearchType] = useState('people'); // Default to 'people'
  const [searchId, setSearchId] = useState('');
  const navigate = useNavigate();

  const handleTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleIdChange = (event) => {
    setSearchId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      navigate(`/${searchType}/${searchId}`);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="searchType" className="form-label">Search for:</label>
        <select
          name="searchType"
          className="form-select"
          value={searchType}
          onChange={handleTypeChange}
        >
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="searchId" className="form-label">ID:</label>
        <input
          type="text"
          className="form-control"
          value={searchId}
          onChange={handleIdChange}
        />
      </div>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  );
};

export default Form;
