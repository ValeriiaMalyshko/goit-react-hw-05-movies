import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Movie } from 'services/API';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    Movie(movieId).then(setMovie);
  }, [movieId]);

  if (movie) {
    const { poster_path, genres, title, overview, release_date } = movie;

    const pictureUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (
      <div key={movieId}>
        <div>
          <img src={pictureUrl} alt={title} />
        </div>
        <h5>
          {title} ({release_date})
        </h5>
        <h5>Overview</h5>
        <p>{overview}</p>
        <h5>Genres</h5>
        <p>{genres}</p>
        <ul>
          <li>
            <Link to={`/movies/:${movieId}/cast/`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/:${movieId}/reviews/`}>Reviews</Link>
          </li>
        </ul>
      </div>
    );
  }
}
