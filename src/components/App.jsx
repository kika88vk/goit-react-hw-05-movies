import HomePage from 'pages/HomePage';
import { Route, Routes, NavLink } from 'react-router-dom';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import MoviesPage from 'pages/MoviesPage';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </main>
    </div>
  );
};
