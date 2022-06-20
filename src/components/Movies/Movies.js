import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MoviesSearch } from 'services/API';
// import s from './Searchbar.module.css';

export default function Movies({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesSearch(searchQuery).then(({ results }) => setMovies(results));
  }, []);

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = searchQuery.trim();

    if (query === '') {
      return Notify.warning('Please, fill the main field');
    }
    onSubmit(query);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search film"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
}

Movies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
