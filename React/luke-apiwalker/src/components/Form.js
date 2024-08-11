import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
<<<<<<< HEAD
  const [search, setSearch] = useState('people');
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  const handleTypeChange = (event) => {
    setSearch(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
=======
  const [searchType, setSearchType] = useState('people'); // Default to 'people'
  const [searchId, setSearchId] = useState('');
  const navigate = useNavigate();

  const handleTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleIdChange = (event) => {
    setSearchId(event.target.value);
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
  };

  const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD
      navigate(`/${search}/${id}`);
=======
      navigate(`/${searchType}/${searchId}`);
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
<<<<<<< HEAD
        <label htmlFor="Search" className="form-label">Search for:</label>
        <select
          name="Search"
          className="form-select"
          value={search}
=======
        <label htmlFor="searchType" className="form-label">Search for:</label>
        <select
          name="searchType"
          className="form-select"
          value={searchType}
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
          onChange={handleTypeChange}
        >
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
      </div>
      <div className="mb-3">
<<<<<<< HEAD
        <label htmlFor="id" className="form-label">ID:</label>
        <input
          type="text"
          className="form-control"
          value={id}
=======
        <label htmlFor="searchId" className="form-label">ID:</label>
        <input
          type="text"
          className="form-control"
          value={searchId}
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
          onChange={handleIdChange}
        />
      </div>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  );
};

export default Form;
