import { Routes, Route } from 'react-router-dom';
import React from 'react';
// import Navigation from './Navigation';
// import Movies from './Movies/Movies';
import Home from './Home/Home';
// import MovieDetails from './MovieDetails/MovieDetails';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
