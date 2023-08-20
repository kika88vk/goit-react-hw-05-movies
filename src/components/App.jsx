import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { StyledNavLink } from './App.styled';
import { WrapNavStyled } from './App.styled';

const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <div>
      <header>
        <WrapNavStyled>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </WrapNavStyled>
      </header>
      <main>
        <Suspense fallback={<RotatingLines />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
