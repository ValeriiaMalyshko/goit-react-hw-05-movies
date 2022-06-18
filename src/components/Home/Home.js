import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoviesList } from 'services/API';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    MoviesList().then(({ results }) => setMovies(results));
  }, []);
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
