import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  Link,
  useParams,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { Movie } from 'services/API';
import NoPoster from './no-poster.jpg';
import s from './MovieDetails.module.css';

const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/Cast'));

export default function MovieDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    Movie(movieId).then(setMovie);
  }, [movieId]);

  const handleClickGoBack = () => {
    if (
      location.pathname.includes('cast') ||
      location.pathname.includes('reviews') ||
      location?.state?.from?.search
    ) {
      return navigate(
        location.state.from.pathname + location.state.from.search
      );
    }
    navigate('/');
  };

  if (movie) {
    const { poster_path, genres, title, overview, release_date, vote_average } =
      movie;

    const pictureUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (
      <>
        <button
          type="button"
          className={s.Button}
          onClick={() => handleClickGoBack()}
        >
          Go back
        </button>

        <div key={movieId} className={s.Container}>
          <div>
            {poster_path ? (
              <img src={pictureUrl} alt={title} />
            ) : (
              <img src={NoPoster} alt="Uknown" />
            )}
          </div>
          <h5>
            {title} ({release_date?.split('-')[0]})
          </h5>
          <p>User Score: {vote_average * 10}%</p>
          <h5>Overview</h5>
          <p>{overview}</p>
          <h5>Genres</h5>
          <p>
            {genres.map(({ name }) => (
              <span key={name}>{name} </span>
            ))}
          </p>
          <h5>Additional information</h5>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<h1>Loading</h1>}>
            <Routes>
              <Route path="cast" element={<Cast id={movieId} />} />
              <Route path="reviews" element={<Reviews id={movieId} />} />
            </Routes>
          </Suspense>
        </div>
      </>
    );
  }
}
