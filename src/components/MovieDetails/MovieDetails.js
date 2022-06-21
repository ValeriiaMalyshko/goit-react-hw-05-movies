import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link, useParams, Routes, Route } from 'react-router-dom';
import { Movie } from 'services/API';

const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/Cast'));

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
        <p>
          {genres.map(({ name }) => (
            <span key={name}>{name} </span>
          ))}
        </p>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<h1>Loading</h1>}>
          <Routes>
            <Route path="cast" element={<Cast id={movieId} />} />
            <Route path="reviews" element={<Reviews id={movieId} />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}
