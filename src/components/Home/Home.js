import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoviesList } from 'services/API';
import s from './Home.module.css';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    MoviesList().then(({ results }) => setMovies(results));
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      {movies && (
        <ul className={s.list}>
          {movies.map(({ id, title, name }) => (
            <li key={id} className={s.link}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title ?? name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
