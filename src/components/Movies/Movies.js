import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MoviesSearch } from 'services/API';

export default function Movies({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('searchQuery');
    if (query) {
      MoviesSearch(query).then(({ results }) => setMovies(results));
    }
  });

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = searchQuery.trim().toLocaleLowerCase();

    if (query === '') {
      alert('Please, enter a movie title');
      return;
    }

    setSearchParams({ searchQuery: query });
    MoviesSearch(query).then(({ results }) => setMovies(results));

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
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

Movies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
