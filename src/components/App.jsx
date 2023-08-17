// import { fetchTrendingMovies } from 'services/api';
import HomePage from 'pages/HomePage';
import { Route, Routes, NavLink } from 'react-router-dom';

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
        </Routes>
      </main>
    </div>
  );
};
