import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Movie } from 'services/API';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [state, setState] = useState(null);
  useEffect(() => {
    Movie(movieId).then(setState);
  }, [movieId]);

  return (
    <div>
      {state.map(({ genre, poster_path, title, overview, release_date }) => (
        <div key={movieId}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          </div>
          <h5>
            {title} ({release_date})
          </h5>
          <h5>Overview</h5>
          <p>{overview}</p>
          <h5>Genres</h5>
          <p>{genre}</p>
          <ul>
            <li>
              <Link to={`/movies/:${movieId}/cast/`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/:${movieId}/reviews/`}>Reviews</Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
