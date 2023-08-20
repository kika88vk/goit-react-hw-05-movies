import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { RotatingLines } from 'react-loader-spinner';
import MoviesTrendingList from 'components/MoviesTrendingList/MoviesTrendingList';
import { Heading, WrapMoviesList } from './HomePage.styled';

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
      <Heading>Trending today</Heading>
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
      <WrapMoviesList>
        <MoviesTrendingList movieList={movies} />
      </WrapMoviesList>
    </div>
  );
};

export default HomePage;
