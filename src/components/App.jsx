import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navigation from './Navigation';
import Movies from './Movies/Movies';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}
