import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { MoviesSearch } from 'services/API';
import s from './Movies.module.css';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

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
    <header className={s.Container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search film"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>
          <span>Search</span>
        </button>
      </form>
      {movies && (
        <ul className={s.list}>
          {movies.map(({ id, title }) => (
            <li key={id} className={s.link}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
