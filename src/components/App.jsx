import { Routes, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
// import Navigation from './Navigation';
import Movies from './Movies/Movies';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
        </Route>
      </Routes>
    </>
  );
}
