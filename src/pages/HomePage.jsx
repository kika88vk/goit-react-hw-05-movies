import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { RotatingLines } from 'react-loader-spinner';
import MoviesTrendingList from 'components/MoviesTrendingList/MoviesTrendingList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        setIsLoading(true);
        const moviesFetch = await fetchTrendingMovies();
        setMovies(moviesFetch.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error !== null && <p>Oops, something went wrong. please, try later</p>}
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      <MoviesTrendingList movieList={movies} />
    </div>
  );
};

export default HomePage;
