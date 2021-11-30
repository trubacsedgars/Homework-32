import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import JokesList from './pages/JokesList';
import JokeCategory from './pages/JokeCategory';
import JokeInfo from './pages/JokeInfo';
import NotFound from './pages/NotFound';

const App = () => (

  <div>
    <Routes>
      <Route path="/" element={<JokeCategory />} />
      <Route path="/jokes" element={<JokeCategory />} />
      <Route path="/jokes/:category" element={<JokesList />} />
      <Route path="/jokes/:category/:id" element={<JokeInfo />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
