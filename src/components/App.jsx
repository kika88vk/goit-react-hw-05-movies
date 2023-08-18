import HomePage from 'pages/HomePage';
import { Route, Routes, NavLink } from 'react-router-dom';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};
