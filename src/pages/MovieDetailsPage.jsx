import { fetchMovieDetails } from 'services/api';
import { RotatingLines } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieID } = useParams();
  const [movieObject, setMovieObject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieID) {
      return;
    }

    async function fetchMovieObject() {
      try {
        setIsLoading(true);
        const movieDetails = await fetchMovieDetails(movieID);
        setMovieObject(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieObject();
  }, [movieID]);

  return (
    <div>
      <button type="button">Go back</button>
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
      {movieObject !== null && (
        <div>
          <img alt={movieObject.poster_path}>{movieObject.poster_path}</img>
          <h2>{movieObject.original_title}</h2>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
