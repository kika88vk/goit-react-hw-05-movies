import { fetchMovieCredits } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function movieCast() {
      try {
        setIsLoading(true);
        const fetchCast = await fetchMovieCredits(movieId);
        setCast(fetchCast.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    movieCast();
  }, [movieId]);
  console.log('cast', cast);
  return (
    <div>
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
      {cast !== null && (
        <div>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  alt={actor.name}
                  src={`http://image.tmdb.org/t/p/w185${actor.profile_path}`}
                />
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cast;
