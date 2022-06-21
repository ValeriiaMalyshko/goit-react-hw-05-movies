import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MoviesSearch } from 'services/API';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery) {
      MoviesSearch(searchQuery).then(({ results }) => setMovies(results));
    }
  });

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = query.trim().toLocaleLowerCase();

    if (searchQuery === '') {
      alert('Please, enter a movie title');
      return;
    }
    setSearchParams({ query: searchQuery });

    MoviesSearch(searchQuery).then(({ results }) => setMovies(results));
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search film"
          value={query}
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
